import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  ChevronLeft,
  Sparkles,
  Award,
  TrendingUp,
  CheckCircle2,
  Building2,
  Globe,
  ArrowUpRight,
  Sliders
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
    case "1": return ["Visual Direction", "Product Photography", "E-Commerce Media", "Video Editing", "Creative Strategy"];
    case "2": return ["Meta Ads (AED 40k+)", "Lead Gen (1,500+/mo)", "Conversion (+35%)", "WhatsApp API", "Google Ads"];
    case "3": return ["SEO Growth (+70%)", "Higher Ed Marketing", "Admissions Campaigns", "Brand Identity", "Event Production"];
    case "4": return ["Healthcare Marketing", "Patient Acquisition (+40%)", "Meta Ads CPL (-25%)", "Social Media Strategy"];
    default: return ["Leadership", "Strategy", "Creative Direction", "Performance Ads"];
  }
};

const getShortCompanyName = (company: string) => {
  if (company.includes("Al Khateeb")) return "Al Khateeb Global";
  if (company.includes("IBM International")) return "IBM Real Estate";
  if (company.includes("British College")) return "BCAS Campus";
  if (company.includes("Jameel")) return "Dr. Jameel Hospital";
  return company;
};

const getImpactHighlights = (id: string) => {
  switch (id) {
    case "1":
      return [
        { metric: "E-Commerce Media", label: "Product & Ad Video Production" },
        { metric: "Brand Guidelines", label: "Visual Identity Standard" },
        { metric: "100% Quality Sign-Off", label: "End-to-End Creative Direction" }
      ];
    case "2":
      return [
        { metric: "AED 40,000+", label: "Monthly Ad Spend Managed" },
        { metric: "1,500+ / mo", label: "Qualified Leads Generated" },
        { metric: "35% Conversion", label: "Lead Quality Boosted" }
      ];
    case "3":
      return [
        { metric: "70%+ Increase", label: "Student Lead Growth" },
        { metric: "35% ROAS Boost", label: "Paid Campaign Optimization" },
        { metric: "Multi-Campus", label: "Institutional Branding" }
      ];
    case "4":
      return [
        { metric: "60%+ Reach", label: "Digital Engagement Growth" },
        { metric: "40% Increase", label: "Online Appointment Leads" },
        { metric: "-25% CPL", label: "Ad Efficiency Reduction" }
      ];
    default:
      return [];
  }
};

const Experience: React.FC = () => {
  const [activeExpIdx, setActiveExpIdx] = useState(0);
  const [viewMode, setViewMode] = useState<'interactive' | 'timeline'>('interactive');

  const currentExp = EXPERIENCES[activeExpIdx];
  const CurrentIcon = getRoleIcon(currentExp.role);
  const currentHighlights = getImpactHighlights(currentExp.id);

  return (
    <section id="experience" className="py-10 md:py-16 bg-[#060913] relative overflow-hidden text-white">
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 -left-20 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-white bg-[size:40px_40px] opacity-[0.03] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        
        {/* Compact Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 md:mb-8 border-b border-white/10 pb-4">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] sm:text-xs font-black uppercase tracking-widest mb-2"
            >
              <Sparkles size={12} />
              <span>Career Journey & Track Record</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white"
            >
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-amber-200 to-indigo-400">Chronicle.</span>
            </motion.h2>
          </div>

          {/* View Toggle Mode Switcher */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-white/10 backdrop-blur-xl shrink-0"
          >
            <button
              onClick={() => setViewMode('interactive')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-extrabold uppercase tracking-wider transition-all ${
                viewMode === 'interactive' 
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sliders size={13} />
              <span>Spotlight</span>
            </button>
            <button
              onClick={() => setViewMode('timeline')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-extrabold uppercase tracking-wider transition-all ${
                viewMode === 'timeline' 
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <TrendingUp size={13} />
              <span>Timeline</span>
            </button>
          </motion.div>
        </div>

        {/* INTERACTIVE SPOTLIGHT VIEW MODE (Desktop) */}
        {viewMode === 'interactive' ? (
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Sidebar Tab Navigation */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0">
              {EXPERIENCES.map((exp, idx) => {
                const isSelected = activeExpIdx === idx;
                const Icon = getRoleIcon(exp.role);
                const isCurrent = idx === 0;

                return (
                  <button
                    key={exp.id}
                    onClick={() => setActiveExpIdx(idx)}
                    className={`group relative text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-300 shrink-0 w-[240px] sm:w-[270px] lg:w-full ${
                      isSelected 
                        ? 'bg-slate-900/90 border-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.15)]' 
                        : 'bg-slate-950/60 border-white/5 hover:border-white/15 hover:bg-slate-900/40'
                    }`}
                  >
                    {/* Active Accent Bar */}
                    {isSelected && (
                      <motion.div 
                        layoutId="activeTabGlow"
                        className="absolute left-0 top-2.5 bottom-2.5 w-1 bg-gradient-to-b from-indigo-500 to-amber-400 rounded-r-full hidden lg:block"
                      />
                    )}

                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className={`p-1.5 rounded-lg transition-colors ${
                          isSelected ? 'bg-indigo-500/20 text-indigo-300' : 'bg-white/5 text-slate-400 group-hover:text-white'
                        }`}>
                          <Icon size={14} />
                        </div>
                        <span className="text-[9.5px] font-mono font-bold text-indigo-400 uppercase tracking-widest">
                          {exp.period}
                        </span>
                      </div>

                      {isCurrent && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[8px] font-black uppercase tracking-wider animate-pulse">
                          Active
                        </span>
                      )}
                    </div>

                    <h3 className={`text-xs sm:text-sm font-extrabold line-clamp-1 mb-0.5 transition-colors ${
                      isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                    }`}>
                      {exp.role}
                    </h3>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
                      <span>{getShortCompanyName(exp.company)}</span>
                      <span className="text-[9.5px] text-slate-500 font-mono">{exp.location.split(',')[0]}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Detailed Role Spotlight Display Card */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentExp.id}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                  className="bg-slate-900/80 border border-white/10 rounded-2xl p-5 sm:p-6 md:p-7 shadow-[0_15px_40px_rgba(0,0,0,0.7)] backdrop-blur-2xl relative overflow-hidden"
                >
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 border-b border-white/10 pb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="px-2.5 py-0.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-black uppercase tracking-widest rounded-md flex items-center gap-1">
                          <CurrentIcon size={12} /> Role 0{activeExpIdx + 1} / 0{EXPERIENCES.length}
                        </span>
                        {activeExpIdx === 0 && (
                          <span className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-wider rounded-md flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            Current
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight leading-snug mb-1">
                        {currentExp.role}
                      </h3>

                      <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-300">
                        {currentExp.website ? (
                          <a 
                            href={currentExp.website} 
                            target="_blank" 
                            rel="noreferrer"
                            className="font-bold text-indigo-400 hover:text-indigo-300 underline decoration-indigo-500/40 underline-offset-4 flex items-center gap-1 transition-colors"
                          >
                            <Building2 size={13} /> {currentExp.company} <ArrowUpRight size={12} />
                          </a>
                        ) : (
                          <span className="font-bold text-slate-200 flex items-center gap-1">
                            <Building2 size={13} className="text-amber-400" /> {currentExp.company}
                          </span>
                        )}
                        <span className="text-slate-600">•</span>
                        <span className="flex items-center gap-1 text-slate-400 font-medium">
                          <MapPin size={13} className="text-rose-400" /> {currentExp.location}
                        </span>
                      </div>
                    </div>

                    {/* Period Badge */}
                    <div className="self-start sm:self-center px-3 py-1.5 bg-slate-950 border border-white/10 rounded-xl text-right shrink-0">
                      <span className="text-[9px] uppercase font-mono font-bold text-slate-400 tracking-wider block">Duration</span>
                      <span className="text-xs font-black text-amber-300">{currentExp.period}</span>
                    </div>
                  </div>

                  {/* Impact Highlight Metrics */}
                  {currentHighlights.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-5">
                      {currentHighlights.map((hl, hIdx) => (
                        <div key={hIdx} className="p-2.5 bg-slate-950/60 border border-white/5 rounded-xl">
                          <div className="text-sm sm:text-base font-black text-indigo-300 tracking-tight leading-none mb-0.5">
                            {hl.metric}
                          </div>
                          <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                            {hl.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Key Contributions List */}
                  <div className="space-y-2 mb-5">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <Award size={13} className="text-amber-400" /> Key Deliverables & Achievements
                    </h4>

                    {currentExp.description.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group">
                        <CheckCircle2 size={14} className="mt-0.5 text-indigo-400 shrink-0 group-hover:scale-110 transition-transform" />
                        <p className="text-slate-300 text-xs font-normal leading-relaxed">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tags Cloud */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {getRoleTags(currentExp.id).map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Prev/Next Controls */}
                    <div className="flex items-center gap-1.5 ml-auto">
                      <button
                        onClick={() => setActiveExpIdx(p => Math.max(0, p - 1))}
                        disabled={activeExpIdx === 0}
                        className={`p-2 rounded-lg border border-white/10 bg-slate-950 text-white transition-all ${
                          activeExpIdx === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-indigo-600 active:scale-95'
                        }`}
                        aria-label="Previous Experience"
                      >
                        <ChevronLeft size={14} />
                      </button>
                      <button
                        onClick={() => setActiveExpIdx(p => Math.min(EXPERIENCES.length - 1, p + 1))}
                        disabled={activeExpIdx === EXPERIENCES.length - 1}
                        className={`p-2 rounded-lg border border-white/10 bg-slate-950 text-white transition-all ${
                          activeExpIdx === EXPERIENCES.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-indigo-600 active:scale-95'
                        }`}
                        aria-label="Next Experience"
                      >
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        ) : (
          /* FULL TIMELINE VIEW MODE (Desktop) */
          <div className="hidden md:block relative pl-5 sm:pl-8 border-l-2 border-indigo-500/30 space-y-6">
            {EXPERIENCES.map((exp, idx) => {
              const Icon = getRoleIcon(exp.role);
              const highlights = getImpactHighlights(exp.id);

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[27px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-400 flex items-center justify-center group-hover:border-amber-400 transition-colors shadow-[0_0_10px_rgba(99,102,241,0.5)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 group-hover:bg-amber-400 transition-colors"></div>
                  </div>

                  <div className="bg-slate-900/70 border border-white/10 rounded-2xl p-4 sm:p-6 hover:border-indigo-500/40 transition-all shadow-xl backdrop-blur-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-white/5 pb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[11px] font-mono font-bold text-indigo-400 uppercase tracking-widest">{exp.period}</span>
                          {idx === 0 && (
                            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[8px] font-black uppercase tracking-wider animate-pulse">
                              Present Role
                            </span>
                          )}
                        </div>

                        <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-indigo-300 transition-colors">
                          {exp.role}
                        </h3>

                        <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                          {exp.website ? (
                            <a href={exp.website} target="_blank" rel="noreferrer" className="text-indigo-400 font-bold hover:underline flex items-center gap-1">
                              {exp.company} <ArrowUpRight size={11} />
                            </a>
                          ) : (
                            <span className="font-bold text-slate-200">{exp.company}</span>
                          )}
                          <span>•</span>
                          <span className="text-slate-400 flex items-center gap-1"><MapPin size={11} /> {exp.location}</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-950 border border-white/10 text-indigo-400 self-start sm:self-center">
                        <Icon size={16} />
                      </div>
                    </div>

                    {/* Highlights */}
                    {highlights.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
                        {highlights.map((hl, hIdx) => (
                          <div key={hIdx} className="p-2 bg-slate-950/80 border border-white/5 rounded-lg">
                            <div className="text-xs font-black text-indigo-300">{hl.metric}</div>
                            <div className="text-[8.5px] font-bold text-slate-400 uppercase tracking-wider">{hl.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="space-y-2 mb-4">
                      {exp.description.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="mt-0.5 text-indigo-400 shrink-0" />
                          <p className="text-slate-300 text-xs leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                      {getRoleTags(exp.id).map((tag, tIdx) => (
                        <span key={tIdx} className="text-[9px] font-bold text-indigo-300 uppercase tracking-wider px-2 py-0.5 bg-white/5 rounded-full border border-white/5">
                          #{tag}
                        </span>
                      ))}
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* MOBILE HIGH-IMPACT SINGLE VIEW CARD SLIDER */}
        <div className="md:hidden space-y-4 max-w-sm mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentExp.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="bg-[#0e1528] border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col justify-between min-h-[360px]"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 font-mono text-[9px] font-black uppercase tracking-wider">
                    {currentExp.period}
                  </span>
                  <div className="bg-slate-950 px-2 py-0.5 rounded-full border border-white/10 text-[8px] font-mono text-amber-400">
                    {activeExpIdx + 1}/{EXPERIENCES.length}
                  </div>
                </div>

                <h3 className="text-base font-black text-white leading-tight mb-1">
                  {currentExp.role}
                </h3>

                <div className="text-xs font-semibold text-amber-400 mb-4 flex items-center gap-1.5">
                  <Building2 size={13} />
                  <span>{currentExp.company}</span>
                </div>

                {/* Highlights */}
                {currentHighlights.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {currentHighlights.slice(0, 2).map((hl, hIdx) => (
                      <div key={hIdx} className="p-2 bg-slate-950/80 border border-white/5 rounded-lg">
                        <div className="text-xs font-black text-indigo-300">{hl.metric}</div>
                        <div className="text-[8px] font-bold text-slate-400 uppercase truncate">{hl.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Key Points */}
                <div className="space-y-2 mb-4">
                  {currentExp.description.slice(0, 2).map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className="text-indigo-400 shrink-0 mt-0.5" />
                      <p className="text-slate-300 text-[11px] leading-relaxed line-clamp-2">{pt}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Card Footer & Controls */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <div className="flex gap-1">
                  {EXPERIENCES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveExpIdx(idx)}
                      className={`h-1.5 rounded-full transition-all ${
                        activeExpIdx === idx ? 'bg-indigo-400 w-4' : 'bg-slate-800 w-1.5'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveExpIdx(p => (p === 0 ? EXPERIENCES.length - 1 : p - 1))}
                    className="w-8 h-8 rounded-lg bg-slate-900 border border-white/10 text-white flex items-center justify-center active:scale-95"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => setActiveExpIdx(p => (p === EXPERIENCES.length - 1 ? 0 : p + 1))}
                    className="w-8 h-8 rounded-lg bg-slate-900 border border-white/10 text-white flex items-center justify-center active:scale-95"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Experience;
