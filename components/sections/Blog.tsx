'use client';

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogPost {
  id: number;
  image: string;
  category: string;
  title: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: '/img2.jpg',
    category: 'Industry',
    title: 'Emerging Enterprise GCCs in India – Landscape Report 2025',
    link: '#',
  },
  {
    id: 2,
    image: '/img4.jpg',
    category: 'Insights',
    title: 'The AI Advantage Survey 2025: How India\'s Workforce is Already Redefining the Future of Work Through AI',
    link: '#',
  },
  {
    id: 3,
    image: '/img8.jpg',
    category: 'Leadership',
    title: 'Aspire. Lead. Transform: The Playbook for Successful GCC Leadership',
    link: '#',
  },
];

// --- 1. Reusable Content Component (With Title Fix) ---
const BlogCardContent = ({ post }: { post: BlogPost }) => (
  <>
    {/* Image Wrapper */}
    <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-2xl w-full shadow-sm">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        draggable="false" 
      />
      <div className="absolute top-4 left-4">
        <span className="inline-block px-4 py-1.5 bg-white text-gray-900 text-sm font-medium rounded-full shadow-sm">
          {post.category}
        </span>
      </div>
    </div>

    {/* Content Wrapper */}
    <div className="flex flex-col flex-grow">
      <h3
        className="text-xl font-heading font-bold text-gray-900 mb-4 overflow-hidden"
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          lineHeight: '1.4',  // Strict line-height
          maxHeight: '4.2em'  // Strict max-height (1.4 * 3 lines)
        }}
      >
        {post.title}
      </h3>

      <div className="mt-auto pt-4 flex items-center gap-2 text-gray-900 font-medium group-hover:gap-3 transition-all duration-300">
        <span>View more</span>
        <ArrowRight className="w-5 h-5 group-hover:text-[#f02d31] transition-colors" />
      </div>
    </div>
  </>
);

// --- 2. Spotlight Component (For Desktop) ---
const SpotlightLink = ({
  children,
  href,
  className = ""
}: {
  children: React.ReactNode;
  href: string;
  className?: string
}) => {
  const divRef = useRef<HTMLAnchorElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
  };

  return (
    <a
      ref={divRef}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className={`relative overflow-hidden group block ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-300 z-0"
        style={{
          opacity: isFocused ? 1 : 0,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(234, 88, 12, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </a>
  );
};

export const Blog: React.FC = () => {
  // State for Mobile Carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    let nextIndex = currentIndex + newDirection;
    if (nextIndex < 0) nextIndex = blogPosts.length - 1;
    if (nextIndex >= blogPosts.length) nextIndex = 0;
    setCurrentIndex(nextIndex);
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -50) {
      paginate(1);
    } else if (info.offset.x > 50) {
      paginate(-1);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <section id="blog" className="relative py-20 lg:py-32 bg-[#F5F1E8] overflow-hidden">
      <div className="container-custom px-4 mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="flex items-start justify-between mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight">
              Latest Insights and
              <br />
              Updates
            </h2>
          </motion.div>

          <motion.a
            href="#"
            className="hidden md:flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View all posts
          </motion.a>
        </div>

        {/* --- MOBILE CAROUSEL VIEW (md:hidden) --- */}
        <div className="block md:hidden relative h-[550px] w-full overflow-hidden"> 
            <div className="absolute inset-0 flex items-center justify-center">
                {/* Removed mode="wait" for instant transitions */}
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
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
                        onDragEnd={handleDragEnd}
                        // Change minHeight here to manipulate card length
                        className="absolute w-full max-w-sm bg-[#FBF9F6] rounded-[2rem] p-6 shadow-xl border border-gray-100/50"
                        style={{ height: 'auto', minHeight: '450px' }} 
                    >
                        {/* Mobile Navigation Header */}
                        <div className="flex justify-end items-center mb-6">
                            <button 
                                onClick={() => paginate(-1)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors z-20"
                            >
                                <ChevronLeft className="w-5 h-5 text-gray-600" />
                            </button>
                            <span className="mx-2 font-mono text-sm font-medium text-gray-500">
                                {String(currentIndex + 1).padStart(2, '0')} / {String(blogPosts.length).padStart(2, '0')}
                            </span>
                            <button 
                                onClick={() => paginate(1)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors z-20"
                            >
                                <ChevronRight className="w-5 h-5 text-gray-600" />
                            </button>
                        </div>

                        {/* Card Content */}
                        <a href={blogPosts[currentIndex].link} className="block group h-full">
                             <BlogCardContent post={blogPosts[currentIndex]} />
                        </a>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>

        {/* --- DESKTOP GRID VIEW (hidden md:grid) --- */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <SpotlightLink
                href={post.link}
                className="flex flex-col h-full border border-gray-300 rounded-3xl p-6 bg-white/50 hover:bg-white/80 transition-colors duration-300"
              >
                <BlogCardContent post={post} />
              </SpotlightLink>
            </motion.article>
          ))}
        </div>

        {/* Mobile View All Button (Below Carousel) */}
        <motion.div
          className="flex md:hidden justify-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            View all posts
          </a>
        </motion.div>
      </div>
    </section>
  );
};