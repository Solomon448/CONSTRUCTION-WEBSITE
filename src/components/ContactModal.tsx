import React, { useState } from 'react';
import { X, CheckCircle2, Video, Calendar, Clock, ExternalLink, ArrowRight } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [bookingPlatform, setBookingPlatform] = useState<'google-meet' | 'zoom' | 'calendly'>('google-meet');
  const [consultationDate, setConsultationDate] = useState<string>('2026-08-18');
  const [consultationTime, setConsultationTime] = useState<string>('10:00 AM');
  
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    projectType: 'Custom Residence Construction',
    location: '',
    estimatedBudget: '$1.5M - $3.0M',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const platformInfo = {
    'google-meet': {
      title: 'Google Meet Video Call',
      description: 'A direct HD video session with our principal architect. Link automatically generated.',
      iconColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      linkUrl: `https://meet.google.com/rr-arch-consult`,
      badge: 'Google Meet',
    },
    'zoom': {
      title: 'Zoom Meeting Room',
      description: 'Interactive screen sharing with architectural 3D models and material boards.',
      iconColor: 'bg-blue-50 text-blue-700 border-blue-200',
      linkUrl: `https://zoom.us/j/realestateroyal-consult`,
      badge: 'Zoom HD',
    },
    'calendly': {
      title: 'Calendly Instant Sync',
      description: 'Reserve an instant slot synced directly with our design director’s live calendar.',
      iconColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      linkUrl: `https://calendly.com/realestateroyal/architectural-consultation`,
      badge: 'Calendly Live',
    },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl max-h-[92vh] bg-white rounded-[16px] md:rounded-[20px] shadow-2xl overflow-hidden flex flex-col my-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-gray-100 flex items-center justify-between bg-[#fafaf8]">
          <div>
            <span className="text-[11px] uppercase tracking-[0.18em] text-gray-500 font-semibold font-sans">
              Architectural Consultation
            </span>
            <h2 className="font-serif-editorial text-2xl sm:text-3xl font-light text-[#050505] mt-0.5">
              Request a <span className="italic font-normal">Quote & Consultation</span>
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-black hover:bg-gray-200/60 rounded-full transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 md:p-8 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full mb-1">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="font-serif-editorial text-2xl sm:text-3xl font-light text-gray-900">
                Consultation Confirmed
              </h3>

              <p className="font-sans text-[14px] text-gray-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-gray-900">{formData.fullName || 'valued client'}</span>. Your architectural consultation has been booked via <span className="font-semibold text-gray-900">{platformInfo[bookingPlatform].badge}</span>.
              </p>

              {/* Scheduled Platform Box */}
              <div className="bg-[#fafaf8] border border-gray-200 rounded-[12px] p-5 max-w-md mx-auto text-left space-y-3 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-[10.5px] font-semibold uppercase tracking-wider text-gray-500 font-sans">
                    Scheduled Meeting
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-[2px] font-sans">
                    {platformInfo[bookingPlatform].badge}
                  </span>
                </div>

                <div className="flex items-center space-x-2 text-xs font-sans text-gray-800 font-medium">
                  <Calendar size={15} className="text-gray-500" />
                  <span>Date: {consultationDate}</span>
                  <span className="text-gray-300">|</span>
                  <Clock size={15} className="text-gray-500" />
                  <span>Time: {consultationTime}</span>
                </div>

                <div className="pt-2 border-t border-gray-200/80">
                  <a
                    href={platformInfo[bookingPlatform].linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#050505] hover:bg-black rounded-[3px] transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-xs"
                  >
                    <span>Launch Meeting Room</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 text-xs text-gray-800 hover:text-black font-semibold border border-gray-300 rounded-[3px] transition-all"
                >
                  Return to Studio
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Platform Selection Buttons */}
              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5 font-sans">
                  Select Consultation Platform *
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setBookingPlatform('google-meet')}
                    className={`p-3 rounded-[8px] border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      bookingPlatform === 'google-meet'
                        ? 'border-[#050505] bg-gray-900 text-white shadow-xs'
                        : 'border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold font-sans">Google Meet</span>
                      <Video size={14} />
                    </div>
                    <span className="text-[10px] opacity-80 mt-1 block font-sans">Direct Calendar</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setBookingPlatform('zoom')}
                    className={`p-3 rounded-[8px] border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      bookingPlatform === 'zoom'
                        ? 'border-[#050505] bg-gray-900 text-white shadow-xs'
                        : 'border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold font-sans">Zoom Call</span>
                      <Video size={14} />
                    </div>
                    <span className="text-[10px] opacity-80 mt-1 block font-sans">HD Video Room</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setBookingPlatform('calendly')}
                    className={`p-3 rounded-[8px] border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      bookingPlatform === 'calendly'
                        ? 'border-[#050505] bg-gray-900 text-white shadow-xs'
                        : 'border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold font-sans">Calendly</span>
                      <Calendar size={14} />
                    </div>
                    <span className="text-[10px] opacity-80 mt-1 block font-sans">Instant Slot Sync</span>
                  </button>
                </div>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 bg-gray-50 p-3.5 rounded-[8px] border border-gray-200/80">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1 font-sans">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={consultationDate}
                    onChange={(e) => setConsultationDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-gray-200 rounded-[3px] focus:outline-none focus:border-black font-sans"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1 font-sans">
                    Preferred Time Slot
                  </label>
                  <select
                    value={consultationTime}
                    onChange={(e) => setConsultationTime(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-gray-200 rounded-[3px] focus:outline-none focus:border-black font-sans"
                  >
                    <option value="09:30 AM">09:30 AM - 10:15 AM</option>
                    <option value="10:00 AM">10:00 AM - 10:45 AM</option>
                    <option value="02:00 PM">02:00 PM - 02:45 PM</option>
                    <option value="04:30 PM">04:30 PM - 05:15 PM</option>
                  </select>
                </div>
              </div>

              {/* Client Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1 font-sans">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-[3px] focus:outline-none focus:border-black focus:bg-white font-sans transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1 font-sans">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. eleanor@residence.com"
                    className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-[3px] focus:outline-none focus:border-black focus:bg-white font-sans transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1 font-sans">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+61 400 000 000"
                    className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-[3px] focus:outline-none focus:border-black focus:bg-white font-sans transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1 font-sans">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-[3px] focus:outline-none focus:border-black focus:bg-white font-sans transition-colors"
                  >
                    <option value="Custom Residence Construction">Custom Residence Construction</option>
                    <option value="Architectural Renovation">Architectural Renovation</option>
                    <option value="House & Land Design Package">House & Land Design Package</option>
                    <option value="Interior Architecture & Inclusions">Interior Architecture & Inclusions</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1 font-sans">
                    Project Location / Suburb
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Brighton, VIC"
                    className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-[3px] focus:outline-none focus:border-black focus:bg-white font-sans transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1 font-sans">
                    Estimated Investment
                  </label>
                  <select
                    value={formData.estimatedBudget}
                    onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-[3px] focus:outline-none focus:border-black focus:bg-white font-sans transition-colors"
                  >
                    <option value="$1.0M - $1.5M">$1.0M - $1.5M</option>
                    <option value="$1.5M - $3.0M">$1.5M - $3.0M</option>
                    <option value="$3.0M - $5.0M">$3.0M - $5.0M</option>
                    <option value="$5.0M+">$5.0M+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1 font-sans">
                  Project Vision & Notes
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your site orientation, timeline, or material aspirations..."
                  className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-[3px] focus:outline-none focus:border-black focus:bg-white font-sans transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 text-xs font-bold text-white bg-[#050505] hover:bg-black rounded-[3px] transition-all cursor-pointer shadow-xs uppercase tracking-wider flex items-center justify-center space-x-2"
                >
                  <span>Confirm & Schedule via {platformInfo[bookingPlatform].badge}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

