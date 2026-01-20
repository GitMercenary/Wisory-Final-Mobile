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
  
  // Mobile Refs
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const totalSlides = slides.length;

    // --- DESKTOP LOGIC (Unchanged) ---
    mm.add("(min-width: 768px)", () => {
      if (!triggerRef.current || !containerRef.current) return;

      const images = imagesRef.current.filter(Boolean);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: containerRef.current,
          start: 'top top',
          end: `+=${totalSlides * 150}%`,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            let newIndex = Math.floor(self.progress * totalSlides);
            if (newIndex < 0) newIndex = 0;
            if (newIndex > totalSlides - 1) newIndex = totalSlides - 1;
            setActiveIndex((prev) => (prev !== newIndex ? newIndex : prev));
          }
        }
      });

      images.forEach((image, index) => {
        if (index === 0) {
          gsap.set(image, { yPercent: 0, zIndex: 1 });
        } else {
          gsap.set(image, { yPercent: 100, zIndex: index + 1 });
        }
      });

      slides.forEach((slide, index) => {
        if (index !== 0) {
          const slidePosition = index / totalSlides;
          tl.to(images[index], {
              yPercent: 0,
              ease: 'none',
              duration: 0.2,
            }, slidePosition);
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    });

    // --- MOBILE LOGIC (Single Card Transition) ---
    mm.add("(max-width: 767px)", () => {
      if (!mobileContainerRef.current) return;

      ScrollTrigger.create({
        trigger: mobileContainerRef.current,
        pin: true,
        start: 'top top',
        end: `+=${totalSlides * 100}%`,
        scrub: 1,
        onUpdate: (self) => {
          let newIndex = Math.floor(self.progress * totalSlides);
          if (newIndex < 0) newIndex = 0;
          if (newIndex > totalSlides - 1) newIndex = totalSlides - 1;
          setActiveIndex((prev) => (prev !== newIndex ? newIndex : prev));
        }
      });
    });

    return () => mm.revert();
  }, { scope: triggerRef, dependencies: [slides.length] });

  const currentNum = String(slides[activeIndex].id).padStart(2, '0');
  const totalNum = String(slides.length).padStart(2, '0');

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

      {/* --- DESKTOP VIEW (Unchanged) --- */}
      <div ref={triggerRef} className="hidden md:block relative">
        <div
          ref={containerRef}
          className="h-screen w-full relative overflow-hidden"
        >
          <div className="absolute left-8 lg:left-16 top-1/2 -translate-y-1/2 z-50 w-full max-w-md">
            <div
              className="w-full h-[520px] flex flex-col p-8 md:p-10 shadow-2xl rounded-[40px] transition-colors duration-500"
              style={{ backgroundColor: slides[activeIndex].bgColor }}
            >
              <div className="mb-auto">
                <div key={`header-${activeIndex}`} className="animate-blur-in">
                  <div className="text-[16px] font-bold text-white/70 mb-6 uppercase tracking-widest">
                    {currentNum} — {totalNum}
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      {React.createElement(slides[activeIndex].icon, {
                        className: 'w-6 h-6 text-white',
                      })}
                    </div>
                    <h2 className="text-[36px] font-heading font-bold text-[#F5F5DC] leading-tight">
                      {slides[activeIndex].title}
                    </h2>
                    <div className="text-white/80 font-medium text-[20px]">
                      {slides[activeIndex].subtitle}
                    </div>
                  </div>
                </div>
              </div>
              <div 
                key={`content-${activeIndex}`}
                className="flex flex-col mt-6 animate-blur-in"
                style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
              >
                <p className="text-[16px] text-white/90 leading-relaxed max-w-[95%] mb-5">
                  {slides[activeIndex].description}
                </p>
                <ul className="space-y-2">
                  {slides[activeIndex].features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="text-white/80 text-[14px] flex items-center">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
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
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- MOBILE VIEW: Single Pinned Card --- */}
      <div 
        ref={mobileContainerRef} 
        className="md:hidden w-full h-screen flex items-center justify-center bg-gray-50"
      >
        {/* Single Card Container */}
        <div 
            // CHANGE: Increased height from h-[75vh] to h-[80vh] for a lengthier card
            className="w-[90%] max-w-sm h-[80vh] bg-white rounded-[30px] overflow-hidden shadow-2xl flex flex-col relative"
        >
          
          {/* Top Half: Image + Icon */}
          <div className="relative h-[45%] w-full overflow-hidden">
             {/* Dynamic Image */}
            <img 
              key={`mob-img-${activeIndex}`}
              src={slides[activeIndex].image}
              alt={slides[activeIndex].title}
              className="w-full h-full object-cover animate-fade-in"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>

            {/* Icon in Top Right Corner */}
            <div className="absolute top-5 right-5 z-20 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-lg">
                {React.createElement(slides[activeIndex].icon, {
                  className: 'w-6 h-6 text-white',
                })}
            </div>
          </div>

          {/* Bottom Half: Content */}
          <div 
            // CHANGE: Increased padding from p-8 to p-10 for more breathing room
            className="h-[55%] w-full p-10 flex flex-col justify-center transition-colors duration-500"
            style={{ backgroundColor: slides[activeIndex].bgColor }}
          >
             <div key={`mob-txt-${activeIndex}`} className="flex flex-col animate-blur-in">
              {/* Number */}
              <div className="text-white/60 text-xs font-bold tracking-[0.2em] mb-4 uppercase">
                  {currentNum} — {totalNum}
              </div>
              
              {/* Title */}
              <h3 className="text-3xl font-heading font-bold text-white leading-tight mb-4">
                {slides[activeIndex].title}
              </h3>

              {/* Description */}
              <p className="text-white/90 text-[15px] leading-relaxed line-clamp-5">
                {slides[activeIndex].description}
              </p>
             </div>
          </div>
        </div>
      </div>
      
      {/* Required Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(1.05); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
        @keyframes blurIn {
          from { opacity: 0; filter: blur(5px); transform: translateY(10px); }
          to { opacity: 1; filter: blur(0); transform: translateY(0); }
        }
        .animate-blur-in {
          animation: blurIn 0.4s ease-out forwards;
        }
      `}</style>
    </>
  );
};