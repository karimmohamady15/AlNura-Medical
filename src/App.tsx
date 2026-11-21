/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import type { BookingPrefill } from './components/BookingModal';
import { BranchesSection } from './components/BranchesSection';
import { DoctorsSection } from './components/DoctorsSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { MobileStickyBar } from './components/MobileStickyBar';
import { Navbar } from './components/Navbar';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { CLINIC_CONTENT } from './data/clinicContent';
import {
  BranchId,
  DoctorItem,
  Language,
  SpecialtyId,
  SpecialtyItem,
} from './types/clinic';

const SpecialtyModal = lazy(() =>
  import('./components/SpecialtyModal').then((m) => ({ default: m.SpecialtyModal }))
);
const DoctorProfileModal = lazy(() =>
  import('./components/DoctorProfileModal').then((m) => ({ default: m.DoctorProfileModal }))
);
const BookingModal = lazy(() =>
  import('./components/BookingModal').then((m) => ({ default: m.BookingModal }))
);

type ReturnContext =
  | { type: 'page' }
  | { type: 'specialty'; specialtyId: SpecialtyId }
  | { type: 'doctor'; doctorId: string };

function updateMetaContent(selector: string, value: string) {
  const el = document.querySelector(selector);
  if (el) {
    el.setAttribute('content', value);
  }
}

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<BookingPrefill>({});
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorItem | null>(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState<SpecialtyItem | null>(null);
  const [returnContext, setReturnContext] = useState<ReturnContext>({ type: 'page' });

  const shellRef = useRef<HTMLDivElement>(null);
  const originTriggerRef = useRef<HTMLElement | null>(null);

  const content = CLINIC_CONTENT[lang];
  const hasActiveModal =
    bookingOpen || selectedDoctor !== null || selectedSpecialty !== null;

  // Keep HTML lang, dir, title, and social metadata synchronized with active language
  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = content.meta.title;

    updateMetaContent('meta[name="description"]', content.meta.description);
    updateMetaContent('meta[property="og:title"]', content.meta.title);
    updateMetaContent('meta[property="og:description"]', content.meta.description);
    updateMetaContent(
      'meta[property="og:locale"]',
      lang === 'ar' ? 'ar_AE' : 'en_AE'
    );
    updateMetaContent('meta[name="twitter:title"]', content.meta.title);
    updateMetaContent('meta[name="twitter:description"]', content.meta.description);

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink && window.location.origin !== 'null') {
      canonicalLink.setAttribute(
        'href',
        `${window.location.origin}${window.location.pathname}`
      );
    }
  }, [lang, content.meta.title, content.meta.description]);

  // Lock background scroll and mark background inert when any modal is active
  useEffect(() => {
    document.body.style.overflow = hasActiveModal ? 'hidden' : '';
    const shell = shellRef.current;
    if (shell) {
      if (hasActiveModal) {
        shell.setAttribute('inert', '');
      } else {
        shell.removeAttribute('inert');
      }
    }
    return () => {
      document.body.style.overflow = '';
      shell?.removeAttribute('inert');
    };
  }, [hasActiveModal]);

  const handleToggleLanguage = () => {
    setLang((prev) => {
      const next = prev === 'ar' ? 'en' : 'ar';
      if (selectedDoctor) {
        const mappedDoc = CLINIC_CONTENT[next].doctors.items.find(
          (d) => d.id === selectedDoctor.id
        );
        setSelectedDoctor(mappedDoc ?? null);
      }
      if (selectedSpecialty) {
        const mappedSpec = CLINIC_CONTENT[next].specialties.items.find(
          (s) => s.id === selectedSpecialty.id
        );
        setSelectedSpecialty(mappedSpec ?? null);
      }
      return next;
    });
  };

  const captureOriginFocus = () => {
    if (document.activeElement instanceof HTMLElement) {
      originTriggerRef.current = document.activeElement;
    }
  };

  const restoreOriginFocus = () => {
    const target = originTriggerRef.current;
    originTriggerRef.current = null;
    if (target && target.isConnected) {
      window.requestAnimationFrame(() => {
        target.focus();
      });
    }
  };

  const handleOpenSpecialty = (specialty: SpecialtyItem) => {
    captureOriginFocus();
    setReturnContext({ type: 'page' });
    setSelectedSpecialty(specialty);
  };

  const handleOpenDoctor = (doctor: DoctorItem) => {
    captureOriginFocus();
    setReturnContext({ type: 'page' });
    setSelectedDoctor(doctor);
  };

  const openBookingFromPage = (prefill: BookingPrefill = {}) => {
    captureOriginFocus();
    setReturnContext({ type: 'page' });
    setSelectedDoctor(null);
    setSelectedSpecialty(null);
    setBookingPrefill(prefill);
    setBookingOpen(true);
  };

  const handleBookFromSpecialtyModal = (specialtyId: SpecialtyId) => {
    setReturnContext({ type: 'specialty', specialtyId });
    setSelectedSpecialty(null);
    setBookingPrefill({ specialtyId });
    setBookingOpen(true);
  };

  const handleBookFromDoctorModal = (doctor: DoctorItem) => {
    setReturnContext({ type: 'doctor', doctorId: doctor.id });
    setSelectedDoctor(null);
    setBookingPrefill({
      doctorId: doctor.id,
      specialtyId: doctor.specialtyId,
      branchId: doctor.branchId,
    });
    setBookingOpen(true);
  };

  const handleBookBranch = (branchId: BranchId) => {
    openBookingFromPage({ branchId });
  };

  const handleCloseBooking = useCallback(() => {
    setBookingOpen(false);
    setBookingPrefill({});

    if (returnContext.type === 'doctor') {
      const doc = content.doctors.items.find(
        (d) => d.id === returnContext.doctorId
      );
      setReturnContext({ type: 'page' });
      if (doc) {
        setSelectedDoctor(doc);
        return;
      }
    }

    if (returnContext.type === 'specialty') {
      const spec = content.specialties.items.find(
        (s) => s.id === returnContext.specialtyId
      );
      setReturnContext({ type: 'page' });
      if (spec) {
        setSelectedSpecialty(spec);
        return;
      }
    }

    setReturnContext({ type: 'page' });
    restoreOriginFocus();
  }, [returnContext, content.doctors.items, content.specialties.items]);

  const handleCloseSpecialtyModal = useCallback(() => {
    setSelectedSpecialty(null);
    setReturnContext({ type: 'page' });
    restoreOriginFocus();
  }, []);

  const handleCloseDoctorModal = useCallback(() => {
    setSelectedDoctor(null);
    setReturnContext({ type: 'page' });
    restoreOriginFocus();
  }, []);

  return (
    <>
      <div
        ref={shellRef}
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
        aria-hidden={hasActiveModal || undefined}
        className="min-h-screen bg-[#F8F7F3] text-[#142B45] overflow-x-clip"
      >
        <Navbar
          content={content}
          lang={lang}
          onToggleLanguage={handleToggleLanguage}
          onOpenBooking={() => openBookingFromPage()}
        />

        <main>
          <HeroSection
            content={content}
            lang={lang}
            onOpenBooking={() => openBookingFromPage()}
          />

          <SpecialtiesSection
            content={content}
            lang={lang}
            onSelectSpecialty={handleOpenSpecialty}
          />

          <AboutSection content={content} />

          <DoctorsSection
            content={content}
            lang={lang}
            onSelectDoctor={handleOpenDoctor}
          />

          <WhyChooseUsSection content={content} />

          <BranchesSection
            content={content}
            onBookBranch={handleBookBranch}
          />

          <TestimonialsSection content={content} lang={lang} />

          <FinalCtaSection
            content={content}
            onOpenBooking={() => openBookingFromPage()}
          />
        </main>

        <Footer content={content} />

        <MobileStickyBar
          content={content}
          onOpenBooking={() => openBookingFromPage()}
        />
      </div>

      <SpecialtyModal
        specialty={selectedSpecialty}
        content={content}
        lang={lang}
        restoreFocusOnClose={false}
        onClose={handleCloseSpecialtyModal}
        onBookSpecialty={handleBookFromSpecialtyModal}
      />

      <DoctorProfileModal
        doctor={selectedDoctor}
        content={content}
        lang={lang}
        restoreFocusOnClose={false}
        onClose={handleCloseDoctorModal}
        onBookDoctor={handleBookFromDoctorModal}
      />

      {bookingOpen && (
        <BookingModal
          isOpen={bookingOpen}
          prefill={bookingPrefill}
          content={content}
          restoreFocusOnClose={false}
          onClose={handleCloseBooking}
        />
      )}
    </>
  );
}
