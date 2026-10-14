import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData, B2BService } from '../data/servicesData';
import { Search, CheckCircle2, ArrowRight, ArrowLeft, Layers, Compass, HelpCircle } from 'lucide-react';

interface ServicesPageProps {
  onRequestConsultation: (serviceTitle?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onRequestConsultation }) => {
  const { language, dir, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const categories = [
    { id: 'all', label: language === 'fa' ? 'تمام ۱۲ خدمت تخصصی' : 'All 12 Services' },
    { id: 'research', label: language === 'fa' ? 'تحقیق و تحلیل بازار' : 'Market Research & Analysis' },
    { id: 'connection', label: language === 'fa' ? 'شناسایی و پیوند B2B' : 'Buyer & Partner Connection' },
    { id: 'development', label: language === 'fa' ? 'توسعه و استراتژی صادرات' : 'Export Development' },
    { id: 'marketing', label: language === 'fa' ? 'بازاریابی و ارتباطات تجاری' : 'Marketing & Communications' },
  ];

  const filteredServices = servicesData.filter((service) => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const title = language === 'fa' ? service.title.fa : service.title.en;
    const desc = language === 'fa' ? service.shortDescription.fa : service.shortDescription.en;
    const matchesSearch =
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#0F8B8D] uppercase tracking-wider">
          <span>{language === 'fa' ? 'سبد خدمات سازمانی' : 'Corporate Service Portfolio'}</span>
          <span aria-hidden="true">·</span>
          <span>{language === 'fa' ? 'بدون قیمت‌گذاری فرضی' : 'Bespoke Proposals'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#071D35]">
          {language === 'fa' ? 'خدمات تخصصی توسعه تجارت بین‌الملل' : 'International Trade & Market Services'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {language === 'fa'
            ? 'خدمات نیلای ترید متمرکز بر حل موانع واقعی ورود به بازارهای صادراتی، دستیابی به خریداران راستی‌آزمایی‌شده و فرآیندسازی پایدار B2B است.'
            : 'Nilay Trade provides structured operational services eliminating barriers to foreign market entry and establishing recurring B2B trade partnerships.'}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-2 bg-white rounded-xl border border-slate-200 shadow-sm">
        {/* Category Tabs (Functional filter controls) */}
        <div className="flex items-center gap-1 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#071D35] text-white shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className={`w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 ${dir === 'rtl' ? 'right-3' : 'left-3'}`} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'fa' ? 'جستجو در خدمات...' : 'Search services...'}
            className={`w-full text-xs py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50 ${
              dir === 'rtl' ? 'pr-9 pl-3' : 'pl-9 pr-3'
            }`}
          />
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => {
          const isExpanded = selectedServiceId === service.id;
          const title = language === 'fa' ? service.title.fa : service.title.en;
          const shortDesc = language === 'fa' ? service.shortDescription.fa : service.shortDescription.en;
          const whatItIs = language === 'fa' ? service.whatItIs.fa : service.whatItIs.en;
          const whoNeedsIt = language === 'fa' ? service.whoNeedsIt.fa : service.whoNeedsIt.en;
          const problemSolved = language === 'fa' ? service.problemSolved.fa : service.problemSolved.en;
          const deliverables = language === 'fa' ? service.whatWeDeliver.fa : service.whatWeDeliver.en;

          return (
            <div
              key={service.id}
              className={`bg-white rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                isExpanded
                  ? 'border-[#0F8B8D] shadow-md ring-1 ring-[#0F8B8D]/30 md:col-span-2 lg:col-span-3'
                  : 'border-slate-200/90 shadow-sm hover:border-slate-300'
              }`}
            >
              <div className="p-6 space-y-4">
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <span className="text-xl font-mono font-bold text-[#0F8B8D]">
                    {service.order}
                  </span>
                  <button
                    onClick={() => setSelectedServiceId(isExpanded ? null : service.id)}
                    className="text-[11px] font-semibold text-[#0F8B8D] hover:underline cursor-pointer"
                  >
                    {isExpanded
                      ? language === 'fa' ? 'بستن جزئیات' : 'Collapse'
                      : language === 'fa' ? 'مشاهده تمام ابعاد' : 'Detailed Breakdown'}
                  </button>
                </div>

                <h3 className="text-base font-bold text-[#071D35] leading-snug">
                  {title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {shortDesc}
                </p>

                {/* Expanded Detailed Breakdown */}
                {isExpanded && (
                  <div className="pt-4 border-t border-slate-100 space-y-6 animate-in fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      
                      <div className="space-y-1.5 bg-slate-50 p-4 rounded-lg border border-slate-100">
                        <div className="text-xs font-bold text-[#071D35] flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-[#0F8B8D]" />
                          <span>{language === 'fa' ? 'ماهیت این خدمت چیست؟' : 'What it is'}</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {whatItIs}
                        </p>
                      </div>

                      <div className="space-y-1.5 bg-slate-50 p-4 rounded-lg border border-slate-100">
                        <div className="text-xs font-bold text-[#071D35] flex items-center gap-1.5">
                          <Compass className="w-3.5 h-3.5 text-[#0F8B8D]" />
                          <span>{language === 'fa' ? 'چه کسانی به آن نیاز دارند؟' : 'Who needs it'}</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {whoNeedsIt}
                        </p>
                      </div>

                      <div className="space-y-1.5 bg-slate-50 p-4 rounded-lg border border-slate-100">
                        <div className="text-xs font-bold text-[#071D35] flex items-center gap-1.5">
                          <HelpCircle className="w-3.5 h-3.5 text-[#0F8B8D]" />
                          <span>{language === 'fa' ? 'چه مشکلی را حل می‌کند؟' : 'Problem it solves'}</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {problemSolved}
                        </p>
                      </div>

                    </div>

                    {/* What we deliver */}
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-[#071D35]">
                        {language === 'fa' ? 'خروجی‌های عملیاتی نیلای ترید:' : 'What Nilay Trade Delivers:'}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {deliverables.map((deliv, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0F8B8D] shrink-0 mt-0.5" />
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Action bottom bar */}
              <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100 rounded-b-xl flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium">
                  {language === 'fa' ? 'پروپوزال بر مبنای نیاز' : 'Custom proposal'}
                </span>
                <button
                  onClick={() => onRequestConsultation(title)}
                  className="text-xs font-semibold text-[#071D35] hover:text-[#0F8B8D] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>{language === 'fa' ? service.ctaLabel.fa : service.ctaLabel.en}</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
