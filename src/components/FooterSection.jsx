import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Sparkles, Shield, Terminal, Heart } from 'lucide-react';
import { ENGINEER_BIO } from '../data/engineerData';
import { playLuxuryClick } from '../utils/sound';

export const FooterSection = ({ soundEnabled, onOpenContact }) => {
  const scrollToTop = () => {
    playLuxuryClick(soundEnabled);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full py-16 border-t border-slate-200/60 bg-white/60 backdrop-blur-md z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center mb-12">

          <div className="md:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-sky-500 p-[1.5px] shadow-sm">
                <div className="w-full h-full rounded-[10.5px] bg-white flex items-center justify-center">
                  <span className="font-serif-display text-lg font-bold text-slate-900">
                    ARG
                  </span>
                </div>
              </div>
              <div>
                <span className="font-bold text-base text-slate-900 block leading-tight">
                  {ENGINEER_BIO.name}
                </span>
                <span className="text-xs font-mono-tech text-slate-400 uppercase tracking-widest block">
                  Software Engineer & AI Architect
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-500 max-w-md font-normal leading-relaxed">
              Designed as a luxury digital identity for Abdul Rehman Ghaffar. Specializing in MERN Stack, Kimra AI, Google Gemini API, Cyber Security, Prompt Engineering & Modern UI.
            </p>
          </div>

          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-4">
            <button
              onClick={() => {
                playLuxuryClick(soundEnabled);
                onOpenContact();
              }}
              className="px-6 py-3 rounded-2xl bg-slate-900 text-white font-medium text-xs tracking-wide shadow-lg hover:bg-emerald-600 transition-colors cursor-pointer"
            >
              Initiate Collaboration
            </button>

            <button
              onClick={scrollToTop}
              className="w-11 h-11 rounded-2xl glass-panel border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-slate-900 hover:bg-white transition-all cursor-pointer shadow-sm"
              title="Return to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs font-mono-tech text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>&copy; {new Date().getFullYear()} ABDUL REHMAN GHAFFAR. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-4">
            <span>LAHORE, PAKISTAN</span>
            <span>&bull;</span>
            <span>MERN & KIMRA AI ARCHITECTURE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
