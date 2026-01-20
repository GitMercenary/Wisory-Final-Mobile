'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, Users2, Shield, FileCheck, DollarSign, Network } from 'lucide-react';

// Register plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// --- DATA ---
const services = [
  {
    title: 'Real Estate & Infrastructure',
    highlight: 'Infrastructure',
    description: 'Strategic site selection, facility design, and infrastructure setup to create optimal work environments aligned with your business objectives.',
    icon: Building2,
    image: '/img1.jpg',
    link: '/services/real-estate',
  },
  {
    title: 'HR & Talent',
    highlight: 'Talent',
    description: 'End-to-end talent acquisition, onboarding, and retention strategies to build high-performing teams that drive your business forward.',
    icon: Users2,
    image: '/img3.jpg',
    link: '/services/hr-talent',
  },
  {
    title: 'IT & Security',
    highlight: 'Security',
    description: 'Comprehensive IT infrastructure setup, cybersecurity protocols, and digital transformation initiatives for secure and efficient operations.',
    icon: Shield,
    image: '/img5.png',
    link: '/services/it-infrastructure',
  },
  {
    title: 'Compliance & Licensing',
    highlight: 'Compliance',
    description: 'Navigate complex regulatory landscapes with our expertise in legal compliance, licensing, and governance frameworks.',
    icon: FileCheck,
    image: '/img7.png',
    link: '/services/compliance',
  },
  {
    title: 'Finance & Automation',
    highlight: 'Automation',
    description: 'Financial planning, automation solutions, and operational efficiency tools to optimize your cost structure and maximize ROI.',
    icon: DollarSign,
    image: '/img1.jpg',
    link: '/services/finance-automation',
  },
  {
    title: 'Governance & Vendor Management',
    highlight: 'Governance',
    description: 'Establish robust governance frameworks and vendor management systems for sustainable operational excellence.',
    icon: Network,
    image: '/img3.jpg',
    link: '/services/governance',
  },
];

export const ServicesGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]); 
  const mobileCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!containerRef.current) return;

    const cards = cardsRef.current.filter((card): card is HTMLDivElement => card !== null);
    const mm = gsap.matchMedia();

    // --- DESKTOP LOGIC (Pinned Stack) ---
    mm.add("(min-width: 1024px)", () => {
      // Start cards further down to ensure they are hidden on short screens
      gsap.set(cards, { y: '180%', scale: 0.95, opacity: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${services.length * 100}%`, // Reduced scroll distance slightly for snappier feel
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      cards.forEach((card, index) => {
        const textElements = card.querySelectorAll('.reveal-text');
        const iconElement = card.querySelector('.reveal-icon');
        const cardTl = gsap.timeline();

        // Init state
        gsap.set(textElements, { autoAlpha: 0, y: 20, filter: 'blur(10px)' });
        if(iconElement) gsap.set(iconElement, { scale: 0, autoAlpha: 0 });

        // Slide Up
        cardTl.to(card, { y: '0%', scale: 1, duration: 1, ease: 'power2.out' });
        
        // Text Reveal
        cardTl.to(textElements, {
            autoAlpha: 1, filter: 'blur(0px)', y: 0, 
            duration: 0.4, stagger: 0.05, ease: 'power2.out'
        }, "-=0.6");

        // Icon Pop
        if (iconElement) {
            cardTl.to(iconElement, {
                scale: 1, autoAlpha: 1, duration: 0.5, ease: 'back.out(1.7)'
            }, "-=0.8");
        }

        tl.add(cardTl, index * 0.8);
      });
      
      tl.to({}, { duration: 0.5 });
    });

    // --- MOBILE LOGIC ---
    mm.add("(max-width: 1023px)", () => {
        const mobileCards = mobileCardsRef.current.filter((card): card is HTMLDivElement => card !== null);

        mobileCards.forEach((card, index) => {
            const textElements = card.querySelectorAll('.mobile-reveal-text');

            gsap.set(textElements, { autoAlpha: 0.2, filter: 'blur(12px)', y: 10 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%", 
                    end: "bottom 50%", 
                    toggleActions: "play reverse play reverse", 
                }
            });

            tl.to(textElements, {
                autoAlpha: 1, filter: 'blur(0px)', y: 0,
                duration: 1.2, stagger: 0.1, ease: "power2.out",
                delay: index === 1 ? 0.5 : 0 
            });
        });
    });

  }, { scope: containerRef });

  return (
    <section className="relative w-full bg-[#F5F1E8]">

      {/* === DESKTOP PINNED LAYOUT === */}
      <div ref={containerRef} className="hidden lg:flex relative w-full h-screen overflow-hidden flex-col items-center justify-center">
        
        {/* Header - Pinned at Top */}
        <div className="absolute top-0 left-0 w-full pt-20 md:pt-24 px-4 z-0 flex flex-col items-center">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-medium text-sm md:text-base tracking-wider uppercase mb-4">
              Our Expertise
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black mb-6">
              Comprehensive Service Offerings
            </h2>
          </motion.div>
        </div>

        {/* Card Stack - Absolute Center */}
        <div className="absolute inset-0 w-full h-full z-10 pointer-events-none flex items-center justify-center">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                ref={(el) => { if (el) cardsRef.current[index] = el; }}
                className="absolute w-full max-w-6xl px-4 pointer-events-auto flex justify-center"
                style={{ zIndex: 10 + index }}
              >
                {/* FIX APPLIED HERE:
                   - Changed lg:h-[600px] to lg:h-[500px]
                   - Added max-h-[65vh] (Crucial for 1366x768 screens to leave room for header)
                   - Restored xl:h-[600px] for larger monitors
                */}
                <Link
                  href={service.link}
                  className="grid grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl bg-white w-full h-[450px] lg:h-[500px] xl:h-[600px] max-h-[65vh] transition-transform hover:scale-[1.02] cursor-pointer"
                >
                  
                  {/* Left: Image */}
                  <div className="relative h-full bg-gray-900">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover opacity-80"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="reveal-icon w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shrink-0">
                        <Icon className="w-10 h-10 lg:w-12 lg:h-12 text-white shrink-0" />
                      </div>
                    </div>
                  </div>

                  {/* Right: Content */}
                  {/* Removed 'justify-center' to match About.tsx top-alignment */}
                  <div className="h-full p-8 lg:p-12 flex flex-col bg-[#f02d31]">
                    <div className="mb-6 lg:mb-8 reveal-text">
                      <span className="text-sm font-medium text-white/60">
                        {String(index + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="flex flex-col reveal-text">
                      <h3 className="text-2xl lg:text-4xl xl:text-5xl font-heading font-bold mb-4 lg:mb-6 leading-tight text-white">
                        {service.title.split(service.highlight)[0]}
                        <span className="text-[#C9A96E]">{service.highlight}</span>
                        {service.title.split(service.highlight)[1]}
                      </h3>

                      <p className="text-sm lg:text-base xl:text-lg leading-relaxed text-white/90">
                        {service.description}
                      </p>
                    </div>
                  </div>

                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* === MOBILE LAYOUT === */}
      <div className="lg:hidden pb-32 px-4 space-y-6 bg-[#F5F1E8]">
        <div className="pt-20 pb-10 text-center">
          <p className="text-primary text-sm font-bold uppercase mb-2">Our Expertise</p>
          <h2 className="text-3xl font-bold">Service Offerings</h2>
        </div>
        
        <div className="flex flex-col w-full items-center">
          {services.map((service, index) => {
             const Icon = service.icon;
             return (
            <div
              key={service.title}
              ref={(el) => { if (el) mobileCardsRef.current[index] = el; }}
              className="sticky w-full max-w-md"
              style={{
                top: '100px',
                marginBottom: '40px',
                zIndex: index + 1
              }}
            >
              <Link
                href={service.link}
                className="bg-white rounded-2xl overflow-hidden shadow-xl block transition-transform hover:scale-[1.02] cursor-pointer"
              >
                <div className="h-48 overflow-hidden relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                      <Icon className="w-8 h-8 text-white" />
                      </div>
                  </div>
                </div>

                <div className="p-6 bg-[#f02d31]">
                  <div className="mb-3 mobile-reveal-text">
                     <span className="text-xs font-medium text-white/60 tracking-wider">
                       {String(index + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                     </span>
                  </div>
                  <div className="mobile-reveal-text">
                     <h3 className="text-2xl font-bold mb-3 text-white leading-tight">
                      {service.title.split(service.highlight)[0]}
                      <span className="text-[#C9A96E]">{service.highlight}</span>
                      {service.title.split(service.highlight)[1]}
                     </h3>
                     <p className="text-white/90 text-sm leading-relaxed">
                      {service.description}
                     </p>
                  </div>
                </div>
              </Link>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
};