'use client';

import React, { Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { AnimatedText } from '../common/AnimatedText';
import { Button } from '../ui/Button';
import { MagneticButton } from '../common/MagneticButton';
import { ParticleBackground } from '../3d/ParticleBackground';
import { FloatingShapes } from '../3d/FloatingShapes';
import { CityConnectionAnimation } from '../animations/CityConnectionAnimation';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#solutions');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-gradient">
      {/* Background Image with gradient overlay for better blending */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero-bg.png)',
        }}
      />
      {/* Dark Overlay with gradient for smooth scroll transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/30" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* City Connection Vector Animation */}
      <CityConnectionAnimation />

      {/* 3D Background Elements */}
      <Suspense fallback={null}>
        <FloatingShapes />
        <ParticleBackground />
      </Suspense>

      {/* Content */}
      <motion.div
        className="relative z-10 container-custom text-center px-4"
        style={{ y, opacity }}
      >
        {/* Pre-headline */}
        <motion.p
          className="inline-block bg-primary text-white font-medium text-sm md:text-base tracking-wider uppercase mb-6 px-4 py-2 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Strategic Consulting
        </motion.p>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-h1 font-heading font-extrabold text-white mb-6">
          <AnimatedText text="Think Wise. Act Global." type="word" delay={0.4} />
        </h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          We unlock India&apos;s potential to power global enterprise innovation
          by building capability centers that scale ideas into outcomes.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <MagneticButton strength={0.3} tolerance={2}>
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                const contact = document.querySelector('#contact');
                if (contact) contact.scrollIntoView({ behavior: 'smooth' });
              }}
              className="shadow-2xl min-w-[200px]"
            >
              Request a Briefing
            </Button>
          </MagneticButton>

          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              const solutions = document.querySelector('#solutions');
              if (solutions) solutions.scrollIntoView({ behavior: 'smooth' });
            }}
            className="min-w-[200px] border-white text-white hover:bg-white hover:text-black"
          >
            Our Solutions
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
          onClick={scrollToNext}
          aria-label="Scroll to next section"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center text-white"
          >
            <span className="text-sm mb-2 opacity-70">Scroll</span>
            <ChevronDown size={24} className="opacity-70" />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Bottom Gradient Fade for smooth scroll transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-vapor/80 to-transparent pointer-events-none" />
    </section>
  );
};
