import React from 'react';
import { motion } from 'motion/react';
import { Zap, ShieldCheck, Sparkles, Quote, CheckCircle2 } from 'lucide-react';
import { CapCutSceneWrapper, CapCutAnimatedText } from './CapCutSceneWrapper';
import { TENETS } from '../data/engineerData';
import { playSoftTick } from '../utils/sound';

export const ManifestoSection = ({ soundEnabled }) => {
  const getIcon = (name) => {
    switch (name) {
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-500" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-6 h-6 text-indigo-500" />;
    }
  };

  return (
    <CapCutSceneWrapper id="manifesto" transitionStyle="mask">
      <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
        <span className="px-4 py-1.5 rounded-full glass-pill text-xs font-mono-tech tracking-widest uppercase text-emerald-700 font-bold border border-emerald-500/20 mb-4">
          THE ENGINEERING MANIFESTO
        </span>

        <CapCutAnimatedText
          text="PHILOSOPHY OF UNCOMPROMISING PRECISION & ELEGANCE"
          highlightWords={['UNCOMPROMISING', 'PRECISION', 'ELEGANCE']}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6 justify-center"
        />

        <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          Great software is not merely functional—it is an art form of mathematical harmony, intuitive interaction, and uncompromising resilience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TENETS.map((tenet, idx) => (
          <motion.div
            key={tenet.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.18, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => playSoftTick(soundEnabled)}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="glass-card p-8 rounded-3xl border border-white/80 shadow-lg relative overflow-hidden flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-serif-display text-4xl font-bold text-slate-300 group-hover:text-emerald-500 transition-colors">
                  {tenet.number}
                </span>
                <div className="w-12 h-12 rounded-2xl glass-panel border border-white/80 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  {getIcon(tenet.iconName)}
                </div>
              </div>

              <h3 className="font-serif-display text-2xl font-bold text-slate-900 mb-2 group-hover:text-emerald-950 transition-colors">
                {tenet.title}
              </h3>
              <p className="text-xs font-semibold tracking-wide text-emerald-700 mb-4">
                {tenet.subtitle}
              </p>

              <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                {tenet.description}
              </p>
            </div>

            <div>
              <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 mb-6 relative">
                <Quote className="w-4 h-4 text-emerald-400 absolute -top-2 -left-2 fill-emerald-100" />
                <p className="font-serif-italic text-sm text-slate-700 italic leading-snug">
                  "{tenet.quote}"
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {tenet.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-full text-[10px] font-mono-tech tracking-wider uppercase bg-white/80 border border-slate-200/80 text-slate-600 flex items-center gap-1"
                  >
                    <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-teal-500/0 to-sky-500/0 group-hover:from-emerald-500/5 group-hover:to-sky-500/5 transition-all duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </CapCutSceneWrapper>
  );
};
