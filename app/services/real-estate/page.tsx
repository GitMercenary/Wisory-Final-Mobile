'use client';

import React from 'react';
import { Navbar } from '@/components/common/Navbar';
import { ServiceHero } from '@/components/sections/ServiceHero';
import { ServiceOfferings, ServiceOffering } from '@/components/sections/ServiceOfferings';
import { ServiceStats, StatItem } from '@/components/sections/ServiceStats';
import { Footer } from '@/components/sections/Footer';
import { MapPin, PenTool, Settings, Leaf, Building2, Ruler, Globe } from 'lucide-react';

// Hero Content
const heroContent = {
  overline: 'Real Estate & Infrastructure',
  headline: 'Infrastructure That Accelerates Innovation.',
  subtext: "We don't just find offices; we build ecosystems. From Grade-A tech parks in Bengaluru to SEZ zones in Hyderabad, we execute end-to-end site selection, lease negotiation, and fit-outs tailored for global enterprises.",
  backgroundImage: '/service-real-estate-hero.jpg',
};

// Key Offerings Data
const offerings: ServiceOffering[] = [
  {
    icon: MapPin,
    title: 'Strategic Site Selection',
    description: "Data-driven location analysis prioritizing talent density, connectivity, and cost-efficiency across India's top tier-1 cities.",
    image: '/service-real-estate-1.jpg',
  },
  {
    icon: PenTool,
    title: 'Design & Build',
    description: 'Turnkey interior solutions that translate your global brand identity into high-performance local workspaces.',
    image: '/service-real-estate-3.jpg',
  },
  {
    icon: Settings,
    title: 'Integrated Facility Management',
    description: 'Comprehensive 24/7 operations including security, maintenance, and employee experience management.',
    image: '/service-real-estate-2.jpg',
  },
  {
    icon: Leaf,
    title: 'ESG & Sustainability',
    description: 'Future-ready workspaces featuring LEED-certified green building options to align with your global carbon footprint goals.',
    image: '/service-real-estate-4.jpg',
  },
];

// Stats Data
const stats: StatItem[] = [
  { value: '1M+', label: 'Sq. Ft. Managed', icon: Ruler },
  { value: '50+', label: 'Offices Delivered', icon: Building2 },
  { value: '12', label: 'Cities Covered', icon: Globe },
];

export default function RealEstatePage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <ServiceHero
        overline={heroContent.overline}
        headline={heroContent.headline}
        subtext={heroContent.subtext}
        backgroundImage={heroContent.backgroundImage}
        primaryCTA={{ text: 'Request a Briefing' }}
        secondaryCTA={{ text: 'View Key Offerings' }}
        scrollToId="offerings"
      />

      <ServiceOfferings
        sectionLabel="Key Offerings"
        headline="End-to-End Real Estate Solutions"
        subheadline="From strategic site selection to sustainable facility management, we deliver comprehensive infrastructure solutions for global enterprises."
        offerings={offerings}
        ctaText="Start Your Infrastructure Journey"
        ctaSubtext="Ready to establish your next-generation workspace in India?"
      />

      <ServiceStats
        stats={stats}
        backgroundColor='bg-[#F5F1E8]'
        accentColor="text-primary"
      />

      <Footer />
    </main>
  );
}
