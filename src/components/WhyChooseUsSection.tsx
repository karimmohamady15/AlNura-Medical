import { ClinicDictionary } from '../types/clinic';

interface WhyChooseUsSectionProps {
  content: ClinicDictionary;
}

export function WhyChooseUsSection({ content }: WhyChooseUsSectionProps) {
  return (
    <section className="bg-[#142B45] text-[#F8F7F3] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Sticky Editorial Heading Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="text-sm font-medium text-[#5CD1C9] mb-3">
              {content.whyChoose.kicker}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#FFFFFF] text-balance leading-tight mb-5 tracking-wide">
              {content.whyChoose.heading}
            </h2>
            <p className="text-base text-[#F8F7F3]/75 leading-relaxed">
              {content.whyChoose.subheading}
            </p>
          </div>

          {/* Clean Numbered Pillars List */}
          <div className="lg:col-span-7 divide-y divide-[#FFFFFF]/12 border-t border-b border-[#FFFFFF]/12">
            {content.whyChoose.items.map((item) => (
              <div
                key={item.index}
                className="py-7 sm:py-8 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8"
              >
                <span className="text-sm font-semibold text-[#5CD1C9] tabular-nums shrink-0 pt-1">
                  {item.index}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-[#FFFFFF] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#F8F7F3]/75 leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
