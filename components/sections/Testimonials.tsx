'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

const testimonials = [
  {
    quote: "Wisory Global transformed our India strategy from concept to a fully operational 500-person engineering center in record time. Their expertise and execution were exceptional.",
    author: "Sarah Chen",
    position: "VP of Global Operations",
    company: "Fortune 500 Tech Company",
  },
  {
    quote: "The team's deep understanding of the Indian market combined with global best practices made all the difference. We achieved 60% faster setup while maintaining full compliance.",
    author: "Michael Rodriguez",
    position: "Chief Strategy Officer",
    company: "Leading BFSI Enterprise",
  },
  {
    quote: "Wisory didn't just build our capability center—they became true partners in our growth journey. The operational excellence they bring is unmatched.",
    author: "Priya Sharma",
    position: "Head of Technology",
    company: "Healthcare Innovation Leader",
  },
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-5" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.p
              className="text-primary font-medium text-sm md:text-base tracking-wider uppercase mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Client Testimonials
            </motion.p>
            <h2 className="text-4xl md:text-5xl lg:text-h2 font-heading font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
          </div>
        </ScrollReveal>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[300px] md:min-h-[250px]">
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
                  className="mb-8"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                >
                  <Quote className="w-16 h-16 text-primary mx-auto opacity-50" />
                </motion.div>

                {/* Quote Text */}
                <blockquote className="text-2xl md:text-3xl text-gray-800 font-light leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[currentIndex].quote}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div>
                  <p className="text-xl font-heading font-semibold text-gray-900 mb-1">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-primary mb-1">
                    {testimonials[currentIndex].position}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
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
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-gray-600 hover:bg-gray-500'
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
