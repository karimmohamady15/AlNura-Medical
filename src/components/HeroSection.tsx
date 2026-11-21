import { useState } from 'react';
import { ArrowLeft, ArrowRight, Calendar, Phone } from 'lucide-react';
import { HERO_IMAGE } from '../data/clinicContent';
import { ClinicDictionary, Language } from '../types/clinic';

interface HeroSectionProps {
  content: ClinicDictionary;
  lang: Language;
  onOpenBooking: () => void;
}

export function HeroSection({ content, lang, onOpenBooking }: HeroSectionProps) {
  const [imgError, setImgError] = useState(false);
  const DirectionalArrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section id="home" className="relative bg-[#F8F7F3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 lg:pt-16 lg:pb-20">
        {/* 2-Column Editorial Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Primary Text Column */}
          <div className="lg:col-span-6 flex flex-col justify-center py-2 lg:py-6">
            <p className="text-xs sm:text-sm font-medium text-[#21817B] mb-5 tracking-normal">
              {content.hero.kicker}
            </p>

            <h1
              className={`text-[#142B45] font-bold text-balance mb-6 ${
                lang === 'ar'
                  ? 'text-[clamp(2.15rem,4.1vw,3.65rem)] leading-[1.22]'
                  : 'text-[clamp(2.15rem,4vw,3.55rem)] leading-[1.12] tracking-tight'
              }`}
            >
              {content.hero.headline}
            </h1>

            <p className="text-base sm:text-lg text-[#4B5864] leading-relaxed max-w-xl mb-8">
              {content.hero.supporting}
            </p>

            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[48px] rounded-xl bg-[#21817B] text-[#FFFFFF] text-sm sm:text-base font-semibold hover:bg-[#1B6B66] active:scale-[0.99] transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#142B45] focus-visible:ring-offset-2"
              >
                <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{content.hero.primaryCta}</span>
              </button>

              <a
                href="#specialties"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-xl border border-[#142B45]/20 bg-[#FFFFFF] text-[#142B45] text-sm sm:text-base font-medium hover:border-[#142B45]/45 hover:bg-[#E8F0EB]/40 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#299D96]"
              >
                <span>{content.hero.secondaryCta}</span>
                <DirectionalArrow className="w-4 h-4 shrink-0 text-[#21817B]" aria-hidden="true" />
              </a>
            </div>

            <p className="text-xs sm:text-sm text-[#5A6772] pt-5 border-t border-[#142B45]/10">
              {content.hero.trustLine}
            </p>
          </div>

          {/* Visual Composition Column */}
          <div className="lg:col-span-6 relative flex items-stretch">
            <div
              aria-hidden="true"
              className="hidden sm:block absolute -inset-y-3 inset-x-4 rounded-3xl bg-[#E8F0EB]/80 -z-0"
            />

            <div className="relative z-10 w-full min-h-[320px] sm:min-h-[440px] lg:min-h-[500px] rounded-2xl overflow-hidden border border-[#142B45]/10 bg-[#E8F0EB]">
              {!imgError ? (
                <img
                  src={HERO_IMAGE}
                  alt={content.hero.imageAlt}
                  width={1200}
                  height={900}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#E8F0EB] to-[#F8F7F3] text-[#142B45]">
                  <span className="text-lg font-semibold mb-2">{content.brand.name}</span>
                  <span className="text-sm text-[#5A6772]">{content.hero.imageAlt}</span>
                </div>
              )}

              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#142B45]/45 via-[#142B45]/10 to-transparent pointer-events-none"
              />

              <div className="absolute bottom-3.5 sm:bottom-6 inset-x-3.5 sm:inset-x-6 bg-[#FFFFFF]/95 backdrop-blur-md rounded-xl p-4 sm:p-5 border border-[#142B45]/10 shadow-[0_12px_32px_rgba(20,43,69,0.10)]">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 sm:gap-3">
                  <div>
                    <h2 className="text-sm sm:text-base font-semibold text-[#142B45]">
                      {content.hero.floatingCard.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#4B5864] mt-0.5">
                      {content.hero.floatingCard.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#21817B] font-semibold shrink-0 tabular-nums">
                    <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span dir="ltr">{content.hero.floatingCard.meta}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Summary Strip Below Hero Split */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-[#142B45]/10 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {content.hero.metrics.map((metric) => (
            <div key={metric.label} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold text-[#142B45] tabular-nums">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-[#142B45]">{metric.label}</div>
              <div className="text-xs sm:text-sm text-[#5A6772]">{metric.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
