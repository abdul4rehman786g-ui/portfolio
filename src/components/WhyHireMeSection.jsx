import React from 'react';
import { motion } from 'motion/react';
import {
  Rocket,
  Layers,
  Brain,
  ShieldCheck,
  Target,
  Cloud,
  Zap,
  Code,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Award,
} from 'lucide-react';
import { WHY_HIRE_ME } from '../data/engineerData';
import { playLuxuryClick } from '../utils/sound';

const whyIconMap = {
  Rocket: <Rocket className="w-6 h-6 text-emerald-600" />,
  Layers: <Layers className="w-6 h-6 text-blue-600" />,
  Brain: <Brain className="w-6 h-6 text-purple-600" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-red-600" />,
  Target: <Target className="w-6 h-6 text-amber-600" />,
  Cloud: <Cloud className="w-6 h-6 text-cyan-600" />,
  Zap: <Zap className="w-6 h-6 text-teal-600" />,
  Code: <Code className="w-6 h-6 text-indigo-600" />,
  Sparkles: <Sparkles className="w-6 h-6 text-pink-600" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6 text-emerald-500" />,
};

export const WhyHireMeSection = ({ soundEnabled, onOpenContact }) => {
  return (
    <section id="why-hire-me" className="relative w-full py-24 md:py-36 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-emerald-500/20 text-emerald-800 text-xs font-semibold uppercase tracking-widest mb-4 shadow-sm"
          >
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>Proven Value & Competitive Advantage</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
          >
            Why Companies & Teams <span className="gradient-text">Hire Me</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed"
          >
            I combine full-stack technical mastery with real SaaS execution, AI innovation, bank-grade cyber security, and an obsessive commitment to software excellence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {WHY_HIRE_ME.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {whyIconMap[item.icon] || <Sparkles className="w-6 h-6 text-emerald-600" />}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-mono-tech font-bold uppercase">
                    {item.stat}
                  </span>
                </div>

                <h3 className="font-extrabold text-lg text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono-tech text-slate-500 font-medium">
                  {item.highlight}
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/90 shadow-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 text-white flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-mono-tech font-bold text-emerald-400 uppercase tracking-widest block mb-2">
              Ready to Accelerate Your Product?
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
              Let&apos;s build production-grade, secure software together.
            </h3>
            <p className="text-sm text-slate-300 font-normal">
              Available for full-time engineering roles, technical advisory, and high-impact SaaS development contracts.
            </p>
          </div>

          <button
            onClick={() => {
              playLuxuryClick(soundEnabled);
              onOpenContact();
            }}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-[1.03] transition-all flex items-center gap-3 shrink-0 cursor-pointer"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
