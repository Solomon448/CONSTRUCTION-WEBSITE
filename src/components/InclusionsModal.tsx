import React, { useState } from 'react';
import { X, Check, ArrowRight, Shield, Award, Sparkles, Sliders, CheckCircle2 } from 'lucide-react';
import { inclusionList } from '../data/siteData';

interface InclusionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const InclusionsModal: React.FC<InclusionsModalProps> = ({ isOpen, onClose, onOpenContact }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  if (!isOpen) return null;

  // Extended services & inclusions list for complete coverage
  const allServicesAndInclusions = [
    {
      id: 'srv-0',
      category: 'Full Architectural Construction',
      title: 'Turnkey Residential Construction & Project Management',
      description: 'End-to-end master builder delivery for bespoke residences, encompassing structural engineering, site excavation, council approvals, and hand-crafted architectural handovers.',
      specs: [
        'Fixed-price construction contract with itemized Quantity Survey',
        'On-site principal builder oversight and daily quality assurance',
        'Independent structural warranty & 10-year builder guarantee',
      ],
      imageUrl: inclusionList[3].imageUrl,
      badge: 'Core Service',
    },
    ...inclusionList.map((item) => ({ ...item, badge: 'Luxury Inclusion' })),
  ];

  const categories = ['All', 'Full Architectural Construction', 'Interior Joinery & Kitchens', 'Architectural Glazing', 'Façade & Cladding', 'Climate & Acoustics'];

  const filteredItems = activeCategory === 'All'
    ? allServicesAndInclusions
    : allServicesAndInclusions.filter((item) => item.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] bg-white rounded-[16px] md:rounded-[20px] shadow-2xl overflow-hidden flex flex-col my-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-7 md:p-8 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#fafaf8]">
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-gray-500 font-bold">
                Architectural Studio Services & Specifications
              </span>
            </div>
            <h2 className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl font-light text-[#050505] mt-1">
              Architectural <span className="italic font-normal">Services</span> & Inclusions
            </h2>
            <p className="text-[13px] sm:text-[14px] text-gray-600 font-sans mt-1 max-w-xl font-normal antialiased">
              Explore our comprehensive range of residential construction services and hand-curated luxury finishes designed for modern living.
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

        {/* Category Filter Bar */}
        <div className="px-5 sm:px-8 py-3 bg-white border-b border-gray-100 overflow-x-auto scrollbar-none flex items-center space-x-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mr-2 flex items-center shrink-0 font-sans">
            <Sliders size={13} className="mr-1.5 text-gray-500" /> Filter Scope:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-[4px] text-[12px] font-sans font-semibold transition-all shrink-0 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#050505] text-white shadow-2xs'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Content List */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 bg-[#fafaf8]">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200/90 rounded-[14px] p-5 sm:p-6 shadow-2xs hover:border-gray-400 transition-all grid grid-cols-1 md:grid-cols-12 gap-6 items-center group"
            >
              {/* Service Image Preview */}
              <div className="md:col-span-5 rounded-[10px] overflow-hidden h-[200px] bg-gray-100 relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-[3px] font-sans border border-white/10">
                  {item.badge}
                </div>
              </div>

              {/* Service Details & Typography */}
              <div className="md:col-span-7 space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-[10.5px] uppercase tracking-[0.18em] text-gray-700 font-bold bg-gray-100 border border-gray-200 px-2.5 py-0.5 rounded-[3px] font-sans">
                    {item.category}
                  </span>
                </div>

                {/* Professional Service Title */}
                <h3 className="font-sans text-[18px] sm:text-[20px] font-bold text-[#050505] tracking-tight leading-snug">
                  {item.title}
                </h3>

                {/* Professional 14px Description */}
                <p className="text-[14px] text-gray-600 leading-[1.65] font-sans font-normal antialiased">
                  {item.description}
                </p>

                {/* Key Deliverables Bullet Points */}
                <div className="pt-2 border-t border-gray-100/80">
                  <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold font-sans block mb-2">
                    Key Specifications & Deliverables:
                  </span>
                  <ul className="space-y-2">
                    {item.specs.map((spec, i) => (
                      <li key={i} className="flex items-start text-[13px] font-sans text-gray-800 font-medium">
                        <CheckCircle2 size={15} className="text-emerald-700 mr-2 shrink-0 mt-0.5" />
                        <span className="leading-tight">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Service Inquiry Action */}
                <div className="pt-3 flex items-center justify-between">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenContact();
                    }}
                    className="inline-flex items-center space-x-2 text-[12px] font-bold uppercase tracking-wider text-[#050505] hover:text-blue-900 font-sans group/btn cursor-pointer transition-colors"
                  >
                    <span>Inquire About {item.title.split(' ')[0]} Service</span>
                    <ArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 border-t border-gray-100 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-xs text-gray-500 font-sans">
            <Award size={16} className="text-amber-600 shrink-0" />
            <span>All architectural services include master builder guarantees & custom site surveys.</span>
          </div>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold font-sans text-gray-700 hover:text-black border border-gray-300 rounded-[3px] transition-all cursor-pointer"
            >
              Close Catalogue
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#050505] hover:bg-black rounded-[3px] transition-all cursor-pointer shadow-xs flex items-center justify-center space-x-2 font-sans"
            >
              <span>Request Quote / Virtual Call</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
