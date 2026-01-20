'use client';

import React from 'react';
import { Navbar } from '@/components/common/Navbar';
import { ServiceHero } from '@/components/sections/ServiceHero';
import { ServiceOfferings, ServiceOffering } from '@/components/sections/ServiceOfferings';
import { ServiceStats, StatItem } from '@/components/sections/ServiceStats';
import { Footer } from '@/components/sections/Footer';
import { Handshake, FileSignature, ClipboardCheck, ShieldAlert, TrendingUp, DollarSign, ShieldCheck } from 'lucide-react';

// Hero Content
const heroContent = {
  overline: 'Governance & Vendor Management',
  headline: 'Uncompromising Governance. Seamless Operations.',
  subtext: 'We act as your local custodians, managing third-party ecosystems and ensuring every vendor interaction aligns strictly with your global operating standards.',
  backgroundImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2000&q=80',
};

// Key Offerings Data
const offerings: ServiceOffering[] = [
  {
    icon: Handshake,
    title: 'Strategic Vendor Procurement',
    description: 'Sourcing and vetting best-in-class partners for transport, catering, and facility management through a transparent bidding process.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80',
  },
  {
    icon: FileSignature,
    title: 'Contract & SLA Management',
    description: 'Rigorous negotiation of Service Level Agreements (SLAs), regular performance reviews, and proactive renewal management.',
    image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=1600&q=80',
  },
  {
    icon: ClipboardCheck,
    title: 'Audit & Operational Assurance',
    description: 'Periodic operational audits to identify process gaps, prevent financial leakage, and ensure consistent service quality.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
  },
  {
    icon: ShieldAlert,
    title: 'Risk & Continuity Planning',
    description: 'Robust Business Continuity Planning (BCP) and disaster recovery protocols to insulate your operations from external disruptions.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=80',
  },
];

// Stats Data
const stats: StatItem[] = [
  { value: '98%', label: 'SLA Adherence Rate', icon: TrendingUp },
  { value: '15%', label: 'Vendor Cost Reduction', icon: DollarSign },
  { value: '100%', label: 'Audit Readiness', icon: ShieldCheck },
];

export default function GovernancePage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <ServiceHero
        overline={heroContent.overline}
        headline={heroContent.headline}
        subtext={heroContent.subtext}
        backgroundImage={heroContent.backgroundImage}
        primaryCTA={{ text: 'Get Governance Review' }}
        secondaryCTA={{ text: 'View Services' }}
        scrollToId="offerings"
      />

      <ServiceOfferings
        sectionLabel="Key Offerings"
        headline="Complete Governance Solutions"
        subheadline="From strategic vendor procurement to risk management, we provide comprehensive governance frameworks that ensure operational excellence and compliance."
        offerings={offerings}
        ctaText="Strengthen Your Governance"
        ctaSubtext="Ready to achieve uncompromising operational standards?"
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
