import React from 'react';
import { motion } from 'motion/react';

export const CapCutSceneWrapper = ({
  id,
  children,
  transitionStyle = 'mask',
  className = '',
  onInView,
}) => {
  const getVariants = () => {
    switch (transitionStyle) {
      case 'mask':
        return {
          hidden: {
            opacity: 0,
            clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
            y: 40,
          },
          visible: {
            opacity: 1,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            y: 0,
            transition: {
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
              staggerChildren: 0.18,
            },
          },
        };

      case 'curtain':
        return {
          hidden: {
            opacity: 0,
            scaleY: 0.85,
            y: 60,
          },
          visible: {
            opacity: 1,
            scaleY: 1,
            y: 0,
            transition: {
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
              staggerChildren: 0.2,
            },
          },
        };

      case 'zoom':
        return {
          hidden: { opacity: 0, scale: 0.92, filter: 'blur(10px)' },
          visible: {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            transition: {
              duration: 1.0,
              ease: [0.16, 1, 0.3, 1],
              staggerChildren: 0.15,
            },
          },
        };

      case 'blur':
        return {
          hidden: { opacity: 0, filter: 'blur(24px)', y: 30 },
          visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
              duration: 1.0,
              ease: [0.16, 1, 0.3, 1],
              staggerChildren: 0.16,
            },
          },
        };

      case 'layeredDepth':
        return {
          hidden: { opacity: 0, z: -100, y: 80, scale: 0.95 },
          visible: {
            opacity: 1,
            z: 0,
            y: 0,
            scale: 1,
            transition: {
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
              staggerChildren: 0.22,
            },
          },
        };

      case 'clipPath':
        return {
          hidden: { opacity: 0, clipPath: 'circle(0% at 50% 50%)' },
          visible: {
            opacity: 1,
            clipPath: 'circle(120% at 50% 50%)',
            transition: {
              duration: 1.3,
              ease: [0.16, 1, 0.3, 1],
              staggerChildren: 0.18,
            },
          },
        };

      case 'slide':
      default:
        return {
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
              staggerChildren: 0.15,
            },
          },
        };
    }
  };

  const variants = getVariants();

  return (
    <section id={id} className={`relative w-full py-24 md:py-32 ${className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={variants}
        onViewportEnter={() => onInView?.()}
        className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};

export const CapCutAnimatedText = ({
  text,
  className = '',
  highlightWords = [],
  highlightClass = 'bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 bg-clip-text text-transparent font-serif-display italic font-normal',
}) => {
  const words = text.split(' ');

  const itemVariants = {
    hidden: { opacity: 0, y: 24, filter: 'blur(12px)', scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <h2 className={`flex flex-wrap gap-x-3 gap-y-1.5 ${className}`}>
      {words.map((word, idx) => {
        const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '');
        const isHighlight = highlightWords.some(
          (hw) => hw.toLowerCase() === cleanWord.toLowerCase()
        );

        return (
          <motion.span
            key={idx}
            variants={itemVariants}
            className={`inline-block ${isHighlight ? highlightClass : ''}`}
          >
            {word}
          </motion.span>
        );
      })}
    </h2>
  );
};
