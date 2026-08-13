import React from 'react';
import { siteConfig } from '../data/siteData';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 mt-2 mb-8 md:mb-12">
      <div 
        className="relative w-full overflow-hidden rounded-[18px] sm:rounded-[22px] md:rounded-[26px] shadow-lg bg-[#123048] min-h-[260px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px] flex items-center group cursor-pointer border border-white/10"
        onClick={onOpenContact}
      >
        {/* Architectural Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={siteConfig.hero.imageUrl}
            alt="Modern Architectural Building Construction"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-right md:object-[85%_center] transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
          />
          {/* Subtle gradient overlay to protect text contrast on all viewports */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2638] via-[#0d2638]/85 md:via-[#0d2638]/75 to-transparent w-full md:w-[75%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#091b28]/80 via-transparent to-transparent" />
        </div>

        {/* Content Positioned on Left Side */}
        <div className="relative z-10 p-6 sm:p-9 md:p-12 lg:p-16 max-w-2xl text-white space-y-4 font-sans">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-[4px] border border-white/15">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[10.5px] sm:text-[11.5px] uppercase tracking-[0.18em] font-sans font-bold text-gray-200">
              {siteConfig.hero.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif-editorial text-[30px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[0.98] tracking-tight font-light text-white drop-shadow-xs">
            {siteConfig.hero.headlinePart1}
            <br />
            {siteConfig.hero.headlinePart2}
            <span className="italic font-normal text-amber-100/90">{siteConfig.hero.headlineItalic}</span>
            {siteConfig.hero.headlinePart3}
            <br />
            {siteConfig.hero.headlinePart4}
          </h1>

          <p className="text-[13px] sm:text-[14px] text-gray-300 font-sans max-w-lg leading-relaxed font-normal antialiased pt-1">
            Integrating bespoke residential design with master construction engineering for timeless architectural longevity.
          </p>

          <div className="pt-2 flex items-center space-x-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenContact();
              }}
              className="bg-white hover:bg-gray-100 text-[#050505] text-[12px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-[4px] transition-all shadow-md cursor-pointer flex items-center space-x-2"
            >
              <span>Consult Principal Architect</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

