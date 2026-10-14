/**
 * Market Intelligence Data for Nilay Trade
 * Filterable directory of commercial research reports.
 * Labeled transparently as preliminary / sample framework intelligence; no fabricated stats.
 */

export interface MarketReport {
  id: string;
  title: {
    fa: string;
    en: string;
  };
  summary: {
    fa: string;
    en: string;
  };
  country: string;
  countryFa: string;
  product: string;
  productFa: string;
  industry: 'Food & Agriculture' | 'Industrial & Minerals' | 'Chemicals & Materials' | 'Natural & Herbs' | 'General B2B';
  reportType: 'Country Market Report' | 'Product Export Potential' | 'Buyer & Distributor Research' | 'Competitor Analysis' | 'Export Entry Strategy' | 'Market Opportunity Analysis';
  publishedDate: string;
  pagesCount: number;
  keyInsights: {
    fa: string[];
    en: string[];
  };
  isSampleFramework: boolean;
}

export const marketReportsData: MarketReport[] = [
  {
    id: "gulf-food-saffron-nuts",
    title: {
      fa: "بررسی تقاضا و کانال‌های توزیع خشکبار و زعفران در امارات و عمان",
      en: "Demand & Distribution Channels for Saffron & Dried Fruits in UAE & Oman",
    },
    summary: {
      fa: "تحلیل چارچوب بازار عمده‌فروشی دبی به عنوان هاب بازصادرات، ساختار قیمت‌گذاری و الزامات استاندارد شهرداری دبی (Dubai Municipality).",
      en: "Analysis of Dubai wholesale re-export hub dynamics, landed pricing frameworks, and Dubai Municipality food safety compliance.",
    },
    country: "UAE & Oman",
    countryFa: "امارات و عمان",
    product: "Saffron, Pistachios & Dates",
    productFa: "زعفران، پسته و خرما",
    industry: "Food & Agriculture",
    reportType: "Country Market Report",
    publishedDate: "2026-08",
    pagesCount: 24,
    keyInsights: {
      fa: [
        "بررسی نقش بازار میوه و تره‌بار ورسان دبی (Al Aweer) در بازصادرات به آفریقا و هند",
        "الزامات برچسب‌گذاری سامانه زاد (ZAD) برای واردات مواد غذایی به امارات",
        "مقایسه ترجیحات بسته‌بندی ۵۰۰ گرمی خرده‌فروشی در برابر کارتن‌های ۱۰ کیلویی فله",
        "تحلیل بازارهای نوظهور مسقط به عنوان درگاه ترانزیتی کم‌هزینه"
      ],
      en: [
        "Role of Al Aweer and Ras Al Khor wholesale nodes in secondary re-export to India/East Africa",
        "ZAD food inspection system compliance steps for immediate customs release",
        "Retail 500g branded vacuum pouches versus 10kg industrial bulk packaging demand",
        "Emerging Muscat logistics corridors as tariff-efficient transit routes"
      ]
    },
    isSampleFramework: true
  },
  {
    id: "russia-construction-stone",
    title: {
      fa: "پتانسیل‌سنجی صادرات سنگ‌های ساختمانی و سرامیک پرسلان به فدراسیون روسیه",
      en: "Export Potential Assessment: Architectural Stone & Porcelain Tiles to the Russian Federation",
    },
    summary: {
      fa: "بررسی نیازهای پروژه‌های انبوه‌سازی مسکو و سن‌پترزبورگ پس از تغییر زنجیره‌های تامین اروپایی و جایگزینی با تامین‌کنندگان ایرانی.",
      en: "Assessing residential infrastructure procurement in Moscow and St. Petersburg following European supply chain reconfiguration.",
    },
    country: "Russian Federation",
    countryFa: "روسیه",
    product: "Travertine, Marble & Porcelain Tiles",
    productFa: "تراورتن، مرمریت و پرسلان",
    industry: "Industrial & Minerals",
    reportType: "Product Export Potential",
    publishedDate: "2026-07",
    pagesCount: 32,
    keyInsights: {
      fa: [
        "انطباق فنی مقاومت در برابر یخ‌زدگی (Frost Resistance) طبق استاندارد GOST",
        "مسیرهای حمل ترکیبی دریای خزر (انزلی/امیرآباد به آستاراخان) در برابر مسیر زمینی داغستان",
        "ساختار تسویه تجاری روبل/ریال از طریق کانال‌های بین‌بانکی رسمی میر و سپام",
        "ترجیحات رنگی معماران روسی برای اسلب‌های تراورتن کرم و مرمریت طوسی"
      ],
      en: [
        "Technical frost-resistance testing protocols under GOST construction codes",
        "Caspian multimodal sea route (Anzali/Amirabad to Astrakhan) vs Dagestan road transit",
        "Bilateral settlement frameworks utilizing MIR/SEPAM direct clearing banking channels",
        "Architectural palette preferences favoring beige travertine and graphite grey marble slabs"
      ]
    },
    isSampleFramework: true
  },
  {
    id: "iraq-detergents-fmcg",
    title: {
      fa: "تحلیل شبکه خریداران و توزیع‌کنندگان مواد شوینده و بهداشتی در بغداد و بصره",
      en: "Buyer & Distributor Mapping: Household Detergents & Hygiene Products in Baghdad & Basra",
    },
    summary: {
      fa: "بررسی بازیگران عمده پخش مویرگی در جمیله بغداد، مقایسه سهم برندهای ترکیه‌ای و ایرانی، و راهکارهای غلبه بر چالش‌های تعرفه فصلی.",
      en: "Field mapping of wholesale networks in Jamila Baghdad, benchmarking Turkish vs Iranian brand equity, and seasonal tariff management.",
    },
    country: "Iraq",
    countryFa: "عراق",
    product: "Detergents & FMCG Hygiene",
    productFa: "شوینده و بهداشتی",
    industry: "Chemicals & Materials",
    reportType: "Buyer & Distributor Research",
    publishedDate: "2026-06",
    pagesCount: 18,
    keyInsights: {
      fa: [
        "پروفایل ۱۲ شرکت توزیع‌کننده فعال با پوشش سراسری استان‌های مرکزی و جنوبی عراق",
        "الزامات گواهی بازرسی مبدأ (CoC) صادرشده توسط شرکت‌های مجاز نظیر BV یا SGS",
        "اهمیت فرمولاسیون سازگار با آب با سختی بالا (Hard Water) در جنوب عراق",
        "مکانیزم‌های تحویل کالا در مرزهای پرویزخان، مهران و شلمچه"
      ],
      en: [
        "Dossier of 12 established national distributors covering central and southern Iraqi governorates",
        "Mandatory Certificate of Conformity (CoC) prerequisites through certified inspection bodies",
        "Formulation tuning for high-hardness regional tap water in southern Iraqi cities",
        "Border transshipment protocols across Mehran, Parvizkhan, and Shalamcheh gates"
      ]
    },
    isSampleFramework: true
  },
  {
    id: "germany-herbal-extracts",
    title: {
      fa: "استراتژی ورود به بازار عصاره‌ها و گیاهان دارویی در آلمان و اروپای مرکزی",
      en: "Market Entry Strategy: Organic Herbal Extracts & Botanicals into Germany & Central Europe",
    },
    summary: {
      fa: "تحلیل الزامات مقرراتی دارونامه اروپا (European Pharmacopoeia)، تعیین حد مجاز آفات، و شیوه برقراری ارتباط با خریداران صنعتی آزمایشگاهی.",
      en: "Navigating European Pharmacopoeia (Ph. Eur.) purity thresholds, pesticide limits, and B2B engagement with industrial extractors.",
    },
    country: "Germany & EU",
    countryFa: "آلمان و اتحادیه اروپا",
    product: "Licorice & Medicinal Botanicals",
    productFa: "عصاره شیرین‌بیان و گیاهان دارویی",
    industry: "Natural & Herbs",
    reportType: "Export Entry Strategy",
    publishedDate: "2026-05",
    pagesCount: 28,
    keyInsights: {
      fa: [
        "آزمون‌های الزامی برای اسید گلیسیریزیک در عصاره شیرین‌بیان و آزمون فلزات سنگین",
        "چالش‌های گواهی ارگانیک EU Organic و فرآیند بازرسی مزرعه و کارخانه",
        "روش‌های تدوین برگه مشخصات فنی (Technical Data Sheet) به استاندارد آزمایشگاهی اروپا",
        "کانال‌های واسطه‌ای در هامبورگ و روتردام جهت تسهیل ورود کالا"
      ],
      en: [
        "Glycyrrhizic acid potency benchmarks and HPLC verification requirements",
        "EU Organic certification pathways, audit trails, and chemical residue compliance",
        "Drafting European laboratory-grade Technical Data Sheets (TDS) and COA formats",
        "Strategic entry via specialized trading intermediaries based in Hamburg and Rotterdam"
      ]
    },
    isSampleFramework: true
  },
  {
    id: "turkey-polymers-chemicals",
    title: {
      fa: "تحلیل رقابتی بازار گرانول‌های پلیمری و ترکیبات شیمیایی در ترکیه",
      en: "Competitor Benchmark: Polymer Granules & Specialty Chemical Compounds in Turkey",
    },
    summary: {
      fa: "بررسی شکاف‌های عرضه و تقاضا در منطقه صنعتی گازی‌عنتپ و استانبول، تحلیل مزیت قیمتی تولیدکنندگان ایرانی در برابر عربستان و روسیه.",
      en: "Supply-demand gap analysis across Gaziantep and Istanbul industrial zones; cost parity vs Saudi and Russian petrochemical producers.",
    },
    country: "Turkey",
    countryFa: "ترکیه",
    product: "Polyethylene & Industrial Solvents",
    productFa: "پلی‌اتیلن و حلال‌های صنعتی",
    industry: "Chemicals & Materials",
    reportType: "Competitor Analysis",
    publishedDate: "2026-04",
    pagesCount: 22,
    keyInsights: {
      fa: [
        "بررسی سیستم‌های ثبت شیمیایی KKDIK (REACH ترکیه) و وظایف صادرکننده",
        "هزینه حمل جاده‌ای از مسیر مرز بازرگان/گوربولاغ و زمان ترخیص گمرکی",
        "تحلیل سیاست‌های اعتباری رقبای عربستانی و ارائه راهکارهای رقابتی ایرانی",
        "تقاضای رو به رشد کارگاه‌های بازیافت و تولید نایلون بسته‌بندی در ترکیه"
      ],
      en: [
        "KKDIK (Turkish REACH) registration framework obligations for external exporters",
        "Cross-border trucking turnaround through Bazargan/Gurbulak frontier stations",
        "Countering 60-90 day credit models offered by Gulf producers with cash discount incentives",
        "Expanding industrial demand in woven packaging and blow-molding factories"
      ]
    },
    isSampleFramework: true
  },
  {
    id: "central-asia-food-processing",
    title: {
      fa: "شناسایی فرصت‌های بازار صنایع تبدیلی غذایی و کنسانتره در ازبکستان و قزاقستان",
      en: "Market Opportunity Analysis: Processed Foods & Fruit Concentrates in Uzbekistan & Kazakhstan",
    },
    summary: {
      fa: "رشد سریع صنعت نوشیدنی و بسته‌بندی تاشکند و آلماتی و نیاز روزافزون به رب گوجه، کنسانتره انار و مواد اولیه غذایی باکیفیت ایرانی.",
      en: "Surging consumer beverage sector in Tashkent and Almaty driving structural demand for Iranian tomato paste and fruit concentrates.",
    },
    country: "Uzbekistan & Kazakhstan",
    countryFa: "ازبکستان و قزاقستان",
    product: "Tomato Paste & Fruit Puree",
    productFa: "رب گوجه‌فرنگی و پوره میوه",
    industry: "Food & Agriculture",
    reportType: "Market Opportunity Analysis",
    publishedDate: "2026-03",
    pagesCount: 20,
    keyInsights: {
      fa: [
        "مزیت ترانزیت ریلی مستقیم از مشهد و سرخس به مقاصد آسیای میانه بدون نیاز به جابجایی کانتینر",
        "اهمیت بریکس (Brix) استانداردهای ۳۶-۳۸ برای صنایع بسته‌بندی سس و آبمیوه محلی",
        "تعرفه‌های ترجیحی و تشریفات گمرکی منطقه آزاد اقتصادی نوایی",
        "پروفایل کارخانجات پیشرو آبمیوه در تاشکند به عنوان خریداران بالقوه B2B"
      ],
      en: [
        "Direct rail transit efficiency from Sarakhs gateway directly to Tashkent without break-of-gauge delay",
        "Target Brix (36-38%) specifications for industrial sauce and beverage manufacturing plants",
        "Preferential tariff clearance protocols within Navoi Free Industrial Economic Zone",
        "Comprehensive procurement profile of top beverage packaging facilities in Tashkent"
      ]
    },
    isSampleFramework: true
  }
];
