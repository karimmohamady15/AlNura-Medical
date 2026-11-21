import { useEffect, useRef, useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { ClinicDictionary, Language } from '../types/clinic';

interface NavbarProps {
  content: ClinicDictionary;
  lang: Language;
  onToggleLanguage: () => void;
  onOpenBooking: () => void;
}

export function Navbar({
  content,
  lang,
  onToggleLanguage,
  onOpenBooking,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const rafId = window.requestAnimationFrame(() => {
      firstMobileLinkRef.current?.focus();
    });

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        toggleBtnRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileOpen]);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#142B45]/10 shadow-[0_4px_20px_rgba(20,43,69,0.04)]'
          : 'bg-[#F8F7F3]/95 backdrop-blur-sm border-b border-[#142B45]/8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-20 flex items-center justify-between gap-3 lg:gap-6">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#home"
          className="flex items-center gap-2.5 sm:gap-3 text-[#142B45] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#299D96] rounded-lg py-1"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 36 36"
            fill="none"
            aria-hidden="true"
            className="shrink-0"
          >
            <rect x="1" y="1" width="34" height="34" rx="10" fill="#142B45" />
            <path
              d="M18 8.5C13.8 8.5 10.5 11.9 10.5 16.2V26.5H14.5V16.4C14.5 14.3 16 12.6 18 12.6C20 12.6 21.5 14.3 21.5 16.4V26.5H25.5V16.2C25.5 11.9 22.2 8.5 18 8.5Z"
              fill="#F8F7F3"
            />
            <circle cx="18" cy="18" r="2.2" fill="#299D96" />
          </svg>
          <span className="text-base sm:text-lg font-semibold tracking-tight">
            {content.brand.name}
          </span>
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label={lang === 'ar' ? 'التنقل الرئيسي' : 'Primary navigation'}
          className="hidden lg:flex items-center gap-4 xl:gap-6"
        >
          {content.nav.links.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="relative py-1.5 text-sm font-medium text-[#142B45]/85 hover:text-[#142B45] transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-[1.5px] after:bg-[#299D96] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#299D96] rounded"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Language Switcher & Primary Appointment Action */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onToggleLanguage}
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-2 min-h-[40px] rounded-lg border border-[#142B45]/15 bg-[#FFFFFF] text-xs sm:text-sm font-medium text-[#142B45] hover:border-[#299D96] hover:text-[#299D96] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#299D96]"
            aria-label={lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
          >
            <Globe className="w-4 h-4 shrink-0 text-[#299D96]" aria-hidden="true" />
            <span>{content.nav.switchLabel}</span>
          </button>

          <button
            type="button"
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center justify-center px-4 lg:px-5 py-2.5 min-h-[40px] rounded-lg bg-[#142B45] text-[#FFFFFF] text-sm font-medium hover:bg-[#1D3B5E] active:scale-[0.99] transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#299D96] focus-visible:ring-offset-2"
          >
            {content.nav.bookCta}
          </button>

          <button
            ref={toggleBtnRef}
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#142B45]/15 bg-[#FFFFFF] text-[#142B45] hover:bg-[#E8F0EB]/60 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#299D96]"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? content.nav.closeMenu : content.nav.openMenu}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden border-t border-[#142B45]/10 bg-[#FFFFFF] px-4 py-5 shadow-[0_12px_32px_rgba(20,43,69,0.08)]"
        >
          <nav
            aria-label={lang === 'ar' ? 'قائمة التنقل المحمولة' : 'Mobile navigation'}
            className="flex flex-col gap-1"
          >
            {content.nav.links.map((item, index) => (
              <a
                key={item.id}
                ref={index === 0 ? firstMobileLinkRef : undefined}
                href={item.href}
                onClick={handleNavClick}
                className="px-3 py-3 min-h-[44px] flex items-center text-base font-medium text-[#142B45] hover:bg-[#F8F7F3] rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#299D96]"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-[#142B45]/10">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-4 min-h-[44px] rounded-lg bg-[#299D96] text-[#FFFFFF] text-sm font-semibold hover:bg-[#238780] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#142B45]"
              >
                {content.nav.bookCta}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
