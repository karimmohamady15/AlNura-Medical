import { useState } from 'react';
import { ArrowLeft, ArrowRight, UserRound } from 'lucide-react';
import { ClinicDictionary, DoctorItem, Language } from '../types/clinic';

interface DoctorsSectionProps {
  content: ClinicDictionary;
  lang: Language;
  onSelectDoctor: (doctor: DoctorItem) => void;
}

export function DoctorsSection({
  content,
  lang,
  onSelectDoctor,
}: DoctorsSectionProps) {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const DirectionalArrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section id="doctors" className="bg-[#F8F7F3] py-20 lg:py-28 border-t border-[#142B45]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <p className="text-sm font-medium text-[#21817B] mb-3">
            {content.doctors.kicker}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#142B45] text-balance leading-tight mb-4">
            {content.doctors.heading}
          </h2>
          <p className="text-base text-[#5A6772] leading-relaxed mb-3">
            {content.doctors.subheading}
          </p>
          <p className="text-xs sm:text-sm text-[#5A6772] leading-relaxed">
            {content.doctors.demoNotice}
          </p>
        </div>

        {/* 4 Doctor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.doctors.items.map((doctor) => {
            const hasFailed = failedImages[doctor.id];
            return (
              <article
                key={doctor.id}
                className="group flex flex-col justify-between rounded-2xl border border-[#142B45]/10 bg-[#FFFFFF] overflow-hidden hover:border-[#299D96]/45 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(20,43,69,0.06)] transition-all duration-200"
              >
                <div>
                  {/* 3:4 Portrait */}
                  <div className="aspect-[3/4] w-full overflow-hidden bg-[#E8F0EB] relative">
                    {!hasFailed ? (
                      <img
                        src={doctor.image}
                        alt={doctor.imageAlt}
                        width={900}
                        height={1200}
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        onError={() =>
                          setFailedImages((prev) => ({ ...prev, [doctor.id]: true }))
                        }
                        className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#E8F0EB] to-[#F8F7F3] text-[#142B45]">
                        <UserRound className="w-12 h-12 text-[#299D96] mb-2" aria-hidden="true" />
                        <span className="text-sm font-semibold">{doctor.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Unboxed Metadata & Doctor Details */}
                  <div className="p-6">
                    <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-xs font-medium mb-2">
                      <span className="text-[#21817B]">{doctor.branchName}</span>
                      <span aria-hidden="true" className="text-[#77838D]">
                        ·
                      </span>
                      <span className="text-[#5A6772]">{doctor.profileTypeLabel}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#142B45] mb-1">
                      {doctor.name}
                    </h3>
                    <p className="text-sm font-medium text-[#142B45]/85 mb-2">
                      {doctor.specialtyTitle}
                    </p>
                    <p className="text-xs text-[#5A6772] leading-relaxed">
                      {doctor.subSpecialty}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-4 border-t border-[#142B45]/8">
                  <button
                    type="button"
                    onClick={() => onSelectDoctor(doctor)}
                    className="w-full min-h-[44px] inline-flex items-center justify-between text-sm font-semibold text-[#142B45] hover:text-[#21817B] transition-colors py-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#299D96] rounded"
                  >
                    <span>{content.doctors.viewProfileCta}</span>
                    <DirectionalArrow className="w-4 h-4 shrink-0" aria-hidden="true" />
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
