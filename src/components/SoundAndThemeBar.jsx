import React from 'react';
import { motion } from 'motion/react';
import { Volume2, VolumeX, Sparkles, Navigation } from 'lucide-react';
import { playLuxuryClick } from '../utils/sound';

export const SoundAndThemeBar = ({
  soundEnabled,
  onToggleSound,
  activeTheme,
  onChangeTheme,
}) => {
  const themes = [
    { id: 'emerald', label: 'Emerald', color: 'bg-emerald-500' },
    { id: 'blue', label: 'Ocean Blue', color: 'bg-blue-500' },
    { id: 'pink', label: 'Soft Pink', color: 'bg-pink-500' },
    { id: 'lavender', label: 'Lavender', color: 'bg-purple-500' },
    { id: 'cyan', label: 'Cyan', color: 'bg-cyan-500' },
    { id: 'peach', label: 'Warm Peach', color: 'bg-amber-500' },
  ];

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden sm:block"
    >
      <div className="glass-panel px-4 py-2.5 rounded-full border border-white/90 shadow-2xl flex items-center gap-4 bg-white/80 backdrop-blur-xl">
        <button
          onClick={() => {
            onToggleSound();
            playLuxuryClick(!soundEnabled);
          }}
          className="flex items-center gap-2 text-xs font-mono-tech text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
        >
          {soundEnabled ? (
            <Volume2 className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
          ) : (
            <VolumeX className="w-3.5 h-3.5 text-slate-400" />
          )}
          <span className="hidden md:inline font-semibold">
            {soundEnabled ? 'Acoustics ON' : 'Acoustics Muted'}
          </span>
        </button>

        <div className="h-4 w-[1px] bg-slate-200" />

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono-tech text-slate-400 uppercase tracking-widest hidden md:inline">
            Ambient Light:
          </span>
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                playLuxuryClick(soundEnabled);
                onChangeTheme(t.id);
              }}
              title={t.label}
              className={`w-3.5 h-3.5 rounded-full ${t.color} transition-all cursor-pointer ${
                activeTheme === t.id
                  ? 'scale-125 ring-2 ring-slate-900/30 ring-offset-1'
                  : 'hover:scale-110 opacity-60 hover:opacity-100'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
