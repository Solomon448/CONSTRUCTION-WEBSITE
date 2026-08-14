import React, { useState, useEffect, useRef } from 'react';
import { Building2, Award, Calendar } from 'lucide-react';

interface StatsCounterSectionProps {
  variant?: 'homepage' | 'modal';
}

export const StatsCounterSection: React.FC<StatsCounterSectionProps> = ({ variant = 'homepage' }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    satisfaction: 0,
    years: 0,
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 350);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1400; // ms
    const steps = 40;
    const intervalTime = duration / steps;

    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setCounts({
        projects: Math.floor(easeProgress * 180),
        satisfaction: Math.floor(easeProgress * 95),
        years: Math.floor(easeProgress * 10),
      });

      if (step >= steps) {
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [hasAnimated]);

  const stats = [
    {
      id: 'projects',
      value: `${counts.projects}+`,
      target: '180+',
      title: 'Projects Completed',
      subtitle: 'Bespoke custom residences, luxury villas & urban architectural builds delivered.',
      icon: Building2,
      accentColor: 'text-emerald-400',
    },
    {
      id: 'satisfaction',
      value: `${counts.satisfaction}%`,
      target: '95%',
      title: 'Client Satisfaction',
      subtitle: 'Verified independent homeowner review approval & satisfaction rating.',
      icon: Award,
      accentColor: 'text-amber-400',
    },
    {
      id: 'years',
      value: `${counts.years}+ Years`,
      target: '10+ Years',
      title: 'Years of Establishment',
      subtitle: 'Decade of registered master builder & architectural engineering excellence.',
      icon: Calendar,
      accentColor: 'text-blue-400',
    },
  ];

  if (variant === 'modal') {
    return (
      <div ref={sectionRef} className="bg-[#050505] text-white rounded-[14px] p-6 sm:p-7 border border-white/10 shadow-md font-sans">
        <div className="flex items-center space-x-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10.5px] uppercase tracking-[0.2em] text-gray-400 font-bold">
            Studio Track Record & Metrics
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.id} className="border-l-2 border-white/15 pl-4 py-1 space-y-1.5">
                <div className="flex items-center space-x-2">
                  <Icon size={16} className={stat.accentColor} />
                  <span className="font-serif-editorial text-3xl sm:text-4xl font-light text-white tracking-tight">
                    {stat.value}
                  </span>
                </div>
                <h4 className="text-[14px] font-bold text-gray-100 font-sans tracking-snug">
                  {stat.title}
                </h4>
                <p className="text-[12px] text-gray-400 font-sans leading-relaxed font-normal antialiased">
                  {stat.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <section ref={sectionRef} className="w-full px-4 sm:px-8 md:px-12 lg:px-16 my-8 md:my-14 font-sans">
      <div className="relative bg-[#050505] text-white rounded-[20px] md:rounded-[24px] p-7 sm:p-10 md:p-12 shadow-xl border border-white/10 overflow-hidden">
        
        {/* Decorative Background Glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between pb-8 mb-8 border-b border-white/10 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-[4px] border border-white/15 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[10.5px] uppercase tracking-[0.2em] font-bold text-gray-200">
                Studio Performance & Proven Track Record
              </span>
            </div>
            <h2 className="font-serif-editorial text-[30px] sm:text-[38px] md:text-[44px] leading-[1.05] tracking-tight font-light text-white">
              Proven <span className="italic font-normal text-amber-100">Excellence</span> in Numbers
            </h2>
          </div>
          <p className="text-[13.5px] sm:text-[14px] text-gray-400 max-w-md font-sans font-normal antialiased leading-relaxed">
            Every architectural residence we deliver is backed by a decade of registered master builder experience, 95% client satisfaction, and fixed-price contracts.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-[16px] p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-[8px] bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/15 text-white">
                    <Icon size={20} className={stat.accentColor} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500 font-sans">
                    0{idx + 1} / Metric
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="font-serif-editorial text-[42px] sm:text-[50px] lg:text-[54px] font-light text-white tracking-tight leading-none group-hover:scale-[1.02] transition-transform origin-left">
                    {stat.value}
                  </div>
                  <h3 className="font-sans text-[17px] sm:text-[18px] font-bold text-white tracking-tight pt-2">
                    {stat.title}
                  </h3>
                  <p className="text-[13.5px] text-gray-400 font-sans leading-[1.6] font-normal antialiased pt-1">
                    {stat.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
