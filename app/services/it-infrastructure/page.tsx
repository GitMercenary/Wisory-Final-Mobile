'use client';

import React from 'react';
import { Navbar } from '@/components/common/Navbar';
import { ServiceHero } from '@/components/sections/ServiceHero';
import { ServiceOfferings, ServiceOffering } from '@/components/sections/ServiceOfferings';
import { ServiceStats, StatItem } from '@/components/sections/ServiceStats';
import { Footer } from '@/components/sections/Footer';
import { Wifi, Laptop, ShieldCheck, Cloud, Zap, Lock, Server } from 'lucide-react';

// Hero Content
const heroContent = {
  overline: 'IT Infrastructure & Security',
  headline: 'Enterprise-Grade IT. Ready on Day One.',
  subtext: 'We deploy robust, scalable IT backbones designed for zero downtime. From high-availability networks to ISO-certified security protocols, we ensure your remote operations are secure and seamless.',
  backgroundImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80',
};

// Key Offerings Data
const offerings: ServiceOffering[] = [
  {
    icon: Wifi,
    title: 'High-Availability Network Design',
    description: 'Enterprise network architecture featuring SD-WAN, high-speed leased lines, and redundant firewalls for uninterrupted connectivity.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1600&q=80',
  },
  {
    icon: Laptop,
    title: 'Asset Lifecycle Management',
    description: 'End-to-end procurement (Mac/Windows), inventory tracking, and MDM implementation for a seamless remote workforce.',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1600&q=80',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity & Compliance',
    description: 'Zero-trust security frameworks including ISO 27001 compliance, endpoint protection (EDR), and regular VAPT audits.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps Integration',
    description: 'Certified Azure/AWS infrastructure setup, cloud migration strategies, and continuous monitoring services.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
  },
];

// Stats Data
const stats: StatItem[] = [
  { value: '99.9%', label: 'Network Uptime', icon: Zap },
  { value: 'ISO 27001', label: 'Security Certified', icon: Lock },
  { value: '24/7', label: 'IT Support Coverage', icon: Server },
];

export default function ITInfrastructurePage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <ServiceHero
        overline={heroContent.overline}
        headline={heroContent.headline}
        subtext={heroContent.subtext}
        backgroundImage={heroContent.backgroundImage}
        primaryCTA={{ text: 'Get IT Assessment' }}
        secondaryCTA={{ text: 'View Capabilities' }}
        scrollToId="offerings"
      />

      <ServiceOfferings
        sectionLabel="Key Offerings"
        headline="Enterprise IT & Security Solutions"
        subheadline="From network infrastructure to cybersecurity compliance, we deliver comprehensive IT solutions that keep your global operations running securely."
        offerings={offerings}
        ctaText="Secure Your Infrastructure"
        ctaSubtext="Ready to build a resilient, enterprise-grade IT backbone?"
      />

      <ServiceStats
        stats={stats}
        backgroundColor="bg-[#F5F1E8]"
        accentColor="text-primary"
      />

      <Footer />
    </main>
  );
}
