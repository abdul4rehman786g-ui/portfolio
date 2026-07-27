import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data/engineerData';
import { CapCutSceneWrapper, CapCutAnimatedText } from './CapCutSceneWrapper';
import { ExternalLink, Layers, Cpu, ArrowUpRight, CheckCircle2, X, Terminal, Server, Activity } from 'lucide-react';
import { playLuxuryClick, playSoftTick } from '../utils/sound';

export const ProjectsSection = ({ soundEnabled, onChangeTheme }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeProjectHover, setActiveProjectHover] = useState(null);

  const handleCardHover = (project) => {
    setActiveProjectHover(project.id);
    onChangeTheme(project.themeColor);
    playSoftTick(soundEnabled);
  };

  return (
    <CapCutSceneWrapper id="projects" transitionStyle="layeredDepth">
      <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
        <span className="px-4 py-1.5 rounded-full glass-pill text-xs font-mono-tech tracking-widest uppercase text-emerald-700 font-bold border border-emerald-500/20 mb-4">
          FEATURED MASTERPIECES
        </span>

        <CapCutAnimatedText
          text="DIRECTING HIGH-IMPACT SYSTEMS & CREATIVE AI ENGINES"
          highlightWords={['HIGH-IMPACT', 'SYSTEMS', 'CREATIVE', 'AI']}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6 justify-center"
        />

        <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          A showcase of principal engineering accomplishments—from multi-region distributed execution layers to WebGPU-accelerated spatial AI canvases.
        </p>
      </div>

      <div className="space-y-16 lg:space-y-24">
        {PROJECTS.map((project, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => handleCardHover(project)}
              className="glass-card rounded-3xl p-6 lg:p-10 border border-white/90 shadow-2xl relative overflow-hidden group hover:shadow-[0_30px_70px_-15px_rgba(15,23,42,0.1)] transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                <div
                  className={`lg:col-span-7 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-100 shadow-xl border border-white/60 group">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full glass-panel text-[11px] font-mono-tech tracking-wider uppercase text-slate-900 font-bold shadow-md border border-white/80">
                        {project.category}
                      </span>
                      <span className="px-3 py-1 rounded-full glass-panel text-[11px] font-mono-tech tracking-wide text-emerald-800 font-bold shadow-md border border-white/80 flex items-center gap-1.5">
                        <Activity className="w-3 h-3 text-emerald-600" />
                        <span>{project.systemSpec.throughput}</span>
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-panel border border-white/60 flex justify-between items-center text-slate-900 shadow-lg">
                      <div className="flex items-center gap-4 text-xs font-mono-tech">
                        <div>
                          <span className="text-slate-500 block text-[10px]">LATENCY</span>
                          <span className="font-bold text-slate-900">{project.systemSpec.latency}</span>
                        </div>
                        <div className="h-6 w-[1px] bg-slate-200" />
                        <div>
                          <span className="text-slate-500 block text-[10px]">AVAILABILITY</span>
                          <span className="font-bold text-emerald-600">{project.systemSpec.availability}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          playLuxuryClick(soundEnabled);
                          setSelectedProject(project);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-medium hover:bg-emerald-600 transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Deep Dive Spec</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  className={`lg:col-span-5 flex flex-col justify-center ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-emerald-700 font-bold mb-2">
                    <span>{project.client}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-slate-900 mb-3 group-hover:text-emerald-950 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm font-semibold text-slate-700 mb-4 leading-snug">
                    {project.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {project.impactMetrics.map((metric, mIdx) => (
                      <div key={mIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-full text-[11px] font-mono-tech tracking-wide bg-slate-100 border border-slate-200/80 text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 flex-wrap">
                    <button
                      onClick={() => {
                        playLuxuryClick(soundEnabled);
                        setSelectedProject(project);
                      }}
                      className="px-6 py-3 rounded-xl bg-slate-900 text-white font-medium text-xs tracking-wide shadow-md hover:shadow-xl hover:bg-emerald-600 transition-all cursor-pointer flex items-center gap-2"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Inspect Architecture</span>
                    </button>

                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => playLuxuryClick(soundEnabled)}
                        className="px-6 py-3 rounded-xl bg-white text-slate-900 font-medium text-xs tracking-wide shadow-md border border-slate-200 hover:shadow-xl hover:border-emerald-400 hover:text-emerald-700 transition-all cursor-pointer flex items-center gap-2"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>

              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.accentGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none p-[1.5px] -z-10`}
              />
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl glass-panel rounded-3xl p-6 sm:p-8 border border-white/90 shadow-2xl z-10 my-8 overflow-hidden bg-white/95"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full glass-pill flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="px-3 py-1 rounded-full glass-pill text-xs font-mono-tech tracking-wider uppercase text-emerald-800 font-bold border border-emerald-500/20 mb-2 inline-block">
                  {selectedProject.category}
                </span>
                <h3 className="font-serif-display text-3xl sm:text-4xl font-bold text-slate-900">
                  {selectedProject.title}
                </h3>
                <p className="text-sm font-medium text-slate-600 mt-1">
                  {selectedProject.tagline}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-900 text-white mb-8 shadow-inner">
                <div>
                  <span className="text-[10px] font-mono-tech uppercase text-slate-400 block">THROUGHPUT</span>
                  <span className="text-base font-bold text-emerald-400">{selectedProject.systemSpec.throughput}</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono-tech uppercase text-slate-400 block">LATENCY</span>
                  <span className="text-base font-bold text-sky-400">{selectedProject.systemSpec.latency}</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono-tech uppercase text-slate-400 block">SLA AVAILABILITY</span>
                  <span className="text-base font-bold text-amber-400">{selectedProject.systemSpec.availability}</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono-tech uppercase text-slate-400 block">NODES / TOPOLOGY</span>
                  <span className="text-base font-bold text-purple-400">{selectedProject.systemSpec.nodes}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-sm font-mono-tech uppercase tracking-wider text-slate-900 font-bold mb-4 flex items-center gap-2">
                    <Server className="w-4 h-4 text-emerald-600" />
                    <span>Architectural Innovations</span>
                  </h4>
                  <ul className="space-y-3">
                    {selectedProject.architecturalHighlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-mono-tech uppercase tracking-wider text-slate-900 font-bold mb-4 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-sky-600" />
                    <span>Tech Stack & Proven Impact</span>
                  </h4>

                  <div className="space-y-2 mb-6">
                    {selectedProject.impactMetrics.map((metric, mIdx) => (
                      <div key={mIdx} className="p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-100 text-xs font-semibold text-emerald-900 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-full text-xs font-mono-tech bg-slate-100 border border-slate-200 text-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 flex-wrap">
                {selectedProject.liveDemoUrl && (
                  <a
                    href={selectedProject.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playLuxuryClick(soundEnabled)}
                    className="px-6 py-2.5 rounded-xl bg-white text-slate-900 font-medium text-xs border border-slate-200 hover:border-emerald-400 hover:text-emerald-700 transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open Live Demo</span>
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-medium text-xs hover:bg-emerald-600 transition-colors cursor-pointer"
                >
                  Close Specification
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </CapCutSceneWrapper>
  );
};
