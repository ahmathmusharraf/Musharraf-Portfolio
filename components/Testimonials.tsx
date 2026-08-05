
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Quote, User, ChevronLeft, ChevronRight, MessageSquareQuote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);

  // Responsive items per page (1 on mobile, 2 on desktop)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemsPerPage = isMobile ? 1 : 2;
  const totalPages = Math.ceil(TESTIMONIALS.length / itemsPerPage);

  // Keep currentSlide valid when totalPages changes
  useEffect(() => {
    if (currentSlide >= totalPages && totalPages > 0) {
      setCurrentSlide(0);
    }
  }, [totalPages, currentSlide]);

  // Automatic slide rotation every 4.5 seconds
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % totalPages);
    }, 4500);

    return () => clearInterval(interval);
  }, [isHovered, totalPages]);

  const handleNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleDotClick = (pageIndex: number) => {
    setDirection(pageIndex > currentSlide ? 1 : -1);
    setCurrentSlide(pageIndex);
  };

  // Get current 2 testimonials for active page
  const currentPair = TESTIMONIALS.slice(
    currentSlide * itemsPerPage,
    currentSlide * itemsPerPage + itemsPerPage
  );

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
          className="mb-8 md:mb-14 text-center max-w-2xl mx-auto"
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

        {/* Carousel Container with Pause-on-Hover */}
        <div 
          className="max-w-[1100px] mx-auto relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Animated Carousel View (2 cards next to next) */}
          <div className="min-h-[260px] md:min-h-[220px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
              >
                {currentPair.map((t) => (
                  <div
                    key={t.id}
                    className="relative p-5 sm:p-6 rounded-2xl bg-[#0e1528] border border-white/10 shadow-xl hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="absolute top-4 right-4 text-amber-400/15 pointer-events-none">
                      <Quote size={32} />
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex gap-1 text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={12} fill="currentColor" />
                          ))}
                        </div>
                        <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest bg-slate-900/80 px-2 py-0.5 rounded-md border border-white/5">
                          Verified Endorsement
                        </span>
                      </div>
                      <p className="text-slate-200 text-xs sm:text-sm font-light leading-relaxed italic">
                        "{t.quote}"
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-3.5 border-t border-white/10 mt-auto">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-400 to-indigo-500 p-[1.5px] shrink-0">
                        <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                          <User size={14} className="text-amber-300" />
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-white font-bold text-xs sm:text-sm truncate">{t.name}</h4>
                        <span className="text-amber-400 text-[10.5px] sm:text-xs block truncate font-medium">{t.role}</span>
                        <span className="text-slate-400 text-[9px] uppercase font-mono tracking-wider block truncate">{t.company}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Navigation Controls & Progress Bar */}
          <div className="flex items-center justify-between mt-6 pt-3 border-t border-white/5 px-2">
            
            {/* Left Control Button */}
            <button
              type="button"
              onClick={handlePrev}
              style={{ WebkitTapHighlightColor: 'transparent' }}
              className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-amber-400/50 flex items-center justify-center active:scale-95 transition-all shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Slide Dots Indicator */}
            <div className="flex gap-2 items-center">
              {[...Array(totalPages)].map((_, pageIdx) => (
                <button
                  key={pageIdx}
                  onClick={() => handleDotClick(pageIdx)}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === pageIdx 
                      ? 'bg-gradient-to-r from-amber-400 to-indigo-500 w-6 shadow-[0_0_10px_rgba(245,158,11,0.5)]' 
                      : 'bg-slate-800 hover:bg-slate-700 w-2'
                  }`}
                  aria-label={`Go to slide ${pageIdx + 1}`}
                />
              ))}
            </div>

            {/* Right Control Button */}
            <button
              type="button"
              onClick={handleNext}
              style={{ WebkitTapHighlightColor: 'transparent' }}
              className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-amber-400/50 flex items-center justify-center active:scale-95 transition-all shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

