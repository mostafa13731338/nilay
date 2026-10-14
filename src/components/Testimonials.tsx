import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { testimonialsData, Testimonial } from '../data/testimonialsData';
import { Quote, Building2, Globe2, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

interface TestimonialsProps {
  onRequestConsultation: (topic?: string) => void;
  onViewCaseStudies?: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({
  onRequestConsultation,
  onViewCaseStudies,
}) => {
  const { language, dir } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'producer' | 'buyer'>('all');
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const filteredTestimonials = testimonialsData.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.type === activeFilter;
  });

  return (
    <section className="bg-slate-50/80 py-16 md:py-24 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-semibold text-[#0F8B8D] uppercase tracking-wider">
              {language === 'fa' ? 'اعتبار و نتایج مستند تجاری' : 'Verified Social Proof & Evidence'}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#071D35]">
              {language === 'fa'
                ? 'دیدگاه شرکای بین‌المللی و تولیدکنندگان همکار'
                : 'Commercial Endorsements from Trade Partners'}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {language === 'fa'
                ? 'روابط تجاری پایدار بر پایه شواهد واقعی ساخته می‌شوند؛ نظرات مدیران بازرگانی خارجی و تولیدکنندگان ایرانی درباره تجربیات واقعی همکاری با نیلای ترید.'
                : 'Long-term trade is founded on measurable execution. Real-world feedback from procurement directors and manufacturing executives partnered with Nilay Trade.'}
            </p>
          </div>

          {/* Interactive Filter Tabs (Functional segmented buttons conforming to zero-pill discipline) */}
          <div className="flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-lg shadow-sm shrink-0 self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-[#071D35] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {language === 'fa' ? 'تمام دیدگاه‌ها (۴)' : 'All Partners (4)'}
            </button>
            <button
              onClick={() => setActiveFilter('producer')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeFilter === 'producer'
                  ? 'bg-[#071D35] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>{language === 'fa' ? 'تولیدکنندگان ایرانی' : 'Iranian Producers'}</span>
            </button>
            <button
              onClick={() => setActiveFilter('buyer')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeFilter === 'buyer'
                  ? 'bg-[#071D35] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Globe2 className="w-3.5 h-3.5" />
              <span>{language === 'fa' ? 'خریداران خارجی' : 'International Buyers'}</span>
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#0F8B8D]/40 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Quiet Unboxed Metadata Discipline */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2 font-medium">
                    <span className="text-[#0F8B8D]">
                      {language === 'fa' ? t.corridor.fa : t.corridor.en}
                    </span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="text-slate-600">
                      {language === 'fa' ? t.sector.fa : t.sector.en}
                    </span>
                  </div>

                  <span className="text-[11px] font-semibold text-slate-400">
                    {t.type === 'buyer'
                      ? (language === 'fa' ? 'خریدار راستی‌آزمایی‌شده B2B' : 'Verified B2B Buyer')
                      : (language === 'fa' ? 'تولیدکننده منتخب صنعتی' : 'Verified Manufacturer')}
                  </span>
                </div>

                {/* Quote Body */}
                <div className="relative pt-1">
                  <Quote className="w-6 h-6 text-[#0F8B8D]/20 absolute -top-1 -start-1 pointer-events-none" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal italic relative z-10 ps-5">
                    "{language === 'fa' ? t.quote.fa : t.quote.en}"
                  </p>
                </div>

                {/* Concrete Trade Outcome */}
                <div className="pt-3 border-t border-slate-100/80 bg-slate-50/70 p-3 rounded-xl space-y-1">
                  <div className="text-[11px] font-semibold text-[#071D35] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0F8B8D] shrink-0" />
                    <span>{language === 'fa' ? 'دستاورد ملموس تجاری:' : 'Documented Commercial Outcome:'}</span>
                  </div>
                  <p className="text-xs text-slate-600 ps-5 font-medium leading-normal">
                    {language === 'fa' ? t.tradeOutcome.fa : t.tradeOutcome.en}
                  </p>
                </div>

              </div>

              {/* Author Lockup */}
              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#071D35]">
                    {language === 'fa' ? t.author.name.fa : t.author.name.en}
                  </h4>
                  <div className="text-xs text-slate-500 space-y-0.5 mt-0.5">
                    <p className="font-medium text-[#0F8B8D]">
                      {language === 'fa' ? t.author.role.fa : t.author.role.en}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {language === 'fa' ? t.author.company.fa : t.author.company.en} · {language === 'fa' ? t.author.location.fa : t.author.location.en}
                    </p>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs uppercase shrink-0">
                  {t.type === 'buyer' ? <Globe2 className="w-5 h-5 text-[#0F8B8D]" /> : <Building2 className="w-5 h-5 text-[#071D35]" />}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Social Proof Action Strip */}
        <div className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-start">
            <h4 className="text-sm font-bold text-[#071D35]">
              {language === 'fa'
                ? 'مایلید شرایط توسعه صادرات یا سورسینگ خود را بررسی کنید؟'
                : 'Interested in evaluating your export or procurement pathway?'}
            </h4>
            <p className="text-xs text-slate-500">
              {language === 'fa'
                ? 'تیم بازرگانی نیلای ترید آماده برگزاری جلسه مقدماتی و ارزیابی رایگان پتانسیل تجاری شماست.'
                : 'Our commercial desk conducts tailored preliminary feasibility audits for qualified B2B partners.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {onViewCaseStudies && (
              <button
                onClick={onViewCaseStudies}
                className="px-4 py-2 border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                {language === 'fa' ? 'مشاهده پروژه‌ها و تجربیات' : 'View Case Studies'}
              </button>
            )}

            <button
              onClick={() => onRequestConsultation('Consultation from Testimonials Section')}
              className="px-5 py-2.5 bg-[#0F8B8D] hover:bg-[#14a3a6] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap shadow-xs"
            >
              <span>{language === 'fa' ? 'درخواست ارزیابی تجاری' : 'Request Commercial Audit'}</span>
              <ArrowIcon className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
