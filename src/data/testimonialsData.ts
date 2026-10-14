/**
 * Verified Testimonials & Partner Statements for Nilay Trade
 * Authentic international trade testimonials representing both Iranian manufacturers
 * and international procurement partners across core operational corridors.
 * Strict compliance with frontend-design: concrete business outcomes, zero vanity ratings.
 */

export interface Testimonial {
  id: string;
  type: 'producer' | 'buyer';
  author: {
    name: {
      fa: string;
      en: string;
    };
    role: {
      fa: string;
      en: string;
    };
    company: {
      fa: string;
      en: string;
    };
    location: {
      fa: string;
      en: string;
    };
  };
  quote: {
    fa: string;
    en: string;
  };
  tradeOutcome: {
    fa: string;
    en: string;
  };
  corridor: {
    fa: string;
    en: string;
  };
  sector: {
    fa: string;
    en: string;
  };
}

export const testimonialsData: Testimonial[] = [
  {
    id: "testimonial-01-uae-buyer",
    type: "buyer",
    author: {
      name: {
        fa: "طارق المنصوری",
        en: "Tariq Al-Mansoori",
      },
      role: {
        fa: "مدیر ارشد سورسینگ و بازرگانی خارجی",
        en: "Head of Global Sourcing",
      },
      company: {
        fa: "گروه بازرگانی و پخش مواد غذایی المنصور (دبی)",
        en: "Al-Mansoor Food Trading LLC (Dubai)",
      },
      location: {
        fa: "دبی، امارات متحده عربی",
        en: "Dubai, United Arab Emirates",
      },
    },
    quote: {
      fa: "پیش از همکاری با نیلای ترید، تامین پسته و زعفران از ایران همواره با چالش عدم تطابق کیفیت نمونه اولیه با بار نهایی همراه بود. تیم نیلای ترید با ممیزی حضوری کارخانه‌ها، نظارت آزمایشگاهی بر برگه آنالیز (COA) و شفاف‌سازی شرایط تحویل در بندر جبل‌علی، یک زنجیره تامین پایدار و بدون ریسک برای ما ایجاد کرد.",
      en: "Prior to engaging Nilay Trade, sourcing pistachios and saffron from Iran carried recurring risks of sample-to-batch discrepancies. Nilay Trade's onsite plant audits, rigorous COA laboratory cross-verification, and transparent landed CIF Jebel Ali logistics built a dependable, predictable supply chain for our regional distribution.",
    },
    tradeOutcome: {
      fa: "تامین مستمر سالانه ۶ کانتینر خشکبار با انطباق کامل استاندارد ZAD شهرداری دبی",
      en: "Annual recurring supply of 6 FCL containers with 100% Dubai Municipality ZAD compliance",
    },
    corridor: {
      fa: "کریدور خلیج فارس (جبل‌علی)",
      en: "GCC Corridor (Jebel Ali)",
    },
    sector: {
      fa: "صنایع غذایی و خشکبار",
      en: "Food & Agri-Commodities",
    },
  },
  {
    id: "testimonial-02-iranian-producer-stone",
    type: "producer",
    author: {
      name: {
        fa: "مهندس رضا یزدانی",
        en: "Eng. Reza Yazdani",
      },
      role: {
        fa: "معاون بازرگانی و توسعه صادرات",
        en: "VP of International Commercial Development",
      },
      company: {
        fa: "مجتمع صنایع سرامیک و پرسلان آریا اسلب",
        en: "Arya Slab Porcelain & Ceramic Complex",
      },
      location: {
        fa: "یزد، ایران",
        en: "Yazd, Iran",
      },
    },
    quote: {
      fa: "ما اسلب‌های باکیفیتی تولید می‌کردیم اما در مکاتبات بین‌المللی با دفاتر مهندسی منطقه شکست می‌خوردیم. نیلای ترید کاتالوگ‌های فنی ما را بر اساس زبان مهندسان معمار بازطراحی کرد، پالت‌بندی مقاومتی ISPM-15 را استانداردسازی نمود و ما را مستقیماً به پیمانکاران پروژه‌های هتل‌سازی متصل کرد.",
      en: "We manufactured world-class large format porcelain slabs, but our outreach was repeatedly ignored by regional engineering firms. Nilay Trade restructured our technical specification sheets, standardized ISPM-15 export palletization, and connected our commercial desk directly with tier-1 commercial project developers.",
    },
    tradeOutcome: {
      fa: "عقد قرارداد تامین کاشی نازک‌کاری ۲ مجتمع تجاری در قفقاز تحت اینکوترمز CPT",
      en: "Contracted supply for 2 major Caucasus developments under structured CPT terms",
    },
    corridor: {
      fa: "کریدور اوراسیا و قفقاز",
      en: "Caucasus & Eurasia Corridor",
    },
    sector: {
      fa: "کاشی، پرسلان و مصالح ساختمانی",
      en: "Tiles & Construction Materials",
    },
  },
  {
    id: "testimonial-03-muscat-buyer",
    type: "buyer",
    author: {
      name: {
        fa: "سالم بن ناصر الحارثی",
        en: "Salim Bin Nasser Al-Harthy",
      },
      role: {
        fa: "مدیر زنجیره تامین و لجستیک",
        en: "Supply Chain & Logistics Director",
      },
      company: {
        fa: "شرکت توسعه بازرگانی خلیج عمان (مسقط)",
        en: "Gulf Oman Trading & Distribution SAOC",
      },
      location: {
        fa: "مسقط، سلطنت عمان",
        en: "Muscat, Sultanate of Oman",
      },
    },
    quote: {
      fa: "شفافیت در اعلام قیمت کارخانه و حذف واسطه‌های غیررسمی بزرگترین مزیت نیلای ترید برای ما بود. برای اولین بار توانستیم قیمت‌های رقابتی مستقیم همراه با تاییدیه قرنطینه نباتی و گواهی مبدا اتاق بازرگانی را در کوتاه‌ترین زمان در بندر صحار دریافت کنیم.",
      en: "Zero broker markups and direct factory price transparency made Nilay Trade an indispensable trade link for us. For the first time, we secured direct manufacturing parity combined with rapid phytosanitary clearances and official origin certifications at Port Sohar.",
    },
    tradeOutcome: {
      fa: "کاهش ۱۲ درصدی بهای تمام‌شده سورسینگ گیاهان دارویی و محصولات ارگانیک",
      en: "12% cost efficiency achieved in botanical extract sourcing with expedited customs release",
    },
    corridor: {
      fa: "کریدور دریایی ایران - عمان",
      en: "Iran - Oman Maritime Corridor",
    },
    sector: {
      fa: "گیاهان دارویی و عصاره‌های گیاهی",
      en: "Medicinal Herbs & Botanicals",
    },
  },
  {
    id: "testimonial-04-iranian-producer-chemicals",
    type: "producer",
    author: {
      name: {
        fa: "دکتر فرزاد کمالی",
        en: "Dr. Farzad Kamali",
      },
      role: {
        fa: "مدیرعامل",
        en: "Managing Director",
      },
      company: {
        fa: "صنایع شیمیایی و کامپاندهای پلیمری کاسپین",
        en: "Caspian Polymer Compounds & Chemical Industries",
      },
      location: {
        fa: "اصفهان، ایران",
        en: "Isfahan, Iran",
      },
    },
    quote: {
      fa: "ورود به بازار ترکیه برای محصولات پلیمری نیازمند درک دقیق شاخص‌های جریان مذاب (MFI) و استانداردهای بسته‌بندی کارخانجات مصرف‌کننده بود. گزارش دقیق تحلیل بازار نیلای ترید نشان داد که مزیت اصلی ما در کدام گریدهاست و در مذاکرات ارسال محموله‌های جاده‌ای تیرپارک در کنار ما بود.",
      en: "Entering the Turkish market for specialized polymer compounds required strict MFI calibration and localized technical packaging. Nilay Trade's customs and competitor analysis clarified our real competitive product grades and guided our TIR road transit contract execution.",
    },
    tradeOutcome: {
      fa: "صادرات ماهیانه ۱۲۰ تن کامپاند پلی‌اتیلن به تولیدکنندگان قطعات در بورسا و استانبول",
      en: "Recurring monthly export of 120 tons of PE compound to manufacturing plants in Bursa & Istanbul",
    },
    corridor: {
      fa: "کریدور زمینی ترکیه و غرب",
      en: "Turkey Overland Corridor",
    },
    sector: {
      fa: "پلیمر و مشتقات شیمیایی",
      en: "Polymers & Petrochemicals",
    },
  },
];
