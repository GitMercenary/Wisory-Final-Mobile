'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  rating?: number;
}

interface GuideTestimonialsProps {
  sectionLabel?: string;
  headline?: string;
  subheadline?: string;
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    quote: "This guide saved us months of research. The cost calculator alone helped us secure budget approval from our CFO within a week.",
    author: "David Chen",
    position: "VP of Global Operations",
    company: "Fortune 500 Tech Company",
    rating: 5,
  },
  {
    quote: "The talent density maps were a game-changer. We knew exactly where to set up our AI center based on the data in this playbook.",
    author: "Sarah Mitchell",
    position: "Chief Strategy Officer",
    company: "Leading FinTech Enterprise",
    rating: 5,
  },
  {
    quote: "Finally, a comprehensive resource that covers everything from legal entities to cultural integration. Highly recommended for any enterprise expanding to India.",
    author: "Michael Roberts",
    position: "Head of International Expansion",
    company: "Global Healthcare Leader",
    rating: 5,
  },
];

export const GuideTestimonials: React.FC<GuideTestimonialsProps> = ({
  sectionLabel = 'What Leaders Are Saying',
  headline = 'Trusted by Enterprise Decision-Makers',
  subheadline = 'Join hundreds of executives who have used this guide to fast-track their India expansion.',
  testimonials = defaultTestimonials,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-[#F5F1E8] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-5" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            className="text-primary font-medium text-sm md:text-base tracking-wider uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {sectionLabel}
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {headline}
          </motion.h2>
          <motion.p
            className="text-grey text-base md:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {subheadline}
          </motion.p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[350px] md:min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Quote Icon */}
                <motion.div
                  className="mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                >
                  <Quote className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto opacity-50" />
                </motion.div>

                {/* Star Rating */}
                {testimonials[currentIndex].rating && (
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                )}

                {/* Quote Text */}
                <blockquote className="text-xl md:text-2xl lg:text-3xl text-black font-light leading-relaxed mb-8 italic px-4">
                  &ldquo;{testimonials[currentIndex].quote}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div>
                  <p className="text-lg md:text-xl font-heading font-semibold text-black mb-1">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-primary mb-1">
                    {testimonials[currentIndex].position}
                  </p>
                  <p className="text-grey">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-primary hover:bg-primary-dark transition-colors flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-grey/30 w-3 hover:bg-grey/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-primary hover:bg-primary-dark transition-colors flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
