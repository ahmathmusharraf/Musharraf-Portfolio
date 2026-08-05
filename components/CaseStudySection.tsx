import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CASE_STUDIES } from '../constants';
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
  BarChart3,
  Lightbulb,
  Rocket
} from 'lucide-react';

const CaseStudySection: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [activeTab, setActiveTab] = useState<'strategy' | 'execution' | 'results'>('strategy');

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

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
          {CASE_STUDIES.map((cs, index) => (
            <motion.div
              key={cs.id}
              {...({
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: index * 0.08, duration: 0.4 }
              } as any)}
              className="group relative bg-[#0e1528] border border-white/10 hover:border-amber-400/40 rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_15px_40px_rgba(245,158,11,0.12)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Header with Overlay */}
              <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-slate-950">
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
                <div className="absolute bottom-2.5 left-3.5 right-3.5">
                  <span className="text-[8.5px] font-mono font-extrabold uppercase tracking-widest text-indigo-400 block mb-0.5">
                    {cs.client}
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-white leading-tight line-clamp-2 group-hover:text-amber-300 transition-colors">
                    {cs.title}
                  </h3>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <p className="text-slate-300 text-[11px] font-light leading-relaxed line-clamp-2">
                  {cs.summary}
                </p>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5">
                  {cs.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="p-2 bg-slate-900/70 rounded-lg border border-white/5">
                      <div className="text-sm font-black text-amber-300 tracking-tight leading-none mb-0.5">
                        {m.value}
                      </div>
                      <div className="text-[8.5px] font-bold text-slate-300 uppercase tracking-wider truncate">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 pt-0.5">
                  {cs.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 bg-slate-900 border border-white/10 rounded text-slate-400">
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
                  className="w-full mt-1 py-2 px-3 bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white rounded-lg text-[11px] font-black uppercase tracking-wider flex items-center justify-center gap-1.5 border border-indigo-500/30 transition-all shadow-md active:scale-98"
                >
                  <span>Explore Full Case Study</span>
                  <ChevronRight size={14} />
                </button>
              </div>
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
                initial={{ scale: 0.93, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.93, y: 20 }}
                className="relative w-full max-w-3xl my-auto bg-[#0c1120] border border-white/15 rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.95)] text-left"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Hero Header Banner */}
                <div className="relative h-48 sm:h-60 w-full overflow-hidden bg-slate-950">
                  <img 
                    src={selectedCaseStudy.image} 
                    alt={selectedCaseStudy.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1120] via-[#0c1120]/70 to-transparent" />

                  <div className="absolute bottom-4 left-5 right-5 space-y-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[9px] font-black uppercase tracking-wider">
                        {selectedCaseStudy.category}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-900 border border-white/10 text-slate-300 text-[9px] font-mono font-bold uppercase">
                        {selectedCaseStudy.location}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
                      {selectedCaseStudy.title}
                    </h3>
                    <p className="text-amber-400 font-mono text-xs font-bold">
                      Client: {selectedCaseStudy.client}
                    </p>
                  </div>
                </div>

                {/* Modal Main Content */}
                <div className="p-5 sm:p-7 space-y-6">

                  {/* Metrics Banner */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-900/80 p-3.5 rounded-2xl border border-white/10">
                    {selectedCaseStudy.metrics.map((m, idx) => (
                      <div key={idx} className="text-center p-1.5">
                        <div className="text-lg sm:text-xl font-black text-amber-300 tracking-tight leading-none mb-1">
                          {m.value}
                        </div>
                        <div className="text-[9px] font-extrabold uppercase text-slate-300 tracking-wider">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Problem & Challenge Statement */}
                  <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 space-y-1.5">
                    <div className="flex items-center gap-2 text-rose-300 font-black text-xs uppercase tracking-wider">
                      <Target size={14} />
                      <span>The Core Challenge</span>
                    </div>
                    <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                      {selectedCaseStudy.problem}
                    </p>
                  </div>

                  {/* Interactive Strategy / Execution / Results Tabs */}
                  <div className="space-y-4">
                    <div className="flex border-b border-white/10 gap-2">
                      <button
                        onClick={() => setActiveTab('strategy')}
                        className={`pb-2.5 px-3 text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 border-b-2 ${
                          activeTab === 'strategy' 
                            ? 'border-amber-400 text-amber-300' 
                            : 'border-transparent text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <Lightbulb size={13} /> Strategy
                      </button>
                      <button
                        onClick={() => setActiveTab('execution')}
                        className={`pb-2.5 px-3 text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 border-b-2 ${
                          activeTab === 'execution' 
                            ? 'border-amber-400 text-amber-300' 
                            : 'border-transparent text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <Rocket size={13} /> Execution
                      </button>
                      <button
                        onClick={() => setActiveTab('results')}
                        className={`pb-2.5 px-3 text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 border-b-2 ${
                          activeTab === 'results' 
                            ? 'border-amber-400 text-amber-300' 
                            : 'border-transparent text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <TrendingUp size={13} /> Measurable Results
                      </button>
                    </div>

                    <div className="bg-slate-900/60 p-4 rounded-2xl border border-white/5 min-h-[140px]">
                      {activeTab === 'strategy' && (
                        <ul className="space-y-2.5">
                          {selectedCaseStudy.strategy.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 font-light leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {activeTab === 'execution' && (
                        <ul className="space-y-2.5">
                          {selectedCaseStudy.execution.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 font-light leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-1.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {activeTab === 'results' && (
                        <ul className="space-y-2.5">
                          {selectedCaseStudy.results.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 font-light leading-relaxed">
                              <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                              <span className="font-semibold text-white/90">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                      Strategy & Direction by <strong className="text-amber-300">Musharraf Ahamed</strong>
                    </span>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <a
                        href="#contact"
                        onClick={() => setSelectedCaseStudy(null)}
                        className="flex-1 sm:flex-none px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-lg"
                      >
                        <span>Discuss Similar Campaign</span>
                        <ArrowUpRight size={14} />
                      </a>
                      <button
                        onClick={() => setSelectedCaseStudy(null)}
                        className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl text-xs uppercase tracking-wider"
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
