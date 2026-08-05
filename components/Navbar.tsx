
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
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
          ? 'py-3 bg-slate-950/85 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.8)]' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-amber-400 p-[1px] shadow-[0_0_20px_rgba(99,102,241,0.4)] group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-black text-white text-base">
              M
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-black text-white tracking-tight leading-none group-hover:text-indigo-300 transition-colors">
              MUSHARRAF<span className="text-amber-400">.</span>
            </span>
            <span className="text-[8px] font-bold tracking-[0.25em] text-indigo-400 uppercase">
              Dubai, UAE
            </span>
          </div>
        </a>

        {/* Desktop Floating Pill Navigation */}
        <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/70 border border-white/10 rounded-full backdrop-blur-xl shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-slate-300 hover:text-white transition-all relative group/link rounded-full hover:bg-white/5"
            >
              {link.name}
              <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-indigo-400 rounded-full scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left"></span>
            </a>
          ))}
        </div>

        {/* Availability Status & CTA */}
        <div className="hidden md:flex items-center gap-3">
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Available for Hire</span>
          </div>

          <a 
            href={`mailto:${PERSONAL_INFO.email}`}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(99,102,241,0.7)] transition-all duration-300 transform active:scale-95"
          >
            <span>Let's Connect</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 bg-slate-900/90 border border-white/10 rounded-xl text-white backdrop-blur-md active:scale-90 transition-transform shadow-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-slate-950/60 backdrop-blur-md lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.95 }}
              className="absolute top-[72px] right-4 left-4 z-[70] bg-slate-900/95 border border-white/10 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden lg:hidden backdrop-blur-2xl"
            >
              <div className="p-4 space-y-1">
                <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 mb-2">
                  <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles size={12} /> Navigation
                  </span>
                  <span className="flex items-center gap-1.5 text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Available in Dubai
                  </span>
                </div>

                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 + 0.05 }}
                    className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/5 text-slate-300 hover:text-white transition-all group"
                  >
                    <span className="text-xs font-bold uppercase tracking-widest">{link.name}</span>
                    <span className="text-[10px] font-mono font-bold text-indigo-400 opacity-60 group-hover:opacity-100">0{idx + 1}</span>
                  </motion.a>
                ))}
                
                <div className="mt-3 pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center py-3 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-[0.15em] shadow-lg active:scale-95 transition-transform"
                  >
                    Email Me
                  </a>
                  <a 
                    href="https://wa.me/971581462540"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center py-3 bg-emerald-600 text-white rounded-xl text-[10px] font-black uppercase tracking-[0.15em] shadow-lg active:scale-95 transition-transform"
                  >
                    WhatsApp
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

