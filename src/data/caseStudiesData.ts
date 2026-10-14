/**
 * Selected Projects & B2B Case Study Frameworks
 * Clean, structured methodology representations without fabricated vanity statistics.
 */

export interface CaseStudy {
  id: string;
  projectCode: string;
  title: {
    fa: string;
    en: string;
  };
  clientSector: {
    fa: string;
    en: string;
  };
  marketAndProduct: {
    fa: string;
    en: string;
  };
  clientChallenge: {
    fa: string;
    en: string;
  };
  researchPerformed: {
    fa: string[];
    en: string[];
  };
  approach: {
    fa: string;
    en: string;
  };
  outcome: {
    fa: string;
    en: string;
  };
  keyLearning: {
    fa: string;
    en: string;
  };
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "project-natural-botanicals",
    projectCode: "PROJ-NB-01",
    title: {
      fa: "اصلاح بسته‌بندی و شناسایی خریداران صنعتی عصاره‌های گیاهی در اروپای مرکزی",
      en: "Packaging Alignment & Industrial Buyer Identification for Botanical Extracts in Central Europe",
    },
    clientSector: {
      fa: "تولید فرآورده‌ها و عصاره‌های دارویی ارگانیک",
      en: "Organic Medicinal Extracts & Botanicals",
    },
    marketAndProduct: {
      fa: "عصاره مایع و پودری ریشه شیرین‌بیان به مقصد آلمان",
      en: "Standardized Licorice Extracts to Germany & Regional Laboratory Processors",
    },
    clientChallenge: {
      fa: "تولیدکننده محصولی با خلوص آزمایشگاهی بالا تولید می‌کرد، اما به دلیل نگارش غیراستاندارد برگه‌های مشخصات فنی (TDS) و بسته‌بندی سنتی در بشکه‌های غیراستاندارد، ایمیل‌های معرفی آنها توسط مدیران خرید نادیده گرفته می‌شد.",
      en: "The producer maintained high laboratory purity, but was repeatedly dismissed by European procurement managers due to non-standard technical datasheets (TDS) and non-compliant bulk packaging formats.",
    },
    researchPerformed: {
      fa: [
        "بررسی الزامات دارونامه اروپا (Ph. Eur.) و حد مجاز فلزات سنگین",
        "تحلیل فرمت‌های فنی مورد تایید آزمایشگاه‌های مرجع در هامبورگ",
        "شناسایی ۱۰ شرکت فرآوری‌کننده عصاره و آزمایشگاه‌های خریدار مستقیم",
        "تعیین سایز و جنس درپوش استاندارد بشکه‌های پلی‌اتیلنی غذایی"
      ],
      en: [
        "Benchmarked European Pharmacopoeia (Ph. Eur.) purity thresholds",
        "Audited technical documentation standards expected by Hamburg laboratory buyers",
        "Mapped 10 direct industrial extract processors with recurring buying cycles",
        "Specified food-grade tamper-evident UN-approved drum packaging specs"
      ]
    },
    approach: {
      fa: "بازطراحی کامل برگه‌های آنالیز فنی (COA) به فرمت بین‌المللی آزمایشگاهی، استانداردسازی بسته‌بندی به بشکه‌های استاندارد UN و آغاز مکاتبات مستقیم و حرفه‌ای به زبان انگلیسی با مدیران فنی خرید.",
      en: "Complete restructuring of Certificate of Analysis (COA) into international laboratory standards, upgrading to UN-certified drums, and structured professional outreach to technical procurement directors.",
    },
    outcome: {
      fa: "تایید آزمایشگاهی نمونه‌ها توسط دو خریدار صنعتی در آلمان و ارسال محموله آزمایشی ۵ تنی با توافق شرایط تسویه حساب رسمی.",
      en: "Technical approval of commercial samples by two German processing firms, followed by an initial 5-ton trial shipment under formal commercial terms.",
    },
    keyLearning: {
      fa: "در صنایع دارویی و شیمیایی، نحوه ارائه مستندات فنی و آزمون‌های آزمایشگاهی به اندازه خود محصول در تصمیم‌گیری خریدار تعیین‌کننده است.",
      en: "In industrial and pharmaceutical sectors, technical documentation integrity and presentation matter as much as the product itself in securing commercial trust."
    }
  },
  {
    id: "project-stoneware-tiles",
    projectCode: "PROJ-ST-02",
    title: {
      fa: "ورود ساختاریافته تولیدکننده کاشی پرسلان به پروژه‌های تجاری قفقاز",
      en: "Structured Entry of Porcelain Tile Manufacturer into Caucasus Commercial Projects",
    },
    clientSector: {
      fa: "صنایع کاشی، سرامیک و مصالح ساختمانی پرتردد",
      en: "Commercial Porcelain Tiles & Construction Materials",
    },
    marketAndProduct: {
      fa: "کاشی‌های پرسلان اسلب ابعاد بزرگ (۱۲۰×۲۴۰) به مقصد ارمنستان و گرجستان",
      en: "Large Format Porcelain Slabs (120x240cm) to Armenia & Georgia Commercial Projects",
    },
    clientChallenge: {
      fa: "کارخانه در رقابت با برندهای ترکیه‌ای به دلیل نبود کاتالوگ‌های مهندسی به زبان محلی و بی‌اطلاعی از پیمانکاران اصلی پروژه‌های انبوه‌سازی متوقف شده بود.",
      en: "The manufacturer was losing market opportunities to Turkish brands due to lack of localized architectural catalogs and zero direct visibility into primary project contractors.",
    },
    researchPerformed: {
      fa: [
        "استخراج فهرست ۲۰ پیمانکار فعال در پروژه‌های هتل‌سازی و تجاری ایروان و تفلیس",
        "مقایسه قیمت تمام‌شده تحویل در محل پروژه (Delivered at Place) در برابر رقبا",
        "بررسی الزامات حمل اسلب‌های بزرگ و جلوگیری از شکستگی در طول مسیر کوهستانی",
        "طراحی جعبه‌های نمونه اختصاصی (Architect Box) برای ارسال به دفاتر معماری"
      ],
      en: [
        "Identified top 20 contractors leading hotel and commercial projects in Yerevan and Tbilisi",
        "Calculated delivered-at-place (DAP) landed parity against rival Turkish manufacturers",
        "Engineered pallet reinforcement preventing slab breakage along mountainous transit roads",
        "Designed curated architect sample sample-boxes for direct design studio presentation"
      ]
    },
    approach: {
      fa: "ایجاد ارتباط مستقیم با دفاتر مهندسی مشاور و ارسال نمونه‌های سنگین در قالب باکس‌های شکیل معماری، همراه با قیمت‌گذاری شفاف تحویل در گمرک مقصد.",
      en: "Bypassed passive retail stores to engage direct engineering consultants with luxury sample cases and clear DAP quotation frameworks.",
    },
    outcome: {
      fa: "تامین مصالح نازک‌کاری دو مجتمع تجاری منطقه‌ای و ایجاد رابطه مستمر با شرکت پخش ساختمانی بومی.",
      en: "Secured tile supply specifications for two regional commercial developments and established a direct partnership with a local distributor.",
    },
    keyLearning: {
      fa: "در محصولات دکوراتیو و ساختمانی، ارتباط با تصمیم‌گیرندگان فنی (معماران و مهندسان) بسیار موثرتر از مراجعه به خرده‌فروشی‌های محلی است.",
      en: "For architectural goods, marketing directly to specifiers (architects and structural engineers) yields far higher conversion than chasing retail shops."
    }
  },
  {
    id: "project-fmcg-detergents",
    projectCode: "PROJ-FM-03",
    title: {
      fa: "اصلاح فرمولاسیون و راه‌اندازی شبکه توزیع شوینده در جنوب عراق",
      en: "Formulation Adjustment & Route-to-Market Development for Detergents in Southern Iraq",
    },
    clientSector: {
      fa: "محصولات شوینده و بهداشتی تندگردش (FMCG)",
      en: "Household Detergents & FMCG Hygiene",
    },
    marketAndProduct: {
      fa: "پودر و مایع لباسشویی با کارایی بالا در آب سخت برای بازارهای بصره و ناصریه",
      en: "Heavy-Duty Laundry Detergent Optimized for Hard-Water Conditions in Basra",
    },
    clientChallenge: {
      fa: "محصول استاندارد داخلی در بازارهای جنوب عراق به دلیل سختی آب منطقه کف‌کنندگی و لکه‌بری ضعیفی نشان می‌داد و با ریزش مشتری مواجه شده بود.",
      en: "The standard domestic formula underperformed in southern Iraq due to high regional water mineral content, causing customer dissatisfaction and inventory freeze.",
    },
    researchPerformed: {
      fa: [
        "آزمون میدانی شیمیایی آب شرب مناطق هدف و اثر آن بر سورفکتانت‌های فرمول",
        "تحلیل ترجیحات بسته‌بندی در بازار جمیله بغداد و بازارهای بصره (ترجیح کیسه‌های ۵ و ۱۰ کیلویی دسته‌دار)",
        "بررسی قوانین وارداتی دستگاه استاندارد عراق (COSQC)",
        "شناسایی ۳ توزیع‌کننده بومی دارای انبار فعال در بصره"
      ],
      en: [
        "Field chemical assay of municipal tap water mineral hardness and its impact on active surfactants",
        "Wholesale packaging preference audit (strong demand for 5kg and 10kg reinforced handle bags)",
        "Iraqi Central Organization for Standardization and Quality Control (COSQC) inspection prerequisites",
        "Evaluation of 3 established local distributors with active warehousing in Basra"
      ]
    },
    approach: {
      fa: "بهینه‌سازی فرمول با مشاوران شیمیایی برای افزودن زئولیت و پلی‌مرهای ضدسختی، بازطراحی کیسه‌ها به زبان عربی شکیل و بستن قرارداد توزیع غیرانحصاری با شرکت پخش محلی.",
      en: "Reformulated active surfactant and anti-scaling agents, redesigned bags with bilingual Arabic/English commercial branding, and structured distribution agreements.",
    },
    outcome: {
      fa: "افزایش رضایت مصرف‌کننده، تکرار منظم سفارشات ماهانه در مقیاس کانتینری و پایداری زنجیره عرضه.",
      en: "Restored consumer product satisfaction, establishing stable recurring monthly container shipments to the southern network.",
    },
    keyLearning: {
      fa: "شناخت شرایط بومی مصرف (کیفیت آب، دما، عادات استفاده) پیش‌نیاز قطعی موفقیت هر محصول مصرفی در صادرات است.",
      en: "Localized usage conditions (water salinity, climate, washing habits) are decisive determinants of export viability for consumer goods."
    }
  }
];
