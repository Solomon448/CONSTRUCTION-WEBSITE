import React from 'react';
import { siteConfig } from '../data/siteData';
import {
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  Share2,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ShieldCheck,
  Video,
  Award,
} from 'lucide-react';

interface FooterProps {
  onOpenModal: (key: 'house-design' | 'inclusions' | 'about' | 'contact' | 'faq') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', handle: '@RealestateRoyal' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', handle: 'RealestateRoyal Studio' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com', handle: 'RealestateRoyal Official' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com', handle: 'RealestateRoyal TV' },
    { name: 'Pinterest', icon: Share2, href: 'https://pinterest.com', handle: 'RealestateRoyal Portfolio' },
  ];

  return (
    <footer className="w-full bg-[#050505] text-gray-300 pt-16 pb-10 border-t border-gray-900 mt-16 md:mt-24 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-12">
        
        {/* Top Header Row - Brand & Badges */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-10 border-b border-gray-800/80 gap-6">
          <div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-[4px] bg-white text-[#050505] flex items-center justify-center font-bold">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M3 21h18" />
                  <path d="M5 21V7l7-4 7 4v14" />
                </svg>
              </div>
              <div>
                <span className="font-sans text-lg font-bold tracking-[0.18em] uppercase text-white block leading-none">
                  Realestate<span className="font-light text-gray-400">Royal</span>
                </span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-sans font-semibold">
                  Architectural Construction Studio
                </span>
              </div>
            </div>
            <p className="mt-3 text-[14px] text-gray-400 max-w-xl font-normal leading-relaxed antialiased">
              Crafting luxury bespoke residences across Victoria and New South Wales with precision structural engineering, master craftsmanship, and timeless inclusions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center space-x-2 bg-gray-900/80 border border-gray-800 px-3.5 py-2 rounded-[6px] text-xs font-semibold text-gray-300">
              <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
              <span>10-Year Structural Guarantee</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-900/80 border border-gray-800 px-3.5 py-2 rounded-[6px] text-xs font-semibold text-gray-300">
              <Award size={16} className="text-amber-400 shrink-0" />
              <span>Master Builders Certified</span>
            </div>
          </div>
        </div>

        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-xs leading-relaxed pb-8 border-b border-gray-800/80">
          
          {/* Col 1: Studio Headquarters */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white font-sans">
              Studio Headquarters
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-2.5">
                <MapPin size={16} className="text-gray-500 shrink-0 mt-0.5" />
                <span className="text-[13px] text-gray-300">Level 18, 120 Collins Street<br />Melbourne VIC 3000, Australia</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone size={15} className="text-gray-500 shrink-0" />
                <a href="tel:+61398204000" className="text-[13px] text-gray-300 hover:text-white transition-colors">
                  +61 3 9820 4000
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail size={15} className="text-gray-500 shrink-0" />
                <a href="mailto:enquiries@realestateroyal.com.au" className="text-[13px] text-gray-300 hover:text-white transition-colors">
                  enquiries@realestateroyal.com.au
                </a>
              </li>
              <li className="flex items-center space-x-2.5 pt-1">
                <Clock size={15} className="text-gray-500 shrink-0" />
                <span className="text-[12px] text-gray-400">Mon - Fri: 8:30am – 6:00pm EST</span>
              </li>
            </ul>
          </div>

          {/* Col 2: Architectural Services */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white font-sans">
              Architectural Services
            </h4>
            <ul className="space-y-2.5 text-[13px]">
              <li>
                <button
                  onClick={() => onOpenModal('inclusions')}
                  className="text-gray-300 hover:text-white font-medium transition-colors cursor-pointer flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 group-hover:bg-white transition-colors" />
                  Custom Residence Construction
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('house-design')}
                  className="text-gray-300 hover:text-white font-medium transition-colors cursor-pointer flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 group-hover:bg-white transition-colors" />
                  Architectural Floorplans & Concepts
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('inclusions')}
                  className="text-gray-300 hover:text-white font-medium transition-colors cursor-pointer flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 group-hover:bg-white transition-colors" />
                  Bespoke Inclusions & Finishes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('inclusions')}
                  className="text-gray-300 hover:text-white font-medium transition-colors cursor-pointer flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 group-hover:bg-white transition-colors" />
                  Interior Architecture & Joinery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('contact')}
                  className="text-gray-300 hover:text-white font-medium transition-colors cursor-pointer flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 group-hover:bg-white transition-colors" />
                  Site Assessment & Feasibility
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Design Portfolio & Studio */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white font-sans">
              Studio & Portfolios
            </h4>
            <ul className="space-y-2.5 text-[13px]">
              <li>
                <button
                  onClick={() => onOpenModal('house-design')}
                  className="text-gray-300 hover:text-white font-medium transition-colors cursor-pointer flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 group-hover:bg-white transition-colors" />
                  House Designs & Masterpieces
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('about')}
                  className="text-gray-300 hover:text-white font-medium transition-colors cursor-pointer flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 group-hover:bg-white transition-colors" />
                  About Studio & Craftsmanship
                </button>
              </li>
              <li>
                <a
                  href="#google-reviews"
                  className="text-gray-300 hover:text-white font-medium transition-colors cursor-pointer flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 group-hover:bg-white transition-colors" />
                  Google Verified Client Reviews
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('faq')}
                  className="text-gray-300 hover:text-white font-medium transition-colors cursor-pointer flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 group-hover:bg-white transition-colors" />
                  Frequently Asked Questions (FAQ)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('contact')}
                  className="text-gray-300 hover:text-white font-medium transition-colors cursor-pointer flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 group-hover:bg-white transition-colors" />
                  Request Itemized Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Virtual Calls & Social Handles */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white font-sans">
              Virtual Consultation
            </h4>
            <p className="text-[12px] text-gray-400 font-sans leading-relaxed">
              Book a 1-on-1 virtual design session with our principal architect via Google Meet, Zoom, or Calendly.
            </p>

            <button
              onClick={() => onOpenModal('contact')}
              className="w-full py-2.5 px-4 bg-white hover:bg-gray-100 text-[#050505] font-bold text-xs uppercase tracking-wider rounded-[4px] transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-sm"
            >
              <Video size={15} />
              <span>Schedule Video Call</span>
              <ArrowRight size={14} />
            </button>

            <div className="pt-2">
              <span className="text-[10.5px] uppercase tracking-wider text-gray-500 font-bold font-sans block mb-2">
                Follow Studio Portfolio:
              </span>
              <div className="flex items-center space-x-2">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      title={`${social.name} - ${social.handle}`}
                      className="w-8 h-8 rounded-full bg-gray-900 hover:bg-white text-gray-300 hover:text-black flex items-center justify-center transition-all transform hover:scale-110 border border-gray-800"
                    >
                      <IconComponent size={14} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Credentials */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-4 pt-2 font-sans">
          <div>
            © {new Date().getFullYear()} {siteConfig.brandName} Architectural Studio. All Rights Reserved.
          </div>

          <div className="flex items-center space-x-4 text-gray-400">
            <span>Master Builders Lic: <strong className="text-gray-300 font-semibold">CDB-U 58210</strong></span>
            <span>•</span>
            <span>Architects Reg: <strong className="text-gray-300 font-semibold">ARB 18294</strong></span>
          </div>

          <div className="flex items-center space-x-4 text-gray-500">
            <button onClick={() => onOpenModal('about')} className="hover:text-gray-300 transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <span>|</span>
            <button onClick={() => onOpenModal('about')} className="hover:text-gray-300 transition-colors cursor-pointer">
              Terms of Engagement
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

