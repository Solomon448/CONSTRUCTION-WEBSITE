import React, { useState } from 'react';
import { ArrowUpRight, MapPin, Layers, Sparkles, Filter, ChevronRight } from 'lucide-react';
import { recentWorkItems } from '../data/siteData';
import { RecentWorkItem } from '../types';

interface RecentWorkSectionProps {
  onOpenHouseDesign: () => void;
  onOpenContact: () => void;
}

export const RecentWorkSection: React.FC<RecentWorkSectionProps> = ({ onOpenHouseDesign, onOpenContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filterCategories = [
    { id: 'All', label: 'All Works' },
    { id: 'Custom Residences', label: 'Custom Residences' },
    { id: 'Interior Architecture', label: 'Interior Architecture' },
    { id: 'Bespoke Inclusions', label: 'Bespoke Inclusions' },
  ];

  const getCategoryCount = (catId: string) => {
    if (catId === 'All') return recentWorkItems.length;
    return recentWorkItems.filter((item) => item.category === catId).length;
  };

  const filteredItems = selectedCategory === 'All'
    ? recentWorkItems
    : recentWorkItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="recent-work" className="w-full px-4 sm:px-8 md:px-12 lg:px-16 mt-10 md:mt-16 mb-12 md:mb-16 font-sans">
      
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 pb-6 border-b border-gray-200/80 gap-6">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-gray-500 font-bold font-sans">
              Curated Built Portfolio
            </span>
          </div>
          <h2 className="font-serif-editorial text-[32px] sm:text-[40px] md:text-[46px] leading-[1.04] tracking-tight font-light text-[#050505]">
            Recent <span className="italic font-normal">Works</span> & Built Masterpieces
          </h2>
          <p className="mt-2 text-[14px] leading-[1.65] text-gray-600 font-sans font-normal antialiased">
            A showcase of custom residential sanctuaries, interior architecture, and master inclusions completed across Victoria and New South Wales.
          </p>
        </div>

        {/* Professional Filter Bar */}
        <div className="flex items-center space-x-1.5 overflow-x-auto scrollbar-none pb-1 pt-1 self-start lg:self-end">
          <div className="flex items-center space-x-1 text-gray-400 mr-2 text-xs font-semibold shrink-0 hidden sm:flex">
            <Filter size={14} />
            <span>Filter:</span>
          </div>
          {filterCategories.map((cat) => {
            const count = getCategoryCount(cat.id);
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`group flex items-center space-x-2 px-3.5 py-2 rounded-[6px] text-[11.5px] sm:text-[12.5px] font-sans font-bold transition-all duration-200 cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-[#050505] text-white shadow-md'
                    : 'bg-gray-100/90 hover:bg-gray-200/90 text-gray-700 border border-gray-200/80'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full transition-colors ${
                    isActive ? 'bg-white/25 text-white' : 'bg-gray-200 text-gray-600 group-hover:bg-gray-300'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Masonry Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
        {filteredItems.map((item: RecentWorkItem) => {
          const isGridAll = selectedCategory === 'All';
          const gridSpan = isGridAll ? (item.spanClass || 'md:col-span-6') : 'md:col-span-6 lg:col-span-6';

          return (
            <div
              key={item.id}
              onClick={onOpenHouseDesign}
              className={`group relative overflow-hidden rounded-[18px] md:rounded-[22px] bg-gray-900 shadow-md cursor-pointer border border-gray-200/60 transition-all duration-500 hover:shadow-xl ${gridSpan}`}
            >
              {/* Image Container */}
              <div className={`w-full ${item.aspectRatio || 'h-[300px] md:h-[360px]'} overflow-hidden relative`}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                {/* Dark Gradient Overlay for Supreme Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Top Header Overlay Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 gap-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-[4px] border border-white/15 shadow-xs">
                      {item.category}
                    </span>
                    {item.location && (
                      <span className="text-[10px] uppercase font-bold tracking-wider text-gray-200 bg-white/15 backdrop-blur-md px-2.5 py-1 rounded-[4px] border border-white/15 hidden sm:inline-flex items-center space-x-1">
                        <MapPin size={10} className="text-emerald-400" />
                        <span>{item.location}</span>
                      </span>
                    )}
                  </div>

                  <span className="text-[10.5px] font-bold text-white/90 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-[4px] border border-white/15 font-sans">
                    Completed {item.year}
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-7 text-white z-10 flex items-end justify-between gap-4">
                  <div className="space-y-1.5 max-w-xl">
                    {item.scope && (
                      <span className="text-[10.5px] uppercase tracking-wider text-emerald-300 font-bold font-sans block">
                        • {item.scope}
                      </span>
                    )}
                    <h3 className="font-serif-editorial text-2xl sm:text-3xl font-light text-white tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[13.5px] sm:text-[14px] text-gray-300 font-sans leading-relaxed font-normal antialiased line-clamp-2">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Circular Hover Arrow Button */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white border border-white/25 group-hover:bg-white group-hover:text-black transition-all transform group-hover:scale-110 shrink-0 shadow-md">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* View Portfolio Banner Link */}
      <div className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-[18px] bg-[#fafaf8] border border-gray-200/90 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 font-sans">
        <div className="space-y-1 text-center md:text-left">
          <span className="text-[11px] uppercase tracking-[0.18em] text-gray-500 font-bold">
            Studio Portfolio Archive
          </span>
          <h4 className="font-serif-editorial text-2xl text-[#050505] font-light">
            Seeking a Bespoke Residence for Your Land?
          </h4>
          <p className="text-[14px] text-gray-600 font-sans max-w-xl font-normal antialiased">
            Explore our archive of architectural floorplan concepts, solar orientation layouts, and material palettes, or speak directly with our principal team.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
          <button
            onClick={onOpenHouseDesign}
            className="w-full sm:w-auto px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-800 hover:text-black font-sans border border-gray-300 hover:border-gray-500 bg-white rounded-[4px] transition-all cursor-pointer shadow-2xs flex items-center justify-center space-x-2"
          >
            <span>Explore Design Concepts</span>
            <ChevronRight size={14} />
          </button>
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#050505] hover:bg-black font-sans rounded-[4px] transition-all cursor-pointer shadow-sm flex items-center justify-center space-x-2"
          >
            <span>Commission Project</span>
          </button>
        </div>
      </div>

    </section>
  );
};
