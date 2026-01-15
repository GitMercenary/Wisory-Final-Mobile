'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, Users2, Shield, FileCheck, DollarSign, Network } from 'lucide-react';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: 'Real Estate & Infrastructure',
    highlight: 'Infrastructure',
    description: 'Strategic site selection, facility design, and infrastructure setup to create optimal work environments aligned with your business objectives.',
    icon: Building2,
    image: '/img1.jpg',
  },
  {
    title: 'HR & Talent',
    highlight: 'Talent',
    description: 'End-to-end talent acquisition, onboarding, and retention strategies to build high-performing teams that drive your business forward.',
    icon: Users2,
    image: '/img3.jpg',
  },
  {
    title: 'IT & Security',
    highlight: 'Security',
    description: 'Comprehensive IT infrastructure setup, cybersecurity protocols, and digital transformation initiatives for secure and efficient operations.',
    icon: Shield,
    image: '/img5.png',
  },
  {
    title: 'Compliance & Licensing',
    highlight: 'Compliance',
    description: 'Navigate complex regulatory landscapes with our expertise in legal compliance, licensing, and governance frameworks.',
    icon: FileCheck,
    image: '/img7.png',
  },
  {
    title: 'Finance & Automation',
    highlight: 'Automation',
    description: 'Financial planning, automation solutions, and operational efficiency tools to optimize your cost structure and maximize ROI.',
    icon: DollarSign,
    image: '/img1.jpg',
  },
  {
    title: 'Governance & Vendor Management',
    highlight: 'Governance',
    description: 'Establish robust governance frameworks and vendor management systems for sustainable operational excellence.',
    icon: Network,
    image: '/img3.jpg',
  },
];

export const ServicesGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Desktop stacking scroll animation
      if (window.innerWidth >= 1024) {
        const cards = cardsRef.current.filter(Boolean);

        // Set initial state - first card visible, others below viewport
        cards.forEach((card, index) => {
          gsap.set(card, {
            zIndex: 10 + index,
            y: index === 0 ? '0%' : '100vh', // First card at 0, others below screen
          });
        });

        // Create a main timeline for all cards with snap
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
            // Add snapping for that 'gravity' feel
            snap: {
              snapTo: 1 / (cards.length - 1), // Snap to each card position
              duration: { min: 0.5, max: 0.8 },
              delay: 0.1,
              ease: "power2.inOut"
            }
          }
        });

        // Animate each card sliding up from bottom (except first)
        cards.forEach((card, index) => {
          if (index === 0) return; // First card is already visible

          tl.fromTo(card,
            {
              y: '100vh', // Start below the screen
            },
            {
              y: '0%', // Slide to the center/top
              ease: 'none',
            },
            index * 0.5 // Stagger the start times in the timeline
          );
        });
      }
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="services-grid" className="relative overflow-hidden">
      {/* Header Section */}
      <div className="bg-[#F5F1E8] container-custom py-20">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-primary font-medium text-sm md:text-base tracking-wider uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Expertise
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black mb-6">
            Comprehensive Service Offerings
          </h2>
        </motion.div>
      </div>

      {/* Stacking Cards Section - Desktop */}
      <div ref={containerRef} className="hidden lg:block relative" style={{ height: `${services.length * 100}vh`, backgroundColor: '#F5F1E8' }}>
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="absolute w-full max-w-6xl h-[80vh] px-4"
                style={{
                  zIndex: 10 + index,
                  transform: index === 0 ? 'translateY(0%)' : 'translateY(100vh)'
                }}
              >
                <div className="grid grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl bg-white h-full">
                  {/* Left - Image */}
                  <div className="relative h-full">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Darker overlay on image */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* Icon overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Right - Content */}
                  <div className="p-12 flex flex-col justify-center" style={{ backgroundColor: '#f02d31' }}>
                    <div className="mb-8">
                      <span className="text-sm font-medium" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                        {String(index + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="text-4xl font-heading font-bold mb-6 leading-tight" style={{ color: '#ffffff' }}>
                      {service.title.split(service.highlight)[0]}
                      <span className="text-[#C9A96E]">{service.highlight}</span>
                      {service.title.split(service.highlight)[1]}
                    </h3>

                    <p className="text-lg leading-relaxed" style={{ color: '#ffffff', opacity: 0.9 }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile/Tablet - Stacking Cards */}
      <div className="lg:hidden relative" style={{ backgroundColor: '#F5F1E8' }}>
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              style={{
                height: index === services.length - 1 ? '100vh' : '200vh', // 100vh card + 100vh scroll space
                position: 'relative',
              }}
            >
              <div
                className="sticky top-0 h-screen w-full flex items-center justify-center px-4"
                style={{
                  zIndex: services.length - index, // Reverse z-index so later cards appear on top
                }}
              >
                <div
                  className="bg-white rounded-2xl overflow-hidden shadow-2xl"
                >
                {/* Image */}
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />

                  {/* Icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8" style={{ backgroundColor: '#f02d31' }}>
                  <div className="mb-4">
                    <span className="text-sm font-medium" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                      {String(index + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4" style={{ color: '#ffffff' }}>
                    {service.title.split(service.highlight)[0]}
                    <span className="text-[#C9A96E]">{service.highlight}</span>
                    {service.title.split(service.highlight)[1]}
                  </h3>

                  <p className="leading-relaxed" style={{ color: '#ffffff', opacity: 0.9 }}>
                    {service.description}
                  </p>
                </div>
              </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
