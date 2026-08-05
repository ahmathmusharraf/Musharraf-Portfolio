
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Briefcase, Sparkles, Camera, Code2 } from 'lucide-react';

const MobileDock: React.FC = () => {
  const [activeSection, setActiveSection] = useState('Home');

  const dockItems = [
    { name: 'HOME', icon: Home, href: '#' },
    { name: 'WORK', icon: Briefcase, href: '#experience' },
    { name: 'SKILLS', icon: Sparkles, href: '#skills' },
    { name: 'VISUALS', icon: Camera, href: '#visuals' },
    { name: 'TECH', icon: Code2, href: '#engineering' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      const experienceSec = document.getElementById('experience');
      const skillsSec = document.getElementById('skills');
      const visualsSec = document.getElementById('visuals');
      const engineeringSec = document.getElementById('engineering');

      if (engineeringSec && scrollPos >= engineeringSec.offsetTop) {
        setActiveSection('TECH');
      } else if (visualsSec && scrollPos >= visualsSec.offsetTop) {
        setActiveSection('VISUALS');
      } else if (skillsSec && scrollPos >= skillsSec.offsetTop) {
        setActiveSection('SKILLS');
      } else if (experienceSec && scrollPos >= experienceSec.offsetTop) {
        setActiveSection('WORK');
      } else {
        setActiveSection('HOME');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-[340px]">
      <div className="bg-[#0b1021]/85 backdrop-blur-2xl border border-white/15 rounded-2xl p-1.5 flex items-center justify-between shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(99,102,241,0.15)] relative">
        {dockItems.map((item) => {
          const isActive = activeSection === item.name;
          const Icon = item.icon;

          return (
            <a
              key={item.name}
              href={item.href}
              className="relative flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all duration-300 z-10 active:scale-95"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              {/* Active Tab Background Pill */}
              {isActive && (
                <motion.div
                  layoutId="trendingActiveDockPill"
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-cyan-500/20 to-indigo-500/20 border border-indigo-400/35 rounded-xl -z-10 shadow-[0_0_12px_rgba(99,102,241,0.3)]"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}

              {/* Icon */}
              <Icon
                size={16}
                className={`transition-all duration-300 ${
                  isActive
                    ? 'text-cyan-300 scale-110 drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]'
                    : 'text-slate-400 group-hover:text-slate-200'
                }`}
              />

              {/* Label */}
              <span
                className={`text-[8.5px] font-black tracking-widest mt-1 transition-all duration-300 ${
                  isActive
                    ? 'text-white font-extrabold'
                    : 'text-slate-400 font-bold'
                }`}
              >
                {item.name}
              </span>

              {/* Active Indicator Micro Dot */}
              {isActive && (
                <motion.span
                  layoutId="trendingActiveDockDot"
                  className="w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)] mt-0.5"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default MobileDock;

