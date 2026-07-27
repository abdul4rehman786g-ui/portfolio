import React, { useMemo } from 'react';

export const AmbientBackground = ({ activeTheme }) => {
  const themeGradients = useMemo(() => {
    switch (activeTheme) {
      case 'emerald':
        return {
          orb1: 'from-emerald-200/50 via-teal-100/40 to-transparent',
          orb2: 'from-cyan-200/40 via-emerald-100/30 to-transparent',
          orb3: 'from-amber-100/40 via-emerald-50/20 to-transparent',
          glow: 'rgba(16, 185, 129, 0.08)',
        };
      case 'blue':
        return {
          orb1: 'from-sky-200/50 via-blue-100/40 to-transparent',
          orb2: 'from-indigo-200/40 via-cyan-100/30 to-transparent',
          orb3: 'from-teal-100/40 via-sky-50/20 to-transparent',
          glow: 'rgba(59, 130, 246, 0.08)',
        };
      case 'pink':
        return {
          orb1: 'from-rose-200/50 via-pink-100/40 to-transparent',
          orb2: 'from-amber-200/40 via-rose-100/30 to-transparent',
          orb3: 'from-purple-100/40 via-pink-50/20 to-transparent',
          glow: 'rgba(244, 63, 94, 0.08)',
        };
      case 'lavender':
        return {
          orb1: 'from-purple-200/50 via-indigo-100/40 to-transparent',
          orb2: 'from-violet-200/40 via-fuchsia-100/30 to-transparent',
          orb3: 'from-sky-100/40 via-purple-50/20 to-transparent',
          glow: 'rgba(139, 92, 246, 0.08)',
        };
      case 'cyan':
        return {
          orb1: 'from-cyan-200/50 via-teal-100/40 to-transparent',
          orb2: 'from-sky-200/40 via-blue-100/30 to-transparent',
          orb3: 'from-emerald-100/40 via-cyan-50/20 to-transparent',
          glow: 'rgba(6, 182, 212, 0.08)',
        };
      case 'peach':
        return {
          orb1: 'from-amber-200/50 via-orange-100/40 to-transparent',
          orb2: 'from-rose-200/40 via-peach-100/30 to-transparent',
          orb3: 'from-yellow-100/40 via-amber-50/20 to-transparent',
          glow: 'rgba(249, 115, 22, 0.08)',
        };
    }
  }, [activeTheme]);

  const particles = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: `${(i * 17) % 100}%`,
      top: `${(i * 23) % 100}%`,
      size: `${(i % 3) * 2 + 3}px`,
      duration: `${14 + (i % 7) * 4}s`,
      delay: `${(i % 5) * 1.5}s`,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#fafbfc]">
      <div
        className={`absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full bg-gradient-to-br ${themeGradients.orb1} animate-mesh-1 blur-[100px] transition-all duration-1000`}
      />

      <div
        className={`absolute top-[35%] -right-40 w-[700px] h-[700px] rounded-full bg-gradient-to-br ${themeGradients.orb2} animate-mesh-2 blur-[120px] transition-all duration-1000`}
      />

      <div
        className={`absolute -bottom-40 left-[25%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr ${themeGradients.orb3} animate-mesh-3 blur-[90px] transition-all duration-1000`}
      />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[140px] transition-all duration-1000 pointer-events-none"
        style={{ backgroundColor: themeGradients.glow }}
      />

      <div className="absolute inset-0 opacity-40">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)] animate-float-gentle"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-noise opacity-80" />
    </div>
  );
};
