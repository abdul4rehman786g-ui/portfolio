import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Copy, Check, Mail, MapPin, Calendar, Sparkles, ShieldCheck } from 'lucide-react';
import { ENGINEER_BIO } from '../data/engineerData';
import { playLuxuryClick, playSoftTick } from '../utils/sound';

export const ContactModal = ({ isOpen, onClose, soundEnabled }) => {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    engagementType: 'Principal Role',
    message: '',
  });

  const emailAddress = ENGINEER_BIO.email;

  const handleCopyEmail = () => {
    playLuxuryClick(soundEnabled);
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    playLuxuryClick(soundEnabled);
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl glass-panel rounded-3xl p-6 sm:p-10 border border-white/90 shadow-2xl z-10 my-8 overflow-hidden bg-white/95"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full glass-pill flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer z-20"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="mb-8">
            <span className="px-3.5 py-1 rounded-full glass-pill text-xs font-mono-tech tracking-wider uppercase text-emerald-800 font-bold border border-emerald-500/20 mb-3 inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>EXECUTIVE INQUIRY</span>
            </span>

            <h3 className="font-serif-display text-3xl sm:text-4xl font-bold text-slate-900">
              Initiate Collaboration
            </h3>
            <p className="text-sm font-medium text-slate-600 mt-1">
              Direct communication for Principal Engineering leadership, advisory, or technical keynotes.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono-tech text-slate-400 uppercase font-bold block">
                  DIRECT EMAIL
                </span>
                <span className="text-sm font-bold text-slate-900 font-mono-tech">
                  {emailAddress}
                </span>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-800 hover:bg-slate-100 transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h4 className="font-serif-display text-2xl font-bold text-slate-900">
                Inquiry Dispatch Received
              </h4>
              <p className="text-xs font-mono-tech text-emerald-800">
                Ticket Reference: #ARG-2026-{(Math.random() * 8999 + 1000).toFixed(0)}
              </p>
              <p className="text-sm text-slate-600">
                {ENGINEER_BIO.name} responds directly to executive inquiries within 12 business hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono-tech uppercase text-slate-600 font-bold block mb-1.5">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono-tech uppercase text-slate-600 font-bold block mb-1.5">
                    Corporate Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="s.jenkins@enterprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono-tech uppercase text-slate-600 font-bold block mb-1.5">
                    Organization / Company
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Stripe, Linear, Apple"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono-tech uppercase text-slate-600 font-bold block mb-1.5">
                    Engagement Category
                  </label>
                  <select
                    value={formData.engagementType}
                    onChange={(e) => setFormData({ ...formData, engagementType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:bg-white transition-all"
                  >
                    <option value="Principal Role">Principal / Staff Role</option>
                    <option value="Executive Advisory">Executive / Board Advisory</option>
                    <option value="Architecture Review">System Architecture Review</option>
                    <option value="Keynote Speaking">Keynote Speaker / Research</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono-tech uppercase text-slate-600 font-bold block mb-1.5">
                  Overview of Scope & Vision
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Share key technical goals, scale requirements, or inquiry details..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:bg-white transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-slate-900 text-white font-medium text-sm tracking-wide shadow-xl hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Dispatch Executive Inquiry</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
