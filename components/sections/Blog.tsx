'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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

export const Blog: React.FC = () => {
  return (
    <section id="blog" className="relative py-20 lg:py-32 bg-[#F5F1E8] overflow-hidden">
      <div className="container-custom">
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
            className="hidden md:flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300"
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

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <a href={post.link} className="block">
                {/* Image */}
                <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Category Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-4 py-1.5 bg-white text-gray-900 text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl lg:text-2xl font-heading font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#f02d31] transition-colors duration-300">
                    {post.title}
                  </h3>

                  <div className="flex items-center gap-2 text-gray-900 font-medium group-hover:gap-3 transition-all duration-300">
                    <span>View more</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>

        {/* Mobile View All Button */}
        <motion.div
          className="flex md:hidden justify-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            View all posts
          </a>
        </motion.div>
      </div>
    </section>
  );
};
