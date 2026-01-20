'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion'; // Added hooks
import { Search, PenTool, Hammer, LineChart } from 'lucide-react';
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
  const mobileContainerRef = useRef<HTMLDivElement>(null); // Ref for mobile wrapper

  // Hook for mobile scroll progress
  const { scrollYProgress } = useScroll({
    target: mobileContainerRef,
    offset: ["start center", "end center"] // Starts growing when top of section hits center of screen
  });

  // Map scroll progress (0 to 1) to height (0% to 100%)
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Desktop animation (Only runs on Large screens >= 1024px)
      if (window.innerWidth >= 1024 && stepsContainerRef.current) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=200%',
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        });

        const masterTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'top+=200% top',
            scrub: 1,
          },
        });

        masterTimeline.fromTo(
          '.progress-line',
          { scaleX: 0 },
          { scaleX: 1, duration: 1, ease: 'linear' },
          0
        );

        steps.forEach((_, index) => {
          const iconElement = `.process-icon-${index}`;
          const textElement = `.process-text-${index}`;
          const startTime = index * 0.25;
          const duration = 0.2;

          masterTimeline.fromTo(
            iconElement,
            { opacity: 0, scale: 0.5, y: 40 },
            { opacity: 1, scale: 1, y: 0, duration: duration, ease: 'back.out(1.7)' },
            startTime
          );

          masterTimeline.fromTo(
            textElement,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: duration, ease: 'power2.out' },
            startTime + 0.15
          );
        });
      } 
      // Mobile animation (Simple fade in for items)
      else {
        gsap.utils.toArray('.mobile-timeline-item').forEach((item) => {
          const element = item as HTMLElement;
          gsap.fromTo(element, 
            { opacity: 0, x: -20 },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              scrollTrigger: {
                trigger: element,
                start: 'top 85%',
              }
            }
          );
        });
      }
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="process" ref={sectionRef} className="min-h-screen bg-white relative py-16 md:py-20">
      <div className="container-custom px-4 md:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <motion.p
            className="text-primary font-medium text-xs md:text-sm tracking-widest uppercase mb-3 md:mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Methodology
          </motion.p>
          <h2 className="text-3xl md:text-5xl lg:text-h2 font-heading font-bold text-black mb-4 md:mb-6 leading-tight">
            Proven Four-Phase Approach
          </h2>
          <p className="text-base md:text-lg text-grey max-w-3xl mx-auto leading-relaxed">
            A structured methodology that transforms vision into operational reality.
          </p>
        </div>

        {/* ---------------------------------------------------- */}
        {/* DESKTOP / TABLET LANDSCAPE VIEW (Pinned Timeline)    */}
        {/* ---------------------------------------------------- */}
        <div className="hidden lg:block relative" ref={stepsContainerRef}>
          <div className="absolute top-[35%] left-0 right-0 h-0.5 bg-grey/10 -translate-y-1/2" />
          <div
            className="progress-line absolute top-[35%] left-0 right-0 h-0.5 bg-primary -translate-y-1/2 origin-left"
            style={{ transformOrigin: 'left' }}
          />

          <div className="grid grid-cols-4 lg:gap-6 xl:gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={step.number} className="relative pt-10">
                <div className={`process-icon-${index} opacity-0`}>
                  <div className="w-16 h-16 xl:w-20 xl:h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-xl shadow-primary/20 ring-8 ring-white">
                    <step.icon className="w-8 h-8 xl:w-10 xl:h-10 text-white" />
                  </div>
                  <span className="text-5xl xl:text-6xl font-heading font-bold text-primary/10 block text-center absolute -top-2 left-0 right-0 -z-10 select-none">
                    {step.number}
                  </span>
                </div>

                <div className={`process-text-${index} text-center opacity-0 mt-6`}>
                  <h3 className="text-lg xl:text-xl font-heading font-bold text-black mb-3 px-2">
                    {step.title}
                  </h3>
                  <p className="text-grey mb-5 leading-relaxed text-sm xl:text-base min-h-[80px]">
                    {step.description}
                  </p>
                  <span className="inline-block bg-[#F5F1E8] text-primary px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
                    {step.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* MOBILE / VERTICAL VIEW (Growing Line Added)          */}
        {/* ---------------------------------------------------- */}
        <div className="lg:hidden relative pl-4 md:pl-8" ref={mobileContainerRef}>
            
            {/* Background Dashed Line (Static Track) */}
            <div className="absolute left-[27px] md:left-[43px] top-4 bottom-12 w-0.5 border-l-2 border-dashed border-grey/20" />
            
            {/* SOLID GROWING LINE (Animated) */}
            <motion.div 
                className="absolute left-[27px] md:left-[43px] top-4 w-0.5 bg-primary origin-top"
                style={{ height: lineHeight }} 
            />

            <div className="space-y-12 pb-12">
            {steps.map((step, index) => (
                <div key={step.number} className="mobile-timeline-item relative flex items-start gap-6">
                
                {/* Icon Column */}
                <div className="flex-shrink-0 relative z-10 bg-white py-2">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
                        <step.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                </div>

                {/* Content Column */}
                <div className="flex-grow pt-1">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-primary tracking-widest uppercase">
                            Phase {step.number}
                        </span>
                        <span className="inline-block bg-[#F5F1E8] text-primary px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                            {step.duration}
                        </span>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-black mb-3">
                        {step.title}
                    </h3>
                    
                    <p className="text-grey text-base md:text-lg leading-relaxed">
                        {step.description}
                    </p>
                </div>
                </div>
            ))}
            </div>
        </div>

      </div>
    </section>
  );
};