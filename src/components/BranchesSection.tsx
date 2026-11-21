import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react';
import { BranchId, ClinicDictionary } from '../types/clinic';

interface BranchesSectionProps {
  content: ClinicDictionary;
  onBookBranch: (branchId: BranchId) => void;
}

export function BranchesSection({ content, onBookBranch }: BranchesSectionProps) {
  return (
    <section id="branches" className="bg-[#F8F7F3] py-20 lg:py-28 border-t border-[#142B45]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <p className="text-sm font-medium text-[#21817B] mb-3">
            {content.branches.kicker}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#142B45] text-balance leading-tight mb-4">
            {content.branches.heading}
          </h2>
          <p className="text-base text-[#5A6772] leading-relaxed">
            {content.branches.subheading}
          </p>
        </div>

        {/* 3 Official UAE Branches Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {content.branches.items.map((branch) => (
            <article
              key={branch.id}
              className="flex flex-col justify-between rounded-2xl border border-[#142B45]/10 bg-[#FFFFFF] p-7 sm:p-8"
            >
              <div>
                <div className="flex items-start justify-between gap-4 pb-5 mb-5 border-b border-[#142B45]/8">
                  <div>
                    <h3 className="text-2xl font-bold text-[#142B45]">
                      {branch.city}
                    </h3>
                    <p className="text-sm font-medium text-[#21817B] mt-1">
                      {branch.district}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#E8F0EB] text-[#142B45] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </div>
                </div>

                <p className="text-sm sm:text-[15px] text-[#4B5864] leading-relaxed mb-6">
                  {branch.addressPlaceholder}
                </p>

                <dl className="space-y-3 text-sm mb-8">
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-[#21817B] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <dt className="text-xs text-[#5A6772]">{content.branches.hoursLabel}</dt>
                      <dd className="text-[#142B45] font-medium">
                        {branch.hoursPlaceholder}
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-[#21817B] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <dt className="text-xs text-[#5A6772]">{content.branches.phoneLabel}</dt>
                      <dd>
                        <a
                          href={`tel:${branch.phone.replace(/\s+/g, '')}`}
                          dir="ltr"
                          className="inline-block text-[#142B45] font-medium hover:text-[#21817B] transition-colors tabular-nums"
                        >
                          {branch.phone}
                        </a>
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 pt-5 border-t border-[#142B45]/8">
                <button
                  type="button"
                  onClick={() => onBookBranch(branch.id)}
                  className="flex-1 py-2.5 px-4 min-h-[44px] rounded-xl bg-[#142B45] text-[#FFFFFF] text-sm font-medium hover:bg-[#1D3B5E] transition-colors whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#299D96]"
                >
                  {content.branches.bookBranchCta}
                </button>
                <a
                  href={branch.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-4 min-h-[44px] rounded-xl border border-[#142B45]/15 bg-[#F8F7F3] text-[#142B45] text-sm font-medium hover:border-[#299D96] hover:text-[#21817B] transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#299D96]"
                >
                  <MessageCircle className="w-4 h-4 text-[#21817B] shrink-0" aria-hidden="true" />
                  <span>{content.branches.whatsappCta}</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
