import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { playChimeUnlocked, playSoftTick } from '../utils/sound';
import { Sparkles, ArrowRight, ShieldCheck, Terminal, Layers } from 'lucide-react';
import { ENGINEER_BIO } from '../data/engineerData';


export const CinematicIntro = ({ onIntroComplete, soundEnabled }) => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const [cinematicStep, setCinematicStep] = useState(0);

  const headlineWords = ["CRAFTING", "MERN", "STACK", "KIMRA", "AI", "&", "SECURE", "SAAS"];

  useEffect(() => {
    if (!isLoading) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            playChimeUnlocked(soundEnabled);
          }, 300);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 12) + 4;
        if (next % 20 === 0) playSoftTick(soundEnabled);
        return next > 100 ? 100 : next;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [isLoading, soundEnabled]);

  useEffect(() => {
    if (isLoading) return;

    const t1 = setTimeout(() => setCinematicStep(1), 100);

    const t2 = setTimeout(() => setCinematicStep(2), 700);

    const t3 = setTimeout(() => setCinematicStep(3), 1300);

    const t4 = setTimeout(() => setCinematicStep(4), 2000);

    const t5 = setTimeout(() => setCinematicStep(5), 3200);

    const t6 = setTimeout(() => setCinematicStep(6), 3800);

    const t7 = setTimeout(() => setCinematicStep(7), 4400);

    const t8 = setTimeout(() => setCinematicStep(8), 5000);

    const t9 = setTimeout(() => {
      setCinematicStep(9);
      onIntroComplete();
    }, 5800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(t7);
      clearTimeout(t8);
      clearTimeout(t9);
    };
  }, [isLoading, onIntroComplete]);

  const handleSkip = () => {
    setIsLoading(false);
    setCinematicStep(9);
    playChimeUnlocked(soundEnabled);
    onIntroComplete();
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden z-40 bg-[#fafbfc]">
            <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={handleSkip}
        className="absolute top-8 right-8 z-50 px-4 py-2 rounded-full glass-pill text-xs font-semibold tracking-wider uppercase text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2 group cursor-pointer"
      >
        <span>Skip Sequence</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
      </motion.button>

            <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loading-screen"
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#fcfdfd]"
          >
                        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-emerald-200/40 via-sky-200/40 to-purple-200/40 blur-[100px] animate-pulse pointer-events-none" />

                        <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative mb-10 flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-500 via-sky-500 to-indigo-500 p-[2px] shadow-2xl shadow-emerald-500/20">
                <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center">
                  <span className="font-serif-display text-3xl font-bold bg-gradient-to-r from-emerald-600 via-sky-600 to-indigo-600 bg-clip-text text-transparent">
                    ARG
                  </span>
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="text-xs font-mono-tech tracking-[0.25em] uppercase text-slate-400">
                  {ENGINEER_BIO.name.toUpperCase()}
                </p>
                <p className="text-sm font-medium text-slate-800 tracking-tight mt-0.5">
                  Software Engineer & AI Architect
                </p>
              </div>
            </motion.div>

                        <div className="w-64 relative">
              <div className="h-[2px] w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex justify-between items-center mt-3 text-xs font-mono-tech text-slate-400">
                <span>INITIALIZING SYSTEM</span>
                <span>{progress}%</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

            {!isLoading && (
        <div className="relative w-full max-w-7xl px-6 lg:px-12 py-16 min-h-screen flex flex-col justify-center">
                    <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: cinematicStep >= 1 ? 1 : 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-emerald-200/30 via-teal-100/30 to-sky-200/30 blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-indigo-200/30 via-purple-100/30 to-rose-100/30 blur-[120px]" />
          </motion.div>

                    <AnimatePresence>
            {cinematicStep >= 2 && cinematicStep < 8 && (
              <motion.div
                key="glowing-line"
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: '100%', opacity: [0, 1, 1, 0] }}
                transition={{ duration: 2.2, ease: 'easeInOut' }}
                className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-sky-400 shadow-[0_0_20px_#10b981] pointer-events-none z-30"
              />
            )}
          </AnimatePresence>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-20">
                        <div className="lg:col-span-7 flex flex-col items-start">
                            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: cinematicStep >= 3 ? 1 : 0, y: cinematicStep >= 3 ? 0 : 15 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill border border-emerald-500/20 text-emerald-800 text-xs font-semibold tracking-wide mb-8 shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>{ENGINEER_BIO.availabilityStatus}</span>
              </motion.div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-6 flex flex-wrap gap-x-3.5 gap-y-2">
                {headlineWords.map((word, idx) => {
                  const isHighlighted = word === 'ELITE' || word === 'DISTRIBUTED' || word === 'AI';
                  return (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, y: 40, filter: 'blur(20px)', scale: 0.96 }}
                      animate={
                        cinematicStep >= 4
                          ? { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }
                          : { opacity: 0, y: 40, filter: 'blur(20px)', scale: 0.96 }
                      }
                      transition={{
                        duration: 0.8,
                        delay: (idx * 120) / 1000,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={`inline-block ${
                        isHighlighted
                          ? 'bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 bg-clip-text text-transparent font-serif-display font-normal italic'
                          : ''
                      }`}
                    >
                      {word}
                    </motion.span>
                  );
                })}
              </h1>

                            <div className="relative w-full max-w-lg h-1.5 mb-8 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: cinematicStep >= 5 ? '100%' : '0%' }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-500 rounded-full"
                />
              </div>

                            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: cinematicStep >= 6 ? 1 : 0, y: cinematicStep >= 6 ? 0 : 20 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mb-10"
              >
                {ENGINEER_BIO.tagline}
              </motion.p>

                            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: cinematicStep >= 7 ? 1 : 0, scale: cinematicStep >= 7 ? 1 : 0.9 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center gap-4"
              >
                <a
                  href="#projects"
                  onClick={handleSkip}
                  className="relative group overflow-hidden px-8 py-4 rounded-2xl bg-slate-900 text-white font-medium text-sm tracking-wide shadow-xl shadow-slate-900/10 hover:shadow-2xl hover:shadow-slate-900/20 transition-all duration-300 transform hover:scale-[1.04]"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span>Explore Architectural Work</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                                    <span className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-400/30 to-sky-500/0 animate-sweep" />
                </a>

                <a
                  href="#projects"
                  onClick={handleSkip}
                  className="px-7 py-4 rounded-2xl glass-panel text-slate-800 font-medium text-sm tracking-wide hover:bg-white hover:shadow-lg transition-all border border-slate-200/80 flex items-center gap-2.5"
                >
                  <Terminal className="w-4 h-4 text-emerald-600" />
                  <span>View Featured Projects</span>
                </a>
              </motion.div>
            </div>

                        <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: cinematicStep >= 8 ? 1 : 0,
                  scale: cinematicStep >= 8 ? 1 : 0.95,
                }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-sm aspect-[3/4] rounded-3xl p-1 bg-gradient-to-tr from-emerald-500 via-sky-500 to-purple-500 shadow-2xl group animate-mesh-pulse"
              >
                <div className="relative w-full h-full rounded-[22px] bg-slate-900/90 backdrop-blur-2xl p-6 flex flex-col justify-between overflow-hidden border border-white/20">
                                    <div className="absolute -right-10 -top-10 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

                                    <div className="flex items-center justify-between text-xs font-mono-tech text-emerald-400">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      ARG PORTRAIT FRAME
                    </span>
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>

                                    <div className="flex flex-col items-center justify-center my-auto py-8">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-emerald-500/20 via-sky-500/20 to-purple-500/20 border border-white/20 flex items-center justify-center relative group-hover:scale-110 transition-transform duration-500 shadow-inner">
                      <span className="font-serif-display text-4xl font-extrabold bg-gradient-to-r from-emerald-400 via-sky-300 to-purple-300 bg-clip-text text-transparent">
                        ARG
                      </span>
                    </div>
                    <p className="text-xs font-mono-tech uppercase tracking-[0.2em] text-slate-400 mt-4 text-center">
                      Professional Photo
                    </p>
                    <p className="text-[11px] text-slate-500 text-center mt-1">
                      Abdul Rehman Ghaffar
                    </p>
                  </div>

                                    <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white">
                    <p className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      MERN • AI • Cyber Security
                    </p>
                    <p className="text-[11px] text-slate-300 mt-0.5">
                      {ENGINEER_BIO.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
