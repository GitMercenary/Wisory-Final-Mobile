'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Lightbulb, Award, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
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
    description: 'We build trust through transparency, ethical practices, and unwavering commitment to doing what\'s right for our clients.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We pioneer bold solutions, challenge conventional thinking, and continuously push boundaries to deliver cutting-edge capability centers.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We succeed when our clients succeed. Every engagement is built on collaborative relationships that drive mutual growth.',
  },
  {
    icon: Award,
    title: 'Expertise',
    description: 'Deep India market knowledge meets global best practices. Our team brings decades of combined experience.',
  },
  {
    icon: Zap,
    title: 'Agility',
    description: 'We move fast, adapt quickly, and scale efficiently. In a rapidly evolving landscape, our agile approach ensures you stay ahead.',
  },
];

export const Values: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  
  // Mobile specific refs
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current || !backgroundRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // ==================== DESKTOP ANIMATION ====================
        "(min-width: 1024px)": function() {
          const rightCol = rightColumnRef.current;
          
          if (rightCol) {
            // Calculate distance: Scroll enough to bring the bottom of the list into view
            // Added a small buffer (+ 50px) to ensure the last card isn't cut off
            const distanceToScroll = rightCol.scrollHeight - window.innerHeight + 50;

            gsap.to(rightCol, {
              y: -distanceToScroll, 
              ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top top", 
                // Increased scroll duration slightly (300%) to make it feel smoother
                end: "+=300%",   
                pin: true,       
                scrub: 1,        
                invalidateOnRefresh: true, 
              }
            });
            
            gsap.to(backgroundRef.current, {
              scale: 1.15,
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=300%",
                scrub: 1,
              },
            });
          }
        }
      });
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Handle Mobile Scroll
  const handleMobileScroll = () => {
    if (mobileScrollRef.current) {
      const scrollLeft = mobileScrollRef.current.scrollLeft;
      const width = mobileScrollRef.current.offsetWidth;
      const index = Math.round(scrollLeft / width);
      setActiveIndex(index);
    }
  };

  const scrollToCard = (index: number) => {
    if (mobileScrollRef.current) {
      const width = mobileScrollRef.current.offsetWidth;
      mobileScrollRef.current.scrollTo({
        left: width * index,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="values" 
      ref={containerRef}
      className="relative min-h-screen lg:h-screen lg:overflow-hidden flex flex-col justify-center" 
    >
      {/* Fixed Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/values-bg.png)',
          transformOrigin: 'center center',
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* ==================== DESKTOP LAYOUT ==================== */}
      <div className="hidden lg:flex relative z-10 container-custom h-full items-start">
        
        {/* Left Side - Fixed Title */}
        <div className="w-5/12 h-screen flex flex-col justify-center pr-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-white/80 font-medium text-base tracking-wider uppercase mb-4">
              Our Core Values
            </p>
            <h2 className="text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Principles<br />That Guide Us
            </h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-md">
              These five pillars define how we work, make decisions, and create value for our clients.
            </p>
          </motion.div>
        </div>

        {/* Right Side - Scrolling Cards */}
        <div className="w-7/12 h-full relative flex justify-end">
          <div 
            ref={rightColumnRef} 
            // Reduced vertical padding (15vh) and spacing (space-y-8) to make it more compact
            className="pt-[15vh] pb-[15vh] space-y-8 max-w-xl lg:max-w-2xl"
          >
            {values.map((value) => (
              <div 
                key={value.title}
                // Compact Styling: Reduced padding (p-8) and slightly smaller text
                className="relative backdrop-blur-sm bg-white/10 rounded-2xl p-8 border border-white/20"
              >
                <div className="mb-5">
                  <value.icon className="w-16 h-16 text-white" strokeWidth={1} />
                </div>
                <h3 className="text-4xl font-heading font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  {value.description}
                </p>
                {/* Decorative Line */}
                <div className="mt-6 w-20 h-1 bg-white/40 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ==================== MOBILE LAYOUT (Unchanged) ==================== */}
      <div className="lg:hidden relative z-10 py-16">
        <div className="container-custom mb-12">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
             <p className="text-white/80 font-medium text-sm tracking-wider uppercase mb-4">
               Our Core Values
             </p>
             <h2 className="text-4xl font-heading font-bold text-white mb-6 leading-tight">
               Principles That Guide Us
             </h2>
             <p className="text-lg text-white/90 leading-relaxed">
               These five pillars define how we work, make decisions, and create value for our clients.
             </p>
           </motion.div>
        </div>

        <div className="w-full px-4">
          <div 
            ref={mobileScrollRef}
            onScroll={handleMobileScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {values.map((value, index) => (
              <div key={index} className="min-w-[100%] snap-center">
                <div className="relative h-[450px] flex flex-col justify-between rounded-[2.5rem] bg-white/10 backdrop-blur-xl border border-white/20 p-8 shadow-2xl">
                  <div className="flex justify-between items-start">
                    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                      <value.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex items-center gap-3 bg-black/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
                      <button 
                        onClick={() => scrollToCard(activeIndex - 1)}
                        disabled={activeIndex === 0}
                        className={`text-white transition-opacity ${activeIndex === 0 ? 'opacity-30' : 'opacity-100'}`}
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <span className="text-sm font-medium text-white tracking-widest font-mono">
                        0{index + 1} / 0{values.length}
                      </span>
                      <button 
                        onClick={() => scrollToCard(activeIndex + 1)}
                        disabled={activeIndex === values.length - 1}
                        className={`text-white transition-opacity ${activeIndex === values.length - 1 ? 'opacity-30' : 'opacity-100'}`}
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-4xl font-heading font-bold text-white leading-tight">
                      {value.title}
                    </h3>
                    <p className="text-base text-white/80 leading-relaxed font-light">
                      {value.description}
                    </p>
                  </div>

                  <div className="flex justify-start pt-4">
                    <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-2 mt-4">
            {values.map((_, i) => (
              <div 
                key={i}
                className={`transition-all duration-300 h-1.5 rounded-full ${
                  i === activeIndex ? 'w-8 bg-white' : 'w-2 bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};