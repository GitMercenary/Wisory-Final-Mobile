'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Rocket, LifeBuoy } from 'lucide-react';

const capabilities = [
  {
    number: '1',
    icon: Target,
    title: 'Strategic Planning',
    description: 'We help you define the vision, scope, and roadmap for your India capability center aligned with global business objectives. Market entry strategy, Location selection, Business case development, Governance framework design.',
  },
  {
    number: '2',
    icon: Lightbulb,
    title: 'Setup & Launch',
    description: 'End-to-end execution support from legal entity formation to operational launch within 90 days. Entity registration, office infrastructure, Technology setup, Initial team recruitment.',
  },
  {
    number: '3',
    icon: Rocket,
    title: 'Scale & Optimize',
    description: 'Accelerate growth while maintaining quality through proven methodologies and best practices. Talent pipeline development, Process optimization, Performance metrics, Culture building.',
  },
  {
    number: '4',
    icon: LifeBuoy,
    title: 'Ongoing Support',
    description: 'Continuous advisory and operational support to ensure sustained success and competitive advantage. Strategic advisory, Compliance management, Change management, Innovation programs.',
  },
];

export const WhatWeDo: React.FC = () => {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-8">
          <motion.p
            className="text-primary font-medium text-sm md:text-base tracking-wider uppercase mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            What We Do
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-black mb-4">
            Comprehensive GCC Solutions
          </h2>
          <p className="text-base text-grey max-w-3xl mx-auto">
            From initial strategy to operational excellence, we provide end-to-end solutions
            to establish and scale your India capability center.
          </p>
        </div>

        {/* Capabilities Grid - Design System with Strict Symmetry */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="group relative bg-[#F5F1E8] rounded-card border border-grey/10 hover:shadow-xl transition-all duration-medium overflow-hidden min-h-[400px] md:min-h-card flex flex-col"
            >
              {/* Hover Light Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-medium" />

              {/* Content - Flexbox ensures consistent spacing */}
              <div className="relative p-8 md:p-8 py-10 flex flex-col h-full justify-between">
                {/* Icon Container - Fixed height */}
                <div className="mb-5 flex items-center justify-start h-12">
                  <capability.icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
                </div>

                {/* Title - Fixed height container */}
                <div className="mb-4 min-h-[64px] flex items-start">
                  <h3 className="text-2xl font-heading font-bold text-black leading-tight">
                    {capability.title}
                  </h3>
                </div>

                {/* Description - Flexible height with consistent styling */}
                <p className="text-grey text-sm leading-relaxed flex-grow">
                  {capability.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Container - Design System Compliant */}
        <motion.div
          className="text-center mt-12 mx-auto max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px 0px -100px 0px", amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-grey mb-6 text-base font-medium">
            Ready to transform your India strategy into measurable outcomes?
          </p>
          <motion.button
            className="bg-primary text-white px-8 py-4 rounded-button font-semibold text-base hover:bg-primary-dark transition-colors duration-fast shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
