import React from 'react';
import { motion } from 'motion/react';
import {
  Layers,
  Mic,
  MessageSquare,
  Sparkles,
  Code,
  Lock,
  Cloud,
  ShieldCheck,
  Smartphone,
  Trophy,
} from 'lucide-react';
import { ACHIEVEMENTS } from '../data/engineerData';

const achievementIconMap = {
  Layers: <Layers className="w-6 h-6 text-blue-500" />,
  Mic: <Mic className="w-6 h-6 text-emerald-500" />,
  MessageSquare: <MessageSquare className="w-6 h-6 text-purple-500" />,
  Sparkles: <Sparkles className="w-6 h-6 text-rose-500" />,
  Code: <Code className="w-6 h-6 text-amber-500" />,
  Lock: <Lock className="w-6 h-6 text-cyan-500" />,
  Cloud: <Cloud className="w-6 h-6 text-teal-500" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-red-500" />,
  Smartphone: <Smartphone className="w-6 h-6 text-indigo-500" />,
};

export const AchievementsSection = ({ soundEnabled }) => {
  return (
    <section id="achievements" className="relative w-full py-24 md:py-36 overflow-hidden z-10 bg-[#f8fafc]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-emerald-500/20 text-emerald-800 text-xs font-semibold uppercase tracking-widest mb-4 shadow-sm"
          >
            <Trophy className="w-3.5 h-3.5 text-emerald-600" />
            <span>Track Record of Success</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
          >
            Key <span className="gradient-text">Achievements & Impact</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed"
          >
            Proven milestones across modern full-stack web applications, Gemini AI platforms, cyber security hardening, and production cloud deployments.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/90 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.colorGradient}`} />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {achievementIconMap[item.icon] || <Sparkles className="w-6 h-6 text-emerald-600" />}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[10px] font-mono-tech font-bold uppercase">
                    {item.badge}
                  </span>
                </div>

                <span className="text-[11px] font-mono-tech uppercase tracking-widest text-emerald-700 font-bold block mb-1">
                  {item.category}
                </span>

                <h3 className="font-extrabold text-xl text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800">
                  Impact Metric:
                </span>
                <span className="text-xs font-mono-tech font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">
                  {item.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
