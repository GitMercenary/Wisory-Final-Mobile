'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// --- DATA ---
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

// --- MAIN COMPONENT ---
export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]); // Desktop refs
  const mobileCardsRef = useRef<(HTMLDivElement | null)[]>([]); // Mobile refs

  useGSAP(() => {
    if (!containerRef.current) return;

    const cards = cardsRef.current.filter(Boolean);
    const mm = gsap.matchMedia();

    // --- DESKTOP LOGIC (Animation - UNCHANGED) ---
    mm.add("(min-width: 1024px)", () => {
      gsap.set(cards, { y: '150%', scale: 0.95, opacity: 1 });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${reasons.length * 120}%`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      cards.forEach((card, index) => {
        const stats = card.querySelectorAll('.stat-number');
        const textElements = card.querySelectorAll('.reveal-text');
        const cardTl = gsap.timeline();

        gsap.set(textElements, { autoAlpha: 0, y: 20, filter: 'blur(10px)' });
        cardTl.to(card, { y: '0%', scale: 1, duration: 1, ease: 'power2.out' });
        
        cardTl.to(textElements, {
            autoAlpha: 1, filter: 'blur(0px)', y: 0, 
            duration: 0.4, stagger: 0.05, ease: 'power2.out'
        }, "-=0.7");

        stats.forEach((stat) => {
          const endValue = parseInt(stat.getAttribute('data-value') || '0', 10);
          const suffix = stat.getAttribute('data-suffix') || '';
          cardTl.fromTo(stat,
            { textContent: 0 },
            {
              textContent: endValue, duration: 1, ease: 'power1.out', snap: { textContent: 1 },
              onUpdate: function () {
                const el = this.targets()[0] as HTMLElement;
                el.textContent = Math.ceil(Number(this.targets()[0].textContent)) + suffix;
              }
            }, "<"
          );
        });
        tl.add(cardTl, index * 0.8);
      });
      tl.to({}, { duration: 0.5 });
    });

    // --- MOBILE LOGIC (With Blur Manipulation & Delay) ---
    mm.add("(max-width: 1023px)", () => {
        const mobileCards = mobileCardsRef.current.filter(Boolean);

        // Updated to include 'index' to target the 2nd card
        mobileCards.forEach((card, index) => {
            const stats = card.querySelectorAll('.mobile-stat-number');
            const textElements = card.querySelectorAll('.mobile-reveal-text');

            // --- 1. SETUP: Change initial blur intensity here ---
            gsap.set(textElements, { 
                autoAlpha: 0.2, 
                filter: 'blur(12px)', // Increased blur for stronger effect (was 8px)
                y: 10 
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%", 
                    end: "bottom 50%", 
                    toggleActions: "play reverse play reverse", 
                }
            });

            // --- 2. ANIMATION: Manipulate speed and delay here ---
            tl.to(textElements, {
                autoAlpha: 1,
                filter: 'blur(0px)', // Always ends at 0px to become clear
                y: 0,
                duration: 1.2, // Slower duration = smoother blur reveal (was 0.5)
                stagger: 0.1,
                ease: "power2.out",
                // THIS ADDS THE DELAY ONLY FOR THE 2ND CARD (Index 1)
                delay: index === 1 ? 0.5 : 0 
            });

            stats.forEach((stat) => {
                const endValue = parseInt(stat.getAttribute('data-value') || '0', 10);
                const suffix = stat.getAttribute('data-suffix') || '';

                tl.fromTo(stat, 
                    { textContent: 0 },
                    {
                        textContent: endValue,
                        duration: 1.5,
                        ease: "power2.out",
                        snap: { textContent: 1 },
                        onUpdate: function() {
                            const el = this.targets()[0] as HTMLElement;
                            el.textContent = Math.ceil(Number(this.targets()[0].textContent)) + suffix;
                        }
                    }, 
                    "<" // Starts exactly when the text reveal starts (respecting the delay above)
                );
            });
        });
    });

  }, { scope: containerRef });

  return (
    <section className="relative w-full bg-[#F5F1E8]">

      {/* PINNED CONTAINER (Desktop - UNCHANGED) */}
      <div ref={containerRef} className="hidden lg:flex relative w-full h-screen overflow-hidden flex-col items-center justify-center">
        <div className="absolute top-0 left-0 w-full pt-20 md:pt-24 px-4 z-0 flex flex-col items-center">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-medium text-sm md:text-base tracking-wider uppercase mb-4">Why Wisory Global</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black mb-6">Your Trusted Partner for India Capability Centers</h2>
          </motion.div>
        </div>

        <div className="absolute inset-0 w-full h-full z-10 pointer-events-none flex items-center justify-center">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              ref={(el) => { if (el) cardsRef.current[index] = el; }}
              className="absolute w-full max-w-6xl px-4 pointer-events-auto flex justify-center"
              style={{ zIndex: 10 + index }}
            >
              <div className="grid grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl bg-white w-full h-[550px] lg:h-[600px] max-h-[80vh]">
                <div className="relative h-full">
                  <img src={reason.image} alt={reason.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="h-full p-8 lg:p-10 flex flex-col bg-[#f02d31]">
                  <div className="mb-4 lg:mb-6 reveal-text">
                    <span className="text-xs lg:text-sm font-medium text-white/60">
                      {String(index + 1).padStart(2, '0')} / {String(reasons.length).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-6 pb-6 border-b border-white/10 mb-6 reveal-text">
                    {reason.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-left">
                        <div className="text-2xl lg:text-4xl font-heading font-bold mb-1 text-white flex items-center">
                          <span className="stat-number" data-value={stat.value} data-suffix={stat.suffix}>0{stat.suffix}</span>
                        </div>
                        <p className="text-xs lg:text-sm text-white/70">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col reveal-text">
                    <h3 className="text-2xl lg:text-4xl font-heading font-bold mb-4 lg:mb-6 leading-tight text-white">
                      {reason.title.split(reason.highlight)[0]}
                      <span className="text-[#C9A96E]">{reason.highlight}</span>
                      {reason.title.split(reason.highlight)[1]}
                    </h3>
                    <p className="text-sm lg:text-lg leading-relaxed text-white/90 line-clamp-4 lg:line-clamp-none">{reason.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === MOBILE/TABLET FALLBACK (GSAP Controlled) === */}
      <div className="lg:hidden pb-32 px-4 space-y-6 bg-[#F5F1E8]">
        <div className="pt-20 pb-10 text-center">
          <p className="text-primary text-sm font-bold uppercase mb-2">Why Wisory Global</p>
          <h2 className="text-3xl font-bold">Your Trusted Partner</h2>
        </div>
        
        <div className="flex flex-col w-full items-center">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              ref={(el) => { if (el) mobileCardsRef.current[index] = el; }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl sticky w-full max-w-md"
              style={{ 
                top: '100px',        
                marginBottom: '40px', 
                zIndex: index + 1 
              }}
            >
              <div className="h-48 overflow-hidden">
                <img src={reason.image} alt={reason.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="p-6 bg-[#f02d31]">
                
                {/* 1. Number */}
                <div className="mb-3 mobile-reveal-text">
                   <span className="text-xs font-medium text-white/60 tracking-wider">
                     {String(index + 1).padStart(2, '0')} / {String(reasons.length).padStart(2, '0')}
                   </span>
                </div>

                {/* 2. Stats */}
                <div className="grid grid-cols-2 gap-3 pb-5 border-b border-white/10 mb-5 mobile-reveal-text">
                  {reason.stats.map((stat, i) => (
                    <div key={i} className="text-left">
                      <div className="text-xl font-bold text-white block">
                        <span 
                            className="mobile-stat-number" 
                            data-value={stat.value} 
                            data-suffix={stat.suffix}
                        >
                            0{stat.suffix}
                        </span>
                      </div>
                      <p className="text-[10px] text-white/80">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* 3. Title & Desc */}
                <div className="mobile-reveal-text">
                   <h3 className="text-xl font-bold mb-3 text-white leading-tight">
                    {reason.title}
                   </h3>
                   <p className="text-white/90 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};