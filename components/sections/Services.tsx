'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, TrendingUp, Cpu, Shield, Rocket, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    icon: Building2,
    title: 'GCC Setup & Strategy',
    description: 'End-to-end capability center establishment from site selection to operational launch, tailored to your enterprise needs.',
    image: '/service-1.png',
  },
  {
    icon: Users,
    title: 'Talent Acquisition & Management',
    description: 'Access India\'s best tech talent with our proven recruitment processes and retention strategies.',
    image: '/service-2.png',
  },
  {
    icon: TrendingUp,
    title: 'Operations Excellence',
    description: 'Optimize your center\'s performance with world-class operational frameworks and continuous improvement.',
    image: '/service-3.png',
  },
  {
    icon: Cpu,
    title: 'Technology Integration',
    description: 'Seamlessly integrate cutting-edge technologies and platforms to enhance productivity and innovation.',
    image: '/service-4.png',
  },
  {
    icon: Shield,
    title: 'Compliance & Governance',
    description: 'Navigate complex regulatory landscapes with comprehensive compliance and risk management solutions.',
    image: '/service-5.png',
  },
  {
    icon: Rocket,
    title: 'Scaling & Optimization',
    description: 'Scale your operations efficiently while maintaining quality and driving continuous performance improvements.',
    image: '/service-6.png',
  },
];

export const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current || !cardRef.current) return;

    const ctx = gsap.context(() => {
      // Desktop: Pin the card while the container scrolls
      if (window.innerWidth >= 1024) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: cardRef.current,
          pinSpacing: false,
          onUpdate: (self) => {
            // Calculate which image is currently in view
            const progress = self.progress;
            const index = Math.min(
              Math.floor(progress * services.length),
              services.length - 1
            );
            setActiveIndex(index);
          },
        });

        // Fade in each image as it comes into view
        services.forEach((_, index) => {
          const imageElement = document.getElementById(`service-image-${index}`);
          if (imageElement) {
            gsap.from(imageElement, {
              scrollTrigger: {
                trigger: imageElement,
                start: 'top 80%',
                end: 'top 20%',
                scrub: true,
              },
              opacity: 0.3,
            });
          }
        });
      } else {
        // Mobile/Tablet: Stacking cards animation
        const cards = gsap.utils.toArray('.sticky-service-card');

        cards.forEach((card) => {
          const cardElement = card as HTMLElement;

          gsap.to(cardElement, {
            opacity: 0.6,
            scrollTrigger: {
              trigger: cardElement,
              start: 'top 100px',
              end: 'top 50px',
              scrub: 0.5,
            }
          });
        });
      }
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="solutions" className="relative">
      {/* Desktop Layout */}
      <div className="hidden lg:block relative">
        <div
          ref={containerRef}
          className="relative min-h-[600vh]"
        >
          {/* Full-Width Background Scrolling Images */}
          <div className="absolute inset-0">
            {services.map((service, index) => (
              <div
                key={service.title}
                id={`service-image-${index}`}
                className="relative h-screen w-full"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Left: Sticky Card - Overlaid on top */}
          <div className="absolute top-0 left-0 h-screen w-full flex items-center justify-start pl-20 pointer-events-none">
            <div ref={cardRef} className="w-full max-w-[450px] pointer-events-auto">
              <motion.div
                className="rounded-3xl p-10 shadow-2xl"
                style={{ backgroundColor: '#f02d31' }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {/* Section Label */}
                <motion.p
                  className="font-medium text-sm tracking-wider uppercase mb-6"
                  style={{ color: '#ffffff' }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Our Solutions
                </motion.p>

                {/* Main Heading */}
                <h2 className="text-4xl font-heading font-bold mb-6 leading-tight" style={{ color: '#ffffff' }}>
                  Comprehensive Capability Center Services
                </h2>

                {/* Intro Text */}
                <p className="text-base mb-10 leading-relaxed" style={{ color: '#ffffff', opacity: 0.9 }}>
                  From strategic planning to operational excellence, we deliver integrated solutions that transform your India capability center into a competitive advantage.
                </p>

                {/* Divider */}
                <div className="border-t mb-8" style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}></div>

                {/* Counter */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-base" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{activeIndex + 1}</span>
                  <span className="text-base" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>—</span>
                  <span className="text-base" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{services.length}</span>
                </div>

                {/* Current Service Title */}
                <h3 className="text-4xl font-heading font-bold mb-6 leading-tight transition-all duration-500" style={{ color: '#ffffff' }}>
                  {services[activeIndex].title}
                </h3>

                {/* Current Service Description */}
                <p className="text-lg leading-relaxed transition-all duration-500" style={{ color: '#ffffff', opacity: 0.9 }}>
                  {services[activeIndex].description}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout - Stacking Cards */}
      <div className="lg:hidden py-20" style={{ backgroundColor: '#464545' }}>
        <div className="container-custom">
          {/* Section Header - Mobile/Tablet */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <motion.p
                className="text-primary font-medium text-sm md:text-base tracking-wider uppercase mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Our Solutions
              </motion.p>
              <h2 className="text-4xl md:text-5xl lg:text-h2 font-heading font-bold text-white mb-6">
                Comprehensive Capability Center Services
              </h2>
              <p className="text-lg text-white max-w-3xl mx-auto">
                From strategic planning to operational excellence, we deliver integrated solutions
                that transform your India capability center into a competitive advantage.
              </p>
            </div>
          </ScrollReveal>

          {/* Stacking Cards */}
          {services.map((service, index) => (
            <div
              key={service.title}
              className="sticky-service-card sticky mb-8"
              style={{ top: `${80 + index * 20}px`, zIndex: index + 1 }}
            >
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  {/* Card Index Number */}
                  <div className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2">
                    <span className="text-6xl md:text-8xl font-heading font-bold text-white/20">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    {/* Card Image */}
                    <div className="w-full h-40 md:h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Card Text Content */}
                    <div className="p-6 md:p-8">
                      <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
                        {service.description}
                      </p>

                      {/* Learn More Link */}
                      <button className="flex items-center text-primary font-semibold text-base md:text-lg group">
                        <span className="mr-2">Learn More</span>
                        <motion.div
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight size={20} />
                        </motion.div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
