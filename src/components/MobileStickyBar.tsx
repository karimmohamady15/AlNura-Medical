import { Calendar, MessageCircle } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicContent';
import { ClinicDictionary } from '../types/clinic';

interface MobileStickyBarProps {
  content: ClinicDictionary;
  onOpenBooking: () => void;
}

export function MobileStickyBar({ content, onOpenBooking }: MobileStickyBarProps) {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-30 bg-[#FFFFFF]/95 backdrop-blur-md border-t border-[#142B45]/12 px-3 py-1.5 flex items-center gap-2 shadow-[0_-4px_16px_rgba(20,43,69,0.06)]">
      <button
        type="button"
        onClick={onOpenBooking}
        className="flex-1 min-w-0 inline-flex items-center justify-center gap-2 h-11 px-3 rounded-xl bg-[#21817B] text-[#FFFFFF] text-sm font-semibold active:scale-[0.99] transition-transform cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#142B45]"
      >
        <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
        <span className="truncate">{content.mobileBar.bookCta}</span>
      </button>

      <a
        href={CLINIC_CONTACT.whatsappBaseUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-1.5 h-11 px-3.5 rounded-xl border border-[#142B45]/15 bg-[#F8F7F3] text-[#142B45] text-sm font-medium shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#299D96]"
      >
        <MessageCircle className="w-4 h-4 text-[#21817B] shrink-0" aria-hidden="true" />
        <span>{content.mobileBar.whatsappCta}</span>
      </a>
    </div>
  );
}
