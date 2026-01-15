'use client';

import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface Slide {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  bgColor: string;
}

interface PinnedSectionPlainProps {
  slides: Slide[];
  sectionTitle?: string;
  sectionSubtitle?: string;
  sectionDescription?: string;
}

export const PinnedSectionPlain: React.FC<PinnedSectionPlainProps> = ({
  slides,
  sectionTitle = "Our Solutions",
  sectionSubtitle = "Comprehensive Capability Center Services",
  sectionDescription = "From strategic planning to operational excellence, we deliver integrated solutions that transform your India capability center into a competitive advantage."
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement[]>([]);
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const mobileCardsRef = useRef<HTMLDivElement[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (!triggerRef.current || !containerRef.current) return;

      const images = imagesRef.current.filter(Boolean);

      // NO BUBBLE ANIMATION - Section is fully visible immediately

      // Main timeline with proper synchronization
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: containerRef.current,
          start: 'top top',
          end: `+=${slides.length * 150}%`, // INCREASED FOR FRICTION
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      // Set initial state - first image visible, others below
      images.forEach((image, index) => {
        if (index === 0) {
          gsap.set(image, { yPercent: 0, zIndex: 1 });
        } else {
          gsap.set(image, { yPercent: 100, zIndex: index + 1 });
        }
      });

      // Build timeline with proper callbacks for text sync
      slides.forEach((slide, index) => {
        if (index === 0) {
          // First slide - set initial state and update text
          tl.call(() => setActiveIndex(0), null, 0);
        } else {
          // Calculate when this slide should appear
          // Spread animations evenly across timeline
          const slidePosition = index / slides.length;

          // Add text update callback EXACTLY when image starts sliding
          tl.call(() => setActiveIndex(index), null, slidePosition);

          // Animate the image sliding up from bottom (100%) to top (0%)
          tl.to(
            images[index],
            {
              yPercent: 0,
              ease: 'none',
              duration: 0.2, // Relative duration in timeline
            },
            slidePosition
          );
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    });

    // Mobile stacking animation - cards only, not background
    mm.add("(max-width: 767px)", () => {
      if (!mobileContainerRef.current) return;

      // No GSAP needed - CSS sticky positioning and z-index handle everything

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    });

    return () => mm.revert();
  }, { scope: triggerRef, dependencies: [slides.length] });

  return (
    <>
      {/* Section Header */}
      <div className="py-16 lg:py-24 bg-white">
        <div className="container-custom text-center">
          <p className="text-primary font-medium text-sm md:text-base tracking-wider uppercase mb-4">
            {sectionTitle}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black mb-6">
            {sectionSubtitle}
          </h2>
          <p className="text-lg text-grey max-w-3xl mx-auto">
            {sectionDescription}
          </p>
        </div>
      </div>

      {/* Desktop: Vertical Parallax Stacking WITHOUT Bubble Pop */}
      <div ref={triggerRef} className="hidden md:block relative">
        <div
          ref={containerRef}
          className="h-screen w-full relative overflow-hidden"
        >
          {/* Floating Text Card - Left Side - Higher Z-Index */}
          <div className="absolute left-8 lg:left-16 top-1/2 -translate-y-1/2 z-50 w-full max-w-md">
            <div
              className="rounded-3xl p-8 lg:p-10 shadow-2xl backdrop-blur-sm transition-colors duration-500"
              style={{ backgroundColor: slides[activeIndex].bgColor }}
            >
              {/* Counter */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-white/80 font-semibold text-base">
                  {String(slides[activeIndex].id).padStart(2, '0')}
                </span>
                <span className="text-white/60">—</span>
                <span className="text-white/60 text-sm">
                  {String(slides.length).padStart(2, '0')}
                </span>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-6">
                {React.createElement(slides[activeIndex].icon, {
                  className: 'w-7 h-7 text-white',
                })}
              </div>

              {/* Title - Animated */}
              <h3
                key={`title-${activeIndex}`}
                className="text-3xl lg:text-4xl font-heading font-bold text-white mb-3 leading-tight animate-fadeIn"
              >
                {slides[activeIndex].title}
              </h3>

              {/* Subtitle */}
              <p
                key={`subtitle-${activeIndex}`}
                className="text-xl text-white/70 mb-4 font-medium animate-fadeIn"
                style={{ animationDelay: '0.1s' }}
              >
                {slides[activeIndex].subtitle}
              </p>

              {/* Description */}
              <p
                key={`desc-${activeIndex}`}
                className="text-white/90 mb-6 leading-relaxed animate-fadeIn"
                style={{ animationDelay: '0.2s' }}
              >
                {slides[activeIndex].description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {slides[activeIndex].features.map((feature, idx) => (
                  <li
                    key={`${activeIndex}-feature-${idx}`}
                    className="flex items-start animate-fadeIn"
                    style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
                  >
                    <svg
                      className="w-5 h-5 text-white mt-0.5 mr-3 flex-shrink-0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-white/95 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image Stack - Right Side - Lower Z-Index */}
          <div className="absolute inset-0 z-10">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                ref={(el) => {
                  if (el) imagesRef.current[index] = el;
                }}
                className="absolute inset-0 w-full h-full"
                style={{
                  transform: index === 0 ? 'translateY(0%)' : 'translateY(100%)',
                  zIndex: index + 1,
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile/Tablet: Stacking Parallax */}
      <div ref={mobileContainerRef} className="md:hidden relative bg-white">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            style={{
              height: index === slides.length - 1 ? '100vh' : '200vh', // 100vh card + 100vh scroll space
              position: 'relative',
            }}
          >
            <div
              ref={(el) => {
                if (el) mobileCardsRef.current[index] = el;
              }}
              className="sticky top-0 h-screen w-full flex items-center justify-center px-4"
              style={{
                zIndex: slides.length - index, // Reverse z-index so later cards appear on top
              }}
            >
              <div
                className="rounded-2xl overflow-hidden shadow-2xl bg-white"
              >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6" style={{ backgroundColor: slide.bgColor }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <slide.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white/80 font-medium text-sm">
                    {String(slide.id).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-2xl font-heading font-bold text-white mb-2">
                  {slide.title}
                </h3>
                <p className="text-lg text-white/70 mb-4 font-medium">
                  {slide.subtitle}
                </p>
                <p className="text-white/90 mb-6 leading-relaxed">
                  {slide.description}
                </p>

                <ul className="space-y-3">
                  {slide.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-white mt-0.5 mr-2 flex-shrink-0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-white/90 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
};
