import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Download,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Check,
  FileText,
  Mail,
  Phone,
  MapPin,
  Globe,
  Github,
  Linkedin,
  ShieldCheck,
  Sparkles,
  Layers,
  Cpu,
} from 'lucide-react';
import { ENGINEER_BIO, PROJECTS, SERVICES } from '../data/engineerData';
import { playLuxuryClick, playChimeUnlocked } from '../utils/sound';


export const ResumeModal = ({ isOpen, onClose, soundEnabled }) => {
  const [zoomLevel, setZoomLevel] = useState(100);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 15, 150));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 15, 75));
  const handleResetZoom = () => setZoomLevel(100);

  const handleDownloadPDF = () => {
    setIsDownloading(true);
    playLuxuryClick(soundEnabled);

    setTimeout(() => {
      const cvText = `
===================================================================
                  ABDUL REHMAN GHAFFAR
               Software Engineer & AI Architect
===================================================================

CONTACT INFORMATION:
- Email: ${ENGINEER_BIO.email}
- Phone: ${ENGINEER_BIO.phone}
- Location: ${ENGINEER_BIO.location}
- GitHub: ${ENGINEER_BIO.githubUrl}
- LinkedIn: ${ENGINEER_BIO.linkedinUrl}
- Portfolio: ${ENGINEER_BIO.portfolioUrl}

CORE SPECIALIZATIONS:
• MERN Stack Development (MongoDB, Express, React, Node.js)
• Artificial Intelligence & Google Gemini API Integration
• Kimra AI Architecture & Autonomous Agent Workflows
• Voice AI & Real-Time Speech Synthesis Loops
• Cyber Security & OWASP Top 10 Application Hardening
• Prompt Engineering & Guardrail Schema Design
• Modern UI Engineering & High-Performance Web Apps

PROFESSIONAL SUMMARY:
Dedicated Software Engineer with proven expertise in crafting production-ready 
full-stack MERN SaaS products, integrating Google Gemini multi-modal AI systems, 
implementing bank-grade security protocols, and engineering responsive interfaces.

PROJECTS & KEY ACHIEVEMENTS:
1. Kimra AI Multi-Modal Engine
   - Multi-modal AI platform powered by Google Gemini API & Voice AI speech loops.
   - Streaming agent execution with sub-80ms TTFT and prompt guardrails.

2. MERN SaaS Product Engine
   - Multi-tenant full-stack web application with JWT auth, role-based controls,
     and MongoDB aggregation pipelines.

3. Aegis Web Cyber Security Shield
   - OWASP vulnerability scanner, JWT verification, and CORS/CSP compliance auditor.

SERVICE OFFERINGS:
- MERN Stack Web Applications
- Custom RESTful APIs & Gateways
- AI Chatbot & Voice Assistant Integration
- Cyber Security Vulnerability Auditing
- Prompt Engineering & Model Guardrails
- Website Speed & Performance Optimization

===================================================================
Generated from Official Portfolio: ${ENGINEER_BIO.portfolioUrl}
===================================================================
      `.trim();

      const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Abdul_Rehman_Ghaffar_Resume.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setIsDownloading(false);
      setDownloadSuccess(true);
      playChimeUnlocked(soundEnabled);

      setTimeout(() => setDownloadSuccess(false), 3000);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/80 backdrop-blur-xl"
        >
                    <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl h-[90vh] bg-slate-900 rounded-3xl border border-white/20 shadow-2xl flex flex-col overflow-hidden text-slate-100"
          >
                        <div className="px-6 py-4 bg-slate-900/90 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-sky-500 p-[1.5px]">
                  <div className="w-full h-full rounded-[10.5px] bg-slate-950 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-white tracking-tight flex items-center gap-2">
                    <span>{ENGINEER_BIO.name} — Curriculum Vitae</span>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[10px] font-mono-tech uppercase font-bold">
                      PDF Document
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400">Software Engineer • MERN • AI • Cyber Security</p>
                </div>
              </div>

                            <div className="flex items-center gap-2">
                                <div className="hidden sm:flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-white/10 text-xs font-mono-tech">
                  <button
                    onClick={handleZoomOut}
                    title="Zoom Out"
                    className="p-1.5 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="px-2 font-semibold text-emerald-400">{zoomLevel}%</span>
                  <button
                    onClick={handleZoomIn}
                    title="Zoom In"
                    className="p-1.5 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleResetZoom}
                    title="Reset Zoom"
                    className="p-1.5 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

                                <button
                  onClick={handleDownloadPDF}
                  disabled={isDownloading}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 text-slate-950 font-bold text-xs tracking-wide shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-[1.03] transition-all flex items-center gap-2 cursor-pointer"
                >
                  {isDownloading ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Generating...</span>
                    </>
                  ) : downloadSuccess ? (
                    <>
                      <Check className="w-4 h-4 text-slate-950" />
                      <span>Downloaded!</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 text-slate-950" />
                      <span>Download Resume</span>
                    </>
                  )}
                </button>

                                <button
                  onClick={() => {
                    playLuxuryClick(soundEnabled);
                    onClose();
                  }}
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

                        <div className="flex-1 overflow-auto p-4 sm:p-8 bg-slate-950/60 flex justify-center">
              <div
                style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
                className="transition-transform duration-200 w-full max-w-3xl bg-white text-slate-900 rounded-2xl shadow-2xl p-8 sm:p-12 border border-slate-200 font-sans my-4"
              >
                                <div className="border-b border-slate-200 pb-6 mb-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                        {ENGINEER_BIO.name}
                      </h1>
                      <p className="text-emerald-700 font-semibold text-base mt-0.5">
                        {ENGINEER_BIO.title}
                      </p>
                      <p className="text-slate-500 text-xs mt-1 max-w-lg">
                        Specialized in MERN Stack, Kimra AI, Google Gemini API, Cyber Security, Prompt Engineering & Modern UI.
                      </p>
                    </div>

                    <div className="text-right text-xs text-slate-600 space-y-1">
                      <p className="flex items-center gap-1.5 justify-end">
                        <Mail className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{ENGINEER_BIO.email}</span>
                      </p>
                      <p className="flex items-center gap-1.5 justify-end">
                        <Phone className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{ENGINEER_BIO.phone}</span>
                      </p>
                      <p className="flex items-center gap-1.5 justify-end">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{ENGINEER_BIO.location}</span>
                      </p>
                      <p className="flex items-center gap-1.5 justify-end font-mono-tech text-[11px] text-slate-500">
                        <Globe className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{ENGINEER_BIO.portfolioUrl}</span>
                      </p>
                    </div>
                  </div>
                </div>

                                <div className="mb-8">
                  <h2 className="text-xs font-mono-tech uppercase tracking-[0.2em] font-bold text-slate-400 mb-3 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Technical Competencies</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-1">MERN Stack Development</span>
                      <p className="text-slate-600">MongoDB, Express.js, React.js, Node.js, REST APIs, JWT Auth</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-1">Artificial Intelligence & Gemini</span>
                      <p className="text-slate-600">Kimra AI, Google Gemini API (@google/genai), Voice AI, Streaming UI</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-1">Cyber Security & Auditing</span>
                      <p className="text-slate-600">OWASP Top 10 Mitigation, Penetration Testing Concepts, CORS, Rate-Limiting</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-1">Prompt Engineering & UI</span>
                      <p className="text-slate-600">Structured JSON Schemas, Guardrails, Tailwind CSS, Motion Physics</p>
                    </div>
                  </div>
                </div>

                                <div className="mb-8">
                  <h2 className="text-xs font-mono-tech uppercase tracking-[0.2em] font-bold text-slate-400 mb-4 flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Featured Software Projects</span>
                  </h2>
                  <div className="space-y-4">
                    {PROJECTS.map((proj) => (
                      <div key={proj.id} className="border-l-2 border-emerald-500 pl-4 py-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-sm text-slate-900">{proj.title}</h3>
                          <span className="text-[11px] font-mono-tech text-slate-500">{proj.year}</span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1">{proj.description}</p>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {proj.techStack.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-semibold text-slate-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                                <div>
                  <h2 className="text-xs font-mono-tech uppercase tracking-[0.2em] font-bold text-slate-400 mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Engineering Services Offered</span>
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 list-disc list-inside">
                    <li>Full-Stack MERN Web Applications</li>
                    <li>Custom RESTful API Gateway Architecture</li>
                    <li>AI Chatbot & Gemini Multi-Modal Tools</li>
                    <li>Voice Assistant Speech Recognition</li>
                    <li>Cyber Security Auditing & OWASP Fixes</li>
                    <li>Website Speed & Lighthouse Optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
