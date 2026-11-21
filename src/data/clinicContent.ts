import { ClinicContactInfo, ClinicDictionary, Language } from '../types/clinic';
import heroClinicImg from '../assets/images/hero_clinic_lounge_clean_1795263680028.jpg';
import aboutClinicImg from '../assets/images/about_clinic_consultation_1795263664107.jpg';
import doctorLaylaImg from '../assets/images/doctor_layla_almansoori_1795263663733.jpg';
import doctorFaisalImg from '../assets/images/doctor_tariq_alhashimi_1795263663810.jpg';
import doctorNadiaImg from '../assets/images/doctor_nadia_khoury_1795263664547.jpg';
import doctorOmarImg from '../assets/images/doctor_faisal_alsuwaidi_1795263663730.jpg';

export const HERO_IMAGE = heroClinicImg;
export const ABOUT_IMAGE = aboutClinicImg;

export const CLINIC_CONTACT: ClinicContactInfo = {
  whatsappDisplay: '+201017238942',
  whatsappInternational: '201017238942',
  whatsappBaseUrl: 'https://wa.me/201017238942',
  hotline: '+971 4 800 2568',
  email: 'care@alnura-clinic.ae',
  emergencyNumber: '998',
};

export const CLINIC_CONTENT: Record<Language, ClinicDictionary> = {
  ar: {
    meta: {
      title: 'عيادة النورة الطبية | رعاية صحية متكاملة في الإمارات',
      description:
        'عيادة النورة الطبية — تجربة طبية متكاملة في دولة الإمارات تجمع بين الخبرة الطبية والتقنيات الحديثة والاهتمام الحقيقي براحتك في وسط مدينة دبي ودبي مارينا وجزيرة المارية بأبوظبي.',
    },
    brand: {
      name: 'عيادة النورة الطبية',
      shortName: 'النورة الطبية',
      tagline: 'رعاية طبية متعددة التخصصات في دولة الإمارات',
    },
    nav: {
      links: [
        { id: 'home', href: '#home', label: 'الرئيسية' },
        { id: 'about', href: '#about', label: 'عن العيادة' },
        { id: 'specialties', href: '#specialties', label: 'التخصصات' },
        { id: 'doctors', href: '#doctors', label: 'الأطباء' },
        { id: 'branches', href: '#branches', label: 'الفروع' },
        { id: 'contact', href: '#contact', label: 'تواصل معنا' },
      ],
      bookCta: 'احجز موعدك',
      switchLabel: 'English',
      openMenu: 'فتح القائمة',
      closeMenu: 'إغلاق القائمة',
    },
    hero: {
      kicker: 'وسط مدينة دبي · دبي مارينا · جزيرة المارية بأبوظبي',
      headline: 'رعايتك الصحية تستحق الأفضل',
      supporting:
        'نقدم لك تجربة طبية متكاملة تجمع بين الخبرة الطبية، والتقنيات الحديثة، والاهتمام الحقيقي براحتك.',
      primaryCta: 'احجز موعدك الآن',
      secondaryCta: 'اكتشف خدماتنا',
      trustLine: 'استشارات منظمة · خصوصية تامة للمراجعين · تنسيق مباشر عبر واتساب',
      imageAlt: 'ردهة استقبال عيادة النورة الطبية بتصميم معماري هادئ وإضاءة طبيعية',
      floatingCard: {
        title: 'تنسيق المواعيد عبر واتساب',
        subtitle: 'استفسارات سريعة ومباشرة لاختيار الفرع والتخصص والوقت المناسب',
        meta: 'الخط الساخن: ‎+971 4 800 2568',
      },
      metrics: [
        {
          value: '3',
          label: 'مواقع في دولة الإمارات',
          detail: 'وسط مدينة دبي · دبي مارينا · جزيرة المارية',
        },
        {
          value: '6',
          label: 'تخصصات طبية رئيسية',
          detail: 'عيادات خارجية متكاملة تحت سقف واحد',
        },
        {
          value: '2',
          label: 'رعاية ثنائية اللغة',
          detail: 'تواصل كامل باللغتين العربية والإنجليزية',
        },
        {
          value: '998',
          label: 'طوارئ دولة الإمارات',
          detail: 'للحالات الطارئة يرجى الاتصال فوراً بالرقم 998',
        },
      ],
    },
    specialties: {
      kicker: 'التخصصات الطبية',
      heading: 'رعاية متخصصة مصممة لاحتياجاتك الصحية',
      subheading:
        'تضم عيادة النورة ستة أقسام طبية رئيسية تركز على دقة التشخيص ووضوح الخطة العلاجية في بيئة هادئة.',
      exploreCta: 'استكشف التخصص',
      bookSpecialtyCta: 'احجز في هذا التخصص',
      modalServicesHeading: 'نطاق الخدمات والاستشارات',
      items: [
        {
          id: 'dermatology',
          index: '01',
          title: 'الأمراض الجلدية والتجميل',
          shortDesc:
            'تشخيص مشكلات البشرة والشعر وعلاجات طبية وتجميلية مدروسة تحافظ على المظهر الطبيعي.',
          fullDesc:
            'يقدم قسم الجلدية استشارات طبية متقدمة لعلاج الأمراض الجلدية، إلى جانب إجراءات العناية الطبية بالبشرة وفق تقييم سريري دقيق.',
          services: [
            'تقييم مشكلات البشرة وفحص الشامات السريري',
            'متابعة الأكزيما والصدفية وحب الشباب الطبي',
            'إجراءات العناية الجلدية والليزر العلاجي المخصص',
            'تشخيص مشكلات تساقط الشعر وفروة الرأس',
          ],
          consultationNote: 'مدة الاستشارة تُحدد حسب نوع الفحص المطلوب.',
        },
        {
          id: 'dentistry',
          index: '02',
          title: 'طب وتجميل الأسنان',
          shortDesc:
            'رعاية متقدمة لصحة الفم والأسنان بالتركيز على العلاج التحفظي وتصميم الابتسامة الطبيعي.',
          fullDesc:
            'نجمع بين طب الأسنان التحفظي والتعويضي في أجنحة علاجية هادئة تهدف إلى راحة المريض واستدامة النتائج الصحية.',
          services: [
            'الفحص الشامل والرعاية الوقائية للأسنان واللثة',
            'التركيبات التجميلية والترميمية المحافظة',
            'استشارات تقويم الأسنان وزراعتها',
            'علاج الجذور وحساسية الأسنان',
          ],
          consultationNote: 'مدة الاستشارة تُحدد حسب الخطة العلاجية.',
        },
        {
          id: 'pediatrics',
          index: '03',
          title: 'طب الأطفال وحديثي الولادة',
          shortDesc:
            'متابعة شاملة لنمو الطفل وصحته في أجواء دافئة تمنح الطفل الطمأنينة والوالدين الوضوح الكامل.',
          fullDesc:
            'يركز قسم طب الأطفال على الرعاية الوقائية ومتابعة التطور البدني والمناعي منذ الولادة وحتى سن اليافعين، مع شرح واضح للأهل.',
          services: [
            'فحوصات النمو والتطور الدورية للرضع والأطفال',
            'استشارات التطعيمات والمتابعة الوقائية',
            'تقييم ومتابعة حساسية الصدر والأنف لدى الأطفال',
            'إرشادات التغذية الصحية للأطفال',
          ],
          consultationNote: 'مواعيد مخصصة تراعي راحة الطفل والأسرة.',
        },
        {
          id: 'cardiology',
          index: '04',
          title: 'أمراض القلب والأوعية الدموية',
          shortDesc:
            'تقييمات قلبية وقائية وتشخيصية تشمل متابعة ضغط الدم وصحة القلب والأوعية الدموية.',
          fullDesc:
            'يوفر قسم القلب رعاية استباقية وعلاجية لصحة القلب والشرايين باستخدام فحوصات سريرية دقيقة لوضع خطط متابعة واضحة.',
          services: [
            'استشارات الوقاية القلبية وتقييم عوامل الخطورة',
            'متابعة ضغط الدم واضطرابات الدهون والكوليسترول',
            'تخطيط القلب وتقييم اللياقة القلبية',
            'خطط المتابعة الدورية لصحة القلب',
          ],
          consultationNote: 'تتوفر استشارات وقائية وتشخيصية منظمة.',
        },
        {
          id: 'gynecology',
          index: '05',
          title: 'أمراض النساء والتوليد',
          shortDesc:
            'رعاية طبية تحفظية ومتابعة للحمل وصحة المرأة في بيئة تراعي أقصى درجات الخصوصية والراحة.',
          fullDesc:
            'يركز قسم أمراض النساء والولادة على تقديم رعاية شاملة لصحة المرأة في مختلف مراحلها العمرية، بدءاً من الفحوصات الوقائية وحتى متابعة الحمل.',
          services: [
            'متابعة الحمل والاستشارات الدورية لصحة الأم',
            'الفحوصات الوقائية السنوية لصحة المرأة',
            'تقييم ومتابعة الاضطرابات الهرمونية',
            'استشارات ما قبل الزواج ورعاية ما بعد الولادة',
          ],
          consultationNote: 'بيئة عيادة خاصة تحترم خصوصية المراجعة بالكامل.',
        },
        {
          id: 'general',
          index: '06',
          title: 'الطب العام وطب الأسرة',
          shortDesc:
            'نقطة الانطلاق الأولى لصحة العائلة عبر الفحوصات الشاملة وإدارة الحالات المزمنة والتنسيق الطبي.',
          fullDesc:
            'يقدم أطباء الأسرة رعاية أولية متكاملة لجميع أفراد العائلة، مع الفحص الدوري العام وتنسيق التحويل إلى التخصصات الفرعية عند الحاجة.',
          services: [
            'الفحوصات الصحية الشاملة والكشف المبكر',
            'متابعة الحالات المزمنة مثل السكري والغدة الدرقية',
            'استشارات الحالات الحادة غير الطارئة',
            'إعداد خطط الوقاية الصحية والتنسيق الطبي',
          ],
          consultationNote: 'ننبه إلى أن الحالات الطارئة تستدعي الاتصال برقم الطوارئ 998.',
        },
      ],
    },
    about: {
      kicker: 'فلسفة الرعاية في النورة',
      heading: 'طب يضع راحة الإنسان في قلب كل قرار علاجي',
      lead: 'صُممت عيادة النورة الطبية لتقديم نموذج هادئ للرعاية الصحية في دولة الإمارات، بعيداً عن الازدحام والإجراءات المعقدة.',
      body: 'نؤمن أن العناية الصحية تبدأ بالإصغاء الهادئ للمراجع، وشرح النتائج والخيارات بوضوح، وتخصيص الوقت الكافي لكل استشارة في مساحات صُممت لاحترام الخصوصية والسكينة.',
      approachTitle: 'منهجنا الطبي',
      approachText:
        'استشارة متأنية، وضوح كامل في التشخيص والخيارات المتاحة، وتنسيق سلس للمواعيد عبر فروعنا في دبي وأبوظبي.',
      imageAlt: 'استشارة طبية هادئة بين الطبيب والمراجع داخل غرفة استشارة مضاءة طبيعياً في عيادة النورة',
      stats: [
        {
          value: '01',
          label: 'خصوصية وهدوء',
          detail: 'أجنحة استشارة مستقلة تراعي راحة المراجع',
        },
        {
          value: '02',
          label: 'وضوح طبي',
          detail: 'شرح مبسط وشفاف لكل خطوة علاجية',
        },
        {
          value: '03',
          label: 'تنسيق مباشر',
          detail: 'حجز واستفسار سهل عبر واتساب والخط الساخن',
        },
      ],
    },
    doctors: {
      kicker: 'الفريق الطبي',
      heading: 'فريق العيادة التخصصي',
      subheading:
        'تعرف على التخصصات الطبية الأساسية في عيادة النورة والأطباء المخصصين لكل قسم وفروعهم.',
      demoNotice:
        'ملاحظة: ملفات الأطباء أدناه هي نماذج تعريفية لأغراض العرض؛ تُستكمل المؤهلات المعتمدة وساعات العيادة النهائية عند التشغيل الفعلي.',
      viewProfileCta: 'عرض الملف التعريفي',
      bookWithDoctorCta: 'احجز موعداً مع الطبيب',
      modalLabels: {
        credentials: 'التخصص والبيانات التعريفية',
        languages: 'اللغات',
        branch: 'الفرع المخصص',
        availability: 'مواعيد العيادة',
        demoBadge: 'ملف طبي تعريفي للعرض (بيانات قابلة للتحديث)',
      },
      items: [
        {
          id: 'dr-layla',
          name: 'د. ليلى المنصوري',
          specialtyId: 'dermatology',
          specialtyTitle: 'الأمراض الجلدية والتجميل',
          subSpecialty: 'الأمراض الجلدية السريرية والعناية الطبية بالبشرة',
          profileTypeLabel: 'ملف تعريفي للعرض',
          branchId: 'downtown-dubai',
          branchName: 'وسط مدينة دبي — الإمارات',
          credentialsPlaceholder: 'يُضاف لاحقاً: المؤهلات والترخيص الطبي المعتمد للطبيب',
          languages: 'العربية، الإنجليزية',
          availabilityPlaceholder: 'تُحدد أوقات العيادة عند تأكيد جدول الفرع',
          bio: 'نموذج تعريفي لقسم الأمراض الجلدية في فرع وسط مدينة دبي، يركز على التشخيص الدقيق لمشكلات البشرة والشعر ووضع خطط عناية متوازنة.',
          image: doctorLaylaImg,
          imageAlt: 'صورة تعريفية لطبيبة قسم الأمراض الجلدية في عيادة النورة الطبية',
        },
        {
          id: 'dr-faisal',
          name: 'د. فيصل المنصوري',
          specialtyId: 'cardiology',
          specialtyTitle: 'أمراض القلب والأوعية الدموية',
          subSpecialty: 'الوقاية القلبية ومتابعة صحة القلب والشرايين',
          profileTypeLabel: 'ملف تعريفي للعرض',
          branchId: 'al-maryah-abudhabi',
          branchName: 'جزيرة المارية، أبوظبي — الإمارات',
          credentialsPlaceholder: 'يُضاف لاحقاً: المؤهلات والترخيص الطبي المعتمد للطبيب',
          languages: 'العربية، الإنجليزية',
          availabilityPlaceholder: 'تُحدد أوقات العيادة عند تأكيد جدول الفرع',
          bio: 'نموذج تعريفي لقسم أمراض القلب في فرع جزيرة المارية بأبوظبي، يركز على الفحوصات القلبية الوقائية وإدارة ضغط الدم وصحة الأوعية الدموية.',
          image: doctorFaisalImg,
          imageAlt: 'صورة تعريفية لطبيب قسم أمراض القلب في عيادة النورة الطبية',
        },
        {
          id: 'dr-nadia',
          name: 'د. نادية خوري',
          specialtyId: 'dentistry',
          specialtyTitle: 'طب وتجميل الأسنان',
          subSpecialty: 'طب الأسنان التحفظي والترميمي وتصميم الابتسامة',
          profileTypeLabel: 'ملف تعريفي للعرض',
          branchId: 'dubai-marina',
          branchName: 'دبي مارينا — الإمارات',
          credentialsPlaceholder: 'يُضاف لاحقاً: المؤهلات والترخيص الطبي المعتمد للطبيب',
          languages: 'العربية، الإنجليزية',
          availabilityPlaceholder: 'تُحدد أوقات العيادة عند تأكيد جدول الفرع',
          bio: 'نموذج تعريفي لقسم طب الأسنان في فرع دبي مارينا، يركز على العلاجات التحفظية المريحة والنتائج الجمالية الطبيعية لصحة الفم والأسنان.',
          image: doctorNadiaImg,
          imageAlt: 'صورة تعريفية لطبيبة قسم طب الأسنان في عيادة النورة الطبية',
        },
        {
          id: 'dr-omar',
          name: 'د. عمر السويدي',
          specialtyId: 'pediatrics',
          specialtyTitle: 'طب الأطفال وحديثي الولادة',
          subSpecialty: 'متابعة نمو الطفل والرعاية الوقائية للطفولة',
          profileTypeLabel: 'ملف تعريفي للعرض',
          branchId: 'downtown-dubai',
          branchName: 'وسط مدينة دبي — الإمارات',
          credentialsPlaceholder: 'يُضاف لاحقاً: المؤهلات والترخيص الطبي المعتمد للطبيب',
          languages: 'العربية، الإنجليزية',
          availabilityPlaceholder: 'تُحدد أوقات العيادة عند تأكيد جدول الفرع',
          bio: 'نموذج تعريفي لقسم طب الأطفال في فرع وسط مدينة دبي، يركز على متابعة النمو والتطور والتواصل الواضح والمطمئن مع الأهل.',
          image: doctorOmarImg,
          imageAlt: 'صورة تعريفية لطبيب قسم طب الأطفال في عيادة النورة الطبية',
        },
      ],
    },
    whyChoose: {
      kicker: 'لماذا عيادة النورة',
      heading: 'معايير تنظيمية واضحة في تجربة مصممة لراحتك',
      subheading:
        'كل تفصيل في عيادتنا يهدف إلى إزالة التوتر المعتاد عن الزيارات الطبية ومنحك تجربة منظمة ومريحة.',
      items: [
        {
          index: '01',
          title: 'كفاءات طبية متخصصة',
          description:
            'أقسام سريرية متكاملة تضم تخصصات دقيقة لتغطية احتياجات الفرد والعائلة في مكان واحد.',
        },
        {
          index: '02',
          title: 'تجهيزات تشخيصية حديثة',
          description:
            'الاعتماد على التقنيات الطبية المعاصرة لدعم دقة الفحص ووضوح التقييم السريري.',
        },
        {
          index: '03',
          title: 'رعاية تتمحور حول المراجع',
          description:
            'الاستماع الكامل للمراجع وشرح الخيارات العلاجية بأسلوب واضح وبسيط دون استعجال.',
        },
        {
          index: '04',
          title: 'بيئة هادئة تراعي الخصوصية',
          description:
            'تصميم معماري مريح، ومساحات انتظار هادئة، وتجربة استقبال تحترم خصوصيتك.',
        },
        {
          index: '05',
          title: 'سهولة تنسيق المواعيد',
          description:
            'تجهيز طلب موعدك وإرساله مباشرة عبر واتساب لتأكيد الفرع والتخصص والوقت المناسب.',
        },
      ],
    },
    branches: {
      kicker: 'فروعنا في الإمارات',
      heading: 'ثلاثة مواقع رئيسية في دبي وأبوظبي',
      subheading:
        'اختر الفرع الأقرب إليك لبدء طلب الموعد أو التواصل المباشر عبر واتساب أو الهاتف.',
      addressLabel: 'العنوان',
      hoursLabel: 'ساعات العمل',
      phoneLabel: 'الهاتف الموحد للعيادة',
      bookBranchCta: 'احجز في هذا الفرع',
      whatsappCta: 'تواصل عبر واتساب',
      items: [
        {
          id: 'downtown-dubai',
          city: 'وسط مدينة دبي',
          district: 'الإمارات العربية المتحدة',
          addressPlaceholder: 'العنوان التفصيلي: [يُضاف عنوان الفرع المعتمد في وسط مدينة دبي]',
          hoursPlaceholder: '[تُحدد ساعات العمل المعتمدة للفرع]',
          phone: CLINIC_CONTACT.hotline,
          whatsappUrl: CLINIC_CONTACT.whatsappBaseUrl,
        },
        {
          id: 'dubai-marina',
          city: 'دبي مارينا',
          district: 'الإمارات العربية المتحدة',
          addressPlaceholder: 'العنوان التفصيلي: [يُضاف عنوان الفرع المعتمد في دبي مارينا]',
          hoursPlaceholder: '[تُحدد ساعات العمل المعتمدة للفرع]',
          phone: CLINIC_CONTACT.hotline,
          whatsappUrl: CLINIC_CONTACT.whatsappBaseUrl,
        },
        {
          id: 'al-maryah-abudhabi',
          city: 'جزيرة المارية، أبوظبي',
          district: 'الإمارات العربية المتحدة',
          addressPlaceholder: 'العنوان التفصيلي: [يُضاف عنوان الفرع المعتمد في جزيرة المارية]',
          hoursPlaceholder: '[تُحدد ساعات العمل المعتمدة للفرع]',
          phone: CLINIC_CONTACT.hotline,
          whatsappUrl: CLINIC_CONTACT.whatsappBaseUrl,
        },
      ],
    },
    testimonials: {
      kicker: 'تجربة المراجعين',
      heading: 'انطباعات توضيحية عن مستوى الرعاية المستهدف',
      subheading: 'نماذج توضيحية تعكس القيم التي تحرص عيادة النورة على توفيرها في كل زيارة.',
      demoNotice: 'ملاحظة: النصوص التالية أمثلة توضيحية لتجربة الزيارة وليست تقييمات موثقة من مرضى حقيقيين.',
      prevLabel: 'النموذج السابق',
      nextLabel: 'النموذج التالي',
      items: [
        {
          id: 't1',
          quote:
            'الهدوء في صالة الاستقبال والاهتمام بالتفاصيل منذ لحظة الوصول يمنح الزائر شعوراً بالطمأنينة، مع شرح واضح لخطوات الاستشارة دون استعجال.',
          authorLabel: 'نموذج تجربة مراجع — قسم الجلدية',
          context: 'وسط مدينة دبي · الإمارات',
          note: 'مثال توضيحي',
        },
        {
          id: 't2',
          quote:
            'الأجواء الدافئة في قسم الأطفال والتواصل الهادئ مع الأهل يجعل زيارة الطبيب تجربة مريحة وواضحة للطفل والأسرة.',
          authorLabel: 'نموذج تجربة أسرة — قسم الأطفال',
          context: 'وسط مدينة دبي · الإمارات',
          note: 'مثال توضيحي',
        },
        {
          id: 't3',
          quote:
            'تنظيم المواعيد المسبق وتنسيق الفحوصات في زيارة واحدة يوفر وقت المراجع ويمنحه صورة واضحة عن خطة المتابعة الصحية.',
          authorLabel: 'نموذج تجربة مراجع — قسم القلب',
          context: 'جزيرة المارية، أبوظبي · الإمارات',
          note: 'مثال توضيحي',
        },
      ],
    },
    finalCta: {
      kicker: 'ابدأ طلب موعدك',
      heading: 'تواصل معنا لتنسيق زيارتك في دبي أو أبوظبي',
      supporting:
        'اختر الفرع والتخصص والوقت المفضل، ثم أرسل تفاصيل الطلب مباشرة إلى فريق العيادة عبر واتساب.',
      primaryCta: 'احجز موعدك الآن',
      whatsappCta: 'تواصل عبر واتساب',
    },
    footer: {
      summary:
        'عيادة النورة الطبية — واجهة تعريفية لتجربة رعاية صحية متعددة التخصصات في وسط مدينة دبي ودبي مارينا وجزيرة المارية بأبوظبي.',
      quickLinksTitle: 'روابط سريعة',
      contactTitle: 'معلومات التواصل الرسمية',
      hoursTitle: 'ساعات العمل والطوارئ',
      hoursNote: 'ساعات عمل الفروع: [تُضاف ساعات العمل المعتمدة لكل فرع]',
      emergencyLabel: 'طوارئ دولة الإمارات (للحالات العاجلة):',
      hotlineLabel: 'الخط الساخن:',
      whatsappLabel: 'واتساب الحجوزات:',
      emailLabel: 'البريد الإلكتروني:',
      copyright: '© 2026 عيادة النورة الطبية. جميع الحقوق محفوظة.',
      demoNotice:
        'تنويه: هذا الموقع تطبيق واجهة أمامية فقط لا يخزن بيانات المرضى؛ تُرسل طلبات المواعيد مباشرة عبر تطبيق واتساب بمبادرة من المستخدم.',
    },
    booking: {
      title: 'طلب حجز موعد طبي',
      subtitle: 'املأ تفاصيل الزيارة المطلوبة لإعداد رسالة حجز جاهزة للإرسال عبر واتساب.',
      closeLabel: 'إغلاق نافذة الحجز',
      fields: {
        patientName: 'الاسم الكامل للمراجع',
        patientNamePlaceholder: 'أدخل الاسم الكامل',
        phone: 'رقم الهاتف للتواصل',
        phonePlaceholder: '+971 50 000 0000',
        branch: 'الفرع المفضل',
        specialty: 'التخصص الطبي',
        doctor: 'الطبيب المفضل',
        anyDoctor: 'أي طبيب متاح في هذا التخصص',
        noBranchDoctorHint:
          'سيتم تنسيق الزيارة مع الطبيب المتاح في هذا التخصص ضمن الفرع المختار.',
        date: 'التاريخ المفضل للزيارة',
        notes: 'ملاحظات إضافية (اختياري)',
        notesPlaceholder: 'اذكر الوقت المفضل خلال اليوم أو أي ملاحظات إدارية موجزة (دون تفاصيل طبية حساسة)',
        notesCounter: 'حرف',
      },
      errors: {
        nameRequired: 'يرجى إدخال الاسم الكامل للمراجع (حرفين على الأقل).',
        phoneRequired: 'يرجى إدخال رقم هاتف للتواصل.',
        phoneInvalid: 'يرجى إدخال رقم هاتف صحيح (من 8 إلى 15 رقماً).',
        branchRequired: 'يرجى اختيار الفرع المفضل.',
        specialtyRequired: 'يرجى اختيار التخصص الطبي.',
        dateRequired: 'يرجى اختيار التاريخ المفضل للزيارة.',
        datePast: 'لا يمكن اختيار تاريخ في الماضي؛ يرجى اختيار اليوم أو تاريخاً لاحقاً.',
        notesTooLong: 'يرجى اختصار الملاحظات إلى 300 حرف كحد أقصى.',
      },
      submitCta: 'مراجعة الطلب وإعداده للإرسال',
      privacyHint:
        'لا يتم حفظ بياناتك في المتصفح أو إرسالها لأي خادم؛ ستفتح رسالة واتساب لإرسالها يدوياً.',
      confirmation: {
        title: 'طلب موعدك جاهز للإرسال إلى العيادة.',
        subtitle:
          'راجع التفاصيل التالية ثم اضغط على زر الإرسال عبر واتساب لإتمام إرسال طلبك إلى فريق الحجوزات:',
        summaryPatient: 'المراجع',
        summaryPhone: 'رقم التواصل',
        summaryBranch: 'الفرع',
        summarySpecialty: 'التخصص',
        summaryDoctor: 'الطبيب',
        summaryDate: 'التاريخ المفضل',
        summaryNotes: 'ملاحظات',
        whatsappCta: 'إرسال الطلب عبر واتساب الآن',
        copyMessageCta: 'نسخ نص الرسالة',
        copiedMessageCta: 'تم نسخ الرسالة',
        sendNotice:
          'مهم: لم يتم حجز الموعد تلقائياً بعد. يجب إرسال رسالة واتساب أعلاه لإتمام تقديم طلبك إلى العيادة.',
        fallbackTitle: 'في حال تعذر فتح واتساب تلقائياً:',
        fallbackCallCta: 'الاتصال بالخط الساخن للعيادة',
        editRequestCta: 'تعديل البيانات',
        doneCta: 'إغلاق والعودة',
      },
      whatsappTemplate: {
        greeting: 'مرحباً فريق عيادة النورة الطبية،',
        intro: 'أرغب في طلب حجز موعد طبي بالتفاصيل التالية:',
        patientLabel: 'الاسم',
        phoneLabel: 'رقم التواصل',
        branchLabel: 'الفرع',
        specialtyLabel: 'التخصص',
        doctorLabel: 'الطبيب',
        dateLabel: 'التاريخ المفضل',
        notesLabel: 'ملاحظات إضافية',
      },
    },
    mobileBar: {
      bookCta: 'احجز موعدك الآن',
      whatsappCta: 'واتساب',
    },
  },
  en: {
    meta: {
      title: 'Al Nura Medical Clinic | Integrated Healthcare in the UAE',
      description:
        'Al Nura Medical Clinic provides multi-specialty outpatient healthcare inquiries across Downtown Dubai, Dubai Marina, and Al Maryah Island, Abu Dhabi.',
    },
    brand: {
      name: 'Al Nura Medical Clinic',
      shortName: 'Al Nura Clinic',
      tagline: 'Multi-specialty outpatient care in the United Arab Emirates',
    },
    nav: {
      links: [
        { id: 'home', href: '#home', label: 'Home' },
        { id: 'about', href: '#about', label: 'About Us' },
        { id: 'specialties', href: '#specialties', label: 'Specialties' },
        { id: 'doctors', href: '#doctors', label: 'Doctors' },
        { id: 'branches', href: '#branches', label: 'Branches' },
        { id: 'contact', href: '#contact', label: 'Contact' },
      ],
      bookCta: 'Book Appointment',
      switchLabel: 'العربية',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
    },
    hero: {
      kicker: 'Downtown Dubai · Dubai Marina · Al Maryah Island, Abu Dhabi',
      headline: 'Your health deserves unhurried, exceptional care',
      supporting:
        'We offer an integrated medical experience combining clinical expertise, modern diagnostics, and genuine attentiveness to your comfort.',
      primaryCta: 'Book Your Appointment',
      secondaryCta: 'Explore Services',
      trustLine: 'Organized consultations · Patient privacy · Direct WhatsApp coordination',
      imageAlt: 'Sunlit travertine and oak reception lounge at Al Nura Medical Clinic',
      floatingCard: {
        title: 'Direct WhatsApp Appointment Desk',
        subtitle: 'Prepare your branch, specialty, and date inquiry in seconds',
        meta: 'Clinic Hotline: +971 4 800 2568',
      },
      metrics: [
        {
          value: '3',
          label: 'UAE Locations',
          detail: 'Downtown Dubai · Dubai Marina · Al Maryah Island',
        },
        {
          value: '6',
          label: 'Medical Specialties',
          detail: 'Coordinated outpatient departments',
        },
        {
          value: '2',
          label: 'Bilingual Experience',
          detail: 'Full Arabic and English support',
        },
        {
          value: '998',
          label: 'UAE Emergency Line',
          detail: 'For medical emergencies, call 998 immediately',
        },
      ],
    },
    specialties: {
      kicker: 'Medical Specialties',
      heading: 'Focused clinical care tailored to your health needs',
      subheading:
        'Six outpatient departments structured around clear clinical evaluation and calm, unhurried patient communication.',
      exploreCta: 'Explore specialty',
      bookSpecialtyCta: 'Book in this specialty',
      modalServicesHeading: 'Clinical Scope & Consultations',
      items: [
        {
          id: 'dermatology',
          index: '01',
          title: 'Dermatology',
          shortDesc:
            'Clinical evaluation for skin and hair concerns alongside thoughtful, natural-looking care.',
          fullDesc:
            'Our Dermatology department offers medical consultations for skin conditions alongside medically guided skincare and laser care.',
          services: [
            'Clinical skin assessments and mole evaluations',
            'Management of eczema, psoriasis, and medical acne',
            'Tailored dermatological skin and laser care',
            'Scalp and hair thinning consultations',
          ],
          consultationNote: 'Consultation duration varies by clinical assessment.',
        },
        {
          id: 'dentistry',
          index: '02',
          title: 'Dentistry',
          shortDesc:
            'Restorative and cosmetic dental care focused on conservative treatment and natural aesthetics.',
          fullDesc:
            'Designed for comfort and precision, our dental department supports preventive oral health, conservative restorations, and smile aesthetics.',
          services: [
            'Comprehensive dental exams and preventive hygiene',
            'Conservative restorative and aesthetic dentistry',
            'Orthodontic and dental implant consultations',
            'Endodontic care and tooth sensitivity management',
          ],
          consultationNote: 'Consultation duration follows the planned dental evaluation.',
        },
        {
          id: 'pediatrics',
          index: '03',
          title: 'Pediatrics',
          shortDesc:
            'Attentive developmental and preventive care in a calm environment built to reassure children.',
          fullDesc:
            'Our Pediatrics department partners with parents from infancy through adolescence on growth monitoring, preventive care, and respiratory health.',
          services: [
            'Routine infant and childhood growth checks',
            'Immunization consultations and preventive guidance',
            'Pediatric allergy and respiratory evaluations',
            'Childhood nutrition and wellness guidance',
          ],
          consultationNote: 'Appointments scheduled with family comfort in mind.',
        },
        {
          id: 'cardiology',
          index: '04',
          title: 'Cardiology',
          shortDesc:
            'Preventive cardiac evaluations, blood pressure management, and cardiovascular wellness care.',
          fullDesc:
            'Our Cardiology unit focuses on preventive cardiovascular assessments, risk-factor evaluation, and structured long-term follow-up.',
          services: [
            'Preventive cardiac consultations and risk screening',
            'Blood pressure and lipid disorder management',
            'ECG evaluation and cardiac wellness checks',
            'Long-term cardiovascular follow-up planning',
          ],
          consultationNote: 'Structured preventive and outpatient evaluations available.',
        },
        {
          id: 'gynecology',
          index: '05',
          title: 'Gynecology',
          shortDesc:
            'Discreet, compassionate women’s health and prenatal care in a setting built for full privacy.',
          fullDesc:
            'Our Gynecology department supports women across every life stage with private consultations, prenatal monitoring, and preventive care.',
          services: [
            'Prenatal monitoring and maternal health consultations',
            'Annual preventive women’s wellness screenings',
            'Hormonal balance evaluation and management',
            'Preconception and postnatal care guidance',
          ],
          consultationNote: 'Private consultation suites prioritizing patient discretion.',
        },
        {
          id: 'general',
          index: '06',
          title: 'General Medicine',
          shortDesc:
            'Your primary healthcare anchor for general check-ups, chronic care coordination, and routine visits.',
          fullDesc:
            'Family physicians deliver accessible primary care—from general health screenings to managing chronic conditions and coordinating specialist referrals.',
          services: [
            'General health screenings and preventive checks',
            'Chronic care follow-up for diabetes and thyroid health',
            'Non-emergency acute outpatient consultations',
            'Preventive planning and specialist coordination',
          ],
          consultationNote: 'For urgent medical emergencies in the UAE, always dial 998.',
        },
      ],
    },
    about: {
      kicker: 'Our Clinical Philosophy',
      heading: 'Medicine designed around human calm and clinical clarity',
      lead: 'Al Nura Medical Clinic is envisioned as a calm outpatient environment in the UAE—replacing rushed visits with attentive clinical conversation.',
      body: 'We believe healthcare begins with unhurried listening, transparent explanations of your options, and private spaces designed to put visitors at ease across Dubai and Abu Dhabi.',
      approachTitle: 'Our Care Standard',
      approachText:
        'Attentive consultations, clear next steps, and streamlined scheduling across Downtown Dubai, Dubai Marina, and Al Maryah Island.',
      imageAlt: 'Physician in calm consultation with a patient inside a sunlit suite at Al Nura Medical Clinic',
      stats: [
        {
          value: '01',
          label: 'Private Suites',
          detail: 'Calm consultation rooms built for discretion',
        },
        {
          value: '02',
          label: 'Clinical Clarity',
          detail: 'Clear explanations of findings and next steps',
        },
        {
          value: '03',
          label: 'Direct Coordination',
          detail: 'Straightforward booking via WhatsApp and hotline',
        },
      ],
    },
    doctors: {
      kicker: 'Medical Team',
      heading: 'Specialist Department Profiles',
      subheading:
        'Explore our core clinical departments and the demonstration physician profiles assigned to each branch.',
      demoNotice:
        'Note: The physician profiles below are demonstration placeholders for presentation purposes. Verified medical licenses and live schedules are added upon clinic onboarding.',
      viewProfileCta: 'View profile',
      bookWithDoctorCta: 'Book with this doctor',
      modalLabels: {
        credentials: 'Department & Credential Status',
        languages: 'Languages',
        branch: 'Assigned Branch',
        availability: 'Consultation Schedule',
        demoBadge: 'Demonstration profile (editable placeholders)',
      },
      items: [
        {
          id: 'dr-layla',
          name: 'Dr. Layla Al Mansoori',
          specialtyId: 'dermatology',
          specialtyTitle: 'Dermatology',
          subSpecialty: 'Clinical Dermatology & Medical Skincare',
          profileTypeLabel: 'Demo Profile',
          branchId: 'downtown-dubai',
          branchName: 'Downtown Dubai — UAE',
          credentialsPlaceholder: '[Editable: Verified medical board credentials & license ID]',
          languages: 'Arabic, English',
          availabilityPlaceholder: '[Editable: Branch consultation schedule]',
          bio: 'Demonstration profile for the Dermatology department at Downtown Dubai, focused on clinical skin assessments and measured restorative care.',
          image: '/src/assets/images/doctor_layla_almansoori_1795263663733.jpg',
          imageAlt: 'Demonstration portrait for Dermatology at Al Nura Medical Clinic',
        },
        {
          id: 'dr-faisal',
          name: 'Dr. Faisal Al Mansoori',
          specialtyId: 'cardiology',
          specialtyTitle: 'Cardiology',
          subSpecialty: 'Preventive Cardiology & Vascular Wellness',
          profileTypeLabel: 'Demo Profile',
          branchId: 'al-maryah-abudhabi',
          branchName: 'Al Maryah Island, Abu Dhabi — UAE',
          credentialsPlaceholder: '[Editable: Verified medical board credentials & license ID]',
          languages: 'Arabic, English',
          availabilityPlaceholder: '[Editable: Branch consultation schedule]',
          bio: 'Demonstration profile for the Cardiology department at Al Maryah Island, Abu Dhabi, focused on preventive cardiovascular assessments and blood pressure follow-up.',
          image: '/src/assets/images/doctor_tariq_alhashimi_1795263663810.jpg',
          imageAlt: 'Demonstration portrait for Cardiology at Al Nura Medical Clinic',
        },
        {
          id: 'dr-nadia',
          name: 'Dr. Nadia Khoury',
          specialtyId: 'dentistry',
          specialtyTitle: 'Dentistry',
          subSpecialty: 'Restorative & Aesthetic Dental Care',
          profileTypeLabel: 'Demo Profile',
          branchId: 'dubai-marina',
          branchName: 'Dubai Marina — UAE',
          credentialsPlaceholder: '[Editable: Verified medical board credentials & license ID]',
          languages: 'Arabic, English',
          availabilityPlaceholder: '[Editable: Branch consultation schedule]',
          bio: 'Demonstration profile for the Dentistry department at Dubai Marina, focused on gentle conservative care and natural-looking dental aesthetics.',
          image: '/src/assets/images/doctor_nadia_khoury_1795263664547.jpg',
          imageAlt: 'Demonstration portrait for Dentistry at Al Nura Medical Clinic',
        },
        {
          id: 'dr-omar',
          name: 'Dr. Omar Al Suwaidi',
          specialtyId: 'pediatrics',
          specialtyTitle: 'Pediatrics',
          subSpecialty: 'Childhood Development & Preventive Care',
          profileTypeLabel: 'Demo Profile',
          branchId: 'downtown-dubai',
          branchName: 'Downtown Dubai — UAE',
          credentialsPlaceholder: '[Editable: Verified medical board credentials & license ID]',
          languages: 'Arabic, English',
          availabilityPlaceholder: '[Editable: Branch consultation schedule]',
          bio: 'Demonstration profile for the Pediatrics department at Downtown Dubai, focused on childhood development checks and reassuring family communication.',
          image: '/src/assets/images/doctor_faisal_alsuwaidi_1795263663730.jpg',
          imageAlt: 'Demonstration portrait for Pediatrics at Al Nura Medical Clinic',
        },
      ],
    },
    whyChoose: {
      kicker: 'Why Choose Al Nura',
      heading: 'Structured clinical organization paired with calm hospitality',
      subheading:
        'Every touchpoint is designed to remove friction from outpatient visits and keep communication clear.',
      items: [
        {
          index: '01',
          title: 'Dedicated Clinical Specialties',
          description:
            'Six focused outpatient departments designed to address individual and family health needs.',
        },
        {
          index: '02',
          title: 'Modern Diagnostic Capabilities',
          description:
            'Contemporary outpatient assessment workflows supporting accurate clinical evaluation.',
        },
        {
          index: '03',
          title: 'Patient-Centered Communication',
          description:
            'Unhurried consultations with transparent explanations of findings and care options.',
        },
        {
          index: '04',
          title: 'Calm, Private Environment',
          description:
            'Sunlit architectural interiors and discreet reception areas built for visitor comfort.',
        },
        {
          index: '05',
          title: 'Direct Appointment Coordination',
          description:
            'Prepare your branch and specialty request online and send it directly via WhatsApp.',
        },
      ],
    },
    branches: {
      kicker: 'Our UAE Branches',
      heading: 'Three clinic locations across Dubai and Abu Dhabi',
      subheading:
        'Select your preferred branch to start an appointment inquiry or reach our team directly.',
      addressLabel: 'Address',
      hoursLabel: 'Working Hours',
      phoneLabel: 'Clinic Hotline',
      bookBranchCta: 'Book at this branch',
      whatsappCta: 'WhatsApp Desk',
      items: [
        {
          id: 'downtown-dubai',
          city: 'Downtown Dubai',
          district: 'United Arab Emirates',
          addressPlaceholder: 'Address: [Editable street address — Downtown Dubai, UAE]',
          hoursPlaceholder: '[Editable branch working hours]',
          phone: CLINIC_CONTACT.hotline,
          whatsappUrl: CLINIC_CONTACT.whatsappBaseUrl,
        },
        {
          id: 'dubai-marina',
          city: 'Dubai Marina',
          district: 'United Arab Emirates',
          addressPlaceholder: 'Address: [Editable street address — Dubai Marina, UAE]',
          hoursPlaceholder: '[Editable branch working hours]',
          phone: CLINIC_CONTACT.hotline,
          whatsappUrl: CLINIC_CONTACT.whatsappBaseUrl,
        },
        {
          id: 'al-maryah-abudhabi',
          city: 'Al Maryah Island, Abu Dhabi',
          district: 'United Arab Emirates',
          addressPlaceholder: 'Address: [Editable street address — Al Maryah Island, Abu Dhabi, UAE]',
          hoursPlaceholder: '[Editable branch working hours]',
          phone: CLINIC_CONTACT.hotline,
          whatsappUrl: CLINIC_CONTACT.whatsappBaseUrl,
        },
      ],
    },
    testimonials: {
      kicker: 'Patient Experience',
      heading: 'Illustrative patient experience perspectives',
      subheading:
        'Example reflections illustrating the standard of calm communication Al Nura aims to uphold.',
      demoNotice:
        'Notice: The entries below are illustrative experience examples for showcase purposes, not verified external patient reviews.',
      prevLabel: 'Previous example',
      nextLabel: 'Next example',
      items: [
        {
          id: 't1',
          quote:
            'The quiet atmosphere from reception onward eases clinic anxiety, and having the consultation steps explained clearly without rushing makes all the difference.',
          authorLabel: 'Illustrative Patient Perspective — Dermatology',
          context: 'Downtown Dubai · UAE',
          note: 'Illustrative example',
        },
        {
          id: 't2',
          quote:
            'Warm pediatric communication and clear guidance for parents turn routine childhood check-ups into a calm, reassuring visit for the whole family.',
          authorLabel: 'Illustrative Family Perspective — Pediatrics',
          context: 'Downtown Dubai · UAE',
          note: 'Illustrative example',
        },
        {
          id: 't3',
          quote:
            'Organized scheduling and clear preventive discussions help visitors understand their cardiovascular follow-up plan without confusion.',
          authorLabel: 'Illustrative Patient Perspective — Cardiology',
          context: 'Al Maryah Island, Abu Dhabi · UAE',
          note: 'Illustrative example',
        },
      ],
    },
    finalCta: {
      kicker: 'Request a Visit',
      heading: 'Coordinate your consultation in Dubai or Abu Dhabi',
      supporting:
        'Choose your branch, medical specialty, and preferred date, then send your inquiry directly to the clinic via WhatsApp.',
      primaryCta: 'Book Your Appointment',
      whatsappCta: 'Message on WhatsApp',
    },
    footer: {
      summary:
        'Al Nura Medical Clinic — a frontend outpatient healthcare showcase serving Downtown Dubai, Dubai Marina, and Al Maryah Island, Abu Dhabi.',
      quickLinksTitle: 'Quick Links',
      contactTitle: 'Official Contact Details',
      hoursTitle: 'Hours & Emergency',
      hoursNote: 'Branch Hours: [Editable clinic operating schedule per branch]',
      emergencyLabel: 'UAE Emergency Number (Urgent cases):',
      hotlineLabel: 'Clinic Hotline:',
      whatsappLabel: 'Booking WhatsApp:',
      emailLabel: 'Email:',
      copyright: '© 2026 Al Nura Medical Clinic. All rights reserved.',
      demoNotice:
        'Notice: This is a frontend-only website. No patient information is stored in browser storage or sent to a backend; inquiries are sent directly via WhatsApp by user action.',
    },
    booking: {
      title: 'Request an Appointment',
      subtitle:
        'Complete your visit preferences to prepare an appointment inquiry message for WhatsApp.',
      closeLabel: 'Close booking modal',
      fields: {
        patientName: 'Patient Full Name',
        patientNamePlaceholder: 'Enter full name',
        phone: 'Contact Phone Number',
        phonePlaceholder: '+971 50 000 0000',
        branch: 'Preferred Branch',
        specialty: 'Medical Specialty',
        doctor: 'Preferred Doctor',
        anyDoctor: 'Any available specialist in this specialty',
        noBranchDoctorHint:
          'Your visit will be coordinated with an available specialist at the selected branch.',
        date: 'Preferred Date',
        notes: 'Additional Notes (Optional)',
        notesPlaceholder:
          'Preferred time of day or brief scheduling preference (avoid sensitive medical history)',
        notesCounter: 'chars',
      },
      errors: {
        nameRequired: 'Please enter the patient’s full name (at least 2 characters).',
        phoneRequired: 'Please enter a contact phone number.',
        phoneInvalid: 'Please enter a valid phone number (8 to 15 digits).',
        branchRequired: 'Please select a branch.',
        specialtyRequired: 'Please select a medical specialty.',
        dateRequired: 'Please choose a preferred date.',
        datePast: 'Preferred date cannot be in the past. Choose today or a future date.',
        notesTooLong: 'Notes must be 300 characters or fewer.',
      },
      submitCta: 'Review & Prepare Inquiry',
      privacyHint:
        'Your details are not stored in browser storage or transmitted to a server; you send the WhatsApp message yourself.',
      confirmation: {
        title: 'Your appointment request is ready to be sent to the clinic.',
        subtitle:
          'Review your details below and click the WhatsApp button to send your appointment inquiry directly to our desk:',
        summaryPatient: 'Patient',
        summaryPhone: 'Contact Number',
        summaryBranch: 'Branch',
        summarySpecialty: 'Specialty',
        summaryDoctor: 'Doctor',
        summaryDate: 'Preferred Date',
        summaryNotes: 'Notes',
        whatsappCta: 'Send Inquiry via WhatsApp',
        copyMessageCta: 'Copy Message Text',
        copiedMessageCta: 'Message Copied',
        sendNotice:
          'Important: Your appointment is not automatically booked yet. Please send the WhatsApp message above to complete your inquiry.',
        fallbackTitle: 'If WhatsApp does not open automatically:',
        fallbackCallCta: 'Call Clinic Hotline',
        editRequestCta: 'Edit Details',
        doneCta: 'Close & Return',
      },
      whatsappTemplate: {
        greeting: 'Hello Al Nura Medical Clinic team,',
        intro: 'I would like to request an appointment with the following details:',
        patientLabel: 'Name',
        phoneLabel: 'Contact Phone',
        branchLabel: 'Branch',
        specialtyLabel: 'Specialty',
        doctorLabel: 'Preferred Doctor',
        dateLabel: 'Preferred Date',
        notesLabel: 'Notes',
      },
    },
    mobileBar: {
      bookCta: 'Book Appointment',
      whatsappCta: 'WhatsApp',
    },
  },
};
