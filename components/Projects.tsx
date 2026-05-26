
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SOFTWARE_PROJECTS, SOCIAL_LINKS } from '../constants';
import { Github, Globe2, Code2, Terminal, Cpu, Database, Layout, Sparkles, ChevronRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [mobileIdx, setMobileIdx] = useState<number>(0);
  const githubLink = SOCIAL_LINKS.find(link => link.name === "GitHub")?.url || "https://github.com/ahmathmusharraf";

  const getTechIcon = (tag: string) => {
    const t = tag.toLowerCase();
    if (t.includes('full-stack')) return <Database size={16} />;
    if (t.includes('ui/ux')) return <Layout size={16} />;
    if (t.includes('ai') || t.includes('neural')) return <Cpu size={16} />;
    return <Code2 size={16} />;
  };

  return (
    <section id="engineering" className="py-20 sm:py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          {...({
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true }
          } as any)}
          className="mb-10 sm:mb-16 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-3 sm:mb-4">
            <span className="text-primary font-mono text-[10px] sm:text-sm tracking-[0.3em] uppercase text-glow px-4 py-1 rounded-full bg-primary/10 border border-primary/20 font-bold">
              Web Engineering & Design
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-1 mb-4 sm:mb-6 text-glow tracking-tighter">
            Full-Stack Digital Solutions
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary via-indigo-400 to-indigo-600 mx-auto rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
          <p className="text-slate-400 mt-4 sm:mt-6 max-w-xl mx-auto font-light leading-relaxed text-sm sm:text-base">
            Bridging aesthetics and scalability to build performant web ecosystems.
          </p>
        </motion.div>

        {/* Grid Layout - Balanced for project count (Desktop Only) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {SOFTWARE_PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              {...({
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: index * 0.1, duration: 0.6 }
              } as any)}
              className="group relative aspect-[1.3/1] sm:aspect-[1.5/1] rounded-3xl overflow-hidden bg-[#0e1324]/40 border border-white/[0.05] shadow-2xl hover:border-primary/40 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] transition-all duration-500"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-35 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
              />
              
              {/* Overlay with dynamic gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end transform transition-transform duration-300">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2 tracking-tight group-hover:text-primary transition-colors leading-tight">{project.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed mb-5 max-w-md line-clamp-2 md:line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex gap-3">
                    <a 
                      href={project.github || "#"} 
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-[10px] font-black text-slate-200 bg-white/5 backdrop-blur-md px-4 py-2 rounded-xl hover:bg-primary hover:text-white transition-all border border-white/5 uppercase tracking-widest"
                    >
                      <Github size={13} /> Source Code
                    </a>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-[10px] font-black text-slate-950 bg-white px-4 py-2 rounded-xl hover:bg-secondary hover:text-white transition-all border border-white/5 uppercase tracking-widest"
                      >
                        <Globe2 size={13} /> Launch App
                      </a>
                    )}
                </div>
              </div>
 
              {/* Corner Icon Badge with beautiful glow */}
              <div className="absolute top-6 right-6 p-3 bg-slate-950/80 backdrop-blur-xl border border-white/5 rounded-2xl text-primary group-hover:text-white group-hover:bg-primary transition-all duration-300 shadow-2xl">
                {getTechIcon(project.tags[0])}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View: High Impact One-View Compact Slider */}
        <div className="md:hidden space-y-4 px-1 max-w-sm mx-auto">
          {SOFTWARE_PROJECTS.length > 0 ? (
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={SOFTWARE_PROJECTS[mobileIdx].title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="relative aspect-[1.3/1] rounded-2xl overflow-hidden bg-[#0e1324]/40 border border-white/[0.05] shadow-2xl"
                >
                  <img 
                    src={SOFTWARE_PROJECTS[mobileIdx].image} 
                    alt={SOFTWARE_PROJECTS[mobileIdx].title} 
                    className="w-full h-full object-cover opacity-40 animate-pulse-slow"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay with dynamic gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-95"></div>
                  
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <div className="flex flex-wrap gap-1.5 mb-2.5">
                      {SOFTWARE_PROJECTS[mobileIdx].tags.map(tag => (
                        <span key={tag} className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-sm font-black text-white mb-1.5 tracking-tight leading-tight">
                      {SOFTWARE_PROJECTS[mobileIdx].title}
                    </h3>
                    <p className="text-slate-400 text-[10.5px] font-light leading-relaxed mb-4 line-clamp-2">
                      {SOFTWARE_PROJECTS[mobileIdx].description}
                    </p>
                    
                    <div className="flex gap-2">
                        <a 
                          href={SOFTWARE_PROJECTS[mobileIdx].github || "#"} 
                          target="_blank"
                          rel="noreferrer"
                          style={{ WebkitTapHighlightColor: 'transparent' }}
                          className="flex items-center gap-1.5 text-[8.5px] font-black text-slate-200 bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/5 uppercase tracking-widest active:scale-95 transition-transform"
                        >
                          <Github size={11} /> Code
                        </a>
                        {SOFTWARE_PROJECTS[mobileIdx].link && (
                          <a 
                            href={SOFTWARE_PROJECTS[mobileIdx].link} 
                            target="_blank"
                            rel="noreferrer"
                            style={{ WebkitTapHighlightColor: 'transparent' }}
                            className="flex items-center gap-1.5 text-[8.5px] font-black text-slate-950 bg-white px-3 py-1.5 rounded-lg border border-white/5 uppercase tracking-widest active:scale-95 transition-transform"
                          >
                            <Globe2 size={11} /> Launch
                          </a>
                        )}
                    </div>
                  </div>

                  {/* Corner Icon Badge with beautiful glow */}
                  <div className="absolute top-4 right-4 p-2.5 bg-slate-950/80 backdrop-blur-xl border border-white/5 rounded-xl text-primary shadow-2xl">
                    {getTechIcon(SOFTWARE_PROJECTS[mobileIdx].tags[0])}
                  </div>

                  {/* Top-Right Badge Indicator */}
                  <div className="absolute top-4 right-16 bg-slate-950/80 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10 text-[8px] font-mono text-white tracking-widest">
                    {mobileIdx + 1} OF {SOFTWARE_PROJECTS.length}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls */}
              <div className="flex items-center justify-between mt-3 px-1">
                <button
                  type="button"
                  onClick={() => setMobileIdx(p => (p === 0 ? SOFTWARE_PROJECTS.length - 1 : p - 1))}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-white/5 text-slate-400 flex items-center justify-center active:scale-95 transition-all"
                >
                  <ChevronRight size={14} className="rotate-180" />
                </button>

                {/* Slider Progress Indicator Dots */}
                <div className="flex gap-1">
                  {SOFTWARE_PROJECTS.map((_, dotIdx) => (
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
                  onClick={() => setMobileIdx(p => (p === SOFTWARE_PROJECTS.length - 1 ? 0 : p + 1))}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-white/5 text-slate-400 flex items-center justify-center active:scale-95 transition-all"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-[#0e1324]/40 border border-white/5 rounded-2xl p-6 text-center">
              <span className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">No available projects</span>
            </div>
          )}
        </div>

        {/* Portfolio CTA Area */}
        <motion.div 
            {...({
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true }
            } as any)}
            className="mt-20 text-center relative"
        >
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 max-w-sm sm:max-w-none mx-auto">
                <a 
                    href={githubLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center gap-2.5 pl-2.5 pr-4 py-2 bg-white text-slate-950 rounded-full font-bold transition-all shadow-[0_4px_20px_rgba(255,255,255,0.05)] hover:-translate-y-1 active:scale-95 whitespace-nowrap text-xs md:text-sm"
                >
                    <div className="w-8 h-8 md:w-9 md:h-9 bg-slate-950 rounded-lg flex items-center justify-center text-white shrink-0">
                      <Terminal size={14} className="md:size-[18px]" />
                    </div>
                    <span className="text-left">Engineering Stack on GitHub</span>
                    <Sparkles size={14} className="text-primary ml-auto" />
                </a>
            </div>
            
            <p className="mt-8 text-slate-600 font-mono text-[10px] uppercase tracking-[0.5em] opacity-50">
              Full-Stack Build — 2025
            </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
