/**
 * Export-Oriented Sectors & Products Directory for Nilay Trade
 * Product-flexible, market-oriented directory with HS Codes, target markets, and regulatory considerations.
 */

export interface SectorItem {
  id: string;
  name: {
    fa: string;
    en: string;
  };
  hsCodePrefix: string;
  shortSummary: {
    fa: string;
    en: string;
  };
  exportPotential: 'High' | 'Very High' | 'Strategic';
  primaryTargetMarkets: {
    fa: string[];
    en: string[];
  };
  sampleProducts: {
    fa: string[];
    en: string[];
  };
  buyerTypes: {
    fa: string[];
    en: string[];
  };
  competitorCountries: {
    fa: string[];
    en: string[];
  };
  regulatoryConsiderations: {
    fa: string;
    en: string;
  };
  packagingConsiderations: {
    fa: string;
    en: string;
  };
  logisticsConsiderations: {
    fa: string;
    en: string;
  };
}

export const sectorsData: SectorItem[] = [
  {
    id: "agriculture-food",
    name: {
      fa: "کشاورزی و صنایع غذایی صادراتی",
      en: "Agriculture & Food Products",
    },
    hsCodePrefix: "HS 08 (خشکبار و میوه) / HS 09 (زعفران و ادویه) / HS 20 (کنسروجات)",
    shortSummary: {
      fa: "مزیت رقابتی بنیادین ایران در زعفران باکیفیت، پسته، خرما، کشمش، میوه‌های خشک و صنایع تبدیلی غذایی.",
      en: "Iran's structural competitive edge in premium saffron, pistachios, dates, dried fruits, and processed food ingredients.",
    },
    exportPotential: "Very High",
    primaryTargetMarkets: {
      fa: ["کشورهای حوزه خلیج فارس (امارات، قطر، عمان)", "کشورهای عضو اتحادیه اقتصادی اوراسیا (روسیه، قزاقستان)", "چین و شرق آسیا", "کشورهای اروپایی منتخب"],
      en: ["GCC Countries (UAE, Qatar, Oman)", "EAEU Region (Russia, Kazakhstan)", "China & East Asia", "Select European Importers"]
    },
    sampleProducts: {
      fa: ["پسته ممتاز (اکبری، کله‌قوچی، فندقی)", "زعفران نگین و سوپرنگین صادراتی", "خرمای مضافتی و پیارم", "کشمش طلایی و سلطانی", "رب گوجه‌فرنگی و کنسانتره میوه"],
      en: ["Premium Pistachios (Akbari, Fandoghi)", "Super Negin Saffron", "Mazafati & Piarom Dates", "Golden & Sultana Raisins", "Tomato Paste & Fruit Concentrates"]
    },
    buyerTypes: {
      fa: ["عمده‌فروشان و بسته‌بندی‌کنندگان مواد غذایی در مقاصد بین‌المللی", "زنجیره‌های سوپرمارکتی و شرکت‌های پخش منطقه‌ای", "صنایع تبدیلی شیرینی، شکلات و صنایع غذایی"],
      en: ["Bulk commodity packers and re-packers", "Supermarket chains and regional FMCG distributors", "Confectionery, bakery, and food processing industries"]
    },
    competitorCountries: {
      fa: ["ایالات متحده (پسته)", "اسپانیا (زعفران)", "تونس و عربستان (خرما)", "ترکیه (کشمش و صنایع تبدیلی)"],
      en: ["United States (Pistachios)", "Spain (Saffron)", "Tunisia & Saudi Arabia (Dates)", "Turkey (Raisins & Food Processing)"]
    },
    regulatoryConsiderations: {
      fa: "الزام اخذ گواهی بهداشت نباتی (Phytosanitary)، آزمون‌های میزان آفلاتوکسین برای مغزها، باقیمانده سموم (MRLs) و گواهی حلال در بازارهای اسلامی.",
      en: "Strict phytosanitary certificates, aflatoxin thresholds for nuts, Maximum Residue Limits (MRLs), and Halal certification for Islamic markets."
    },
    packagingConsiderations: {
      fa: "بسته‌بندی‌های وکیوم و تحت گاز نیتروژن، کارتن‌های ۵ لایه ضد رطوبت برای حمل دریایی، و لیبل‌گذاری چندزبانه منطبق بر قوانین گمرک مقصد.",
      en: "Nitrogen-flushed vacuum barrier packaging, moisture-resistant 5-ply export cartons, and bilingual compliant regulatory labeling."
    },
    logisticsConsiderations: {
      fa: "حمل با کانتینرهای یخچالی (Reefer) برای میوه و خرما، حمل دریایی فله‌ای استاندارد و حمل جاده‌ای مستقیم به کشورهای همسایه و اوراسیا.",
      en: "Reefer container logistics for fresh produce/dates, break-bulk for dry staples, and direct TIR road transit to Eurasia and neighbors."
    }
  },
  {
    id: "herbal-natural",
    name: {
      fa: "گیاهان دارویی، عصاره‌ها و فرآورده‌های طبیعی",
      en: "Herbal & Natural Products",
    },
    hsCodePrefix: "HS 1211 (گیاهان دارویی) / HS 3301 (اسانس‌ها و عصاره‌ها)",
    shortSummary: {
      fa: "تنوع اقلیمی منحصر‌به‌فرد ایران با بیش از ۸۰۰۰ گونه گیاهی؛ ظرفیت استثنایی در گل‌محمدی، بادرنجبویه، شیرین‌بیان و عصاره‌های غلیظ.",
      en: "Exceptional botanical diversity with thousands of endemic species: damask rose, licorice, medicinal herbs, and concentrated extracts.",
    },
    exportPotential: "High",
    primaryTargetMarkets: {
      fa: ["آلمان و اتحادیه اروپا (صنایع دارویی و بهداشتی)", "هند و چین (طب سنتی و عصاره‌گیری)", "ترکیه و امارات"],
      en: ["Germany & EU (Pharmaceutical & Cosmetic)", "India & China (Traditional Formulations)", "Turkey & UAE"]
    },
    sampleProducts: {
      fa: ["عصاره و پودر ریشه شیرین‌بیان", "غنچه و گلبرگ گل محمدی", "روغن‌های پایه گیاهی و اسانس تقطیری", "گیاهان خشک دارویی ارگانیک"],
      en: ["Licorice Extract & Root Powder", "Damask Rose Buds & Rose Water", "Essential Oils & Distillates", "Certified Organic Medicinal Herbs"]
    },
    buyerTypes: {
      fa: ["کارخانجات داروسازی و مکمل‌های گیاهی", "تولیدکنندگان لوازم آرایشی و بهداشتی ارگانیک", "فرآوری‌کنندگان اسانس و طعم‌دهنده‌های طبیعی"],
      en: ["Pharmaceutical and nutraceutical laboratories", "Natural cosmetics and personal care manufacturers", "Flavour and fragrance processing companies"]
    },
    competitorCountries: {
      fa: ["هند", "چین", "بلغارستان (گل محمدی)", "ازبکستان (شیرین‌بیان)"],
      en: ["India", "China", "Bulgaria (Rose Derivatives)", "Uzbekistan (Licorice)"]
    },
    regulatoryConsiderations: {
      fa: "ضرورت گواهی آنالیز آزمایشگاهی (COA)، آنالیز میکروبی، اندازه‌گیری ماده موثره، و گواهی عاری بودن از فلزات سنگین.",
      en: "Certificate of Analysis (COA), microbiological testing, active compound profiling (HPLC), and heavy-metal purity verification."
    },
    packagingConsiderations: {
      fa: "کیسه‌های چندلایه کرافت آلومینیومی محافظ نور و رطوبت، بشکه‌های غذایی با درپوش هوابند برای اسانس‌ها.",
      en: "Multi-ply aluminium kraft barrier bags protecting from light/humidity, food-grade airtight drums for essential oils."
    },
    logisticsConsiderations: {
      fa: "حمل هوایی برای اسانس‌ها و کالاهای با ارزش افزوده بالا؛ حمل کانتینری خشک با رطوبت‌گیر برای ریشه و گیاهان خشک.",
      en: "Air freight for high-value essential oils; temperature-monitored dry containers with desiccant systems for dry botanicals."
    }
  },
  {
    id: "industrial-products",
    name: {
      fa: "محصولات صنعتی، ساختمانی و قطعات مهندسی",
      en: "Industrial & Construction Products",
    },
    hsCodePrefix: "HS 68 / 69 (کاشی و سنگ) / HS 72 / 73 (فولاد و مقاطع فلزی) / HS 84",
    shortSummary: {
      fa: "بهره‌مندی از انرژی مقرون‌به‌صرفه و ذخایر غنی معدنی در تولید سنگ‌های ساختمانی، کاشی و سرامیک، مقاطع فولادی و اتصالات صنعتی.",
      en: "Competitive cost-base leveraged by mineral wealth and energy: building stones, ceramics, tiles, steel products, and metal fabrication.",
    },
    exportPotential: "Very High",
    primaryTargetMarkets: {
      fa: ["عراق و اقلیم کردستان", "سوریه، لبنان و کشورهای حوزه شامات", "آسیای میانه و قفقاز (آذربایجان، ارمنستان، ازبکستان)", "کشورهای حوزه خلیج فارس"],
      en: ["Iraq & Kurdistan Region", "Levant (Syria, Lebanon)", "Central Asia & Caucasus", "Oman & GCC Construction Sector"]
    },
    sampleProducts: {
      fa: ["اسلب و تایل تراورتن، مرمریت و گرانیت", "کاشی و سرامیک پرسلانی پرتردد", "میلگرد، لوله‌های صنعتی و پروفیل فولادی", "سیمان، کلینکر و گچ صادراتی"],
      en: ["Travertine, Marble, & Granite Slabs", "High-Traffic Porcelain Tiles", "Steel Rebar, Hollow Sections, & Industrial Pipes", "Clinker & Portland Export Cement"]
    },
    buyerTypes: {
      fa: ["پیمانکاران و انبوه‌سازان پروژه‌های ساختمانی کلان", "توزیع‌کنندگان مصالح ساختمانی و انبارهای زنجیره‌ای", "شرکت‌های بازرگانی صنعتی منطقه‌ای"],
      en: ["Infrastructure contractors and property mega-developers", "Building material wholesalers and distributors", "Regional industrial procurement groups"]
    },
    competitorCountries: {
      fa: ["ترکیه (کاشی، سرامیک و سنگ)", "چین (تجهیزات و فولاد)", "هند (سنگ ساختمانی)", "ایتالیا (تجهیزات لوکس)"],
      en: ["Turkey (Ceramics & Stone)", "China (Machinery & Steel)", "India (Natural Stone)", "Italy (High-End Luxury)"]
    },
    regulatoryConsiderations: {
      fa: "گواهی انطباق استاندارد ساختمانی مقصد (مانند استاندارد عراق، SASO عربستان یا استانداردهای GOST اوراسیا).",
      en: "Compliance with regional construction standards (Iraqi CoC, SASO, or GOST certifications for post-Soviet territories)."
    },
    packagingConsiderations: {
      fa: "پالت‌بندی مقاوم چوبی سم‌پاشی‌شده (ISPM-15)، تسمه‌کشی فلزی یا پلیمری مقاوم، و پدهای محافظ لبه تایل‌ها.",
      en: "Fumigated wooden pallets (ISPM-15 certified), heavy-duty polymer strapping, and edge protectors for stone/ceramic slabs."
    },
    logisticsConsiderations: {
      fa: "حمل زمینی تریلی لبه‌دار و کفی، حمل دریایی فله و کانتینری، اهمیت کنترل وزن محور بر اساس قوانین ترانزیت کشورهای مسیر.",
      en: "Heavy flatbed and curtain-sided road trucks, break-bulk bulk carrier ships, and strict axle-weight compliance along corridors."
    }
  },
  {
    id: "chemicals-inputs",
    name: {
      fa: "محصولات شیمیایی، پلیمری و نهاده‌های کشاورزی",
      en: "Chemicals, Polymers & Agricultural Inputs",
    },
    hsCodePrefix: "HS 31 (کودها) / HS 38 (شیمیایی صنعتی) / HS 39 (پلیمرها و پلاستیک)",
    shortSummary: {
      fa: "ظرفیت عظیم صنایع بالادستی و پایین‌دستی پتروشیمی در تولید انواع پلیمرها، کودهای کشاورزی، روانکارها و حلال‌های صنعتی.",
      en: "Vast petrochemical and specialized chemical capabilities: engineering polymers, fertilizers, lubricants, and industrial solvents.",
    },
    exportPotential: "Strategic",
    primaryTargetMarkets: {
      fa: ["ترکیه و اروپای شرقی", "کشورهای CIS و آسیای میانه", "پاکستان و افغانستان", "آفریقای شرقی"],
      en: ["Turkey & Eastern Europe", "CIS & Central Asia", "Pakistan & South Asia", "East African Agricultural Corridors"]
    },
    sampleProducts: {
      fa: ["پلی‌اتیلن سبک و سنگین (HDPE, LDPE)", "کودهای شیمیایی اوره و سولفات آمونیوم", "پارافین و واکس‌های صنعتی", "مستربچ‌ها و کامپاندهای پلیمری"],
      en: ["Polyethylene Grades (HDPE, LDPE, LLDPE)", "Urea & Ammonium Sulphate Fertilizers", "Industrial Paraffin & Slack Wax", "Polymer Masterbatches & Compounds"]
    },
    buyerTypes: {
      fa: ["صنایع تزریق پلاستیک و تولیدکنندگان بسته‌بندی", "تعاونی‌ها و اتحادیه‌های بزرگ کشاورزی و زراعی", "کارخانجات رنگ، رزین و چسب"],
      en: ["Plastics converters and packaging converters", "Agricultural syndicates and large fertilizer blenders", "Paint, resin, and adhesive manufacturers"]
    },
    competitorCountries: {
      fa: ["عربستان سعودی و امارات (پتروشیمی)", "روسیه (کودها و حلال‌ها)", "چین", "کره جنوبی"],
      en: ["Saudi Arabia & UAE (Petrochemicals)", "Russia (Fertilizers & Base Oils)", "China", "South Korea"]
    },
    regulatoryConsiderations: {
      fa: "برگه‌های ایمنی مواد شیمیایی (MSDS/SDS) بین‌المللی، کدگذاری GHS، و در مقاصد اروپایی رجیستری REACH.",
      en: "Globally Harmonized System (GHS) compliant Safety Data Sheets (SDS), technical datasheets (TDS), and REACH prerequisites where applicable."
    },
    packagingConsiderations: {
      fa: "کیسه‌های ۲۵ کیلویی ضدالکتریسیته ساکن روی پالت‌های شیرینگ‌شده، بیگ‌بگ‌های ۱ تنی (Jumbo Bags) و مخازن ایزوتانک (ISO Tank) برای مایعات.",
      en: "25kg anti-static moisture-proof bags on stretch-wrapped pallets, 1-ton heavy-duty jumbo bags, and ISO tanks for liquid solvents."
    },
    logisticsConsiderations: {
      fa: "رعایت الزامات کالای خطرناک (ADR / IMO) در صورت وجود، حمل با واگن‌های مخزن‌دار ریلی یا کانتینرهای استاندارد دریایی.",
      en: "Strict IMO/ADR dangerous goods protocol adherence, specialized rail tanker dispatch, and standard maritime containers."
    }
  },
  {
    id: "handicrafts-specialty",
    name: {
      fa: "صنایع دستی فاخر، فرش و کالاهای تخصصی فرهنگی",
      en: "Handicrafts & Specialty Cultural Goods",
    },
    hsCodePrefix: "HS 57 (فرش دستباف و گلیم) / HS 6913 / HS 7419 (مس و خاتم)",
    shortSummary: {
      fa: "اصالت، هنر و ارزش افزوده بالای دست‌ساخته‌های ایرانی شامل فرش دستباف، گلیم، فیروزه‌کوبی، قلم‌زنی و سفال اصیل برای بازارهای لوکس.",
      en: "Heritage, artistry, and exceptional cultural value: Persian handwoven carpets, kilims, turquoise inlay, repoussé, and luxury interior crafts.",
    },
    exportPotential: "Strategic",
    primaryTargetMarkets: {
      fa: ["کشورهای حوزه خلیج فارس (دبی، دوحه)", "بازارهای اروپایی منتخب (آلمان، سوئیس، ایتالیا)", "ژاپن و شرق آسیا"],
      en: ["GCC Luxury Market (Dubai, Doha)", "Selected European Galleries & Interiors (Germany, Switzerland, Italy)", "Japan & East Asia"]
    },
    sampleProducts: {
      fa: ["فرش دستباف تبریز، کاشان و نائین", "گلیم و جاجیم‌های عشایری مدرن", "ظروف مسین قلم‌زنی و فیروزه‌کوبی دکوراتیو", "میناکاری و خاتم‌کاری نفیس"],
      en: ["Masterpiece Hand-Knotted Silk & Wool Rugs", "Contemporary Tribal Kilims & Flatweaves", "Artisanal Turquoise-Inlaid Copper Objects", "Fine Enamel (Minakari) & Khatam Luxury Gifts"]
    },
    buyerTypes: {
      fa: ["گالری‌ها و نمایشگاه‌های تخصصی دکوراسیون داخلی لوکس", "خریداران هدایای تبلیغاتی سازمانی فاخر (Corporate Gifts)", "کلکسیونرها و زنجیره‌های خرده‌فروشی دکوراسیون منزل"],
      en: ["High-end interior design galleries and luxury architectural firms", "Corporate gifting programs and bespoke curators", "Art collectors and specialized home decor boutiques"]
    },
    competitorCountries: {
      fa: ["ترکیه (فرش و گلیم ماشینی و دستباف)", "هند و پاکستان (فرش کپی)", "مراکش (فرش‌های بومی)"],
      en: ["Turkey (Modern Machine & Handwoven)", "India & Pakistan (Commercial Copies)", "Morocco (Berber Rugs)"]
    },
    regulatoryConsiderations: {
      fa: "شناسنامه اصالت اثر و شناسنامه هنری دستباف، معافیت‌های مالیاتی آثار هنری و رعایت قوانین گمرکی صادرات میراث فرهنگی.",
      en: "Authenticity certificates, cultural heritage export verification, craft origin credentials, and destination duty exemptions for recognized folk art."
    },
    packagingConsiderations: {
      fa: "بسته‌بندی‌های لوکس با پوشش‌های ضد رطوبت، جعبه‌های چوبی مستحکم با عایق ضد ضربه برای اشیاء فلزی و سرامیکی.",
      en: "Museum-grade water-resistant fabric wraps, custom velvet-lined wooden gift boxes, and padded impact-absorbing flight crates."
    },
    logisticsConsiderations: {
      fa: "حمل هوایی اختصاصی همراه با پوشش بیمه کامل ارزش واقعی اثر تجاری و هنری.",
      en: "Courier air freight with declared high-value insurance coverage and expedited customs clearance protocols."
    }
  },
  {
    id: "consumer-lifestyle",
    name: {
      fa: "محصولات مصرفی، بهداشتی و سبک زندگی",
      en: "Consumer & Lifestyle Products",
    },
    hsCodePrefix: "HS 34 (شوینده‌ها و پاک‌کننده‌ها) / HS 94 (مبلمان و مصنوعات چوبی/فلزی)",
    shortSummary: {
      fa: "تولیدات باکیفیت کارخانجات پیشرو در حوزه شوینده‌های خانگی، ظروف، محصولات بهداشتی، و لوازم خانگی برای کشورهای پیرامونی.",
      en: "Competitive regional production in FMCG: household detergents, personal care products, hygiene paper, and homeware.",
    },
    exportPotential: "High",
    primaryTargetMarkets: {
      fa: ["عراق و اقلیم کردستان", "افغانستان و پاکستان", "کشورهای آسیای میانه (ازبکستان، ترکمنستان، تاجیکستان)"],
      en: ["Iraq & Kurdistan", "Afghanistan & Central Asia", "CIS Regional Retail Distributors"]
    },
    sampleProducts: {
      fa: ["پودر و مایع لباسشویی و شوینده‌های صنعتی", "محصولات سلولزی و دستمال کاغذی صادراتی", "ظروف ملامین، کریستال و بلورجات خانگی", "بسته‌بندی‌های پلاستیکی خانگی و نگهداری غذا"],
      en: ["Heavy-Duty Laundry Detergents & Surface Cleaners", "Cellulose Paper Products & Wet Wipes", "Household Glassware & Tableware", "Food-Grade Plastic Storage & Containers"]
    },
    buyerTypes: {
      fa: ["توزیع‌کنندگان عمده سوپرمارکتی و فروشگاه‌های زنجیره‌ای منطقه‌ای", "بنکداران بازارهای عمده‌فروشی مرزی", "واردکنندگان کالاهای مصرفی تندگردش (FMCG)"],
      en: ["FMCG distribution conglomerates and retail chains", "Regional wholesale cash-and-carry merchants", "Import-export consumer syndicates"]
    },
    competitorCountries: {
      fa: ["ترکیه (برندهای مطرح شوینده و بهداشتی)", "چین", "تولیدکنندگان محلی مصر و اردن"],
      en: ["Turkey (Leading regional brands)", "China", "Regional domestic producers in Jordan and Egypt"]
    },
    regulatoryConsiderations: {
      fa: "گواهی بهداشت و آزمون‌های زیست‌تخریب‌پذیری برای شوینده‌ها، تاریخ انقضای شفاف و لیبل‌گذاری عربی یا روسی حسب کشور مقصد.",
      en: "Health inspection certificates, biodegradability test results, bilingual expiry labeling in Arabic/Russian."
    },
    packagingConsiderations: {
      fa: "کارتن‌های مستحکم با لایه‌گذاری محافظ برای مایعات، شرینک حرارتی بسته‌ها و چاپ باکیفیت و جذاب برای قفسه‌های خرده‌فروشی.",
      en: "Reinforced corrugated cartons with partition inserts for bottled liquids, and shrink-wrapped display trays."
    },
    logisticsConsiderations: {
      fa: "حمل زمینی جاده‌ای ترانزیتی از مرزهای زمینی با هزینه بهینه و سرعت رسیدن کالا به قفسه‌های مصرف‌کننده.",
      en: "Direct cross-border road trucking utilizing standardized pallet configurations for minimal handling transit."
    }
  },
  {
    id: "other-export",
    name: {
      fa: "سایر محصولات و فرصت‌های صادرات‌محور",
      en: "Other Export-Oriented Products & Custom Sourcing",
    },
    hsCodePrefix: "سفارشی / بر اساس کد HS محصول",
    shortSummary: {
      fa: "نیلای ترید بر اساس تقاضای بازار فعالیت می‌کند؛ چنانچه محصول شما خارج از دسته‌های فوق است، ارزیابی اولیه ظرفیت صادراتی انجام خواهد شد.",
      en: "Nilay Trade is market-oriented: if your product is not listed above, our team executes preliminary export readiness and demand evaluation.",
    },
    exportPotential: "High",
    primaryTargetMarkets: {
      fa: ["تحلیل سفارشی متناسب با محصول پیشنهادی"],
      en: ["Tailored market research per proposed commodity"]
    },
    sampleProducts: {
      fa: ["محصولات دانش‌بنیان و فناوری‌های نوین", "تجهیزات پزشکی یکبار مصرف", "بسته‌بندی‌های تخصصی و فیلم‌های پلیمری", "کالاهای تخصصی با مزیت قیمتی خاص"],
      en: ["Knowledge-based technical components", "Disposable medical disposables", "Specialty flexible packaging films", "Bespoke goods with unique cost advantages"]
    },
    buyerTypes: {
      fa: ["خریداران تخصصی صنایع مربوطه در بازارهای هدف"],
      en: ["Specialized industry procurement managers globally"]
    },
    competitorCountries: {
      fa: ["تعیین در گزارش پژوهش بازار اختصاصی"],
      en: ["Identified within dedicated research dossiers"]
    },
    regulatoryConsiderations: {
      fa: "بررسی جامع استانداردها، الزامات فنی و مجوزهای ورود بر اساس کد گمرکی دقیق کالا.",
      en: "Full compliance audit based on precise 8-digit HS Code classification."
    },
    packagingConsiderations: {
      fa: "مشاوره اختصاصی مهندسی بسته‌بندی صادراتی متناسب با نوع کالا و شیوه حمل.",
      en: "Custom packaging engineering consultation matched to mode of transit."
    },
    logisticsConsiderations: {
      fa: "طراحی بهینه‌ترین مسیر ترانزیتی زمینی، دریایی، ریلی یا هوایی با لحاظ هزینه‌ها.",
      en: "Optimal multimodal corridor design balancing transit time and landed logistics cost."
    }
  }
];
