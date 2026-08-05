
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUp, ArrowLeft, Download } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import VisualWorks from './components/VisualWorks';
import Education from './components/Education';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import PrintableResume from './components/PrintableResume';
import MobileDock from './components/MobileDock';
import { SITE_CONFIG } from './constants';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    // Dynamic Head updates for SEO
    document.title = SITE_CONFIG.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', SITE_CONFIG.description);
    
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Resume Mode Rendering
  if (showResume) {
    return (
      <div className="min-h-screen bg-slate-950 pt-20 pb-12 sm:pt-24 relative print:bg-white print:p-0">
        <div className="fixed top-4 right-4 sm:top-6 sm:right-8 z-50 flex items-center gap-2 sm:gap-3 print:hidden bg-slate-900/90 backdrop-blur-xl p-2 rounded-2xl border border-white/10 shadow-2xl">
          <button 
            onClick={() => setShowResume(false)} 
            className="flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 bg-slate-800 text-white rounded-xl text-xs sm:text-sm font-bold shadow-lg hover:bg-slate-700 transition-all border border-white/10 active:scale-95"
          >
            <ArrowLeft size={16} /> <span className="hidden sm:inline">Exit Preview</span><span className="sm:hidden">Exit</span>
          </button>

          <button 
            onClick={() => window.print()} 
            className="flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 bg-indigo-600 text-white rounded-xl text-xs sm:text-sm font-bold shadow-lg hover:bg-indigo-500 transition-all border border-indigo-400/30 active:scale-95"
          >
            <Download size={16} /> Print / Save PDF
          </button>
        </div>
        <PrintableResume />
      </div>
    );
  }

  // Portfolio Mode Rendering
  return (
    <div className="min-h-[100dvh] bg-dark text-slate-200 selection:bg-primary/30 selection:text-white overflow-x-hidden scroll-smooth">
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary z-[100] origin-left" style={{ scaleX }} />
      
      <Navbar />
      
      <main>
        <Hero onOpenResume={() => setShowResume(true)} />
        <Experience />
        <Skills />
        <VisualWorks />
        <Projects />
        <Education />
        <Testimonials />
      </main>
      
      <Contact />
      <FloatingWhatsApp />
      <MobileDock />
      
      <AnimatePresence>
        {showScrollTop && (
          <motion.button 
            initial={{ opacity: 0, scale: 0.5 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-36 md:bottom-22 right-4 md:right-8 w-9 h-9 md:w-12 md:h-12 flex items-center justify-center bg-[#0e1528]/90 backdrop-blur-md rounded-xl shadow-xl border border-white/10 text-slate-300 hover:text-white hover:bg-indigo-600 transition-all z-40 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
