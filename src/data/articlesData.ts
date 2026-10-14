/**
 * B2B Insights & Knowledge Center for Nilay Trade
 * Comprehensive export strategy and international trade development articles.
 */

export interface B2BArticle {
  id: string;
  slug: string;
  title: {
    fa: string;
    en: string;
  };
  subtitle: {
    fa: string;
    en: string;
  };
  category: string;
  categoryFa: string;
  author: {
    name: {
      fa: string;
      en: string;
    };
    role: {
      fa: string;
      en: string;
    };
  };
  publishDate: string;
  readTime: string;
  readTimeFa: string;
  excerpt: {
    fa: string;
    en: string;
  };
  contentSections: {
    heading: {
      fa: string;
      en: string;
    };
    body: {
      fa: string;
      en: string;
    };
  }[];
  relatedArticleIds: string[];
}

export const articlesData: B2BArticle[] = [
  {
    id: "identifying-real-foreign-buyers",
    slug: "identifying-real-foreign-buyers",
    title: {
      fa: "چگونه خریداران واقعی بین‌المللی را از واسطه‌های غیرمعتبر تشخیص دهیم؟",
      en: "How to Distinguish Legitimate International B2B Buyers from Unverified Intermediaries",
    },
    subtitle: {
      fa: "چارچوب ۵ مرحله‌ای اعتبارسنجی تجاری پیش از ارسال نمونه یا افشای اطلاعات حساس قیمتی",
      en: "A 5-step commercial verification framework prior to dispatching product samples or sensitive price lists",
    },
    category: "Buyer Identification",
    categoryFa: "شناسایی خریدار",
    author: {
      name: {
        fa: "مصطفی خادمی",
        en: "Mostafa Khademi",
      },
      role: {
        fa: "بنیان‌گذار نیلای ترید",
        en: "Founder & CEO, Nilay Trade",
      }
    },
    publishDate: "2026-09-15",
    readTime: "6 min read",
    readTimeFa: "۶ دقیقه مطالعه",
    excerpt: {
      fa: "یکی از پرهزینه‌ترین اشتباهات تولیدکنندگان ایرانی، ارسال نمونه‌های رایگان و صرف هفته‌ها زمان مذاکره با افرادی است که هیچ اختیاری در خرید ندارند.",
      en: "One of the costliest pitfalls for manufacturers is spending months negotiating and dispatching free samples to contacts with zero procurement mandate.",
    },
    contentSections: [
      {
        heading: {
          fa: "۱. نشانه‌های هشداردهنده در اولین پیام استعلام",
          en: "1. Red Flags in the Initial Commercial Inquiry"
        },
        body: {
          fa: "خریداران معتبر جهانی هنگام اولین تماس، همواره با ایمیل سازمانی رسمی (دامنه اختصاصی شرکت)، درج امضای رسمی با شماره تماس معتبر شرکتی و ارائه مشخصات دقیق فنی یا برگه استاندارد (Specification) مکاتبه می‌کنند. درخواست‌های ارسال‌شده از ایمیل‌های عمومی رایگان (مانند جیمیل یا یاهو) با لحن مبهم و درخواست لیست قیمت عمومی معمولاً متعلق به خریداران جدی نیستند.",
          en: "Reputable corporate buyers always contact using verified enterprise domain emails, comprehensive email signatures, and detailed technical specifications. Inquiries arriving from generic free webmail accounts requesting blanket price lists without precise volumes are typically unqualified brokers."
        }
      },
      {
        heading: {
          fa: "۲. راستی‌آزمایی ردپای تجاری و سوابق گمرکی",
          en: "2. Verifying Commercial Footprint & Public Import Filings"
        },
        body: {
          fa: "پیش از ارائه قیمت نهایی یا شرایط پرداخت، باید ثبت رسمی شرکت در کشور مقصد بررسی شود. بررسی سامانه ثبت شرکت‌ها در حوزه قضایی خریدار، بررسی سوابق بارنامه‌های عمومی وارداتی (Bill of Lading data) و حضور دیجیتال معتبر در شبکه‌های حرفه‌ای مانند لینکدین به شما نشان می‌دهد آیا این شرکت جریان واردات فعال دارد یا صرفاً در جستجوی اطلاعات بازار است.",
          en: "Before disclosing competitive pricing, cross-reference the entity's corporate registry in its home jurisdiction. Checking public customs import bills of lading and corporate LinkedIn footprints will confirm whether they maintain recurring trade volumes or are merely fishing for intelligence."
        }
      },
      {
        heading: {
          fa: "۳. پرسش‌های کلیدی برای سنجش ظرفیت خرید",
          en: "3. Diagnostic Qualification Questions"
        },
        body: {
          fa: "از طرف مقابل بخواهید سه پارامتر اساسی را مشخص کند: حجم سفارش اولیه و پیش‌بینی سالانه، ترم تحویل مدنظر بر اساس اینکوترمز (FOB، CFR یا CIF)، و بندر مقصد. خریدار واقعی این اطلاعات را در کمتر از چند دقیقه ارائه می‌دهد، در حالی که واسطه‌های غیرمستقیم معمولاً پاسخ‌های کلی و مبهم می‌دهند.",
          en: "Ask the counterparty to clarify three core operational parameters: initial order volume and annual forecast, preferred Incoterms (FOB, CFR, or CIF), and target discharge port. Legitimate buyers supply these parameters immediately without hesitation."
        }
      }
    ],
    relatedArticleIds: ["pricing-strategy-b2b-export", "avoiding-costly-export-mistakes"]
  },
  {
    id: "pricing-strategy-b2b-export",
    slug: "pricing-strategy-b2b-export",
    title: {
      fa: "اصول قیمت‌گذاری صادراتی بر مبنای اینکوترمز و هزینه‌های تمام‌شده",
      en: "Export Pricing Architecture: Navigating Incoterms, Landed Costs & Margin Calculations",
    },
    subtitle: {
      fa: "چرا تبدیل ساده قیمت ریالی به دلار، دستورالعملی تضمینی برای شکست در مناقصات بین‌المللی است؟",
      en: "Why simply dividing domestic currency prices by exchange rates leads to immediate trade disqualification",
    },
    category: "Export",
    categoryFa: "توسعه صادرات",
    author: {
      name: {
        fa: "تیم تحلیل بازار نیلای ترید",
        en: "Nilay Trade Research Desk",
      },
      role: {
        fa: "دپارتمان تحقیقات و تحلیل بازار",
        en: "Market Research & Analysis Desk",
      }
    },
    publishDate: "2026-08-28",
    readTime: "8 min read",
    readTimeFa: "۸ دقیقه مطالعه",
    excerpt: {
      fa: "قیمت‌گذاری صادراتی فرمولی جداگانه از فروش داخلی دارد؛ هزینه‌های بسته‌بندی صادراتی، پالت‌بندی، دموراژ، بازرسی مبدأ، کارمزد انتقال ارز و خواب سرمایه باید محاسبه شوند.",
      en: "Export pricing demands an autonomous cost model accounting for export-grade crating, fumigated pallets, origin inspection, currency conversion friction, and working capital cycles.",
    },
    contentSections: [
      {
        heading: {
          fa: "۱. مفهوم قیمت تمام‌شده در بندر مقصد (Landed Cost)",
          en: "1. Understanding True Landed Cost at Destination"
        },
        body: {
          fa: "خریدار خارجی قیمت کارخانه شما (Ex-Works) را مقایسه نمی‌کند؛ او بررسی می‌کند که کالا پس از پرداخت عوارض گمرکی، حمل دریایی، تخلیه در اسکله و انبارداری با چه قیمتی به انبار او می‌رسد. صادرکننده‌ای برنده است که بتواند هزینه‌های لجستیک را با انتخاب بهینه‌ترین ترم تحویل کاهش دهد.",
          en: "Foreign buyers do not evaluate Ex-Works factory floor pricing; they calculate total Landed Cost including freight, destination tariffs, terminal handling charges (THC), and inland drayage. Exporters who understand these variables negotiate with distinct competitive advantage."
        }
      },
      {
        heading: {
          fa: "۲. تفاوت ساختاری قیمت‌گذاری FOB و CIF",
          en: "2. Tactical Differences Between FOB and CIF Quotations"
        },
        body: {
          fa: "در بیشتر موارد خریداران بزرگ خواهان قیمت FOB در بندر مبدأ (مانند بندرعباس) هستند تا از خطوط کشتیرانی طرف قرارداد خود استفاده کنند؛ اما ارائه قیمت تخمینی CIF به خریداران متوسط، تصمیم‌گیری را برای آن‌ها تسهیل کرده و نشانه بلوغ حرفه‌ای صادرکننده است.",
          en: "While global conglomerates often demand FOB at loading ports to utilize corporate sea-freight contracts, offering alternative CIF estimates to mid-tier buyers accelerates buying decisions and demonstrates commercial sophistication."
        }
      }
    ],
    relatedArticleIds: ["identifying-real-foreign-buyers", "avoiding-costly-export-mistakes"]
  },
  {
    id: "avoiding-costly-export-mistakes",
    slug: "avoiding-costly-export-mistakes",
    title: {
      fa: "۷ اشتباه رایج تولیدکنندگان ایرانی در ورود به بازارهای خارجی",
      en: "7 Structural Mistakes Iranian Producers Make in International Market Entry",
    },
    subtitle: {
      fa: "بررسی الگوهای تکراری شکست در صادرات و راهکارهای عبور از آنها با پژوهش پیش از اقدام",
      en: "Analyzing recurrent failure modes in international expansion and practical preventive strategies",
    },
    category: "Market Research",
    categoryFa: "پژوهش بازار",
    author: {
      name: {
        fa: "مصطفی خادمی",
        en: "Mostafa Khademi",
      },
      role: {
        fa: "بنیان‌گذار نیلای ترید",
        en: "Founder & CEO, Nilay Trade",
      }
    },
    publishDate: "2026-07-19",
    readTime: "7 min read",
    readTimeFa: "۷ دقیقه مطالعه",
    excerpt: {
      fa: "داشتن محصول باکیفیت تنها ۳۰ درصد از معادله صادرات موفق است؛ ۷۰ درصد باقیمانده به جایگاه‌سازی، شناخت عمیق بازار، انطباق مقرراتی و استمرار ارتباطات تجاری تعلق دارد.",
      en: "Possessing superior product quality represents merely 30% of export success; the remaining 70% hinges on market selection, compliance, positioning, and disciplined follow-through.",
    },
    contentSections: [
      {
        heading: {
          fa: "۱. انتخاب بازار بر اساس حدس و گمان به جای تحلیل داده",
          en: "1. Intuition-Driven Rather Than Data-Driven Market Selection"
        },
        body: {
          fa: "بسیاری از کسب‌وکارها کشوری را به عنوان مقصد صادرات انتخاب می‌کنند صرفاً چون یکی از دوستان یا آشنایان در آنجا ساکن است یا در اخبار شنیده‌اند که آن بازار پررونق است. ورود موفق نیازمند بررسی داده‌های چندساله کدهای گمرکی، ساختار رقبا و مقررات ورودی است.",
          en: "Many enterprises enter foreign markets purely based on anecdotal acquaintances or high-level headlines. Enduring success mandates empirical scrutiny of 5-year trade data, tariff barriers, and incumbent competitor dominance."
        }
      },
      {
        heading: {
          fa: "۲. عدم انطباق با ابعاد پالت و سیستم‌های انبارداری استاندارد",
          en: "2. Disregarding Standard Pallet Dimensions and Handling Standards"
        },
        body: {
          fa: "در اروپا پالت یورو (۱۲۰×۸۰ سانتیمتر) استاندارد است، در حالی که در آمریکای شمالی و بخش‌هایی از آسیا پالت‌های ۱۲۰×۱۰۰ استفاده می‌شود. عدم رعایت چینش استاندارد در پالت باعث رد محموله در انبارهای مدرن مکانیزه می‌شود.",
          en: "European retail systems mandate EUR-pallets (80x120cm), whereas North American and Asian facilities operate standard 100x120cm footprints. Improper container stuffing and pallet mismatch cause severe warehouse refusal penalties."
        }
      }
    ],
    relatedArticleIds: ["identifying-real-foreign-buyers", "pricing-strategy-b2b-export"]
  }
];
