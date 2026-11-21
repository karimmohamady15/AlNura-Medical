import { AlertCircle, Mail, MessageCircle, Phone } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicContent';
import { ClinicDictionary } from '../types/clinic';

interface FooterProps {
  content: ClinicDictionary;
}

export function Footer({ content }: FooterProps) {
  return (
    <footer
      id="contact"
      className="bg-[#142B45] text-[#F8F7F3] pt-16 pb-24 sm:pb-14 border-t border-[#FFFFFF]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#FFFFFF]/12">
          {/* Brand Summary */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <svg
                width="30"
                height="30"
                viewBox="0 0 36 36"
                fill="none"
                aria-hidden="true"
                className="shrink-0"
              >
                <rect x="1" y="1" width="34" height="34" rx="10" fill="#F8F7F3" />
                <path
                  d="M18 8.5C13.8 8.5 10.5 11.9 10.5 16.2V26.5H14.5V16.4C14.5 14.3 16 12.6 18 12.6C20 12.6 21.5 14.3 21.5 16.4V26.5H25.5V16.2C25.5 11.9 22.2 8.5 18 8.5Z"
                  fill="#142B45"
                />
                <circle cx="18" cy="18" r="2.2" fill="#299D96" />
              </svg>
              <span className="text-lg font-semibold text-[#FFFFFF]">
                {content.brand.name}
              </span>
            </div>

            <p className="text-sm text-[#F8F7F3]/80 leading-relaxed max-w-sm">
              {content.footer.summary}
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-[#FFFFFF] mb-4">
              {content.footer.quickLinksTitle}
            </h3>
            <ul className="space-y-2.5 text-sm text-[#F8F7F3]/80">
              {content.nav.links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="hover:text-[#FFFFFF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5CD1C9] rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Contact Information */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-[#FFFFFF] mb-4">
              {content.footer.contactTitle}
            </h3>
            <ul className="space-y-3 text-sm text-[#F8F7F3]/80">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#5CD1C9] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="block text-xs text-[#F8F7F3]/65">
                    {content.footer.hotlineLabel}
                  </span>
                  <a
                    href={`tel:${CLINIC_CONTACT.hotline.replace(/\s+/g, '')}`}
                    dir="ltr"
                    className="hover:text-[#FFFFFF] transition-colors tabular-nums"
                  >
                    {CLINIC_CONTACT.hotline}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#5CD1C9] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="block text-xs text-[#F8F7F3]/65">
                    {content.footer.whatsappLabel}
                  </span>
                  <a
                    href={CLINIC_CONTACT.whatsappBaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    dir="ltr"
                    className="hover:text-[#FFFFFF] transition-colors tabular-nums"
                  >
                    {CLINIC_CONTACT.whatsappDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#5CD1C9] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="block text-xs text-[#F8F7F3]/65">
                    {content.footer.emailLabel}
                  </span>
                  <a
                    href={`mailto:${CLINIC_CONTACT.email}`}
                    dir="ltr"
                    className="hover:text-[#FFFFFF] transition-colors"
                  >
                    {CLINIC_CONTACT.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Working Hours & UAE Emergency */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-[#FFFFFF] mb-4">
              {content.footer.hoursTitle}
            </h3>
            <div className="space-y-3.5 text-sm text-[#F8F7F3]/80 leading-relaxed">
              <p>{content.footer.hoursNote}</p>
              <div className="flex items-start gap-2.5 pt-2 border-t border-[#FFFFFF]/12">
                <AlertCircle className="w-4 h-4 text-[#5CD1C9] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="block text-xs text-[#F8F7F3]/75">
                    {content.footer.emergencyLabel}
                  </span>
                  <a
                    href={`tel:${CLINIC_CONTACT.emergencyNumber}`}
                    dir="ltr"
                    className="text-base font-bold text-[#FFFFFF] hover:text-[#5CD1C9] transition-colors tabular-nums"
                  >
                    {CLINIC_CONTACT.emergencyNumber}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Privacy/Architecture Notice */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-[#F8F7F3]/70">
          <p>{content.footer.copyright}</p>
          <p className="max-w-xl leading-relaxed">{content.footer.demoNotice}</p>
        </div>
      </div>
    </footer>
  );
}
