import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { marketReportsData, MarketReport } from '../data/marketIntelligenceData';
import { Search, FileText, Download, CheckCircle2, AlertCircle, ArrowRight, ArrowLeft, Filter, BookOpen } from 'lucide-react';

interface MarketIntelligencePageProps {
  onRequestConsultation: (reportTitle?: string) => void;
}

export const MarketIntelligencePage: React.FC<MarketIntelligencePageProps> = ({ onRequestConsultation }) => {
  const { language, dir, t } = useLanguage();
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeReportModal, setActiveReportModal] = useState<MarketReport | null>(null);

  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const industries = [
    { id: 'all', label: language === 'fa' ? 'تمام صنایع' : 'All Industries' },
    { id: 'Food & Agriculture', label: language === 'fa' ? 'کشاورزی و غذا' : 'Food & Agriculture' },
    { id: 'Industrial & Minerals', label: language === 'fa' ? 'صنعتی و معدنی' : 'Industrial & Minerals' },
    { id: 'Chemicals & Materials', label: language === 'fa' ? 'پلیمر و شیمیایی' : 'Chemicals & Materials' },
    { id: 'Natural & Herbs', label: language === 'fa' ? 'گیاهان دارویی' : 'Natural & Herbs' },
  ];

  const reportTypes = [
    { id: 'all', label: language === 'fa' ? 'همه انواع گزارش' : 'All Report Types' },
    { id: 'Country Market Report', label: language === 'fa' ? 'گزارش بازار کشور' : 'Country Market Report' },
    { id: 'Product Export Potential', label: language === 'fa' ? 'پتانسیل‌سنجی محصول' : 'Product Export Potential' },
    { id: 'Buyer & Distributor Research', label: language === 'fa' ? 'تحقیق خریداران و توزیع' : 'Buyer & Distributor' },
    { id: 'Export Entry Strategy', label: language === 'fa' ? 'استراتژی ورود به بازار' : 'Market Entry Strategy' },
    { id: 'Competitor Analysis', label: language === 'fa' ? 'تحلیل رقبا' : 'Competitor Analysis' },
  ];

  const filteredReports = marketReportsData.filter((rep) => {
    const matchesIndustry = selectedIndustry === 'all' || rep.industry === selectedIndustry;
    const matchesType = selectedType === 'all' || rep.reportType === selectedType;
    const title = language === 'fa' ? rep.title.fa : rep.title.en;
    const country = language === 'fa' ? rep.countryFa : rep.country;
    const matchesSearch =
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesIndustry && matchesType && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      
      {/* Page Header with hero image banner */}
      <div className="relative rounded-2xl overflow-hidden bg-[#071D35] text-white p-8 sm:p-12 border border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/market_intel_hub_1791182671685.jpg"
            alt="International market intelligence briefing room"
            className="w-full h-full object-cover opacity-30 object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071D35] via-[#071D35]/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="text-xs font-semibold text-[#0F8B8D] uppercase tracking-wider">
            {language === 'fa' ? 'مرکز تحقیقات و تحلیل بازار بین‌المللی' : 'Market Research & Intelligence Repository'}
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            {language === 'fa' ? 'گزارش‌های تخصصی تحقیقات و تحلیل بازار' : 'Market Research & Trade Analysis Reports'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            {language === 'fa'
              ? 'دسترسی به تحلیل‌های تخصصی پیرامون ظرفیت واردات، تعرفه‌های گمرکی، بازیگران کلیدی و موانع استاندارد در مقاصد صادراتی ایران.'
              : 'Structured trade research dossiers auditing import volumes, customs tariffs, incumbent distributors, and regulatory roadmaps across target jurisdictions.'}
          </p>
        </div>
      </div>

      {/* Transparency Banner */}
      <div className="flex items-start gap-3 p-4 bg-amber-50/70 border border-amber-200/80 rounded-xl text-xs text-amber-900 leading-relaxed">
        <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold">
            {language === 'fa' ? 'سیاست داده‌های معتبر نیلای ترید:' : 'Nilay Trade Data Authenticity Policy:'}
          </span>{' '}
          {language === 'fa'
            ? 'گزارش‌های زیر چارچوب‌های استاندارد تحلیل بازار نیلای ترید را نمایش می‌دهند. به منظور رعایت اصول اخلاق حرفه‌ای، نیلای ترید از انتشار آمار ساختگی خودداری کرده و گزارش‌های نهایی با استخراج داده‌های زنده و مستندات رسمی سفارشی‌سازی می‌شوند.'
            : 'The dossiers below illustrate Nilay Trade’s analytical methodology. To maintain complete integrity, we never present fabricated statistics; bespoke reports incorporate audited commercial records upon formal request.'}
        </div>
      </div>

      {/* Multi-Filter Bar */}
      <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Industry Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind.id)}
                className={`px-3 py-1.5 text-xs rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  selectedIndustry === ind.id
                    ? 'bg-[#071D35] text-white font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {ind.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[220px]">
            <Search className={`w-3.5 h-3.5 text-slate-400 absolute top-1/2 -translate-y-1/2 ${dir === 'rtl' ? 'right-3' : 'left-3'}`} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'fa' ? 'جستجو بر اساس کشور یا محصول...' : 'Search by country or product...'}
              className={`w-full text-xs py-1.5 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50 ${
                dir === 'rtl' ? 'pr-8 pl-3' : 'pl-8 pr-3'
              }`}
            />
          </div>

        </div>

        {/* Secondary Report Type Filter */}
        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-400 text-[11px] font-medium flex items-center gap-1">
            <Filter className="w-3 h-3" />
            <span>{language === 'fa' ? 'نوع گزارش:' : 'Type:'}</span>
          </span>
          {reportTypes.map((rt) => (
            <button
              key={rt.id}
              onClick={() => setSelectedType(rt.id)}
              className={`px-2.5 py-1 text-[11px] rounded transition-colors cursor-pointer ${
                selectedType === rt.id
                  ? 'bg-[#0F8B8D] text-white font-medium'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {rt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Reports Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReports.map((report) => (
          <div
            key={report.id}
            className="bg-white rounded-xl border border-slate-200/90 shadow-sm p-6 flex flex-col justify-between hover:border-[#0F8B8D]/40 transition-all"
          >
            <div className="space-y-4">
              {/* Unboxed Metadata Header */}
              <div className="flex items-center gap-2 text-[11px] text-slate-500">
                <span className="font-semibold text-[#0F8B8D]">
                  {language === 'fa' ? report.countryFa : report.country}
                </span>
                <span aria-hidden="true">·</span>
                <span>{report.reportType}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">{report.pagesCount} {language === 'fa' ? 'صفحه' : 'pages'}</span>
              </div>

              <h3 className="text-base font-bold text-[#071D35] leading-snug">
                {language === 'fa' ? report.title.fa : report.title.en}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                {language === 'fa' ? report.summary.fa : report.summary.en}
              </p>

              {/* Sample Key Insights Preview */}
              <div className="pt-2 space-y-1.5 border-t border-slate-100">
                <div className="text-[11px] font-bold text-slate-700">
                  {language === 'fa' ? 'محورهای کلیدی بررسی‌شده:' : 'Core Research Themes:'}
                </div>
                {(language === 'fa' ? report.keyInsights.fa : report.keyInsights.en).slice(0, 2).map((ins, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                    <CheckCircle2 className="w-3 h-3 text-[#0F8B8D] shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{ins}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
              <button
                onClick={() => setActiveReportModal(report)}
                className="text-xs font-semibold text-[#071D35] hover:text-[#0F8B8D] flex items-center gap-1 cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>{language === 'fa' ? 'مشاهده شناسنامه گزارش' : 'View Executive Brief'}</span>
              </button>

              <button
                onClick={() => onRequestConsultation(`Custom Report Request: ${report.title.en}`)}
                className="text-xs font-semibold text-[#0F8B8D] hover:underline cursor-pointer"
              >
                {language === 'fa' ? 'سفارش گزارش زنده' : 'Request Live Dossier'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* REPORT BRIEF MODAL */}
      {activeReportModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95">
            <div className="px-6 py-4 bg-[#071D35] text-white flex items-center justify-between border-b border-slate-800">
              <div>
                <span className="text-[11px] font-semibold text-[#0F8B8D] uppercase tracking-wider">
                  {activeReportModal.reportType}
                </span>
                <h3 className="text-base font-bold text-white mt-0.5">
                  {language === 'fa' ? activeReportModal.title.fa : activeReportModal.title.en}
                </h3>
              </div>
              <button
                onClick={() => setActiveReportModal(null)}
                className="p-1 text-slate-400 hover:text-white rounded transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
              <div className="flex items-center gap-4 text-xs text-slate-500 border-b border-slate-100 pb-3">
                <div>
                  <span className="font-semibold text-slate-700">{language === 'fa' ? 'کشور مقصد: ' : 'Country: '}</span>
                  <span>{language === 'fa' ? activeReportModal.countryFa : activeReportModal.country}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-700">{language === 'fa' ? 'کالای هدف: ' : 'Commodity: '}</span>
                  <span>{language === 'fa' ? activeReportModal.productFa : activeReportModal.product}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-700">{language === 'fa' ? 'حجم گزارش: ' : 'Length: '}</span>
                  <span className="tabular-nums">{activeReportModal.pagesCount} {language === 'fa' ? 'صفحه تحلیلی' : 'pages'}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#071D35] uppercase mb-2">
                  {language === 'fa' ? 'چکیده اجرایی چارچوب پژوهش' : 'Executive Overview'}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-100">
                  {language === 'fa' ? activeReportModal.summary.fa : activeReportModal.summary.en}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#071D35] uppercase mb-2">
                  {language === 'fa' ? 'محورها و یافته‌های کلیدی مندرج در نسخه کامل' : 'Key Analytical Dimensions in Full Dossier'}
                </h4>
                <div className="space-y-2">
                  {(language === 'fa' ? activeReportModal.keyInsights.fa : activeReportModal.keyInsights.en).map((ins, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#0F8B8D] shrink-0 mt-0.5" />
                      <span>{ins}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-slate-100 rounded-lg text-xs text-slate-600 space-y-1">
                <div className="font-bold text-[#071D35]">
                  {language === 'fa' ? 'چگونه نسخه اختصاصی این گزارش را دریافت کنید؟' : 'How to Obtain the Tailored Institutional Version?'}
                </div>
                <p>
                  {language === 'fa'
                    ? 'گزارش‌های اختصاصی نیلای ترید متناسب با مشخصات دقیق فنی محصول شما، تناژ تولیدی، آنالیز کدهای گمرکی و فهرست به‌روزشده خریداران تدوین می‌شود.'
                    : 'Custom reports are compiled specifically targeting your product specifications, nominal output volume, exact HS Code, and real-time buyer rosters.'}
                </p>
              </div>
            </div>

            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveReportModal(null)}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800 transition-colors cursor-pointer"
              >
                {language === 'fa' ? 'بستن' : 'Close'}
              </button>
              <button
                onClick={() => {
                  const title = activeReportModal.title.en;
                  setActiveReportModal(null);
                  onRequestConsultation(`Custom Order: ${title}`);
                }}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#071D35] hover:bg-[#0d2a4c] rounded-md transition-all shadow-sm cursor-pointer"
              >
                {language === 'fa' ? 'سفارش گزارش اختصاصی برای محصول من' : 'Request Tailored Report for My Product'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
