/**
 * Bilingual Translation Dictionary for Nilay Trade
 * Persian (RTL) & English (LTR)
 * Natural, professional international trade terminology.
 */

export type Language = 'fa' | 'en';

export const translations = {
  fa: {
    nav: {
      home: "صفحه اصلی",
      services: "خدمات تخصصی",
      producers: "برای تولیدکنندگان ایرانی",
      buyers: "برای خریداران بین‌المللی",
      intelligence: "تحقیق و تحلیل بازار",
      sectors: "محصولات و صنایع",
      howWeWork: "نحوه همکاری",
      about: "درباره نیلای ترید",
      insights: "پایگاه دانش صادرات",
      caseStudies: "پروژه‌ها و تجربیات",
      contact: "تماس با ما",
      requestConsultation: "درخواست مشاوره",
      more: "سایر بخش‌ها",
      switchLanguage: "English",
    },
    hero: {
      headline: "پیوند کسب‌وکارهای ایرانی به بازارهای بین‌المللی",
      subheadline: "توسعه ساختاریافته صادرات و ارتباط مستقیم B2B بر پایه تحقیق بازار، تحلیل داده‌های واقعی و ارتباطات تجاری پایدار",
      primaryCta: "درخواست مشاوره اختصاصی",
      secondaryCta: "مشاهده خدمات تخصصی",
      trustPill: "توسعه پایدار تجارت خارجی بدون آمارهای اغراق‌آمیز",
      pathwaysTitle: "مسیر تجاری متناسب با نیاز خود را انتخاب کنید:",
      path1Title: "تولیدکننده ایرانی هستم",
      path1Desc: "محصول باکیفیت دارم و به دنبال شناسایی بازارهای هدف و خریداران خارجی واقعی هستم.",
      path1Btn: "ارزیابی فرصت صادراتی",
      path2Title: "خریدار یا بازرگان بین‌المللی هستم",
      path2Desc: "در جستجوی تامین‌کنندگان معتبر ایرانی و سورسینگ حرفه‌ای کالا با استانداردهای کیفی می‌باشم.",
      path2Btn: "ثبت درخواست سورسینگ",
      path3Title: "تحقیق و تحلیل بازار می‌خواهم",
      path3Desc: "به تحلیل داده‌های واردات، ارزیابی رقبا و شناسایی توزیع‌کنندگان در مقاصد خارجی نیاز دارم.",
      path3Btn: "مشاهده گزارش‌های تحلیلی بازار",
    },
    whatWeDo: {
      title: "ستون‌های فعالیت نیلای ترید",
      subtitle: "ما صرفاً یک واسطه یا شرکت حمل‌ونقل نیستیم؛ ما شریک استراتژیک توسعه بازار شما در تراز جهانی هستیم.",
      pillars: [
        {
          num: "۰۱",
          title: "تحقیقات و تحلیل بازارهای بین‌المللی",
          desc: "تحلیل آماری حجم واردات، موانع گمرکی، تعرفه‌ها و شناسایی روندهای نوظهور در بازارهای هدف پیش از هرگونه اقدام عملیاتی."
        },
        {
          num: "۰۲",
          title: "توسعه ساختاریافته صادرات",
          desc: "فرآیندسازی مرحله‌به‌مرحله از آماده‌سازی و استانداردسازی مشخصات فنی محصول تا قیمت‌گذاری اینکوترمز و قراردادهای بین‌المللی."
        },
        {
          num: "۰۳",
          title: "بازاریابی تخصصی B2B بین‌المللی",
          desc: "جایگاه‌سازی حرفه‌ای برند، تدوین شناسنامه‌های فنی استاندارد (TDS) و طراحی کاتالوگ‌های منطبق بر ادبیات تصمیم‌گیرندگان جهانی."
        },
        {
          num: "۰۴",
          title: "شناسایی و اعتبارسنجی خریداران و تامین‌کنندگان",
          desc: "برقراری ارتباط مستقیم با واردکنندگان فعال، شبکه‌های توزیع بومی و تولیدکنندگان اصلی با ردپای تجاری راستی‌آزمایی‌شده."
        },
        {
          num: "۰۵",
          title: "توسعه کسب‌وکار و پیوندهای تجاری پایدار",
          desc: "همراهی در مذاکرات تجاری، مدیریت استعلام‌ها (RFQ)، رفع سوءتفاهم‌های فرهنگی-زبانی و ایجاد جریان‌های سفارش تکرارشونده."
        }
      ]
    },
    processFlow: {
      title: "از محصول تا بازار بین‌المللی",
      subtitle: "رویکرد مرحله‌ای و داده‌محور ما برای رساندن امن و موفق محصول به مقاصد تجاری",
      steps: [
        { step: "۱", label: "محصول اولیه", desc: "بررسی کیفیت، ظرفیت تولید و مزیت رقابتی" },
        { step: "۲", label: "تحلیل بازار", desc: "بررسی آماری داده‌های تجاری و تعرفه‌ها" },
        { step: "۳", label: "انتخاب بازار هدف", desc: "اولویت‌بندی مناسب‌ترین کشورها برای ورود" },
        { step: "۴", label: "شناسایی خریدار/تامین‌کننده", desc: "استخراج و راستی‌آزمایی شرکای تجاری واقعی" },
        { step: "۵", label: "مکاتبات تجاری", desc: "معرفی حرفه‌ای و ارسال استعلام‌ها به زبان مقصد" },
        { step: "۶", label: "پشتیبانی مذاکره", desc: "توافق بر سر قیمت، اینکوترمز و شرایط پرداخت" },
        { step: "۷", label: "توسعه پایدار تجارت", desc: "مدیریت سفارشات تکراری و قراردادهای بلندمدت" }
      ]
    },
    whyNilay: {
      title: "چرا نیلای ترید؟",
      subtitle: "اصولی که وجه تمایز ما در بازار بین‌المللی را شکل می‌دهند",
      points: [
        {
          title: "پژوهش پیش از هر اقدام",
          desc: "ما هیچ پروژه‌ای را بدون داده‌های معتبر و سنجش دقیق موانع آغاز نمی‌کنیم تا از هدررفت سرمایه جلوگیری شود."
        },
        {
          title: "تمرکز مطلق بر روابط B2B",
          desc: "رویکرد ما متمرکز بر ساختارهای تجارت عمده‌فروشی، زنجیره ارزش صنعتی و تعاملات پایدار سازمانی است."
        },
        {
          title: "ارتباطات حرفه‌ای و استاندارد",
          desc: "زبان مذاکره و مستندات تجاری ما منطبق بر استانداردهای مورد انتظار اتاق‌های بازرگانی و مدیران خرید جهانی است."
        },
        {
          title: "شفافیت تجاری بدون ادعای واهی",
          desc: "هیچ‌گونه آمار ساختگی، ادعای تضمین ۱۰۰ درصدی یا وعده‌های غیرواقعی در نیلای ترید جایی ندارد؛ تصمیمات بر مبنای شواهد است."
        },
        {
          title: "پایداری روابط فراتر از تک‌معامله",
          desc: "هدف ما استقرار کانال‌های پایدار فروش و سورسینگ مداوم است، نه انجام یک معامله مقطعی و رهاسازی زنجیره."
        },
        {
          title: "انعطاف‌پذیری در حوزه‌های کالایی",
          desc: "ما محدود به یک کالای خاص نیستیم؛ متدولوژی ما بر تقاضای بازار و توانایی‌های صنعتی طرفین تمرکز دارد."
        }
      ]
    },
    howWeWork: {
      title: "نحوه همکاری ما",
      subtitle: "فرآیند ۵ مرحله‌ای شفاف از درک اهداف تا توسعه بازارهای صادراتی",
      steps: [
        {
          number: "۰۱",
          name: "شناخت (Understand)",
          desc: "بررسی جامع مشخصات فنی محصول، ظرفیت واقعی تولید، گواهی‌نامه‌ها و اهداف تجاری شرکت شما."
        },
        {
          number: "۰۲",
          name: "پژوهش (Research)",
          desc: "تحلیل موشکافانه داده‌های تقاضای جهانی، روندهای واردات، رقبا و فرصت‌های تعرفه‌ای در کشورهای مختلف."
        },
        {
          number: "۰۳",
          name: "انتخاب (Select)",
          desc: "شناسایی مناسب‌ترین بازارهای هدف با بالاترین احتمال موفقیت تجاری و کمترین ریسک‌های بازرگانی."
        },
        {
          number: "۰۴",
          name: "پیوند (Connect)",
          desc: "استخراج و راستی‌آزمایی خریداران و شرکای تجاری مرتبط و هدایت حرفه‌ای مکاتبات تجاری بین‌المللی."
        },
        {
          number: "۰۵",
          name: "توسعه (Develop)",
          desc: "پشتیبانی در مذاکرات قراردادی، حل چالش‌های اجرایی و ساختاربندی روابط تجاری بلندمدت و تکرارشونده."
        }
      ]
    },
    common: {
      exploreServices: "مشاهده تمام خدمات",
      viewAllReports: "مشاهده تمام گزارش‌ها",
      viewAllSectors: "مشاهده تمام حوزه‌ها",
      requestProposal: "درخواست پیشنهاد اختصاصی",
      filterBy: "فیلتر بر اساس:",
      all: "همه موارد",
      readMore: "مطالعه مقاله کامل",
      requestCustomResearch: "درخواست پژوهش اختصاصی برای محصول شما",
      preliminaryNotice: "توجه: این گزارش بر مبنای چارچوب تحلیلی استاندارد نیلای ترید آماده شده و نسخه‌های سفارشی حاوی داده‌های میدانی زنده با درخواست رسمی ارائه می‌گردد.",
      copyright: "تمامی حقوق مادی و معنوی متعلق به شرکت نیلای ترید (Nilay Trade) می‌باشد.",
      founderQuote: "صادرات پایدار نتیجه تصادف نیست؛ حاصل درک عمیق از بازار، احترام به استانداردهای خریدار و استمرار در ارتباطات حرفه‌ای تجاری است.",
      submitSuccess: "درخواست شما با موفقیت ثبت شد. تیم کارشناسی نیلای ترید ظرف ۲۴ ساعت کاری با شما تماس خواهد گرفت.",
      requiredField: "تکمیل این فیلد الزامی است.",
      contactLeadTitle: "آماده‌اید بازار بین‌المللی بعدی خود را کشف کنید؟",
      contactLeadDesc: "با ما در ارتباط باشید تا پتانسیل صادراتی یا نیازهای سورسینگ شما را بررسی کنیم.",
      quickWhatsApp: "ارتباط مستقیم در واتساپ",
      viewInstagram: "صفحه رسمی اینستاگرام",
    },
    producersPage: {
      badge: "راهکار ویژه تولیدکنندگان توانمند ایرانی",
      title: "محصول شما می‌تواند به بازارهای بیشتری راه یابد",
      subtitle: "داشتن یک محصول باکیفیت تنها آغاز مسیر است؛ تبدیل آن به یک جریان ارزی پایدار نیازمند بازاریابی علمی، شناخت خریداران و ادبیات تجاری بین‌المللی است.",
      challengesTitle: "چالش‌های متداول که مانع موفقیت صادراتی می‌شوند:",
      challenges: [
        { title: "انتخاب نادرست بازار مقصد", desc: "ورود به کشورهایی که کشش قیمتی یا استانداردهای متناسب با محصول شما را ندارند بر اساس توصیه‌های غیرعلمی." },
        { title: "عدم دسترسی به خریداران واقعی", desc: "اتلاف وقت و هزینه با دلالان غیررسمی و افراد فاقد اختیار خرید تجاری به جای واردکنندگان اصلی." },
        { title: "ضعف در جایگاه‌سازی بین‌المللی", desc: "کاتالوگ‌های ضعیف، مشخصات فنی مبهم و وب‌سایت‌هایی که اعتماد خریدار حرفه‌ای جهانی را جلب نمی‌کنند." },
        { title: "مکاتبات و پیگیری‌های نامنظم", desc: "پاسخ‌های دیرهنگام، پیام‌های غیررسمی در پیام‌رسان‌ها و عدم ارسال اسناد پیش‌فاکتور استاندارد." },
        { title: "پیش‌فرض‌های نادرست در قیمت‌گذاری", desc: "بی‌اطلاعی از قیمت رقبای منطقه‌ای (ترکیه، چین، هند) و عدم محاسبه دقیق هزینه‌های اینکوترمز." },
        { title: "فقدان تحلیل مستمر بازار", desc: "غفلت از تغییرات ناگهانی تعرفه‌ها، ممنوعیت‌های فصلی و توافق‌نامه‌های تجاری ترجیحی." }
      ],
      approachTitle: "رویکرد ساختاریافته نیلای ترید برای محصولات شما",
      approachDesc: "ما به عنوان بازوی توسعه صادرات در کنار شما قرار می‌گیریم: از بازبینی مستندات و شناسنامه‌دار کردن محصول گرفته تا استخراج خریداران معتبر و تسهیل جلسات تجاری رسمی.",
      formTitle: "ارزیابی اولیه پتانسیل صادراتی محصول شما",
      formSubtitle: "اطلاعات زیر را تکمیل نمایید تا کارشناسان ما امکان‌سنجی اولیه بازار را انجام دهند.",
    },
    buyersPage: {
      badge: "International Sourcing & Supplier Verification",
      title: "در جستجوی تامین‌کنندگان معتبر ایرانی هستید؟",
      subtitle: "نیلای ترید به عنوان پل ارتباطی حرفه‌ای، شرکت‌های بین‌المللی را به تولیدکنندگان اصیل، اعتبارسنجی‌شده و مزیتی در ایران متصل می‌کند.",
      servicesIntro: "خدمات ما به خریداران و بازرگانان خارجی:",
      servicesList: [
        { title: "شناسایی و ممیزی تامین‌کننده", desc: "بررسی حضوری خطوط تولید، سوابق قانونی و توان اسمی و واقعی تامین کالا." },
        { title: "سورسینگ و استعلام قیمت دست اول", desc: "دریافت نرخ‌های رقابتی مستقیم از کارخانه بدون واسطه‌های غیررسمی." },
        { title: "هماهنگی و راستی‌آزمایی نمونه تجاری", desc: "آزمون آزمایشگاهی و ارسال نمونه‌ها همراه با برگه آنالیز فنی (COA)." },
        { title: "تسهیل مکاتبات و قراردادهای دوجانبه", desc: "مدیریت ارتباطات به زبان‌های تجاری و شفاف‌سازی شرایط تحویل و اینکوترمز." }
      ],
      formTitle: "ثبت درخواست تامین کالا (B2B Sourcing Request)",
      formSubtitle: "مشخصات کالای مورد نیاز خود را درج کنید تا گزینه‌های تامین مستند را به شما ارائه کنیم.",
    },
    exportCheckTool: {
      badge: "ابزار تعاملی راهنمای اولیه",
      title: "سنجش مقدماتی آمادگی صادراتی شرکت شما",
      desc: "با پاسخ به ۴ سوال کلیدی، برآوردی اولیه از وضعیت مستندات، بازارشناسی و آمادگی عملیاتی سازمان خود برای ورود به بازارهای خارجی دریافت کنید.",
      disclaimer: "نکته مهم: این سنجش یک ارزیابی مقدماتی راهنما است و جایگزین ممیزی جامع میدانی و فنی توسط کارشناسان نیلای ترید نخواهد بود.",
      ctaButton: "شروع سنجش آمادگی (کمتر از ۱ دقیقه)",
    }
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      producers: "For Iranian Producers",
      buyers: "For International Buyers",
      intelligence: "Market Intelligence",
      sectors: "Products & Sectors",
      howWeWork: "How We Work",
      about: "About Nilay Trade",
      insights: "Insights & Articles",
      caseStudies: "Selected Projects",
      contact: "Contact",
      requestConsultation: "Request Consultation",
      more: "More",
      switchLanguage: "فارسی",
    },
    hero: {
      headline: "Connecting Iranian Business to Global Markets",
      subheadline: "International trade development, structured B2B connectivity, and rigorous data-informed market intelligence.",
      primaryCta: "Request a Consultation",
      secondaryCta: "Explore Our Services",
      trustPill: "Data-Driven Trade Development Without Vanity Metrics",
      pathwaysTitle: "Select your commercial objective to proceed:",
      path1Title: "I am an Iranian Producer",
      path1Desc: "Seeking verified international markets, buyer identification, and structured export development.",
      path1Btn: "Evaluate Export Opportunity",
      path2Title: "I am an International Buyer",
      path2Desc: "Looking for credible Iranian manufacturers, verified source pricing, and compliant procurement coordination.",
      path2Btn: "Submit Sourcing Request",
      path3Title: "I Need Market Intelligence",
      path3Desc: "Requiring import data analysis, competitor benchmarking, and target country regulatory roadmaps.",
      path3Btn: "Explore Market Reports",
    },
    whatWeDo: {
      title: "Core Service Pillars",
      subtitle: "We are neither a casual retail broker nor a freight-only dispatcher; we are your dedicated strategic trade development partner.",
      pillars: [
        {
          num: "01",
          title: "International Market Research & Intelligence",
          desc: "Empirical analysis of import volumes, customs duties, tariff corridors, and structural market gaps before capital deployment."
        },
        {
          num: "02",
          title: "Structured Export Development",
          desc: "End-to-end procedural formulation from technical datasheets (TDS) and Incoterms pricing to durable international commercial contracts."
        },
        {
          num: "03",
          title: "International B2B Marketing",
          desc: "Refining product presentation, corporate profiles, and commercial collaterals aligned with the exact expectations of corporate procurement."
        },
        {
          num: "04",
          title: "Buyer & Supplier Identification",
          desc: "Direct access and preliminary verification of active importers, regional distributors, and primary manufacturers with verified footprints."
        },
        {
          num: "05",
          title: "Business Development & Commercial Connectivity",
          desc: "Active facilitation throughout commercial discussions, managing RFQs, mitigating cultural communication friction, and securing recurring orders."
        }
      ]
    },
    processFlow: {
      title: "From Product to Global Market",
      subtitle: "Our disciplined, research-backed methodology navigating cross-border trade execution",
      steps: [
        { step: "1", label: "Product Audit", desc: "Evaluating quality, production capacity, and intrinsic edge" },
        { step: "2", label: "Market Research", desc: "Scrutinizing import data, tariff structures, and local standards" },
        { step: "3", label: "Target Selection", desc: "Prioritizing the highest-probability destination countries" },
        { step: "4", label: "Partner Discovery", desc: "Identifying and screening genuine buyers and distributors" },
        { step: "5", label: "Commercial Outreach", desc: "Executing professional correspondence in buyer's language" },
        { step: "6", label: "Negotiation Support", desc: "Structuring pricing terms, Incoterms, and settlement pathways" },
        { step: "7", label: "Trade Development", desc: "Sustaining client retention and ongoing container flow" }
      ]
    },
    whyNilay: {
      title: "Why Nilay Trade?",
      subtitle: "The non-negotiable principles underpinning our international B2B engagements",
      points: [
        {
          title: "Research Before Action",
          desc: "We never initiate commercial ventures without validating real market demand and non-tariff trade obstacles."
        },
        {
          title: "Strict B2B Orientation",
          desc: "Our systems are engineered exclusively for wholesale volume, industrial supply chains, and corporate relationships."
        },
        {
          title: "Professional Communication Standards",
          desc: "All commercial correspondence adheres to the strict protocol expected by multinational purchasing directors."
        },
        {
          title: "Radical Commercial Transparency",
          desc: "No fabricated statistics, no artificial success guarantees, and no ungrounded claims; decisions are anchored in reality."
        },
        {
          title: "Long-Term Commercial Relationships",
          desc: "Our objective is establishing sustainable recurring trade relationships rather than chasing volatile one-off deals."
        },
        {
          title: "Product-Flexible, Market-Driven",
          desc: "We are not tied to a single commodity; our methodology adapts dynamically to wherever genuine comparative advantage lies."
        }
      ]
    },
    howWeWork: {
      title: "How We Work",
      subtitle: "A transparent 5-stage framework guiding enterprises from initial audit to international trade execution",
      steps: [
        {
          number: "01",
          name: "Understand",
          desc: "In-depth audit of product technical specifications, nominal vs real capacity, certifications, and commercial goals."
        },
        {
          number: "02",
          name: "Research",
          desc: "Rigorously evaluating global trade flows, competitor pricing models, regulatory barriers, and tariff preferences."
        },
        {
          number: "03",
          name: "Select",
          desc: "Pinpointing the most viable target geographies with optimal risk-adjusted commercial potential."
        },
        {
          number: "04",
          name: "Connect",
          desc: "Screening verified corporate buyers and local distributors, followed by structured, multilingual commercial introductions."
        },
        {
          number: "05",
          name: "Develop",
          desc: "Supporting commercial contracting, troubleshooting logistics nuances, and nurturing long-term supply agreements."
        }
      ]
    },
    common: {
      exploreServices: "Explore All Services",
      viewAllReports: "View All Reports",
      viewAllSectors: "View All Sectors",
      requestProposal: "Request a Customized Proposal",
      filterBy: "Filter By:",
      all: "All Items",
      readMore: "Read Full Article",
      requestCustomResearch: "Request Bespoke Market Research for Your Product",
      preliminaryNotice: "Note: This report reflects Nilay Trade's analytical framework. Tailored commercial dossiers with real-time field data are prepared upon formal institutional request.",
      copyright: "All rights reserved by Nilay Trade.",
      founderQuote: "Sustainable international export is never an accident; it is the deliberate outcome of deep market intelligence, respect for buyer benchmarks, and disciplined commercial communication.",
      submitSuccess: "Your inquiry has been successfully received. The Nilay Trade commercial desk will review your details and respond within 24 business hours.",
      requiredField: "This field is required.",
      contactLeadTitle: "Let's Explore Your Next International Market",
      contactLeadDesc: "Get in touch with our commercial desk to discuss your export expansion or procurement requirements.",
      quickWhatsApp: "Direct WhatsApp Inquiries",
      viewInstagram: "Official Instagram Channel",
    },
    producersPage: {
      badge: "Tailored Framework for Iranian Manufacturers",
      title: "Your Product Can Reach More Markets",
      subtitle: "Possessing high product quality is only the starting point; converting that capability into predictable international revenue requires structured marketing, verified buyers, and global trade communication.",
      challengesTitle: "Pervasive Export Pitfalls That Derail Iranian Producers:",
      challenges: [
        { title: "Selecting the Wrong Target Market", desc: "Deploying resources into countries whose pricing thresholds or technical regulations are mismatched with your product." },
        { title: "Lack of Verified Buyer Access", desc: "Wasting time on informal brokers and unqualified intermediaries who possess zero procurement mandate." },
        { title: "Weak International Positioning", desc: "Amateur brochures, incomplete technical datasheets (TDS), and digital assets that fail corporate due diligence." },
        { title: "Unstructured Commercial Follow-Up", desc: "Delayed replies, informal messaging on social apps, and missing standardized proforma invoice documentation." },
        { title: "Erroneous Pricing Assumptions", desc: "Failing to benchmark competitor landed pricing from Turkey, China, or India under standard Incoterms." },
        { title: "Absence of Market Intelligence", desc: "Being caught off guard by seasonal customs restrictions, tariff fluctuations, or non-tariff barriers." }
      ],
      approachTitle: "Nilay Trade's Structured Commercial Methodology",
      approachDesc: "We act as your dedicated export development partner: auditing product documentation, conducting empirical market research, qualifying legitimate buyers, and structuring professional B2B engagements.",
      formTitle: "Evaluate My Export Opportunity",
      formSubtitle: "Please provide the details below for our team to conduct a preliminary export readiness screening.",
    },
    buyersPage: {
      badge: "International Sourcing & Supplier Verification",
      title: "Looking for Credible Iranian Suppliers?",
      subtitle: "Nilay Trade bridges international importers, trading firms, and distributors with verified, high-capability Iranian manufacturers possessing true comparative advantage.",
      servicesIntro: "Our Dedicated Sourcing Capabilities:",
      servicesList: [
        { title: "Supplier Identification & Factory Audits", desc: "On-site production audits, corporate verification, and capacity due diligence." },
        { title: "Direct-From-Source Quotations", desc: "Procuring competitive factory pricing directly from primary producers without unverified middlemen." },
        { title: "Sample Dispatch & Assay Verification", desc: "Coordinating laboratory testing and dispatching verified samples with Certificate of Analysis (COA)." },
        { title: "Commercial Coordination & Incoterms Clarity", desc: "Multilingual correspondence management ensuring transparency in packaging, payment terms, and delivery." }
      ],
      formTitle: "Submit a Sourcing Request (B2B)",
      formSubtitle: "Specify your procurement criteria to receive verified manufacturer options and commercial parameters.",
    },
    exportCheckTool: {
      badge: "Interactive Preliminary Tool",
      title: "Preliminary Export Readiness Assessment",
      desc: "Answer 4 strategic questions to receive an initial evaluation of your documentation, target market awareness, and operational readiness for foreign trade.",
      disclaimer: "Important notice: This assessment is an automated preliminary guide and does not substitute a comprehensive on-site commercial audit by Nilay Trade specialists.",
      ctaButton: "Begin Quick Assessment (Under 1 Minute)",
    }
  }
};
