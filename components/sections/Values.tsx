'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Lightbulb, Award, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const values = [
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We build trust through transparency, ethical practices, and unwavering commitment to doing what\'s right for our clients and their stakeholders.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We pioneer bold solutions, challenge conventional thinking, and continuously push boundaries to deliver cutting-edge capability centers.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We succeed when our clients succeed. Every engagement is built on collaborative relationships that drive mutual growth and shared victories.',
  },
  {
    icon: Award,
    title: 'Expertise',
    description: 'Deep India market knowledge meets global best practices. Our team brings decades of combined experience in building world-class capability centers.',
  },
  {
    icon: Zap,
    title: 'Agility',
    description: 'We move fast, adapt quickly, and scale efficiently. In a rapidly evolving landscape, our agile approach ensures you stay ahead of the curve.',
  },
];

export const Values: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !backgroundRef.current) return;

    const ctx = gsap.context(() => {
      // Background zoom effect on scroll
      gsap.to(backgroundRef.current, {
        scale: 1.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Animate each value card as it comes into view
      values.forEach((_, index) => {
        const card = document.getElementById(`value-card-${index}`);
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'top 40%',
              scrub: 1,
            },
            opacity: 0,
            x: 100,
          });
        }
      });
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="values" className="relative overflow-hidden min-h-screen" ref={containerRef}>
      {/* Fixed Background with Zoom Effect */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/values-bg.png)',
          transformOrigin: 'center center',
        }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 py-20 lg:py-32">
        {/* Section Header */}
        <div className="container-custom mb-20">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-white/80 font-medium text-sm md:text-base tracking-wider uppercase mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Our Core Values
            </motion.p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Principles That Guide Us
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              These five pillars define how we work, make decisions, and create value for our clients.
            </p>
          </motion.div>
        </div>

        {/* Values Cards - Appearing on scroll */}
        <div className="container-custom space-y-16 lg:space-y-24">
          {values.map((value, index) => (
            <div
              key={value.title}
              id={`value-card-${index}`}
              className="flex justify-end"
            >
              <motion.div
                className="max-w-xl lg:max-w-2xl"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative backdrop-blur-sm bg-white/10 rounded-2xl p-8 lg:p-12 border border-white/20">
                  {/* Icon with outline style */}
                  <div className="mb-6">
                    <value.icon
                      className="w-16 h-16 lg:w-20 lg:h-20 text-white"
                      strokeWidth={1}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-4 lg:mb-6">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base lg:text-lg text-white/90 leading-relaxed">
                    {value.description}
                  </p>

                  {/* Decorative line */}
                  <div className="mt-6 w-20 h-1 bg-white/40 rounded-full" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom spacing */}
        <div className="h-32" />
      </div>
    </section>
  );
};

/* ========== OLD VALUES CODE - PRESERVED FOR REVERSION ==========

'use client';

import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ScrollReveal } from '../common/ScrollReveal';

const values = [
  {
    number: '01',
    title: 'Integrity',
    description: 'We build trust through transparency, ethical practices, and unwavering commitment to doing what\'s right for our clients and their stakeholders.',
    color: '#EF3A33',
  },
  {
    number: '02',
    title: 'Innovation',
    description: 'We pioneer bold solutions, challenge conventional thinking, and continuously push boundaries to deliver cutting-edge capability centers.',
    color: '#C9A96E',
  },
  {
    number: '03',
    title: 'Partnership',
    description: 'We succeed when our clients succeed. Every engagement is built on collaborative relationships that drive mutual growth and shared victories.',
    color: '#EF3A33',
  },
  {
    number: '04',
    title: 'Expertise',
    description: 'Deep India market knowledge meets global best practices. Our team brings decades of combined experience in building world-class capability centers.',
    color: '#C9A96E',
  },
  {
    number: '05',
    title: 'Agility',
    description: 'We move fast, adapt quickly, and scale efficiently. In a rapidly evolving landscape, our agile approach ensures you stay ahead of the curve.',
    color: '#EF3A33',
  },
];

export const Values: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section id="values" className="section-padding relative overflow-hidden" ref={containerRef}>
      {/* Background Image *\/}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/values-bg.png)' }}
      />
      {/* Overlay for better text readability *\/}
      <div className="absolute inset-0 bg-white/70" />

      <div className="container-custom relative z-10">
        {/* Section Header *\/}
        <ScrollReveal>
          <div className="text-center mb-20">
            <motion.p
              className="text-primary font-medium text-sm md:text-base tracking-wider uppercase mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Our Core Values
            </motion.p>
            <h2 className="text-4xl md:text-5xl lg:text-h2 font-heading font-bold text-black mb-6">
              Principles That Guide Us
            </h2>
            <p className="text-lg text-grey max-w-3xl mx-auto">
              These five pillars define how we work, make decisions, and create value for our clients.
            </p>
          </div>
        </ScrollReveal>

        {/* Values Grid - Responsive approach *\/}
        <div className="space-y-12 md:space-y-16">
          {values.map((value, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={value.number}
                className="relative"
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Number - Left for even, right for odd *\/}
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span
                        className="text-[200px] md:text-[250px] font-heading font-bold opacity-10"
                        style={{ color: value.color }}
                      >
                        {value.number}
                      </span>
                      <motion.div
                        className="absolute inset-0 blur-3xl opacity-20"
                        style={{ backgroundColor: value.color }}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.2, 0.3, 0.2],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Content - Right for even, left for odd *\/}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <motion.div
                      className="relative p-8 bg-vapor rounded-lg border-l-4"
                      style={{ borderColor: value.color }}
                      whileHover={{ x: isEven ? 10 : -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-3xl md:text-4xl font-heading font-bold text-black mb-4">
                        {value.title}
                      </h3>
                      <p className="text-lg text-grey leading-relaxed">
                        {value.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

========== END OLD VALUES CODE ========== */
