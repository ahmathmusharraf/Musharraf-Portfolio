import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CASE_STUDIES, PERSONAL_INFO } from '../constants';
import { CaseStudy } from '../types';
import { 
  Briefcase, 
  TrendingUp, 
  Target, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  ArrowUpRight, 
  Layers, 
  Sparkles, 
  X, 
  ChevronRight,
  ChevronLeft,
  BarChart3,
  Lightbulb,
  Rocket
} from 'lucide-react';

const CaseStudySection: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [activeTab, setActiveTab] = useState<'strategy' | 'execution' | 'results'>('strategy');
  const [mobileIndex, setMobileIndex] = useState(0);

  const renderCard = (cs: CaseStudy) => (
    <div className="group relative bg-[#0e1528] border border-white/10 hover:border-amber-400/40 rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_15px_40px_rgba(245,158,11,0.12)] transition-all duration-300 flex flex-col justify-between h-full">
      {/* Image Header with Overlay */}
      <div className="relative h-32 sm:h-40 w-full overflow-hidden bg-slate-950">
        <img 
          src={cs.image} 
          alt={cs.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1528] via-[#0e1528]/50 to-transparent opacity-90" />
        
        {/* Location & Period Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
          <span className="px-2 py-0.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/10 text-amber-300 text-[8.5px] font-black uppercase tracking-wider flex items-center gap-1">
            <MapPin size={9} className="text-rose-400" />
            {cs.location}
          </span>
          <span className="px-2 py-0.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/10 text-slate-300 text-[8.5px] font-mono font-bold uppercase">
            {cs.period}
          </span>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-2 left-3 right-3 sm:bottom-2.5 sm:left-3.5 sm:right-3.5">
          <span className="text-[8px] sm:text-[8.5px] font-mono font-extrabold uppercase tracking-widest text-indigo-400 block mb-0.5">
            {cs.client}
          </span>
          <h3 className="text-xs sm:text-base font-black text-white leading-tight line-clamp-2 group-hover:text-amber-300 transition-colors">
            {cs.title}
          </h3>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between space-y-2 sm:space-y-3">
        <p className="text-slate-300 text-[10px] sm:text-[11px] font-light leading-relaxed line-clamp-2">
          {cs.summary}
        </p>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 gap-1.5 sm:gap-2 pt-1.5 border-t border-white/5">
          {cs.metrics.slice(0, 2).map((m, idx) => (
            <div key={idx} className="p-1.5 sm:p-2 bg-slate-900/70 rounded-lg border border-white/5">
              <div className="text-xs sm:text-sm font-black text-amber-300 tracking-tight leading-none mb-0.5">
                {m.value}
              </div>
              <div className="text-[8px] sm:text-[8.5px] font-bold text-slate-300 uppercase tracking-wider truncate">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 pt-0.5">
          {cs.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-[7.5px] sm:text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 bg-slate-900 border border-white/10 rounded text-slate-400">
              {tag}
            </span>
          ))}
        </div>

        {/* Action Trigger */}
        <button
          onClick={() => {
            setSelectedCaseStudy(cs);
            setActiveTab('strategy');
          }}
          className="w-full mt-0.5 py-1.5 sm:py-2 px-2.5 sm:px-3 bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white rounded-lg text-[9.5px] sm:text-[11px] font-black uppercase tracking-wider flex items-center justify-center gap-1 border border-indigo-500/30 transition-all shadow-md active:scale-98"
        >
          <span>Explore Full Case Study</span>
          <ChevronRight size={12} className="sm:w-3.5 sm:h-3.5" />
        </button>
      </div>
    </div>
  );

  return (
    <section id="casestudies" className="py-10 md:py-16 bg-[#070b16] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          {...({
            initial: { opacity: 0, y: 15 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true }
          } as any)}
          className="mb-6 md:mb-10 text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-bold mb-2.5">
            <BarChart3 size={11} />
            <span>Proven Business Impact</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-2.5">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-indigo-400">Case Studies</span>
          </h2>

          <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 via-amber-300 to-indigo-500 mx-auto rounded-full shadow-[0_0_15px_rgba(245,158,11,0.4)] mb-3" />

          <p className="text-slate-400 text-xs font-light leading-relaxed">
            In-depth strategic campaign breakdowns showcasing performance digital marketing, high-converting video reels, and brand positioning across Dubai, Sri Lanka & GCC markets.
          </p>
        </motion.div>

        {/* MOBILE VIEW: Single Card Carousel Slider */}
        <div className="md:hidden max-w-sm mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={CASE_STUDIES[mobileIndex].id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                {renderCard(CASE_STUDIES[mobileIndex])}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-3 px-1">
            <button
              onClick={() => setMobileIndex((prev) => (prev > 0 ? prev - 1 : CASE_STUDIES.length - 1))}
              className="py-1 px-2.5 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-white active:scale-95 transition-all flex items-center gap-1 text-[9.5px] font-bold uppercase tracking-wider"
              aria-label="Previous Case Study"
            >
              <ChevronLeft size={13} />
              <span>Prev</span>
            </button>

            <div className="flex items-center gap-1.5">
              {CASE_STUDIES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setMobileIndex(idx)}
                  className={`h-1.5 rounded-full transition-all ${mobileIndex === idx ? 'w-5 bg-amber-400' : 'w-1.5 bg-slate-700'}`}
                  aria-label={`Go to case study ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setMobileIndex((prev) => (prev < CASE_STUDIES.length - 1 ? prev + 1 : 0))}
              className="py-1 px-2.5 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-white active:scale-95 transition-all flex items-center gap-1 text-[9.5px] font-bold uppercase tracking-wider"
              aria-label="Next Case Study"
            >
              <span>Next</span>
              <ChevronRight size={13} />
            </button>
          </div>
        </div>

        {/* DESKTOP VIEW: 3-Column Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-5 max-w-7xl mx-auto">
          {CASE_STUDIES.map((cs, index) => (
            <motion.div
              key={cs.id}
              {...({
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: index * 0.08, duration: 0.4 }
              } as any)}
            >
              {renderCard(cs)}
            </motion.div>
          ))}
        </div>

        {/* Case Study Detailed Modal */}
        <AnimatePresence>
          {selectedCaseStudy && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-2xl p-3 sm:p-6 overflow-y-auto"
              onClick={() => setSelectedCaseStudy(null)}
            >
              <button
                className="fixed top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-slate-900 border border-white/15 text-slate-300 hover:text-white hover:bg-slate-800 transition-all z-50 shadow-2xl"
                onClick={() => setSelectedCaseStudy(null)}
                aria-label="Close Case Study"
              >
                <X size={20} />
              </button>

              <motion.div
                initial={{ scale: 0.93, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.93, y: 15 }}
                className="relative w-full max-w-2xl my-auto bg-[#0c1120] border border-white/15 rounded-xl md:rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.95)] text-left"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Hero Header Banner */}
                <div className="relative h-28 sm:h-40 w-full overflow-hidden bg-slate-950">
                  <img 
                    src={selectedCaseStudy.image} 
                    alt={selectedCaseStudy.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1120] via-[#0c1120]/75 to-transparent" />

                  <div className="absolute bottom-2.5 left-3 right-3 sm:bottom-3 sm:left-4 sm:right-4 space-y-0.5">
                    <div className="flex flex-wrap items-center gap-1 mb-0.5">
                      <span className="px-1.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[7.5px] sm:text-[8.5px] font-black uppercase tracking-wider">
                        {selectedCaseStudy.category}
                      </span>
                      <span className="px-1.5 py-0.5 rounded-full bg-slate-900 border border-white/10 text-slate-300 text-[7.5px] sm:text-[8.5px] font-mono font-bold uppercase">
                        {selectedCaseStudy.location}
                      </span>
                    </div>
                    <h3 className="text-xs sm:text-lg font-black text-white tracking-tight leading-snug line-clamp-2">
                      {selectedCaseStudy.title}
                    </h3>
                    <p className="text-amber-400 font-mono text-[9.5px] sm:text-[11px] font-bold truncate">
                      Client: {selectedCaseStudy.client}
                    </p>
                  </div>
                </div>

                {/* Modal Main Content */}
                <div className="p-3 sm:p-5 space-y-3 sm:space-y-4">

                  {/* Metrics Banner */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 bg-slate-900/80 p-2 sm:p-2.5 rounded-xl border border-white/10">
                    {selectedCaseStudy.metrics.map((m, idx) => (
                      <div key={idx} className="text-center p-0.5 sm:p-1">
                        <div className="text-sm sm:text-lg font-black text-amber-300 tracking-tight leading-none mb-0.5">
                          {m.value}
                        </div>
                        <div className="text-[7.5px] sm:text-[8.5px] font-extrabold uppercase text-slate-300 tracking-wider">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Problem & Challenge Statement */}
                  <div className="p-2.5 sm:p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 space-y-0.5 sm:space-y-1">
                    <div className="flex items-center gap-1 text-rose-300 font-black text-[10px] sm:text-[11px] uppercase tracking-wider">
                      <Target size={11} />
                      <span>The Core Challenge</span>
                    </div>
                    <p className="text-slate-300 text-[10.5px] sm:text-xs font-light leading-relaxed">
                      {selectedCaseStudy.problem}
                    </p>
                  </div>

                  {/* Interactive Strategy / Execution / Results Tabs */}
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex border-b border-white/10 gap-1 overflow-x-auto no-scrollbar">
                      <button
                        onClick={() => setActiveTab('strategy')}
                        className={`pb-1.5 px-1.5 sm:px-2.5 text-[9.5px] sm:text-[11px] font-black uppercase tracking-wider transition-all flex items-center gap-1 border-b-2 shrink-0 ${
                          activeTab === 'strategy' 
                            ? 'border-amber-400 text-amber-300' 
                            : 'border-transparent text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <Lightbulb size={11} /> Strategy
                      </button>
                      <button
                        onClick={() => setActiveTab('execution')}
                        className={`pb-1.5 px-1.5 sm:px-2.5 text-[9.5px] sm:text-[11px] font-black uppercase tracking-wider transition-all flex items-center gap-1 border-b-2 shrink-0 ${
                          activeTab === 'execution' 
                            ? 'border-amber-400 text-amber-300' 
                            : 'border-transparent text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <Rocket size={11} /> Execution
                      </button>
                      <button
                        onClick={() => setActiveTab('results')}
                        className={`pb-1.5 px-1.5 sm:px-2.5 text-[9.5px] sm:text-[11px] font-black uppercase tracking-wider transition-all flex items-center gap-1 border-b-2 shrink-0 ${
                          activeTab === 'results' 
                            ? 'border-amber-400 text-amber-300' 
                            : 'border-transparent text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <TrendingUp size={11} /> Results
                      </button>
                    </div>

                    <div className="bg-slate-900/60 p-2.5 sm:p-3 rounded-xl border border-white/5 min-h-[90px] sm:min-h-[110px]">
                      {activeTab === 'strategy' && (
                        <ul className="space-y-1.5 sm:space-y-2">
                          {selectedCaseStudy.strategy.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] text-slate-200 font-light leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {activeTab === 'execution' && (
                        <ul className="space-y-1.5 sm:space-y-2">
                          {selectedCaseStudy.execution.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] text-slate-200 font-light leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-1" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {activeTab === 'results' && (
                        <ul className="space-y-1.5 sm:space-y-2">
                          {selectedCaseStudy.results.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] text-slate-200 font-light leading-relaxed">
                              <CheckCircle2 size={12} className="text-emerald-400 shrink-0 mt-0.5" />
                              <span className="font-semibold text-white/90">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2">
                    <span className="text-[8.5px] sm:text-[9.5px] text-slate-400 font-mono uppercase tracking-wider text-center sm:text-left">
                      Strategy & Direction by <strong className="text-amber-300">{PERSONAL_INFO.name}</strong>
                    </span>

                    <div className="flex items-center gap-1.5 w-full sm:w-auto">
                      <a
                        href="#contact"
                        onClick={() => setSelectedCaseStudy(null)}
                        className="flex-1 sm:flex-none px-3 py-1.5 sm:px-4 sm:py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-lg text-[10px] sm:text-[11px] uppercase tracking-wider flex items-center justify-center gap-1 transition-all shadow-md"
                      >
                        <span>Discuss Campaign</span>
                        <ArrowUpRight size={12} />
                      </a>
                      <button
                        onClick={() => setSelectedCaseStudy(null)}
                        className="px-3 py-1.5 sm:px-3.5 sm:py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-lg text-[10px] sm:text-[11px] uppercase tracking-wider"
                      >
                        Close
                      </button>
                    </div>
                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CaseStudySection;
