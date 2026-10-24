import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/siteConfig';
import { Mail, Phone, MessageSquare, Instagram, Linkedin, Send, CheckCircle2, ShieldCheck, MapPin, Loader2 } from 'lucide-react';

const encodeFormData = (data: Record<string, string>) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key] || ''))
    .join('&');
};

export const ContactPage: React.FC = () => {
  const { language, dir, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: 'Export Development Inquiry',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }
    setIsSubmitting(true);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData({
          'form-name': 'contact',
          ...formData,
        }),
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-semibold text-[#0F8B8D] uppercase tracking-wider">
          {language === 'fa' ? 'ارتباط مستقیم و هماهنگی تجاری' : 'Direct Channels & Coordination'}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#071D35]">
          {language === 'fa' ? 'تماس با نیلای ترید' : 'Contact Nilay Trade'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          {language === 'fa'
            ? 'جهت بررسی ظرفیت‌های صادراتی، سفارش گزارش‌های اختصاصی تحقیق و تحلیل بازار یا درخواست سورسینگ تامین‌کنندگان ایرانی، با دپارتمان بازرگانی ما در ارتباط باشید.'
            : 'Get in touch with our commercial desk to evaluate export potential, commission tailored trade dossiers, or coordinate Iranian sourcing.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Information & Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
            <h2 className="text-lg font-bold text-[#071D35]">
              {language === 'fa' ? 'کانال‌های رسمی ارتباط' : 'Official Channels'}
            </h2>

            <div className="space-y-4 text-xs">
              
              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0F8B8D]/10 text-[#0F8B8D] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-slate-700">
                    {language === 'fa' ? 'مکاتبات رسمی و ایمیل:' : 'Official Email:'}
                  </div>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-[#0F8B8D] hover:underline block font-mono mt-0.5"
                    dir="ltr"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* Landline Phone */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#071D35]/10 text-[#071D35] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-slate-700">
                    {language === 'fa' ? 'تلفن ثابت دفتر مرکزی:' : 'Head Office Telephone:'}
                  </div>
                  <a
                    href="tel:02155647839"
                    className="text-[#071D35] hover:text-[#0F8B8D] font-mono block mt-0.5 font-semibold"
                    dir="ltr"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              {/* Mobile & Messengers (WhatsApp, Bale, Telegram) */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#0F8B8D] flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="space-y-1.5 w-full">
                  <div className="font-semibold text-slate-700">
                    {language === 'fa' ? 'شماره تماس مستقیم و همراه:' : 'Mobile Direct Line:'}
                  </div>
                  <a
                    href="tel:09108651221"
                    className="text-slate-800 font-mono font-bold block"
                    dir="ltr"
                  >
                    {siteConfig.contact.mobile}
                  </a>
                  
                  {/* Messengers Pills */}
                  <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px]">
                    <a
                      href={siteConfig.contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 rounded-md transition-colors flex items-center gap-1 font-medium"
                    >
                      <span>واتساپ</span>
                      <span className="text-[10px] text-emerald-600 font-mono" dir="ltr">(WhatsApp)</span>
                    </a>

                    <a
                      href={siteConfig.contact.telegramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 bg-sky-50 text-sky-700 hover:bg-sky-100 border border-sky-200 rounded-md transition-colors flex items-center gap-1 font-medium"
                    >
                      <span>تلگرام</span>
                      <span className="text-[10px] text-sky-600 font-mono" dir="ltr">(Telegram)</span>
                    </a>

                    <span
                      className="px-2.5 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-md flex items-center gap-1 font-medium"
                    >
                      <span>پیام‌رسان بله</span>
                      <span className="text-[10px] text-amber-700 font-mono" dir="ltr">(Bale)</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#C9A227] flex items-center justify-center shrink-0">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-slate-700">
                    {language === 'fa' ? 'اینستاگرام رسمی نیلای ترید:' : 'Official Instagram:'}
                  </div>
                  <a
                    href={siteConfig.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C9A227] hover:underline font-mono block mt-0.5"
                    dir="ltr"
                  >
                    {siteConfig.contact.instagramHandle}
                  </a>
                </div>
              </div>

              {/* Office & Region */}
              <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-slate-700">
                    {language === 'fa' ? 'آدرس دفتر مرکزی:' : 'Head Office Address:'}
                  </div>
                  <span className="text-slate-600 block mt-0.5 leading-relaxed text-xs">
                    {language === 'fa' ? siteConfig.contact.officeLocation.fa : siteConfig.contact.officeLocation.en}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Data Authenticity Badge */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-600 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#0F8B8D] shrink-0 mt-0.5" />
            <span>
              {language === 'fa'
                ? 'اطلاعات تماس بالا کاملاً از طریق فایل پیکربندی مرکزی قابل ویرایش و مدیریت است.'
                : 'All corporate contact touchpoints are centralized and editable from a master configuration layer.'}
            </span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="space-y-2 mb-6">
            <h2 className="text-xl font-bold text-[#071D35]">
              {language === 'fa' ? 'ارسال پیام به دپارتمان بازرگانی' : 'Send an Inquiry to Commercial Desk'}
            </h2>
            <p className="text-xs text-slate-500">
              {language === 'fa'
                ? 'پیام شما مستقیماً توسط کارشناسان ارشد تجارت خارجی بررسی و ظرف یک روز کاری پاسخ داده خواهد شد.'
                : 'Your inquiry will be reviewed directly by our senior trade desk and answered within one business day.'}
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12 space-y-4 animate-in fade-in">
              <CheckCircle2 className="w-14 h-14 text-[#0F8B8D] mx-auto" />
              <h3 className="text-xl font-bold text-[#071D35]">
                {language === 'fa' ? 'پیام شما دریافت شد' : 'Message Successfully Transmitted'}
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                {t.common.submitSuccess}
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
                >
                  {language === 'fa' ? 'ارسال پیام جدید' : 'Send Another Message'}
                </button>
              </div>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {language === 'fa' ? 'نام و نام خانوادگی *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50"
                    placeholder={language === 'fa' ? 'نام شما' : 'Your Name'}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {language === 'fa' ? 'نام شرکت / سازمان' : 'Company Name'}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50"
                    placeholder={language === 'fa' ? 'نام شرکت' : 'Enterprise Ltd'}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {language === 'fa' ? 'ایمیل کاری معتبر *' : 'Work Email *'}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50"
                    dir="ltr"
                    placeholder="email@company.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {language === 'fa' ? 'شماره تماس مستقیم / واتساپ' : 'Phone / WhatsApp'}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50"
                    dir="ltr"
                    placeholder="+98 ..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === 'fa' ? 'موضوع پیام' : 'Inquiry Subject'}
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-white cursor-pointer"
                >
                  <option value="Export Development Inquiry">
                    {language === 'fa' ? 'توسعه صادرات برای تولیدکننده ایرانی' : 'Export Expansion for Iranian Producer'}
                  </option>
                  <option value="International Sourcing Request">
                    {language === 'fa' ? 'درخواست سورسینگ کالای ایرانی (خریدار خارجی)' : 'Sourcing Iranian Goods (International Buyer)'}
                  </option>
                  <option value="Market Research Order">
                    {language === 'fa' ? 'سفارش گزارش تحلیلی پژوهش بازار' : 'Market Research & Intelligence Request'}
                  </option>
                  <option value="Strategic Partnership">
                    {language === 'fa' ? 'همکاری استراتژیک و توسعه کسب‌وکار' : 'Commercial Strategic Partnership'}
                  </option>
                  <option value="Other">
                    {language === 'fa' ? 'سایر موارد' : 'General Inquiry'}
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === 'fa' ? 'شرح پیام یا درخواست *' : 'Message Details *'}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50"
                  placeholder={
                    language === 'fa'
                      ? 'لطفاً جزئیات مربوط به محصول، کشور مقصد یا زمینه همکاری را مرقوم فرمایید.'
                      : 'Please specify your product, target country, or commercial objectives.'
                  }
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-[#071D35] hover:bg-[#0d2a4c] disabled:opacity-70 text-white text-xs font-semibold rounded-md transition-all shadow flex items-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>{language === 'fa' ? 'در حال ارسال...' : 'Sending...'}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>{language === 'fa' ? 'ارسال پیام رسمی' : 'Send Message'}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>

    </div>
  );
};
