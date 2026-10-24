import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/siteConfig';
import { NilayLogo } from './NilayLogo';
import { Mail, Phone, MessageSquare, Instagram, Linkedin, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onRequestConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onRequestConsultation }) => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-[#071D35] text-white border-t border-slate-800">
      {/* Pre-footer Callout */}
      <div className="border-b border-slate-800/80 bg-[#041222]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-start">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">
              {t.common.contactLeadTitle}
            </h3>
            <p className="text-slate-400 text-sm max-w-xl">
              {t.common.contactLeadDesc}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onRequestConsultation}
              className="px-5 py-2.5 bg-[#0F8B8D] hover:bg-[#14a3a6] text-white text-xs font-semibold rounded-md transition-all shadow-md cursor-pointer whitespace-nowrap"
            >
              {t.nav.requestConsultation}
            </button>
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-md transition-all border border-slate-700/80 flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span>{t.common.quickWhatsApp}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <NilayLogo size="md" showText={true} variant="light" />
            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              {language === 'fa'
                ? "نیلای ترید یک شرکت تخصصی توسعه تجارت بین‌الملل و بازاریابی B2B است که با اتکا به تحقیق و تحلیل بازار، بررسی داده‌های واقعی و ارتباطات حرفه‌ای، تولیدکنندگان توانمند ایرانی را به خریداران پایدار جهانی پیوند می‌دهد."
                : "Nilay Trade is an international trade development and B2B marketing enterprise connecting verified Iranian manufacturers to sustainable global buyers through empirical market research and structured commercial correspondence."}
            </p>

            {/* Credible Data Statement */}
            <div className="pt-2 flex items-start gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#0F8B8D] shrink-0 mt-0.5" />
              <span>
                {language === 'fa'
                  ? "تعهد به شفافیت تجاری: نیلای ترید از انتشار آمار ساختگی و ادعاهای نامستند پرهیز می‌کند."
                  : "Commitment to Data Integrity: Nilay Trade strictly abstains from fabricated metrics or unverified market claims."}
              </span>
            </div>
          </div>

          {/* Core Navigation */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              {language === 'fa' ? 'مسیرهای تجاری' : 'Commercial Pathways'}
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => setActiveTab('producers')}
                  className="hover:text-white transition-colors cursor-pointer text-start"
                >
                  {t.nav.producers}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('buyers')}
                  className="hover:text-white transition-colors cursor-pointer text-start"
                >
                  {t.nav.buyers}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('services')}
                  className="hover:text-white transition-colors cursor-pointer text-start"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('intelligence')}
                  className="hover:text-white transition-colors cursor-pointer text-start"
                >
                  {t.nav.intelligence}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('sectors')}
                  className="hover:text-white transition-colors cursor-pointer text-start"
                >
                  {t.nav.sectors}
                </button>
              </li>
            </ul>
          </div>

          {/* Insights & Method */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              {language === 'fa' ? 'شناخت و دانش' : 'Method & Insights'}
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => setActiveTab('howWeWork')}
                  className="hover:text-white transition-colors cursor-pointer text-start"
                >
                  {t.nav.howWeWork}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('about')}
                  className="hover:text-white transition-colors cursor-pointer text-start"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('insights')}
                  className="hover:text-white transition-colors cursor-pointer text-start"
                >
                  {t.nav.insights}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('caseStudies')}
                  className="hover:text-white transition-colors cursor-pointer text-start"
                >
                  {t.nav.caseStudies}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-start"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              {language === 'fa' ? 'کانال‌های ارتباطی' : 'Direct Channels'}
            </div>
            <div className="space-y-2 text-xs text-slate-400">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#0F8B8D]" />
                <span dir="ltr">{siteConfig.contact.email}</span>
              </a>

              {/* Landline */}
              <a
                href="tel:02155647839"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#0F8B8D]" />
                <span>{language === 'fa' ? 'تلفن ثابت:' : 'Tel:'}</span>
                <span dir="ltr" className="font-mono">{siteConfig.contact.phone}</span>
              </a>

              {/* Mobile & Messengers */}
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>{language === 'fa' ? 'همراه و پیام‌رسان‌ها:' : 'Mobile & Messengers:'}</span>
                <span dir="ltr" className="font-mono text-white font-semibold">{siteConfig.contact.mobile}</span>
              </a>

              {/* Instagram */}
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-[#C9A227]" />
                <span dir="ltr">{siteConfig.contact.instagramHandle}</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>

              {/* Office Address */}
              <div className="pt-2 text-[11px] text-slate-400 leading-relaxed border-t border-slate-800/80">
                <span className="text-slate-300 font-medium block mb-0.5">
                  {language === 'fa' ? 'دفتر مرکزی:' : 'Head Office:'}
                </span>
                {language === 'fa' ? siteConfig.contact.officeLocation.fa : siteConfig.contact.officeLocation.en}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {siteConfig.companyName.en}. {t.common.copyright}
          </div>
          
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span>{language === 'fa' ? 'بنیان‌گذار: مصطفی خادمی' : 'Founder & CEO: Mostafa Khademi'}</span>
            <span>·</span>
            <span>B2B International Trade</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
