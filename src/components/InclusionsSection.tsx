import React from 'react';
import { siteConfig } from '../data/siteData';
import { ArrowRight } from 'lucide-react';

interface InclusionsSectionProps {
  onOpenInclusions: () => void;
}

export const InclusionsSection: React.FC<InclusionsSectionProps> = ({ onOpenInclusions }) => {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 mt-8 md:mt-12 mb-8 md:mb-12 font-sans">
      {/* Featured Card Container */}
      <div 
        className="w-full md:w-[86%] lg:w-[80%] mx-auto relative rounded-[18px] md:rounded-[24px] overflow-hidden shadow-lg min-h-[320px] sm:min-h-[350px] md:min-h-[380px] flex items-center group cursor-pointer border border-white/10"
        onClick={onOpenInclusions}
      >
        {/* Background Kitchen Image */}
        <div className="absolute inset-0 w-full h-full bg-[#152822]">
          <img
            src={siteConfig.inclusions.imageUrl}
            alt="Luxurious Modern Kitchen Interior Inclusions"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-transparent w-full md:w-[75%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        {/* Text Overlay on Left Side */}
        <div className="relative z-10 p-6 sm:p-9 md:p-12 lg:p-14 max-w-lg text-white font-sans space-y-3">
          <span className="text-[10.5px] uppercase tracking-[0.18em] text-emerald-300 font-bold bg-white/10 backdrop-blur-md px-3 py-1 rounded-[4px] border border-white/15 inline-block">
            Architectural Finishes & Services
          </span>

          {/* Heading */}
          <h2 className="font-serif-editorial text-[30px] sm:text-[36px] md:text-[42px] lg:text-[46px] leading-[1.02] tracking-tight font-light text-white">
            {siteConfig.inclusions.titlePart1}
            <span className="italic font-normal text-amber-100">{siteConfig.inclusions.titleItalic}</span>
          </h2>

          {/* Paragraph */}
          <p className="text-[14px] leading-[1.68] text-gray-200/95 font-sans max-w-md font-normal antialiased pt-1">
            {siteConfig.inclusions.paragraph}
          </p>

          {/* CTA Button */}
          <div className="pt-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenInclusions();
              }}
              className="bg-white hover:bg-gray-100 text-[#050505] text-[12px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-[4px] transition-all shadow-md cursor-pointer flex items-center space-x-2 font-sans"
            >
              <span>Explore Inclusions & Services</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

