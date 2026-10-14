/**
 * 12 B2B Services Data for Nilay Trade
 * Structured without invented pricing; provides tangible problem-solution breakdown.
 */

export interface B2BService {
  id: string;
  order: string;
  title: {
    fa: string;
    en: string;
  };
  shortDescription: {
    fa: string;
    en: string;
  };
  whatItIs: {
    fa: string;
    en: string;
  };
  whoNeedsIt: {
    fa: string;
    en: string;
  };
  problemSolved: {
    fa: string;
    en: string;
  };
  whatWeDeliver: {
    fa: string[];
    en: string[];
  };
  ctaLabel: {
    fa: string;
    en: string;
  };
  category: 'research' | 'connection' | 'development' | 'marketing';
}

export const servicesData: B2BService[] = [
  {
    id: "market-research",
    order: "01",
    title: {
      fa: "تحقیقات و تحلیل بازارهای بین‌المللی",
      en: "International Market Research & Analysis",
    },
    shortDescription: {
      fa: "تحلیل جامع داده‌های تقاضا، رفتار مصرف‌کننده، حجم واردات و روندهای تجاری در بازارهای هدف.",
      en: "In-depth analysis of market demand, import trends, trade flows, and consumer behavior in target markets.",
    },
    whatItIs: {
      fa: "بررسی ساختاریافته داده‌های تجارت خارجی، تعرفه‌ها، حجم واردات و دینامیک‌های رقابتی در یک یا چند کشور مقصد برای تصمیم‌گیری مستند.",
      en: "Structured research of foreign trade statistics, tariffs, import volumes, and competitive dynamics across target destination countries.",
    },
    whoNeedsIt: {
      fa: "تولیدکنندگان باکیفیت که قصد دارند پیش از تخصیص بودجه و ورود فیزیکی، ظرفیت واقعی بازار را بسنجند.",
      en: "Manufacturers looking to validate real market demand before committing marketing budgets and physical supply chains.",
    },
    problemSolved: {
      fa: "جلوگیری از ورود ناآگاهانه به بازارهای اشباع‌شده یا دارای موانع غیرتعرفه‌ای پرریسک.",
      en: "Prevents entering saturated markets or navigating unforeseen non-tariff regulatory barriers blindly.",
    },
    whatWeDeliver: {
      fa: [
        "گزارش داده‌محور ظرفیت واردات ۳ تا ۵ ساله کشور مقصد",
        "تحلیل کدهای گمرکی (HS Code) و مقررات گمرکی مربوطه",
        "نقشه بازیگران کلیدی و زنجیره توزیع موجود",
        "بررسی موانع ورود و استانداردهای کیفی الزامی"
      ],
      en: [
        "Data-driven 3-5 year import volume and trajectory report",
        "HS Code classification and applicable tariff/non-tariff rules",
        "Key market players mapping and existing distribution hierarchy",
        "Mandatory regulatory, certification, and quality benchmarks"
      ]
    },
    ctaLabel: {
      fa: "درخواست پیشنهاد اختصاصی پژوهش",
      en: "Request a Customized Proposal",
    },
    category: "research"
  },
  {
    id: "export-market-selection",
    order: "02",
    title: {
      fa: "انتخاب و اولویت‌بندی بازارهای صادراتی",
      en: "Export Market Selection",
    },
    shortDescription: {
      fa: "ارزیابی چندمعیاره کشورهای مختلف برای تعیین مناسب‌ترین مقصد متناسب با ویژگی‌های محصول شما.",
      en: "Multi-criteria evaluation of prospective countries to pinpoint the highest-probability destinations for your product.",
    },
    whatItIs: {
      fa: "فرآیند سیستماتیک رتبه‌بندی بازارها بر اساس سهولت ورود، فاصله جغرافیایی، کشش قیمت، قوانین پرداخت و تقاضای ساختاری.",
      en: "A systematic market scoring system evaluating accessibility, logistics proximity, pricing tolerance, payment frameworks, and structural demand.",
    },
    whoNeedsIt: {
      fa: "تولیدکنندگانی که میان چند کشور مقصد (همسایه، اوراسیا، خلیج فارس یا آفریقا) در تردید هستند.",
      en: "Producers hesitating between multiple prospective regions (Gulf, Eurasia, Levant, or Africa) with limited resources.",
    },
    problemSolved: {
      fa: "هدررفت سرمایه و زمان ناشی از انتخاب مقاصدی که تقاضای متناسب با سطح کیفی یا قیمتی محصول را ندارند.",
      en: "Wasted capital and missed momentum resulting from entering markets with mismatched purchasing standards or pricing expectations.",
    },
    whatWeDeliver: {
      fa: [
        "ماتریس ماتریس رتبه‌بندی اولویت بازارها (Market Prioritization Matrix)",
        "ارزیابی ریسک‌های تجاری و کانال‌های تسویه مالی",
        "تحلیل هزینه لجستیک و مزیت رقابتی در مقایسه با سایر تامین‌کنندگان",
        "نقشه راه گام‌به‌گام نفوذ تجاری"
      ],
      en: [
        "Multi-factor Market Prioritization Matrix",
        "Commercial risk and settlement corridor feasibility audit",
        "Landed cost and logistics parity versus rival supplying nations",
        "Step-by-step phased market penetration roadmap"
      ]
    },
    ctaLabel: {
      fa: "درخواست ارزیابی بازار هدف",
      en: "Request Market Evaluation",
    },
    category: "research"
  },
  {
    id: "buyer-identification",
    order: "03",
    title: {
      fa: "شناسایی و اعتبارسنجی خریداران خارجی",
      en: "Buyer Identification & Verification",
    },
    shortDescription: {
      fa: "دسترسی هدفمند به خریداران فعال B2B، عمده‌فروشان و بازرگانان واقعی با پیشینه تجاری معتبر.",
      en: "Direct, targeted identification and commercial verification of active B2B buyers and commercial trading houses.",
    },
    whatItIs: {
      fa: "استخراج، پایش و راستی‌آزمایی اطلاعات خریداران تجاری معتبر در بازارهای هدف به دور از پایگاه‌های داده نامعتبر.",
      en: "Deep identification and preliminary verification of legitimate corporate buyers and importers actively operating in target jurisdictions.",
    },
    whoNeedsIt: {
      fa: "تولیدکنندگانی که به دنبال برقراری ارتباط با خریداران مستقیم هستند و تمایلی به تکیه بر واسطه‌های ناشناس ندارند.",
      en: "Exporters wanting direct access to verifiable buyers rather than unverified intermediaries.",
    },
    problemSolved: {
      fa: "ارتباط با سرنخ‌های غیرواقعی، دلالان بی‌اعتبار و ارسال نمونه به افرادی که توان خرید ندارند.",
      en: "Contacting dead leads, unreliable intermediaries, and distributing commercial samples to entities lacking commercial buying power.",
    },
    whatWeDeliver: {
      fa: [
        "فهرست اعتبارسنجی‌شده خریداران هدف همراه با شرح حوزه فعالیت",
        "راستی‌آزمایی فعالیت تجاری، وب‌سایت و سوابق عمومی واردات",
        "تعیین افراد کلیدی تصمیم‌گیرنده (مدیران خرید، بازرگانی، تدارکات)",
        "پرونده اطلاعاتی اولیه خریدار جهت آغاز مکاتبات"
      ],
      en: [
        "Verified roster of target corporate buyers with trade profile",
        "Commercial activity verification, web footprint, and public import records",
        "Key decision-maker identification (Procurement & Sourcing Directors)",
        "Buyer dossier prepared for customized commercial outreach"
      ]
    },
    ctaLabel: {
      fa: "درخواست شناسایی خریدار",
      en: "Request Buyer Identification",
    },
    category: "connection"
  },
  {
    id: "distributor-identification",
    order: "04",
    title: {
      fa: "شناسایی و ارزیابی توزیع‌کنندگان محلی",
      en: "Distributor Identification",
    },
    shortDescription: {
      fa: "یافتن شبکه‌های توزیع بومی معتبر برای استقرار پایدار برند و جریان مستمر فروش در کشور مقصد.",
      en: "Identifying reputable local distributor networks for sustained brand placement and ongoing regional sales volume.",
    },
    whatItIs: {
      fa: "شناسایی شرکت‌های دارای انبار، ناوگان پخش و دسترسی مستقیم به شبکه‌های فروشگاهی و مصرفی در بازار مقصد.",
      en: "Locating established local distributors possessing existing warehousing, regional route-to-market, and retail/B2B accounts.",
    },
    whoNeedsIt: {
      fa: "شرکت‌هایی که تمایل دارند از طریق شریک رسمی توزیع به جای تک‌معامله‌های پراکنده، حضور ماندگار بسازند.",
      en: "Brands aiming for structured regional market share rather than fragmented, sporadic one-off spot deals.",
    },
    problemSolved: {
      fa: "واگذاری انحصار به توزیع‌کنندگانی که توانایی فروش ندارند یا در انبارش و پرداخت با اختلال مواجه می‌شوند.",
      en: "Prematurely granting territorial exclusivity to underperforming distributors who stall market growth.",
    },
    whatWeDeliver: {
      fa: [
        "پروفایل مقایسه‌ای ۳ تا ۵ توزیع‌کننده فعال در صنعت مربوطه",
        "ارزیابی توان پوشش جغرافیایی، ظرفیت لجستیکی و سبد کالایی رقیب",
        "چارچوب پیشنهادی قرارداد توزیع و تعهدات حداقل خرید (MOQ)",
        "تسهیل جلسات مذاکره اولیه و تفاهم‌نامه همکاری"
      ],
      en: [
        "Comparative assessment profiles of active tier-1 and tier-2 distributors",
        "Territory coverage, cold-chain / storage footprint, and product line overlap analysis",
        "Distributorship terms framework and structured performance milestones",
        "Introduction facilitation and commercial discussion support"
      ]
    },
    ctaLabel: {
      fa: "درخواست شناسایی توزیع‌کننده",
      en: "Request Distributor Sourcing",
    },
    category: "connection"
  },
  {
    id: "supplier-identification",
    order: "05",
    title: {
      fa: "شناسایی و سورسینگ تامین‌کنندگان ایرانی",
      en: "Iranian Supplier Identification & Sourcing",
    },
    shortDescription: {
      fa: "خدمت اختصاصی به خریداران بین‌المللی برای یافتن تولیدکنندگان واقعی و معتبر در ایران.",
      en: "Dedicated service for international buyers seeking verified, capable Iranian producers and primary sources.",
    },
    whatItIs: {
      fa: "راستی‌آزمایی ظرفیت تولید کارخانه، بررسی استانداردهای کیفی، نمونه‌گیری و استعلام قیمت رقابتی برای خریداران خارجی.",
      en: "Factory capacity auditing, quality benchmark verification, sample coordination, and direct-from-source price validation.",
    },
    whoNeedsIt: {
      fa: "شرکت‌های بین‌المللی و بازرگانان خارجی که به دنبال محصولات مزیتی ایران (کشاورزی، معدنی، صنعتی، گیاهان دارویی) هستند.",
      en: "International importers seeking Iran's competitive advantages in agriculture, minerals, industrial inputs, and natural products.",
    },
    problemSolved: {
      fa: "نگرانی خریدار خارجی از بابت عدم تطابق کیفیت، عدم دریافت پاسخ حرفه‌ای و ابهام در اعتبارسنجی تولیدکننده.",
      en: "Foreign buyer concerns regarding supplier authenticity, specification discrepancies, and fragmented communication.",
    },
    whatWeDeliver: {
      fa: [
        "گزارش بررسی کارخانه و ظرفیت اسمی و واقعی تولید",
        "راستی‌آزمایی گواهی‌نامه‌ها و نتایج آنالیز آزمایشگاهی محصول",
        "برگزاری مکاتبات تجاری به زبان‌های بین‌المللی",
        "هماهنگی ارسال نمونه و شفاف‌سازی شرایط تحویل و بسته‌بندی"
      ],
      en: [
        "Manufacturer audit dossier with nominal vs actual production capacity",
        "Certificate verification, laboratory test assays, and technical compliance check",
        "Multilingual commercial correspondence and query handling",
        "Sample dispatch coordination, packaging inspection, and export terms clarity"
      ]
    },
    ctaLabel: {
      fa: "ثبت درخواست سورسینگ تامین‌کننده",
      en: "Submit Sourcing Request",
    },
    category: "connection"
  },
  {
    id: "international-b2b-marketing",
    order: "06",
    title: {
      fa: "بازاریابی B2B و جایگاه‌سازی بین‌المللی",
      en: "International B2B Marketing",
    },
    shortDescription: {
      fa: "طراحی کاتالوگ‌های استاندارد، ارائه‌های فنی، مشخصات محصول و حضور دیجیتال معتبر در نگاه خریداران جهانی.",
      en: "Tailoring export product catalogs, technical specification sheets, and international B2B sales collateral.",
    },
    whatItIs: {
      fa: "تبدیل محتوا و ادبیات تجاری تولیدکننده داخلی به استانداردهای مورد انتظار خریداران شرکت‌های چندملیتی و بین‌المللی.",
      en: "Transforming domestic product narratives into globally aligned B2B sales collaterals, technical specs, and digital positioning.",
    },
    whoNeedsIt: {
      fa: "تولیدکنندگانی با محصولات باکیفیت که مستندات بازاریابی یا کاتالوگ‌های آن‌ها متناسب با بازارهای صادراتی نیست.",
      en: "Producers with superior product quality undermined by sub-par brochures, weak specs, or amateur corporate presentation.",
    },
    problemSolved: {
      fa: "نادیده گرفته شدن توسط خریداران خارجی به دلیل کاتالوگ‌های غیرحرفه‌ای، ابهام در اطلاعات فنی و ترجمه‌های تحت‌اللفظی.",
      en: "Immediate disqualification by international buyers caused by confusing spec sheets and unrefined commercial language.",
    },
    whatWeDeliver: {
      fa: [
        "شناسنامه صادراتی محصول (Product Specification Sheet) با استانداردهای جهانی",
        "کاتالوگ و نمایه تجاری شرکتی به زبان انگلیسی حرفه‌ای",
        "ارائه تجاری مختصر برای معرفی به مدیران خرید (B2B Pitch Deck)",
        "راهنمای بسته‌بندی صادراتی و برچسب‌گذاری الزامی مقصد"
      ],
      en: [
        "Export-grade Technical Specification Datasheets (TDS)",
        "Executive B2B company profile and product catalog in refined English",
        "Targeted buyer pitch presentation focused on commercial value",
        "Regulatory export packaging and labeling advisory"
      ]
    },
    ctaLabel: {
      fa: "درخواست تدوین مستندات صادراتی",
      en: "Request Collateral Development",
    },
    category: "marketing"
  },
  {
    id: "export-development",
    order: "07",
    title: {
      fa: "توسعه ساختاریافته صادرات",
      en: "Export Development",
    },
    shortDescription: {
      fa: "همراهی تخصصی در تبدیل یک تولیدکننده داخلی به یک صادرکننده فعال و دارای جریان پایدار ارزی.",
      en: "Strategic advisory guiding domestic producers into disciplined, recurring international export operations.",
    },
    whatItIs: {
      fa: "برنامه‌ریزی جامع و مرحله‌به‌مرحله فرآیندهای صادراتی از آماده‌سازی محصول تا مذاکره نهایی و مدیریت سفارشات تکرارشونده.",
      en: "End-to-end framework covering product export readiness, compliance, pricing architecture, and long-term client retention.",
    },
    whoNeedsIt: {
      fa: "شرکت‌هایی که می‌خواهند از صادرات پراکنده و تصادفی به یک دپارتمان صادراتی منظم و با برنامه حرکت کنند.",
      en: "Companies seeking to transition from occasional, opportunistic spot exports into structured, predictable trade streams.",
    },
    problemSolved: {
      fa: "توقف صادرات پس از یک یا دو محموله به دلیل عدم مدیریت صحیح چرخه عمر مشتری و عدم توجه به الزامات زنجیره تامین.",
      en: "Client churn after initial shipments resulting from poor customer lifecycle management and supply consistency issues.",
    },
    whatWeDeliver: {
      fa: [
        "نقشه فرآیند عملیاتی صادرات ویژه شرکت",
        "مدل قیمت‌گذاری صادراتی بر مبنای اینکوترمز (FOB, CFR, CIF)",
        "تنظیم فرآیندهای ارتباطی و پاسخگویی به RFQ خریداران",
        "پایش مستمر روابط تجاری جهت اخذ سفارشات تکراری"
      ],
      en: [
        "Customized corporate export operational roadmap",
        "Incoterms-based export cost & margin structure (FOB, CFR, CIF)",
        "Standard operating procedure for handling international RFQs",
        "Client relationship framework for generating repeat orders"
      ]
    },
    ctaLabel: {
      fa: "درخواست برنامه توسعه صادرات",
      en: "Request Export Development Plan",
    },
    category: "development"
  },
  {
    id: "competitor-analysis",
    order: "08",
    title: {
      fa: "تحلیل رقبا و پویایی بازار",
      en: "Competitor & Market Analysis",
    },
    shortDescription: {
      fa: "کالبدشکافی رفتار تامین‌کنندگان رقیب در بازار هدف از نظر قیمت، شرایط تحویل، کیفیت و کانال‌های توزیع.",
      en: "Benchmarking competing suppliers in target markets on pricing, payment terms, packaging, and channel strategies.",
    },
    whatItIs: {
      fa: "تحقیق دقیق در مورد برندها و تامین‌کنندگانی که در حال حاضر سهم بازار کشور مقصد را در دست دارند.",
      en: "Comprehensive reconnaissance into regional and global competitors dominating market share in target countries.",
    },
    whoNeedsIt: {
      fa: "شرکت‌هایی که قیمت یا کیفیت پیشنهادی آن‌ها توسط خریداران خارجی رد شده و علت آن را به دقت نمی‌دانند.",
      en: "Producers experiencing stalled deals or pricing resistance without clear insight into competitors' local terms.",
    },
    problemSolved: {
      fa: "قیمت‌گذاری کورکورانه و پیش‌فرض‌های نادرست در مورد توان رقبای منطقه‌ای (ترکیه، چین، هند و...).",
      en: "Blind spot pricing assumptions and misunderstanding regional competitor offerings (Turkey, China, India, etc.).",
    },
    whatWeDeliver: {
      fa: [
        "جدول مقایسه تطبیقی مشخصات فنی و قیمتی رقبای اصلی",
        "بررسی نقاط ضعف تامین‌کنندگان فعلی جهت ایجاد ارزش تمایز",
        "تحلیل شیوه‌های بسته‌بندی، وزن‌ها و کانال‌های ترویج رقبا",
        "توصیه‌های کاربردی برای جایگاه‌یابی قیمتی و شرایط اعتباری"
      ],
      en: [
        "Comparative benchmark grid of top competitor specs and retail/wholesale price points",
        "Vulnerability assessment of existing market incumbents",
        "Packaging formats, net weights, and shelf presentation breakdown",
        "Tactical recommendations on pricing positioning and commercial terms"
      ]
    },
    ctaLabel: {
      fa: "درخواست تحلیل رقبا",
      en: "Request Competitor Audit",
    },
    category: "research"
  },
  {
    id: "product-market-fit",
    order: "09",
    title: {
      fa: "تحلیل تناسب محصول و بازار صادراتی",
      en: "Product-Market Fit Analysis",
    },
    shortDescription: {
      fa: "ارزیابی اینکه آیا محصول فعلی شما دقیقاً منطبق بر ذائقه، مقررات و نیاز فنی بازار مقصد است یا خیر.",
      en: "Assessing whether your existing product formulation, packaging, and sizing align with destination market standards.",
    },
    whatItIs: {
      fa: "بررسی انطباق مشخصات فیزیکی، فرمولاسیون، ابعاد و بسته‌بندی کالا با استانداردهای مصرف در کشور هدف.",
      en: "Systematic review of product formulation, physical dimensions, shelf-life, and consumer ergonomics in target regions.",
    },
    whoNeedsIt: {
      fa: "تولیدکنندگانی که بسته‌بندی و فرمولاسیون آن‌ها برای بازار داخلی ایران طراحی شده و به دنبال انطباق با بازار هدف هستند.",
      en: "Manufacturers whose products are engineered for the domestic market seeking validation before international production runs.",
    },
    problemSolved: {
      fa: "تولید انبوه محصولاتی که به دلیل ابعاد غیراستاندارد پالت، سایز نامناسب برای قفسه‌ها یا برچسب‌گذاری ناقص مرجوع می‌شوند.",
      en: "High-cost returns or customs rejections due to non-compliant packaging, pallet sizing, or nutritional labeling gaps.",
    },
    whatWeDeliver: {
      fa: [
        "گزارش بررسی انطباق بسته‌بندی، برچسب و اطلاعات فنی کالا",
        "بررسی تفاوت‌های مصرفی و الزامات خرده‌فروشی مقصد",
        "پیشنهاد تغییرات لازم در وزن، حجم یا ترکیبات محصول",
        "تاییدیه اولیه پیش از چاپ لیبل و تولید سری صادراتی"
      ],
      en: [
        "Labeling, nutritional table, and barrier packaging compliance review",
        "Consumption habit and shelf-space dimension requirements report",
        "Formulation, net weight, and portion-size optimization suggestions",
        "Pre-production checklist prior to final packaging print runs"
      ]
    },
    ctaLabel: {
      fa: "درخواست ارزیابی تناسب محصول",
      en: "Request Product-Market Fit Audit",
    },
    category: "development"
  },
  {
    id: "commercial-communication",
    order: "10",
    title: {
      fa: "پشتیبانی از ارتباطات و مکاتبات تجاری",
      en: "Commercial Communication Support",
    },
    shortDescription: {
      fa: "هدایت حرفه‌ای ایمیل‌ها، پیش‌فاکتورها، پاسخ به استعلام‌ها (RFQ) و پیگیری‌های مداوم به زبان‌های تجاری.",
      en: "Professional handling of commercial RFQs, technical replies, formal proformas, and structured buyer follow-up.",
    },
    whatItIs: {
      fa: "پل ارتباطی تخصصی میان بازرگان ایرانی و خریدار خارجی برای جلوگیری از سوءتفاهم‌های زبانی و تجاری.",
      en: "Expert commercial communication management between Iranian exporters and global buyers eliminating cross-cultural friction.",
    },
    whoNeedsIt: {
      fa: "واحدهای تولیدی که به علت ضعف تسلط زبان انگلیسی یا عدم آشنایی با ادبیات قراردادهای B2B پاسخ خریداران را از دست می‌دهند.",
      en: "Producers whose sales momentum stalls due to delayed responses, informal tone, or ambiguous commercial terms.",
    },
    problemSolved: {
      fa: "پاسخ‌های دیرهنگام، پیام‌های غیررسمی در واتساپ به جای اسناد رسمی تجاری، و از دست رفتن سرنخ‌های ارزشمند.",
      en: "Lost trade inquiries due to delayed replies, unprofessional messaging, or incomplete quotation details.",
    },
    whatWeDeliver: {
      fa: [
        "تدوین قالب‌های استاندارد پیش‌فاکتور (Proforma Invoice) و فرم‌های استعلام",
        "نگارش و بازبینی مکاتبات حساس قیمت‌گذاری و شرایط تحویل",
        "پشتیبانی در جلسات آنلاین مذاکره به زبان انگلیسی",
        "مدیریت تقویم پیگیری ساختاریافته تا حصول نتیجه قطعی"
      ],
      en: [
        "Standardized Proforma Invoice, Quotation, and Specification templates",
        "Drafting and review of critical commercial emails and counter-offers",
        "Commercial representation and translation support during virtual negotiations",
        "Structured follow-up calendar preventing lead drop-off"
      ]
    },
    ctaLabel: {
      fa: "درخواست پشتیبانی مکاتبات تجاری",
      en: "Request Communication Support",
    },
    category: "marketing"
  },
  {
    id: "business-development",
    order: "11",
    title: {
      fa: "توسعه کسب‌وکار و پیوندهای تجاری",
      en: "Business Development & Trade Connection",
    },
    shortDescription: {
      fa: "ایجاد ارتباط مستقیم میان بازیگران صنعتی مکمل و ایجاد کانال‌های هم‌افزا در زنجیره تامین بین‌المللی.",
      en: "Facilitating strategic alliances, supply chain integration, and mutually beneficial commercial partnerships.",
    },
    whatItIs: {
      fa: "رویکردی بلندمدت برای تعریف پروژه‌های مشترک تجاری، تامین مواد اولیه، سرمایه‌گذاری متقابل یا نمایندگی دوجانبه.",
      en: "A long-term framework for identifying collaborative commercial ventures, co-packing agreements, and strategic partnerships.",
    },
    whoNeedsIt: {
      fa: "شرکت‌هایی که فراتر از فروش تک‌محموله‌ای، به دنبال شریک تجاری استراتژیک در کشورهای منطقه یا بین‌الملل هستند.",
      en: "Enterprises seeking durable strategic commercial relationships rather than volatile single-shipment transactions.",
    },
    problemSolved: {
      fa: "وابستگی به یک کانال فروش ناپایدار و آسیب‌پذیری بالا در برابر تغییرات اقتصادی ناگهانی.",
      en: "High vulnerability from relying on fragile, single-channel commercial distribution in volatile trade climates.",
    },
    whatWeDeliver: {
      fa: [
        "شناسایی فرصت‌های همکاری استراتژیک در زنجیره ارزش",
        "تنظیم تفاهم‌نامه‌های اولیه تجاری (MOU)",
        "پایش منافع طرفین و ایجاد شفافیت در ساختار تعاملات",
        "پشتیبانی از توسعه پایدار روابط B2B"
      ],
      en: [
        "Value chain synergy mapping and cross-border partnership assessment",
        "Memorandum of Understanding (MOU) commercial framework formulation",
        "Alignment facilitation and transparent multi-party governance",
        "Long-term B2B commercial relationship stewardship"
      ]
    },
    ctaLabel: {
      fa: "درخواست توسعه پیوند تجاری",
      en: "Request Business Development",
    },
    category: "development"
  },
  {
    id: "trade-opportunity-research",
    order: "12",
    title: {
      fa: "دیده‌بانی و شناسایی فرصت‌های نوظهور تجاری",
      en: "Trade Opportunity Research",
    },
    shortDescription: {
      fa: "رصد تغییرات تعرفه‌ای، توافق‌نامه‌های منطقه‌ای (اوراسیا، بریکس، همسایگان) و کمبودهای مقطعی در بازارهای اطراف.",
      en: "Monitoring regional trade agreements (EAEU, BRICS, GCC), tariff shifts, and unexpected commodity deficits.",
    },
    whatItIs: {
      fa: "دیده‌بانی مداوم بازارهای بین‌المللی برای کشف پنجره‌های زمانی طلایی که تقاضا برای کالای ایرانی به صورت ناگهانی افزایش می‌یابد.",
      en: "Continuous trade surveillance spotting high-value windows of opportunity created by regulatory shifts or localized supply deficits.",
    },
    whoNeedsIt: {
      fa: "تولیدکنندگان چابک و بازرگانانی که ظرفیت تولید آزاد داشته و می‌خواهند سریعاً به تقاضاهای مقطعی بازارهای اطراف پاسخ دهند.",
      en: "Agile manufacturers with flexible production bandwidth ready to capitalize on timely cross-border supply vacuums.",
    },
    problemSolved: {
      fa: "بی‌اطلاعی از پنجره‌های فرصت تجاری تا زمانی که سایر رقبا بازار را اشغال کنند.",
      en: "Missing lucrative market windows until regional competitors have already locked in supply contracts.",
    },
    whatWeDeliver: {
      fa: [
        "پایش ماهانه تغییرات تعرفه‌ای و تفاهم‌نامه‌های تجاری ترجیحی",
        "اطلاع‌رسانی سریع مناقصات و تقاضاهای کلان در کشورهای پیرامونی",
        "تحلیل اثر توافق‌نامه‌های تجاری بر قیمت نهایی تمام‌شده",
        "بریف‌های فشرده فرصت تجاری با اقدام فوری"
      ],
      en: [
        "Ongoing surveillance of preferential trade agreements and tariff updates",
        "Early alerts on regional procurement tenders and large-scale deficits",
        "Landed cost sensitivity models under newly signed bilateral pacts",
        "Actionable trade opportunity briefs with rapid turnaround plans"
      ]
    },
    ctaLabel: {
      fa: "درخواست دیده‌بانی فرصت تجاری",
      en: "Request Opportunity Surveillance",
    },
    category: "research"
  }
];
