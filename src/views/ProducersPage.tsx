import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/siteConfig';
import {
  AlertTriangle,
  CheckCircle,
  Send,
  Building,
  Target,
  FileCheck,
  TrendingUp,
  MessageSquare,
  ShieldCheck,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

export const ProducersPage: React.FC = () => {
  const { language, dir, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    product: '',
    webOrSocial: '',
    productionCapacity: '',
    currentExportMarkets: '',
    targetCountries: '',
    mainChallenge: '',
    email: '',
    phoneOrWhatsApp: '',
    additionalInfo: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.company || !formData.product || !formData.email || !formData.phoneOrWhatsApp) {
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
      
      {/* Hero / Statement Section */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-semibold text-[#0F8B8D] uppercase tracking-wider">
          {t.producersPage.badge}
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#071D35] leading-tight text-balance">
          {t.producersPage.title}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed font-normal">
          {t.producersPage.subtitle}
        </p>
      </div>

      {/* Common Export Challenges Grid */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-600" />
          <h2 className="text-xl font-bold text-[#071D35]">
            {t.producersPage.challengesTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.producersPage.challenges.map((chal, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-sm space-y-2.5"
            >
              <div className="text-xs font-bold text-slate-400 font-mono">
                0{i + 1}
              </div>
              <h3 className="text-sm font-bold text-[#071D35]">
                {chal.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {chal.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Nilay Trade's Approach Section */}
      <div className="bg-[#071D35] text-white rounded-2xl p-8 sm:p-12 border border-slate-800 space-y-8">
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold text-[#0F8B8D] uppercase tracking-wider">
            {language === 'fa' ? 'راهکار نیلای ترید' : 'Our Solution'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {t.producersPage.approachTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {t.producersPage.approachDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-800">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-[#0F8B8D]">
              <Target className="w-4 h-4" />
              <span>{language === 'fa' ? '۱. غربالگری علمی بازار' : '1. Empirical Market Screening'}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {language === 'fa'
                ? 'تعیین دقیق کشورهایی که بیشترین کشش تقاضا، موانع گمرکی کمتر و صرفه اقتصادی برای شما دارند.'
                : 'Scrutinizing import data and non-tariff friction to determine your optimal market.'}
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-[#0F8B8D]">
              <FileCheck className="w-4 h-4" />
              <span>{language === 'fa' ? '۲. استانداردسازی مستندات' : '2. Collateral Engineering'}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {language === 'fa'
                ? 'تدوین شناسنامه فنی کالا (TDS)، کاتالوگ‌های حرفه‌ای و اصلاح فرمول قیمت‌گذاری بر مبنای اینکوترمز.'
                : 'Drafting export-grade technical specification datasheets and Incoterms pricing tables.'}
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-[#0F8B8D]">
              <TrendingUp className="w-4 h-4" />
              <span>{language === 'fa' ? '۳. اتصال به خریداران راستی‌آزمایی‌شده' : '3. Verified Buyer Engagement'}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {language === 'fa'
                ? 'مکاتبه رسمی و ساختاریافته به زبان مقصد با شرکت‌های واردکننده دارای سوابق تجاری شفاف.'
                : 'Conducting disciplined commercial outreach to genuine procurement directors.'}
            </p>
          </div>
        </div>
      </div>

      {/* DEDICATED CONVERSION FORM */}
      <div id="evaluation-form" className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm max-w-4xl mx-auto">
        <div className="max-w-2xl mx-auto text-center space-y-2 mb-8">
          <div className="text-xs font-semibold text-[#0F8B8D] uppercase tracking-wider">
            {language === 'fa' ? 'فرم ارزیابی اختصاصی' : 'Preliminary Evaluation'}
          </div>
          <h2 className="text-2xl font-bold text-[#071D35]">
            {t.producersPage.formTitle}
          </h2>
          <p className="text-xs text-slate-600">
            {t.producersPage.formSubtitle}
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-12 space-y-4 animate-in fade-in">
            <CheckCircle className="w-14 h-14 text-[#0F8B8D] mx-auto" />
            <h3 className="text-xl font-bold text-[#071D35]">
              {language === 'fa' ? 'اطلاعات محصول شما با موفقیت ثبت شد' : 'Product Evaluation Request Submitted'}
            </h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              {language === 'fa'
                ? 'کارشناسان نیلای ترید بررسی مقدماتی کد گمرکی و پتانسیل بازار محصول شما را آغاز کرده‌اند و ظرف ۲۴ ساعت کاری نتیجه اولیه را به همراه برنامه اقدام اعلام خواهند کرد.'
                : 'Nilay Trade analysts have received your product brief. We will conduct preliminary trade classification and reach out within 24 business hours.'}
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={() => setSubmitted(false)}
                className="px-5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
              >
                {language === 'fa' ? 'ارسال درخواست جدید' : 'Submit Another Request'}
              </button>
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-medium text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-md transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === 'fa' ? 'نام و نام خانوادگی مسئول بازرگانی / مدیر *' : 'Contact Person Full Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50"
                  placeholder={language === 'fa' ? 'مثال: علی رضایی' : 'e.g. Alex Hunter'}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === 'fa' ? 'نام شرکت یا کارخانه *' : 'Company / Factory Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50"
                  placeholder={language === 'fa' ? 'نام رسمی شرکت' : 'Enterprise Ltd.'}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === 'fa' ? 'محصول یا سبد کالایی برای صادرات *' : 'Product / Commodity for Export *'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50"
                  placeholder={language === 'fa' ? 'مثال: پسته ممتاز / کاشی پرسلان' : 'e.g. Super Negin Saffron / Porcelain Tiles'}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === 'fa' ? 'وب‌سایت یا صفحه اینستاگرام شرکت' : 'Website or Instagram URL'}
                </label>
                <input
                  type="text"
                  value={formData.webOrSocial}
                  onChange={(e) => setFormData({ ...formData, webOrSocial: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50"
                  dir="ltr"
                  placeholder="https://..."
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === 'fa' ? 'ظرفیت تولید ماهانه / سالانه' : 'Monthly / Annual Production Capacity'}
                </label>
                <input
                  type="text"
                  value={formData.productionCapacity}
                  onChange={(e) => setFormData({ ...formData, productionCapacity: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50"
                  placeholder={language === 'fa' ? 'مثال: ۲۰ تن در ماه / ۵۰,۰۰۰ مترمربع' : 'e.g. 50 tons/month or 10 containers'}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === 'fa' ? 'بازارهای صادراتی فعلی (در صورت وجود)' : 'Current Export Markets (if any)'}
                </label>
                <input
                  type="text"
                  value={formData.currentExportMarkets}
                  onChange={(e) => setFormData({ ...formData, currentExportMarkets: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50"
                  placeholder={language === 'fa' ? 'مثال: عراق، روسیه یا فاقد سابقه قبلی' : 'e.g. Iraq, Russia or No prior export'}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === 'fa' ? 'کشورهای هدف مدنظر شما' : 'Target Destination Countries of Interest'}
                </label>
                <input
                  type="text"
                  value={formData.targetCountries}
                  onChange={(e) => setFormData({ ...formData, targetCountries: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50"
                  placeholder={language === 'fa' ? 'مثال: حوزه خلیج فارس، اوراسیا، اروپا' : 'e.g. GCC, Central Asia, EU'}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === 'fa' ? 'چالش اصلی فعلی شما در صادرات' : 'Primary Export Challenge'}
                </label>
                <input
                  type="text"
                  value={formData.mainChallenge}
                  onChange={(e) => setFormData({ ...formData, mainChallenge: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50"
                  placeholder={language === 'fa' ? 'مثال: اعتبارسنجی خریدار، بسته‌بندی، قیمت‌گذاری' : 'e.g. Finding direct buyers, pricing parity'}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === 'fa' ? 'ایمیل سازمانی / معتبر *' : 'Business Email *'}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50"
                  dir="ltr"
                  placeholder="contact@company.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === 'fa' ? 'شماره تماس مستقیم / واتساپ *' : 'Phone / WhatsApp *'}
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phoneOrWhatsApp}
                  onChange={(e) => setFormData({ ...formData, phoneOrWhatsApp: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50"
                  dir="ltr"
                  placeholder="+98 912 000 0000"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {language === 'fa' ? 'توضیحات تکمیلی یا استانداردهای موجود (ISO، حلال و...)' : 'Additional Details or Current Certifications'}
              </label>
              <textarea
                rows={3}
                value={formData.additionalInfo}
                onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50"
                placeholder={
                  language === 'fa'
                    ? 'گواهی‌نامه‌ها، مشخصات کیفی خاص یا نکات تکمیلی را در صورت تمایل درج فرمایید.'
                    : 'Any certifications, lab analysis, or specific commercial constraints.'
                }
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">
                {language === 'fa' ? 'اطلاعات شما با رعایت محرمانگی تجاری بررسی خواهد شد.' : 'Strict commercial confidentiality guaranteed.'}
              </span>
              <button
                type="submit"
                className="px-6 py-3 bg-[#071D35] hover:bg-[#0d2a4c] text-white text-xs font-semibold rounded-md transition-all shadow flex items-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{language === 'fa' ? 'ثبت و درخواست ارزیابی صادراتی' : 'Submit for Export Evaluation'}</span>
              </button>
            </div>
          </form>
        )}
      </div>

    </div>
  );
};
