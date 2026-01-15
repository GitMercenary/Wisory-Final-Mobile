'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Hammer, LineChart } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery & Strategy',
    description: 'We analyze your business objectives, talent needs, and operational requirements to craft a tailored capability center strategy.',
    duration: '2-4 weeks',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Design & Planning',
    description: 'Detailed planning covering site selection, organizational design, technology infrastructure, and compliance frameworks.',
    duration: '4-6 weeks',
  },
  {
    number: '03',
    icon: Hammer,
    title: 'Build & Launch',
    description: 'Execute the setup with precision—from facility establishment and talent acquisition to systems integration and go-live.',
    duration: '3-6 months',
  },
  {
    number: '04',
    icon: LineChart,
    title: 'Operate & Optimize',
    description: 'Continuous monitoring, performance optimization, and scaling support to ensure sustained excellence and growth.',
    duration: 'Ongoing',
  },
];

export const Process: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Desktop animation
      if (window.innerWidth >= 1024 && stepsContainerRef.current) {
        // Pin the section while steps reveal
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=200%',
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        });

        // Create a master timeline that controls everything
        const masterTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'top+=200% top',
            scrub: 1,
          }
        });

        // Animate the progress line
        masterTimeline.fromTo(
          '.progress-line',
          { scaleX: 0 },
          { scaleX: 1, duration: 1, ease: 'linear' },
          0
        );

        // Animate steps - Icons/Numbers FIRST, then text with delay
        steps.forEach((_, index) => {
          const iconElement = `.process-icon-${index}`;
          const textElement = `.process-text-${index}`;
          const startTime = index * 0.25;
          const duration = 0.2;

          // Animate icon first
          masterTimeline.fromTo(
            iconElement,
            {
              opacity: 0,
              scale: 0.5,
              y: 40,
            },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: duration,
              ease: 'back.out(1.7)',
            },
            startTime
          );

          // Animate text after icon with slight delay
          masterTimeline.fromTo(
            textElement,
            {
              opacity: 0,
              y: 30,
            },
            {
              opacity: 1,
              y: 0,
              duration: duration,
              ease: 'power2.out',
            },
            startTime + 0.15
          );
        });
      } else {
        // Mobile/Tablet animation - Stacking cards
        const mobileCards = gsap.utils.toArray('.mobile-process-card');

        mobileCards.forEach((card) => {
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
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="process" ref={sectionRef} className="min-h-screen bg-white relative py-20">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p
            className="text-primary font-medium text-sm md:text-base tracking-wider uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Methodology
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-h2 font-heading font-bold text-black mb-6">
            Proven Four-Phase Approach
          </h2>
          <p className="text-lg text-grey max-w-3xl mx-auto">
            A structured methodology that transforms vision into operational reality.
          </p>
        </div>

        {/* Desktop Pinned Timeline */}
        <div className="hidden lg:block relative" ref={stepsContainerRef}>
          {/* Background Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-grey/20 -translate-y-1/2" />

          {/* Progress Line */}
          <div
            className="progress-line absolute top-1/2 left-0 right-0 h-1 bg-primary -translate-y-1/2 origin-left"
            style={{ transformOrigin: 'left' }}
          />

          <div className="grid grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative"
              >
                {/* Icon Circle - Animates FIRST */}
                <div className={`process-icon-${index} opacity-0`}>
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-8 relative z-10 shadow-xl">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <span className="text-6xl font-heading font-bold text-primary/20 block text-center mb-8">
                    {step.number}
                  </span>
                </div>

                {/* Content - Animates SECOND with delay */}
                <div className={`process-text-${index} text-center opacity-0 mt-8`}>
                  <h3 className="text-xl font-heading font-bold text-black mb-3">
                    {step.title}
                  </h3>
                  <p className="text-grey mb-4 leading-relaxed text-sm min-h-[80px]">
                    {step.description}
                  </p>
                  <span className="inline-block bg-vapor text-primary px-3 py-1 rounded-lg text-sm font-medium">
                    {step.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Stacking Cards */}
        <div className="lg:hidden">
          {steps.map((step, index) => {
            const [isExpanded, setIsExpanded] = React.useState(false);

            return (
              <motion.div
                key={step.number}
                className="mobile-process-card sticky mb-8"
                style={{ top: `${80 + index * 20}px`, zIndex: index + 1 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="max-w-2xl mx-auto">
                  <motion.div
                    className="bg-[#F5F1E8] rounded-2xl p-6 md:p-8 shadow-lg border border-grey/10 cursor-pointer"
                    onClick={() => setIsExpanded(!isExpanded)}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Icon and Number */}
                    <div className="flex items-center justify-between mb-6">
                      <motion.div
                        className="w-16 h-16 bg-primary rounded-full flex items-center justify-center"
                        animate={{ scale: isExpanded ? 1.1 : 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <step.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <span className="text-6xl md:text-7xl font-heading font-bold text-primary/20">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-heading font-bold text-black mb-3">
                        {step.title}
                      </h3>
                      <motion.p
                        className="text-grey mb-4 leading-relaxed text-base md:text-lg"
                        animate={{ opacity: 1 }}
                      >
                        {isExpanded ? step.hoverDescription : step.description}
                      </motion.p>

                      {/* Expanded Image */}
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: isExpanded ? 'auto' : 0,
                          opacity: isExpanded ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mb-4"
                      >
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </motion.div>

                      <span className="inline-block bg-white text-primary px-4 py-2 rounded-lg text-sm font-medium shadow-sm">
                        {step.duration}
                      </span>
                      <span className="ml-3 text-sm text-grey">
                        {isExpanded ? 'Tap to collapse' : 'Tap to expand'}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
