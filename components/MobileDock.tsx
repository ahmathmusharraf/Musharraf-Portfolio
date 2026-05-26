
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Briefcase, Sparkles, Camera, Code } from 'lucide-react';

const MobileDock: React.FC = () => {
  const [activeSection, setActiveSection] = useState('Home');

  const dockItems = [
    { name: 'Home', icon: Home, href: '#' },
    { name: 'Work', icon: Briefcase, href: '#experience' },
    { name: 'Skills', icon: Sparkles, href: '#skills' },
    { name: 'Visuals', icon: Camera, href: '#visuals' },
    { name: 'Tech', icon: Code, href: '#engineering' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Determine the active section based on scroll offset
      const scrollPos = window.scrollY + window.innerHeight / 2;

      const experienceSec = document.getElementById('experience');
      const skillsSec = document.getElementById('skills');
      const visualsSec = document.getElementById('visuals');
      const engineeringSec = document.getElementById('engineering');

      if (engineeringSec && scrollPos >= engineeringSec.offsetTop) {
        setActiveSection('Tech');
      } else if (visualsSec && scrollPos >= visualsSec.offsetTop) {
        setActiveSection('Visuals');
      } else if (skillsSec && scrollPos >= skillsSec.offsetTop) {
        setActiveSection('Skills');
      } else if (experienceSec && scrollPos >= experienceSec.offsetTop) {
        setActiveSection('Work');
      } else {
        setActiveSection('Home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initially in case they reload scrolled
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[85%] max-w-[320px]">
      <div className="bg-slate-950/90 backdrop-blur-2xl border border-white/10 rounded-[5px] p-1 flex items-center justify-around shadow-[0_15px_40px_rgba(0,0,0,0.8)] px-1.5 relative">
        {dockItems.map((item) => {
          const isActive = activeSection === item.name;
          return (
            <a
              key={item.name}
              href={item.href}
              className="relative flex flex-col items-center gap-0.5 px-3.5 py-1.5 rounded-[15px] transition-all duration-300 z-10"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              {/* Sliding Highlight Pill */}
              {isActive && (
                <motion.div
                  layoutId="activeDockPill"
                  className="absolute inset-0 bg-gradient-to-r from-primary/15 to-secondary/15 border border-white/10 rounded-[5px] -z-10 shadow-inner"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              
              <item.icon 
                size={14} 
                className={`transition-all duration-300 ${
                  isActive 
                    ? 'text-primary scale-110 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]' 
                    : 'text-slate-500 hover:text-slate-300'
                }`} 
              />
              <span 
                className={`text-[7.5px] font-black uppercase tracking-[0.1em] transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-slate-500'
                }`}
              >
                {item.name}
              </span>
              
              {/* Dynamic Bottom Dot */}
              {isActive && (
                <motion.span 
                  layoutId="activeDockDot"
                  className="absolute bottom-0.5 w-0.5 h-0.5 rounded-full bg-primary"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
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

