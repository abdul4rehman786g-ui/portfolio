import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone,
  Mail,
  MessageCircle,
  Github,
  Linkedin,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';
import { CONTACT_CARDS, ENGINEER_BIO } from '../data/engineerData';
import { playLuxuryClick, playChimeUnlocked } from '../utils/sound';

const contactIconMap = {
  PhoneCall: <Phone className="w-6 h-6 text-emerald-600" />,
  Mail: <Mail className="w-6 h-6 text-sky-600" />,
  MessageCircle: <MessageCircle className="w-6 h-6 text-emerald-500" />,
  Github: <Github className="w-6 h-6 text-purple-600" />,
  Linkedin: <Linkedin className="w-6 h-6 text-blue-600" />,
  MapPin: <MapPin className="w-6 h-6 text-red-500" />,
};

export const ContactSection = ({ soundEnabled }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    playLuxuryClick(soundEnabled);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      playChimeUnlocked(soundEnabled);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative w-full py-24 md:py-36 overflow-hidden z-10">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-emerald-200/30 via-sky-200/30 to-purple-200/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-emerald-500/20 text-emerald-800 text-xs font-semibold uppercase tracking-widest mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Direct Executive Communication</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
          >
            Let&apos;s Build Something <span className="gradient-text">Extraordinary</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed"
          >
            Whether you need a full-stack MERN application, Kimra AI Gemini integration, cyber security consulting, or a high-impact SaaS product, reach out directly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {CONTACT_CARDS.map((card, idx) => (
            <motion.a
              key={card.id}
              href={card.actionUrl}
              target={card.actionUrl.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => playLuxuryClick(soundEnabled)}
              className="glass-card p-6 rounded-3xl border border-white/90 shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden flex flex-col justify-between"
            >
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${card.gradient}`} />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {contactIconMap[card.icon] || <Mail className="w-6 h-6 text-emerald-600" />}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <span className="text-[11px] font-mono-tech uppercase font-bold text-slate-400 block mb-1">
                  {card.title}
                </span>

                <h3 className="font-extrabold text-base text-slate-900 group-hover:text-emerald-700 transition-colors truncate">
                  {card.value}
                </h3>

                <p className="text-xs text-slate-500 mt-1">
                  {card.subtitle}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono-tech font-semibold text-emerald-600">
                <span>{card.actionText}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/90 shadow-2xl relative overflow-hidden max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-200/80">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-sky-500 p-[1.5px]">
              <div className="w-full h-full rounded-[10.5px] bg-white flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Direct Message Gateway</h3>
              <p className="text-xs text-slate-500">Encrypted message route directly to Abdul Rehman Ghaffar</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono-tech uppercase font-bold text-slate-700 mb-2">
                  Your Full Name <span className="text-emerald-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-4 py-3 rounded-xl bg-white/80 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-tech uppercase font-bold text-slate-700 mb-2">
                  Email Address <span className="text-emerald-600">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. sarah@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/80 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono-tech uppercase font-bold text-slate-700 mb-2">
                Project Subject or Purpose
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="e.g. Full-Stack MERN & Kimra AI Integration Request"
                className="w-full px-4 py-3 rounded-xl bg-white/80 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-mono-tech uppercase font-bold text-slate-700 mb-2">
                Detailed Message <span className="text-emerald-600">*</span>
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your project, timeline, and goals..."
                className="w-full px-4 py-3 rounded-xl bg-white/80 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all resize-none"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-500 font-mono-tech">
                Guaranteed response within 24 hours.
              </span>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="relative group overflow-hidden px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold text-sm tracking-wide shadow-xl shadow-slate-900/10 hover:shadow-2xl hover:shadow-slate-900/25 transition-all duration-300 transform hover:scale-[1.02] flex items-center gap-3 cursor-pointer disabled:opacity-80"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Dispatching Message...</span>
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span className="text-emerald-400">Message Sent Successfully!</span>
                  </>
                ) : (
                  <>
                    <span>Send Direct Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-400/30 to-sky-500/0 animate-sweep pointer-events-none" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
