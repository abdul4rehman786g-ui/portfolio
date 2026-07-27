import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, Sparkles, Menu, X, PhoneCall, ArrowRight } from 'lucide-react';
import { playLuxuryClick } from '../utils/sound';

export const Navbar = ({
  soundEnabled,
  onToggleSound,
  activeTheme,
  onChangeTheme,
  onOpenContact,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'story', 'services', 'why-hire-me', 'projects', 'achievements', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'story', label: 'My Story' },
    { id: 'services', label: 'Services' },
    { id: 'why-hire-me', label: 'Why Hire Me' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  const themeOptions = [
    { id: 'emerald', colorClass: 'bg-emerald-500', label: 'Soft Emerald' },
    { id: 'blue', colorClass: 'bg-blue-500', label: 'Ocean Blue' },
    { id: 'pink', colorClass: 'bg-pink-500', label: 'Soft Pink' },
    { id: 'lavender', colorClass: 'bg-purple-500', label: 'Lavender' },
    { id: 'cyan', colorClass: 'bg-cyan-500', label: 'Light Cyan' },
    { id: 'peach', colorClass: 'bg-amber-500', label: 'Warm Peach' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 px-4 sm:px-6 lg:px-12 py-3 sm:py-4 ${
        scrolled ? 'py-2 sm:py-3' : 'py-3 sm:py-5'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-500 px-4 sm:px-6 py-3 flex items-center justify-between ${
          scrolled ? 'glass-panel shadow-xl shadow-slate-900/5 border border-white/80' : 'bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-sm'
        }`}
      >
        <a
          href="#hero"
          onClick={() => {
            playLuxuryClick(soundEnabled);
            setMobileMenuOpen(false);
          }}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-sky-500 p-[1.5px] shadow-md group-hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-[10.5px] bg-white flex items-center justify-center">
              <span className="font-serif-display text-lg font-bold text-slate-900">
                ARG
              </span>
            </div>
          </div>
          <div className="text-left">
            <span className="font-bold text-sm tracking-tight text-slate-900 block leading-none">
              Abdul Rehman Ghaffar
            </span>
            <span className="text-[11px] font-mono-tech tracking-wider uppercase text-slate-500 block mt-1">
              Software Engineer
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1 glass-pill px-3 py-1.5 rounded-full border border-slate-200/60 shadow-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => playLuxuryClick(soundEnabled)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                  isActive ? 'text-slate-900 font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full bg-white shadow-sm border border-slate-100"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex items-center gap-1.5 glass-pill px-2.5 py-1.5 rounded-full border border-slate-200/60 shadow-sm">
            {themeOptions.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  playLuxuryClick(soundEnabled);
                  onChangeTheme(t.id);
                }}
                title={t.label}
                className={`w-3.5 h-3.5 rounded-full ${t.colorClass} transition-transform ${
                  activeTheme === t.id ? 'scale-125 ring-2 ring-slate-900/30 ring-offset-1' : 'hover:scale-110 opacity-70 hover:opacity-100'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => {
              onToggleSound();
              playLuxuryClick(!soundEnabled);
            }}
            title={soundEnabled ? 'Disable Audio Feedback' : 'Enable Audio Feedback'}
            className="w-9 h-9 rounded-full glass-pill border border-slate-200/70 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:shadow-md transition-all cursor-pointer"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-emerald-600 animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-400" />
            )}
          </button>

          <button
            onClick={() => {
              playLuxuryClick(soundEnabled);
              onOpenContact();
              setMobileMenuOpen(false);
            }}
            className="relative group overflow-hidden px-3.5 py-2 rounded-xl bg-slate-900 text-white font-semibold text-xs tracking-wide shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-2 transform hover:scale-[1.03] cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5 text-emerald-400 group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline">Get In Touch</span>
            <span className="sm:hidden">Contact</span>
          </button>

          <button
            onClick={() => {
              playLuxuryClick(soundEnabled);
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center transition-colors cursor-pointer border border-slate-200/80"
            aria-label="Toggle Mobile Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5 text-slate-900" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden max-w-7xl mx-auto mt-2 rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-200 shadow-2xl p-6 overflow-hidden z-50"
          >
            <div className="flex flex-col space-y-2 mb-6">
              <span className="text-[10px] font-mono-tech uppercase font-bold text-slate-400 tracking-wider mb-1">
                Navigation Menu
              </span>
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => {
                      playLuxuryClick(soundEnabled);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200/60'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </a>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-mono-tech text-slate-500 font-medium">Theme Accent:</span>
              <div className="flex items-center gap-2">
                {themeOptions.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      playLuxuryClick(soundEnabled);
                      onChangeTheme(t.id);
                    }}
                    className={`w-5 h-5 rounded-full ${t.colorClass} transition-transform ${
                      activeTheme === t.id ? 'ring-2 ring-slate-900 ring-offset-2 scale-110' : 'opacity-70'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
