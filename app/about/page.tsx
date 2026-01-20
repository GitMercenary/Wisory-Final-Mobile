'use client';

import React from 'react';
import { Navbar } from '@/components/common/Navbar';
import { ServiceHero } from '@/components/sections/ServiceHero';
import { Services } from '@/components/sections/Services';
import { Values } from '@/components/sections/Values';
import { Team } from '@/components/sections/Team';
import { Footer } from '@/components/sections/Footer';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Globe, Award, TrendingUp } from 'lucide-react';

// Hero content for About page
const heroContent = {
  overline: 'About Wisory Global',
  headline: 'Building Tomorrow\'s Capability Centers Today.',
  subtext: 'We are strategic partners for enterprises seeking to establish and scale world-class capability centers in India. Our expertise transforms vision into operational excellence.',
  backgroundImage: '/about-bg.jpg',
};

// Mission & Vision section
const MissionVision = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Mission */}
          <motion.div
            className="bg-[#F5F1E8] rounded-[32px] p-8 md:p-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-black mb-4">
              Our Mission
            </h3>
            <p className="text-grey text-lg leading-relaxed">
              To empower global enterprises to unlock India&apos;s potential by building capability
              centers that drive innovation, efficiency, and sustainable growth. We bridge the gap
              between strategic vision and operational reality.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="bg-black rounded-[32px] p-8 md:p-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
              Our Vision
            </h3>
            <p className="text-white/80 text-lg leading-relaxed">
              To be the most trusted partner for Fortune 500 companies establishing their
              presence in India, setting the benchmark for capability center excellence and
              becoming synonymous with successful India expansion.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Why Wisory section
const WhyWisory = () => {
  const reasons = [
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Deep understanding of both global enterprise needs and local Indian market dynamics.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Seasoned professionals with decades of combined experience in GCC establishment.',
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Successfully launched and scaled capability centers for Fortune 500 clients.',
    },
    {
      icon: TrendingUp,
      title: 'End-to-End Support',
      description: 'Comprehensive services from strategy to operations, ensuring seamless execution.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F5F1E8]">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            className="text-primary font-medium text-sm md:text-base tracking-wider uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            The Wisory Advantage
          </motion.h2>
          <motion.p
            className="text-grey text-base md:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            What sets us apart in helping enterprises build successful India operations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black mb-3">
                {reason.title}
              </h3>
              <p className="text-grey text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <ServiceHero
        overline={heroContent.overline}
        headline={heroContent.headline}
        subtext={heroContent.subtext}
        backgroundImage={heroContent.backgroundImage}
        primaryCTA={{
          text: 'Get in Touch',
          onClick: () => {
            window.location.href = '/contact';
          }
        }}
        secondaryCTA={{
          text: 'Our Services',
          onClick: () => {
            const section = document.querySelector('#services-section');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        scrollToId="mission-section"
      />

      {/* Mission & Vision */}
      <div id="mission-section">
        <MissionVision />
      </div>

      {/* Why Wisory */}
      <WhyWisory />

      {/* Our Services */}
      <div id="services-section">
        <Services />
      </div>

      {/* Our Values */}
      <Values />

      {/* Team Section */}
      <Team />

      {/* Footer */}
      <Footer />
    </main>
  );
}
