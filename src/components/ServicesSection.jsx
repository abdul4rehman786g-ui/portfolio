import React from 'react';
import { motion } from 'motion/react';
import {
  Layers,
  Layout,
  Server,
  MessageSquare,
  Mic,
  Zap,
  ShieldCheck,
  Code,
  Palette,
  Check,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { SERVICES } from '../data/engineerData';
import { playLuxuryClick } from '../utils/sound';

const serviceIconMap = {
  Layers: <Layers className="w-6 h-6 text-emerald-600" />,
  Layout: <Layout className="w-6 h-6 text-blue-600" />,
  Server: <Server className="w-6 h-6 text-cyan-600" />,
  MessageSquare: <MessageSquare className="w-6 h-6 text-purple-600" />,
  Mic: <Mic className="w-6 h-6 text-amber-600" />,
  Zap: <Zap className="w-6 h-6 text-teal-600" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-red-600" />,
  Code: <Code className="w-6 h-6 text-indigo-600" />,
  Palette: <Palette className="w-6 h-6 text-pink-600" />,
};

export const ServicesSection = ({ soundEnabled, onOpenContact }) => {
  return (
    <section id="services" className="relative w-full py-24 md:py-36 overflow-hidden z-10 bg-[#f8fafc]/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-emerald-500/20 text-emerald-800 text-xs font-semibold uppercase tracking-widest mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Engineering Capabilities & Offerings</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
          >
            Specialized <span className="gradient-text">Software Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed"
          >
            End-to-end engineering solutions built with modern MERN architecture, Google Gemini AI capabilities, cyber security best practices, and responsive UI craft.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card p-8 rounded-3xl border border-white/90 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${srv.gradient}`} />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {serviceIconMap[srv.icon] || <Zap className="w-6 h-6 text-emerald-600" />}
                  </div>
                  <span className="text-[10px] font-mono-tech uppercase font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                    Service 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-extrabold text-xl text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {srv.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {srv.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {srv.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-slate-100/80 text-slate-700 font-medium text-xs border border-slate-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <span className="text-[11px] font-mono-tech uppercase tracking-wider text-slate-400 font-bold block mb-2">
                    Key Deliverables:
                  </span>
                  {srv.deliverables.map((del, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  playLuxuryClick(soundEnabled);
                  onOpenContact();
                }}
                className="mt-8 w-full py-3 px-4 rounded-xl bg-slate-900 text-white font-medium text-xs tracking-wide hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 group/btn cursor-pointer"
              >
                <span>Request {srv.title}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
