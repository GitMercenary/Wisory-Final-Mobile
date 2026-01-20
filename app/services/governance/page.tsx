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
  backgroundImage: '/service-governance-hero.jpg',
};

// Key Offerings Data
const offerings: ServiceOffering[] = [
  {
    icon: Handshake,
    title: 'Strategic Vendor Procurement',
    description: 'Sourcing and vetting best-in-class partners for transport, catering, and facility management through a transparent bidding process.',
    image: '/service-governance-1.jpg',
  },
  {
    icon: FileSignature,
    title: 'Contract & SLA Management',
    description: 'Rigorous negotiation of Service Level Agreements (SLAs), regular performance reviews, and proactive renewal management.',
    image: '/service-governance-2.jpg',
  },
  {
    icon: ClipboardCheck,
    title: 'Audit & Operational Assurance',
    description: 'Periodic operational audits to identify process gaps, prevent financial leakage, and ensure consistent service quality.',
    image: '/service-governance-3.jpg',
  },
  {
    icon: ShieldAlert,
    title: 'Risk & Continuity Planning',
    description: 'Robust Business Continuity Planning (BCP) and disaster recovery protocols to insulate your operations from external disruptions.',
    image: '/service-governance-4.jpg',
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
