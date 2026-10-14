import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { caseStudiesData, CaseStudy } from '../data/caseStudiesData';
import { ShieldCheck, CheckCircle2, ChevronRight, ChevronDown, ArrowRight, ArrowLeft, Layers } from 'lucide-react';

interface CaseStudiesPageProps {
  onRequestConsultation: (projectTopic?: string) => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onRequestConsultation }) => {
  const { language, dir, t } = useLanguage();
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(caseStudiesData[0].id);

  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-semibold text-[#0F8B8D] uppercase tracking-wider">
          {language === 'fa' ? 'پروژه‌های منتخب و چارچوب‌های اجرایی' : 'Selected Projects & Methodology Cases'}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#071D35]">
          {language === 'fa' ? 'تجربیات عملیاتی و پروژه‌های منتخب' : 'Operational Projects & Methodologies'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          {language === 'fa'
            ? 'رویکرد نیلای ترید حل گام‌به‌گام گره‌های تجاری و استقرار سازوکارهای ماندگار صادراتی است. در این بخش چارچوب‌های حل مسئله و نتایج واقعی حاصل از پژوهش و پیوند تجاری را ملاحظه می‌فرمایید.'
            : 'Nilay Trade addresses real structural trade bottlenecks to establish lasting B2B export streams. Review our problem-solving methodologies and verified project workflows.'}
        </p>
      </div>

      {/* Credibility Notice */}
      <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 flex items-start gap-3 text-xs text-slate-700 leading-relaxed">
        <ShieldCheck className="w-5 h-5 text-[#0F8B8D] shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-[#071D35]">
            {language === 'fa' ? 'اصالت شواهد و تجربیات:' : 'Evidence Rigor Notice:'}
          </span>{' '}
          {language === 'fa'
            ? 'نیلای ترید از ساخت آمارهای نجومی یا انتساب دستاوردهای موهوم پرهیز می‌کند؛ تمامی موارد زیر بر اساس متدولوژی واقعی اقدام و خروجی‌های مستند تدوین شده‌اند.'
            : 'Nilay Trade strictly avoids fabricated percentages or vanity claims; each framework below reflects concrete problem-solving and verified execution outcomes.'}
        </div>
      </div>

      {/* Projects Grid / Accordion */}
      <div className="space-y-6">
        {caseStudiesData.map((project) => {
          const isSelected = selectedProjectId === project.id;
          return (
            <div
              key={project.id}
              className={`bg-white rounded-2xl border transition-all p-6 sm:p-8 space-y-6 ${
                isSelected
                  ? 'border-[#0F8B8D] shadow-md ring-1 ring-[#0F8B8D]/30'
                  : 'border-slate-200/90 shadow-sm hover:border-slate-300'
              }`}
            >
              {/* Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#0F8B8D]">
                    <span className="font-bold">{project.projectCode}</span>
                    <span aria-hidden="true">·</span>
                    <span>{language === 'fa' ? project.clientSector.fa : project.clientSector.en}</span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#071D35]">
                    {language === 'fa' ? project.title.fa : project.title.en}
                  </h2>
                  <div className="text-xs text-slate-500 font-medium">
                    {language === 'fa' ? `محصول و مقصد: ${project.marketAndProduct.fa}` : `Product & Market: ${project.marketAndProduct.en}`}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProjectId(isSelected ? null : project.id)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-[#071D35] text-xs font-semibold rounded-md transition-colors cursor-pointer self-start sm:self-auto whitespace-nowrap"
                >
                  {isSelected
                    ? language === 'fa' ? 'بستن تحلیل پروژه' : 'Hide Analysis'
                    : language === 'fa' ? 'مشاهده کالبدشکافی پروژه' : 'Examine Methodology'}
                </button>
              </div>

              {/* Collapsed Brief vs Expanded Analysis */}
              {isSelected ? (
                <div className="space-y-6 animate-in fade-in">
                  
                  {/* Challenge & Approach */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                      <div className="text-xs font-bold text-amber-900 uppercase">
                        {language === 'fa' ? 'چالش اصلی کارفرما:' : 'Client Challenge:'}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {language === 'fa' ? project.clientChallenge.fa : project.clientChallenge.en}
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                      <div className="text-xs font-bold text-[#0F8B8D] uppercase">
                        {language === 'fa' ? 'رویکرد عملیاتی نیلای ترید:' : 'Nilay Trade Approach:'}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {language === 'fa' ? project.approach.fa : project.approach.en}
                      </p>
                    </div>
                  </div>

                  {/* Research Performed */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-[#071D35]">
                      {language === 'fa' ? 'اقدامات و پژوهش‌های میدانی انجام‌شده:' : 'Empirical Research Executed:'}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {(language === 'fa' ? project.researchPerformed.fa : project.researchPerformed.en).map((res, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-white p-3 rounded-lg border border-slate-200/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0F8B8D] shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Outcome and Key Learning */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                    <div className="space-y-1.5">
                      <div className="text-xs font-bold text-emerald-800">
                        {language === 'fa' ? 'دستاورد و نتیجه تجاری:' : 'Tangible Outcome:'}
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {language === 'fa' ? project.outcome.fa : project.outcome.en}
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="text-xs font-bold text-[#071D35]">
                        {language === 'fa' ? 'آموزه کلیدی مدیریتی:' : 'Key Strategic Learning:'}
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {language === 'fa' ? project.keyLearning.fa : project.keyLearning.en}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      onClick={() => onRequestConsultation(`Consultation following Case Study ${project.projectCode}`)}
                      className="px-5 py-2.5 bg-[#071D35] hover:bg-[#0d2a4c] text-white text-xs font-semibold rounded-md transition-colors cursor-pointer"
                    >
                      {language === 'fa' ? 'پیاده‌سازی متدولوژی مشابه برای محصول ما' : 'Apply Similar Methodology to Our Product'}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {language === 'fa' ? project.clientChallenge.fa : project.clientChallenge.en}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};
