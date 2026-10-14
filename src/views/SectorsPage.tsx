import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { sectorsData, SectorItem } from '../data/sectorsData';
import {
  Globe2,
  Box,
  Truck,
  FileCheck2,
  Users2,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  Layers,
  ShieldCheck
} from 'lucide-react';

interface SectorsPageProps {
  onRequestConsultation: (sectorName?: string) => void;
}

export const SectorsPage: React.FC<SectorsPageProps> = ({ onRequestConsultation }) => {
  const { language, dir } = useLanguage();
  const [selectedSectorId, setSelectedSectorId] = useState<string>(sectorsData[0].id);
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const currentSector = sectorsData.find((s) => s.id === selectedSectorId) || sectorsData[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-semibold text-[#0F8B8D] uppercase tracking-wider">
          {language === 'fa' ? 'دایرکتوری حوزه‌های صادراتی' : 'Export Directory & Sector Frameworks'}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#071D35]">
          {language === 'fa' ? 'محصولات و صنایع صادرات‌محور' : 'Export-Oriented Sectors & Commodities'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          {language === 'fa'
            ? 'نیلای ترید بر اساس تقاضای واقعی بازارهای خارجی فعالیت می‌کند. این دایرکتوری به بررسی مزیت رقابتی، کدهای HS، الزامات مقرراتی و استانداردهای بسته‌بندی در حوزه‌های مزیتی ایران می‌پردازد.'
            : 'Nilay Trade operates on market demand. This directory outlines comparative advantages, HS Code classifications, regulatory prerequisites, and packaging standards across high-potential Iranian export industries.'}
        </p>
      </div>

      {/* Editorial Visual Callout */}
      <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm max-h-[320px]">
        <img
          src="/src/assets/images/export_products_showcase_1791182692236.jpg"
          alt="Premium export-grade commodities and packaging standards"
          className="w-full h-full object-cover object-center opacity-65"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071D35] via-[#071D35]/40 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 text-white max-w-xl">
          <div className="text-[11px] font-semibold text-[#C9A227] uppercase tracking-wider mb-1">
            {language === 'fa' ? 'استانداردسازی کالا در تراز جهانی' : 'International Wholesale Grade'}
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {language === 'fa'
              ? 'تولید باکیفیت تنها نیمی از معادله است؛ بسته‌بندی صادراتی، پالت‌بندی استاندارد و رعایت حد مجاز باقیمانده‌ها متضمن تکرار خرید است.'
              : 'Physical quality is only half the equation; barrier packaging, pallet engineering, and strict regulatory assay compliance ensure client retention.'}
          </p>
        </div>
      </div>

      {/* Sector Navigation Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2">
        {sectorsData.map((sec) => (
          <button
            key={sec.id}
            onClick={() => setSelectedSectorId(sec.id)}
            className={`p-3 rounded-lg text-xs font-medium text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1.5 border ${
              selectedSectorId === sec.id
                ? 'bg-[#071D35] text-white border-[#071D35] shadow-sm font-semibold'
                : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            <span className="line-clamp-2 leading-snug">
              {language === 'fa' ? sec.name.fa : sec.name.en}
            </span>
          </button>
        ))}
      </div>

      {/* Detailed Technical & Commercial Sector Profile */}
      <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8 animate-in fade-in">
        
        {/* Title & HS Code Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#0F8B8D]">
              <span className="font-semibold">{currentSector.hsCodePrefix}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500">
                {language === 'fa' ? `پتانسیل صادراتی: ${currentSector.exportPotential}` : `Export Potential: ${currentSector.exportPotential}`}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-[#071D35]">
              {language === 'fa' ? currentSector.name.fa : currentSector.name.en}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              {language === 'fa' ? currentSector.shortSummary.fa : currentSector.shortSummary.en}
            </p>
          </div>

          <button
            onClick={() => onRequestConsultation(`Sector Inquiry: ${currentSector.name.en}`)}
            className="px-5 py-2.5 bg-[#0F8B8D] hover:bg-[#14a3a6] text-white text-xs font-semibold rounded-md transition-all shadow-sm cursor-pointer whitespace-nowrap self-start md:self-auto"
          >
            {language === 'fa' ? 'استعلام فرصت صادراتی این حوزه' : 'Inquire for this Sector'}
          </button>
        </div>

        {/* Core Attributes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Target Markets */}
          <div className="bg-slate-50/70 p-5 rounded-xl border border-slate-200/80 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#071D35]">
              <Globe2 className="w-4 h-4 text-[#0F8B8D]" />
              <span>{language === 'fa' ? 'بازارهای هدف اصلی' : 'Primary Target Markets'}</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {(language === 'fa' ? currentSector.primaryTargetMarkets.fa : currentSector.primaryTargetMarkets.en).map((mkt, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F8B8D] shrink-0 mt-1.5" />
                  <span>{mkt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sample Key Products */}
          <div className="bg-slate-50/70 p-5 rounded-xl border border-slate-200/80 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#071D35]">
              <Layers className="w-4 h-4 text-[#0F8B8D]" />
              <span>{language === 'fa' ? 'نمونه کالاهای مزیتی' : 'Sample Key Commodities'}</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {(language === 'fa' ? currentSector.sampleProducts.fa : currentSector.sampleProducts.en).map((prod, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F8B8D] shrink-0 mt-1.5" />
                  <span>{prod}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Buyer Types */}
          <div className="bg-slate-50/70 p-5 rounded-xl border border-slate-200/80 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#071D35]">
              <Users2 className="w-4 h-4 text-[#0F8B8D]" />
              <span>{language === 'fa' ? 'انواع خریداران B2B هدف' : 'Target Corporate Buyer Types'}</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {(language === 'fa' ? currentSector.buyerTypes.fa : currentSector.buyerTypes.en).map((bt, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F8B8D] shrink-0 mt-1.5" />
                  <span>{bt}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Technical & Regulatory Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-100">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#071D35]">
              <FileCheck2 className="w-4 h-4 text-[#0F8B8D]" />
              <span>{language === 'fa' ? 'الزامات مقرراتی و استانداردها' : 'Regulatory & Standards'}</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {language === 'fa' ? currentSector.regulatoryConsiderations.fa : currentSector.regulatoryConsiderations.en}
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#071D35]">
              <Box className="w-4 h-4 text-[#0F8B8D]" />
              <span>{language === 'fa' ? 'ملاحظات بسته‌بندی صادراتی' : 'Packaging Considerations'}</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {language === 'fa' ? currentSector.packagingConsiderations.fa : currentSector.packagingConsiderations.en}
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#071D35]">
              <Truck className="w-4 h-4 text-[#0F8B8D]" />
              <span>{language === 'fa' ? 'ملاحظات لجستیک و حمل' : 'Logistics & Multimodal Transit'}</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {language === 'fa' ? currentSector.logisticsConsiderations.fa : currentSector.logisticsConsiderations.en}
            </p>
          </div>

        </div>

        {/* Sector Competitors Notice */}
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="font-bold text-[#071D35]">
              {language === 'fa' ? 'کشورهای رقیب منطقه‌ای در این حوزه: ' : 'Primary Competing Countries: '}
            </span>
            <span>
              {(language === 'fa' ? currentSector.competitorCountries.fa : currentSector.competitorCountries.en).join(' · ')}
            </span>
          </div>

          <button
            onClick={() => onRequestConsultation(`Competitor Benchmark: ${currentSector.name.en}`)}
            className="text-xs font-semibold text-[#0F8B8D] hover:underline cursor-pointer whitespace-nowrap self-start sm:self-auto"
          >
            {language === 'fa' ? 'درخواست تحلیل مقایسه‌ای قیمت و رقبا' : 'Request Competitor Price Benchmark'}
          </button>
        </div>

      </div>

    </div>
  );
};
