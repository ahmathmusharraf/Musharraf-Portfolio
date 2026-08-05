import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { Mail, Phone, MapPin, Linkedin, ExternalLink, ArrowRight, Send, Flag } from 'lucide-react';

const Contact: React.FC = () => {
  const [mobileTab, setMobileTab] = useState<'channels' | 'message'>('channels');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const phoneNumber = PERSONAL_INFO.phone.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      `*New Inquiry from Portfolio Website*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Subject:* ${formData.subject}\n` +
      `*Message:* ${formData.message}`
    );
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer id="contact" className="bg-[#070a14] py-10 md:py-16 border-t border-white/10 relative overflow-hidden">
        {/* Ambient lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute bottom-0 left-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px]" />
            <div className="absolute top-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px]" />
        </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="mb-6 md:mb-10 text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase font-bold mb-3">
            <Mail size={12} />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-2">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-amber-300">Work Together</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
            Open to discussing new projects, creative directions, or technical engineering opportunities.
          </p>
        </div>

        {/* Compact Full Layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 mb-10">

          {/* Contact Channels (5 cols on md+) */}
          <div className="md:col-span-5 space-y-3 flex flex-col justify-between">
            {/* Direct Channels Cards */}
            <div className="grid grid-cols-1 gap-2.5">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="p-3 rounded-xl bg-[#0e1528] border border-white/10 hover:border-indigo-500/40 transition-all flex items-center gap-3 group">
                <div className="w-9 h-9 bg-slate-900 rounded-lg flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform shrink-0 border border-white/5">
                  <Mail size={16} />
                </div>
                <div className="min-w-0">
                  <span className="text-[9px] font-mono text-slate-500 uppercase block">EMAIL</span>
                  <span className="text-white text-xs font-semibold block truncate group-hover:text-indigo-300 transition-colors">{PERSONAL_INFO.email}</span>
                </div>
              </a>

              <div className="p-3 rounded-xl bg-[#0e1528] border border-white/10 flex items-center gap-3">
                <div className="w-9 h-9 bg-slate-900 rounded-lg flex items-center justify-center text-cyan-400 shrink-0 border border-white/5">
                  <Phone size={16} />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[9px] font-mono text-slate-500 uppercase block">PHONE</span>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="text-white text-xs font-semibold hover:text-cyan-300 transition-colors">
                      {PERSONAL_INFO.phone} <span className="text-[9px] text-cyan-400 font-mono">(UAE)</span>
                    </a>
                    {PERSONAL_INFO.secondaryPhone && (
                      <a href={`tel:${PERSONAL_INFO.secondaryPhone}`} className="text-white text-xs font-semibold hover:text-cyan-300 transition-colors">
                        {PERSONAL_INFO.secondaryPhone} <span className="text-[9px] text-amber-400 font-mono">(SL)</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-[#0e1528] border border-white/10 flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-amber-400 shrink-0 border border-white/5">
                    <MapPin size={14} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[8px] font-mono text-slate-500 uppercase block">LOCATION</span>
                    <span className="text-white text-[11px] font-semibold block truncate">{PERSONAL_INFO.location}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#0e1528] border border-white/10 flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-indigo-400 shrink-0 border border-white/5">
                    <Flag size={14} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[8px] font-mono text-slate-500 uppercase block">NATIONALITY</span>
                    <span className="text-white text-[11px] font-semibold block truncate">{PERSONAL_INFO.nationality}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Compact LinkedIn Pill Card */}
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#00669e] to-[#0077b5] border border-white/10 shadow-lg flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="bg-white/15 p-1.5 rounded-lg shrink-0">
                  <Linkedin className="text-white" size={18} />
                </div>
                <div className="min-w-0">
                  <span className="text-white font-bold text-xs block truncate">LinkedIn Network</span>
                  <span className="text-blue-100 text-[10px] block truncate">Professional Profile</span>
                </div>
              </div>
              <a 
                href="https://linkedin.com/in/ahmathmusharraf" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white text-[#0077b5] px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider hover:bg-blue-50 transition-colors shrink-0 shadow-sm flex items-center gap-1"
              >
                Connect <ExternalLink size={10} />
              </a>
            </div>
          </div>

          {/* Contact Form (7 cols on md+) */}
          <div className="md:col-span-7">
            <div className="bg-[#0e1528] p-5 rounded-2xl border border-white/10 shadow-xl relative overflow-hidden">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <Send size={14} className="text-indigo-400" />
                <span>Send a Direct Message</span>
              </h3>
              
              <form className="space-y-3" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[9px] font-mono text-slate-400 uppercase block mb-1">Your Name</label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500 transition-all placeholder:text-slate-700"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] font-mono text-slate-400 uppercase block mb-1">Your Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500 transition-all placeholder:text-slate-700"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[9px] font-mono text-slate-400 uppercase block mb-1">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500 transition-all placeholder:text-slate-700"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label className="text-[9px] font-mono text-slate-400 uppercase block mb-1">Message</label>
                  <textarea 
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500 transition-all placeholder:text-slate-700 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-bold py-2.5 rounded-lg text-xs transition-all shadow-md flex items-center justify-center gap-2 uppercase tracking-wider"
                >
                  <span>Send via WhatsApp</span>
                  <Send size={12} />
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="max-w-5xl mx-auto border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/50 transition-all"
                title={link.name}
              >
                <link.icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
