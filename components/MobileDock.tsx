
import React from 'react';
import { motion } from 'framer-motion';
import { Home, Briefcase, Sparkles, Camera, Code, User } from 'lucide-react';

const MobileDock: React.FC = () => {
  const dockItems = [
    { name: 'Home', icon: Home, href: '#' },
    { name: 'Work', icon: Briefcase, href: '#experience' },
    { name: 'Skills', icon: Sparkles, href: '#skills' },
    { name: 'Visuals', icon: Camera, href: '#visuals' },
    { name: 'Tech', icon: Code, href: '#engineering' },
  ];

  return (
    <div className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-sm">
      <div className="bg-slate-950/90 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-1.5 flex items-center justify-around shadow-[0_25px_60px_rgba(0,0,0,0.8)] px-4">
        {dockItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex flex-col items-center gap-1.5 px-3 py-3 rounded-2xl text-slate-500 active:text-primary transition-all group"
          >
            <item.icon size={18} className="group-active:scale-125 group-active:text-primary transition-all duration-300" />
            <span className="text-[8px] font-black uppercase tracking-[0.2em]">{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileDock;
