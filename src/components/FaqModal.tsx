import React, { useState } from 'react';
import { X, Search, ChevronDown, HelpCircle, ArrowRight, Video, ShieldCheck, FileText, Calendar } from 'lucide-react';
import { faqList } from '../data/siteData';

interface FaqModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const FaqModal: React.FC<FaqModalProps> = ({ isOpen, onClose, onOpenContact }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  if (!isOpen) return null;

  const categories = ['All', 'Construction & Timelines', 'Contracts & Pricing', 'Virtual Consultations', 'Customization & Inclusions', 'Warranties & Guarantees', 'Locations & Feasibility'];

  const filteredFaqs = faqList.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-[16px] md:rounded-[20px] shadow-2xl overflow-hidden flex flex-col my-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-7 md:p-8 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#fafaf8]">
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-gray-500 font-bold">
                Knowledge Base & Frequently Asked Questions
              </span>
            </div>
            <h2 className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl font-light text-[#050505] mt-1">
              Studio <span className="italic font-normal">FAQ & Client Guide</span>
            </h2>
            <p className="text-[13px] sm:text-[14px] text-gray-600 font-sans mt-1 max-w-xl font-normal antialiased">
              Find answers regarding architectural design processes, master builder contracts, virtual consultations, and quality guarantees.
            </p>
          </div>

          <button
            onClick={onClose}
            className="self-end sm:self-center p-2 text-gray-400 hover:text-black hover:bg-gray-200/60 rounded-full transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* Search & Category Filter Header */}
        <div className="p-4 sm:px-8 sm:py-4 bg-white border-b border-gray-100 space-y-3">
          {/* Search Input */}
          <div className="relative">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. contracts, timelines, virtual calls, marble...)"
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-[6px] focus:outline-none focus:border-black font-sans transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-black"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Pills */}
          <div className="overflow-x-auto scrollbar-none flex items-center space-x-2 pt-1 pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-[4px] text-[11px] sm:text-[12px] font-sans font-semibold transition-all shrink-0 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#050505] text-white shadow-2xs'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-4 bg-[#fafaf8] flex-1">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 space-y-3 bg-white rounded-[12px] border border-gray-200 p-8">
              <HelpCircle size={32} className="mx-auto text-gray-400" />
              <h3 className="font-serif-editorial text-xl font-medium text-gray-900">No matching questions found</h3>
              <p className="text-xs text-gray-500 font-sans max-w-sm mx-auto">
                Try searching with different terms or speak directly with our 24/7 AI concierge chatbot at the bottom right.
              </p>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white border border-gray-200/90 rounded-[12px] overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50/80 transition-colors cursor-pointer"
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase tracking-widest text-gray-700 font-bold bg-gray-100 border border-gray-200 px-2 py-0.5 rounded-[2px] font-sans inline-block">
                        {faq.category}
                      </span>
                      <h3 className="font-sans text-[15px] sm:text-[16px] font-bold text-[#050505] leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                    <div className={`p-1.5 rounded-full bg-gray-100 text-gray-700 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#050505] text-white' : ''}`}>
                      <ChevronDown size={16} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-gray-100 bg-[#fafaf8]/50 animate-in fade-in duration-200">
                      <p className="text-[14px] text-gray-600 font-sans leading-[1.65] font-normal antialiased">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer Callout */}
        <div className="p-5 sm:p-6 border-t border-gray-100 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-xs text-gray-600 font-sans">
            <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center shrink-0">
              <Video size={16} />
            </div>
            <div>
              <span className="font-bold text-gray-900 block leading-tight">Need tailored project advice?</span>
              <span className="text-[11px] text-gray-500">Book a 1-on-1 virtual design call via Google Meet or Zoom.</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold font-sans text-gray-700 hover:text-black border border-gray-300 rounded-[3px] transition-all cursor-pointer"
            >
              Close FAQ
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#050505] hover:bg-black rounded-[3px] transition-all cursor-pointer shadow-xs flex items-center justify-center space-x-2 font-sans"
            >
              <span>Schedule Consultation</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
