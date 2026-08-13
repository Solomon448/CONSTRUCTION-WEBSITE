import React, { useState } from 'react';
import { X, ArrowRight, MapPin, Maximize2, Sparkles, CheckCircle2 } from 'lucide-react';
import { projectDesigns } from '../data/siteData';

interface HouseDesignModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const HouseDesignModal: React.FC<HouseDesignModalProps> = ({ isOpen, onClose, onOpenContact }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  if (!isOpen) return null;

  const categories = ['All', 'Custom Modern Villa', 'Coastal Architectural Home', 'Luxury Urban Residence'];

  const filteredProjects = activeCategory === 'All'
    ? projectDesigns
    : projectDesigns.filter(p => p.category === activeCategory);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] bg-white rounded-[16px] md:rounded-[20px] shadow-2xl overflow-hidden flex flex-col my-auto animate-in zoom-in-95 duration-200 font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-7 md:p-8 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#fafaf8]">
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-gray-500 font-bold">
                Architectural Concepts & Portfolio
              </span>
            </div>
            <h2 className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl font-light text-[#050505] mt-1">
              House <span className="italic font-normal">Designs</span> & Custom Residences
            </h2>
            <p className="text-[13px] sm:text-[14px] text-gray-600 font-sans mt-1 max-w-xl font-normal antialiased">
              Explore custom architectural concepts engineered for land orientation, high thermal efficiency, and luxury spatial flows.
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

        {/* Filter Category Tabs */}
        <div className="px-5 sm:px-8 py-3 bg-white border-b border-gray-100 flex items-center space-x-2 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-[4px] text-[11px] sm:text-[12px] font-sans font-semibold transition-all shrink-0 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#050505] text-white shadow-2xs'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Content Grid */}
        <div className="p-5 sm:p-7 md:p-8 overflow-y-auto space-y-8 bg-[#fafaf8] flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group bg-white border border-gray-200/90 rounded-[14px] overflow-hidden flex flex-col hover:border-gray-400 hover:shadow-md transition-all duration-300"
              >
                {/* Image Container */}
                <div className="h-[210px] sm:h-[230px] overflow-hidden relative bg-gray-100">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[3px] border border-white/10">
                    {project.area}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#050505] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[3px] flex items-center space-x-1 shadow-xs">
                    <MapPin size={11} className="text-gray-600" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-emerald-800 font-bold bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-[2px] font-sans inline-block mb-1.5">
                      {project.category}
                    </span>
                    <h3 className="font-sans text-[18px] sm:text-[19px] font-bold text-[#050505] tracking-tight leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-[14px] text-gray-600 mt-2 leading-[1.6] font-sans font-normal antialiased">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 space-y-3">
                    <span className="text-[10.5px] uppercase tracking-wider text-gray-400 font-bold font-sans block">
                      Architectural Features:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feat, i) => (
                        <li key={i} className="text-[12px] text-gray-700 flex items-start space-x-1.5 font-sans">
                          <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-tight">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => {
                        onClose();
                        onOpenContact();
                      }}
                      className="w-full text-xs font-bold uppercase tracking-wider text-[#050505] hover:text-black flex items-center justify-between pt-3 border-t border-gray-100 group-hover:translate-x-0.5 transition-all cursor-pointer font-sans"
                    >
                      <span>Inquire About Concept</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer Callout */}
        <div className="p-5 sm:p-6 border-t border-gray-100 bg-white flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
          <p className="text-xs text-gray-500 font-normal">
            Every architectural floorplan can be customized for your plot dimensions, council overlay, and lifestyle requirements.
          </p>
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#050505] hover:bg-black rounded-[3px] transition-all cursor-pointer shadow-xs font-sans shrink-0"
          >
            Commission Custom Design
          </button>
        </div>
      </div>
    </div>
  );
};

