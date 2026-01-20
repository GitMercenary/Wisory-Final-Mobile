'use client';

import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
}

const slides: Slide[] = [
  { id: 1, title: "Strategic Planning", description: "We help you define the vision, scope, and roadmap for your India capability center aligned with global business objectives.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80" },
  { id: 2, title: "Talent Acquisition", description: "Accelerate growth while maintaining quality through proven methodologies and best practices.", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80" },
  { id: 3, title: "Operations Excellence", description: "Continuous advisory and operational support to ensure sustained success and competitive advantage.", image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1600&q=80" },
  { id: 4, title: "Technology Integration", description: "Digital transformation and modernization of your legacy systems for better performance.", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80" },
  { id: 5, title: "Risk Management", description: "Ensuring compliance and governance across all operational verticals.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80" }
];

const PinnedSectionWithBubble = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const [activeIndex, setActiveIndex] = useState(0);

  const lastIndex = useRef(0);

  useEffect(() => {
    imagesRef.current = imagesRef.current.slice(0, slides.length);
  }, []);

  useGSAP(() => {
    if (!containerRef.current || !wrapperRef.current) return;

    const ctx = gsap.context(() => {
      // GPU Promotion for smoother manual scrolling
      slides.forEach((_, index) => {
        if (index !== 0 && imagesRef.current[index]) {
          gsap.set(imagesRef.current[index], { yPercent: 100, force3D: true });
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${slides.length * 200}%`,
          pin: true,
          scrub: 1,
          snap: {
            snapTo: (progress) => {
              // Timeline: 0.5 (bubble) + 0.5 (slide 1 hold) + 4 (slide transitions) = 5 total
              // Snap points with 0.1 safety net for bubble expansion
              const snapPoints = [
                0,    // Start - bubble closed
                0.1,  // Bubble fully expanded - SAFETY NET
                0.2,  // Slide 1 fully visible (after bubble expansion + hold)
                0.4,  // Slide 2
                0.6,  // Slide 3
                0.8,  // Slide 4
                1.0   // Slide 5
              ];

              // Find closest snap point
              let closest = snapPoints[0];
              let minDistance = Math.abs(progress - snapPoints[0]);

              for (let i = 1; i < snapPoints.length; i++) {
                const distance = Math.abs(progress - snapPoints[i]);
                if (distance < minDistance) {
                  minDistance = distance;
                  closest = snapPoints[i];
                }
              }

              return closest;
            },
            duration: { min: 0.5, max: 1 },
            delay: 0.2,
            ease: "power2.inOut"
          },
          onUpdate: (self) => {
            const progress = self.progress;
            let newIndex;

            // Determine slide based on animation start points
            // Text changes exactly when slide begins moving
            if (progress < 0.3) {
              newIndex = 0;  // Slide 1 (until slide 2 starts at 0.2)
            } else if (progress < 0.5) {
              newIndex = 1;  // Slide 2 (starts at 0.2, until slide 3 starts at 0.4)
            } else if (progress < 0.7) {
              newIndex = 2;  // Slide 3 (starts at 0.4, until slide 4 starts at 0.6)
            } else if (progress < 0.9) {
              newIndex = 3;  // Slide 4 (starts at 0.6, until slide 5 starts at 0.8)
            } else {
              newIndex = 4;  // Slide 5 (starts at 0.8)
            }

            // Only update if changed (prevent unnecessary re-renders)
            if (newIndex !== lastIndex.current) {
              setActiveIndex(newIndex);
              lastIndex.current = newIndex;
            }
          }
        }
      });

      // Create evenly distributed timeline for snap points
      // Each slide gets equal timeline space including slide 1 viewing time

      const sectionDuration = 1; // Each section gets equal duration
      let timelinePosition = 0;

      // 1. Initial Expansion (Bubble)
      tl.fromTo(wrapperRef.current,
        { clipPath: 'inset(100% 12% 0% 12% round 120px 120px 0 0)' },
        {
          clipPath: 'inset(0% 0% 0% 0% round 0px 0px 0 0)',
          duration: sectionDuration * 0.5,
          ease: "power2.inOut"
        },
        timelinePosition
      );

      timelinePosition += sectionDuration * 0.5;

      // 2. Hold on Slide 1 (let user view it)
      tl.to({}, { duration: sectionDuration * 0.5 }, timelinePosition);
      timelinePosition += sectionDuration * 0.5;

      // 3. Slide Transitions - each slide gets equal timeline space
      slides.forEach((_, index) => {
        if (index === 0) return;
        const currentImg = imagesRef.current[index];

        // Incoming Slide - slides up and covers previous
        tl.to(currentImg, {
          yPercent: 0,
          duration: sectionDuration,
          ease: "none",
          force3D: true
        }, timelinePosition);

        timelinePosition += sectionDuration;
      });

    }, containerRef);

    return () => ctx.revert(); 
  }, { scope: containerRef });

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <style>{`
        .font-inter { font-family: 'Inter', sans-serif; }
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .gpu-optimized { transform: translateZ(0); backface-visibility: hidden; will-change: transform, clip-path; }
        @keyframes blurIn {
          0% { filter: blur(15px); transform: translateY(10px); opacity: 0; }
          100% { filter: blur(0px); transform: translateY(0); opacity: 1; }
        }
        .animate-blur-in {
          animation: blurIn 0.4s ease-out forwards;
        }
      `}</style>

      <div ref={containerRef} className="relative w-full h-screen">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 md:px-16 z-0">
          <p className="text-primary text-xs md:text-sm font-bold uppercase tracking-widest mb-6">Our Solutions</p>
          <h2 className="text-black text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-8 leading-tight max-w-6xl">
            Comprehensive Capability Center Services
          </h2>
          <p className="text-grey text-base md:text-lg lg:text-xl max-w-4xl leading-relaxed">
            From strategic planning to operational excellence, we deliver integrated solutions that transform your India capability center into a competitive advantage.
          </p>
        </div>

        <div ref={wrapperRef} className="gpu-optimized absolute inset-0 w-full h-full z-10 overflow-hidden">
          <div className="relative w-full h-full bg-black">
            {/* // CHANGE: Increased height from h-[75vh] to h-[70vh] for a lengthier card */}
            {/* CHANGES MADE:
            1. Replaced 'left-8 md:left-20' with 'left-1/2 -translate-x-1/2' (Centers horizontally)
            2. Kept 'top-1/2 -translate-y-1/2' (Centers vertically)
            3. Changed 'md:w-[420px]' to 'md:w-[600px]' (Adjust this number to change width)
            */}
          <div className="absolute left-1/2 md:left-20 top-1/2 -translate-x-1/2 md:translate-x-0 -translate-y-1/2 z-[100] w-[90%] md:w-[420px] h-[70vh] md:h-[85vh] pointer-events-none">
          <div className="bg-primary h-full flex flex-col p-8 md:p-12 lg:p-16 shadow-2xl rounded-[40px] pointer-events-auto">

                <div className="mb-auto">
                  <div key={`title-${activeIndex}`} className="animate-blur-in">
                    <div className="text-xs md:text-sm font-bold text-white/70 mb-6 uppercase tracking-widest">
                      {String(activeIndex + 1).padStart(2, '0')} — {String(slides.length).padStart(2, '0')}
                    </div>
                    {/* OLD: text-3xl md:text-4xl lg:text-5xl 
                    NEW: text-4xl md:text-4xl lg:text-5xl Changed only in mobile(Significantly larger)
                    */}
                    <h2 className="text-4xl md:text-4xl lg:text-5xl font-heading font-bold text-[#F5F5DC] leading-tight">
                      {slides[activeIndex]?.title}
                    </h2>
                  </div>
                </div>

                <div key={`desc-${activeIndex}`} className="flex justify-end pl-12 md:pl-16 lg:pl-20 animate-blur-in" style={{ animationDelay: '0.05s' }}>
                  <p className="text-base md:text-base text-white/90 leading-relaxed max-w-[70%]">
                    {slides[activeIndex]?.description}
                  </p>
                </div>

              </div>
            </div>

            <div className="absolute inset-0 w-full h-full">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  ref={(el) => { if (el) imagesRef.current[index] = el; }}
                  className="gpu-optimized absolute inset-0 w-full h-full bg-black overflow-hidden"
                  style={{ zIndex: index + 1 }}
                >
                  <img
                    src={slide.image}
                    alt=""
                    className="w-full h-full object-cover opacity-50 scale-110"
                    draggable="false"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PinnedSectionWithBubble;