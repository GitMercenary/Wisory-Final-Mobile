'use client';


import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


// Register plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);


interface Slide {
 id: number;
 title: string;
 description: string;
 image: string;
}

// DATA: Move slides outside component to prevent recreating on every render
const slides: Slide[] = [
  {
    id: 1,
    title: "Strategic Planning",
    description: "We help you define the vision, scope, and roadmap for your India capability center aligned with global business objectives.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: 2,
    title: "Talent Acquisition",
    description: "Accelerate growth while maintaining quality through proven methodologies and best practices.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: 3,
    title: "Operations Excellence",
    description: "Continuous advisory and operational support to ensure sustained success and competitive advantage.",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: 4,
    title: "Technology Integration",
    description: "Digital transformation and modernization of your legacy systems for better performance.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: 5,
    title: "Risk Management",
    description: "Ensuring compliance and governance across all operational verticals.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"
  }
];

const PinnedSectionWithBubble = () => {
 const containerRef = useRef<HTMLDivElement>(null);
 const wrapperRef = useRef<HTMLDivElement>(null);
 const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
 const [activeIndex, setActiveIndex] = useState(0);
 const activeIndexRef = useRef(0); // Track index without causing re-renders


 useGSAP(() => {
   if (!containerRef.current || !wrapperRef.current) return;

   console.log('🎬 GSAP Setup Starting...');
   console.log('Images Refs:', imagesRef.current);

   // CRITICAL: Set initial positions via GSAP (not React inline styles)
   // This prevents React from overwriting GSAP animations on re-render
   slides.forEach((_, index) => {
     if (index !== 0) {
       gsap.set(imagesRef.current[index], { yPercent: 100 });
       console.log(`📍 Set image ${index} to yPercent: 100`);
     }
   });

   const tl = gsap.timeline({
     scrollTrigger: {
       trigger: containerRef.current,
       start: "top top",
       end: "+=800%", // Much longer scroll distance to give more time per slide
       pin: true,
       pinSpacing: true,
       scrub: 0.3, // Azure-optimized for smooth, responsive scrolling
       // Simplified snap logic - array of progress values for each snap point
       // 0 = start, 0.15 = bubble complete, then evenly spaced for 5 slides
       snap: {
         snapTo: [0, 0.15, 0.35, 0.55, 0.75, 0.95, 1],
         duration: { min: 0.8, max: 1.2 },
         delay: 0.2,
         ease: "cubic-bezier(0.25, 0.74, 0.22, 0.99)", // Azure's premium smooth curve
         onComplete: () => {
           // Update React state only when snap completes (not during scroll)
           setActiveIndex(activeIndexRef.current);
         }
       },
       anticipatePin: 1,
       markers: true, // Set to true for debugging
       invalidateOnRefresh: true,
     }
   });


   // STEP 1: The Azure-style Wide Card Reveal
   // Starts as a wide, flat rectangle at the bottom and expands upward
   // Using design system's primary radius (32px) for consistent visual language
  
   // Part 1a: Expand clipPath from bottom to full screen (Azure premium easing)
   tl.fromTo(wrapperRef.current,
     {
       clipPath: `inset(95% 5% 0% 5%)` // No 'round' - avoids GSAP glitches
     },
     {
       clipPath: `inset(0% 0% 0% 0%)`, // Full screen
       duration: 1.5,
       ease: "cubic-bezier(0.25, 0.74, 0.22, 0.99)" // Azure's premium smooth curve
     },
     0 // Start at position 0 in timeline
   );

  // Part 1b: Simultaneously animate border-radius (Azure premium easing)
  tl.fromTo(wrapperRef.current,
    {
      borderRadius: '32px' // Start with rounded corners
    },
    {
      borderRadius: '32px', // Keep rounded during expansion
      duration: 1.5,
      ease: "cubic-bezier(0.25, 0.74, 0.22, 0.99)" // Azure's premium smooth curve
    },
    0 // Start at the same time as clipPath
  );

  // Part 1c: After expansion, transition to sharp corners (Azure button easing)
  tl.to(wrapperRef.current,
    {
      borderRadius: '0px', // Sharp corners
      duration: 0.5,
      ease: "cubic-bezier(0.55, 0, 0.1, 1)" // Azure's snappy button curve
    },
    1.5 // Start after the expansion completes
  );


   // STEP 2: The Vertical Stacking
   // We loop through slides starting from index 1 (since index 0 is already visible)
   slides.forEach((_, index) => {
     if (index === 0) return; // Skip the first one


     // Create a timeline step for each slide
     // Start AFTER bubble animation completes to ensure full visibility
     const startTime = index === 1 ? 3.5 : "+=1.2"; // First slide starts much later, more time between slides

     tl.to(imagesRef.current[index], {
       yPercent: 0, // Slide UP to 0% (natural position)
       duration: 1.5,
       ease: "cubic-bezier(0.25, 0.74, 0.22, 0.99)", // Azure's premium smooth curve
       onStart: () => {
         console.log(`🎯 Animating image ${index} to yPercent: 0`);
         activeIndexRef.current = index; // Update ref without re-render
       },
       onReverseComplete: () => {
         console.log(`⏪ Reverse: Going back to image ${index - 1}`);
         activeIndexRef.current = index - 1; // Update ref without re-render
       }
     }, startTime);
   });

   console.log('✅ Timeline created with', slides.length, 'slides');


   return () => {
     tl.kill();
   };
 }, { scope: containerRef, dependencies: [] });


 return (
   <section className="relative w-full">
   <div ref={containerRef} className="relative w-full h-screen bg-gray-100 overflow-hidden">


     {/* Background/Spacer text */}
     <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 md:px-16">
       <p className="text-primary text-xs md:text-sm font-bold uppercase tracking-widest mb-6">Our Solutions</p>
       <h2 className="text-black text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-8 leading-tight max-w-6xl">
         Comprehensive Capability Center Services
       </h2>
       <p className="text-grey text-base md:text-lg lg:text-xl max-w-4xl leading-relaxed">
         From strategic planning to operational excellence, we deliver integrated solutions that transform your India capability center into a competitive advantage.
       </p>
     </div>


     {/* THE BUBBLE WRAPPER */}
     {/* This div gets clipped/expanded by GSAP */}
     <div
       ref={wrapperRef}
       className="absolute inset-0 w-full h-full z-10 overflow-hidden rounded-[32px]"
       style={{
         clipPath: "inset(95% 5% 0% 5%)",
         willChange: "clip-path, border-radius, transform" // Azure-style GPU acceleration
       }}
     >
       <div className="relative w-full h-full">


         {/* FLOATING TEXT CARD (Azure-style Tall Vertical Card) */}
         <div className="absolute left-8 md:left-20 top-1/2 -translate-y-1/2 z-50 w-[90%] md:w-[420px] h-[75vh] md:h-[85vh] pointer-events-none">
           <div className="bg-primary h-full flex flex-col p-8 md:p-12 lg:p-16 shadow-2xl rounded-[40px] pointer-events-auto">

             {/* TOP SECTION - Index & Title (Left Aligned) */}
             <div className="mb-auto">
               <div className="text-xs md:text-sm font-bold text-white/70 mb-6 uppercase tracking-widest">
                 {String(activeIndex + 1).padStart(2, '0')} — {String(slides.length).padStart(2, '0')}
               </div>

               {/* Animated Title */}
               <div className="transition-all duration-500 ease-in-out">
                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#F5F5DC] leading-tight">
                   {slides[activeIndex].title}
                 </h2>
               </div>
             </div>

             {/* RIGHT SECTION - Description */}
             <div className="transition-all duration-500 ease-in-out flex justify-end pl-12 md:pl-16 lg:pl-20">
               <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-[70%]">
                 {slides[activeIndex].description}
               </p>
             </div>

           </div>
         </div>


         {/* FULL-WIDTH IMAGE STACK (Behind Text Card) */}
         <div className="absolute inset-0 w-full h-full">
           {slides.map((slide, index) => (
             <div
               key={slide.id}
               ref={(el) => { imagesRef.current[index] = el; }}
               className="absolute inset-0 w-full h-full"
               style={{
                 zIndex: index, // Stack order: 0 at bottom, 4 at top (each new image covers the previous)
               }}
             >
               <img
                 src={slide.image}
                 alt={slide.title}
                 className="w-full h-full object-cover"
               />
               {/* Dark overlay for better text readability */}
               <div className="absolute inset-0 bg-black/40"></div>
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



