import React from 'react';
import { motion } from 'motion/react';
import { CapCutSceneWrapper, CapCutAnimatedText } from './CapCutSceneWrapper';
import { MILESTONES } from '../data/engineerData';
import { Briefcase, Award, MapPin, CheckCircle2 } from 'lucide-react';
import { playSoftTick } from '../utils/sound';

export const MilestonesSection = ({ soundEnabled }) => {
  return (
    <CapCutSceneWrapper id="milestones" transitionStyle="curtain">
      <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
        <span className="px-4 py-1.5 rounded-full glass-pill text-xs font-mono-tech tracking-widest uppercase text-emerald-700 font-bold border border-emerald-500/20 mb-4">
          CAREER MILESTONES & IMPACT
        </span>

        <CapCutAnimatedText
          text="PROVEN TRACK RECORD OF SCALE & EXECUTIVE LEADERSHIP"
          highlightWords={['PROVEN', 'TRACK', 'RECORD', 'SCALE']}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6 justify-center"
        />

        <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          Over 12 years directing core platform engineering, scaling distributed systems to 45M+ users, and authoring patents in speculative caching.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto space-y-12">
        <div className="absolute top-4 bottom-4 left-6 md:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-emerald-400 via-sky-400 to-slate-200 hidden md:block" />

        {MILESTONES.map((milestone, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => playSoftTick(soundEnabled)}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-8 w-6 h-6 rounded-full bg-white border-4 border-emerald-500 shadow-md z-10 hidden md:block" />

              <div className={`md:col-span-1 ${isEven ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'}`}>
                <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/90 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all">

                  <div className="flex flex-wrap items-center gap-2 mb-2 text-xs font-mono-tech text-emerald-800 font-bold uppercase tracking-wider">
                    <span>{milestone.period}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-600" />
                      <span>{milestone.location}</span>
                    </span>
                  </div>

                  <h3 className="font-serif-display text-2xl font-bold text-slate-900 mb-1">
                    {milestone.role}
                  </h3>

                  <p className="text-sm font-semibold text-slate-700 mb-4">
                    {milestone.organization}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {milestone.summary}
                  </p>

                  <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-100 text-xs font-bold text-emerald-950 mb-6 flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{milestone.highlightMetric}</span>
                  </div>

                  <div className="space-y-2 mb-6 text-left">
                    {milestone.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 justify-start">
                    {milestone.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-tech bg-slate-100 text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </CapCutSceneWrapper>
  );
};
