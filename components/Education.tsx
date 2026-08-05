import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EDUCATION } from '../constants';
import { GraduationCap, MapPin, ChevronRight, Award, BookOpen } from 'lucide-react';

const getDegreeTags = (degree: string) => {
  const d = degree.toLowerCase();
  if (d.includes('b.sc')) {
    return ["Honours Level", "System Design", "Cloud Infrastructure"];
  }
  if (d.includes('btec') || d.includes('higher national')) {
    return ["Pearson Framework", "Database Theory", "Web Engineering"];
  }
  return ["Foundational IT", "Business Communication", "Interactive Media"];
};

const Education: React.FC = () => {
  const [mobileIdx, setMobileIdx] = useState<number>(0);

  return (
    <section className="py-12 md:py-28 bg-[#0b0f1d] relative overflow-hidden">
      {/* Decorative Blur Backlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          {...({
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true }
          } as any)}
          className="mb-8 md:mb-16 text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 font-mono text-[10px] sm:text-xs tracking-[0.25em] uppercase font-bold mb-4">
            <BookOpen size={12} />
            <span>Academic Foundation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-amber-300">Qualifications</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-amber-400 mx-auto rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)] mb-4" />

          <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
            Rigorous academic grounding in computer science, software engineering, and digital media architecture.
          </p>
        </motion.div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-[1400px] mx-auto">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.id}
              {...({
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: index * 0.15, duration: 0.5 }
              } as any)}
              className="group relative bg-[#0e1528] p-7 rounded-2xl border border-white/10 overflow-hidden hover:border-cyan-500/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] flex flex-col justify-between"
            >
              {/* Corner Ambient Light */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div>
                {/* Icon & Year Pill */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-slate-900 border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300 shadow-lg">
                    <GraduationCap className="text-cyan-400 group-hover:text-slate-950 transition-colors" size={24} />
                  </div>
                  <span className="px-3 py-1 bg-slate-900 border border-white/10 rounded-full text-slate-300 text-xs font-mono font-bold group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-all">
                    {edu.period}
                  </span>
                </div>
                
                <h3 className="text-lg font-black text-white mb-2 leading-snug tracking-tight group-hover:text-cyan-300 transition-colors">
                  {edu.degree}
                </h3>
                
                <p className="text-slate-300 font-semibold mb-4 text-xs tracking-wide">{edu.institution}</p>
                
                {/* Degree tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {getDegreeTags(edu.degree).map(tag => (
                    <span key={tag} className="text-[8px] font-bold uppercase tracking-wider px-2.5 py-1 bg-white/5 rounded-md border border-white/5 text-slate-300 group-hover:border-cyan-500/20 group-hover:text-cyan-200 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Location Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-slate-400 font-mono">
                <MapPin size={13} className="text-cyan-400 shrink-0" />
                <span>{edu.location}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View Slider */}
        <div className="md:hidden space-y-4 max-w-sm mx-auto">
          {EDUCATION.length > 0 ? (
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={EDUCATION[mobileIdx].id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="relative p-6 rounded-2xl bg-[#0e1528] border border-white/10 shadow-2xl overflow-hidden min-h-[220px] flex flex-col justify-between"
                >
                  <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-slate-900 border border-white/10 rounded-xl flex items-center justify-center text-cyan-400 shadow-sm">
                        <GraduationCap size={20} />
                      </div>
                      <span className="px-2.5 py-0.5 bg-slate-900 border border-white/10 rounded-full text-cyan-300 font-mono text-[9px] font-bold">
                        {EDUCATION[mobileIdx].period}
                      </span>
                    </div>

                    <h3 className="text-base font-black text-white leading-tight tracking-tight mb-1.5">
                      {EDUCATION[mobileIdx].degree}
                    </h3>
                    <p className="text-slate-300 text-xs font-semibold leading-relaxed mb-3">
                      {EDUCATION[mobileIdx].institution}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {getDegreeTags(EDUCATION[mobileIdx].degree).map(tag => (
                        <span key={tag} className="text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 bg-white/5 rounded border border-white/5 text-cyan-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-white/5">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-cyan-400" />
                      <span>{EDUCATION[mobileIdx].location}</span>
                    </div>
                    <span className="text-[9px] font-mono text-slate-500">
                      {mobileIdx + 1} / {EDUCATION.length}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls */}
              <div className="flex items-center justify-between mt-4 px-1">
                <button
                  type="button"
                  onClick={() => setMobileIdx(p => (p === 0 ? EDUCATION.length - 1 : p - 1))}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 text-slate-300 flex items-center justify-center active:scale-95 transition-all"
                >
                  <ChevronRight size={16} className="rotate-180" />
                </button>

                <div className="flex gap-1.5">
                  {EDUCATION.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setMobileIdx(dotIdx)}
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        mobileIdx === dotIdx ? 'bg-cyan-400 w-4' : 'bg-slate-800 w-1.5'
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setMobileIdx(p => (p === EDUCATION.length - 1 ? 0 : p + 1))}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 text-slate-300 flex items-center justify-center active:scale-95 transition-all"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Education;
