
import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Quote, User, ChevronLeft, ChevronRight, MessageSquareQuote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndexMobile, setActiveIndexMobile] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (ref) {
      handleScroll();
      ref.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleScroll);
      return () => {
        ref.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
      };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollToSlide = (index: number) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({ left: index * clientWidth, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-12 md:py-28 bg-[#080c16] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          {...({
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true }
          } as any)}
          className="mb-8 md:mb-16 text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 font-mono text-[10px] sm:text-xs tracking-[0.25em] uppercase font-bold mb-4">
            <MessageSquareQuote size={12} />
            <span>Colleague Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            What <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-indigo-300 to-cyan-400">Collaborators Say</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 via-indigo-500 to-cyan-400 mx-auto rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)] mb-4" />

          <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
            Testimonials from cross-functional teams, agency leadership, and technical directors.
          </p>
        </motion.div>

        {/* Desktop View */}
        <div className="hidden md:block max-w-5xl mx-auto">
          {TESTIMONIALS.length === 1 ? (
            <motion.div
              {...({
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true }
              } as any)}
              className="relative p-10 rounded-3xl bg-[#0e1528] border border-white/10 shadow-2xl flex flex-col justify-between"
            >
              <div className="absolute top-6 right-8 text-amber-400/20">
                <Quote size={64} />
              </div>

              <div className="flex gap-1 text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-slate-200 text-lg font-light leading-relaxed italic mb-8 relative z-10">
                "{TESTIMONIALS[0].quote}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-400 to-indigo-500 p-[2px] shrink-0">
                  <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                    <User size={20} className="text-amber-300" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-black text-sm">{TESTIMONIALS[0].name}</h4>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-amber-400 font-semibold">{TESTIMONIALS[0].role}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400 font-mono text-[10px] uppercase tracking-wider">{TESTIMONIALS[0].company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="relative">
              <div 
                ref={scrollRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {TESTIMONIALS.map((t, idx) => (
                  <div 
                    key={t.id} 
                    className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center"
                  >
                    <div className="h-full relative p-8 rounded-2xl bg-[#0e1528] border border-white/10 shadow-xl hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between">
                      <div className="absolute top-6 right-6 text-amber-400/15">
                        <Quote size={40} />
                      </div>

                      <div className="mb-6">
                        <div className="flex gap-1 text-amber-400 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} fill="currentColor" />
                          ))}
                        </div>
                        <p className="text-slate-300 text-sm font-light leading-relaxed italic">
                          "{t.quote}"
                        </p>
                      </div>

                      <div className="flex items-center gap-3.5 pt-5 border-t border-white/10">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-indigo-500 p-[2px] shrink-0">
                          <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                            <User size={16} className="text-amber-300" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-xs">{t.name}</h4>
                          <span className="text-amber-400 text-[11px] block">{t.role}</span>
                          <span className="text-slate-400 text-[9px] uppercase font-mono tracking-wider">{t.company}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-4 max-w-sm mx-auto">
          {TESTIMONIALS.length > 0 ? (
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={TESTIMONIALS[activeIndexMobile].id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="relative p-6 rounded-2xl bg-[#0e1528] border border-white/10 shadow-2xl overflow-hidden min-h-[220px] flex flex-col justify-between"
                >
                  <div className="absolute top-4 right-4 text-amber-400/15">
                    <Quote size={32} />
                  </div>

                  <div>
                    <div className="flex gap-1 text-amber-400 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-slate-200 text-xs font-light italic leading-relaxed mb-4">
                      "{TESTIMONIALS[activeIndexMobile].quote}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-400 to-indigo-500 p-[1.5px] shrink-0">
                      <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                        <User size={14} className="text-amber-300" />
                      </div>
                    </div>
                    <div className="flex-grow min-w-0">
                      <h4 className="text-white font-bold text-xs truncate">{TESTIMONIALS[activeIndexMobile].name}</h4>
                      <div className="flex items-center gap-1 truncate text-[10px]">
                        <span className="text-amber-400 font-semibold">{TESTIMONIALS[activeIndexMobile].role}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400 font-mono text-[8.5px] uppercase">{TESTIMONIALS[activeIndexMobile].company}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls */}
              <div className="flex items-center justify-between mt-4 px-1">
                <button
                  type="button"
                  onClick={() => setActiveIndexMobile(p => (p === 0 ? TESTIMONIALS.length - 1 : p - 1))}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 text-slate-300 flex items-center justify-center active:scale-95 transition-all"
                >
                  <ChevronLeft size={16} />
                </button>

                <div className="flex gap-1.5">
                  {TESTIMONIALS.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setActiveIndexMobile(dotIdx)}
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeIndexMobile === dotIdx ? 'bg-amber-400 w-4' : 'bg-slate-800 w-1.5'
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveIndexMobile(p => (p === TESTIMONIALS.length - 1 ? 0 : p + 1))}
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

export default Testimonials;
