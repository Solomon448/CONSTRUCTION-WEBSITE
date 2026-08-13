import React from 'react';
import { siteConfig } from '../data/siteData';

interface IntroductionSectionProps {
  onOpenContact: () => void;
}

export const IntroductionSection: React.FC<IntroductionSectionProps> = ({ onOpenContact }) => {
  return (
    <section className="relative w-full my-8 md:my-12 lg:my-16 font-sans">
      {/* Desktop & Mobile Asymmetric Layout Container */}
      <div className="relative w-full flex flex-col md:flex-row items-center md:items-center justify-between min-h-[320px] max-w-7xl mx-auto">
        
        {/* LEFT ARCHITECTURAL IMAGE */}
        <div className="w-full md:w-[28%] lg:w-[26%] flex justify-start mb-6 md:mb-0">
          <div className="relative w-[90%] md:w-full h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] rounded-r-[22px] md:rounded-r-[28px] overflow-hidden shadow-md group">
            <img
              src={siteConfig.introduction.leftImageUrl}
              alt="Luxury Modern Architecture Exterior"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>
        </div>

        {/* CENTER EDITORIAL STATEMENT */}
        <div className="w-full md:w-[44%] lg:w-[44%] px-6 text-center flex flex-col items-center justify-center my-auto z-10 py-4">
          {/* Sparkle Icon */}
          <div className="mb-4 text-[#050505] flex justify-center">
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              className="text-[#050505]"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </div>

          {/* Heading */}
          <h2 className="font-serif-editorial text-[32px] sm:text-[40px] md:text-[44px] lg:text-[50px] leading-[1.04] tracking-tight font-light text-[#050505] max-w-md">
            {siteConfig.introduction.titlePart1}
            <span className="italic font-normal">{siteConfig.introduction.titleItalic1}</span>
            {siteConfig.introduction.titlePart2}
            <br />
            {siteConfig.introduction.titleLine2}
            <span className="italic font-normal">{siteConfig.introduction.titleItalic2}</span>
          </h2>

          {/* Paragraph */}
          <p className="mt-4 text-[14px] leading-[1.68] text-gray-700 max-w-md font-sans font-normal antialiased">
            {siteConfig.introduction.paragraph}
          </p>

          {/* CTA Button */}
          <div className="mt-6">
            <button
              onClick={onOpenContact}
              className="bg-[#050505] hover:bg-[#222222] text-white text-[12px] font-bold uppercase tracking-wider px-6 py-3 rounded-[3px] transition-all cursor-pointer shadow-xs active:scale-98 font-sans"
            >
              Consult Studio
            </button>
          </div>
        </div>

        {/* RIGHT ARCHITECTURAL IMAGE */}
        <div className="w-full md:w-[28%] lg:w-[26%] flex justify-end mt-6 md:mt-12 lg:mt-16">
          <div className="relative w-[90%] md:w-full h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] rounded-l-[22px] md:rounded-l-[28px] overflow-hidden shadow-md group">
            <img
              src={siteConfig.introduction.rightImageUrl}
              alt="Contemporary Luxury Residence Exterior"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

