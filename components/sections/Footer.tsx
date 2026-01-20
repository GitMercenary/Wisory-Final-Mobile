'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Facebook, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button'; // Ensure this path is correct for your project
import { MagneticButton } from '@/components/common/MagneticButton'; // Ensure this path is correct

// --- DATA ---
const footerLinks = {
  solutions: [
    { name: 'Real Estate & Infrastructure', href: '/services/real-estate' },
    { name: 'HR & Talent Management', href: '/services/hr-talent' },
    { name: 'IT Infrastructure & Security', href: '/services/it-infrastructure' },
    { name: 'Finance & Automation', href: '/services/finance-automation' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/legal/privacy-policy' },
    { name: 'Terms of Use', href: '/legal/terms-of-use' },
  ],
  resources: [
    { name: 'GCC Setup Guide', href: '/resources/gcc-setup-guide' },
    { name: 'Compliance Services', href: '/services/compliance' },
    { name: 'Governance', href: '/services/governance' },
    { name: 'Cookie Policy', href: '/legal/cookie-policy' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

// --- INTERNAL CTA COMPONENT ---
const CTASection = () => {
  return (
    <section id="contact" className="relative z-10 section-padding bg-primary-soft overflow-hidden">
      
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 grid-pattern opacity-10"
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
      />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 bg-primary-dark rounded-full blur-3xl opacity-30"
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-gold rounded-full blur-3xl opacity-20"
        animate={{ scale: [1, 1.3, 1], x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
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

            {/* CTA Buttons - MATCHING FOOTER SHAPE (rounded-lg) */}
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
                  className="bg-white text-primary hover:bg-vapor shadow-2xl min-w-[250px] group rounded-lg"
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
                className="border-2 border-white text-white hover:bg-white hover:text-primary min-w-[250px] rounded-lg"
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
                <a href="mailto:contact@wisoryglobal.com" className="hover:text-gold transition-colors font-medium">
                  contact@wisoryglobal.com
                </a>
                <span className="hidden sm:inline text-white/40">|</span>
                <a href="tel:+911234567890" className="hover:text-gold transition-colors font-medium">
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

// --- MAIN FOOTER EXPORT ---
export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (!footerRef.current) return;

    const updateLayout = () => {
      const height = footerRef.current?.offsetHeight || 0;
      setFooterHeight(height);
      setIsSticky(height < window.innerHeight);
    };

    updateLayout();
    const resizeObserver = new ResizeObserver(updateLayout);
    resizeObserver.observe(footerRef.current);
    
    window.addEventListener('resize', updateLayout);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateLayout);
    };
  }, []);

  return (
    <div className="relative w-full">
      
      {/* 1. THE CURTAIN (CTA Section) */}
      <div 
        className="relative z-10 bg-white shadow-2xl rounded-b-[60px] overflow-hidden" 
        style={{ marginBottom: isSticky ? footerHeight : 0 }}
      >
        <CTASection />
      </div>

      {/* 2. THE REVEAL (Fixed Footer) */}
      <div
        ref={footerRef}
        className={`w-full bg-[#F5F1E8] text-black ${
          isSticky 
            ? 'fixed bottom-0 left-0 -z-10' 
            : 'relative z-0'
        }`}
      >
        <div className="container-custom py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 mb-8">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-4 group">
                <div className="w-10 h-10 relative">
                  <Image
                    src="/logo.png"
                    alt="Wisory Global Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xl font-heading font-bold text-black">
                  WISORY GLOBAL
                </span>
              </Link>
              <p className="text-grey text-sm mb-6 leading-relaxed max-w-sm">
                Unlocking India&apos;s potential to power global enterprise innovation.
              </p>
              <div className="space-y-2 text-sm text-grey">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  <span>Bangalore, India & Global Offices</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-primary" />
                  <a href="tel:+911234567890" className="hover:text-primary transition-colors">
                    +91 123 456 7890
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-primary" />
                  <a href="mailto:contact@wisoryglobal.com" className="hover:text-primary transition-colors">
                    contact@wisoryglobal.com
                  </a>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-base font-heading font-semibold mb-3 text-black">Solutions</h3>
              <ul className="space-y-2 text-sm">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-grey hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-base font-heading font-semibold mb-3 text-black">Company</h3>
              <ul className="space-y-2 text-sm">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-grey hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources - HIDDEN ON MOBILE */}
            <div className="hidden md:block">
              <h3 className="text-base font-heading font-semibold mb-3 text-black">Resources</h3>
              <ul className="space-y-2 text-sm">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-grey hover:text-primary">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter - HIDDEN ON MOBILE */}
          <div className="hidden md:block border-t border-grey/20 pt-6 mb-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="max-w-md">
                <h3 className="text-base font-heading font-semibold text-black">Stay Updated</h3>
                <p className="text-xs text-grey mt-1">
                  Insights on capability center trends and best practices.
                </p>
              </div>
              <form className="flex gap-2 w-full lg:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full lg:w-64 px-4 py-2 text-sm bg-vapor border border-grey/30 rounded-lg focus:outline-none focus:border-primary text-black"
                />
                <motion.button
                  type="submit"
                  className="px-6 py-2 text-sm bg-primary hover:bg-primary-dark rounded-lg font-medium text-white transition-colors whitespace-nowrap"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-grey/20 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
              <p className="text-grey text-center md:text-left">
                &copy; {new Date().getFullYear()} Wisory Global. All rights reserved.
              </p>

              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-vapor rounded-full flex items-center justify-center text-grey hover:bg-primary hover:text-white transition-colors"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-4 text-grey">
                <Link href="/legal/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                <Link href="/legal/terms-of-use" className="hover:text-primary transition-colors">Terms</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};