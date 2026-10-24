/**
 * Nilay Trade - International Trade & B2B Market Development
 * Clean, production-grade bilingual platform with centralized data structures.
 */

import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ExportReadinessModal } from './components/ExportReadinessModal';


// Views
import { HomePage } from './views/HomePage';
import { ServicesPage } from './views/ServicesPage';
import { ProducersPage } from './views/ProducersPage';
import { BuyersPage } from './views/BuyersPage';
import { MarketIntelligencePage } from './views/MarketIntelligencePage';
import { SectorsPage } from './views/SectorsPage';
import { HowWeWorkPage } from './views/HowWeWorkPage';
import { AboutPage } from './views/AboutPage';
import { InsightsPage } from './views/InsightsPage';
import { CaseStudiesPage } from './views/CaseStudiesPage';
import { ContactPage } from './views/ContactPage';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationTopic, setConsultationTopic] = useState('');
  const [isExportCheckOpen, setIsExportCheckOpen] = useState(false);

  const handleOpenConsultation = (topic?: string) => {
    setConsultationTopic(topic || '');
    setIsConsultationOpen(true);
  };

  const handleOpenExportCheck = () => {
    setIsExportCheckOpen(true);
  };

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#071D35] overflow-x-hidden w-full">
        
        {/* Top Navigation */}
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onRequestConsultation={() => handleOpenConsultation()}
        />

        {/* Main Content Area */}
        <main className="flex-1 overflow-x-hidden w-full">
          {activeTab === 'home' && (
            <HomePage
              setActiveTab={setActiveTab}
              onRequestConsultation={handleOpenConsultation}
              onOpenExportCheck={handleOpenExportCheck}
            />
          )}

          {activeTab === 'services' && (
            <ServicesPage
              onRequestConsultation={handleOpenConsultation}
            />
          )}

          {activeTab === 'producers' && (
            <ProducersPage />
          )}

          {activeTab === 'buyers' && (
            <BuyersPage />
          )}

          {activeTab === 'intelligence' && (
            <MarketIntelligencePage
              onRequestConsultation={handleOpenConsultation}
            />
          )}

          {activeTab === 'sectors' && (
            <SectorsPage
              onRequestConsultation={handleOpenConsultation}
            />
          )}

          {activeTab === 'howWeWork' && (
            <HowWeWorkPage
              onRequestConsultation={handleOpenConsultation}
            />
          )}

          {activeTab === 'about' && (
            <AboutPage
              onRequestConsultation={() => handleOpenConsultation('About Nilay Trade Inquiry')}
            />
          )}

          {activeTab === 'insights' && (
            <InsightsPage
              onRequestConsultation={handleOpenConsultation}
            />
          )}

          {activeTab === 'caseStudies' && (
            <CaseStudiesPage
              onRequestConsultation={handleOpenConsultation}
            />
          )}

          {activeTab === 'contact' && (
            <ContactPage />
          )}
        </main>

        {/* Global Footer */}
        <Footer
          setActiveTab={setActiveTab}
          onRequestConsultation={() => handleOpenConsultation()}
        />

        {/* Global Modals */}
        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
          defaultTopic={consultationTopic}
        />

        <ExportReadinessModal
          isOpen={isExportCheckOpen}
          onClose={() => setIsExportCheckOpen(false)}
          onOpenConsultation={() => handleOpenConsultation('Export Readiness Assessment Follow-up')}
        />



      </div>
    </LanguageProvider>
  );
}
