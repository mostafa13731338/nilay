import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/siteConfig';
import { NilayLogo } from './NilayLogo';
import { Globe, Menu, X, ChevronDown, Download } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onRequestConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onRequestConsultation,
}) => {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const mainNavItems = [
    { id: 'home', label: t.nav.home },
    { id: 'services', label: t.nav.services },
    { id: 'producers', label: t.nav.producers },
    { id: 'buyers', label: t.nav.buyers },
    { id: 'intelligence', label: t.nav.intelligence },
    { id: 'sectors', label: t.nav.sectors },
  ];

  const secondaryNavItems = [
    { id: 'howWeWork', label: t.nav.howWeWork },
    { id: 'about', label: t.nav.about },
    { id: 'insights', label: t.nav.insights },
    { id: 'caseStudies', label: t.nav.caseStudies },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Single clean text element wordmark */}
        <div className="flex items-center">
          <button
            onClick={() => handleNavClick('home')}
            className="text-left cursor-pointer group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F8B8D]"
          >
            <NilayLogo size="md" showText={true} variant="dark" />
          </button>
        </div>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
          {mainNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`whitespace-nowrap transition-colors py-1 cursor-pointer hover:text-[#0F8B8D] relative ${
                activeTab === item.id
                  ? 'text-[#0F8B8D] font-semibold'
                  : 'text-slate-600'
              }`}
            >
              {item.label}
              {activeTab === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0F8B8D] rounded-full" />
              )}
            </button>
          ))}

          {/* More Dropdown for tidy top bar */}
          <div className="relative">
            <button
              onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
              className="flex items-center gap-1 py-1 text-slate-600 hover:text-[#0F8B8D] transition-colors cursor-pointer"
            >
              <span>{t.nav.more}</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {moreDropdownOpen && (
              <div 
                className="absolute top-full mt-2 w-48 bg-white border border-slate-200 rounded-lg shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-1"
                onMouseLeave={() => setMoreDropdownOpen(false)}
              >
                {secondaryNavItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-start px-4 py-2 text-xs transition-colors hover:bg-slate-50 cursor-pointer ${
                      activeTab === item.id ? 'text-[#0F8B8D] font-semibold bg-slate-50' : 'text-slate-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-[#071D35] bg-slate-100 hover:bg-slate-200/80 rounded-md transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0F8B8D]"
            title={language === 'fa' ? 'Switch to English' : 'تغییر زبان به فارسی'}
          >
            <Globe className="w-3.5 h-3.5 text-[#0F8B8D]" />
            <span>{t.nav.switchLanguage}</span>
          </button>

          {/* Direct Download ZIP Link */}
          <a
            href="/nilay-trade.zip"
            download="nilay-trade.zip"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#0F8B8D] hover:text-white bg-[#0F8B8D]/10 hover:bg-[#0F8B8D] border border-[#0F8B8D]/30 rounded-md transition-all whitespace-nowrap"
            title={language === 'fa' ? 'دانلود فایل زیپ کامل پروژه' : 'Download Full Project ZIP'}
          >
            <Download className="w-3.5 h-3.5" />
            <span>{language === 'fa' ? 'دانلود فایل زیپ' : 'Download ZIP'}</span>
          </a>

          {/* Primary CTA */}
          <button
            onClick={onRequestConsultation}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#071D35] hover:bg-[#0d2a4c] rounded-md transition-all shadow-sm hover:shadow hover:ring-1 hover:ring-[#0F8B8D] cursor-pointer whitespace-nowrap"
          >
            {t.nav.requestConsultation}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F8B8D] cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-1 shadow-xl">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 py-1">
            {language === 'fa' ? 'بخش‌های اصلی' : 'Main Navigation'}
          </div>
          {mainNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-start px-3 py-2.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                activeTab === item.id
                  ? 'bg-slate-100 text-[#0F8B8D] font-bold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="pt-2 border-t border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 py-1">
            {language === 'fa' ? 'اطلاعات بیشتر' : 'Company & Insights'}
          </div>
          {secondaryNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-start px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                activeTab === item.id
                  ? 'bg-slate-100 text-[#0F8B8D] font-bold'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="pt-4 px-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestConsultation();
              }}
              className="w-full py-3 text-center text-sm font-semibold text-white bg-[#071D35] rounded-md shadow hover:bg-[#0d2a4c]"
            >
              {t.nav.requestConsultation}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
