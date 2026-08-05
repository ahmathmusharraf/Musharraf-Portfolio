
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SOFTWARE_PROJECTS, SOCIAL_LINKS } from '../constants';
import { Github, Globe2, Code2, Terminal, Cpu, Database, Layout, Sparkles, ChevronRight, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const [mobileIdx, setMobileIdx] = useState<number>(0);
  const githubLink = SOCIAL_LINKS.find(link => link.name === "GitHub")?.url || "https://github.com/ahmathmusharraf";

  const getTechIcon = (tag: string) => {
    const t = tag.toLowerCase();
    if (t.includes('full-stack') || t.includes('database')) return <Database size={16} />;
    if (t.includes('ui/ux') || t.includes('design')) return <Layout size={16} />;
    if (t.includes('ai') || t.includes('neural')) return <Cpu size={16} />;
    return <Code2 size={16} />;
  };

  return (
    <section id="engineering" className="py-12 md:py-28 bg-[#090d18] relative overflow-hidden">
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          {...({
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true }
          } as any)}
          className="mb-8 md:mb-16 text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 font-mono text-[10px] sm:text-xs tracking-[0.25em] uppercase font-bold mb-4">
            <Terminal size={12} className="text-indigo-400" />
            <span>Web Engineering & Design</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Full-Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-500">Digital Solutions</span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-amber-400 mx-auto rounded-full shadow-[0_0_20px_rgba(99,102,241,0.4)] mb-4" />
          
          <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
            Bridging aesthetics and high-scale technical architecture to build performant web applications, custom platforms, and user-centric software ecosystems.
          </p>
        </motion.div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-[1400px] mx-auto">
          {SOFTWARE_PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              {...({
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: index * 0.1, duration: 0.5 }
              } as any)}
              className="group relative aspect-[0.85/1] rounded-2xl overflow-hidden bg-[#0e1428]/80 border border-white/10 shadow-xl hover:border-indigo-500/50 hover:shadow-[0_0_40px_rgba(99,102,241,0.2)] transition-all duration-500 flex flex-col justify-end"
            >
              {/* Cover Image */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover absolute inset-0 opacity-40 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent opacity-95 group-hover:opacity-90 transition-opacity" />
              
              {/* Content Box */}
              <div className="relative z-10 p-6 flex flex-col justify-end">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[8.5px] font-black uppercase tracking-wider px-2.5 py-1 bg-slate-900/90 backdrop-blur-md rounded-full border border-white/10 text-cyan-300">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-lg font-black text-white mb-2 tracking-tight group-hover:text-amber-300 transition-colors leading-snug">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-xs font-light leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-[9.5px] font-black text-slate-200 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl hover:bg-indigo-600 hover:text-white transition-all border border-white/10 uppercase tracking-wider"
                    >
                      <Github size={13} /> Code
                    </a>
                  )}
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-[9.5px] font-black text-slate-950 bg-white px-4 py-2 rounded-xl hover:bg-cyan-400 hover:text-slate-950 transition-all border border-white uppercase tracking-wider shadow-lg"
                    >
                      <Globe2 size={13} /> Launch App
                    </a>
                  )}
                </div>
              </div>

              {/* Top Corner Technology Icon Badge */}
              <div className="absolute top-4 right-4 p-2.5 bg-slate-950/85 backdrop-blur-xl border border-white/10 rounded-xl text-indigo-400 group-hover:text-white group-hover:bg-indigo-600 transition-all duration-300 shadow-xl">
                {getTechIcon(project.tags[0])}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View Slider */}
        <div className="md:hidden space-y-4 max-w-sm mx-auto">
          {SOFTWARE_PROJECTS.length > 0 ? (
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={SOFTWARE_PROJECTS[mobileIdx].title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="relative aspect-[1.1/1] rounded-2xl overflow-hidden bg-[#0e1428] border border-white/10 shadow-2xl flex flex-col justify-end"
                >
                  <img 
                    src={SOFTWARE_PROJECTS[mobileIdx].image} 
                    alt={SOFTWARE_PROJECTS[mobileIdx].title} 
                    className="w-full h-full object-cover absolute inset-0 opacity-45"
                    referrerPolicy="no-referrer"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent opacity-95" />
                  
                  <div className="relative z-10 p-5 flex flex-col justify-end">
                    <div className="flex flex-wrap gap-1.5 mb-2.5">
                      {SOFTWARE_PROJECTS[mobileIdx].tags.map(tag => (
                        <span key={tag} className="text-[8px] font-black uppercase tracking-wider px-2 py-0.5 bg-slate-900/90 backdrop-blur-md rounded-full border border-white/10 text-cyan-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-base font-black text-white mb-1.5 tracking-tight leading-tight">
                      {SOFTWARE_PROJECTS[mobileIdx].title}
                    </h3>
                    
                    <p className="text-slate-300 text-[11px] font-light leading-relaxed mb-4 line-clamp-2">
                      {SOFTWARE_PROJECTS[mobileIdx].description}
                    </p>
                    
                    <div className="flex items-center gap-2">
                      {SOFTWARE_PROJECTS[mobileIdx].github && (
                        <a 
                          href={SOFTWARE_PROJECTS[mobileIdx].github} 
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 text-[9px] font-black text-slate-200 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 uppercase tracking-wider"
                        >
                          <Github size={12} /> Code
                        </a>
                      )}
                      {SOFTWARE_PROJECTS[mobileIdx].link && (
                        <a 
                          href={SOFTWARE_PROJECTS[mobileIdx].link} 
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 text-[9px] font-black text-slate-950 bg-white px-3 py-1.5 rounded-lg uppercase tracking-wider"
                        >
                          <Globe2 size={12} /> Launch
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Top-Right Corner Tech Badge */}
                  <div className="absolute top-3.5 right-3.5 p-2 bg-slate-950/85 backdrop-blur-md border border-white/10 rounded-xl text-indigo-400">
                    {getTechIcon(SOFTWARE_PROJECTS[mobileIdx].tags[0])}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls */}
              <div className="flex items-center justify-between mt-4 px-1">
                <button
                  type="button"
                  onClick={() => setMobileIdx(p => (p === 0 ? SOFTWARE_PROJECTS.length - 1 : p - 1))}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 text-slate-300 flex items-center justify-center active:scale-95 transition-all"
                >
                  <ChevronRight size={16} className="rotate-180" />
                </button>

                <div className="flex gap-1.5">
                  {SOFTWARE_PROJECTS.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setMobileIdx(dotIdx)}
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        mobileIdx === dotIdx ? 'bg-indigo-400 w-4' : 'bg-slate-800 w-1.5'
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setMobileIdx(p => (p === SOFTWARE_PROJECTS.length - 1 ? 0 : p + 1))}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 text-slate-300 flex items-center justify-center active:scale-95 transition-all"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ) : null}
        </div>

        {/* GitHub Full Archive Link */}
        <div className="mt-12 text-center">
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:border-indigo-500/40 text-xs font-bold transition-all uppercase tracking-wider"
          >
            <Github size={15} className="text-indigo-400" />
            <span>Explore Github Repositories & Open Source</span>
            <ExternalLink size={12} className="text-slate-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
