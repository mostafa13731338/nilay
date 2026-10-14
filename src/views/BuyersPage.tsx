import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/siteConfig';
import {
  ShieldCheck,
  CheckCircle,
  Send,
  Building2,
  Globe2,
  FileCheck2,
  Scale,
  MessageSquare,
  PackageCheck,
  Search
} from 'lucide-react';

export const BuyersPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    country: '',
    productRequired: '',
    requiredQuantity: '',
    specifications: '',
    targetPrice: '',
    requiredCertifications: '',
    deliveryDestination: '',
    email: '',
    phoneOrWhatsApp: '',
    additionalInfo: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.company || !formData.country || !formData.productRequired || !formData.email) {
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
      
      {/* Hero / Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-semibold text-[#0F8B8D] uppercase tracking-wider">
          {t.buyersPage.badge}
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#071D35] leading-tight text-balance">
          {t.buyersPage.title}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed font-normal">
          {t.buyersPage.subtitle}
        </p>
      </div>

      {/* Sourcing Services Grid */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[#071D35]">
          {t.buyersPage.servicesIntro}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#0F8B8D]/10 text-[#0F8B8D] flex items-center justify-center">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#071D35]">
              {language === 'fa' ? 'شناسایی و سورسینگ کالا' : 'Product Sourcing & Audits'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {language === 'fa'
                ? 'یافتن کارخانجات تولیدکننده تراز اول با ظرفیت مازاد و آزمون استانداردهای فنی متناسب با الزامات بازار شما.'
                : 'Locating top-tier Iranian producers with confirmed capacity and compliant quality benchmarks.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#071D35]/10 text-[#071D35] flex items-center justify-center">
              <FileCheck2 className="w-5 h-5 text-[#071D35]" />
            </div>
            <h3 className="text-sm font-bold text-[#071D35]">
              {language === 'fa' ? 'اعتبارسنجی و ممیزی تامین‌کننده' : 'Supplier Verification'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {language === 'fa'
                ? 'راستی‌آزمایی مدارک قانونی، پروانه بهره‌برداری، توان اسمی کارخانه و سوابق تجاری صادرکننده.'
                : 'Auditing manufacturing licenses, nominal output capacity, and corporate background.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#C9A227]/15 text-[#C9A227] flex items-center justify-center">
              <PackageCheck className="w-5 h-5 text-[#C9A227]" />
            </div>
            <h3 className="text-sm font-bold text-[#071D35]">
              {language === 'fa' ? 'هماهنگی نمونه و آزمون آزمایشگاهی' : 'Sample Dispatch & Assays'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {language === 'fa'
                ? 'ارسال نمونه‌های تجاری به همراه برگه آنالیز آزمایشگاهی معتبر (COA) و نظارت بر تطابق محموله با نمونه.'
                : 'Coordinating international sample logistics with accredited lab test assays.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
              <Scale className="w-5 h-5 text-[#0F8B8D]" />
            </div>
            <h3 className="text-sm font-bold text-[#071D35]">
              {language === 'fa' ? 'هماهنگی تجاری و اینکوترمز' : 'Commercial Coordination'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {language === 'fa'
                ? 'تسهیل مکاتبات به زبان انگلیسی، شفاف‌سازی شرایط قیمت‌گذاری FOB یا CFR و ترم‌های قانونی قرارداد.'
                : 'Managing correspondence, Incoterms pricing terms (FOB/CFR), and transparent contract clauses.'}
            </p>
          </div>
        </div>
      </div>

      {/* Trust Callout */}
      <div className="bg-slate-100/70 p-6 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-[#0F8B8D] shrink-0" />
          <div className="text-xs text-slate-700 leading-relaxed">
            <span className="font-bold text-[#071D35]">
              {language === 'fa' ? 'تضمین بی‌طرفی و استانداردهای کیفی:' : 'Commercial Due Diligence Standards:'}
            </span>{' '}
            {language === 'fa'
              ? 'نیلای ترید واسطه نامعتبر نیست؛ ما ساختار سورسینگ شفاف را همراه با گزارش‌های ممیزی تامین‌کننده در اختیار خریدار قرار می‌دهیم.'
              : 'Nilay Trade operates as a structured trade facilitation desk, supplying complete supplier audit reports with direct factory pricing.'}
          </div>
        </div>
      </div>

      {/* DEDICATED SOURCING REQUEST FORM */}
      <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm max-w-4xl mx-auto">
        <div className="max-w-2xl mx-auto text-center space-y-2 mb-8">
          <div className="text-xs font-semibold text-[#0F8B8D] uppercase tracking-wider">
            {language === 'fa' ? 'درخواست سورسینگ B2B' : 'B2B Sourcing Request'}
          </div>
          <h2 className="text-2xl font-bold text-[#071D35]">
            {t.buyersPage.formTitle}
          </h2>
          <p className="text-xs text-slate-600">
            {t.buyersPage.formSubtitle}
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-12 space-y-4 animate-in fade-in">
            <CheckCircle className="w-14 h-14 text-[#0F8B8D] mx-auto" />
            <h3 className="text-xl font-bold text-[#071D35]">
              {language === 'fa' ? 'درخواست تامین کالا با موفقیت ثبت شد' : 'Sourcing Request Received'}
            </h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              {language === 'fa'
                ? 'دپارتمان سورسینگ نیلای ترید بررسی ظرفیت تولیدکنندگان و استعلام قیمت را آغاز نموده و حداکثر ظرف ۴۸ ساعت کاری با گزینه‌های مستند با شما تماس خواهد گرفت.'
                : 'Our commercial sourcing desk has logged your procurement criteria. We will compile supplier capabilities and respond within 48 business hours.'}
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={() => setSubmitted(false)}
                className="px-5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
              >
                {language === 'fa' ? 'ثبت درخواست جدید' : 'Submit Another Inquiry'}
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
                  {language === 'fa' ? 'نام شرکت بازرگانی / خریدار *' : 'Company / Buying Organization *'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50"
                  placeholder={language === 'fa' ? 'مثال: Gulf Commodities Trading' : 'e.g. Al-Mansoor Trading FZE'}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === 'fa' ? 'کشور مقر شرکت *' : 'Country of Incorporation *'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50"
                  placeholder={language === 'fa' ? 'امارات، عمان، آلمان، روسیه و...' : 'e.g. UAE, Oman, Germany, Russia'}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === 'fa' ? 'کالای مورد تقاضا (همراه با کد HS در صورت اطلاع) *' : 'Product Required (with HS Code if known) *'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.productRequired}
                  onChange={(e) => setFormData({ ...formData, productRequired: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50"
                  placeholder={language === 'fa' ? 'مثال: زعفران نگین / سنگ تراورتن / پلی‌اتیلن' : 'e.g. Super Negin Saffron / Travertine Stone / HDPE'}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === 'fa' ? 'حجم یا تناژ مورد نیاز' : 'Required Volume / Frequency'}
                </label>
                <input
                  type="text"
                  value={formData.requiredQuantity}
                  onChange={(e) => setFormData({ ...formData, requiredQuantity: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50"
                  placeholder={language === 'fa' ? 'مثال: محموله آزمایشی ۱ کانتینر / ۵۰۰ کیلوگرم' : 'e.g. Trial 1x20ft Container or Monthly 50 Tons'}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === 'fa' ? 'مشخصات فنی و گریدهای کیفی مورد نظر' : 'Technical Specifications & Required Grades'}
                </label>
                <input
                  type="text"
                  value={formData.specifications}
                  onChange={(e) => setFormData({ ...formData, specifications: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50"
                  placeholder={language === 'fa' ? 'درصد خلوص، ابعاد، رطوبت، رنگ و...' : 'Purity, mesh size, dimensions, moisture limit'}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === 'fa' ? 'قیمت هدف یا بودجه تخمینی (اختیاری)' : 'Target Price if Applicable (Optional)'}
                </label>
                <input
                  type="text"
                  value={formData.targetPrice}
                  onChange={(e) => setFormData({ ...formData, targetPrice: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50"
                  dir="ltr"
                  placeholder="e.g. USD / Metric Ton (FOB Bandar Abbas)"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === 'fa' ? 'گواهی‌نامه‌ها و استانداردهای الزامی مقصد' : 'Required Certifications & Standards'}
                </label>
                <input
                  type="text"
                  value={formData.requiredCertifications}
                  onChange={(e) => setFormData({ ...formData, requiredCertifications: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50"
                  placeholder={language === 'fa' ? 'حلال، ISO 22000، CE، COA یا...' : 'e.g. Halal, ISO, Phytosanitary, COA, SGS'}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === 'fa' ? 'بندر یا مقصد نهایی تحویل کالا' : 'Discharge Port or Final Delivery Destination'}
                </label>
                <input
                  type="text"
                  value={formData.deliveryDestination}
                  onChange={(e) => setFormData({ ...formData, deliveryDestination: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50"
                  placeholder={language === 'fa' ? 'مثال: بندر جبل‌علی / بندرعباس FOB / هامبورگ' : 'e.g. Jebel Ali Port, Mersin, or FOB Bandar Abbas'}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === 'fa' ? 'ایمیل سازمانی رسمی *' : 'Corporate Email Address *'}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50"
                  dir="ltr"
                  placeholder="procurement@company.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === 'fa' ? 'شماره تماس مستقیم / واتساپ *' : 'Direct Phone / WhatsApp *'}
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phoneOrWhatsApp}
                  onChange={(e) => setFormData({ ...formData, phoneOrWhatsApp: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50"
                  dir="ltr"
                  placeholder="+971 50 000 0000"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {language === 'fa' ? 'توضیحات تکمیلی یا شرایط پرداخت ترجیحی' : 'Additional Information or Preferred Payment Framework'}
              </label>
              <textarea
                rows={3}
                value={formData.additionalInfo}
                onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50"
                placeholder={
                  language === 'fa'
                    ? 'الزامات بسته‌بندی، زمان تحویل مدنظر یا هرگونه نکته لازم را بیان کنید.'
                    : 'Packaging format, inspection preferences, or specific timeline constraints.'
                }
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">
                {language === 'fa' ? 'پاسخگویی به زبان‌های انگلیسی و عربی.' : 'Multilingual support in English, Persian & Arabic.'}
              </span>
              <button
                type="submit"
                className="px-6 py-3 bg-[#0F8B8D] hover:bg-[#14a3a6] text-white text-xs font-semibold rounded-md transition-all shadow flex items-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{language === 'fa' ? 'ارسال درخواست سورسینگ' : 'Submit Sourcing Request'}</span>
              </button>
            </div>
          </form>
        )}
      </div>

    </div>
  );
};
