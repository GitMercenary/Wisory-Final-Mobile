'use client';

import React from 'react';
import { Navbar } from '@/components/common/Navbar';
import { ServiceHero } from '@/components/sections/ServiceHero';
import { ServiceOfferings, ServiceOffering } from '@/components/sections/ServiceOfferings';
import { ServiceStats, StatItem } from '@/components/sections/ServiceStats';
import { Footer } from '@/components/sections/Footer';
import { Users, FileCheck, Calculator, Plane, UserCheck, Briefcase, Award } from 'lucide-react';

// Hero Content
const heroContent = {
  overline: 'Human Resources & Talent Management',
  headline: 'Access World-Class Talent at Scale.',
  subtext: "Accelerate your innovation roadmap by tapping into India's deep technical talent pool. We handle everything from niche recruitment and payroll to full employee lifecycle management, allowing you to focus on growth.",
  backgroundImage: '/service-hr-talent-hero.jpg',
};

// Key Offerings Data
const offerings: ServiceOffering[] = [
  {
    icon: Users,
    title: 'Specialized Talent Acquisition',
    description: 'Targeted hiring strategies for high-demand roles in AI, Cloud Engineering, and Global Finance.',
    image: '/service-hr-talent-1.jpg',
  },
  {
    icon: FileCheck,
    title: 'Employer of Record (EOR)',
    description: 'Rapidly onboard teams without setting up a local legal entity. We handle liability, contracts, and compliance.',
    image: '/service-compliance-hero.jpg',
  },
  {
    icon: Calculator,
    title: 'Global Payroll & Benefits',
    description: 'Seamless salary processing, tax compliance, and comprehensive benefits management aligned with local labor laws.',
    image: '/service-finance-automation-1.jpg',
  },
  {
    icon: Plane,
    title: 'Expat Mobility & Relocation',
    description: 'End-to-end visa assistance, housing support, and cultural integration for your global leadership teams.',
    image: '/service-hr-talent-2.jpg',
  },
];

// Stats Data
const stats: StatItem[] = [
  { value: '500+', label: 'Professionals Placed', icon: UserCheck },
  { value: '50+', label: 'Client Companies', icon: Briefcase },
  { value: '95%', label: 'Retention Rate', icon: Award },
];

export default function HRTalentPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <ServiceHero
        overline={heroContent.overline}
        headline={heroContent.headline}
        subtext={heroContent.subtext}
        backgroundImage={heroContent.backgroundImage}
        primaryCTA={{ text: 'Talk to Our HR Experts' }}
        secondaryCTA={{ text: 'Explore Services' }}
        scrollToId="offerings"
      />

      <ServiceOfferings
        sectionLabel="Key Offerings"
        headline="Comprehensive HR & Talent Solutions"
        subheadline="From specialized recruitment to full employee lifecycle management, we provide end-to-end human capital solutions for global enterprises."
        offerings={offerings}
        ctaText="Build Your Dream Team"
        ctaSubtext="Ready to scale your India operations with world-class talent?"
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
