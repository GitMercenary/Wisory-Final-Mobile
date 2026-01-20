'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation'; // Added for better navigation
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { Button } from '../ui/Button';
import { cn } from '@/lib/utils';
import { LogoOutlineEffect } from '../animations/LogoOutlineEffect';

const navLinks = [
  { name: 'About', href: '/about', isExternal: true },
  { name: 'Services', href: '/services', isExternal: true }, // Fixed missing comma here
  { name: 'Resources', href: '/resources/gcc-setup-guide', isExternal: true },
  { name: 'Contact', href: '/contact', isExternal: true },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Set initial scroll state immediately to prevent jump
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    } else {
       // If we are not on the home page and try to scroll to an ID, go home first
       router.push(`/${href}`);
    }
  };

  const handleNavClick = (link: { name: string; href: string; isExternal?: boolean }) => {
    if (link.isExternal) {
      // Use router.push for internal routes (no refresh)
      router.push(link.href);
      setIsMobileMenuOpen(false);
    } else {
      scrollToSection(link.href);
    }
  };

  return (
    <>
      {/* Wrapper: Fixed at top, centered, full width */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 pointer-events-none">
        <motion.nav
          className="pointer-events-auto relative flex items-center justify-between"
          // Fix 1: Explicitly set initial width to 100% to prevent "growth" animation on load
          initial={{ y: -20, opacity: 0, width: '100%' }}
          animate={{
            y: 0,
            opacity: 1,
            // Width animates based on scroll
            width: isScrolled ? '90%' : '100%',
            maxWidth: '1280px', 
          }}
          transition={{ 
            duration: 0.5, 
            ease: [0.25, 0.46, 0.45, 0.94],
            width: { duration: 0.4 } // smoother width transition
          }}
        >
          {/* Background Layer (The Pill) */}
          <motion.div 
            className="absolute inset-0 z-0 bg-black/80 backdrop-blur-md border border-white/10 shadow-lg"
            initial={false}
            animate={{
              opacity: isScrolled ? 1 : 0,
              borderRadius: isScrolled ? '9999px' : '0px', 
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Content Container */}
          <div className="relative z-10 w-full flex items-center justify-between px-6 py-3 lg:px-8">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                animate={{ scale: isScrolled ? 0.9 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <LogoOutlineEffect
                  src="/logo.png"
                  alt="Wisory Global Logo"
                  size={48}
                />
              </motion.div>
              <motion.span
                className="font-heading font-bold text-white hidden sm:block whitespace-nowrap"
                animate={{ opacity: 1, x: 0 }}
              >
                WISORY GLOBAL
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className={cn(
                    "relative text-sm font-medium transition-colors duration-300 group",
                    pathname === link.href ? "text-primary" : "text-white/90 hover:text-white"
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </button>
              ))}
            </div>

            {/* Right Side: CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:block">
                <MagneticButton strength={0.3} tolerance={2}>
                  <Button
                    variant="primary"
                    size={isScrolled ? 'sm' : 'md'}
                    onClick={() => router.push('/contact')}
                    className={cn(
                        "transition-all duration-300 rounded-full",
                        isScrolled ? "h-10 px-6 text-sm" : "h-12 px-8"
                    )}
                  >
                    Contact Us
                  </Button>
                </MagneticButton>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-white p-1"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-xl">
              <div className="flex flex-col items-center justify-center h-full space-y-8 p-4">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    onClick={() => handleNavClick(link)}
                    className="text-white text-3xl font-heading font-semibold hover:text-primary transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.name}
                  </motion.button>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    variant="primary"
                    size="lg"
                    className="rounded-full px-8"
                    onClick={() => {
                        router.push('/contact');
                        setIsMobileMenuOpen(false);
                    }}
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