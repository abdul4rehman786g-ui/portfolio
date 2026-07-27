import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowUpRight, Terminal, Cpu, ShieldCheck, Activity, Download, Eye, FileText, Check } from 'lucide-react';
import { ENGINEER_BIO } from '../data/engineerData';
import { CapCutAnimatedText } from './CapCutSceneWrapper';
import { playLuxuryClick, playChimeUnlocked } from '../utils/sound';
import profilePhoto from '../assets/images/abdul-rehman-photo.jpg';

export const HeroSection = ({ soundEnabled, onOpenContact, onOpenResume }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadResume = () => {
    playLuxuryClick(soundEnabled);
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Abdul_Rehman_Ghaffar_Resume.pdf';
    link.click();
    setDownloadSuccess(true);
    playChimeUnlocked(soundEnabled);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section id="hero" className="relative w-full pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          <div className="lg:col-span-7 flex flex-col items-start">

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill border border-emerald-500/20 text-slate-800 text-xs font-semibold tracking-wide mb-6 shadow-sm"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono-tech text-emerald-800 uppercase tracking-widest font-bold">
                SOFTWARE ENGINEER & AI ARCHITECT
              </span>
              <span className="text-slate-300">&bull;</span>
              <span className="text-slate-600">{ENGINEER_BIO.availabilityStatus}</span>
            </motion.div>

            <CapCutAnimatedText
              text="SOFTWARE ENGINEER MERN STACK & CYBERSECURITY"
              highlightWords={['SOFTWARE', 'ENGINEER', 'MERN', 'STACK', 'CYBERSECURITY']}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.06] mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mb-10"
            >
              {ENGINEER_BIO.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-14"
            >
              <button
                onClick={handleDownloadResume}
                className="relative group overflow-hidden px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-[1.03] flex items-center gap-3 cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  {downloadSuccess ? (
                    <>
                      <Check className="w-4 h-4 text-slate-950" />
                      <span>Resume Downloaded!</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 text-slate-950 group-hover:translate-y-0.5 transition-transform" />
                      <span>Download Resume</span>
                    </>
                  )}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 animate-sweep pointer-events-none" />
              </button>

              <button
                onClick={() => {
                  playLuxuryClick(soundEnabled);
                  onOpenResume();
                }}
                className="px-7 py-4 rounded-2xl glass-panel text-slate-900 font-semibold text-sm tracking-wide hover:bg-white hover:shadow-lg transition-all border border-slate-200/80 flex items-center gap-2.5 cursor-pointer"
              >
                <Eye className="w-4 h-4 text-emerald-600" />
                <span>View Resume</span>
              </button>

              <button
                onClick={() => {
                  playLuxuryClick(soundEnabled);
                  onOpenContact();
                }}
                className="px-6 py-4 rounded-2xl glass-pill text-slate-700 font-medium text-sm hover:text-slate-900 hover:bg-white/80 transition-all cursor-pointer"
              >
                Get In Touch &rarr;
              </button>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
              {ENGINEER_BIO.keyStats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 + idx * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="glass-card p-4 rounded-2xl border border-white/80 shadow-sm relative overflow-hidden group"
                >
                  <p className="text-[11px] font-mono-tech uppercase tracking-wider text-slate-400 font-semibold mb-1">
                    {stat.label}
                  </p>
                  <p className="font-serif-display text-2xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {stat.value}
                  </p>
                  <p className="text-[10px] text-emerald-600 font-medium mt-1 flex items-center gap-1">
                    <Activity className="w-2.5 h-2.5" />
                    <span>{stat.change}</span>
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-transparent to-sky-500/0 group-hover:from-emerald-500/5 group-hover:to-sky-500/5 transition-all duration-500 pointer-events-none" />
                </motion.div>
              ))}
            </div>

          </div>

          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative w-full max-w-md"
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-emerald-200/50 via-sky-200/50 to-purple-200/50 blur-2xl opacity-70 animate-pulse pointer-events-none" />

              <div className="relative p-1 rounded-3xl bg-gradient-to-tr from-emerald-500 via-sky-500 to-purple-500 shadow-2xl group animate-mesh-pulse">
                <div className="relative aspect-[3/4] w-full rounded-[22px] bg-slate-950 p-6 flex flex-col justify-between overflow-hidden border border-white/20">
                  <div className="absolute -right-10 -top-10 w-52 h-52 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute -left-10 -bottom-10 w-52 h-52 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

                  <div className="flex items-center justify-between text-xs font-mono-tech text-emerald-400">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      ARG PORTRAIT FRAME
                    </span>
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>

                  <div className="flex flex-col items-center justify-center my-auto py-8">
                    <div className="w-40 h-40 rounded-full overflow-hidden border border-white/20 relative group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                      <img
                        src={profilePhoto}
                        alt="Abdul Rehman Ghaffar"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <p className="text-xs font-mono-tech uppercase tracking-[0.2em] text-slate-400 mt-5 text-center font-bold">
                      Professional Photo Frame
                    </p>
                    <p className="text-xs text-slate-500 text-center mt-1">
                      Abdul Rehman Ghaffar
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-2xl">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-mono-tech uppercase tracking-widest text-emerald-400 font-bold">
                        ABDUL REHMAN GHAFFAR
                      </span>
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <p className="font-serif-display text-xl font-bold text-white leading-tight">
                      Software Engineer
                    </p>
                    <p className="text-xs text-slate-300 mt-1 font-normal leading-relaxed">
                      MERN Stack • Kimra AI • Google Gemini • Cyber Security • Prompt Engineering
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
