import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { NilayLogo } from './NilayLogo';
import { Globe, Menu, X, ChevronDown, ArrowRight, ArrowLeft } from 'lucide-react';

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
  const { language, toggleLanguage, dir, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-colors w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4 w-full">
        
        {/* Zone 1: Brand Wordmark & Emblem */}
        <div className="flex items-center shrink-0">
          <button
            onClick={() => handleNavClick('home')}
            className="text-left cursor-pointer group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F8B8D] rounded-lg"
          >
            <NilayLogo size="md" showText={true} variant="dark" />
          </button>
        </div>

        {/* Zone 2: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm font-medium text-slate-700">
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

        {/* Zone 3: Actions & Mobile Hamburger */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-[#071D35] bg-slate-100 hover:bg-slate-200/80 rounded-md transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0F8B8D] shrink-0"
            title={language === 'fa' ? 'Switch to English' : 'تغییر زبان به فارسی'}
          >
            <Globe className="w-3.5 h-3.5 text-[#0F8B8D] shrink-0" />
            <span className="text-[11px] sm:text-xs font-medium">{t.nav.switchLanguage}</span>
          </button>

          {/* Primary Consultation CTA (Visible on tablet & desktop, clean in drawer on mobile) */}
          <button
            onClick={onRequestConsultation}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#071D35] hover:bg-[#0d2a4c] rounded-md transition-all shadow-sm hover:shadow hover:ring-1 hover:ring-[#0F8B8D] cursor-pointer whitespace-nowrap shrink-0"
          >
            {t.nav.requestConsultation}
          </button>

          {/* Mobile Menu Toggle Button ☰ */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 text-slate-700 hover:text-[#0F8B8D] hover:bg-slate-100 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F8B8D] cursor-pointer shrink-0 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu (Responsive, full height options, no overflow) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-2 max-h-[85vh] overflow-y-auto">
          
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-2">
            {language === 'fa' ? 'بخش‌های اصلی' : 'Main Navigation'}
          </div>
          
          <div className="space-y-1">
            {mainNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-start px-3 py-2.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center justify-between ${
                  activeTab === item.id
                    ? 'bg-[#0F8B8D]/10 text-[#0F8B8D]'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                {activeTab === item.id && <ArrowIcon className="w-3.5 h-3.5 text-[#0F8B8D]" />}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-2 mb-1">
              {language === 'fa' ? 'سایر صفحات' : 'Company & Insights'}
            </div>
            <div className="space-y-1">
              {secondaryNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-start px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center justify-between ${
                    activeTab === item.id
                      ? 'bg-[#0F8B8D]/10 text-[#0F8B8D] font-semibold'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {activeTab === item.id && <ArrowIcon className="w-3.5 h-3.5 text-[#0F8B8D]" />}
                </button>
              ))}
            </div>
          </div>

          {/* Primary Mobile CTA inside Drawer */}
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestConsultation();
              }}
              className="w-full py-3 px-4 text-center text-xs font-bold text-white bg-[#071D35] hover:bg-[#0d2a4c] rounded-lg shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t.nav.requestConsultation}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}
    </header>
  );
};
