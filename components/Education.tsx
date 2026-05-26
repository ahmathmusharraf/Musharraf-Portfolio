import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EDUCATION } from '../constants';
import { GraduationCap, MapPin, ChevronRight, Sparkles } from 'lucide-react';

const getDegreeTags = (degree: string) => {
  const d = degree.toLowerCase();
  if (d.includes('b.sc')) {
    return ["Honours Level", "System Design", "Full Cloud Stack"];
  }
  if (d.includes('btec') || d.includes('higher national')) {
    return ["Pearson Framework", "Database Theory", "Vite & React Dev"];
  }
  return ["Foundational IT", "Business English", "Interactive Media"];
};

const Education: React.FC = () => {
  const [mobileIdx, setMobileIdx] = useState<number>(0);

  return (
    <section className="py-10 md:py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          {...({
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true }
          } as any)}
          className="mb-4 md:mb-16 text-center"
        >
          <span className="text-secondary font-mono text-xs md:text-sm tracking-widest uppercase">Academic Foundation</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Education & Qualifications</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        {/* Grid Layout (Desktop & Tablet only) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.id}
              {...({
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: index * 0.15 }
              } as any)}
              className="group relative bg-[#0e1324]/40 backdrop-blur-md p-8 rounded-3xl border border-white/[0.05] overflow-hidden hover:border-indigo-500/35 transition-all duration-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:-translate-y-1.5"
            >
              {/* Card Gradient Background and Corner Flare */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-750"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-slate-900 border border-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white group-hover:rotate-[8deg] transition-all duration-300 shadow-xl">
                  <GraduationCap className="text-secondary group-hover:text-white transition-colors" size={26} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 leading-tight tracking-tight group-hover:text-primary transition-colors">
                  {edu.degree}
                </h3>
                
                <p className="text-slate-300 font-semibold mb-4 text-sm tracking-wide">{edu.institution}</p>
                
                <div className="flex justify-between items-center text-xs font-mono text-slate-500 mt-6 pt-6 border-t border-white/[0.04] group-hover:border-white/[0.08] transition-colors">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <MapPin size={12} className="text-secondary/70" />
                    <span>{edu.location}</span>
                  </div>
                  <span className="px-3 py-1 bg-slate-900 border border-white/5 rounded-full text-slate-300 font-bold group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-all">
                    {edu.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View: High Impact One-View Compact Slider */}
        <div className="md:hidden space-y-4 px-1 max-w-sm mx-auto">
          {EDUCATION.length > 0 ? (
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={EDUCATION[mobileIdx].id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="relative p-5 rounded-2xl bg-[#0e1324]/40 border border-white/[0.05] shadow-2xl overflow-hidden min-h-[220px] flex flex-col justify-between"
                >
                  {/* Subtle top background ambient flare */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none"></div>

                  <div>
                    {/* Header line */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-9 h-9 bg-slate-900 border border-white/5 rounded-xl flex items-center justify-center text-secondary shadow-sm">
                        <GraduationCap size={16} />
                      </div>
                      <div className="bg-slate-950/85 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10 text-[8px] font-mono text-white tracking-widest">
                        {mobileIdx + 1} OF {EDUCATION.length}
                      </div>
                    </div>

                    {/* Content details */}
                    <h3 className="text-xs font-black text-white leading-tight tracking-tight mb-1">
                      {EDUCATION[mobileIdx].degree}
                    </h3>
                    <p className="text-slate-300 text-[10.5px] font-semibold leading-relaxed mb-3">
                      {EDUCATION[mobileIdx].institution}
                    </p>

                    {/* Micro tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {getDegreeTags(EDUCATION[mobileIdx].degree).map(tag => (
                        <span key={tag} className="text-[7.5px] font-bold uppercase tracking-wider px-2 py-0.5 bg-white/5 rounded border border-white/[0.03] text-indigo-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Period and Location Footer line */}
                  <div className="flex items-center justify-between text-[10px] text-slate-500 pt-3.5 border-t border-white/[0.03] select-none">
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <MapPin size={11} className="text-secondary/70" />
                      <span>{EDUCATION[mobileIdx].location}</span>
                    </div>
                    <span className="px-2.5 py-0.5 bg-slate-900 border border-white/5 rounded-full text-slate-300 font-bold">
                      {EDUCATION[mobileIdx].period}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Navigation Controls */}
              <div className="flex items-center justify-between mt-3 px-1">
                <button
                  type="button"
                  onClick={() => setMobileIdx(p => (p === 0 ? EDUCATION.length - 1 : p - 1))}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-white/5 text-slate-400 flex items-center justify-center active:scale-95 transition-all"
                >
                  <ChevronRight size={14} className="rotate-180" />
                </button>

                {/* Slider Progress Indicator Dots */}
                <div className="flex gap-1">
                  {EDUCATION.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setMobileIdx(dotIdx)}
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        mobileIdx === dotIdx ? 'bg-indigo-400 w-3' : 'bg-slate-800'
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setMobileIdx(p => (p === EDUCATION.length - 1 ? 0 : p + 1))}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-white/5 text-slate-400 flex items-center justify-center active:scale-95 transition-all"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-[#0e1324]/40 border border-white/5 rounded-2xl p-6 text-center">
              <span className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">No educational records available</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;
