import { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  AlertTriangle,
  Check,
  CheckCircle2,
  Copy,
  MessageCircle,
  Phone,
  X,
} from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicContent';
import { useModalAccessibility } from '../hooks/useModalAccessibility';
import {
  BranchId,
  ClinicDictionary,
  SpecialtyId,
} from '../types/clinic';

export interface BookingPrefill {
  branchId?: BranchId;
  specialtyId?: SpecialtyId;
  doctorId?: string;
}

interface BookingModalProps {
  isOpen: boolean;
  prefill: BookingPrefill;
  content: ClinicDictionary;
  restoreFocusOnClose?: boolean;
  onClose: () => void;
}

interface PreparedInquiry {
  patientName: string;
  phone: string;
  branchLabel: string;
  specialtyTitle: string;
  doctorName: string | null;
  date: string;
  notes: string;
}

interface FormErrors {
  patientName?: string;
  phone?: string;
  branch?: string;
  specialty?: string;
  date?: string;
  notes?: string;
}

const MAX_NOTES_LENGTH = 300;

function getLocalTodayIso(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function BookingModal({
  isOpen,
  prefill,
  content,
  restoreFocusOnClose = true,
  onClose,
}: BookingModalProps) {
  const todayIso = useMemo(() => getLocalTodayIso(), []);

  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [branchId, setBranchId] = useState<BranchId>(
    () => prefill.branchId ?? 'downtown-dubai'
  );
  const [specialtyId, setSpecialtyId] = useState<SpecialtyId>(
    () => prefill.specialtyId ?? 'dermatology'
  );
  const [doctorId, setDoctorId] = useState<string>(() => {
    const initBranch = prefill.branchId ?? 'downtown-dubai';
    const initSpec = prefill.specialtyId ?? 'dermatology';
    const valid =
      prefill.doctorId &&
      content.doctors.items.some(
        (d) =>
          d.id === prefill.doctorId &&
          d.specialtyId === initSpec &&
          d.branchId === initBranch
      );
    return valid ? (prefill.doctorId as string) : 'any';
  });
  const [date, setDate] = useState<string>(todayIso);
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [preparedInquiry, setPreparedInquiry] = useState<PreparedInquiry | null>(null);
  const [copied, setCopied] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const clearSensitiveState = useCallback(() => {
    setPatientName('');
    setPhone('');
    setNotes('');
    setErrors({});
    setPreparedInquiry(null);
    setCopied(false);
  }, []);

  const handleClose = useCallback(() => {
    clearSensitiveState();
    onClose();
  }, [clearSensitiveState, onClose]);

  useModalAccessibility({
    isOpen,
    onClose: handleClose,
    containerRef: modalRef,
    initialFocusRef: closeBtnRef,
    restoreFocus: restoreFocusOnClose,
  });

  // Wipe state on unmount for strict privacy hygiene
  useEffect(() => {
    return () => {
      clearSensitiveState();
    };
  }, [clearSensitiveState]);

  // Dynamic doctor matching strictly constrained to both specialty and branch
  const compatibleDoctors = useMemo(() => {
    return content.doctors.items.filter(
      (doc) => doc.specialtyId === specialtyId && doc.branchId === branchId
    );
  }, [content.doctors.items, specialtyId, branchId]);

  const handleBranchChange = (nextBranch: BranchId) => {
    setBranchId(nextBranch);
    setErrors((prev) => ({ ...prev, branch: undefined }));
    const nextCompatible = content.doctors.items.filter(
      (doc) => doc.specialtyId === specialtyId && doc.branchId === nextBranch
    );
    if (doctorId !== 'any' && !nextCompatible.some((d) => d.id === doctorId)) {
      setDoctorId('any');
    }
  };

  const handleSpecialtyChange = (nextSpecialty: SpecialtyId) => {
    setSpecialtyId(nextSpecialty);
    setErrors((prev) => ({ ...prev, specialty: undefined }));
    const nextCompatible = content.doctors.items.filter(
      (doc) => doc.specialtyId === nextSpecialty && doc.branchId === branchId
    );
    if (doctorId !== 'any' && !nextCompatible.some((d) => d.id === doctorId)) {
      setDoctorId('any');
    }
  };

  const whatsappMessage = useMemo(() => {
    if (!preparedInquiry) return '';
    const tpl = content.booking.whatsappTemplate;
    const lines: string[] = [
      tpl.greeting,
      tpl.intro,
      '',
      `${tpl.patientLabel}: ${preparedInquiry.patientName}`,
      `${tpl.phoneLabel}: ${preparedInquiry.phone}`,
      `${tpl.branchLabel}: ${preparedInquiry.branchLabel}`,
      `${tpl.specialtyLabel}: ${preparedInquiry.specialtyTitle}`,
    ];

    if (preparedInquiry.doctorName) {
      lines.push(`${tpl.doctorLabel}: ${preparedInquiry.doctorName}`);
    }

    lines.push(`${tpl.dateLabel}: ${preparedInquiry.date}`);

    if (preparedInquiry.notes) {
      lines.push(`${tpl.notesLabel}: ${preparedInquiry.notes}`);
    }

    return lines.join('\n');
  }, [preparedInquiry, content.booking.whatsappTemplate]);

  const whatsappUrl = useMemo(() => {
    if (!whatsappMessage) return CLINIC_CONTACT.whatsappBaseUrl;
    return `${CLINIC_CONTACT.whatsappBaseUrl}?text=${encodeURIComponent(whatsappMessage)}`;
  }, [whatsappMessage]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors: FormErrors = {};

    const cleanName = patientName.trim();
    if (cleanName.length < 2) {
      nextErrors.patientName = content.booking.errors.nameRequired;
    }

    const cleanPhone = phone.trim();
    const digitsOnly = cleanPhone.replace(/\D/g, '');
    if (!cleanPhone) {
      nextErrors.phone = content.booking.errors.phoneRequired;
    } else if (digitsOnly.length < 8 || digitsOnly.length > 15) {
      nextErrors.phone = content.booking.errors.phoneInvalid;
    }

    const branchObj = content.branches.items.find((b) => b.id === branchId);
    if (!branchObj) {
      nextErrors.branch = content.booking.errors.branchRequired;
    }

    const specialtyObj = content.specialties.items.find((s) => s.id === specialtyId);
    if (!specialtyObj) {
      nextErrors.specialty = content.booking.errors.specialtyRequired;
    }

    if (!date) {
      nextErrors.date = content.booking.errors.dateRequired;
    } else if (date < todayIso) {
      nextErrors.date = content.booking.errors.datePast;
    }

    const cleanNotes = notes.trim();
    if (cleanNotes.length > MAX_NOTES_LENGTH) {
      nextErrors.notes = content.booking.errors.notesTooLong;
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const selectedDoctorObj = compatibleDoctors.find((d) => d.id === doctorId);

    setPreparedInquiry({
      patientName: cleanName,
      phone: cleanPhone,
      branchLabel: branchObj ? `${branchObj.city} — ${branchObj.district}` : '',
      specialtyTitle: specialtyObj ? specialtyObj.title : '',
      doctorName: selectedDoctorObj ? selectedDoctorObj.name : null,
      date,
      notes: cleanNotes,
    });
    setCopied(false);
  };

  const handleCopyMessage = async () => {
    if (!whatsappMessage) return;
    try {
      await navigator.clipboard.writeText(whatsappMessage);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      aria-describedby="booking-modal-desc"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#142B45]/55 backdrop-blur-xs"
      onClick={handleClose}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#FFFFFF] border border-[#142B45]/10 shadow-[0_24px_64px_rgba(20,43,69,0.24)] focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 p-6 sm:p-7 border-b border-[#142B45]/10 bg-[#F8F7F3]">
          <div>
            <h3
              id="booking-modal-title"
              className="text-xl sm:text-2xl font-bold text-[#142B45]"
            >
              {preparedInquiry
                ? content.booking.confirmation.title
                : content.booking.title}
            </h3>
            <p
              id="booking-modal-desc"
              className="text-xs sm:text-sm text-[#4B5864] mt-1 leading-relaxed"
            >
              {preparedInquiry
                ? content.booking.confirmation.subtitle
                : content.booking.subtitle}
            </p>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={handleClose}
            aria-label={content.booking.closeLabel}
            className="w-10 h-10 rounded-xl border border-[#142B45]/15 bg-[#FFFFFF] text-[#142B45] flex items-center justify-center hover:border-[#299D96] hover:text-[#21817B] transition-colors shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#299D96]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        {preparedInquiry ? (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#E8F0EB]/75 border border-[#299D96]/30">
              <CheckCircle2
                className="w-5 h-5 text-[#21817B] shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <p className="text-xs sm:text-sm font-medium text-[#142B45] leading-relaxed">
                {content.booking.confirmation.sendNotice}
              </p>
            </div>

            <dl className="divide-y divide-[#142B45]/10 border-t border-b border-[#142B45]/10 text-sm">
              <div className="py-3 flex items-center justify-between gap-4">
                <dt className="text-[#5A6772] shrink-0">
                  {content.booking.confirmation.summaryPatient}
                </dt>
                <dd className="font-semibold text-[#142B45] text-end">
                  {preparedInquiry.patientName}
                </dd>
              </div>
              <div className="py-3 flex items-center justify-between gap-4">
                <dt className="text-[#5A6772] shrink-0">
                  {content.booking.confirmation.summaryPhone}
                </dt>
                <dd
                  dir="ltr"
                  className="font-semibold text-[#142B45] tabular-nums"
                >
                  {preparedInquiry.phone}
                </dd>
              </div>
              <div className="py-3 flex items-center justify-between gap-4">
                <dt className="text-[#5A6772] shrink-0">
                  {content.booking.confirmation.summaryBranch}
                </dt>
                <dd className="font-semibold text-[#142B45] text-end">
                  {preparedInquiry.branchLabel}
                </dd>
              </div>
              <div className="py-3 flex items-center justify-between gap-4">
                <dt className="text-[#5A6772] shrink-0">
                  {content.booking.confirmation.summarySpecialty}
                </dt>
                <dd className="font-semibold text-[#142B45] text-end">
                  {preparedInquiry.specialtyTitle}
                </dd>
              </div>
              {preparedInquiry.doctorName && (
                <div className="py-3 flex items-center justify-between gap-4">
                  <dt className="text-[#5A6772] shrink-0">
                    {content.booking.confirmation.summaryDoctor}
                  </dt>
                  <dd className="font-semibold text-[#142B45] text-end">
                    {preparedInquiry.doctorName}
                  </dd>
                </div>
              )}
              <div className="py-3 flex items-center justify-between gap-4">
                <dt className="text-[#5A6772] shrink-0">
                  {content.booking.confirmation.summaryDate}
                </dt>
                <dd className="font-semibold text-[#142B45] tabular-nums">
                  {preparedInquiry.date}
                </dd>
              </div>
              {preparedInquiry.notes && (
                <div className="py-3 flex items-start justify-between gap-4">
                  <dt className="text-[#5A6772] shrink-0">
                    {content.booking.confirmation.summaryNotes}
                  </dt>
                  <dd className="font-medium text-[#142B45] text-end break-words max-w-xs">
                    {preparedInquiry.notes}
                  </dd>
                </div>
              )}
            </dl>

            {/* Primary Explicit User Action: Open WhatsApp */}
            <div className="space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 min-h-[48px] rounded-xl bg-[#21817B] text-[#FFFFFF] text-sm sm:text-base font-semibold hover:bg-[#1B6B66] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#142B45] focus-visible:ring-offset-2"
              >
                <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span>{content.booking.confirmation.whatsappCta}</span>
              </a>

              {/* Graceful Fallback Options */}
              <div className="rounded-xl bg-[#F8F7F3] border border-[#142B45]/10 p-4 space-y-3">
                <p className="text-xs font-medium text-[#5A6772]">
                  {content.booking.confirmation.fallbackTitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 min-h-[42px] rounded-lg border border-[#142B45]/15 bg-[#FFFFFF] text-[#142B45] text-xs sm:text-sm font-medium hover:border-[#299D96] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#299D96]"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-[#21817B] shrink-0" aria-hidden="true" />
                    ) : (
                      <Copy className="w-4 h-4 text-[#21817B] shrink-0" aria-hidden="true" />
                    )}
                    <span>
                      {copied
                        ? content.booking.confirmation.copiedMessageCta
                        : content.booking.confirmation.copyMessageCta}
                    </span>
                  </button>

                  <a
                    href={`tel:${CLINIC_CONTACT.hotline.replace(/\s+/g, '')}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 min-h-[42px] rounded-lg border border-[#142B45]/15 bg-[#FFFFFF] text-[#142B45] text-xs sm:text-sm font-medium hover:border-[#299D96] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#299D96]"
                  >
                    <Phone className="w-4 h-4 text-[#21817B] shrink-0" aria-hidden="true" />
                    <span dir="ltr" className="tabular-nums">
                      {CLINIC_CONTACT.hotline}
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <button
                type="button"
                onClick={() => setPreparedInquiry(null)}
                className="flex-1 py-3 px-5 min-h-[46px] rounded-xl border border-[#142B45]/15 bg-[#F8F7F3] text-[#142B45] text-sm font-medium hover:border-[#299D96] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#299D96]"
              >
                {content.booking.confirmation.editRequestCta}
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="flex-1 py-3 px-5 min-h-[46px] rounded-xl bg-[#142B45] text-[#FFFFFF] text-sm font-semibold hover:bg-[#1D3B5E] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#299D96]"
              >
                {content.booking.confirmation.doneCta}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="p-6 sm:p-7 space-y-5">
            {/* Patient Name */}
            <div>
              <label
                htmlFor="booking-name"
                className="block text-sm font-medium text-[#142B45] mb-1.5"
              >
                {content.booking.fields.patientName}
              </label>
              <input
                id="booking-name"
                type="text"
                required
                autoComplete="name"
                value={patientName}
                aria-invalid={Boolean(errors.patientName)}
                aria-describedby={errors.patientName ? 'booking-name-error' : undefined}
                onChange={(e) => {
                  setPatientName(e.target.value);
                  if (errors.patientName) {
                    setErrors((prev) => ({ ...prev, patientName: undefined }));
                  }
                }}
                placeholder={content.booking.fields.patientNamePlaceholder}
                className={`w-full px-3.5 py-2.5 min-h-[44px] rounded-xl border bg-[#FFFFFF] text-sm text-[#142B45] placeholder:text-[#77838D] focus:outline-none focus:ring-2 ${
                  errors.patientName
                    ? 'border-red-700 focus:border-red-700 focus:ring-red-700/20'
                    : 'border-[#142B45]/20 focus:border-[#299D96] focus:ring-[#299D96]/20'
                }`}
              />
              {errors.patientName && (
                <p
                  id="booking-name-error"
                  className="flex items-center gap-1.5 text-xs font-medium text-red-700 mt-1.5"
                  role="alert"
                >
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{errors.patientName}</span>
                </p>
              )}
            </div>

            {/* Phone & Branch */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="booking-phone"
                  className="block text-sm font-medium text-[#142B45] mb-1.5"
                >
                  {content.booking.fields.phone}
                </label>
                <input
                  id="booking-phone"
                  type="tel"
                  required
                  dir="ltr"
                  autoComplete="tel"
                  value={phone}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? 'booking-phone-error' : undefined}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (errors.phone) {
                      setErrors((prev) => ({ ...prev, phone: undefined }));
                    }
                  }}
                  placeholder={content.booking.fields.phonePlaceholder}
                  className={`w-full px-3.5 py-2.5 min-h-[44px] rounded-xl border bg-[#FFFFFF] text-sm text-[#142B45] placeholder:text-[#77838D] focus:outline-none focus:ring-2 tabular-nums ${
                    errors.phone
                      ? 'border-red-700 focus:border-red-700 focus:ring-red-700/20'
                      : 'border-[#142B45]/20 focus:border-[#299D96] focus:ring-[#299D96]/20'
                  }`}
                />
                {errors.phone && (
                  <p
                    id="booking-phone-error"
                    className="flex items-center gap-1.5 text-xs font-medium text-red-700 mt-1.5"
                    role="alert"
                  >
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="booking-branch"
                  className="block text-sm font-medium text-[#142B45] mb-1.5"
                >
                  {content.booking.fields.branch}
                </label>
                <select
                  id="booking-branch"
                  required
                  value={branchId}
                  aria-invalid={Boolean(errors.branch)}
                  onChange={(e) => handleBranchChange(e.target.value as BranchId)}
                  className="w-full px-3.5 py-2.5 min-h-[44px] rounded-xl border border-[#142B45]/20 bg-[#FFFFFF] text-sm text-[#142B45] focus:outline-none focus:border-[#299D96] focus:ring-2 focus:ring-[#299D96]/20"
                >
                  {content.branches.items.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.city}
                    </option>
                  ))}
                </select>
                {errors.branch && (
                  <p
                    className="flex items-center gap-1.5 text-xs font-medium text-red-700 mt-1.5"
                    role="alert"
                  >
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.branch}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Specialty & Dynamically Matched Doctor */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="booking-specialty"
                  className="block text-sm font-medium text-[#142B45] mb-1.5"
                >
                  {content.booking.fields.specialty}
                </label>
                <select
                  id="booking-specialty"
                  required
                  value={specialtyId}
                  aria-invalid={Boolean(errors.specialty)}
                  onChange={(e) =>
                    handleSpecialtyChange(e.target.value as SpecialtyId)
                  }
                  className="w-full px-3.5 py-2.5 min-h-[44px] rounded-xl border border-[#142B45]/20 bg-[#FFFFFF] text-sm text-[#142B45] focus:outline-none focus:border-[#299D96] focus:ring-2 focus:ring-[#299D96]/20"
                >
                  {content.specialties.items.map((spec) => (
                    <option key={spec.id} value={spec.id}>
                      {spec.title}
                    </option>
                  ))}
                </select>
                {errors.specialty && (
                  <p
                    className="flex items-center gap-1.5 text-xs font-medium text-red-700 mt-1.5"
                    role="alert"
                  >
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.specialty}</span>
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="booking-doctor"
                  className="block text-sm font-medium text-[#142B45] mb-1.5"
                >
                  {content.booking.fields.doctor}
                </label>
                <select
                  id="booking-doctor"
                  value={doctorId}
                  onChange={(e) => setDoctorId(e.target.value)}
                  className="w-full px-3.5 py-2.5 min-h-[44px] rounded-xl border border-[#142B45]/20 bg-[#FFFFFF] text-sm text-[#142B45] focus:outline-none focus:border-[#299D96] focus:ring-2 focus:ring-[#299D96]/20"
                >
                  <option value="any">{content.booking.fields.anyDoctor}</option>
                  {compatibleDoctors.map((doc) => (
                    <option key={doc.id} value={doc.id}>
                      {doc.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {compatibleDoctors.length === 0 && (
              <p className="text-xs text-[#5A6772] bg-[#F8F7F3] border border-[#142B45]/10 rounded-lg px-3 py-2">
                {content.booking.fields.noBranchDoctorHint}
              </p>
            )}

            {/* Preferred Date */}
            <div>
              <label
                htmlFor="booking-date"
                className="block text-sm font-medium text-[#142B45] mb-1.5"
              >
                {content.booking.fields.date}
              </label>
              <input
                id="booking-date"
                type="date"
                required
                min={todayIso}
                value={date}
                aria-invalid={Boolean(errors.date)}
                aria-describedby={errors.date ? 'booking-date-error' : undefined}
                onChange={(e) => {
                  setDate(e.target.value);
                  if (errors.date) {
                    setErrors((prev) => ({ ...prev, date: undefined }));
                  }
                }}
                className={`w-full px-3.5 py-2.5 min-h-[44px] rounded-xl border bg-[#FFFFFF] text-sm text-[#142B45] focus:outline-none focus:ring-2 tabular-nums ${
                  errors.date
                    ? 'border-red-700 focus:border-red-700 focus:ring-red-700/20'
                    : 'border-[#142B45]/20 focus:border-[#299D96] focus:ring-[#299D96]/20'
                }`}
              />
              {errors.date && (
                <p
                  id="booking-date-error"
                  className="flex items-center gap-1.5 text-xs font-medium text-red-700 mt-1.5"
                  role="alert"
                >
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{errors.date}</span>
                </p>
              )}
            </div>

            {/* Optional Notes */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <label
                  htmlFor="booking-notes"
                  className="block text-sm font-medium text-[#142B45]"
                >
                  {content.booking.fields.notes}
                </label>
                <span className="text-xs text-[#5A6772] tabular-nums">
                  {notes.length}/{MAX_NOTES_LENGTH} {content.booking.fields.notesCounter}
                </span>
              </div>
              <textarea
                id="booking-notes"
                rows={2}
                maxLength={MAX_NOTES_LENGTH}
                value={notes}
                aria-invalid={Boolean(errors.notes)}
                aria-describedby={errors.notes ? 'booking-notes-error' : undefined}
                onChange={(e) => {
                  setNotes(e.target.value);
                  if (errors.notes) {
                    setErrors((prev) => ({ ...prev, notes: undefined }));
                  }
                }}
                placeholder={content.booking.fields.notesPlaceholder}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#142B45]/20 bg-[#FFFFFF] text-sm text-[#142B45] placeholder:text-[#77838D] focus:outline-none focus:border-[#299D96] focus:ring-2 focus:ring-[#299D96]/20 resize-none"
              />
              {errors.notes && (
                <p
                  id="booking-notes-error"
                  className="flex items-center gap-1.5 text-xs font-medium text-red-700 mt-1.5"
                  role="alert"
                >
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{errors.notes}</span>
                </p>
              )}
            </div>

            <div className="pt-1 space-y-3">
              <button
                type="submit"
                className="w-full py-3.5 px-6 min-h-[48px] rounded-xl bg-[#21817B] text-[#FFFFFF] text-sm sm:text-base font-semibold hover:bg-[#1B6B66] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#142B45] focus-visible:ring-offset-2"
              >
                {content.booking.submitCta}
              </button>
              <p className="text-xs text-center text-[#5A6772] leading-relaxed">
                {content.booking.privacyHint}
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
