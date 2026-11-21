import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { ClinicDictionary, Language } from '../types/clinic';

interface TestimonialsSectionProps {
  content: ClinicDictionary;
  lang: Language;
}

export function TestimonialsSection({ content, lang }: TestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = content.testimonials.items;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#FFFFFF] py-20 lg:py-28 border-t border-[#142B45]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Carousel Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#21817B] mb-3">
              {content.testimonials.kicker}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#142B45] text-balance leading-tight mb-3">
              {content.testimonials.heading}
            </h2>
            <p className="text-base text-[#5A6772] leading-relaxed mb-2.5">
              {content.testimonials.subheading}
            </p>
            <p className="text-xs sm:text-sm text-[#5A6772] leading-relaxed">
              {content.testimonials.demoNotice}
            </p>
          </div>

          {/* Interactive Carousel Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={lang === 'ar' ? handleNext : handlePrev}
              aria-label={content.testimonials.prevLabel}
              className="w-11 h-11 rounded-xl border border-[#142B45]/15 bg-[#F8F7F3] text-[#142B45] flex items-center justify-center hover:border-[#299D96] hover:text-[#21817B] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#299D96]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={lang === 'ar' ? handlePrev : handleNext}
              aria-label={content.testimonials.nextLabel}
              className="w-11 h-11 rounded-xl border border-[#142B45]/15 bg-[#F8F7F3] text-[#142B45] flex items-center justify-center hover:border-[#299D96] hover:text-[#21817B] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#299D96]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Balanced 3-Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <article
                key={item.id}
                className={`flex flex-col justify-between rounded-2xl p-7 sm:p-8 border transition-all duration-200 ${
                  isActive
                    ? 'bg-[#F8F7F3] border-[#299D96]/45 shadow-[0_8px_24px_rgba(20,43,69,0.05)]'
                    : 'bg-[#FFFFFF] border-[#142B45]/10 hover:border-[#142B45]/25'
                } ${!isActive ? 'hidden lg:flex' : 'flex'}`}
              >
                <div>
                  <Quote
                    className="w-6 h-6 text-[#21817B]/75 mb-5"
                    aria-hidden="true"
                  />
                  <blockquote className="text-base text-[#142B45] leading-relaxed mb-8">
                    “{item.quote}”
                  </blockquote>
                </div>

                <div className="pt-5 border-t border-[#142B45]/10">
                  <div className="text-sm font-bold text-[#142B45]">
                    {item.authorLabel}
                  </div>
                  <div className="flex items-center flex-wrap gap-x-2 text-xs text-[#5A6772] mt-1">
                    <span>{item.context}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.note}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
