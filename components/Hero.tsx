
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { Sparkles, Star, FileText, Building2, Briefcase, Megaphone, Video, Code, Brain, ArrowUpRight, ShieldCheck, MapPin, Award } from 'lucide-react';

interface HeroProps {
  onOpenResume?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  
  // Motion values for mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  
  const blob1X = useSpring(useTransform(mouseX, [-0.5, 0.5], [25, -25]), springConfig);
  const blob1Y = useSpring(useTransform(mouseY, [-0.5, 0.5], [25, -25]), springConfig);
  
  const blob2X = useSpring(useTransform(mouseX, [-0.5, 0.5], [-35, 35]), springConfig);
  const blob2Y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-35, 35]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
       const { innerWidth, innerHeight } = window;
       const x = (e.clientX / innerWidth) - 0.5;
       const y = (e.clientY / innerHeight) - 0.5;
       mouseX.set(x);
       mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const metrics = [
    { label: 'GCC & Global Exp', value: '6+ Yrs', desc: 'Dubai & Sri Lanka' },
    { label: 'Monthly Ad Budget', value: 'AED 40k+', desc: 'Meta, Google & TikTok' },
    { label: 'Qualified Leads', value: '1,500+', desc: 'Monthly ROI Driven' },
    { label: 'Conversion Boost', value: '35%+', desc: 'Real Estate & Retail' },
  ];

  const specialties = [
    { label: 'Real Estate Media', icon: Building2, color: 'text-amber-400', bg: 'bg-amber-400/10 border-amber-400/20' },
    { label: 'Performance Ads', icon: Megaphone, color: 'text-indigo-400', bg: 'bg-indigo-400/10 border-indigo-400/20' },
    { label: 'Cinematography', icon: Video, color: 'text-emerald-400', bg: 'bg-emerald-400/10 border-emerald-400/20' },
    { label: 'Brand Strategy', icon: Briefcase, color: 'text-purple-400', bg: 'bg-purple-400/10 border-purple-400/20' },
    { label: 'Web Systems', icon: Code, color: 'text-rose-400', bg: 'bg-rose-400/10 border-rose-400/20' },
    { label: 'AI Marketing', icon: Brain, color: 'text-cyan-400', bg: 'bg-cyan-400/10 border-cyan-400/20' },
  ];

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#070a13] pt-16 md:pt-24 pb-20 md:pb-32">
      
      {/* Background Lighting & Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-white bg-[size:30px_30px] md:bg-[size:45px_45px] opacity-[0.07]" />

        {/* Ambient Gradient Glows */}
        <motion.div 
          className="absolute -top-32 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-600/20 rounded-full blur-[100px] md:blur-[120px]"
          style={{ x: blob1X, y: blob1Y }}
        />
        <motion.div 
          className="absolute top-1/3 -right-20 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-amber-500/15 rounded-full blur-[100px] md:blur-[130px]"
          style={{ x: blob2X, y: blob2Y }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-28 md:h-40 bg-gradient-to-t from-[#070a13] to-transparent z-10" />
      </div>

      {/* Main Responsive Container */}
      <div className="container mx-auto px-4 sm:px-6 relative z-20 max-w-7xl">
        
        {/* MOBILE SINGLE VIEW LAYOUT (Fit 1 Screen Height) */}
        <div className="md:hidden flex flex-col justify-between items-center text-center max-w-sm mx-auto h-full space-y-3.5 py-2">
          
          {/* Avatar & Location Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative flex flex-col items-center"
          >
            <div className="relative w-20 h-20 rounded-2xl p-1 bg-gradient-to-tr from-indigo-500 via-amber-400 to-cyan-400 shadow-[0_0_25px_rgba(99,102,241,0.3)] mb-2.5">
              <img
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-top rounded-xl bg-slate-950"
              />
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-slate-900/90 border border-white/10 text-[9px] font-black uppercase tracking-wider text-amber-300 shadow-lg">
              <MapPin size={9} className="text-emerald-400" />
              <span>DUBAI, UAE</span>
              <span className="text-slate-600">•</span>
              <span className="text-indigo-300">6+ YRS EXP</span>
            </div>
          </motion.div>

          {/* Headline & Rotating Role */}
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-2xl font-black text-white tracking-tight leading-tight mb-1"
            >
              Architecting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-amber-200 to-indigo-300">
                High-Growth Brands
              </span>
            </motion.h1>

            {/* Rotating Role Pill */}
            <div className="h-7 overflow-hidden flex items-center justify-center">
              <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="text-[11px] font-bold text-slate-300 flex items-center gap-1"
              >
                <span className="text-indigo-400 font-extrabold uppercase tracking-wider">Expert:</span>
                <span className="px-2 py-0.5 bg-indigo-500/10 border border-indigo-500/20 rounded-md text-amber-300 text-[10px] font-extrabold">
                  {PERSONAL_INFO.roles[roleIndex]}
                </span>
              </motion.div>
            </div>
          </div>

          {/* Compact Mobile 4-Metric Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="grid grid-cols-4 gap-1.5 w-full bg-slate-950/80 border border-white/10 p-2 rounded-2xl shadow-2xl backdrop-blur-xl"
          >
            {metrics.map((m, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-1 bg-white/[0.02] rounded-lg">
                <span className="text-xs font-black text-indigo-300 leading-none mb-0.5">{m.value}</span>
                <span className="text-[7.5px] font-bold text-slate-400 uppercase tracking-tighter truncate w-full">{m.label.split(' ')[0]}</span>
              </div>
            ))}
          </motion.div>

          {/* Quick Specialties Badges (Scrollable / Compact) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="flex items-center gap-1.5 overflow-x-auto w-full pb-1 scrollbar-hide px-0.5 justify-center flex-wrap"
          >
            {specialties.slice(0, 4).map((spec) => (
              <div 
                key={spec.label} 
                className={`flex items-center gap-1 px-2 py-1 rounded-lg ${spec.bg} text-[9px] font-black uppercase tracking-wider text-slate-200 shrink-0`}
              >
                <spec.icon size={11} className={spec.color} />
                <span>{spec.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Mobile CTA Button Group */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-center justify-center gap-2 w-full pt-1"
          >
            <a 
              href="#contact" 
              className="flex-1 py-2.5 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white rounded-xl font-black text-[10px] uppercase tracking-wider shadow-[0_0_20px_rgba(99,102,241,0.4)] flex items-center justify-center gap-1 active:scale-95"
            >
              <span>Book Strategy</span>
              <ArrowUpRight size={13} />
            </a>

            <a 
              href={`https://wa.me/${PERSONAL_INFO.phone.replace(/[^0-9]/g, '')}`} 
              target="_blank"
              rel="noreferrer"
              className="py-2.5 px-3 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 rounded-xl font-black text-[10px] uppercase tracking-wider flex items-center justify-center gap-1 active:scale-95"
            >
              <span>WhatsApp</span>
            </a>

            {onOpenResume && (
              <button 
                onClick={onOpenResume}
                className="py-2.5 px-3 bg-slate-900 text-slate-200 border border-white/10 rounded-xl font-black text-[10px] uppercase tracking-wider flex items-center justify-center gap-1 active:scale-95"
                aria-label="View Resume"
              >
                <FileText size={13} className="text-amber-400" />
                <span>CV</span>
              </button>
            )}
          </motion.div>

        </div>

        {/* DESKTOP GRID LAYOUT */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Live Location & Role Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-slate-900/90 border border-white/10 text-amber-300 text-xs font-black uppercase tracking-widest shadow-xl mb-6 backdrop-blur-xl"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-slate-200">DUBAI, UAE</span>
              <span className="text-slate-600">•</span>
              <span className="text-amber-400 flex items-center gap-1">
                <Sparkles size={12} /> Digital Marketing & Media Leader
              </span>
            </motion.div>

            {/* Display Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.08] mb-4"
            >
              Architecting <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-amber-200 to-indigo-300">
                High-Growth Brands
              </span>
            </motion.h1>

            {/* Rotating Role Banner */}
            <div className="h-10 sm:h-12 overflow-hidden mb-5 flex items-center justify-center lg:justify-start">
              <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-base sm:text-xl lg:text-2xl font-bold text-slate-300 flex items-center gap-2"
              >
                <span className="text-indigo-400">Specializing in</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-xl text-white shadow-inner">
                  {PERSONAL_INFO.roles[roleIndex]}
                </span>
              </motion.div>
            </div>

            {/* Sub-headline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mb-8 font-normal"
            >
              Senior Digital Marketing Manager and Creative Director based in Dubai. Combining data-driven performance ads, cinema-grade video production, luxury real estate media, and modern full-stack web engineering.
            </motion.p>

            {/* CTA Buttons Row */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3.5 justify-center lg:justify-start w-full sm:w-auto mb-10"
            >
              <a 
                href="#contact" 
                className="px-7 py-3.5 bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white rounded-2xl font-black text-xs uppercase tracking-[0.18em] shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Book Consultation</span>
                <ArrowUpRight size={16} />
              </a>

              <a 
                href={`https://wa.me/${PERSONAL_INFO.phone.replace(/[^0-9]/g, '')}`} 
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-2xl font-black text-xs uppercase tracking-[0.18em] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>WhatsApp Directly</span>
              </a>

              {onOpenResume && (
                <button 
                  onClick={onOpenResume}
                  className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-white/10 rounded-2xl font-black text-xs uppercase tracking-[0.18em] transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl"
                >
                  <FileText size={16} className="text-amber-400 group-hover:scale-110 transition-transform" />
                  <span>Print / View CV</span>
                </button>
              )}
            </motion.div>

            {/* Specialties Badges Grid */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 w-full max-w-xl"
            >
              {specialties.map((spec) => (
                <div 
                  key={spec.label} 
                  className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl ${spec.bg} backdrop-blur-md transition-all hover:scale-[1.02]`}
                >
                  <spec.icon size={15} className={spec.color} />
                  <span className="text-[11px] font-extrabold text-slate-200 uppercase tracking-wider">{spec.label}</span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Hero Card & Visual Asset */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: [0, -8, 0]
              }}
              transition={{ 
                opacity: { duration: 0.8 },
                scale: { duration: 0.8 },
                y: { repeat: Infinity, duration: 5, ease: "easeInOut" }
              }}
              whileHover={{ scale: 1.02, rotate: 0.5 }}
              className="relative w-full max-w-[280px] sm:max-w-[320px] cursor-pointer group"
            >
              {/* Animated Outer Glow Halo */}
              <motion.div 
                animate={{ 
                  opacity: [0.4, 0.7, 0.4],
                  scale: [0.98, 1.05, 0.98]
                }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 via-amber-400/20 to-indigo-600/30 rounded-[2.2rem] blur-2xl -z-10" 
              />

              {/* Glassmorphic Profile Frame */}
              <div className="bg-slate-900/85 border border-white/15 group-hover:border-amber-400/40 rounded-[2rem] p-3.5 shadow-[0_25px_50px_rgba(0,0,0,0.85)] backdrop-blur-2xl relative overflow-hidden transition-colors duration-500">
                
                {/* Light Reflection Shimmer Beam */}
                <div className="absolute -top-[100%] -left-[100%] w-[300%] h-[300%] bg-gradient-to-br from-white/10 via-transparent to-transparent rotate-45 pointer-events-none group-hover:translate-x-1/2 group-hover:translate-y-1/2 transition-transform duration-1000" />

                {/* Image Container */}
                <div className="relative aspect-[4/3.8] rounded-xl overflow-hidden border border-white/10 bg-slate-950 mb-3 shadow-inner">
                  <img 
                    src={PERSONAL_INFO.profileImage} 
                    alt={PERSONAL_INFO.name} 
                    className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Badge Overlay */}
                  <motion.div 
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-2 left-2 px-2.5 py-1 rounded-full bg-slate-950/90 backdrop-blur-md border border-white/15 text-white text-[8.5px] font-black uppercase tracking-wider flex items-center gap-1.5 shadow-xl"
                  >
                    <Award size={11} className="text-amber-400 animate-bounce" />
                    <span>6+ Yrs Experience</span>
                  </motion.div>

                  <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between">
                    <div>
                      <h3 className="text-sm sm:text-base font-black text-white leading-tight group-hover:text-amber-200 transition-colors">{PERSONAL_INFO.name}</h3>
                      <p className="text-amber-400 text-[9.5px] font-bold flex items-center gap-1">
                        <MapPin size={9.5} className="animate-pulse text-rose-400" /> {PERSONAL_INFO.location}
                      </p>
                    </div>
                    <div className="p-1.5 rounded-lg bg-indigo-600 text-white shadow-lg group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      <ShieldCheck size={14} />
                    </div>
                  </div>
                </div>

                {/* Key Metrics Strip with Hover Animation */}
                <div className="grid grid-cols-2 gap-1.5">
                  {metrics.slice(0, 4).map((m, idx) => (
                    <motion.div 
                      key={idx} 
                      whileHover={{ y: -2, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                      transition={{ duration: 0.2 }}
                      className="p-2 bg-white/[0.04] border border-white/10 rounded-lg transition-colors"
                    >
                      <div className="text-xs font-black text-white tracking-tight leading-none mb-0.5 text-indigo-300 group-hover:text-amber-300 transition-colors">
                        {m.value}
                      </div>
                      <div className="text-[8.5px] font-extrabold uppercase tracking-wider text-slate-200">
                        {m.label}
                      </div>
                      <div className="text-[7.5px] text-slate-400 font-medium truncate">
                        {m.desc}
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;

