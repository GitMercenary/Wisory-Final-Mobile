'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Users2, Target, TrendingUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const reasons = [
  {
    title: 'Deep Market Expertise',
    highlight: 'Expertise',
    description: 'With deep expertise in the Indian market and global best practices, we stand at the intersection of strategic vision and operational excellence.',
    image: '/img1.jpg',
    stats: [
      { value: 50, suffix: '+', label: 'Capability Centers Built' },
      { value: 200, suffix: '+', label: 'Enterprise Clients' },
    ],
  },
  {
    title: 'Proven Track Record',
    highlight: 'Track Record',
    description: 'We don\'t just build capability centers—we create innovation engines that drive sustained competitive advantage for global enterprises.',
    image: '/img3.jpg',
    stats: [
      { value: 5000, suffix: '+', label: 'Professionals Placed' },
      { value: 98, suffix: '%', label: 'Client Retention Rate' },
    ],
  },
  {
    title: 'End-to-End Support',
    highlight: 'Support',
    description: 'Our proven methodology combines local market knowledge with international standards to deliver centers that exceed expectations.',
    image: '/img5.png',
    stats: [
      { value: 50, suffix: '+', label: 'Capability Centers Built' },
      { value: 200, suffix: '+', label: 'Enterprise Clients' },
    ],
  },
  {
    title: 'Measurable Outcomes',
    highlight: 'Outcomes',
    description: 'From Fortune 500 companies to emerging tech leaders, our clients trust us to transform their India strategy into measurable business outcomes.',
    image: '/img7.png',
    stats: [
      { value: 5000, suffix: '+', label: 'Professionals Placed' },
      { value: 98, suffix: '%', label: 'Client Retention Rate' },
    ],
  },
];

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          let startTime: number | null = null;
          const startValue = 0;

          const animate = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const progress = (currentTime - startTime) / duration;

            if (progress < 1) {
              setCount(Math.floor(startValue + (end - startValue) * progress));
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Desktop stacking scroll animation
      if (window.innerWidth >= 1024) {
        const cards = cardsRef.current.filter(Boolean);

        // Pin the container while cards are revealing
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: '.sticky-cards-container',
          pinSpacing: false,
        });

        // Set initial z-index for proper stacking
        cards.forEach((card, index) => {
          gsap.set(card, {
            zIndex: 10 + index,
            y: '100%',
            scale: 0.95,
            opacity: 0
          });
        });

        // Animate each card entrance - cards stay in center
        cards.forEach((card, index) => {
          gsap.to(card, {
            y: '0%', // All cards come to center and stay there
            scale: 1,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: `top+=${index * 20}% top`,
              end: `top+=${index * 20 + 15}% top`,
              scrub: 1,
            },
          });
        });
      }
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative overflow-hidden">
      {/* Header Section - Light Background */}
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
            Why Wisory Global
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black mb-6">
            Your Trusted Partner for India Capability Centers
          </h2>
        </motion.div>
      </div>

      {/* Stacking Cards Section - Desktop - Light Background */}
      <div ref={containerRef} className="hidden lg:block relative" style={{ height: `300vh`, backgroundColor: '#F5F1E8' }}>
        <div className="sticky-cards-container sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[95vw] px-4"
              style={{ zIndex: 10 + index }}
            >
                <div className="grid grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl bg-white">
                  {/* Left - Image */}
                  <div className="relative h-[600px]">
                    <img
                      src={reason.image}
                      alt={reason.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Darker overlay on image */}
                    <div className="absolute inset-0 bg-black/40" />
                  </div>

                  {/* Right - Content */}
                  <div className="p-12 flex flex-col justify-center" style={{ backgroundColor: '#f02d31' }}>
                    <div className="mb-8">
                      <span className="text-sm font-medium" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                        {String(index + 1).padStart(2, '0')} / {String(reasons.length).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="text-4xl font-heading font-bold mb-6 leading-tight" style={{ color: '#ffffff' }}>
                      {reason.title.split(reason.highlight)[0]}
                      <span className="text-[#C9A96E]">{reason.highlight}</span>
                      {reason.title.split(reason.highlight)[1]}
                    </h3>

                    <p className="text-lg leading-relaxed mb-8" style={{ color: '#ffffff', opacity: 0.9 }}>
                      {reason.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-6 mt-auto">
                      {reason.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className="text-3xl font-heading font-bold mb-1" style={{ color: '#ffffff' }}>
                            <Counter end={stat.value} suffix={stat.suffix} />
                          </div>
                          <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      {/* Mobile/Tablet - Stacking Cards */}
      <div className="lg:hidden pb-20" style={{ backgroundColor: '#F5F1E8' }}>
        <div className="space-y-8 px-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="bg-white rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8" style={{ backgroundColor: '#f02d31' }}>
                <div className="mb-4">
                  <span className="text-sm font-medium" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                    {String(index + 1).padStart(2, '0')} / {String(reasons.length).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4" style={{ color: '#ffffff' }}>
                  {reason.title.split(reason.highlight)[0]}
                  <span className="text-[#C9A96E]">{reason.highlight}</span>
                  {reason.title.split(reason.highlight)[1]}
                </h3>

                <p className="leading-relaxed mb-6" style={{ color: '#ffffff', opacity: 0.9 }}>
                  {reason.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {reason.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-2xl md:text-3xl font-heading font-bold mb-1" style={{ color: '#ffffff' }}>
                        <Counter end={stat.value} suffix={stat.suffix} />
                      </div>
                      <p className="text-xs md:text-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ========== OLD ABOUT CODE - PRESERVED FOR REVERSION ==========

[Previous code preserved here...]

========== END OLD ABOUT CODE ========== */
