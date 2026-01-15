'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface LogoOutlineEffectProps {
  src: string;
  alt: string;
  size?: number;
}

export const LogoOutlineEffect: React.FC<LogoOutlineEffectProps> = ({
  src,
  alt,
  size = 48,
}) => {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Logo Image */}
      <div className="relative w-full h-full z-10">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Star Wars Saber Effect Outline */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Outer glow rectangle with rounded corners */}
        <motion.rect
          x="5"
          y="5"
          width="90"
          height="90"
          rx="10"
          fill="none"
          stroke="url(#saberGradient)"
          strokeWidth="1.5"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: {
              duration: 2,
              ease: 'easeInOut',
              delay: 0.5,
            },
            opacity: {
              duration: 0.3,
              delay: 0.5,
            },
          }}
        />

        {/* Inner sharp outline */}
        <motion.rect
          x="5"
          y="5"
          width="90"
          height="90"
          rx="10"
          fill="none"
          stroke="#EF3A33"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.8 }}
          transition={{
            pathLength: {
              duration: 2,
              ease: 'easeInOut',
              delay: 0.7,
            },
            opacity: {
              duration: 0.3,
              delay: 0.7,
            },
          }}
        />

        {/* Gradient and Filter Definitions */}
        <defs>
          {/* Gradient for saber effect */}
          <linearGradient id="saberGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EF3A33" stopOpacity="1" />
            <stop offset="50%" stopColor="#E5C576" stopOpacity="1" />
            <stop offset="100%" stopColor="#EF3A33" stopOpacity="1" />
          </linearGradient>

          {/* Glow filter for the saber effect */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Animated particles around the logo */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-primary rounded-full"
          style={{
            top: `${25 + i * 20}%`,
            left: `${10 + i * 25}%`,
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};
