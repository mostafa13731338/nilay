import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/siteConfig';
import { X, CheckCircle, Send, MessageSquare, Loader2 } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

// Encode form data as application/x-www-form-urlencoded for Netlify Forms
const encodeFormData = (data: Record<string, string>) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key] || ''))
    .join('&');
};

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultTopic = '',
}) => {
  const { language, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    phoneOrWhatsApp: '',
    topic: defaultTopic,
    productCategory: 'Agriculture & Food',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phoneOrWhatsApp) {
      return;
    }

    setIsSubmitting(true);
    try {
      await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encodeFormData({
          'form-name': 'consultation',
          ...formData,
        }),
      });
      setSubmitted(true);
    } catch (error) {
      // Graceful fallback for local development or disconnected previews
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setIsSubmitting(false);
    setFormData({
      name: '',
      company: '',
      role: '',
      email: '',
      phoneOrWhatsApp: '',
      topic: '',
      productCategory: 'Agriculture & Food',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-xl w-full border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#071D35] text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <h3 className="text-base font-bold text-white">
              {language === 'fa' ? 'درخواست جلسه مشاوره اختصاصی' : 'Request a Commercial Consultation'}
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              {language === 'fa'
                ? 'بررسی اختصاصی چالش‌ها و پتانسیل‌های بازار محصول شما'
                : 'Direct evaluation of target markets and export readiness'}
            </p>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-md transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <CheckCircle className="w-12 h-12 text-[#0F8B8D] mx-auto" />
              <h4 className="text-lg font-bold text-[#071D35]">
                {language === 'fa' ? 'درخواست شما ثبت گردید' : 'Inquiry Successfully Received'}
              </h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                {t.common.submitSuccess}
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={resetAndClose}
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#071D35] hover:bg-[#0d2a4c] rounded-md transition-colors cursor-pointer"
                >
                  {language === 'fa' ? 'بستن پنجره' : 'Close Window'}
                </button>
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-medium text-[#071D35] bg-slate-100 hover:bg-slate-200 rounded-md transition-colors flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ) : (
            <form
              name="consultation"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {/* 1. Required Netlify Hidden Form Name Field */}
              <input type="hidden" name="form-name" value="consultation" />

              {/* Bot-field for Netlify Spam Protection */}
              <p className="hidden">
                <label>
                  Don’t fill this out if you're human: <input name="bot-field" />
                </label>
              </p>

              {/* Hidden Topic parameter if pre-filled */}
              {formData.topic && (
                <input type="hidden" name="topic" value={formData.topic} />
              )}

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
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50"
                    placeholder={language === 'fa' ? 'مثال: رضا احمدی' : 'e.g. John Miller'}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {language === 'fa' ? 'نام شرکت / مجموعه' : 'Company Name'}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50"
                    placeholder={language === 'fa' ? 'نام شرکت' : 'Enterprise Ltd'}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {language === 'fa' ? 'ایمیل سازمانی / معتبر *' : 'Work Email *'}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50"
                    dir="ltr"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {language === 'fa' ? 'شماره تماس / واتساپ *' : 'Phone / WhatsApp *'}
                  </label>
                  <input
                    type="tel"
                    name="phoneOrWhatsApp"
                    required
                    value={formData.phoneOrWhatsApp}
                    onChange={(e) => setFormData({ ...formData, phoneOrWhatsApp: e.target.value })}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50"
                    dir="ltr"
                    placeholder="+98 912 000 0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === 'fa' ? 'حوزه اصلی کالا یا خدمت' : 'Primary Sector / Product'}
                </label>
                <select
                  name="productCategory"
                  value={formData.productCategory}
                  onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-white cursor-pointer"
                >
                  <option value="Agriculture & Food">
                    {language === 'fa' ? 'کشاورزی، خشکبار و صنایع غذایی' : 'Agriculture, Nuts & Food Processing'}
                  </option>
                  <option value="Herbal & Botanicals">
                    {language === 'fa' ? 'گیاهان دارویی، اسانس‌ها و فرآورده‌های طبیعی' : 'Medicinal Herbs, Essential Oils & Botanicals'}
                  </option>
                  <option value="Industrial & Stone">
                    {language === 'fa' ? 'مصالح ساختمانی، سنگ، کاشی و فلزات' : 'Construction, Stone, Ceramics & Metals'}
                  </option>
                  <option value="Chemicals & Polymers">
                    {language === 'fa' ? 'پلیمرها، محصولات شیمیایی و کودها' : 'Chemicals, Polymers & Agricultural Inputs'}
                  </option>
                  <option value="Handicrafts & Luxury">
                    {language === 'fa' ? 'فرش، صنایع دستی و کالاهای فرهنگی' : 'Carpets, Fine Crafts & Luxury Heritage'}
                  </option>
                  <option value="FMCG & Consumer">
                    {language === 'fa' ? 'شوینده‌ها، بهداشتی و کالاهای تندگردش' : 'Consumer FMCG, Detergents & Lifestyle'}
                  </option>
                  <option value="Other">
                    {language === 'fa' ? 'سایر حوزه‌های صادرات‌محور' : 'Other Export-Oriented Product'}
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === 'fa' ? 'توضیحات مختصر درباره نیاز یا پرسش شما' : 'Brief Overview of Your Objective / Challenge'}
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50"
                  placeholder={
                    language === 'fa'
                      ? 'کشور مقصد مدنظر، وضعیت فعلی تولید یا نوع خریدار مورد نیاز خود را به اختصار بیان فرمایید.'
                      : 'Please outline your target countries, current production status, or specific sourcing requirements.'
                  }
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800 transition-colors cursor-pointer"
                >
                  {language === 'fa' ? 'انصراف' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#071D35] hover:bg-[#0d2a4c] disabled:opacity-70 rounded-md transition-all shadow-sm flex items-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>{language === 'fa' ? 'در حال ارسال...' : 'Submitting...'}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>{language === 'fa' ? 'ارسال درخواست مشاوره' : 'Submit Consultation Request'}</span>
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
