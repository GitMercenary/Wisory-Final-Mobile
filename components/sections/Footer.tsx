'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
  solutions: [
    { name: 'GCC Setup & Strategy', href: '#solutions' },
    { name: 'Talent Acquisition', href: '#solutions' },
    { name: 'Operations Excellence', href: '#solutions' },
    { name: 'Technology Integration', href: '#solutions' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Values', href: '#values' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Insights', href: '#insights' },
  ],
  resources: [
    { name: 'Blog', href: '#' },
    { name: 'Whitepapers', href: '#' },
    { name: 'Webinars', href: '#' },
    { name: 'FAQs', href: '#' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

export const Footer: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#F5F1E8] text-black">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <motion.div
                className="w-14 h-14 relative"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/logo.png"
                  alt="Wisory Global Logo"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <span className="text-2xl font-heading font-bold text-black">
                WISORY GLOBAL
              </span>
            </Link>
            <p className="text-grey mb-6 leading-relaxed">
              Unlocking India&apos;s potential to power global enterprise innovation.
              Building capability centers that scale ideas into outcomes.
            </p>
            <div className="space-y-3 text-grey">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-primary" />
                <span>Bangalore, India & Global Offices</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0 text-primary" />
                <a href="tel:+911234567890" className="hover:text-primary transition-colors">
                  +91 123 456 7890
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0 text-primary" />
                <a href="mailto:contact@wisoryglobal.com" className="hover:text-primary transition-colors">
                  contact@wisoryglobal.com
                </a>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-black">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-grey hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-black">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-grey hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-black">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-grey hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-grey/20 pt-12 mb-12">
          <div className="max-w-2xl">
            <h3 className="text-xl font-heading font-semibold mb-3 text-black">Stay Updated</h3>
            <p className="text-grey mb-6">
              Subscribe to our newsletter for insights on capability center trends and best practices.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-vapor border border-grey/30 rounded-lg focus:outline-none focus:border-primary text-black"
              />
              <motion.button
                type="submit"
                className="px-8 py-3 bg-primary hover:bg-primary-dark rounded-lg font-medium transition-colors text-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-grey/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-grey text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Wisory Global. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-vapor rounded-full flex items-center justify-center text-grey hover:bg-primary hover:text-white transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm text-grey">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
