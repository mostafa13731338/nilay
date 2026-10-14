import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, CheckCircle2, AlertCircle, ArrowRight, ArrowLeft, RefreshCw } from 'lucide-react';

interface ExportReadinessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ExportReadinessModal: React.FC<ExportReadinessModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  const { language, dir } = useLanguage();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  if (!isOpen) return null;

  const questions = [
    {
      id: 0,
      title: {
        fa: "۱. وضعیت کاتالوگ و مستندات فنی محصول شما چگونه است؟",
        en: "1. What is the current status of your technical product documentation?",
      },
      options: [
        {
          score: 1,
          label: {
            fa: "تنها بروشور فارسی عمومی یا صفحه اینستاگرام داریم.",
            en: "We only have standard domestic Persian brochures or social media pages.",
          },
        },
        {
          score: 2,
          label: {
            fa: "کاتالوگ انگلیسی ترجمه‌شده داریم، اما برگه مشخصات فنی (TDS) یا آنالیز آزمایشگاهی بین‌المللی آماده نداریم.",
            en: "We have translated catalogs, but lack international Technical Datasheets (TDS) or COAs.",
          },
        },
        {
          score: 3,
          label: {
            fa: "برگه‌های فنی استاندارد (TDS)، نتایج آزمون‌های آزمایشگاهی و کاتالوگ‌های حرفه‌ای به زبان انگلیسی موجود است.",
            en: "Complete technical specification sheets (TDS), laboratory test assays, and professional English collaterals.",
          },
        },
      ],
    },
    {
      id: 1,
      title: {
        fa: "۲. وضعیت بسته‌بندی صادراتی و الزامات حمل‌ونقل چگونه است؟",
        en: "2. How compliant is your packaging for international freight and warehousing?",
      },
      options: [
        {
          score: 1,
          label: {
            fa: "بسته‌بندی فعلی ما همان بسته‌بندی توزیع در بازار داخلی است.",
            en: "Our packaging is identical to the domestic retail format.",
          },
        },
        {
          score: 2,
          label: {
            fa: "جعبه و کارتن مقاوم داریم، اما برچسب چندزبانه یا تست مقاومت پالت و رطوبت را انجام نداده‌ایم.",
            en: "We use sturdy cartons, but have not audited bilingual regulatory labeling or pallet optimization.",
          },
        },
        {
          score: 3,
          label: {
            fa: "بسته‌بندی متناسب با استانداردهای رطوبت، بارکد GS1، پالت یورو یا استاندارد و ضوابط بهداشتی کشور مقصد طراحی شده است.",
            en: "Packaging is engineered for moisture resistance, GS1 barcodes, standard pallet dimensions, and destination compliance.",
          },
        },
      ],
    },
    {
      id: 2,
      title: {
        fa: "۳. آیا بازارهای هدف و کدهای گمرکی (HS Code) محصول خود را ارزیابی کرده‌اید؟",
        en: "3. Have you evaluated target destination markets and applicable HS Code tariffs?",
      },
      options: [
        {
          score: 1,
          label: {
            fa: "خیر، هنوز بازار مشخصی را به صورت علمی تحلیل نکرده‌ایم و به دنبال راهنمایی هستیم.",
            en: "No, we have not scientifically evaluated target destinations yet.",
          },
        },
        {
          score: 2,
          label: {
            fa: "یک یا دو کشور همسایه را مدنظر داریم اما از میزان تعرفه و رقبای منطقه‌ای اطلاع دقیقی نداریم.",
            en: "We have one or two regional countries in mind, but lack precise tariff and competitor intelligence.",
          },
        },
        {
          score: 3,
          label: {
            fa: "کد HS هشت رقمی کالا، مقررات وارداتی و تعرفه‌های کشور مقصد را استخراج و بررسی نموده‌ایم.",
            en: "Exact 8-digit HS Code, customs duties, non-tariff barriers, and destination standards are thoroughly reviewed.",
          },
        },
      ],
    },
    {
      id: 3,
      title: {
        fa: "۴. آمادگی سازمان شما برای پاسخگویی به استعلام‌ها و قیمت‌گذاری بر مبنای اینکوترمز چقدر است؟",
        en: "4. How prepared is your commercial team to handle international RFQs under Incoterms?",
      },
      options: [
        {
          score: 1,
          label: {
            fa: "آشنایی محدودی با ترم‌های اینکوترمز (FOB, CFR, CIF) و صدور پیش‌فاکتور رسمی ارزی داریم.",
            en: "Limited familiarity with Incoterms (FOB, CFR, CIF) and formal foreign currency proforma drafting.",
          },
        },
        {
          score: 2,
          label: {
            fa: "می‌توانیم قیمت FOB در بنادر ایران ارائه دهیم، اما در مکاتبات روان انگلیسی یا پیگیری‌های منظم ضعف داریم.",
            en: "We can provide FOB pricing at Iranian ports, but struggle with fast English correspondence and follow-ups.",
          },
        },
        {
          score: 3,
          label: {
            fa: "دپارتمان بازرگانی ما توانایی ارائه قیمت‌های دقیق FOB و CFR به همراه پیش‌فاکتور رسمی و پیگیری مستمر را دارد.",
            en: "Our commercial desk handles multi-term pricing (FOB/CFR), formal international proformas, and disciplined follow-up.",
          },
        },
      ],
    },
  ];

  const handleSelectOption = (score: number) => {
    const updated = { ...answers, [step]: score };
    setAnswers(updated);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResults(true);
    }
  };

  const totalScore = Object.values(answers).reduce((acc, val) => acc + val, 0);

  const reset = () => {
    setStep(0);
    setAnswers({});
    setShowResults(false);
  };

  const getResultAssessment = () => {
    if (totalScore <= 6) {
      return {
        level: language === 'fa' ? 'نیازمند استانداردسازی بنیادین' : 'Foundation Building Needed',
        color: 'text-amber-700 bg-amber-50 border-amber-200',
        recommendation:
          language === 'fa'
            ? 'پیشنهاد می‌شود پیش از هرگونه هزینه بازاریابی میدانی، روی تهیه شناسنامه فنی محصول (TDS)، اصلاح زبان کاتالوگ و پژوهش اولیه بازار مقصد تمرکز کنید. نیلای ترید می‌تواند در تنظیم اسناد استاندارد به شما یاری رساند.'
            : 'Focus on structuring standard technical datasheets (TDS), upgrading product collaterals, and conducting empirical market selection prior to external outreach. Nilay Trade can support building these foundational assets.',
      };
    } else if (totalScore <= 9) {
      return {
        level: language === 'fa' ? 'آمادگی متوسط - نیازمند توسعه بازار هدفمند' : 'Moderate Readiness - Targeted Outreach Required',
        color: 'text-teal-700 bg-teal-50 border-teal-200',
        recommendation:
          language === 'fa'
            ? 'پایه و کیفیت مناسبی دارید، اما نیازمند شناسایی دقیق خریداران راستی‌آزمایی‌شده، تنظیم قیمت‌گذاری دقیق اینکوترمز و رفع موانع بسته‌بندی در کشور مقصد هستید. مرحله بعدی شما اعتبارسنجی خریداران است.'
            : 'You possess solid fundamental capabilities, but require verified buyer identification, Incoterms pricing models, and destination packaging alignment to convert leads into recurring trade streams.',
      };
    } else {
      return {
        level: language === 'fa' ? 'آمادگی بالا برای توسعه بازارهای صادراتی' : 'High Commercial Export Readiness',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
        recommendation:
          language === 'fa'
            ? 'محصول و ساختار شما از آمادگی بسیار مطلوبی برخوردار است. اولویت فوری شما برقراری ارتباط مستقیم با مدیران خرید و شبکه‌های توزیع بومی در بازارهای اولویت‌بندی‌شده و انعقاد قراردادهای پایدار است.'
            : 'Your enterprise demonstrates advanced structural readiness. The immediate priority is targeted introductions to procurement directors, participating in structured B2B negotiations, and securing sustainable distributor agreements.',
      };
    }
  };

  const currentAssessment = getResultAssessment();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-xl w-full border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#071D35] text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="text-[11px] font-semibold text-[#0F8B8D] uppercase tracking-wider">
              {language === 'fa' ? 'ابزار ارزیابی خودکار' : 'Preliminary Diagnostic Tool'}
            </div>
            <h3 className="text-base font-bold text-white mt-0.5">
              {language === 'fa' ? 'سنجش مقدماتی آمادگی صادراتی' : 'Preliminary Export Readiness Assessment'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-md transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!showResults ? (
            <div>
              {/* Progress indicator */}
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span>
                  {language === 'fa' ? `پرسش ${step + 1} از ${questions.length}` : `Question ${step + 1} of ${questions.length}`}
                </span>
                <span className="font-semibold text-[#0F8B8D]">
                  {Math.round(((step + 1) / questions.length) * 100)}%
                </span>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-6">
                <div
                  className="bg-[#0F8B8D] h-full transition-all duration-300"
                  style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                />
              </div>

              {/* Question */}
              <h4 className="text-sm md:text-base font-bold text-[#071D35] mb-4 leading-snug">
                {language === 'fa' ? questions[step].title.fa : questions[step].title.en}
              </h4>

              {/* Options */}
              <div className="space-y-3">
                {questions[step].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.score)}
                    className="w-full text-start p-3.5 rounded-lg border border-slate-200 hover:border-[#0F8B8D] hover:bg-slate-50/80 transition-all text-xs text-slate-700 font-medium cursor-pointer flex items-center justify-between gap-3 group"
                  >
                    <span>{language === 'fa' ? opt.label.fa : opt.label.en}</span>
                    <span className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-[#0F8B8D] flex items-center justify-center shrink-0">
                      <span className="w-2 h-2 rounded-full group-hover:bg-[#0F8B8D]" />
                    </span>
                  </button>
                ))}
              </div>

              {/* Navigation Back */}
              {step > 0 && (
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-start">
                  <button
                    onClick={() => setStep(step - 1)}
                    className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                  >
                    {dir === 'rtl' ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
                    <span>{language === 'fa' ? 'پرسش قبلی' : 'Previous Question'}</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-5 animate-in fade-in">
              <div className="text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-[#0F8B8D] mx-auto" />
                <h4 className="text-base font-bold text-[#071D35]">
                  {language === 'fa' ? 'نتیجه سنجش مقدماتی آمادگی' : 'Assessment Summary'}
                </h4>
                <div className="inline-block px-3 py-1 rounded-md text-xs font-semibold border mt-1">
                  {currentAssessment.level}
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs text-slate-700 leading-relaxed">
                <div className="font-semibold text-[#071D35] mb-1">
                  {language === 'fa' ? 'تحلیل و توصیه اولیه کارشناسی:' : 'Diagnostic Guidance:'}
                </div>
                <p>{currentAssessment.recommendation}</p>
              </div>

              {/* Transparency Notice */}
              <div className="flex items-start gap-2 p-3 bg-amber-50/60 rounded-md border border-amber-200/60 text-[11px] text-amber-900 leading-normal">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>
                  {language === 'fa'
                    ? 'این ابزار یک راهنمای اولیه تحلیلی است و بر مبنای خوداظهاری کار می‌کند. جهت ممیزی فنی و میدانی عمیق محصولات، هماهنگی با کارشناسان نیلای ترید پیشنهاد می‌شود.'
                    : 'This tool provides automated preliminary guidance based on self-reported inputs. For verified on-site technical audits and empirical market mapping, consultation with Nilay Trade specialists is recommended.'}
                </span>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={reset}
                  className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>{language === 'fa' ? 'شروع مجدد سنجش' : 'Retake Assessment'}</span>
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onOpenConsultation();
                  }}
                  className="w-full sm:w-auto px-5 py-2 text-xs font-semibold text-white bg-[#071D35] hover:bg-[#0d2a4c] rounded-md transition-all shadow-sm cursor-pointer whitespace-nowrap"
                >
                  {language === 'fa' ? 'درخواست مشاوره بر مبنای این نتیجه' : 'Discuss Results in Consultation'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
