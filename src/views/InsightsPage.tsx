import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { articlesData, B2BArticle } from '../data/articlesData';
import { Search, BookOpen, Clock, Calendar, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface InsightsPageProps {
  onRequestConsultation: (topic?: string) => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ onRequestConsultation }) => {
  const { language, dir, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [readingArticle, setReadingArticle] = useState<B2BArticle | null>(null);

  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const categories = [
    { id: 'all', label: language === 'fa' ? 'تمام مقالات' : 'All Articles' },
    { id: 'Buyer Identification', label: language === 'fa' ? 'شناسایی خریدار' : 'Buyer Identification' },
    { id: 'Export', label: language === 'fa' ? 'توسعه صادرات' : 'Export Strategy' },
    { id: 'Market Research', label: language === 'fa' ? 'پژوهش بازار' : 'Market Research' },
  ];

  const filteredArticles = articlesData.filter((art) => {
    const matchesCat = activeCategory === 'all' || art.category === activeCategory;
    const title = language === 'fa' ? art.title.fa : art.title.en;
    const excerpt = language === 'fa' ? art.excerpt.fa : art.excerpt.en;
    const matchesSearch =
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-semibold text-[#0F8B8D] uppercase tracking-wider">
          {language === 'fa' ? 'پایگاه دانش و تحلیل‌های B2B' : 'B2B Trade Knowledge Center'}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#071D35]">
          {language === 'fa' ? 'راهنماها و آموزه‌های تخصصی صادرات' : 'Trade Intelligence & Export Insights'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          {language === 'fa'
            ? 'مجموعه‌ای از مقالات و راهنماهای تجاری برای مدیران بازرگانی، تولیدکنندگان و کارآفرینانی که به دنبال فتح بازارهای بین‌المللی با اتکا به دانش و تحلیل دقیق بازار هستند.'
            : 'Operational frameworks, buyer verification methodologies, and international market entry tactics for export directors and commercial executives.'}
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-2 bg-white rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 text-xs rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#071D35] text-white font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative min-w-[220px]">
          <Search className={`w-3.5 h-3.5 text-slate-400 absolute top-1/2 -translate-y-1/2 ${dir === 'rtl' ? 'right-3' : 'left-3'}`} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'fa' ? 'جستجو در مقالات...' : 'Search articles...'}
            className={`w-full text-xs py-1.5 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-slate-50/50 ${
              dir === 'rtl' ? 'pr-8 pl-3' : 'pl-8 pr-3'
            }`}
          />
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <article
            key={article.id}
            className="bg-white rounded-xl border border-slate-200/90 shadow-sm p-6 flex flex-col justify-between hover:border-[#0F8B8D]/40 transition-all group"
          >
            <div className="space-y-3.5">
              {/* Clean unboxed metadata discipline */}
              <div className="flex items-center gap-2 text-[11px] text-slate-500">
                <span className="font-semibold text-[#0F8B8D]">
                  {language === 'fa' ? article.categoryFa : article.category}
                </span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">
                  {language === 'fa' ? article.readTimeFa : article.readTime}
                </span>
              </div>

              <h2 className="text-base font-bold text-[#071D35] group-hover:text-[#0F8B8D] transition-colors leading-snug">
                {language === 'fa' ? article.title.fa : article.title.en}
              </h2>

              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                {language === 'fa' ? article.excerpt.fa : article.excerpt.en}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
              <div className="text-[11px] text-slate-500">
                {language === 'fa' ? article.author.name.fa : article.author.name.en}
              </div>

              <button
                onClick={() => setReadingArticle(article)}
                className="text-xs font-semibold text-[#071D35] hover:text-[#0F8B8D] flex items-center gap-1 cursor-pointer"
              >
                <span>{language === 'fa' ? 'مطالعه کامل' : 'Read Article'}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* FULL ARTICLE READER MODAL */}
      {readingArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95">
            
            {/* Header */}
            <div className="px-6 py-4 bg-[#071D35] text-white flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2 text-xs text-[#0F8B8D]">
                <span>{language === 'fa' ? readingArticle.categoryFa : readingArticle.category}</span>
                <span aria-hidden="true">·</span>
                <span>{language === 'fa' ? readingArticle.readTimeFa : readingArticle.readTime}</span>
              </div>
              <button
                onClick={() => setReadingArticle(null)}
                className="p-1 text-slate-400 hover:text-white rounded transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Article Content */}
            <div className="p-6 sm:p-10 space-y-6 max-h-[75vh] overflow-y-auto">
              <div className="space-y-2 border-b border-slate-100 pb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#071D35] leading-tight">
                  {language === 'fa' ? readingArticle.title.fa : readingArticle.title.en}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                  {language === 'fa' ? readingArticle.subtitle.fa : readingArticle.subtitle.en}
                </p>
                <div className="text-xs text-slate-400 pt-2 flex items-center gap-3">
                  <span>{language === 'fa' ? readingArticle.author.name.fa : readingArticle.author.name.en} ({language === 'fa' ? readingArticle.author.role.fa : readingArticle.author.role.en})</span>
                  <span>·</span>
                  <span className="tabular-nums">{readingArticle.publishDate}</span>
                </div>
              </div>

              {/* Sections */}
              <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {readingArticle.contentSections.map((sec, idx) => (
                  <div key={idx} className="space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-[#071D35]">
                      {language === 'fa' ? sec.heading.fa : sec.heading.en}
                    </h3>
                    <p className="text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-100">
                      {language === 'fa' ? sec.body.fa : sec.body.en}
                    </p>
                  </div>
                ))}
              </div>

              {/* MANDATORY ARTICLE CTA (from prompt requirement) */}
              <div className="p-6 bg-[#071D35] text-white rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                <div className="space-y-1 text-center sm:text-start">
                  <div className="text-xs font-semibold text-[#0F8B8D]">
                    {language === 'fa' ? 'نیاز به تحلیل اختصاصی برای بازار محصول خود دارید؟' : 'Need a Market-Specific Analysis for Your Product?'}
                  </div>
                  <p className="text-xs text-slate-300">
                    {language === 'fa'
                      ? 'همین حالا یک جلسه مشاوره مقدماتی با متخصصان تجارت نیلای ترید تنظیم کنید.'
                      : 'Schedule a tailored diagnostic consultation with Nilay Trade trade analysts.'}
                  </p>
                </div>
                <button
                  onClick={() => {
                    const topic = readingArticle.title.en;
                    setReadingArticle(null);
                    onRequestConsultation(`Inquiry following article: ${topic}`);
                  }}
                  className="px-5 py-2.5 bg-[#0F8B8D] hover:bg-[#14a3a6] text-white text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer"
                >
                  {t.nav.requestConsultation}
                </button>
              </div>

            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setReadingArticle(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              >
                {language === 'fa' ? 'بستن مقاله' : 'Close Article'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
