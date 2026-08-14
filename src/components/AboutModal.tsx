import React from 'react';
import { X, Award, ShieldCheck, Compass, CheckCircle2, ArrowRight, Building2, Layers, Users } from 'lucide-react';
import { siteConfig } from '../data/siteData';
import { StatsCounterSection } from './StatsCounterSection';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, onOpenContact }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-[16px] md:rounded-[20px] shadow-2xl overflow-hidden flex flex-col my-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-7 md:p-8 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#fafaf8]">
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-gray-500 font-bold">
                Studio Philosophy & Legacy
              </span>
            </div>
            <h2 className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl font-light text-[#050505] mt-1">
              About <span className="italic font-normal">{siteConfig.brandName}</span>
            </h2>
            <p className="text-[13px] sm:text-[14px] text-gray-600 font-sans mt-1 max-w-xl font-normal antialiased">
              Discover how our integrated master builder studio unifies architectural vision, structural engineering, and precision construction.
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

        {/* Modal Body with Professional 14px Typography */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 bg-[#fafaf8] flex-1">
          
          {/* Main Statement Card */}
          <div className="bg-white border border-gray-200/90 rounded-[14px] p-6 sm:p-7 shadow-2xs space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-[10.5px] uppercase tracking-[0.18em] text-gray-700 font-bold bg-gray-100 border border-gray-200 px-2.5 py-0.5 rounded-[3px] font-sans">
                Unified Architectural Studio
              </span>
            </div>

            <h3 className="font-sans text-[20px] sm:text-[22px] font-bold text-[#050505] tracking-tight leading-snug">
              Bespoke Residential Architecture & Precision Execution
            </h3>

            <p className="text-[14px] text-gray-600 leading-[1.68] font-sans font-normal antialiased">
              Founded on the conviction that high architecture and master construction must exist as a singular seamless discipline, {siteConfig.brandName} creates bespoke residential sanctuaries that elevate everyday living. We eliminate the traditional friction between architect and builder, ensuring every line drawn on paper is executed with millimeter site precision.
            </p>

            <p className="text-[14px] text-gray-600 leading-[1.68] font-sans font-normal antialiased">
              By maintaining in-house master builders, registered structural engineers, quantity surveyors, and interior architects under one studio roof, we deliver fixed-price guarantees, uncompromising material purity, and timeless structural longevity.
            </p>
          </div>

          {/* Performance Counter Section */}
          <StatsCounterSection variant="modal" />

          {/* Three Architectural Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="bg-white border border-gray-200/90 rounded-[12px] p-5 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-[6px] bg-gray-900 text-white flex items-center justify-center">
                <Compass size={20} />
              </div>
              <h4 className="font-sans text-[16px] font-bold text-[#050505]">
                Custom Design & Orientation
              </h4>
              <p className="text-[14px] text-gray-600 leading-[1.6] font-sans font-normal antialiased">
                Tailored residential concepts optimized for site topography, natural solar orientation, and seamless indoor-outdoor transitions.
              </p>
            </div>

            <div className="bg-white border border-gray-200/90 rounded-[12px] p-5 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-[6px] bg-gray-900 text-white flex items-center justify-center">
                <Layers size={20} />
              </div>
              <h4 className="font-sans text-[16px] font-bold text-[#050505]">
                Master Craftsmanship
              </h4>
              <p className="text-[14px] text-gray-600 leading-[1.6] font-sans font-normal antialiased">
                Hand-selected natural Calacatta stone, custom steel fabrications, and sustainable European timber executed by veteran artisans.
              </p>
            </div>

            <div className="bg-white border border-gray-200/90 rounded-[12px] p-5 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-[6px] bg-gray-900 text-white flex items-center justify-center">
                <ShieldCheck size={20} />
              </div>
              <h4 className="font-sans text-[16px] font-bold text-[#050505]">
                Guaranteed Precision
              </h4>
              <p className="text-[14px] text-gray-600 leading-[1.6] font-sans font-normal antialiased">
                Fixed-price master builder contracts, transparent Quantity Surveyor schedules, and a 10-year structural warranty.
              </p>
            </div>

          </div>

          {/* Studio Disciplines & Accreditation Checklist */}
          <div className="bg-white border border-gray-200/90 rounded-[14px] p-6 shadow-2xs space-y-4">
            <h4 className="font-sans text-[16px] font-bold uppercase tracking-wider text-gray-900">
              In-House Architectural Disciplines
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start space-x-2.5 text-[14px] font-sans text-gray-800">
                <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Registered Architects:</strong> ARB 18294 accreditation for bespoke spatial planning.</span>
              </div>
              <div className="flex items-start space-x-2.5 text-[14px] font-sans text-gray-800">
                <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Licensed Master Builders:</strong> CDB-U 58210 commercial & residential license.</span>
              </div>
              <div className="flex items-start space-x-2.5 text-[14px] font-sans text-gray-800">
                <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Structural Engineering:</strong> On-site load bearing & foundation soil validation.</span>
              </div>
              <div className="flex items-start space-x-2.5 text-[14px] font-sans text-gray-800">
                <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Interior Architecture:</strong> Custom stone, lighting & joinery selection suites.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 border-t border-gray-100 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-xs text-gray-500 font-sans">
            <Award size={16} className="text-amber-600 shrink-0" />
            <span>Serving Melbourne • Sydney • Brisbane • Mornington Peninsula • Byron Bay</span>
          </div>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold font-sans text-gray-700 hover:text-black border border-gray-300 rounded-[3px] transition-all cursor-pointer"
            >
              Close About
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#050505] hover:bg-black rounded-[3px] transition-all cursor-pointer shadow-xs flex items-center justify-center space-x-2 font-sans"
            >
              <span>Request Consultation</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
