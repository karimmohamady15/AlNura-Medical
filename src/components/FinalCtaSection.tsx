import { Calendar, MessageCircle } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicContent';
import { ClinicDictionary } from '../types/clinic';

interface FinalCtaSectionProps {
  content: ClinicDictionary;
  onOpenBooking: () => void;
}

export function FinalCtaSection({ content, onOpenBooking }: FinalCtaSectionProps) {
  return (
    <section className="bg-[#E8F0EB]/65 py-20 lg:py-24 border-t border-[#142B45]/8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-medium text-[#21817B] mb-3">
          {content.finalCta.kicker}
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-[#142B45] text-balance leading-tight mb-5">
          {content.finalCta.heading}
        </h2>
        <p className="text-base sm:text-lg text-[#4B5864] leading-relaxed max-w-2xl mx-auto mb-9">
          {content.finalCta.supporting}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 min-h-[48px] rounded-xl bg-[#142B45] text-[#FFFFFF] text-sm sm:text-base font-semibold hover:bg-[#1D3B5E] active:scale-[0.99] transition-all duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#299D96] focus-visible:ring-offset-2"
          >
            <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{content.finalCta.primaryCta}</span>
          </button>

          <a
            href={CLINIC_CONTACT.whatsappBaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 min-h-[48px] rounded-xl border border-[#142B45]/20 bg-[#FFFFFF] text-[#142B45] text-sm sm:text-base font-medium hover:border-[#299D96] hover:text-[#21817B] transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#299D96]"
          >
            <MessageCircle className="w-4 h-4 text-[#21817B] shrink-0" aria-hidden="true" />
            <span>{content.finalCta.whatsappCta}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
