
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Profile', href: '#' },
    { name: 'Experience', href: '#experience' },
    { name: 'Expertise', href: '#skills' },
    { name: 'Creative Works', href: '#visuals' },
    { name: 'Tech Stack', href: '#engineering' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-950/80 backdrop-blur-xl shadow-2xl border-b border-white/5 py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-black text-white tracking-tighter group flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm">M</div>
          <span>Musharraf<span className="text-primary group-hover:text-secondary transition-colors">.</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-all relative group/link"
              >
                {link.name}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left"></span>
              </a>
            ))}
          </div>
          <a 
            href={`mailto:${PERSONAL_INFO.email}`}
            className="px-6 py-3 bg-white text-slate-950 text-xs font-black uppercase tracking-[0.2em] rounded-full hover:bg-primary hover:text-white transition-all shadow-xl"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle - Minimalist */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 bg-white/5 border border-white/10 rounded-xl text-white backdrop-blur-sm active:scale-90 transition-transform"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown - Small and Professional */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop for closing */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-slate-950/20 backdrop-blur-sm sm:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="absolute top-[70px] right-6 z-[70] w-64 bg-slate-900 border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden sm:hidden"
            >
              <div className="p-2 space-y-1">
                {navLinks.map((link, idx) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-slate-300 hover:text-white transition-all group"
                  >
                    <span className="text-[10px] font-bold text-primary opacity-50 group-hover:opacity-100">0{idx + 1}</span>
                    <span className="text-sm font-bold uppercase tracking-widest">{link.name}</span>
                  </a>
                ))}
                
                <div className="mt-2 pt-2 border-t border-white/5">
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex items-center justify-center w-full py-3 bg-white text-slate-950 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Hire Me Now
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
