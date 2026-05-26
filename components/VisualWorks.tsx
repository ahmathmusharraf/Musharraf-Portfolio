
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VISUAL_WORKS } from '../constants';
import { Camera, Video, ExternalLink, Play, Palette, Layout, Sparkles, Download, X, Smartphone, Building2, Car, Stethoscope, Briefcase, GraduationCap, ChevronRight } from 'lucide-react';
import { VisualWork } from '../types';

const VisualWorks: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VisualWork | null>(null);
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
      case 'Photography': return <Camera size={16} />;
      case 'Videography': return <Video size={16} />;
      case 'Reels': return <Smartphone size={16} />;
      case 'Graphic Design': return <Layout size={16} />;
      case 'Branding': return <Palette size={16} />;
      default: return <Camera size={16} />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Photography': return 'bg-primary/20 text-primary';
      case 'Videography': return 'bg-secondary/20 text-secondary';
      case 'Reels': return 'bg-indigo-500/20 text-indigo-400';
      case 'Graphic Design': return 'bg-pink-500/20 text-pink-400';
      case 'Branding': return 'bg-amber-500/20 text-amber-400';
      default: return 'bg-slate-500/20 text-slate-400';
    }
  };

  const getYoutubeThumbnail = (url?: string) => {
    if (!url) return null;
    // Handle embed URLs, short URLs (youtu.be), and standard watch?v= URLs
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    const videoId = (match && match[2].length === 11) ? match[2] : null;
    return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;
  };

  return (
    <section id="visuals" className="py-10 md:py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <motion.div
          {...({
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true }
          } as any)}
          className="mb-4 md:mb-12 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-3 sm:mb-4">
            <span className="text-secondary font-mono text-[10px] sm:text-sm tracking-[0.3em] uppercase text-glow px-4 py-1 rounded-full bg-secondary/10 border border-secondary/20 font-bold">
              Creative Direction
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-1 mb-4 sm:mb-6 text-glow tracking-tighter">Specialized Multimedia</h2>
          <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-[0_0_15px_rgba(0,182,212,0.5)]"></div>
        </motion.div>

        {/* Filter Navigation - Horizontally scrollable on mobile */}
        <div className="flex overflow-x-auto md:flex-wrap justify-start md:justify-center gap-1.5 sm:gap-3 mb-5 sm:mb-16 pb-4 md:pb-0 scrollbar-hide px-4 -mx-6 md:mx-0 mask-fade-edges">
          {filters.map((filter) => (
            <motion.button
              key={filter.name}
              onClick={() => handleFilterChange(filter.name)}
              whileTap={{ scale: 0.95 }}
              style={{ WebkitTapHighlightColor: 'transparent' }}
              className={`flex items-center gap-2 sm:gap-3 px-3.5 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl border transition-all duration-300 whitespace-nowrap shrink-0 ${
                activeFilter === filter.name
                  ? 'bg-slate-800 border-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.2)]'
                  : 'bg-slate-900/50 border-white/5 hover:border-white/10 text-slate-400'
              }`}
            >
              <filter.icon 
                size={14} 
                className={activeFilter === filter.name ? 'text-amber-400' : 'text-indigo-400 opacity-60'} 
              />
              <span className={`text-[10px] sm:text-sm font-bold uppercase tracking-wider ${activeFilter === filter.name ? 'text-white' : 'text-slate-500'}`}>
                {filter.name}
              </span>
            </motion.button>
          ))}
        </div>

        <motion.div 
          layout
          className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work) => (
              <motion.div
                layout
                key={work.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-900 border border-white/5 shadow-lg cursor-pointer"
                onClick={() => work.videoUrl && setSelectedVideo(work)}
              >
                <img 
                  src={work.videoUrl ? (getYoutubeThumbnail(work.videoUrl) || work.imageUrl) : work.imageUrl} 
                  alt={work.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
                
                {work.videoUrl && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform">
                     <div className="w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white shadow-2xl">
                        <Play size={20} fill="currentColor" />
                     </div>
                  </div>
                )}

                <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-2">
                     <div className={`${getCategoryColor(work.category)} backdrop-blur-md p-1.5 rounded-lg`}>
                         {getCategoryIcon(work.category)}
                     </div>
                     <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">
                         {work.category}
                     </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 leading-tight tracking-tight">{work.title}</h3>
                  
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity delay-75">
                      <button className="flex items-center gap-2 text-[10px] font-bold text-white bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full hover:bg-white/20 transition-all border border-white/5 uppercase tracking-tighter">
                          {work.videoUrl ? <Play size={12} fill="currentColor" /> : <ExternalLink size={12} />}
                          {work.videoUrl ? 'Watch Now' : 'Explore'}
                      </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Mobile View: High Impact One-View Compact Slider */}
        <div className="md:hidden space-y-4 px-1 max-w-sm mx-auto">
          {filteredWorks.length > 0 ? (
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={filteredWorks[mobileActiveIdx].id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-900 border border-white/5 shadow-xl cursor-pointer"
                  onClick={() => filteredWorks[mobileActiveIdx].videoUrl && setSelectedVideo(filteredWorks[mobileActiveIdx])}
                >
                  {/* Visual Background Cover Image */}
                  <img 
                    src={filteredWorks[mobileActiveIdx].videoUrl ? (getYoutubeThumbnail(filteredWorks[mobileActiveIdx].videoUrl) || filteredWorks[mobileActiveIdx].imageUrl) : filteredWorks[mobileActiveIdx].imageUrl} 
                    alt={filteredWorks[mobileActiveIdx].title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle black overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent opacity-85"></div>
                  
                  {/* Play icon overlay */}
                  {filteredWorks[mobileActiveIdx].videoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                       <div className="w-12 h-12 bg-white/15 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white shadow-lg">
                          <Play size={18} fill="currentColor" className="ml-0.5" />
                       </div>
                    </div>
                  )}

                  {/* Information Overlay */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <div className="flex items-center gap-1.5 mb-1.5">
                       <div className={`${getCategoryColor(filteredWorks[mobileActiveIdx].category)} backdrop-blur-md p-1.5 rounded-lg`}>
                           {getCategoryIcon(filteredWorks[mobileActiveIdx].category)}
                       </div>
                       <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">
                           {filteredWorks[mobileActiveIdx].category}
                       </span>
                    </div>
                    
                    <h3 className="text-sm font-black text-white leading-tight tracking-tight mb-2">
                      {filteredWorks[mobileActiveIdx].title}
                    </h3>
                    
                    <div className="inline-flex items-center gap-1.5 text-[9px] font-bold text-indigo-400 uppercase tracking-widest">
                       <span>{filteredWorks[mobileActiveIdx].videoUrl ? 'TAP TO WATCH' : 'TAP TO VIEW'}</span>
                       <ExternalLink size={10} />
                    </div>
                  </div>

                  {/* Top-Right Badge Indicator */}
                  <div className="absolute top-3.5 right-3.5 bg-slate-950/80 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10 text-[8px] font-mono text-white tracking-widest">
                    {mobileActiveIdx + 1} OF {filteredWorks.length}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Slider Controls */}
              <div className="flex items-center justify-between mt-3 px-1">
                <button
                  type="button"
                  onClick={() => setMobileActiveIdx(p => (p === 0 ? filteredWorks.length - 1 : p - 1))}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-white/5 text-slate-400 flex items-center justify-center active:scale-95 transition-all"
                >
                  <ChevronRight size={14} className="rotate-180" />
                </button>

                {/* Slider Progress Indicator Dots */}
                <div className="flex gap-1">
                  {filteredWorks.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setMobileActiveIdx(dotIdx)}
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        mobileActiveIdx === dotIdx ? 'bg-indigo-400 w-3' : 'bg-slate-800'
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setMobileActiveIdx(p => (p === filteredWorks.length - 1 ? 0 : p + 1))}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-white/5 text-slate-400 flex items-center justify-center active:scale-95 transition-all"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-[#0c111d]/40 border border-white/5 rounded-2xl p-6 text-center">
              <span className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">No available items</span>
            </div>
          )}
        </div>

        {/* Video Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-2xl p-4 md:p-8"
              onClick={() => setSelectedVideo(null)}
            >
              <button 
                className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                onClick={() => setSelectedVideo(null)}
              >
                <X size={32} />
              </button>
              
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className={`relative w-full max-h-[85vh] shadow-[0_25px_60px_rgba(0,0,0,0.8)] rounded-2xl md:rounded-3xl overflow-hidden bg-black ${
                  selectedVideo.aspectRatio === '9:16' ? 'max-w-[340px] aspect-[9/16]' : 'max-w-5xl aspect-video'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  src={`${selectedVideo.videoUrl}?autoplay=1`}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/50 to-transparent">
                  <span className="text-secondary text-[10px] font-bold uppercase tracking-[0.3em] mb-1 block">
                    {selectedVideo.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">{selectedVideo.title}</h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Portfolio CTA Area */}
        <motion.div 
            {...({
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true }
            } as any)}
            className="mt-6 md:mt-20 text-center relative"
        >
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 max-w-lg sm:max-w-none mx-auto">
                <a 
                    href="https://behance.net/ahmathmusharraf" 
                    target="_blank"
                    className="w-full sm:w-auto flex items-center gap-3 pl-2.5 pr-4 py-2 bg-white text-slate-950 rounded-full font-bold transition-all shadow-[0_4px_20px_rgba(255,255,255,0.05)] hover:-translate-y-1 active:scale-95 whitespace-nowrap text-xs md:text-sm"
                >
                    <div className="w-8 h-8 md:w-9 md:h-9 bg-slate-950 rounded-lg flex items-center justify-center text-white shrink-0">
                      <Camera size={14} className="md:size-[18px]" />
                    </div>
                    <span className="text-left">Behance Creative Design</span>
                    <Sparkles size={14} className="text-[#06b6d4] ml-auto" />
                </a>

                <a 
                    href="https://studioroutes.vercel.app/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center gap-3 pl-2.5 pr-5 py-2 bg-slate-900/40 text-white border border-slate-800 rounded-full font-bold transition-all hover:bg-slate-900/60 hover:border-slate-700 hover:-translate-y-1 active:scale-95 whitespace-nowrap text-xs md:text-sm"
                >
                    <div className="w-8 h-8 md:w-9 md:h-9 bg-slate-950/50 rounded-lg flex items-center justify-center border border-white/5 text-primary shrink-0">
                        <Video size={14} className="md:size-[18px]" />
                    </div>
                    <span className="font-semibold tracking-tight text-left">Multimedia Video Portfolio</span>
                </a>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisualWorks;
