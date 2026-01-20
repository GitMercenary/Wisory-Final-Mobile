'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, BookOpen, Calculator, Rocket, LucideIcon } from 'lucide-react';

interface ProcessStep {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

interface GuideProcessProps {
  sectionLabel?: string;
  headline?: string;
  subheadline?: string;
  steps?: ProcessStep[];
  ctaText?: string;
  onCtaClick?: () => void;
}

const defaultSteps: ProcessStep[] = [
  {
    number: '01',
    icon: Download,
    title: 'Download the Guide',
    description: 'Fill in the form and get instant access to the complete 50-page PDF delivered to your inbox.',
  },
  {
    number: '02',
    icon: BookOpen,
    title: 'Review the Playbook',
    description: 'Study the strategic frameworks, checklists, and best practices from Fortune 500 implementations.',
  },
  {
    number: '03',
    icon: Calculator,
    title: 'Run Your Numbers',
    description: 'Use the included Excel cost calculator to model your CAPEX/OPEX for different Indian cities.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch with Confidence',
    description: 'Present a data-backed business case to your leadership and accelerate your India expansion.',
  },
];

export const GuideProcess: React.FC<GuideProcessProps> = ({
  sectionLabel = 'How It Works',
  headline = 'From Download to Decision in 4 Steps',
  subheadline = 'This isn\'t just a PDF—it\'s a complete toolkit designed to accelerate your India strategy.',
  steps = defaultSteps,
  ctaText = 'Get Started Now',
  onCtaClick,
}) => {
  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      const formSection = document.querySelector('#lead-form');
      if (formSection) formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            className="text-primary font-medium text-sm md:text-base tracking-wider uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {sectionLabel}
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {headline}
          </motion.h2>
          <motion.p
            className="text-grey text-base md:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {subheadline}
          </motion.p>
        </div>

        {/* Process Steps - Desktop */}
        <div className="hidden lg:block relative">
          {/* Connection Line */}
          <div className="absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-grey/20" />
          <motion.div
            className="absolute top-[60px] left-[10%] h-0.5 bg-primary"
            initial={{ width: 0 }}
            whileInView={{ width: '80%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />

          <div className="grid grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                {/* Icon Circle */}
                <div className="relative mb-8">
                  <div className="w-[120px] h-[120px] bg-primary rounded-full flex items-center justify-center mx-auto shadow-xl shadow-primary/20 ring-8 ring-white">
                    <step.icon className="w-12 h-12 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-bold text-black mb-3">
                  {step.title}
                </h3>
                <p className="text-grey text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Steps - Mobile (Vertical Timeline) */}
        <div className="lg:hidden relative pl-8">
          {/* Vertical Line */}
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-grey/20" />
          <motion.div
            className="absolute left-[15px] top-0 w-0.5 bg-primary origin-top"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />

          <div className="space-y-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative flex items-start gap-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Icon Circle */}
                <div className="flex-shrink-0 relative z-10 -ml-8">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow pt-1">
                  <span className="text-xs font-bold text-primary tracking-widest uppercase mb-2 block">
                    Step {step.number}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-black mb-2">
                    {step.title}
                  </h3>
                  <p className="text-grey text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            onClick={handleCtaClick}
            className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-primary-dark transition-colors duration-fast shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {ctaText}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
