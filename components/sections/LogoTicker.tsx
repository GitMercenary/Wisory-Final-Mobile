'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface LogoItem {
  name: string;
}

interface LogoTickerProps {
  title?: string;
  logos?: LogoItem[];
}

const defaultLogos: LogoItem[] = [
  { name: 'TechCorp' },
  { name: 'GlobalFinance' },
  { name: 'InnovateSystems' },
  { name: 'DataDriven' },
  { name: 'CloudFirst' },
  { name: 'ScaleUp' },
];

export const LogoTicker: React.FC<LogoTickerProps> = ({
  title = 'Trusted by Industry Leaders',
  logos = defaultLogos,
}) => {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-12 md:py-16 bg-[#F5F1E8] overflow-hidden">
      <div className="container-custom">
        <motion.p
          className="text-center text-grey text-sm md:text-base font-medium tracking-wider uppercase mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.p>
      </div>

      {/* Infinite scroll container */}
      <div className="relative">
        {/* Gradient masks for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#F5F1E8] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#F5F1E8] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center gap-12 md:gap-20"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20,
              ease: 'linear',
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center"
            >
              {/* Placeholder logo - grayscale text style */}
              <div className="px-6 py-3 bg-white/50 rounded-lg border border-grey/10">
                <span className="text-lg md:text-xl font-heading font-bold text-grey/60 whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
