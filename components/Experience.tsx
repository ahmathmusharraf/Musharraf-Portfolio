
import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { EXPERIENCES } from '../constants';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Palette, 
  Megaphone, 
  GraduationCap, 
  Camera, 
  Share2,
  Code,
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';

const getRoleIcon = (role: string) => {
  const r = role.toLowerCase();
  if (r.includes('photographer') || r.includes('video')) return Camera;
  if (r.includes('designer') || r.includes('multimedia')) return Palette;
  if (r.includes('lecturer') || r.includes('teaching')) return GraduationCap;
  if (r.includes('marketing') || r.includes('seo') || r.includes('ads')) return Megaphone;
  if (r.includes('social media')) return Share2;
  if (r.includes('software') || r.includes('developer')) return Code;
  return Briefcase;
};

const getRoleTags = (id: string) => {
  switch (id) {
    case "1": return ["Cinematography", "Visual Branding", "Production Flow", "E-Commerce"];
    case "2": return ["SEO Growth", "Meta Campaigns", "Audience Reach", "Conversion Funnels"];
    case "3": return ["Curriculum Support", "Technical Training", "Multimedia Mentorship", "Web Design Instruction"];
    case "4": return ["Healthcare Marketing", "Brand Positioning", "Patient Acquisition", "Event Campaigns"];
    default: return ["Leadership", "Strategy", "Creative Direction", "Execution"];
  }
};

const ExperienceCard: React.FC<{ experience: typeof EXPERIENCES[0], index: number }> = ({ experience, index }) => {
  const Icon = getRoleIcon(experience.role);
  
  return (
    <motion.div
      {...({
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.5, delay: index * 0.1 }
      } as any)}
      className="relative pl-8 md:pl-12 pb-16 last:pb-0"
    >
      {/* Timeline Node & Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-slate-950 shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all group-hover:scale-125" />
      </div>

      <div className="flex flex-col md:flex-row md:items-start gap-6">
        {/* Date Component */}
        <div className="md:w-32 flex-shrink-0 pt-1">
          <span className="text-sm font-bold text-slate-500 uppercase tracking-widest block mb-2">{experience.period}</span>
          <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-bold text-primary uppercase">
            <Calendar size={10} /> REC_V{index + 1}
          </div>
        </div>

        {/* Content Card */}
        <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-2xl sm:rounded-3xl p-5 sm:p-8 hover:bg-white/[0.04] transition-colors group">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div>
              <div className="flex items-center gap-3 mb-1.5 sm:mb-2">
                <div className="p-1.5 sm:p-2 bg-primary/10 rounded-lg text-primary">
                  <Icon size={16} />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">{experience.role}</h3>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-slate-400">
                {experience.website ? (
                  <a 
                    href={experience.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[12px] sm:text-sm font-semibold text-slate-200 hover:text-primary transition-colors flex items-center gap-1.5 underline decoration-slate-700 underline-offset-4"
                  >
                    {experience.company} <ExternalLink size={12} />
                  </a>
                ) : (
                  <span className="text-[12px] sm:text-sm font-semibold text-slate-200">{experience.company}</span>
                )}
                <span className="w-1 h-1 rounded-full bg-slate-700" />
                <span className="text-[11px] sm:text-sm flex items-center gap-1.5"><MapPin size={12} /> {experience.location}</span>
              </div>
            </div>
            
            {index === 0 && (
              <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 text-[9px] sm:text-[10px] font-black uppercase tracking-widest rounded-full animate-pulse self-start md:self-center">
                Current
              </div>
            )}
          </div>

          <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
            {experience.description.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2 sm:gap-3">
                <ChevronRight size={14} className="mt-1 text-primary opacity-50 flex-shrink-0" />
                <p className="text-slate-400 text-[12px] sm:text-sm leading-relaxed font-light">{point}</p>
              </div>
            ))}
          </div>

          {/* Tag cloud for visibility */}
          <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
             {getRoleTags(experience.id).map((tag, tIdx) => (
               <span key={tIdx} className="text-[9px] font-bold text-slate-400 group-hover:text-primary transition-colors uppercase tracking-widest px-2.5 py-1.5 bg-white/5 rounded-full border border-white/5 group-hover:bg-primary/5 group-hover:border-primary/20">
                 #{tag}
               </span>
             ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [activeExpIdx, setActiveExpIdx] = useState(0);

  const getShortCompanyName = (company: string) => {
    if (company.includes("Al Khateeb")) return "Al Khateeb";
    if (company.includes("IBM International")) return "IBM Real Estate";
    if (company.includes("British College")) return "BCAS Campus";
    if (company.includes("Jameel")) return "Dr. Jameel";
    if (company.includes("Orbit")) return "Orbit";
    if (company.includes("ARA")) return "ARA Fashion";
    return company;
  };

  const currentExp = EXPERIENCES[activeExpIdx];
  const CurrentIcon = getRoleIcon(currentExp.role);

  return (
    <section ref={containerRef} id="experience" className="py-10 md:py-32 bg-slate-950 relative overflow-hidden">
      
      {/* Dynamic Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none md:block hidden"></div>
      
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-6 md:mb-24">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary text-xs font-bold uppercase tracking-[0.4em]">Career Journey</span>
          </div>
          <h2 className="text-3xl md:text-6xl font-black text-white mb-4 md:mb-6 tracking-tight">Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Chronicle.</span></h2>
          <p className="text-slate-400 text-sm md:text-xl font-light max-w-2xl leading-relaxed">
            A comprehensive look at my professional evolution, focusing on digital transformation, multimedia architecture, and strategic growth.
          </p>
        </div>

        {/* MOBILE SINGLE VIEW WORK EXPERIENCE */}
        <div className="md:hidden space-y-6">
          {/* Company Names Scroller */}
          <div className="flex overflow-x-auto gap-2.5 pb-2.5 scrollbar-hide -mx-6 px-6 mask-fade-edges">
            {EXPERIENCES.map((exp, idx) => {
              const isSelected = activeExpIdx === idx;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveExpIdx(idx)}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                  className={`px-4 py-2.5 rounded-2xl border text-[10px] font-bold uppercase tracking-wider shrink-0 transition-all duration-300 ${
                    isSelected
                      ? 'bg-slate-800 border-indigo-500/50 text-white shadow-[0_0_15px_rgba(99,102,241,0.25)]'
                      : 'bg-slate-900/50 border-white/5 text-slate-400'
                  }`}
                >
                  {getShortCompanyName(exp.company)}
                </button>
              );
            })}
          </div>

          {/* Single Experience Detail View */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeExpIdx}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.25 }}
              className="bg-slate-900/40 border border-white/5 rounded-3xl p-5 shadow-xl relative overflow-hidden"
            >
              {/* Corner Info Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-primary shadow-sm">
                    <CurrentIcon size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block leading-none mb-1">{currentExp.period}</span>
                    <span className="text-[9px] font-black uppercase text-primary tracking-widest bg-primary/10 border border-primary/20 px-1.5 py-0.5 rounded">
                      ROLE {activeExpIdx + 1}/{EXPERIENCES.length}
                    </span>
                  </div>
                </div>

                {activeExpIdx === 0 && (
                  <span className="px-2.5 py-1 bg-green-500/10 border border-green-500/20 text-[8px] font-black uppercase tracking-widest text-green-400 rounded-full animate-pulse">
                    Current
                  </span>
                )}
              </div>

              {/* Title & Organization */}
              <div className="mb-4">
                <h3 className="text-base font-black text-white leading-tight mb-1">{currentExp.role}</h3>
                <div className="flex flex-wrap items-center gap-1.5 text-slate-400 text-xs">
                  {currentExp.website ? (
                    <a
                      href={currentExp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-slate-200 underline decoration-slate-700 underline-offset-4 hover:text-primary transition-colors inline-flex items-center gap-1"
                    >
                      {currentExp.company} <ExternalLink size={10} />
                    </a>
                  ) : (
                    <span className="font-bold text-slate-200">{currentExp.company}</span>
                  )}
                  <span className="text-slate-600 font-bold">•</span>
                  <span className="flex items-center gap-1"><MapPin size={10} /> {currentExp.location}</span>
                </div>
              </div>

              {/* Bullet Points Zone */}
              <div className="space-y-3 mb-6">
                {currentExp.description.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <ChevronRight size={12} className="mt-1 text-primary opacity-50 shrink-0" />
                    <p className="text-slate-300 text-xs leading-relaxed font-normal">{point}</p>
                  </div>
                ))}
              </div>

              {/* Tag section */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {getRoleTags(currentExp.id).map((tag, tIdx) => (
                  <span key={tIdx} className="text-[8.5px] font-bold text-indigo-300 uppercase tracking-wider px-2 py-0.5 bg-indigo-500/5 rounded border border-indigo-500/10">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Footer controls for quick flicking */}
              <div className="flex items-center justify-between mt-5 pt-3 border-t border-white/5">
                <button
                  type="button"
                  disabled={activeExpIdx === 0}
                  onClick={() => setActiveExpIdx(p => Math.max(0, p - 1))}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                  className={`p-2 rounded-xl bg-slate-950/50 border border-white/5 flex items-center justify-center transition-all ${
                    activeExpIdx === 0 ? 'opacity-30 cursor-not-allowed' : 'active:scale-95 text-slate-300'
                  }`}
                >
                  <ChevronRight size={16} className="rotate-180" />
                </button>

                <div className="flex gap-1.5">
                  {EXPERIENCES.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setActiveExpIdx(dotIdx)}
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        activeExpIdx === dotIdx ? 'bg-indigo-400 w-3' : 'bg-slate-700'
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  disabled={activeExpIdx === EXPERIENCES.length - 1}
                  onClick={() => setActiveExpIdx(p => Math.min(EXPERIENCES.length - 1, p + 1))}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                  className={`p-2 rounded-xl bg-slate-950/50 border border-white/5 flex items-center justify-center transition-all ${
                    activeExpIdx === EXPERIENCES.length - 1 ? 'opacity-30 cursor-not-allowed' : 'active:scale-95 text-slate-300'
                  }`}
                >
                  <ChevronRight size={16} />
                </button>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* DESKTOP EXCLUSIVE WORK EXPERIENCE */}
        <div className="hidden md:block relative mt-20">
          {EXPERIENCES.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
