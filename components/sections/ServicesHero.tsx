'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const ServicesHero: React.FC = () => {
  const scrollToServices = () => {
    const element = document.querySelector('#services-grid');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img1.jpg"
          alt="Services Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Overline */}
          <motion.p
            className="text-primary font-medium text-sm md:text-base tracking-[0.3em] uppercase mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            2️⃣ SERVICES — "Our Expertise"
          </motion.p>

          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Integrated Solutions for Every Step of Your Journey
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Whether you need a full Build-Operate-Transfer model or specific operational support, we have the expertise.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={scrollToServices}
              className="group relative overflow-hidden"
            >
              <span className="relative z-10">Explore Our Services</span>
              <motion.div
                className="absolute inset-0 bg-primary-dark"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
