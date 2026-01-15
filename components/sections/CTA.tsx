'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { MagneticButton } from '../common/MagneticButton';

export const CTA: React.FC = () => {
  return (
    <section id="contact" className="relative section-padding bg-primary-soft overflow-hidden">
      {/* Background Pattern with Animation */}
      <motion.div
        className="absolute inset-0 grid-pattern opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 bg-primary-dark rounded-full blur-3xl opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-gold rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Ready to Build Your India Capability Center?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Let&apos;s discuss how Wisory Global can transform your vision into a
              high-performing, scalable capability center that drives innovation and growth.
            </p>

            {/* CTA Buttons - Design System Compliant */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <MagneticButton strength={0.4} tolerance={2}>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary hover:bg-vapor shadow-2xl min-w-[250px] group rounded-button"
                >
                  <span className="mr-2">Schedule a Consultation</span>
                  <motion.div
                    className="inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Button>
              </MagneticButton>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary min-w-[250px] rounded-button"
              >
                Download Our Brochure
              </Button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="mt-16 pt-12 border-t border-white/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-white/80 mb-4">Or reach us directly:</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white">
                <a
                  href="mailto:contact@wisoryglobal.com"
                  className="hover:text-gold transition-colors font-medium"
                >
                  contact@wisoryglobal.com
                </a>
                <span className="hidden sm:inline text-white/40">|</span>
                <a
                  href="tel:+911234567890"
                  className="hover:text-gold transition-colors font-medium"
                >
                  +91 123 456 7890
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
