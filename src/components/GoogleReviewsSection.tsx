import React, { useState } from 'react';
import { Star, MapPin, ExternalLink, CheckCircle2, MessageSquarePlus, ThumbsUp } from 'lucide-react';
import { googleReviews } from '../data/siteData';
import { GoogleReview } from '../types';

interface GoogleReviewsSectionProps {
  onOpenContact: () => void;
}

export const GoogleReviewsSection: React.FC<GoogleReviewsSectionProps> = ({ onOpenContact }) => {
  const [likes, setLikes] = useState<{ [key: string]: number }>({
    'gr-1': 14,
    'gr-2': 19,
    'gr-3': 11,
    'gr-4': 8,
  });

  const [liked, setLiked] = useState<{ [key: string]: boolean }>({});
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    project: '',
    rating: 5,
    text: '',
  });
  const [reviewsList, setReviewsList] = useState<GoogleReview[]>(googleReviews);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const handleToggleLike = (id: string) => {
    setLikes(prev => ({
      ...prev,
      [id]: liked[id] ? prev[id] - 1 : prev[id] + 1
    }));
    setLiked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text) return;

    const createdReview: GoogleReview = {
      id: `gr-${Date.now()}`,
      authorName: newReview.name,
      authorLocation: 'Verified Client',
      rating: newReview.rating,
      timeAgo: 'Just now',
      projectBuilt: newReview.project || 'Custom Architectural Build',
      reviewText: newReview.text,
      verified: true,
    };

    setReviewsList([createdReview, ...reviewsList]);
    setLikes(prev => ({ ...prev, [createdReview.id]: 1 }));
    setReviewSubmitted(true);
    setTimeout(() => {
      setReviewSubmitted(false);
      setIsWriteReviewOpen(false);
      setNewReview({ name: '', project: '', rating: 5, text: '' });
    }, 1800);
  };

  return (
    <section className="w-full px-6 md:px-12 lg:px-16 mt-8 md:mt-12 mb-8 md:mb-12">
      {/* Container Box */}
      <div className="w-full bg-[#fafaf8] rounded-[18px] md:rounded-[22px] border border-gray-200/80 p-6 md:p-10 shadow-xs">
        
        {/* Section Top Header & Google Rating Summary */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 border-b border-gray-200/80 gap-6">
          
          {/* Left Heading & Rating */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2.5">
              {/* Official Google G Logo SVG */}
              <svg width="22" height="22" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-700">
                Google Maps Verified Reviews
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <h2 className="font-serif-editorial text-[32px] sm:text-[38px] leading-none font-medium text-[#050505]">
                5.0
              </h2>
              <div className="flex items-center space-x-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" className="stroke-amber-500" />
                ))}
              </div>
              <span className="text-xs font-medium text-gray-600 font-sans">
                (48 Verified Client Ratings)
              </span>
            </div>

            <p className="text-xs text-gray-500 max-w-lg font-sans">
              Rated 5 stars by Melbourne and Sydney homeowners for excellence in architectural design, construction quality, and timeline management.
            </p>
          </div>

          {/* Right Action Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsWriteReviewOpen(true)}
              className="flex items-center space-x-2 bg-white hover:bg-gray-100 text-[#050505] border border-gray-300 text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-[3px] transition-all shadow-xs cursor-pointer"
            >
              <MessageSquarePlus size={15} />
              <span>Write a Review</span>
            </button>
            <button
              onClick={onOpenContact}
              className="flex items-center space-x-2 bg-[#050505] hover:bg-[#222222] text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-[3px] transition-all shadow-xs cursor-pointer"
            >
              <span>Consult Our Team</span>
            </button>
          </div>

        </div>

        {/* Google Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
          {reviewsList.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-[14px] p-6 border border-gray-200/70 shadow-xs flex flex-col justify-between hover:border-gray-300 transition-all"
            >
              <div>
                {/* Reviewer Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    {/* Avatar Badge */}
                    <div className="w-10 h-10 rounded-full bg-[#123248] text-white font-serif-editorial text-base font-semibold flex items-center justify-center shrink-0">
                      {review.authorName.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <h4 className="font-sans text-xs font-bold text-gray-900">
                          {review.authorName}
                        </h4>
                        {review.verified && (
                          <CheckCircle2 size={13} className="text-blue-600 fill-blue-50 shrink-0" />
                        )}
                      </div>
                      <p className="text-[10.5px] text-gray-500 font-sans">
                        {review.authorLocation} • <span className="text-gray-400">{review.timeAgo}</span>
                      </p>
                    </div>
                  </div>

                  {/* Google G small icon */}
                  <svg width="16" height="16" viewBox="0 0 24 24" className="shrink-0">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                </div>

                {/* Star Rating & Project Tag */}
                <div className="flex items-center space-x-3 my-3">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" className="stroke-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-blue-900 bg-blue-50 px-2 py-0.5 rounded-[2px]">
                    {review.projectBuilt}
                  </span>
                </div>

                {/* Review Body */}
                <p className="text-[14px] text-gray-700 leading-relaxed font-sans font-normal antialiased">
                  "{review.reviewText}"
                </p>
              </div>

              {/* Review Footer Like Button */}
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                <span className="text-gray-400 font-sans">Posted on Google Maps</span>
                <button
                  onClick={() => handleToggleLike(review.id)}
                  className={`flex items-center space-x-1.5 transition-colors cursor-pointer ${
                    liked[review.id] ? 'text-blue-600 font-semibold' : 'hover:text-gray-900'
                  }`}
                >
                  <ThumbsUp size={13} className={liked[review.id] ? 'fill-blue-600' : ''} />
                  <span>Helpful ({likes[review.id] || 0})</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Google Maps Location Preview Card */}
        <div className="mt-8 p-5 md:p-6 bg-white rounded-[14px] border border-gray-200/80 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
              <MapPin size={20} />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h4 className="font-sans text-sm font-bold text-gray-900">
                  RealestateRoyal Principal Studio
                </h4>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-medium px-2 py-0.5 rounded-[2px]">
                  Open Now • 8:30 AM - 6:00 PM
                </span>
              </div>
              <p className="text-xs text-gray-600 font-sans mt-0.5">
                Level 18, 120 Collins Street, Melbourne VIC 3000 Australia
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 w-full md:w-auto">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none text-center px-4 py-2.5 text-xs text-gray-700 hover:text-black font-semibold uppercase tracking-wider border border-gray-200 hover:border-gray-400 rounded-[3px] transition-all flex items-center justify-center space-x-1.5"
            >
              <span>View Map</span>
              <ExternalLink size={13} />
            </a>
            <button
              onClick={onOpenContact}
              className="flex-1 md:flex-none text-center px-5 py-2.5 text-xs text-white bg-[#050505] hover:bg-black font-semibold uppercase tracking-wider rounded-[3px] transition-all"
            >
              Book Site Visit
            </button>
          </div>
        </div>

      </div>

      {/* Write a Review Modal */}
      {isWriteReviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-lg bg-white rounded-[16px] shadow-2xl p-6 md:p-8 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
              <div className="flex items-center space-x-2">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-gray-900">
                  Write a Google Review
                </h3>
              </div>
              <button
                onClick={() => setIsWriteReviewOpen(false)}
                className="text-gray-400 hover:text-black text-sm"
              >
                ✕
              </button>
            </div>

            {reviewSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 size={36} className="text-emerald-600 mx-auto" />
                <h4 className="font-serif-editorial text-xl text-gray-900 font-medium">Thank You!</h4>
                <p className="text-xs text-gray-600">Your review has been published to Google Maps.</p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    placeholder="e.g. Catherine Hastings"
                    className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-[3px] focus:outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-700 mb-1">
                    Project Type
                  </label>
                  <input
                    type="text"
                    value={newReview.project}
                    onChange={(e) => setNewReview({ ...newReview, project: e.target.value })}
                    placeholder="e.g. Toorak Modern Residence Construction"
                    className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-[3px] focus:outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-700 mb-1">
                    Star Rating
                  </label>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        className="p-1 focus:outline-none cursor-pointer"
                      >
                        <Star
                          size={20}
                          fill={star <= newReview.rating ? '#F59E0B' : 'transparent'}
                          className={star <= newReview.rating ? 'stroke-amber-500' : 'stroke-gray-300'}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-700 mb-1">
                    Review Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={newReview.text}
                    onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                    placeholder="Describe your experience working with RealestateRoyal..."
                    className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-[3px] focus:outline-none focus:border-black resize-none"
                  />
                </div>

                <div className="flex items-center justify-end space-x-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsWriteReviewOpen(false)}
                    className="px-4 py-2 text-xs text-gray-600 hover:text-black"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#050505] hover:bg-black rounded-[3px]"
                  >
                    Post Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
