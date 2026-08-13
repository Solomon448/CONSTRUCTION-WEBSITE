import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight, Sparkles, MessageCircle, FileText } from 'lucide-react';
import { faqList } from '../data/siteData';

interface FaqSectionProps {
  onOpenFaq: () => void;
  onOpenContact: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenFaq, onOpenContact }) => {
  // Display top 3 featured FAQs on homepage
  const featuredFaqs = faqList.slice(0, 3);
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq-section" className="w-full px-4 sm:px-8 md:px-12 lg:px-16 my-10 md:my-16 font-sans">
      <div className="bg-[#fafaf8] border border-gray-200/90 rounded-[20px] md:rounded-[24px] p-6 sm:p-9 md:p-12 shadow-sm">
        
        {/* Header Grid */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 mb-8 border-b border-gray-200/80 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-gray-500 font-bold font-sans">
                Client Transparency & Process
              </span>
            </div>
            <h2 className="font-serif-editorial text-[32px] sm:text-[40px] md:text-[46px] leading-[1.04] tracking-tight font-light text-[#050505]">
              Frequently Asked <span className="italic font-normal">Questions</span>
            </h2>
            <p className="mt-2 text-[14px] leading-[1.65] text-gray-600 font-sans font-normal antialiased">
              Key insights into custom residence timelines, master builder contracts, virtual consultations, and structural guarantees.
            </p>
          </div>

          <button
            onClick={onOpenFaq}
            className="self-start lg:self-end px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#050505] hover:bg-black rounded-[4px] transition-all cursor-pointer shadow-xs flex items-center space-x-2 font-sans shrink-0"
          >
            <FileText size={15} />
            <span>View All Studio FAQs</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* 3 Featured Accordion FAQs */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {featuredFaqs.map((faq, index) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white border transition-all duration-200 rounded-[14px] overflow-hidden ${
                  isOpen ? 'border-gray-400 shadow-md ring-1 ring-black/5' : 'border-gray-200/90 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-gray-50/60 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] uppercase tracking-widest text-emerald-800 font-bold bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-[2px] font-sans inline-block">
                        {faq.category}
                      </span>
                      <span className="text-[11px] text-gray-400 font-sans">0{index + 1}</span>
                    </div>
                    <h3 className="font-sans text-[16px] sm:text-[17px] font-bold text-[#050505] leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`p-2 rounded-full transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 bg-[#050505] text-white' : 'bg-gray-100 text-gray-700'
                  }`}>
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-gray-100 bg-[#fafaf8]/60 animate-in fade-in duration-200">
                    <p className="text-[14px] sm:text-[14.5px] text-gray-600 font-sans leading-[1.68] font-normal antialiased">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Banner linking to full FAQ modal or Consultation */}
        <div className="mt-8 pt-6 border-t border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-5 sm:p-6 rounded-[14px] border border-gray-200/80">
          <div className="flex items-center space-x-3 text-xs text-gray-600 font-sans">
            <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-800 flex items-center justify-center shrink-0">
              <HelpCircle size={16} />
            </div>
            <div>
              <span className="font-bold text-gray-900 block leading-tight">Have a specific question not listed here?</span>
              <span className="text-[11.5px] text-gray-500">Explore our complete 6+ topic guide or consult with our AI concierge.</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto shrink-0">
            <button
              onClick={onOpenFaq}
              className="w-full sm:w-auto px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-800 hover:text-black border border-gray-300 hover:border-gray-500 bg-white rounded-[3px] transition-all cursor-pointer font-sans"
            >
              See All FAQs ({faqList.length})
            </button>
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#050505] hover:bg-black rounded-[3px] transition-all cursor-pointer shadow-xs font-sans"
            >
              Ask Studio Team
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
