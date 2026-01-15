'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { Button } from '../ui/Button';
import { cn } from '@/lib/utils';
import { LogoOutlineEffect } from '../animations/LogoOutlineEffect';

const navLinks = [
  { name: 'Solutions', href: '#solutions' },
  { name: 'Services', href: '/services', isExternal: true },
  { name: 'Capabilities', href: '#capabilities' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'About', href: '#about' },
  { name: 'Insights', href: '#insights' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavClick = (link: { name: string; href: string; isExternal?: boolean }) => {
    if (link.isExternal) {
      window.location.href = link.href;
    } else {
      scrollToSection(link.href);
    }
  };

  return (
    <>
      <motion.nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'glass shadow-lg' : 'bg-transparent'
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          scale: isScrolled ? 0.95 : 1,
          paddingTop: isScrolled ? '0.5rem' : '0rem',
          paddingBottom: isScrolled ? '0.5rem' : '0rem'
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ transformOrigin: 'top center' }}
      >
        <div className="container-custom">
          <motion.div
            className="flex items-center justify-between"
            animate={{
              height: isScrolled ? '60px' : '80px'
            }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
                animate={{
                  width: isScrolled ? 40 : 48,
                  height: isScrolled ? 40 : 48
                }}
              >
                <LogoOutlineEffect
                  src="/logo.png"
                  alt="Wisory Global Logo"
                  size={isScrolled ? 40 : 48}
                />
              </motion.div>
              <motion.span
                className="font-heading font-bold text-white hidden sm:block"
                animate={{
                  fontSize: isScrolled ? '1rem' : '1.25rem'
                }}
                transition={{ duration: 0.3 }}
              >
                WISORY GLOBAL
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    fontSize: isScrolled ? '0.875rem' : '1rem'
                  }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <button
                    onClick={() => handleNavClick(link)}
                    className="relative text-white hover:text-primary transition-colors duration-300 group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: isScrolled ? 0.9 : 1
                }}
                transition={{ delay: 0.6 }}
              >
                <MagneticButton strength={0.3} tolerance={2}>
                  <Button
                    variant="primary"
                    size={isScrolled ? 'sm' : 'md'}
                    onClick={() => scrollToSection('#contact')}
                    className="relative overflow-hidden"
                  >
                    <span className="relative z-10">Contact Us</span>
                    <motion.div
                      className="absolute inset-0 bg-primary-dark"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </MagneticButton>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="absolute inset-0 bg-black">
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    onClick={() => handleNavClick(link)}
                    className="text-white text-3xl font-heading font-semibold hover:text-primary transition-colors"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {link.name}
                  </motion.button>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => scrollToSection('#contact')}
                  >
                    Contact Us
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
