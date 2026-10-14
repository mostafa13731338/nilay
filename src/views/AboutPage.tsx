import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/siteConfig';
import { ShieldCheck, Target, HeartHandshake, Award, FileSearch, Globe2, ArrowRight, ArrowLeft } from 'lucide-react';

interface AboutPageProps {
  onRequestConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onRequestConsultation }) => {
  const { language, dir, t } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
      
      {/* Header Narrative */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-semibold text-[#0F8B8D] uppercase tracking-wider">
          {language === 'fa' ? 'درباره نیلای ترید' : 'About Nilay Trade'}
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#071D35] leading-tight text-balance">
          {language === 'fa'
            ? 'توسعه ساختاریافته صادرات و ایجاد ارتباط معتبر تجاری'
            : 'Structured International Trade & B2B Market Development'}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed font-normal">
          {language === 'fa'
            ? 'نیلای ترید یک شرکت تخصصی توسعه بازار و تجارت بین‌الملل است که با هدف ارتقای جایگاه صادراتی کسب‌وکارهای توانمند ایرانی و اتصال نظام‌مند آنان به خریداران پایدار خارجی پایه‌گذاری شده است.'
            : 'Nilay Trade is an international trade development enterprise dedicated to elevating the export capabilities of Iranian producers and establishing structured B2B connectivity with global buyers.'}
        </p>
      </div>

      {/* Core Narrative / Philosophy Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-5 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            {language === 'fa'
              ? 'صادرات در دنیای امروز دیگر با روش‌های سنتی بازرگانی، تکیه بر واسطه‌های ناشناس و ارسال نمونه‌های پراکنده ممکن نیست. خریداران بین‌المللی انتظار دارند استانداردهای دقیق فنی، برگه‌های آنالیز معتبر، قیمت‌گذاری شفاف بر مبنای اینکوترمز و مکاتبات سریع و حرفه‌ای به زبان خود دریافت کنند.'
              : 'Contemporary cross-border commerce can no longer rely on informal brokering or sporadic sample dispatches. Global corporate buyers expect rigorous technical datasheets, accredited lab assays, Incoterms-grounded pricing models, and disciplined commercial communication.'}
          </p>

          <p>
            {language === 'fa'
              ? 'نیلای ترید بر این باور بنیادین استوار است که «پژوهش باید بر اقدام مقدم باشد». ما پیش از پیشنهاد هر بازار یا معرفی هر خریدار، جریان‌های واردات، موانع تعرفه‌ای، استانداردهای الزامی و رقبای منطقه‌ای را موشکافانه تحلیل می‌کنیم تا سرمایه و زمان تولیدکننده در مسیر درست قرار گیرد.'
              : 'At Nilay Trade, our foundational axiom is "Research Before Action". Prior to recommending any geographical market or initiating buyer outreach, we audit import volumes, non-tariff trade barriers, and competing supply lines to safeguard our partners’ resources.'}
          </p>

          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-xl border border-slate-200/90 space-y-1.5 shadow-sm">
              <div className="text-xs font-bold text-[#071D35] flex items-center gap-1.5">
                <FileSearch className="w-4 h-4 text-[#0F8B8D]" />
                <span>{language === 'fa' ? 'پژوهش‌محور و داده‌بنیان' : 'Empirical & Data-Driven'}</span>
              </div>
              <p className="text-xs text-slate-500">
                {language === 'fa' ? 'تصمیم‌گیری بر اساس آمارهای واقعی گمرکی و کشش بازار' : 'Grounded in customs filings and verified trade flows'}
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200/90 space-y-1.5 shadow-sm">
              <div className="text-xs font-bold text-[#071D35] flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-[#0F8B8D]" />
                <span>{language === 'fa' ? 'روابط بلندمدت B2B' : 'Sustainable Partnerships'}</span>
              </div>
              <p className="text-xs text-slate-500">
                {language === 'fa' ? 'تمرکز بر سفارشات تکرارشونده به جای تک‌معامله‌های مقطعی' : 'Cultivating recurring supply streams rather than spot trades'}
              </p>
            </div>
          </div>
        </div>

        {/* Visual asset */}
        <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[4/3]">
          <img
            src="/src/assets/images/founder_workspace_1791182681727.jpg"
            alt="Nilay Trade consulting and strategic boardroom environment"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071D35]/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
            <span className="font-semibold">{siteConfig.companyName.en}</span> · {language === 'fa' ? 'دپارتمان راهبردی تجارت بین‌الملل' : 'International Trade Strategy Desk'}
          </div>
        </div>
      </div>

      {/* FOUNDER SECTION (Mostafa Khademi) */}
      <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 shadow-sm">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold text-[#0F8B8D] uppercase tracking-wider">
            {language === 'fa' ? 'بنیان‌گذار و رهبری' : 'Founder & Leadership'}
          </div>
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-[#071D35]">
              {language === 'fa' ? siteConfig.founder.name.fa : siteConfig.founder.name.en}
            </h2>
            <div className="text-xs font-semibold text-[#0F8B8D]">
              {language === 'fa' ? siteConfig.founder.title.fa : siteConfig.founder.title.en} — {siteConfig.companyName.en}
            </div>
          </div>

          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-2 border-t border-slate-100 space-y-3">
            <p>
              {language === 'fa' ? siteConfig.founder.bio.fa : siteConfig.founder.bio.en}
            </p>
          </div>

          <div className="pt-4 flex items-center gap-4 text-xs text-slate-600">
            <ShieldCheck className="w-4 h-4 text-[#0F8B8D]" />
            <span>
              {language === 'fa'
                ? 'بیوگرافی و ساختار نیلای ترید متعهد به صداقت و عدم استفاده از ادعاهای ساختگی است.'
                : 'Direct and authentic commercial representation without fabricated credentials.'}
            </span>
          </div>
        </div>
      </div>

      {/* What Nilay Trade is NOT (Crucial Positioning from prompt) */}
      <div className="bg-[#071D35] text-white rounded-2xl p-8 sm:p-10 border border-slate-800 space-y-6">
        <div className="space-y-2">
          <div className="text-xs font-semibold text-[#C9A227] uppercase tracking-wider">
            {language === 'fa' ? 'جایگاه حرفه‌ای ما' : 'Precise Business Positioning'}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            {language === 'fa' ? 'نیلای ترید چه چیزی نیست؟' : 'What Nilay Trade is NOT'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            {language === 'fa'
              ? 'شفافیت در ماموریت، هویت و حد و مرز خدمات ما را تعیین می‌کند:'
              : 'Clarity in our boundaries defines our commitment to high-standard execution:'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1">
            <div className="text-xs font-bold text-white">
              {language === 'fa' ? '❌ فروشگاه خرده‌فروشی نیستیم' : '❌ Not a Retail Store'}
            </div>
            <p className="text-xs text-slate-400">
              {language === 'fa' ? 'ما کالای تکی به مصرف‌کننده نهایی نمی‌فروشیم؛ تمرکز ما بر قراردادهای کانتینری و عمده‌فروشی است.' : 'We do not sell individual consumer items; our focus is container-scale B2B.'}
            </p>
          </div>

          <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1">
            <div className="text-xs font-bold text-white">
              {language === 'fa' ? '❌ دلال و واسطه غیررسمی نیستیم' : '❌ Not an Informal Broker'}
            </div>
            <p className="text-xs text-slate-400">
              {language === 'fa' ? 'ما پنهان‌کاری نمی‌کنیم؛ مسیر ما ارتباط مستقیم، شفاف و قانونی میان خریدار و تولیدکننده است.' : 'We operate transparently, fostering direct verifiable relationships.'}
            </p>
          </div>

          <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1">
            <div className="text-xs font-bold text-white">
              {language === 'fa' ? '❌ صرفاً شرکت باربری نیستیم' : '❌ Not Just a Freight Forwarder'}
            </div>
            <p className="text-xs text-slate-400">
              {language === 'fa' ? 'ما پیش از لجستیک، ارزش را در پژوهش بازار، انتخاب مشتری و استراتژی نفوذ تجاری خلق می‌کنیم.' : 'Our core contribution precedes logistics: market research, buyer qualification, and sales.'}
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onRequestConsultation}
            className="px-6 py-2.5 bg-[#0F8B8D] hover:bg-[#14a3a6] text-white text-xs font-semibold rounded-md transition-colors cursor-pointer"
          >
            {t.nav.requestConsultation}
          </button>
        </div>
      </div>

    </div>
  );
};
