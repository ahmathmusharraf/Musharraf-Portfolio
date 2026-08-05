
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILL_CATEGORIES, LANGUAGES, CERTIFICATIONS } from '../constants';
import { Award, Globe, Zap, Sparkles, X, ChevronRight } from 'lucide-react';

const CATEGORY_THEMES = [
  {
    bg: 'bg-emerald-950/25',
    border: 'border-emerald-500/20 hover:border-emerald-500/40',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20',
    iconColor: 'text-emerald-400',
    glow: 'shadow-[0_4px_20px_rgba(16,185,129,0.15)]',
    textGlow: 'drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]',
    gradient: 'from-emerald-500/10'
  },
  {
    bg: 'bg-amber-950/25',
    border: 'border-amber-500/20 hover:border-amber-500/40',
    iconBg: 'bg-amber-500/10 border-amber-500/20',
    iconColor: 'text-amber-400',
    glow: 'shadow-[0_4px_20px_rgba(245,158,11,0.15)]',
    textGlow: 'drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]',
    gradient: 'from-amber-500/10'
  },
  {
    bg: 'bg-sky-950/25',
    border: 'border-sky-500/20 hover:border-sky-500/40',
    iconBg: 'bg-sky-500/10 border-sky-500/20',
    iconColor: 'text-sky-400',
    glow: 'shadow-[0_4px_20px_rgba(14,165,233,0.15)]',
    textGlow: 'drop-shadow-[0_0_8px_rgba(14,165,233,0.3)]',
    gradient: 'from-sky-500/10'
  },
  {
    bg: 'bg-rose-950/25',
    border: 'border-rose-500/20 hover:border-rose-500/40',
    iconBg: 'bg-rose-500/10 border-rose-500/20',
    iconColor: 'text-rose-400',
    glow: 'shadow-[0_4px_20px_rgba(244,63,94,0.15)]',
    textGlow: 'drop-shadow-[0_0_8px_rgba(244,63,94,0.3)]',
    gradient: 'from-rose-500/10'
  },
  {
    bg: 'bg-violet-950/25',
    border: 'border-violet-500/20 hover:border-violet-500/40',
    iconBg: 'bg-violet-500/10 border-violet-500/20',
    iconColor: 'text-violet-400',
    glow: 'shadow-[0_4px_20px_rgba(139,92,246,0.15)]',
    textGlow: 'drop-shadow-[0_0_8px_rgba(139,92,246,0.3)]',
    gradient: 'from-violet-500/10'
  },
  {
    bg: 'bg-cyan-950/25',
    border: 'border-cyan-500/20 hover:border-cyan-500/40',
    iconBg: 'bg-cyan-500/10 border-cyan-500/20',
    iconColor: 'text-cyan-400',
    glow: 'shadow-[0_4px_20px_rgba(6,182,212,0.15)]',
    textGlow: 'drop-shadow-[0_0_8px_rgba(6,182,212,0.3)]',
    gradient: 'from-cyan-500/10'
  },
  {
    bg: 'bg-lime-950/25',
    border: 'border-lime-500/20 hover:border-lime-500/40',
    iconBg: 'bg-lime-500/10 border-lime-500/20',
    iconColor: 'text-lime-400',
    glow: 'shadow-[0_4px_20px_rgba(132,204,22,0.15)]',
    textGlow: 'drop-shadow-[0_0_8px_rgba(132,204,22,0.3)]',
    gradient: 'from-lime-500/10'
  },
  {
    bg: 'bg-blue-950/25',
    border: 'border-blue-500/20 hover:border-blue-500/40',
    iconBg: 'bg-blue-500/10 border-blue-500/20',
    iconColor: 'text-blue-400',
    glow: 'shadow-[0_4px_20px_rgba(59,130,246,0.15)]',
    textGlow: 'drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]',
    gradient: 'from-blue-500/10'
  },
  {
    bg: 'bg-fuchsia-950/25',
    border: 'border-fuchsia-500/20 hover:border-fuchsia-500/40',
    iconBg: 'bg-fuchsia-500/10 border-fuchsia-500/20',
    iconColor: 'text-fuchsia-400',
    glow: 'shadow-[0_4px_20px_rgba(217,70,239,0.15)]',
    textGlow: 'drop-shadow-[0_0_8px_rgba(217,70,239,0.3)]',
    gradient: 'from-fuchsia-500/10'
  }
];

const Skills: React.FC = () => {
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState<number | null>(null);
  const [activeMobileSkillIdx, setActiveMobileSkillIdx] = useState(0);

  const activeMobileCat = SKILL_CATEGORIES[activeMobileSkillIdx];
  const activeMobileTheme = CATEGORY_THEMES[activeMobileSkillIdx % CATEGORY_THEMES.length];
  const ActiveMobileIcon = activeMobileCat.icon;

  return (
    <section id="skills" className="py-10 md:py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          {...({
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true }
          } as any)}
          className="mb-6 md:mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
             <div className="h-px w-6 sm:w-8 bg-indigo-500/50"></div>
             <span className="text-indigo-400 font-mono text-[10px] sm:text-xs tracking-[0.4em] uppercase font-bold">Expertise Matrix</span>
             <div className="h-px w-6 sm:w-8 bg-indigo-500/50"></div>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tighter">Technical Mastery.</h2>
          <p className="text-slate-400 max-w-lg mx-auto text-sm sm:text-base font-light leading-relaxed">
            Professional competencies across cinematography, branding, and engineering.
          </p>
        </motion.div>

        {/* Technical Mastery Grid (Desktop + Desktop/Tablet views with themed colors) */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-16 px-0">
          {SKILL_CATEGORIES.map((category, idx) => {
            const theme = CATEGORY_THEMES[idx % CATEGORY_THEMES.length];
            return (
              <motion.div
                key={category.name}
                {...({
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { delay: idx * 0.05, duration: 0.6 }
                } as any)}
                className="group"
              >
                <div className="flex items-center gap-3 mb-4 relative">
                  <div className={`absolute -left-3 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-gradient-to-b from-transparent via-${theme.iconColor.split('-')[1]}-500 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  <div className={`w-8 h-8 rounded-lg bg-slate-900 border border-white/5 flex items-center justify-center ${theme.iconColor} group-hover:scale-110 transition-transform duration-500 shadow-xl relative overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-tr ${theme.gradient} opacity-20`} />
                    <category.icon size={16} className="relative z-10" />
                  </div>
                  <h3 className="text-sm font-black text-white uppercase tracking-[0.1em] group-hover:text-white transition-colors">
                    {category.name}
                  </h3>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-start gap-2.5 group/skill">
                      <div className={`w-1 h-1 rounded-full bg-slate-800 mt-1.5 group-hover/skill:bg-${theme.iconColor.split('-')[1]}-500 transition-colors`}></div>
                      <span className="text-slate-400 text-xs font-bold uppercase tracking-widest leading-relaxed group-hover/skill:text-slate-200 transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technical Mastery Mobile Single-View Slider */}
        <div className="md:hidden max-w-sm mx-auto">
          {/* Horizontal Category Switcher Chips */}
          <div className="flex gap-1.5 overflow-x-auto pb-3 mb-3 scrollbar-hide -mx-2 px-2">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <button
                key={cat.name}
                onClick={() => setActiveMobileSkillIdx(idx)}
                className={`px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider shrink-0 transition-all ${
                  activeMobileSkillIdx === idx
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-slate-900 text-slate-400 border border-white/5'
                }`}
              >
                {cat.name.split(' ')[0]}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeMobileCat.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className={`${activeMobileTheme.bg} border ${activeMobileTheme.border} rounded-2xl p-5 shadow-2xl flex flex-col justify-between min-h-[320px] relative overflow-hidden`}
            >
              <div className={`absolute top-0 inset-x-0 h-12 bg-gradient-to-b ${activeMobileTheme.gradient} opacity-20 pointer-events-none`} />

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${activeMobileTheme.iconBg} flex items-center justify-center ${activeMobileTheme.iconColor}`}>
                      <ActiveMobileIcon size={18} />
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-white uppercase tracking-wider">
                        {activeMobileCat.name}
                      </h3>
                      <p className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">
                        Domain Category 0{activeMobileSkillIdx + 1} / 0{SKILL_CATEGORIES.length}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-black text-amber-400 bg-slate-950 px-2 py-1 rounded-md border border-white/10">
                    {activeMobileCat.skills.length} Skills
                  </span>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4 relative z-10">
                  {activeMobileCat.skills.map((sk) => (
                    <span
                      key={sk}
                      className="px-2.5 py-1 bg-slate-950/80 border border-white/10 rounded-lg text-slate-200 font-bold text-[10px] uppercase tracking-wider"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              {/* Slider Footer & Controls */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between relative z-10">
                <div className="flex gap-1">
                  {SKILL_CATEGORIES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveMobileSkillIdx(idx)}
                      className={`h-1.5 rounded-full transition-all ${
                        activeMobileSkillIdx === idx ? 'bg-indigo-400 w-4' : 'bg-slate-800 w-1.5'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveMobileSkillIdx(p => (p === 0 ? SKILL_CATEGORIES.length - 1 : p - 1))}
                    className="w-8 h-8 rounded-lg bg-slate-950 border border-white/10 text-white flex items-center justify-center active:scale-95"
                  >
                    <ChevronRight size={16} className="rotate-180" />
                  </button>
                  <button
                    onClick={() => setActiveMobileSkillIdx(p => (p === SKILL_CATEGORIES.length - 1 ? 0 : p + 1))}
                    className="w-8 h-8 rounded-lg bg-slate-950 border border-white/10 text-white flex items-center justify-center active:scale-95"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dynamic Theme Bottom Sheet Modal for Mobile Skill Detail Expand */}
        <AnimatePresence>
          {selectedCategoryIdx !== null && (
            <>
              {/* Dark Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCategoryIdx(null)}
                className="fixed inset-0 bg-slate-950 z-[110] md:hidden"
              />

              {/* Bottom Sheet Detail Card */}
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed bottom-0 inset-x-0 bg-[#0d1220] rounded-t-[2rem] border-t border-white/10 z-[120] p-6 pb-12 md:hidden"
              >
                {/* Drag Indicator Accent */}
                <div className="w-12 h-1 bg-slate-800 rounded-full mx-auto mb-6"></div>

                {/* Header info */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3.5">
                    <div className={`w-11 h-11 rounded-xl ${CATEGORY_THEMES[selectedCategoryIdx % CATEGORY_THEMES.length].iconBg} flex items-center justify-center ${CATEGORY_THEMES[selectedCategoryIdx % CATEGORY_THEMES.length].iconColor}`}>
                      {React.createElement(SKILL_CATEGORIES[selectedCategoryIdx].icon, { size: 18 })}
                    </div>
                    <div>
                      <h3 className="text-base font-black text-white uppercase tracking-[0.08em]">
                        {SKILL_CATEGORIES[selectedCategoryIdx].name}
                      </h3>
                      <p className="text-[9px] font-mono text-slate-400 uppercase tracking-widest mt-0.5">
                        Creative Specialty Module
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedCategoryIdx(null)}
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                    className="w-8 h-8 rounded-full bg-slate-900 border border-white/5 text-slate-400 flex items-center justify-center active:scale-90 transition-transform"
                  >
                    <X size={14} />
                  </button>
                </div>

                {/* Content skills tag system */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {SKILL_CATEGORIES[selectedCategoryIdx].skills.map((skill, sIdx) => {
                    const theme = CATEGORY_THEMES[selectedCategoryIdx % CATEGORY_THEMES.length];
                    return (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: sIdx * 0.04 }}
                        className="flex items-center gap-2 px-3.5 py-3 bg-slate-950/50 border border-white/[0.03] rounded-xl"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${theme.iconColor.replace('text-', 'bg-')} shrink-0 shadow-[0_0_8px_rgba(99,102,241,0.5)]`} />
                        <span className="text-[10px] font-bold text-slate-200 uppercase tracking-wider whitespace-nowrap overflow-hidden text-ellipsis">
                          {skill}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Bottom Quick Note */}
                <div className="p-3.5 rounded-xl bg-slate-900/30 border border-white/[0.02] flex items-center gap-2.5">
                  <Sparkles size={12} className={CATEGORY_THEMES[selectedCategoryIdx % CATEGORY_THEMES.length].iconColor} />
                  <span className="text-[8.5px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                    Verified Competency and Live Production Tested
                  </span>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Credentials & Languages - Simplified Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-8 md:mt-32">
          <motion.div
            {...({
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true }
            } as any)}
            className="lg:col-span-8 bg-[#0c111d]/40 p-5 md:p-8 rounded-2xl md:rounded-3xl border border-white/5 shadow-lg"
          >
            <h3 className="text-sm md:text-xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2">
              <Award className="text-amber-400" size={16} /> Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert} className="flex items-center gap-2.5 p-2.5 md:p-4 rounded-xl bg-slate-900/40 border border-white/5 group hover:border-amber-400/20 transition-all">
                  <div className="p-1.5 bg-slate-800 rounded-lg text-amber-400/80 group-hover:scale-110 transition-transform shrink-0">
                    <Zap size={12} fill="currentColor" />
                  </div>
                  <span className="text-slate-400 group-hover:text-slate-200 font-medium text-[10.5px] md:text-xs leading-snug transition-colors">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...({
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true }
            } as any)}
            className="lg:col-span-4 bg-indigo-600/95 p-5 md:p-8 rounded-2xl md:rounded-3xl flex flex-col justify-center relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 right-0 p-16 md:p-24 bg-white/10 rounded-full blur-2xl md:blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="text-sm md:text-xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2 relative z-10">
              <Globe className="text-white" size={16} /> Global Languages
            </h3>
            <div className="space-y-2.5 md:space-y-4 relative z-10">
              {LANGUAGES.map((lang) => {
                 const [name, levelRaw] = lang.split(' (');
                 const level = levelRaw?.replace(')', '') || 'Native';
                 return (
                    <div key={name} className="flex items-center justify-between border-b border-white/10 pb-2 md:pb-3 last:border-0">
                        <span className="text-white text-xs md:text-sm font-bold">{name}</span>
                        <span className="bg-white/10 px-2.5 py-0.5 rounded-full text-white text-[8px] md:text-[9px] font-black uppercase tracking-wider">{level}</span>
                    </div>
                 )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

