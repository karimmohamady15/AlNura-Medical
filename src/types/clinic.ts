export type Language = 'ar' | 'en';

export type SpecialtyId =
  | 'dermatology'
  | 'dentistry'
  | 'pediatrics'
  | 'cardiology'
  | 'gynecology'
  | 'general';

export type BranchId = 'downtown-dubai' | 'dubai-marina' | 'al-maryah-abudhabi';

export interface NavLinkItem {
  id: string;
  href: string;
  label: string;
}

export interface StatItem {
  value: string;
  label: string;
  detail: string;
}

export interface SpecialtyItem {
  id: SpecialtyId;
  index: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  services: string[];
  consultationNote: string;
}

export interface DoctorItem {
  id: string;
  name: string;
  specialtyId: SpecialtyId;
  specialtyTitle: string;
  subSpecialty: string;
  profileTypeLabel: string;
  branchId: BranchId;
  branchName: string;
  credentialsPlaceholder: string;
  languages: string;
  availabilityPlaceholder: string;
  bio: string;
  image: string;
  imageAlt: string;
}

export interface WhyChooseItem {
  index: string;
  title: string;
  description: string;
}

export interface BranchItem {
  id: BranchId;
  city: string;
  district: string;
  addressPlaceholder: string;
  hoursPlaceholder: string;
  phone: string;
  whatsappUrl: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  authorLabel: string;
  context: string;
  note: string;
}

export interface ClinicContactInfo {
  whatsappDisplay: string;
  whatsappInternational: string;
  whatsappBaseUrl: string;
  hotline: string;
  email: string;
  emergencyNumber: string;
}

export interface ClinicDictionary {
  meta: {
    title: string;
    description: string;
  };
  brand: {
    name: string;
    shortName: string;
    tagline: string;
  };
  nav: {
    links: NavLinkItem[];
    bookCta: string;
    switchLabel: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    kicker: string;
    headline: string;
    supporting: string;
    primaryCta: string;
    secondaryCta: string;
    trustLine: string;
    imageAlt: string;
    floatingCard: {
      title: string;
      subtitle: string;
      meta: string;
    };
    metrics: StatItem[];
  };
  specialties: {
    kicker: string;
    heading: string;
    subheading: string;
    exploreCta: string;
    bookSpecialtyCta: string;
    modalServicesHeading: string;
    items: SpecialtyItem[];
  };
  about: {
    kicker: string;
    heading: string;
    lead: string;
    body: string;
    approachTitle: string;
    approachText: string;
    imageAlt: string;
    stats: StatItem[];
  };
  doctors: {
    kicker: string;
    heading: string;
    subheading: string;
    demoNotice: string;
    viewProfileCta: string;
    bookWithDoctorCta: string;
    modalLabels: {
      credentials: string;
      languages: string;
      branch: string;
      availability: string;
      demoBadge: string;
    };
    items: DoctorItem[];
  };
  whyChoose: {
    kicker: string;
    heading: string;
    subheading: string;
    items: WhyChooseItem[];
  };
  branches: {
    kicker: string;
    heading: string;
    subheading: string;
    addressLabel: string;
    hoursLabel: string;
    phoneLabel: string;
    bookBranchCta: string;
    whatsappCta: string;
    items: BranchItem[];
  };
  testimonials: {
    kicker: string;
    heading: string;
    subheading: string;
    demoNotice: string;
    prevLabel: string;
    nextLabel: string;
    items: TestimonialItem[];
  };
  finalCta: {
    kicker: string;
    heading: string;
    supporting: string;
    primaryCta: string;
    whatsappCta: string;
  };
  footer: {
    summary: string;
    quickLinksTitle: string;
    contactTitle: string;
    hoursTitle: string;
    hoursNote: string;
    emergencyLabel: string;
    hotlineLabel: string;
    whatsappLabel: string;
    emailLabel: string;
    copyright: string;
    demoNotice: string;
  };
  booking: {
    title: string;
    subtitle: string;
    closeLabel: string;
    fields: {
      patientName: string;
      patientNamePlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      branch: string;
      specialty: string;
      doctor: string;
      anyDoctor: string;
      noBranchDoctorHint: string;
      date: string;
      notes: string;
      notesPlaceholder: string;
      notesCounter: string;
    };
    errors: {
      nameRequired: string;
      phoneRequired: string;
      phoneInvalid: string;
      branchRequired: string;
      specialtyRequired: string;
      dateRequired: string;
      datePast: string;
      notesTooLong: string;
    };
    submitCta: string;
    privacyHint: string;
    confirmation: {
      title: string;
      subtitle: string;
      summaryPatient: string;
      summaryPhone: string;
      summaryBranch: string;
      summarySpecialty: string;
      summaryDoctor: string;
      summaryDate: string;
      summaryNotes: string;
      whatsappCta: string;
      copyMessageCta: string;
      copiedMessageCta: string;
      sendNotice: string;
      fallbackTitle: string;
      fallbackCallCta: string;
      editRequestCta: string;
      doneCta: string;
    };
    whatsappTemplate: {
      greeting: string;
      intro: string;
      patientLabel: string;
      phoneLabel: string;
      branchLabel: string;
      specialtyLabel: string;
      doctorLabel: string;
      dateLabel: string;
      notesLabel: string;
    };
  };
  mobileBar: {
    bookCta: string;
    whatsappCta: string;
  };
}
