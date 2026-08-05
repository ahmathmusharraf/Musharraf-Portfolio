import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { X } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Remove non-numeric characters for the link
  const getWhatsappUrl = (phone: string) => `https://wa.me/${phone.replace(/[^0-9]/g, '')}`;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            {...({
              initial: { opacity: 0, y: 15, scale: 0.95 },
              animate: { opacity: 1, y: 0, scale: 1 },
              exit: { opacity: 0, y: 15, scale: 0.95 }
            } as any)}
            className="fixed bottom-[136px] md:bottom-22 right-4 md:right-8 z-50 flex flex-col gap-2.5 items-end"
          >
            {/* UAE Option */}
            <a
              href={getWhatsappUrl(PERSONAL_INFO.phone)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#0e1528] text-white p-3 rounded-xl shadow-xl hover:bg-slate-800 transition-colors border border-white/10 group w-56 sm:w-64"
              onClick={() => setIsOpen(false)}
            >
              <div className="w-9 h-9 bg-[#25D366] rounded-full flex items-center justify-center text-white font-bold text-xs shadow-md flex-shrink-0">
                UAE
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-bold text-xs text-white">Chat (UAE)</span>
                <span className="text-[10px] text-slate-400 group-hover:text-slate-300 transition-colors truncate">{PERSONAL_INFO.phone}</span>
              </div>
            </a>

            {/* Sri Lanka Option */}
            {PERSONAL_INFO.secondaryPhone && (
              <a
                href={getWhatsappUrl(PERSONAL_INFO.secondaryPhone)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#0e1528] text-white p-3 rounded-xl shadow-xl hover:bg-slate-800 transition-colors border border-white/10 group w-56 sm:w-64"
                onClick={() => setIsOpen(false)}
              >
                <div className="w-9 h-9 bg-[#25D366] rounded-full flex items-center justify-center text-white font-bold text-xs shadow-md flex-shrink-0">
                  SL
                </div>
                 <div className="flex flex-col min-w-0">
                    <span className="font-bold text-xs text-white">Chat (SL)</span>
                    <span className="text-[10px] text-slate-400 group-hover:text-slate-300 transition-colors truncate">{PERSONAL_INFO.secondaryPhone}</span>
                </div>
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-50 flex items-center justify-center w-9 h-9 md:w-12 md:h-12 bg-[#25D366] rounded-xl shadow-lg shadow-green-500/20 hover:bg-[#20bd5a] transition-all duration-300 group"
        {...({
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 }
        } as any)}
        aria-label="Toggle WhatsApp options"
      >
        <div className="absolute inset-0 rounded-xl border border-white/20 animate-ping opacity-20 group-hover:opacity-40 pointer-events-none"></div>
        {isOpen ? (
            <X className="text-white relative z-10 w-4 h-4 md:w-6 md:h-6" />
        ) : (
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="white"
                className="fill-white relative z-10 w-4 h-4 md:w-6 md:h-6"
            >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
        )}
      </motion.button>
    </>
  );
};

export default FloatingWhatsApp;
