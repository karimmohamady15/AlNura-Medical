import { useRef } from 'react';
import { Calendar, Check, Clock, X } from 'lucide-react';
import { useModalAccessibility } from '../hooks/useModalAccessibility';
import { ClinicDictionary, Language, SpecialtyId, SpecialtyItem } from '../types/clinic';

interface SpecialtyModalProps {
  specialty: SpecialtyItem | null;
  content: ClinicDictionary;
  lang: Language;
  restoreFocusOnClose?: boolean;
  onClose: () => void;
  onBookSpecialty: (specialtyId: SpecialtyId) => void;
}

export function SpecialtyModal({
  specialty,
  content,
  lang,
  restoreFocusOnClose = true,
  onClose,
  onBookSpecialty,
}: SpecialtyModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useModalAccessibility({
    isOpen: Boolean(specialty),
    onClose,
    containerRef: modalRef,
    initialFocusRef: closeBtnRef,
    restoreFocus: restoreFocusOnClose,
  });

  if (!specialty) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="specialty-modal-title"
      aria-describedby="specialty-modal-desc"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#142B45]/55 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#FFFFFF] border border-[#142B45]/10 shadow-[0_24px_64px_rgba(20,43,69,0.22)] focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 p-6 sm:p-8 pb-5 border-b border-[#142B45]/10 bg-[#F8F7F3]">
          <div>
            <p className="text-xs font-semibold text-[#21817B] mb-1 tabular-nums">
              {specialty.index} · {content.specialties.kicker}
            </p>
            <h3
              id="specialty-modal-title"
              className="text-2xl font-bold text-[#142B45]"
            >
              {specialty.title}
            </h3>
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label={lang === 'ar' ? 'إغلاق نافذة التخصص' : 'Close specialty modal'}
            className="w-10 h-10 rounded-xl border border-[#142B45]/15 bg-[#FFFFFF] text-[#142B45] flex items-center justify-center hover:border-[#299D96] hover:text-[#21817B] transition-colors shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#299D96]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <p
            id="specialty-modal-desc"
            className="text-sm sm:text-base text-[#4B5864] leading-relaxed"
          >
            {specialty.fullDesc}
          </p>

          <div>
            <h4 className="text-sm font-semibold text-[#142B45] mb-3">
              {content.specialties.modalServicesHeading}
            </h4>
            <ul className="space-y-2.5">
              {specialty.services.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-2.5 text-sm text-[#142B45]/90"
                >
                  <Check
                    className="w-4 h-4 text-[#21817B] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-[#5A6772] pt-4 border-t border-[#142B45]/10">
            <Clock className="w-4 h-4 text-[#21817B] shrink-0" aria-hidden="true" />
            <span>{specialty.consultationNote}</span>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => onBookSpecialty(specialty.id)}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 min-h-[48px] rounded-xl bg-[#21817B] text-[#FFFFFF] text-sm sm:text-base font-semibold hover:bg-[#1B6B66] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#142B45] focus-visible:ring-offset-2"
            >
              <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{content.specialties.bookSpecialtyCta}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
