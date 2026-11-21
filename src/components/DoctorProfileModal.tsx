import { useEffect, useRef, useState } from 'react';
import { Award, Calendar, Clock, Languages, MapPin, UserRound, X } from 'lucide-react';
import { useModalAccessibility } from '../hooks/useModalAccessibility';
import { ClinicDictionary, DoctorItem, Language } from '../types/clinic';

interface DoctorProfileModalProps {
  doctor: DoctorItem | null;
  content: ClinicDictionary;
  lang: Language;
  restoreFocusOnClose?: boolean;
  onClose: () => void;
  onBookDoctor: (doctor: DoctorItem) => void;
}

export function DoctorProfileModal({
  doctor,
  content,
  lang,
  restoreFocusOnClose = true,
  onClose,
  onBookDoctor,
}: DoctorProfileModalProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setImgFailed(false);
  }, [doctor?.id]);

  useModalAccessibility({
    isOpen: Boolean(doctor),
    onClose,
    containerRef: modalRef,
    initialFocusRef: closeBtnRef,
    restoreFocus: restoreFocusOnClose,
  });

  if (!doctor) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="doctor-modal-title"
      aria-describedby="doctor-modal-desc"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#142B45]/55 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#FFFFFF] border border-[#142B45]/10 shadow-[0_24px_64px_rgba(20,43,69,0.22)] focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Portrait Column */}
          <div className="md:col-span-5 bg-[#E8F0EB] min-h-[260px] md:min-h-full relative">
            {!imgFailed ? (
              <img
                src={doctor.image}
                alt={doctor.imageAlt}
                width={900}
                height={1200}
                decoding="async"
                referrerPolicy="no-referrer"
                onError={() => setImgFailed(true)}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-8 text-[#142B45]">
                <UserRound className="w-12 h-12 text-[#21817B] mb-2" aria-hidden="true" />
                <span className="text-sm font-semibold">{doctor.name}</span>
              </div>
            )}
          </div>

          {/* Details Column */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="text-xs font-semibold text-[#21817B] mb-1">
                    {doctor.specialtyTitle} · {content.doctors.modalLabels.demoBadge}
                  </p>
                  <h3
                    id="doctor-modal-title"
                    className="text-2xl font-bold text-[#142B45]"
                  >
                    {doctor.name}
                  </h3>
                  <p className="text-sm text-[#5A6772] mt-0.5">{doctor.subSpecialty}</p>
                </div>

                <button
                  ref={closeBtnRef}
                  type="button"
                  onClick={onClose}
                  aria-label={lang === 'ar' ? 'إغلاق الملف الطبي' : 'Close doctor profile'}
                  className="w-10 h-10 rounded-xl border border-[#142B45]/15 bg-[#F8F7F3] text-[#142B45] flex items-center justify-center hover:border-[#299D96] hover:text-[#21817B] transition-colors shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#299D96]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p
                id="doctor-modal-desc"
                className="text-sm sm:text-[15px] text-[#4B5864] leading-relaxed mb-6"
              >
                {doctor.bio}
              </p>

              <dl className="space-y-3.5 text-sm border-t border-[#142B45]/10 pt-5 mb-7">
                <div className="flex items-start gap-3">
                  <Award className="w-4 h-4 text-[#21817B] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <dt className="text-xs text-[#5A6772]">
                      {content.doctors.modalLabels.credentials}
                    </dt>
                    <dd className="text-[#142B45] font-medium">
                      {doctor.credentialsPlaceholder}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#21817B] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <dt className="text-xs text-[#5A6772]">
                      {content.doctors.modalLabels.branch}
                    </dt>
                    <dd className="text-[#142B45] font-medium">{doctor.branchName}</dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#21817B] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <dt className="text-xs text-[#5A6772]">
                      {content.doctors.modalLabels.availability}
                    </dt>
                    <dd className="text-[#142B45] font-medium">
                      {doctor.availabilityPlaceholder}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Languages className="w-4 h-4 text-[#21817B] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <dt className="text-xs text-[#5A6772]">
                      {content.doctors.modalLabels.languages}
                    </dt>
                    <dd className="text-[#142B45] font-medium">{doctor.languages}</dd>
                  </div>
                </div>
              </dl>
            </div>

            <button
              type="button"
              onClick={() => onBookDoctor(doctor)}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 min-h-[48px] rounded-xl bg-[#142B45] text-[#FFFFFF] text-sm sm:text-base font-semibold hover:bg-[#1D3B5E] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#299D96] focus-visible:ring-offset-2"
            >
              <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{content.doctors.bookWithDoctorCta}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
