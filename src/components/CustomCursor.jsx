import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMouse = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      if (target) {
        const clickable = target.closest('button, a, input, select, [data-interactive="true"], .interactive-target');
        setIsPointer(!!clickable);
        setIsHovered(!!clickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMouse);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMouse);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden hidden md:block">
      <motion.div
        className="absolute rounded-full bg-gradient-to-tr from-emerald-300/20 via-sky-300/20 to-purple-300/20 blur-xl pointer-events-none"
        animate={{
          x: mousePosition.x - (isHovered ? 40 : 25),
          y: mousePosition.y - (isHovered ? 40 : 25),
          width: isHovered ? 80 : 50,
          height: isHovered ? 80 : 50,
          opacity: isHovered ? 0.7 : 0.4,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.5 }}
      />

      <motion.div
        className={`absolute rounded-full pointer-events-none border border-slate-900/10 shadow-sm ${
          isPointer ? 'bg-emerald-500/80 backdrop-blur-sm' : 'bg-slate-900/70'
        }`}
        animate={{
          x: mousePosition.x - (isPointer ? 6 : 4),
          y: mousePosition.y - (isPointer ? 6 : 4),
          width: isPointer ? 12 : 8,
          height: isPointer ? 12 : 8,
          scale: isPointer ? 1.4 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.2 }}
      />
    </div>
  );
};
