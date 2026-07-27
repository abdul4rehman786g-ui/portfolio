import React from 'react';
import { motion } from 'motion/react';
import { CapCutSceneWrapper, CapCutAnimatedText } from './CapCutSceneWrapper';
import { CAPABILITY_GROUPS } from '../data/engineerData';
import { Cpu, BrainCircuit, Layers, Check, Sparkles } from 'lucide-react';
import { playSoftTick } from '../utils/sound';

export const CapabilitiesSection = ({ soundEnabled }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-600" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-sky-600" />;
      case 'Layers':
      default:
        return <Layers className="w-5 h-5 text-purple-600" />;
    }
  };

  return (
    <CapCutSceneWrapper id="capabilities" transitionStyle="slide">
      <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
        <span className="px-4 py-1.5 rounded-full glass-pill text-xs font-mono-tech tracking-widest uppercase text-emerald-700 font-bold border border-emerald-500/20 mb-4">
          TECHNICAL CAPABILITIES
        </span>

        <CapCutAnimatedText
          text="PRINCIPAL DOMAINS & CORE MASTERY"
          highlightWords={['PRINCIPAL', 'DOMAINS', 'CORE', 'MASTERY']}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6 justify-center"
        />

        <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          Deep technical expertise spanning low-level Rust/eBPF kernel systems, distributed cloud orchestration, and high-performance WebGPU graphics engines.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {CAPABILITY_GROUPS.map((group, idx) => (
          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => playSoftTick(soundEnabled)}
            className="glass-card p-8 rounded-3xl border border-white/80 shadow-xl relative overflow-hidden flex flex-col justify-between group hover:shadow-2xl transition-shadow"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl glass-panel border border-white/80 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  {getIcon(group.icon)}
                </div>
                <div>
                  <span className="text-[11px] font-mono-tech tracking-wider uppercase text-emerald-700 font-bold block">
                    {group.subtitle}
                  </span>
                  <h3 className="font-serif-display text-xl font-bold text-slate-900">
                    {group.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="p-3.5 rounded-2xl bg-white/70 border border-slate-100 hover:border-emerald-200 transition-colors">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-semibold text-slate-900">
                        {skill.name}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono-tech uppercase bg-emerald-50 text-emerald-800 font-bold">
                        {skill.badge}
                      </span>
                    </div>

                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2 + sIdx * 0.1 }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full"
                      />
                    </div>

                    <span className="text-[11px] text-slate-500 font-normal">
                      {skill.details}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono-tech text-slate-500">
              <span>CONTINUOUS EVOLUTION</span>
              <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </CapCutSceneWrapper>
  );
};
