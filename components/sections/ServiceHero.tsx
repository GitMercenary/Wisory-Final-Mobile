'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { AnimatedText } from '../common/AnimatedText';
import { Button } from '../ui/Button';
import { MagneticButton } from '../common/MagneticButton';

interface ServiceHeroProps {
  overline?: string;
  headline: string;
  subtext: string;
  backgroundImage: string;
  primaryCTA?: {
    text: string;
    onClick?: () => void;
  };
  secondaryCTA?: {
    text: string;
    onClick?: () => void;
  };
  scrollToId?: string;
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({
  overline = 'Our Services',
  headline,
  subtext,
  backgroundImage,
  primaryCTA = { text: 'Request a Briefing' },
  secondaryCTA = { text: 'View Offerings' },
  scrollToId = 'offerings',
}) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToNext = () => {
    const nextSection = document.querySelector(`#${scrollToId}`);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrimaryCTA = () => {
    if (primaryCTA.onClick) {
      primaryCTA.onClick();
    } else {
      const contact = document.querySelector('#contact');
      if (contact) contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSecondaryCTA = () => {
    if (secondaryCTA.onClick) {
      secondaryCTA.onClick();
    } else {
      scrollToNext();
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
      {/* Dark Overlay with gradient for smooth scroll transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

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
          {overline}
        </motion.p>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold text-white mb-6">
          <AnimatedText text={headline} type="word" delay={0.4} />
        </h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          {subtext}
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
              onClick={handlePrimaryCTA}
              className="shadow-2xl min-w-[200px]"
            >
              {primaryCTA.text}
            </Button>
          </MagneticButton>

          <Button
            variant="outline"
            size="lg"
            onClick={handleSecondaryCTA}
            className="min-w-[200px] border-white text-white hover:bg-white hover:text-black"
          >
            {secondaryCTA.text}
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
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
    </section>
  );
};
