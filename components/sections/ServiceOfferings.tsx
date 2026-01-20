'use client';

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, LucideIcon } from 'lucide-react';

export interface ServiceOffering {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
}

interface ServiceOfferingsProps {
  sectionLabel?: string;
  headline: string;
  subheadline?: string;
  offerings: ServiceOffering[];
  ctaText?: string;
  ctaSubtext?: string;
  onCtaClick?: () => void;
}

// Animation variants for mobile slider
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
};

// Swipe helpers
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

// Spotlight Card Wrapper
const SpotlightCard = ({ children, className = "", image }: { children: React.ReactNode; className?: string; image?: string }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className={`relative overflow-hidden group ${className}`}
    >
      {/* Background Image (if provided) */}
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <div
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{
          opacity: isFocused ? 1 : 0,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(234, 88, 12, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

export const ServiceOfferings: React.FC<ServiceOfferingsProps> = ({
  sectionLabel = 'What We Offer',
  headline,
  subheadline,
  offerings,
  ctaText = 'Schedule a Consultation',
  ctaSubtext = 'Ready to transform your India strategy into measurable outcomes?',
  onCtaClick,
}) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const currentIndex = ((page % offerings.length) + offerings.length) % offerings.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      const contact = document.querySelector('#contact');
      if (contact) contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="offerings" className="py-8 lg:py-24 bg-white overflow-hidden">
      <div className="container-custom h-full flex flex-col">

        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 flex-shrink-0">
          <motion.p
            className="text-primary font-medium text-sm md:text-base tracking-wider uppercase mb-2 md:mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {sectionLabel}
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-black mb-3 md:mb-4">
            {headline}
          </h2>
          {subheadline && (
            <p className="text-sm md:text-base text-grey max-w-3xl mx-auto px-2">
              {subheadline}
            </p>
          )}
        </div>

        {/* Mobile View: Slider */}
        <div className="md:hidden relative w-full h-[420px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full h-full cursor-grab active:cursor-grabbing"
            >
              <SpotlightCard
                className="bg-[#F5F1E8] rounded-[40px] border border-grey/10 h-full flex flex-col relative shadow-sm"
                image={offerings[currentIndex].image}
              >
                {/* Navigation Buttons */}
                <div className="absolute top-6 right-6 flex items-center gap-2 z-20">
                  <button
                    onClick={() => paginate(-1)}
                    className="p-2 bg-white/50 hover:bg-white rounded-full transition-colors text-black"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={16} />
                  </button>

                  <span className="font-heading font-medium text-sm text-black tracking-widest min-w-[50px] text-center">
                    0{currentIndex + 1} / 0{offerings.length}
                  </span>

                  <button
                    onClick={() => paginate(1)}
                    className="p-2 bg-white/50 hover:bg-white rounded-full transition-colors text-black"
                    aria-label="Next"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>

                <div className="p-8 py-10 flex flex-col h-full justify-between">
                  {/* Icon */}
                  <div className="mb-5 flex items-center justify-start h-12">
                    {React.createElement(offerings[currentIndex].icon, {
                      className: "w-12 h-12 text-primary",
                      strokeWidth: 1.5
                    })}
                  </div>

                  {/* Title */}
                  <div className="mb-4 min-h-[64px] flex items-start pr-16">
                    <h3 className="text-2xl font-heading font-bold text-black leading-tight">
                      {offerings[currentIndex].title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-grey text-sm leading-relaxed flex-grow">
                    {offerings[currentIndex].description}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop View: Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-4">
          {offerings.map((offering) => (
            <SpotlightCard
              key={offering.title}
              className="bg-[#F5F1E8] rounded-[40px] border border-grey/10 hover:shadow-xl transition-all duration-medium flex flex-col"
              image={offering.image}
            >
              <div className="p-8 md:p-8 py-10 flex flex-col h-full justify-between">
                <div className="mb-5 flex items-center justify-start h-12">
                  <offering.icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
                </div>
                <div className="mb-4 min-h-[64px] flex items-start">
                  <h3 className="text-2xl font-heading font-bold text-black leading-tight">
                    {offering.title}
                  </h3>
                </div>
                <p className="text-grey text-sm leading-relaxed flex-grow">
                  {offering.description}
                </p>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* CTA Container */}
        <motion.div
          className="text-center mt-8 md:mt-16 mx-auto max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px 0px -100px 0px", amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-grey mb-6 md:mb-8 text-base md:text-lg font-medium">
            {ctaSubtext}
          </p>
          <motion.button
            className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-primary-dark transition-colors duration-fast shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCtaClick}
          >
            {ctaText}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
