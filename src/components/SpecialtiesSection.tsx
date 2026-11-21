import {
  ArrowLeft,
  ArrowRight,
  Baby,
  HeartPulse,
  ShieldPlus,
  Smile,
  Sparkles,
  Stethoscope,
} from 'lucide-react';
import { ClinicDictionary, Language, SpecialtyId, SpecialtyItem } from '../types/clinic';

interface SpecialtiesSectionProps {
  content: ClinicDictionary;
  lang: Language;
  onSelectSpecialty: (specialty: SpecialtyItem) => void;
}

const SPECIALTY_ICONS: Record<SpecialtyId, typeof Stethoscope> = {
  dermatology: Sparkles,
  dentistry: Smile,
  pediatrics: Baby,
  cardiology: HeartPulse,
  gynecology: ShieldPlus,
  general: Stethoscope,
};

export function SpecialtiesSection({
  content,
  lang,
  onSelectSpecialty,
}: SpecialtiesSectionProps) {
  const DirectionalArrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section id="specialties" className="bg-[#FFFFFF] py-20 lg:py-28 border-t border-[#142B45]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <p className="text-sm font-medium text-[#21817B] mb-3">
            {content.specialties.kicker}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#142B45] text-balance leading-tight mb-4">
            {content.specialties.heading}
          </h2>
          <p className="text-base text-[#5A6772] leading-relaxed">
            {content.specialties.subheading}
          </p>
        </div>

        {/* 6 Specialties Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.specialties.items.map((item) => {
            const Icon = SPECIALTY_ICONS[item.id];
            return (
              <article
                key={item.id}
                className="group flex flex-col justify-between rounded-2xl border border-[#142B45]/10 bg-[#F8F7F3]/60 hover:bg-[#FFFFFF] hover:border-[#299D96]/45 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(20,43,69,0.06)] transition-all duration-200 p-7"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#E8F0EB] text-[#142B45] flex items-center justify-center group-hover:bg-[#21817B] group-hover:text-[#FFFFFF] transition-colors duration-200">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-semibold text-[#5A6772] tabular-nums">
                      {item.index}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-[#142B45] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-[15px] text-[#4B5864] leading-relaxed mb-6">
                    {item.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#142B45]/8 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectSpecialty(item)}
                    className="min-h-[44px] inline-flex items-center gap-2 text-sm font-semibold text-[#142B45] group-hover:text-[#21817B] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#299D96] rounded py-1"
                  >
                    <span>{content.specialties.exploreCta}</span>
                    <DirectionalArrow
                      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
