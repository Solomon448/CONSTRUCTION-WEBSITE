import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IntroductionSection } from './components/IntroductionSection';
import { InclusionsSection } from './components/InclusionsSection';
import { RecentWorkSection } from './components/RecentWorkSection';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { InclusionsModal } from './components/InclusionsModal';
import { ContactModal } from './components/ContactModal';
import { HouseDesignModal } from './components/HouseDesignModal';
import { AboutModal } from './components/AboutModal';
import { FaqModal } from './components/FaqModal';
import { Chatbot } from './components/Chatbot';

type ActiveModal = 'house-design' | 'inclusions' | 'about' | 'contact' | 'faq' | null;

export default function App() {
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);

  const handleOpenModal = (key: 'house-design' | 'inclusions' | 'about' | 'contact' | 'faq') => {
    setActiveModal(key);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start py-0 md:py-5 lg:py-6 bg-[#123248]">
      {/* FLOATING WHITE ARCHITECTURAL PRESENTATION BOARD */}
      <main className="w-full md:w-[86vw] md:max-w-[1320px] bg-white rounded-none md:rounded-[18px] shadow-2xl flex flex-col justify-between overflow-hidden relative transition-all duration-300">
        
        {/* Top Header & Navigation */}
        <Navbar onOpenModal={handleOpenModal} />

        {/* Hero Section */}
        <HeroSection onOpenContact={() => handleOpenModal('contact')} />

        {/* Asymmetric Editorial Introduction Statement */}
        <IntroductionSection onOpenContact={() => handleOpenModal('contact')} />

        {/* Featured Inclusions Section */}
        <InclusionsSection onOpenInclusions={() => handleOpenModal('inclusions')} />

        {/* Recent Work Masonry Portfolio Section */}
        <RecentWorkSection 
          onOpenHouseDesign={() => handleOpenModal('house-design')}
          onOpenContact={() => handleOpenModal('contact')}
        />

        {/* Google Maps Verified Reviews Section */}
        <GoogleReviewsSection onOpenContact={() => handleOpenModal('contact')} />

        {/* Homepage FAQ Section */}
        <FaqSection 
          onOpenFaq={() => handleOpenModal('faq')}
          onOpenContact={() => handleOpenModal('contact')}
        />

        {/* Minimal Editorial Footer */}
        <Footer onOpenModal={handleOpenModal} />
      </main>

      {/* 24/7 Architectural Chatbot Widget */}
      <Chatbot
        onOpenContact={() => handleOpenModal('contact')}
        onOpenInclusions={() => handleOpenModal('inclusions')}
        onOpenHouseDesign={() => handleOpenModal('house-design')}
      />

      {/* Interactive Modals */}
      <InclusionsModal
        isOpen={activeModal === 'inclusions'}
        onClose={handleCloseModal}
        onOpenContact={() => handleOpenModal('contact')}
      />

      <ContactModal
        isOpen={activeModal === 'contact'}
        onClose={handleCloseModal}
      />

      <HouseDesignModal
        isOpen={activeModal === 'house-design'}
        onClose={handleCloseModal}
        onOpenContact={() => handleOpenModal('contact')}
      />

      <AboutModal
        isOpen={activeModal === 'about'}
        onClose={handleCloseModal}
        onOpenContact={() => handleOpenModal('contact')}
      />

      <FaqModal
        isOpen={activeModal === 'faq'}
        onClose={handleCloseModal}
        onOpenContact={() => handleOpenModal('contact')}
      />
    </div>
  );
}

