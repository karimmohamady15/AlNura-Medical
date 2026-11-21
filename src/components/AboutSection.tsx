import { useState } from 'react';
import { ABOUT_IMAGE } from '../data/clinicContent';
import { ClinicDictionary } from '../types/clinic';

interface AboutSectionProps {
  content: ClinicDictionary;
}

export function AboutSection({ content }: AboutSectionProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="about"
      className="bg-[#E8F0EB]/55 py-20 lg:py-28 border-t border-[#142B45]/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Clinic Editorial Photography */}
          <div className="lg:col-span-5 flex items-stretch">
            <div className="w-full min-h-[300px] sm:min-h-[420px] rounded-2xl overflow-hidden border border-[#142B45]/10 bg-[#FFFFFF]">
              {!imgError ? (
                <img
                  src={ABOUT_IMAGE}
                  alt={content.about.imageAlt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center p-8 text-center bg-[#F8F7F3] text-[#142B45]">
                  <span className="text-sm text-[#5A6772]">{content.about.imageAlt}</span>
                </div>
              )}
            </div>
          </div>

          {/* Brand Story & Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-sm font-medium text-[#21817B] mb-3">
              {content.about.kicker}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#142B45] text-balance leading-tight mb-5">
              {content.about.heading}
            </h2>

            <p className="text-base sm:text-lg font-medium text-[#142B45]/90 leading-relaxed mb-4">
              {content.about.lead}
            </p>

            <p className="text-sm sm:text-base text-[#4B5864] leading-relaxed mb-8">
              {content.about.body}
            </p>

            {/* Care Approach Sub-block */}
            <div className="rounded-xl bg-[#FFFFFF] border border-[#142B45]/10 p-5 sm:p-6 mb-8">
              <h3 className="text-sm font-semibold text-[#21817B] mb-1.5">
                {content.about.approachTitle}
              </h3>
              <p className="text-sm sm:text-base text-[#142B45] leading-relaxed">
                {content.about.approachText}
              </p>
            </div>

            {/* Editorial Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#142B45]/12">
              {content.about.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-[#21817B] tabular-nums mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-[#142B45]">{stat.label}</div>
                  <div className="text-xs text-[#5A6772] mt-0.5">{stat.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
