
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VISUAL_WORKS, PERSONAL_INFO } from '../constants';
import { Camera, Video, ExternalLink, Play, Palette, Layout, Sparkles, Download, X, Smartphone, GraduationCap, ChevronRight, Film, Eye } from 'lucide-react';
import { VisualWork } from '../types';

const VisualWorks: React.FC = () => {
  const [selectedWork, setSelectedWork] = useState<VisualWork | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [mobileActiveIdx, setMobileActiveIdx] = useState<number>(0);

  const handleFilterChange = (filterName: string) => {
    setActiveFilter(filterName);
    setMobileActiveIdx(0);
  };

  const filters = [
    { name: 'All', icon: Sparkles },
    { name: 'Videography', icon: Video },
    { name: 'Photography', icon: Camera },
    { name: 'Reels', icon: Smartphone },
    { name: 'Creative Design', icon: Palette },
    { name: 'Mentorship', icon: GraduationCap },
  ];

  const filteredWorks = VISUAL_WORKS.filter(work => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Videography') return work.category === 'Videography';
    if (activeFilter === 'Photography') return work.category === 'Photography';
    if (activeFilter === 'Reels') return work.category === 'Reels';
    if (activeFilter === 'Creative Design') return work.category === 'Graphic Design' || work.category === 'Branding';
    if (activeFilter === 'Mentorship') return work.title.toLowerCase().includes('mentorship') || work.title.toLowerCase().includes('lecturing') || work.title.toLowerCase().includes('workshop');
    return true;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Photography': return <Camera size={14} />;
      case 'Videography': return <Video size={14} />;
      case 'Reels': return <Smartphone size={14} />;
      case 'Graphic Design': return <Layout size={14} />;
      case 'Branding': return <Palette size={14} />;
      default: return <Film size={14} />;
    }
  };

  const getCategoryBadgeStyle = (category: string) => {
    switch (category) {
      case 'Photography': return 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30';
      case 'Videography': return 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30';
      case 'Reels': return 'bg-purple-500/15 text-purple-400 border-purple-500/30';
      case 'Graphic Design': return 'bg-pink-500/15 text-pink-400 border-pink-500/30';
      case 'Branding': return 'bg-amber-500/15 text-amber-400 border-amber-500/30';
      default: return 'bg-slate-500/15 text-slate-400 border-slate-500/30';
    }
  };

  const getYoutubeThumbnail = (url?: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    const videoId = (match && match[2].length === 11) ? match[2] : null;
    return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;
  };

  return (
    <section id="visuals" className="py-6 md:py-28 bg-[#060913] relative overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-indigo-600/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          {...({
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true }
          } as any)}
          className="mb-4 md:mb-16 text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/25 text-secondary font-mono text-[9px] sm:text-xs tracking-[0.2em] uppercase font-bold mb-2">
            <Sparkles size={11} className="text-secondary" />
            <span>Creative Direction</span>
          </div>
          
          <h2 className="text-xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-2">
            Specialized Multimedia <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-indigo-300 to-indigo-500">& Visual Art</span>
          </h2>
          
          <div className="w-16 md:w-20 h-0.5 md:h-1 bg-gradient-to-r from-secondary via-indigo-500 to-amber-400 mx-auto rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)] mb-2 md:mb-4" />
          
          <p className="hidden md:block text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
            Crafting high-impact commercial brand assets, executive videography, cinematic real estate visual stories, and strategic graphic direction.
          </p>
        </motion.div>

        {/* Filter Navigation Bar */}
        <div className="flex overflow-x-auto md:flex-wrap justify-start md:justify-center gap-1.5 sm:gap-2.5 mb-4 sm:mb-14 pb-2 md:pb-0 scrollbar-hide px-2 -mx-4 sm:mx-0">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.name;
            const FilterIcon = filter.icon;
            return (
              <motion.button
                key={filter.name}
                onClick={() => handleFilterChange(filter.name)}
                whileTap={{ scale: 0.95 }}
                style={{ WebkitTapHighlightColor: 'transparent' }}
                className={`flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2.5 rounded-full border text-[10px] md:text-xs font-bold transition-all duration-300 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-slate-800/90 border-indigo-500/60 text-white shadow-[0_0_25px_rgba(99,102,241,0.25)]'
                    : 'bg-slate-900/40 border-white/5 text-slate-400 hover:border-white/15 hover:text-slate-200'
                }`}
              >
                <FilterIcon 
                  size={12} 
                  className={isActive ? 'text-amber-400' : 'text-slate-500'} 
                />
                <span className="uppercase tracking-wider text-[9px] md:text-[10.5px]">
                  {filter.name}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Desktop Grid Layout */}
        <motion.div 
          layout
          className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-[1400px] mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work) => {
              const thumbnail = work.videoUrl ? (getYoutubeThumbnail(work.videoUrl) || work.imageUrl) : work.imageUrl;
              return (
                <motion.div
                  layout
                  key={work.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-900/60 border border-white/10 shadow-xl cursor-pointer hover:border-indigo-500/50 hover:shadow-[0_0_35px_rgba(99,102,241,0.2)] transition-all duration-500"
                  onClick={() => setSelectedWork(work)}
                >
                  <img 
                    src={thumbnail} 
                    alt={work.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                  
                  {/* Play Trigger Badge */}
                  {work.videoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform duration-300">
                      <div className="w-13 h-13 sm:w-14 sm:h-14 bg-slate-950/70 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white shadow-2xl group-hover:bg-indigo-600 group-hover:border-indigo-400 transition-colors">
                        <Play size={22} fill="currentColor" className="ml-1 text-white" />
                      </div>
                    </div>
                  )}

                  {/* Card Content Footer */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-end transform transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2.5 py-1 rounded-full border text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5 backdrop-blur-md ${getCategoryBadgeStyle(work.category)}`}>
                        {getCategoryIcon(work.category)}
                        <span>{work.category}</span>
                      </span>
                    </div>
                    
                    <h3 className="text-base font-black text-white mb-2 leading-snug tracking-tight group-hover:text-amber-300 transition-colors">
                      {work.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] font-extrabold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                        {work.videoUrl ? (
                          <>
                            <Eye size={12} className="text-indigo-400" /> Watch Video Reel
                          </>
                        ) : (
                          <>
                            <ExternalLink size={12} className="text-cyan-400" /> View Creative Asset
                          </>
                        )}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Mobile Slider View */}
        <div className="md:hidden max-w-sm mx-auto">
          {filteredWorks.length > 0 ? (
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={filteredWorks[mobileActiveIdx].id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 border border-white/10 shadow-xl cursor-pointer"
                  onClick={() => setSelectedWork(filteredWorks[mobileActiveIdx])}
                >
                  <img 
                    src={filteredWorks[mobileActiveIdx].videoUrl ? (getYoutubeThumbnail(filteredWorks[mobileActiveIdx].videoUrl) || filteredWorks[mobileActiveIdx].imageUrl) : filteredWorks[mobileActiveIdx].imageUrl} 
                    alt={filteredWorks[mobileActiveIdx].title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90" />
                  
                  {filteredWorks[mobileActiveIdx].videoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-10 h-10 bg-indigo-600/90 backdrop-blur-md border border-indigo-400 rounded-full flex items-center justify-center text-white shadow-lg">
                        <Play size={16} fill="currentColor" className="ml-0.5" />
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 p-3.5 flex flex-col justify-end">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className={`px-2 py-0.5 rounded-full border text-[8px] font-black uppercase tracking-widest flex items-center gap-1 backdrop-blur-md ${getCategoryBadgeStyle(filteredWorks[mobileActiveIdx].category)}`}>
                        {getCategoryIcon(filteredWorks[mobileActiveIdx].category)}
                        <span>{filteredWorks[mobileActiveIdx].category}</span>
                      </span>
                    </div>
                    
                    <h3 className="text-xs font-black text-white leading-tight tracking-tight mb-1 line-clamp-1">
                      {filteredWorks[mobileActiveIdx].title}
                    </h3>
                    
                    <div className="inline-flex items-center gap-1 text-[8.5px] font-black text-indigo-400 uppercase tracking-widest">
                      <span>{filteredWorks[mobileActiveIdx].videoUrl ? 'TAP TO PLAY' : 'TAP TO VIEW'}</span>
                      <ChevronRight size={10} />
                    </div>
                  </div>

                  {/* Top-Right Index Badge */}
                  <div className="absolute top-2.5 right-2.5 bg-slate-950/85 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10 text-[7.5px] font-mono font-bold text-white tracking-widest">
                    {mobileActiveIdx + 1} / {filteredWorks.length}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Mobile Controls */}
              <div className="flex items-center justify-between mt-2.5 px-1">
                <button
                  type="button"
                  onClick={() => setMobileActiveIdx(p => (p === 0 ? filteredWorks.length - 1 : p - 1))}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                  className="w-7 h-7 rounded-lg bg-slate-900 border border-white/10 text-slate-300 flex items-center justify-center active:scale-95 transition-all"
                >
                  <ChevronRight size={14} className="rotate-180" />
                </button>

                <div className="flex gap-1">
                  {filteredWorks.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setMobileActiveIdx(dotIdx)}
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        mobileActiveIdx === dotIdx ? 'bg-indigo-400 w-3' : 'bg-slate-800 w-1'
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setMobileActiveIdx(p => (p === filteredWorks.length - 1 ? 0 : p + 1))}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                  className="w-7 h-7 rounded-lg bg-slate-900 border border-white/10 text-slate-300 flex items-center justify-center active:scale-95 transition-all"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-6 text-center">
              <span className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">No matching works</span>
            </div>
          )}
        </div>

        {/* Creative Asset Detail Lightbox Modal */}
        <AnimatePresence>
          {selectedWork && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-2xl p-3 sm:p-6 overflow-y-auto"
              onClick={() => setSelectedWork(null)}
            >
              <button 
                className="fixed top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-slate-900/90 border border-white/15 text-slate-300 hover:text-white hover:bg-slate-800 transition-all z-50 shadow-2xl"
                onClick={() => setSelectedWork(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
              
              <motion.div 
                initial={{ scale: 0.92, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.92, y: 15 }}
                className="relative w-full max-w-2xl my-auto shadow-[0_20px_60px_rgba(0,0,0,0.95)] rounded-2xl overflow-hidden bg-[#0c101d] border border-white/15 text-left"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Top Media Showcase: Video or Image */}
                <div className="relative bg-black w-full overflow-hidden">
                  {selectedWork.videoUrl ? (
                    <div className={`w-full ${selectedWork.aspectRatio === '9:16' ? 'max-w-[260px] aspect-[9/16] mx-auto py-2' : 'aspect-video'}`}>
                      <iframe
                        src={`${selectedWork.videoUrl}?autoplay=1`}
                        className="w-full h-full rounded-xl sm:rounded-none"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title={selectedWork.title}
                      />
                    </div>
                  ) : (
                    <div className="relative w-full aspect-video sm:aspect-[16/9] max-h-[36vh] bg-slate-950 flex items-center justify-center overflow-hidden">
                      <img 
                        src={selectedWork.imageUrl} 
                        alt={selectedWork.title} 
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c101d] via-transparent to-transparent opacity-60 pointer-events-none" />
                    </div>
                  )}
                </div>
                
                {/* Content & Metadata Section */}
                <div className="p-4 sm:p-5 space-y-3">
                  {/* Category & Format Badges */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className={`px-2.5 py-0.5 rounded-full border text-[8.5px] font-black uppercase tracking-widest flex items-center gap-1 backdrop-blur-md ${getCategoryBadgeStyle(selectedWork.category)}`}>
                      {getCategoryIcon(selectedWork.category)}
                      <span>{selectedWork.category}</span>
                    </span>

                    <span className="px-2 py-0.5 rounded-full bg-slate-900 border border-white/10 text-slate-300 text-[8.5px] font-mono font-bold uppercase tracking-wider">
                      Aspect: {selectedWork.aspectRatio || '16:9'}
                    </span>

                    <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[8.5px] font-extrabold uppercase tracking-wider">
                      {selectedWork.videoUrl ? 'Video Reel' : 'High-Res Asset'}
                    </span>
                  </div>

                  {/* Asset Title */}
                  <h3 className="text-base sm:text-lg font-black text-white tracking-tight leading-snug">
                    {selectedWork.title}
                  </h3>

                  {/* Descriptive Text */}
                  <div className="space-y-1 text-slate-300 text-xs font-light leading-relaxed bg-slate-900/50 p-3 rounded-xl border border-white/5">
                    <p className="font-semibold text-white/90 text-[11px]">
                      Creative Direction & Production Overview:
                    </p>
                    <p className="text-[11.5px] text-slate-300">
                      {selectedWork.category === 'Videography' && "High-definition commercial video production crafted for luxury brand storytelling, corporate campaigns, and real estate visual showcases in Dubai & international markets."}
                      {selectedWork.category === 'Reels' && "Vertical short-form cinematic reel engineered for fast-paced social engagement, Meta & TikTok ad performance, and high-conversion brand awareness."}
                      {selectedWork.category === 'Photography' && "High-resolution commercial product & interior photography showcasing architectural details, brand aesthetics, and professional media presentation."}
                      {selectedWork.category === 'Branding' && "Strategic brand identity & visual communication design created to establish strong market positioning, cohesive guidelines, and premium audience perception."}
                      {selectedWork.category === 'Graphic Design' && "Multi-channel graphic design asset designed for digital ads, print media, social campaigns, and institutional marketing collateral."}
                    </p>
                  </div>

                  {/* Image Thumbnail Preview (if video is currently playing) */}
                  {selectedWork.videoUrl && (
                    <div className="flex items-center gap-2.5 p-2 bg-slate-900/40 rounded-lg border border-white/5">
                      <img 
                        src={selectedWork.imageUrl} 
                        alt="Thumbnail" 
                        className="w-12 h-9 object-cover rounded border border-white/10 shrink-0"
                      />
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block">Original Cover Asset</span>
                        <span className="text-[11px] font-bold text-slate-200 line-clamp-1">{selectedWork.title}</span>
                      </div>
                    </div>
                  )}

                  {/* Action Footer */}
                  <div className="pt-1.5 flex flex-col sm:flex-row gap-2.5 items-center justify-between border-t border-white/10">
                    <span className="text-[9.5px] text-slate-400 uppercase font-mono tracking-wider">
                      Producer: <strong className="text-amber-300">{PERSONAL_INFO.name}</strong> • Dubai, UAE
                    </span>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <a
                        href={PERSONAL_INFO.videoPortfolio}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 sm:flex-none px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-[11px] font-black uppercase tracking-wider flex items-center justify-center gap-1 transition-all shadow-md"
                      >
                        <ExternalLink size={12} />
                        <span>View Portfolio</span>
                      </a>
                      <button
                        onClick={() => setSelectedWork(null)}
                        className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-[11px] font-bold uppercase tracking-wider"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Portfolio Link CTA Buttons */}
        <motion.div 
          {...({
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true }
          } as any)}
          className="mt-12 md:mt-20 text-center"
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-lg sm:max-w-none mx-auto">
            <a 
              href="https://behance.net/ahmathmusharraf" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 bg-white text-slate-950 rounded-full font-black text-xs uppercase tracking-wider transition-all shadow-[0_4px_25px_rgba(255,255,255,0.1)] hover:bg-slate-100 hover:-translate-y-1 active:scale-95"
            >
              <Camera size={16} className="text-slate-900" />
              <span>Behance Design Portfolio</span>
              <Sparkles size={14} className="text-cyan-600" />
            </a>

            <a 
              href={PERSONAL_INFO.videoPortfolio || "https://www.canva.com/design/DAG7830hOq8/RxMMMG4idKm8Q5GwIEuAhQ/view"} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 bg-slate-900/80 text-white border border-slate-700/80 rounded-full font-black text-xs uppercase tracking-wider transition-all hover:bg-slate-800 hover:border-indigo-500/50 hover:-translate-y-1 active:scale-95"
            >
              <Video size={16} className="text-indigo-400" />
              <span>Multimedia Video Portfolio</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisualWorks;

