import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/servicesData';
import { sectorsData } from '../data/sectorsData';
import { marketReportsData } from '../data/marketIntelligenceData';
import {
  ArrowRight,
  ArrowLeft,
  Building2,
  Globe2,
  FileSearch,
  CheckCircle2,
  Compass,
  ShieldCheck,
  TrendingUp,
  Ship,
  Plane,
  Truck,
  FileText,
  BarChart3,
  Clock,
  Layers,
  ChevronRight,
  Send,
  SlidersHorizontal,
  ExternalLink
} from 'lucide-react';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
  onRequestConsultation: (topic?: string) => void;
  onOpenExportCheck: () => void;
}

// Data for the Interactive Trade Corridor / Feasibility Simulator
const tradeSimulatorData = {
  sectors: [
    {
      id: 'dry-fruits',
      titleFa: 'زعفران، پسته و خشکبار',
      titleEn: 'Saffron, Pistachios & Dried Fruits',
      hsCode: 'HS 0802 / 0910',
      specsFa: 'بسته‌بندی وکیوم غذایی، رطوبت زیر ۶٪، گواهی آنالیز آفلاتوکسین',
      specsEn: 'Vacuum food packaging, moisture < 6%, Aflatoxin COA certified',
    },
    {
      id: 'building-materials',
      titleFa: 'سنگ‌های ساختمانی، کاشی و سرامیک',
      titleEn: 'Natural Stone, Tiles & Ceramics',
      hsCode: 'HS 6802 / 6907',
      specsFa: 'پالت‌بندی چوبی ضدعفونی‌شده ISPM-15، کالیبراسیون دقیق ابعادی',
      specsEn: 'ISPM-15 fumigated wooden pallets, strict dimensional calibration',
    },
    {
      id: 'herbs-botanicals',
      titleFa: 'گیاهان دارویی و اسانس‌های طبیعی',
      titleEn: 'Medicinal Herbs & Natural Extracts',
      hsCode: 'HS 1211 / 3301',
      specsFa: 'گواهی بهداشت نباتی، آنالیز بقایای سموم، استانداردهای ارگانیک',
      specsEn: 'Phytosanitary certificate, pesticide residue analysis, organic specs',
    },
    {
      id: 'petrochemical-polymers',
      titleFa: 'مواد پلیمری و مشتقات شیمیایی',
      titleEn: 'Polymers, Compounds & Industrial Chemicals',
      hsCode: 'HS 3901 / 3902',
      specsFa: 'برگه داده ایمنی مواد (MSDS)، شاخص جریان مذاب (MFI)، کیسه‌های ۲۵ کیلویی FFS',
      specsEn: 'MSDS technical sheet, certified MFI rating, 25kg FFS palletized packaging',
    },
  ],
  destinations: [
    {
      id: 'gcc',
      nameFa: 'حوزه خلیج فارس (امارات و عمان)',
      nameEn: 'GCC Hub (UAE & Oman)',
      transitModeFa: 'دریایی کانتینری / لندینگ‌کرافت',
      transitModeEn: 'Sea Freight / Ro-Ro Vessels',
      transitDaysFa: '۳ الی ۶ روز کاری',
      transitDaysEn: '3 to 6 Business Days',
      keyRegulatoryFa: 'استاندارد شهرداری دبی، سامانه زاد (ZAD)، گواهی مبدا اتاق بازرگانی',
      keyRegulatoryEn: 'Dubai Municipality, ZAD Food Compliance, Chamber Certificate of Origin',
      tariffAdvantageFa: 'تعرفه عمومی واردات ۵٪ (پتانسیل بالای بازصادرات از جبل‌علی)',
      tariffAdvantageEn: 'Standard 5% duty (optimal Jebel Ali re-export hub)',
    },
    {
      id: 'cis',
      nameFa: 'اوراسیا و روسیه (مسکو و آستاراخان)',
      nameEn: 'Eurasia & Russia (Moscow & Astrakhan)',
      transitModeFa: 'ترکیبی جاده‌ای و دریایی خزر',
      transitModeEn: 'Caspian Multimodal Sea & Rail/Road',
      transitDaysFa: '۷ الی ۱۲ روز کاری',
      transitDaysEn: '7 to 12 Business Days',
      keyRegulatoryFa: 'استاندارد اتحادیه گمرکی اوراسیا (EAC Mark)، گواهی قرنطینه نباتی',
      keyRegulatoryEn: 'EAC Customs Union Conformity, Federal Phytosanitary Inspection',
      tariffAdvantageFa: 'توافق‌نامه تجارت ترجیحی ایران و اوراسیا (تخفیف‌های تعرفه‌ای تا صفر درصد)',
      tariffAdvantageEn: 'Iran-EAEU preferential trade pact with deep tariff concessions',
    },
    {
      id: 'turkey',
      nameFa: 'ترکیه و مسیر مدیترانه',
      nameEn: 'Turkey & Levant Gateway',
      transitModeFa: 'کامیون تیرپارک دربستی (CMR جاده‌ای)',
      transitModeEn: 'TIR Road Transport (Border Post Gurbulak)',
      transitDaysFa: '۴ الی ۸ روز کاری',
      transitDaysEn: '4 to 8 Business Days',
      keyRegulatoryFa: 'اظهارنامه گمرکی ترانزیت، اسناد اینکوترمز CPT/DAP، ممیزی آزمایشگاهی مرزی',
      keyRegulatoryEn: 'Transit customs declaration, CPT/DAP commercial docs, border lab test',
      tariffAdvantageFa: 'نزدیکی لجستیکی بالا، تقاضای پیوسته مواد اولیه صنعتی و کشاورزی',
      tariffAdvantageEn: 'Immediate overland proximity, high recurring demand for raw feedstocks',
    },
  ]
};

export const HomePage: React.FC<HomePageProps> = ({
  setActiveTab,
  onRequestConsultation,
  onOpenExportCheck,
}) => {
  const { language, dir, t } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  // State for interactive Trade Simulator
  const [selectedSector, setSelectedSector] = useState(tradeSimulatorData.sectors[0].id);
  const [selectedMarket, setSelectedMarket] = useState(tradeSimulatorData.destinations[0].id);
  
  // State for interactive methodology stage
  const [activeStepTab, setActiveStepTab] = useState(0);

  const activeSectorData = tradeSimulatorData.sectors.find(s => s.id === selectedSector) || tradeSimulatorData.sectors[0];
  const activeMarketData = tradeSimulatorData.destinations.find(m => m.id === selectedMarket) || tradeSimulatorData.destinations[0];

  return (
    <div className="space-y-20 md:space-y-28 pb-16">
      
      {/* 1. EXECUTIVE HERO SECTION (2-Column Balanced Design with Live Trade Simulator) */}
      <section className="relative bg-[#071D35] text-white overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800">
        
        {/* Visual Background with Multi-Layer Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_global_trade_1791182659044.jpg"
            alt="International maritime container terminal at twilight representing global trade"
            className="w-full h-full object-cover object-center opacity-25 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071D35] via-[#071D35]/85 to-[#071D35]/95" />
          <div className="absolute inset-0 bg-radial at-top-left from-[#0F8B8D]/20 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Proposition, Headline & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Quiet unboxed kicker */}
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0F8B8D] tracking-wide">
                <span>{language === 'fa' ? 'توسعه تجارت بین‌الملل و بازاریابی B2B' : 'International Trade & B2B Market Development'}</span>
                <span aria-hidden="true" className="text-slate-500">·</span>
                <span className="text-[#C9A227]">{language === 'fa' ? 'نیلای ترید' : 'Nilay Trade'}</span>
              </div>

              {/* Main Value Proposition Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2] text-balance">
                {t.hero.headline}
              </h1>

              {/* Descriptive Subheadline */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal text-balance max-w-2xl">
                {language === 'fa'
                  ? 'طراحی و اجرای ساختاریافته صادرات، اتصال مستقیم به خریداران راستی‌آزمایی‌شده خارجی و سورسینگ معتبر کالا بر پایه تحقیق بازار، تحلیل دقیق داده‌های گمرکی و استانداردهای اینکوترمز ۲۰۲۰.'
                  : 'Structured export pathways, direct connectivity to verified international buyers, and compliant sourcing based on empirical customs data, target-market research, and Incoterms 2020 frameworks.'}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onRequestConsultation()}
                  className="px-6 py-3.5 bg-[#0F8B8D] hover:bg-[#14a3a6] text-white text-xs sm:text-sm font-semibold rounded-md shadow-lg shadow-[#0F8B8D]/30 transition-all hover:scale-[1.02] cursor-pointer flex items-center gap-2 whitespace-nowrap"
                >
                  <span>{t.hero.primaryCta}</span>
                  <ArrowIcon className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenExportCheck}
                  className="px-5 py-3.5 bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-[#C9A227] text-xs sm:text-sm font-medium rounded-md backdrop-blur-sm transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap"
                >
                  <BarChart3 className="w-4 h-4 text-[#C9A227]" />
                  <span>{language === 'fa' ? 'سنجش آنلاین آمادگی صادرات (۱ دقیقه)' : 'Export Readiness Assessment (1 Min)'}</span>
                </button>
              </div>

              {/* Trust Credentials Strip */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0F8B8D] shrink-0" />
                  <span>{language === 'fa' ? 'ممیزی کارخانجات' : 'Audited Factories'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0F8B8D] shrink-0" />
                  <span>{language === 'fa' ? 'اینکوترمز ۲۰۲۰' : 'Incoterms 2020'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0" />
                  <span>{language === 'fa' ? 'تست و آنالیز TDS' : 'Technical TDS specs'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0" />
                  <span>{language === 'fa' ? 'خریداران واقعی' : 'Verified Buyers'}</span>
                </div>
              </div>

            </div>

            {/* Right Column: Live Interactive Trade Feasibility Simulator */}
            <div className="lg:col-span-5">
              <div className="bg-[#0b2440]/90 backdrop-blur-md border border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-2xl relative overflow-hidden">
                
                {/* Visual Accent glow */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#0F8B8D]/20 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-5 relative z-10">
                  
                  {/* Simulator Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-700/80">
                    <div className="flex items-center gap-2">
                      <SlidersHorizontal className="w-4 h-4 text-[#C9A227]" />
                      <h2 className="text-sm font-bold text-white tracking-wide">
                        {language === 'fa' ? 'میز امکان‌سنجی سریع بازارهای صادراتی' : 'Quick Trade Feasibility Desk'}
                      </h2>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">
                      v2026.1
                    </span>
                  </div>

                  {/* Selector 1: Sector */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-300 font-medium block">
                      {language === 'fa' ? '۱. حوزه کالایی محصول شما:' : '1. Product Category:'}
                    </label>
                    <select
                      value={selectedSector}
                      onChange={(e) => setSelectedSector(e.target.value)}
                      className="w-full text-xs bg-[#071D35] border border-slate-600 rounded-lg p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-[#0F8B8D]"
                    >
                      {tradeSimulatorData.sectors.map((s) => (
                        <option key={s.id} value={s.id}>
                          {language === 'fa' ? s.titleFa : s.titleEn}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Selector 2: Target Destination */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-300 font-medium block">
                      {language === 'fa' ? '۲. مقصد تجاری مورد نظر:' : '2. Target Commercial Jurisdiction:'}
                    </label>
                    <select
                      value={selectedMarket}
                      onChange={(e) => setSelectedMarket(e.target.value)}
                      className="w-full text-xs bg-[#071D35] border border-slate-600 rounded-lg p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-[#0F8B8D]"
                    >
                      {tradeSimulatorData.destinations.map((m) => (
                        <option key={m.id} value={m.id}>
                          {language === 'fa' ? m.nameFa : m.nameEn}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Dynamic Simulation Output Box */}
                  <div className="bg-[#071D35]/80 rounded-xl p-4 border border-slate-700/80 space-y-3 text-xs">
                    
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                      <span className="text-slate-400">
                        {language === 'fa' ? 'کد تعرفه مرجع:' : 'HS Code Reference:'}
                      </span>
                      <span className="font-mono font-bold text-[#C9A227]">
                        {activeSectorData.hsCode}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-slate-400 block text-[11px]">
                        {language === 'fa' ? 'روش حمل و زمان ترانزیت:' : 'Transit Logistics Mode:'}
                      </span>
                      <div className="flex items-center gap-2 text-slate-200 font-medium">
                        <Ship className="w-3.5 h-3.5 text-[#0F8B8D] shrink-0" />
                        <span>{language === 'fa' ? activeMarketData.transitModeFa : activeMarketData.transitModeEn}</span>
                        <span className="text-slate-500">·</span>
                        <span className="text-emerald-400 text-[11px]">
                          {language === 'fa' ? activeMarketData.transitDaysFa : activeMarketData.transitDaysEn}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-slate-400 block text-[11px]">
                        {language === 'fa' ? 'الزامات کلیدی اسنادی و بهداشتی:' : 'Key Regulatory & Compliance:'}
                      </span>
                      <p className="text-slate-300 text-[11px] leading-relaxed">
                        {language === 'fa' ? activeMarketData.keyRegulatoryFa : activeMarketData.keyRegulatoryEn}
                      </p>
                    </div>

                    <div className="space-y-1 pt-1 border-t border-slate-800">
                      <span className="text-[#C9A227] font-medium block text-[11px]">
                        {language === 'fa' ? 'مزیت تعرفه‌ای و رقابتی:' : 'Tariff & Trade Advantage:'}
                      </span>
                      <p className="text-slate-300 text-[11px] leading-relaxed">
                        {language === 'fa' ? activeMarketData.tariffAdvantageFa : activeMarketData.tariffAdvantageEn}
                      </p>
                    </div>

                  </div>

                  {/* Call to action based on simulator */}
                  <button
                    onClick={() => onRequestConsultation(
                      `${language === 'fa' ? activeSectorData.titleFa : activeSectorData.titleEn} -> ${language === 'fa' ? activeMarketData.nameFa : activeMarketData.nameEn}`
                    )}
                    className="w-full py-2.5 px-4 bg-[#0F8B8D] hover:bg-[#14a3a6] text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>{language === 'fa' ? 'درخواست ارزیابی اختصاصی این بازار برای محصول شما' : 'Request Tailored Analysis for this Sector'}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </button>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THREE PRIMARY USER ACTION PATHWAYS (Producers, Buyers, Research) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 lg:-mt-14 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pathway 1: For Iranian Producers */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-lg hover:shadow-xl hover:border-[#0F8B8D]/40 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#071D35]/5 text-[#071D35] flex items-center justify-center group-hover:bg-[#071D35] group-hover:text-white transition-colors">
                <Building2 className="w-6 h-6 text-[#0F8B8D] group-hover:text-[#C9A227] transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#071D35] mb-1">
                  {t.hero.path1Title}
                </h3>
                <div className="text-[11px] text-[#0F8B8D] font-semibold">
                  {language === 'fa' ? 'توسعه صادرات و توانمندسازی زنجیره ارزش' : 'Export Readiness & Direct Matchmaking'}
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.hero.path1Desc}
              </p>
              
              <ul className="text-xs text-slate-500 space-y-1.5 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0F8B8D] shrink-0" />
                  <span>{language === 'fa' ? 'طراحی شناسنامه فنی استاندارد (TDS)' : 'Standard Technical Data Sheet (TDS)'}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0F8B8D] shrink-0" />
                  <span>{language === 'fa' ? 'استخراج خریداران راستی‌آزمایی‌شده' : 'Direct verified buyer extraction'}</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <button
                onClick={() => setActiveTab('producers')}
                className="w-full py-2.5 px-4 bg-[#071D35] hover:bg-[#0d2a4c] text-white text-xs font-semibold rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>{t.hero.path1Btn}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Pathway 2: For International Buyers */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-lg hover:shadow-xl hover:border-[#0F8B8D]/40 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0F8B8D]/10 text-[#0F8B8D] flex items-center justify-center group-hover:bg-[#0F8B8D] group-hover:text-white transition-colors">
                <Globe2 className="w-6 h-6 text-[#0F8B8D] group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#071D35] mb-1">
                  {t.hero.path2Title}
                </h3>
                <div className="text-[11px] text-[#0F8B8D] font-semibold">
                  {language === 'fa' ? 'سورسینگ دست اول و ممیزی تامین‌کنندگان' : 'Source Pricing & Supplier Verification'}
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.hero.path2Desc}
              </p>

              <ul className="text-xs text-slate-500 space-y-1.5 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0F8B8D] shrink-0" />
                  <span>{language === 'fa' ? 'ممیزی کارخانه و خطوط تولید' : 'Factory audit & legal registration'}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0F8B8D] shrink-0" />
                  <span>{language === 'fa' ? 'هماهنگی نمونه و تست آزمایشگاهی' : 'Sample testing & COA verification'}</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <button
                onClick={() => setActiveTab('buyers')}
                className="w-full py-2.5 px-4 bg-[#0F8B8D] hover:bg-[#14a3a6] text-white text-xs font-semibold rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>{t.hero.path2Btn}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Pathway 3: Market Research & Analysis */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-lg hover:shadow-xl hover:border-[#C9A227]/40 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C9A227]/10 text-[#C9A227] flex items-center justify-center group-hover:bg-[#C9A227] group-hover:text-[#071D35] transition-colors">
                <FileSearch className="w-6 h-6 text-[#C9A227] group-hover:text-[#071D35] transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#071D35] mb-1">
                  {t.hero.path3Title}
                </h3>
                <div className="text-[11px] text-[#C9A227] font-semibold">
                  {language === 'fa' ? 'آمار واقعی گمرکی و تحلیل رقبا' : 'Customs Auditing & Competitive Dossiers'}
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.hero.path3Desc}
              </p>

              <ul className="text-xs text-slate-500 space-y-1.5 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />
                  <span>{language === 'fa' ? 'تحلیل حجم واردات و تعرفه‌های مقصد' : 'Import volumes & tariff corridors'}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />
                  <span>{language === 'fa' ? 'شناسایی کانال‌های توزیع بومی' : 'Incumbent distributor mapping'}</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <button
                onClick={() => setActiveTab('intelligence')}
                className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>{t.hero.path3Btn}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CORE SERVICE PILLARS (Numbered Editorial Layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="text-xs font-semibold text-[#0F8B8D] uppercase tracking-wider">
            {language === 'fa' ? 'ستون‌های خدمات تخصصی' : 'Core Capabilities'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#071D35]">
            {t.whatWeDo.title}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            {t.whatWeDo.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.whatWeDo.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-xl p-6 border border-slate-200/90 shadow-sm hover:border-[#0F8B8D]/50 hover:shadow-md transition-all flex flex-col justify-between ${
                idx === 0 ? 'lg:col-span-2 bg-gradient-to-br from-white to-slate-50' : ''
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#0F8B8D]/40 font-mono">
                    {pillar.num}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                    <Compass className="w-4 h-4 text-[#0F8B8D]" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-[#071D35] leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6">
                <button
                  onClick={() => setActiveTab('services')}
                  className="text-xs font-semibold text-[#0F8B8D] hover:text-[#0b686a] flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{language === 'fa' ? 'شرح و جزئیات خروجی‌ها' : 'View Deliverables & Scope'}</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {/* Dedicated Solution Package Card in 6th slot */}
          <div className="bg-[#071D35] text-white rounded-xl p-6 flex flex-col justify-between border border-slate-800 shadow-md">
            <div className="space-y-3">
              <div className="text-[11px] font-semibold text-[#C9A227] uppercase tracking-wider">
                {language === 'fa' ? 'شروع فرآیند اقدام' : 'Tailored Package'}
              </div>
              <h3 className="text-base font-bold text-white">
                {language === 'fa' ? 'نیاز به راهکاری ترکیبی دارید؟' : 'Need a Customized Trade Package?'}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {language === 'fa'
                  ? 'بر اساس سطح آمادگی محصول، ظرفیت تولید و کشور مقصد، یک بسته اجرایی شامل ارزیابی بازار، آماده‌سازی TDS و اتصال به خریدار تدوین می‌کنیم.'
                  : 'We formulate customized roadmaps combining target country research, TDS standardization, and direct buyer match negotiation.'}
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={() => onRequestConsultation()}
                className="w-full py-2.5 px-4 bg-[#0F8B8D] hover:bg-[#14a3a6] text-white text-xs font-semibold rounded-md transition-colors cursor-pointer shadow-sm"
              >
                {t.common.requestProposal}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ACTIVE COMMERCIAL TRADE CORRIDORS (Interactive Corridor Explorer) */}
      <section className="bg-gradient-to-b from-[#071D35] to-[#0a233e] text-white py-16 md:py-20 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <div className="text-xs font-semibold text-[#0F8B8D] uppercase tracking-wider">
              {language === 'fa' ? 'کریدورهای تجاری تحت پوشش' : 'Commercial Trade Corridors'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {language === 'fa' ? 'مقاصد کلیدی توسعه صادرات و تجارت B2B' : 'Core Export Destinations & Regional Gateways'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {language === 'fa'
                ? 'نیلای ترید تمرکز خود را بر مقاصدی قرار داده که از نظر زیرساخت‌های حمل، کشش تقاضا و امکان تبادلات مالی دارای مزیت عملیاتی هستند.'
                : 'Focusing on commercial jurisdictions with robust logistics throughput, steady product demand, and clear settlement mechanisms.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Corridor 1: UAE & Oman */}
            <div className="bg-[#0b2745] p-5 rounded-xl border border-slate-700/80 space-y-4 hover:border-[#0F8B8D] transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#C9A227]">
                  {language === 'fa' ? 'کریدور خلیج فارس' : 'GCC Hub'}
                </span>
                <Ship className="w-4 h-4 text-[#0F8B8D]" />
              </div>
              <h3 className="text-base font-bold text-white">
                {language === 'fa' ? 'امارات و عمان' : 'UAE & Oman'}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {language === 'fa'
                  ? 'هاب بازصادرات، دسترسی به بازارهای آفریقا و هند، مراکز عمده‌فروشی دبی و بندر صحار عمان.'
                  : 'Re-export gateway, regional wholesale networks, Dubai Municipality compliance, and port connectivity.'}
              </p>
              <div className="text-[11px] text-slate-400 pt-3 border-t border-slate-700/60 space-y-1">
                <div><span className="text-slate-300 font-medium">{language === 'fa' ? 'کالاهای دارای اولویت:' : 'Priority:'}</span> {language === 'fa' ? 'خشکبار، زعفران، سنگ، مصالح' : 'Dry Fruits, Saffron, Stone'}</div>
                <div><span className="text-slate-300 font-medium">{language === 'fa' ? 'مدت ترانزیت:' : 'Transit:'}</span> {language === 'fa' ? '۳ الی ۶ روز' : '3-6 Days'}</div>
              </div>
            </div>

            {/* Corridor 2: Eurasia & Russia */}
            <div className="bg-[#0b2745] p-5 rounded-xl border border-slate-700/80 space-y-4 hover:border-[#0F8B8D] transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#C9A227]">
                  {language === 'fa' ? 'کریدور اوراسیا' : 'Eurasia Corridor'}
                </span>
                <Truck className="w-4 h-4 text-[#0F8B8D]" />
              </div>
              <h3 className="text-base font-bold text-white">
                {language === 'fa' ? 'روسیه و بلاروس' : 'Russia & Belarus'}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {language === 'fa'
                  ? 'تقاضای مداوم محصولات غذایی و سبزیجات، توافق تجارت ترجیحی EAEU و شبکه لجستیک خزر.'
                  : 'Sustained agro-food and industrial demand under EAEU free trade terms with Caspian Ro-Ro routes.'}
              </p>
              <div className="text-[11px] text-slate-400 pt-3 border-t border-slate-700/60 space-y-1">
                <div><span className="text-slate-300 font-medium">{language === 'fa' ? 'کالاهای دارای اولویت:' : 'Priority:'}</span> {language === 'fa' ? 'صیفی‌جات، پسته، گیاهان دارویی' : 'Agro-Produce, Pistachios'}</div>
                <div><span className="text-slate-300 font-medium">{language === 'fa' ? 'مدت ترانزیت:' : 'Transit:'}</span> {language === 'fa' ? '۷ الی ۱۲ روز' : '7-12 Days'}</div>
              </div>
            </div>

            {/* Corridor 3: Turkey & Mediterranean */}
            <div className="bg-[#0b2745] p-5 rounded-xl border border-slate-700/80 space-y-4 hover:border-[#0F8B8D] transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#C9A227]">
                  {language === 'fa' ? 'کریدور زمینی غرب' : 'West Overland'}
                </span>
                <Truck className="w-4 h-4 text-[#0F8B8D]" />
              </div>
              <h3 className="text-base font-bold text-white">
                {language === 'fa' ? 'ترکیه و مسیر قفقاز' : 'Turkey & Caucasus'}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {language === 'fa'
                  ? 'ترانزیت سریع جاده‌ای، صنایع پایین‌دستی پلیمر و فولاد و تامین مواد اولیه کارخانجات تولیدی.'
                  : 'Fast overland trucking via TIR carnet, polymer/chemical feedstocks, and industrial manufacturing supply.'}
              </p>
              <div className="text-[11px] text-slate-400 pt-3 border-t border-slate-700/60 space-y-1">
                <div><span className="text-slate-300 font-medium">{language === 'fa' ? 'کالاهای دارای اولویت:' : 'Priority:'}</span> {language === 'fa' ? 'پلیمر، پتروشیمی، مواد اولیه' : 'Polymers, Chemicals'}</div>
                <div><span className="text-slate-300 font-medium">{language === 'fa' ? 'مدت ترانزیت:' : 'Transit:'}</span> {language === 'fa' ? '۴ الی ۸ روز' : '4-8 Days'}</div>
              </div>
            </div>

            {/* Corridor 4: East Asia & China */}
            <div className="bg-[#0b2745] p-5 rounded-xl border border-slate-700/80 space-y-4 hover:border-[#0F8B8D] transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#C9A227]">
                  {language === 'fa' ? 'کریدور شرق دور' : 'Far East Channel'}
                </span>
                <Ship className="w-4 h-4 text-[#0F8B8D]" />
              </div>
              <h3 className="text-base font-bold text-white">
                {language === 'fa' ? 'چین و هند' : 'China & India'}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {language === 'fa'
                  ? 'حجم معاملات عمده کالایی، صنایع معدنی، قیر، زعفران و مواد خام اولیه در بنادر اصلی شانگهای و ناوا شیوا.'
                  : 'Bulk commodity and high-value sourcing: saffron, bitumen, industrial minerals, and polymer grades.'}
              </p>
              <div className="text-[11px] text-slate-400 pt-3 border-t border-slate-700/60 space-y-1">
                <div><span className="text-slate-300 font-medium">{language === 'fa' ? 'کالاهای دارای اولویت:' : 'Priority:'}</span> {language === 'fa' ? 'مواد معدنی، قیر، زعفران فله' : 'Minerals, Bitumen, Saffron'}</div>
                <div><span className="text-slate-300 font-medium">{language === 'fa' ? 'مدت ترانزیت:' : 'Transit:'}</span> {language === 'fa' ? '۱۸ الی ۲۵ روز' : '18-25 Days'}</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. STRUCTURED METHODOLOGY (Interactive 5-Stage Step Flow) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="text-xs font-semibold text-[#0F8B8D] uppercase tracking-wider">
            {language === 'fa' ? 'متدولوژی مرحله‌به‌مرحله' : 'Structured Roadmap'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#071D35]">
            {language === 'fa' ? 'مسیر ساختاریافته نیلای ترید؛ از ارزیابی تا عقد قرارداد' : 'Our 5-Stage Trade Execution Methodology'}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            {language === 'fa'
              ? 'صادرات موفق یک فرآیند سیستماتیک است. نیلای ترید گام‌های زیر را برای اطمینان از امنیت و پایداری بازرگانی پیاده‌سازی می‌کند:'
              : 'Sustainable foreign trade is an engineered process. We navigate these five operational milestones:'}
          </p>
        </div>

        {/* 5-Step Interactive Tabs */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md p-6 sm:p-8 space-y-8">
          
          {/* Step Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 border-b border-slate-200 pb-4">
            {t.howWeWork.steps.map((st, i) => (
              <button
                key={i}
                onClick={() => setActiveStepTab(i)}
                className={`py-2.5 px-3 rounded-lg text-xs font-semibold text-center transition-all cursor-pointer ${
                  activeStepTab === i
                    ? 'bg-[#071D35] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <div className="text-[10px] text-slate-400 font-mono mb-0.5">{st.number}</div>
                <div>{st.name}</div>
              </button>
            ))}
          </div>

          {/* Active Step Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0F8B8D]">
                <Clock className="w-4 h-4 text-[#0F8B8D]" />
                <span>{language === 'fa' ? `مرحله ${t.howWeWork.steps[activeStepTab].number}: ${t.howWeWork.steps[activeStepTab].name}` : `Stage ${t.howWeWork.steps[activeStepTab].number}: ${t.howWeWork.steps[activeStepTab].name}`}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#071D35]">
                {t.howWeWork.steps[activeStepTab].name}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.howWeWork.steps[activeStepTab].desc}
              </p>
              
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => onRequestConsultation(`Consultation regarding Stage: ${t.howWeWork.steps[activeStepTab].name}`)}
                  className="px-4 py-2 bg-[#0F8B8D] hover:bg-[#14a3a6] text-white text-xs font-semibold rounded-md transition-colors cursor-pointer"
                >
                  {language === 'fa' ? 'درخواست مشاوره برای این مرحله' : 'Inquire About This Stage'}
                </button>
                <button
                  onClick={() => setActiveTab('howWeWork')}
                  className="text-xs font-semibold text-slate-600 hover:text-[#0F8B8D] cursor-pointer"
                >
                  {language === 'fa' ? 'مطالعه کل مراحل همکاری' : 'View Full Roadmap'}
                </button>
              </div>
            </div>

            <div className="md:col-span-4 bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3">
              <h4 className="text-xs font-bold text-[#071D35] uppercase tracking-wide">
                {language === 'fa' ? 'خروجی‌های ملموس این مرحله:' : 'Deliverables & Outcomes:'}
              </h4>
              <ul className="text-xs text-slate-600 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0F8B8D] shrink-0 mt-0.5" />
                  <span>{language === 'fa' ? 'چک‌لیست استانداردهای اجباری بازار مقصد' : 'Target jurisdiction compliance checklist'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0F8B8D] shrink-0 mt-0.5" />
                  <span>{language === 'fa' ? 'گزارش ارزیابی آمادگی و مستندات فنی' : 'Technical readiness evaluation summary'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0F8B8D] shrink-0 mt-0.5" />
                  <span>{language === 'fa' ? 'فرمولاسیون قیمت‌گذاری بین‌المللی' : 'Incoterms landed price formulation'}</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 6. SAMPLE MARKET RESEARCH DOSSIERS (Clean Unboxed Grid) */}
      <section className="bg-slate-50/70 py-16 md:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div className="space-y-2 max-w-xl">
              <div className="text-xs font-semibold text-[#0F8B8D] uppercase tracking-wider">
                {language === 'fa' ? 'پژوهش‌های میدانی و تحلیل داده‌های تجاری' : 'Empirical Market Dossiers'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#071D35]">
                {language === 'fa' ? 'گزارش‌های منتخب تحقیقات و تحلیل بازار' : 'Selected Market Research Dossiers'}
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed">
                {t.common.preliminaryNotice}
              </p>
            </div>

            <button
              onClick={() => setActiveTab('intelligence')}
              className="text-xs font-semibold text-[#0F8B8D] hover:text-[#0b686a] flex items-center gap-1.5 cursor-pointer self-start md:self-auto"
            >
              <span>{t.common.viewAllReports}</span>
              <ArrowIcon className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marketReportsData.slice(0, 3).map((rep) => (
              <div
                key={rep.id}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#0F8B8D]/50 hover:shadow-md transition-all"
              >
                <div className="space-y-3">
                  {/* Clean unboxed metadata discipline */}
                  <div className="flex items-center gap-2 text-[11px] text-slate-500">
                    <span className="font-semibold text-[#0F8B8D]">{language === 'fa' ? rep.countryFa : rep.country}</span>
                    <span aria-hidden="true">·</span>
                    <span>{rep.reportType}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums font-mono">{rep.pagesCount} {language === 'fa' ? 'صفحه' : 'pages'}</span>
                  </div>

                  <h3 className="text-sm font-bold text-[#071D35] leading-snug">
                    {language === 'fa' ? rep.title.fa : rep.title.en}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {language === 'fa' ? rep.summary.fa : rep.summary.en}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">
                    {language === 'fa' ? 'چارچوب استاندارد تحلیلی' : 'Standard Framework'}
                  </span>
                  <button
                    onClick={() => onRequestConsultation(`Market Research Dossier: ${rep.title.en}`)}
                    className="text-xs font-semibold text-[#071D35] hover:text-[#0F8B8D] transition-colors cursor-pointer"
                  >
                    {language === 'fa' ? 'درخواست گزارش کامل' : 'Request Full Dossier'}
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. WHY NILAY TRADE & EVIDENCE-BASED PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-semibold text-[#0F8B8D] uppercase tracking-wider">
              {language === 'fa' ? 'اصول تمایز ما' : 'Our Differentiators'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#071D35] leading-tight">
              {t.whyNilay.title}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t.whyNilay.subtitle}
            </p>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200/90 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#071D35]">
                <ShieldCheck className="w-4 h-4 text-[#0F8B8D]" />
                <span>{language === 'fa' ? 'شفافیت و تصمیم‌گیری مبتنی بر شواهد' : 'Evidence-Based Trade Philosophy'}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed italic">
                "{t.common.founderQuote}"
              </p>
              <div className="text-[11px] text-slate-500 font-medium pt-2 border-t border-slate-200">
                {language === 'fa' ? '— مصطفی خادمی، مدیرعامل و بنیان‌گذار نیلای ترید' : '— Mostafa Khademi, Founder & CEO'}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setActiveTab('about')}
                className="px-5 py-2.5 bg-[#071D35] hover:bg-[#0d2a4c] text-white text-xs font-semibold rounded-md transition-colors cursor-pointer"
              >
                {t.nav.about}
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.whyNilay.points.map((pt, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2 hover:border-[#0F8B8D]/40 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0F8B8D] shrink-0" />
                  <h4 className="text-xs font-bold text-[#071D35]">
                    {pt.title}
                  </h4>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. INTERACTIVE EXPORT READINESS CTA CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#071D35] via-[#092647] to-[#071D35] rounded-2xl p-8 sm:p-12 text-white border border-slate-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          
          <div className="space-y-3 max-w-xl text-center lg:text-start relative z-10">
            <div className="text-[11px] font-semibold text-[#C9A227] uppercase tracking-wider">
              {t.exportCheckTool.badge}
            </div>
            <h3 className="text-2xl font-bold text-white">
              {t.exportCheckTool.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.exportCheckTool.desc}
            </p>
          </div>

          <div className="shrink-0 relative z-10">
            <button
              onClick={onOpenExportCheck}
              className="px-7 py-3.5 bg-[#0F8B8D] hover:bg-[#14a3a6] text-white text-xs sm:text-sm font-semibold rounded-md shadow-lg transition-all hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              {t.exportCheckTool.ctaButton}
            </button>
          </div>
        </div>
      </section>

      {/* 9. FINAL COMMERCIAL ENGAGEMENT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 shadow-sm text-center max-w-3xl mx-auto space-y-6">
          <div className="text-xs font-semibold text-[#0F8B8D] uppercase tracking-wider">
            {language === 'fa' ? 'شروع همکاری تجاری' : 'Commercial Partnership'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#071D35]">
            {language === 'fa' ? 'آماده‌اید بازار بین‌المللی بعدی خود را کشف کنید؟' : "Let's Explore Your Next International Market"}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
            {language === 'fa'
              ? 'چه به عنوان تولیدکننده به دنبال صادرات باشید و چه به عنوان خریدار خارجی در جستجوی کالای معتبر، نیلای ترید آماده همراهی حرفه‌ای با شماست.'
              : 'Whether you are an Iranian manufacturer expanding abroad or an international buyer sourcing verified commodities, Nilay Trade facilitates your B2B trade execution.'}
          </p>

          <div className="pt-2 flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={() => onRequestConsultation()}
              className="px-6 py-3 bg-[#071D35] hover:bg-[#0d2a4c] text-white text-xs font-semibold rounded-md transition-all shadow cursor-pointer"
            >
              {t.nav.requestConsultation}
            </button>
            <button
              onClick={() => setActiveTab('producers')}
              className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-medium rounded-md transition-colors cursor-pointer"
            >
              {language === 'fa' ? 'ثبت مشخصات محصول' : 'Submit Your Product'}
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className="px-5 py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-md transition-colors cursor-pointer"
            >
              {language === 'fa' ? 'تماس با نیلای ترید' : 'Contact Nilay Trade'}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
