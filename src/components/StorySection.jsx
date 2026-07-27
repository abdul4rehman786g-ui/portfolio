import React from 'react';
import { motion } from 'motion/react';
import {
  Terminal,
  Layers,
  Rocket,
  Brain,
  Sparkles,
  Cpu,
  Mic,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { STORY_STEPS } from '../data/engineerData';
import { playLuxuryClick } from '../utils/sound';

const iconMap = {
  Terminal: <Terminal className="w-5 h-5 text-blue-500" />,
  Layers: <Layers className="w-5 h-5 text-emerald-500" />,
  Rocket: <Rocket className="w-5 h-5 text-purple-500" />,
  Brain: <Brain className="w-5 h-5 text-cyan-500" />,
  Sparkles: <Sparkles className="w-5 h-5 text-amber-500" />,
  Cpu: <Cpu className="w-5 h-5 text-indigo-500" />,
  Mic: <Mic className="w-5 h-5 text-emerald-400" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-red-500" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-teal-500" />,
};

export const StorySection = ({ soundEnabled }) => {
  return (
    <section id="story" className="relative w-full py-24 md:py-36 overflow-hidden z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-emerald-100/30 via-sky-100/30 to-purple-100/30 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-emerald-500/20 text-emerald-800 text-xs font-semibold uppercase tracking-widest mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Cinematic Developer Journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
          >
            My Story: From <span className="gradient-text">First Code</span> to Kimra AI
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed"
          >
            Instead of a standard resume list, experience the continuous evolution of my engineering craft across full-stack MERN, artificial intelligence, and cyber security.
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-emerald-500 via-purple-500 to-teal-500 -translate-x-1/2 opacity-30 hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {STORY_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="absolute left-6 md:left-1/2 top-8 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-emerald-500 shadow-xl flex items-center justify-center z-20 hidden md:flex">
                    <span className="text-xs font-mono-tech font-bold text-slate-900">
                      {step.number}
                    </span>
                  </div>

                  <div className="w-full md:w-[calc(50%-2.5rem)]">
                    <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
                      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${step.gradient}`} />

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-2xl bg-slate-100 p-2 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                            {iconMap[step.icon] || <Sparkles className="w-5 h-5 text-emerald-500" />}
                          </div>
                          <div>
                            <span className="text-[11px] font-mono-tech font-bold text-emerald-600 uppercase tracking-widest block">
                              {step.year}
                            </span>
                            <h3 className="font-extrabold text-lg sm:text-xl text-slate-900 group-hover:text-emerald-700 transition-colors">
                              {step.title}
                            </h3>
                          </div>
                        </div>

                        <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-mono-tech text-[10px] font-bold">
                          Step {step.number}
                        </span>
                      </div>

                      <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
                        {step.subtitle}
                      </p>

                      <p className="text-sm text-slate-600 leading-relaxed mb-6">
                        {step.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                        {step.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-700"
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                            <span>{h}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
