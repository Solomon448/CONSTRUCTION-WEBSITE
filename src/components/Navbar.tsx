import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems, siteConfig } from '../data/siteData';

interface NavbarProps {
  onOpenModal: (key: 'house-design' | 'inclusions' | 'about' | 'contact' | 'faq') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (modalKey?: 'house-design' | 'inclusions' | 'about' | 'contact' | 'faq') => {
    setMobileMenuOpen(false);
    if (modalKey) {
      onOpenModal(modalKey);
    }
  };

  return (
    <header className="w-full pt-6 pb-4 px-6 md:px-12 lg:px-16 flex items-center justify-between">
      {/* Professional Logo */}
      <div className="flex items-center">
        <a 
          href="#" 
          className="flex items-center space-x-3 group cursor-pointer"
        >
          {/* Architectural Geometry Mark */}
          <div className="w-8 h-8 rounded-[4px] bg-[#050505] text-white flex items-center justify-center shadow-xs group-hover:bg-[#123248] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 21h18" />
              <path d="M5 21V7l7-4 7 4v14" />
              <path d="M9 10h6" />
              <path d="M9 14h6" />
              <path d="M9 18h6" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-[14px] md:text-[15px] font-bold tracking-[0.16em] uppercase text-[#050505] leading-tight">
              Realestate<span className="font-light text-gray-700">Royal</span>
            </span>
            <span className="text-[8.5px] font-semibold tracking-[0.24em] text-gray-500 uppercase leading-none mt-0.5">
              Architectural Studio
            </span>
          </div>
        </a>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleNavClick(item.modalKey)}
            className="text-[12px] lg:text-[12.5px] tracking-[0.02em] font-medium text-[#4a4a4a] hover:text-[#050505] transition-colors cursor-pointer"
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* CTA Button */}
      <div className="hidden md:block">
        <button
          onClick={() => onOpenModal('faq')}
          className="bg-[#050505] hover:bg-[#222222] text-white text-[12px] font-bold tracking-wider px-5 py-2.5 rounded-[3px] transition-all shadow-xs cursor-pointer active:scale-98 uppercase font-sans border border-white/10"
        >
          Studio FAQ
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-[#050505] hover:opacity-70 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#050505]/60 backdrop-blur-xs flex justify-end md:hidden">
          <div className="w-[80%] max-w-[320px] bg-white h-full p-8 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-[3px] bg-[#050505] text-white flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 21h18" />
                      <path d="M5 21V7l7-4 7 4v14" />
                    </svg>
                  </div>
                  <span className="font-sans text-xs font-bold tracking-[0.15em] uppercase text-[#050505]">{siteConfig.brandName}</span>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-gray-500 hover:text-black"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mt-8 flex flex-col space-y-6">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.modalKey)}
                    className="text-left text-sm font-sans font-medium uppercase tracking-wider text-gray-800 hover:text-black transition-all"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <button
                onClick={() => handleNavClick('faq')}
                className="w-full bg-[#050505] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-[3px] text-center font-sans cursor-pointer"
              >
                Studio FAQ & Help
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
