import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Compass,
  FileSearch,
  CheckCircle2,
  Users2,
  TrendingUp,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Clock
} from 'lucide-react';

interface HowWeWorkPageProps {
  onRequestConsultation: (stage?: string) => void;
}

export const HowWeWorkPage: React.FC<HowWeWorkPageProps> = ({ onRequestConsultation }) => {
  const { language, dir, t } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const stepsDetail = [
    {
      stepNumber: "01",
      icon: Compass,
      name: {
        fa: "شناخت جامع (Understand)",
        en: "Comprehensive Discovery (Understand)",
      },
      duration: {
        fa: "هفته ۱ تا ۲",
        en: "Weeks 1–2",
      },
      tagline: {
        fa: "درک عمیق محصول، ظرفیت تولید و اهداف سازمان شما",
        en: "In-depth audit of product technical specs, nominal capacity, and corporate objectives.",
      },
      activities: {
        fa: [
          "بررسی و مستندسازی مشخصات فیزیکی، شیمیایی یا فنی محصول",
          "ممیزی گواهی‌نامه‌های کیفیت، مجوزهای بهداشتی و آزمایش‌های آزمایشگاهی موجود",
          "محاسبه ظرفیت تولید مازاد و زمان‌بندی تحویل محموله‌های اولیه",
          "تعیین اهداف درآمدی و کشورهای در اولویت تولیدکننده"
        ],
        en: [
          "Technical audit and formulation documentation of export-grade commodities",
          "Verification of existing quality credentials, sanitary permits, and lab assays",
          "Quantifying surplus production capacity and initial shipment turnaround times",
          "Aligning corporate revenue objectives and preferred geographical corridors"
        ]
      },
      deliverable: {
        fa: "شناسنامه صادراتی اولیه و ماتریس ارزیابی آمادگی سازمانی",
        en: "Export Readiness Dossier & Corporate Capability Baseline",
      }
    },
    {
      stepNumber: "02",
      icon: FileSearch,
      name: {
        fa: "پژوهش موشکافانه (Research)",
        en: "Empirical Intelligence (Research)",
      },
      duration: {
        fa: "هفته ۲ تا ۴",
        en: "Weeks 2–4",
      },
      tagline: {
        fa: "تحلیل داده‌های تقاضای واقعی، حجم واردات، رقبا و فرصت‌های تعرفه‌ای",
        en: "Analyzing real market demand, import volumes, incumbent competitors, and tariff corridors.",
      },
      activities: {
        fa: [
          "استخراج آماری کدهای گمرکی (HS Code) در ۵ مقصد بالقوه صادراتی",
          "ارزیابی رقبا از نظر قیمت، شرایط تحویل (Incoterms) و کیفیت بسته‌بندی",
          "بررسی موانع فنی تجارت (TBT)، الزامات استاندارد و گواهی بازرسی مبدأ",
          "تحلیل کانال‌های پرداخت و راه‌های قانونی تسویه وجوه ارزی"
        ],
        en: [
          "Customs import data analytics across 5 prospective trade jurisdictions",
          "Benchmarking competitors on landed pricing, Incoterms, and packaging ergonomics",
          "Auditing Technical Barriers to Trade (TBT) and mandatory destination inspections",
          "Financial clearing feasibility and legal currency settlement channel review"
        ]
      },
      deliverable: {
        fa: "گزارش جامع پژوهش بازار و تحلیل ریسک‌های تجاری",
        en: "Comprehensive Market Intelligence & Risk Assessment Report",
      }
    },
    {
      stepNumber: "03",
      icon: CheckCircle2,
      name: {
        fa: "انتخاب و اولویت‌بندی (Select)",
        en: "Target Market Prioritization (Select)",
      },
      duration: {
        fa: "هفته ۴ تا ۵",
        en: "Weeks 4–5",
      },
      tagline: {
        fa: "تعیین مناسب‌ترین بازارهای هدف با بیشترین شانس موفقیت و سودآوری",
        en: "Pinpointing the highest-probability foreign destinations with sustainable margin potential.",
      },
      activities: {
        fa: [
          "رتبه‌بندی مقاصد با ماتریس چندمعیاره نیلای ترید بر اساس داده‌های گام قبل",
          "تنظیم مدل قیمت‌گذاری صادراتی FOB، CFR و CIF ویژه مقصد برگزیده",
          "تعیین استراتژی ورود (فروش مستقیم، انتخاب نماینده محلی یا توزیع‌کننده)",
          "طراحی برگه مشخصات فنی (TDS) و مستندات بازاریابی متناسب با فرهنگ مقصد"
        ],
        en: [
          "Scoring destinations using Nilay Trade's multi-factor market priority matrix",
          "Formulating Incoterms pricing models (FOB/CFR/CIF) for prioritized geographies",
          "Selecting entry mode: direct buyer engagement vs regional exclusive distributor",
          "Refining bilingual Technical Datasheets (TDS) and localized marketing presentations"
        ]
      },
      deliverable: {
        fa: "نقشه راه استراتژیک ورود به بازار برگزیده",
        en: "Market Penetration Roadmap & Incoterms Pricing Schedule",
      }
    },
    {
      stepNumber: "04",
      icon: Users2,
      name: {
        fa: "پیوند و مذاکره حرفه‌ای (Connect)",
        en: "Verified B2B Outreach (Connect)",
      },
      duration: {
        fa: "هفته ۵ تا ۸",
        en: "Weeks 5–8",
      },
      tagline: {
        fa: "شناسایی خریداران معتبر، ارسال استعلام‌ها و هدایت مذاکرات تجاری",
        en: "Direct outreach to verified procurement directors and managing commercial discussions.",
      },
      activities: {
        fa: [
          "استخراج و راستی‌آزمایی سوابق قانونی و وارداتی خریداران هدف",
          "مکاتبه رسمی و هدفمند به زبان انگلیسی یا زبان بومی خریدار با ایمیل رسمی سازمانی",
          "پاسخ‌دهی فنی به استعلام‌های خریداران (RFQ) و رفع ابهامات مشخصات",
          "هماهنگی ارسال نمونه تجاری رسمی همراه با نتایج آزمون آزمایشگاهی (COA)"
        ],
        en: [
          "Commercial verification and public customs tracking of candidate buyers",
          "Disciplined corporate correspondence to procurement executives in target language",
          "Technical response management to formal buyer Requests for Quotation (RFQs)",
          "Sample dispatch oversight with compliant international laboratory assays"
        ]
      },
      deliverable: {
        fa: "پرونده خریداران راستی‌آزمایی‌شده و ثبت استعلام‌های رسمی تجاری",
        en: "Qualified Buyer Dossier & Active Commercial Inquiries Log",
      }
    },
    {
      stepNumber: "05",
      icon: TrendingUp,
      name: {
        fa: "توسعه و استقرار پایدار (Develop)",
        en: "Trade Development & Retention (Develop)",
      },
      duration: {
        fa: "مستمر و بلندمدت",
        en: "Ongoing",
      },
      tagline: {
        fa: "پشتیبانی در عقد قرارداد، حل چالش‌های اجرایی و تکرار منظم سفارشات",
        en: "Supporting commercial contracting, troubleshooting logistics nuances, and securing repeat container volume.",
      },
      activities: {
        fa: [
          "همراهی در نگارش بندهای حقوقی پیش‌فاکتور، بازرسی کالا و شرایط فورس‌ماژور",
          "نظارت بر فرآیند بارگیری، بسته‌بندی مقاوم و صدور اسناد گمرکی معتبر",
          "پیگیری رضایت خریدار پس از تخلیه محموله در بندر مقصد",
          "برنامه‌ریزی سفارشات مرحله‌ای جهت ایجاد جریان مستمر درآمد ارزی"
        ],
        en: [
          "Structuring proforma invoice legal terms, inspection milestones, and delivery covenants",
          "Supervising packaging durability, palletizing, and customs document accuracy",
          "Post-delivery quality feedback review and relationship retention stewardship",
          "Scheduling scheduled rolling orders to ensure dependable recurring revenue"
        ]
      },
      deliverable: {
        fa: "قرارداد تجاری پایدار و استقرار خط مستمر صادرات B2B",
        en: "Long-Term Supply Agreement & Active B2B Container Line",
      }
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-semibold text-[#0F8B8D] uppercase tracking-wider">
          {language === 'fa' ? 'متدولوژی استاندارد نیلای ترید' : 'Execution Methodology'}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#071D35]">
          {t.howWeWork.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          {t.howWeWork.subtitle}
        </p>
      </div>

      {/* 5 Steps Interactive Flow */}
      <div className="space-y-8">
        {stepsDetail.map((stepItem, index) => {
          const Icon = stepItem.icon;
          return (
            <div
              key={stepItem.stepNumber}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6 hover:border-[#0F8B8D]/40 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#071D35] text-white flex items-center justify-center font-bold text-lg font-mono shrink-0 shadow">
                    {stepItem.stepNumber}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-[#071D35]">
                      {language === 'fa' ? stepItem.name.fa : stepItem.name.en}
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {language === 'fa' ? stepItem.tagline.fa : stepItem.tagline.en}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto text-xs font-medium text-[#0F8B8D] bg-[#0F8B8D]/10 px-3 py-1.5 rounded-full">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{language === 'fa' ? stepItem.duration.fa : stepItem.duration.en}</span>
                </div>
              </div>

              {/* Activities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(language === 'fa' ? stepItem.activities.fa : stepItem.activities.en).map((act, actIdx) => (
                  <div key={actIdx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F8B8D] shrink-0 mt-1.5" />
                    <span className="leading-relaxed">{act}</span>
                  </div>
                ))}
              </div>

              {/* Deliverable Footer */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="font-bold text-[#071D35]">
                    {language === 'fa' ? 'خروجی ملموس این مرحله: ' : 'Deliverable: '}
                  </span>
                  <span className="text-slate-600">
                    {language === 'fa' ? stepItem.deliverable.fa : stepItem.deliverable.en}
                  </span>
                </div>

                <button
                  onClick={() => onRequestConsultation(stepItem.name.en)}
                  className="text-xs font-semibold text-[#0F8B8D] hover:underline cursor-pointer self-start sm:self-auto"
                >
                  {language === 'fa' ? 'درخواست آغاز از این گام' : 'Inquire About this Stage'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trust Notice */}
      <div className="bg-[#071D35] text-white rounded-2xl p-8 sm:p-10 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#C9A227] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>{language === 'fa' ? 'تعهد به پایداری تجاری' : 'Commercial Integrity'}</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            {language === 'fa' ? 'ما فرآیند صادرات را از یک رویداد تصادفی به یک سیستم منظم تبدیل می‌کنیم.' : 'We transform export from an accidental event into a systematic operation.'}
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            {language === 'fa'
              ? 'هیچ مرحله‌ای بدون تایید داده‌های مرحله قبل آغاز نمی‌شود؛ این تضمین جلوگیری از اتلاف سرمایه شرکت شماست.'
              : 'No stage proceeds without empirical validation of preceding steps, safeguarding your time and capital.'}
          </p>
        </div>

        <button
          onClick={() => onRequestConsultation()}
          className="px-6 py-3 bg-[#0F8B8D] hover:bg-[#14a3a6] text-white text-xs font-semibold rounded-md transition-all shadow cursor-pointer whitespace-nowrap"
        >
          {t.nav.requestConsultation}
        </button>
      </div>

    </div>
  );
};
