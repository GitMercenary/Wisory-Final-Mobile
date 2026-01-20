'use client';

import React from 'react';
import { Navbar } from '@/components/common/Navbar';
import { ServiceHero } from '@/components/sections/ServiceHero';
import { ServiceOfferings, ServiceOffering } from '@/components/sections/ServiceOfferings';
import { ServiceStats, StatItem } from '@/components/sections/ServiceStats';
import { Footer } from '@/components/sections/Footer';
import { Building2, FileText, Scale, Award, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';

// Hero Content
const heroContent = {
  overline: 'Licensing, Compliance & Quality',
  headline: "Navigate India's Regulatory Landscape with Confidence.",
  subtext: 'We de-risk your market entry. From establishing your legal entity to managing ongoing statutory filings, we ensure your operations remain 100% compliant with local and international laws.',
  backgroundImage: '/service-compliance-hero.jpg',
};

// Key Offerings Data
const offerings: ServiceOffering[] = [
  {
    icon: Building2,
    title: 'Business Incorporation & SEZ',
    description: 'End-to-end management of Pvt Ltd / LLP registration, SEZ unit approvals, and STPI registrations for rapid operational commencement.',
    image: '/service-compliance-1.jpg',
  },
  {
    icon: FileText,
    title: 'Financial & Tax Compliance',
    description: 'Comprehensive handling of GST, TDS, corporate tax filings, and transfer pricing audits to ensure financial integrity.',
    image: '/service-compliance-2.jpg',
  },
  {
    icon: Scale,
    title: 'Labor Law Adherence',
    description: 'Strict compliance with PF, ESI, Professional Tax, and the Shops & Establishment Act to protect your workforce and reputation.',
    image: '/service-compliance-3.jpg',
  },
  {
    icon: Award,
    title: 'Quality & Certifications',
    description: 'Strategic advisory and implementation support for ISO 9001, ISO 27001, and CMMI appraisals to meet global standards.',
    image: '/service-compliance-4.jpg',
  },
];

// Stats Data
const stats: StatItem[] = [
  { value: '100%', label: 'Compliance Record', icon: ShieldCheck },
  { value: '45+', label: 'Entities Registered', icon: CheckCircle2 },
  { value: 'Zero', label: 'Penalties Incurred', icon: AlertCircle },
];

export default function CompliancePage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <ServiceHero
        overline={heroContent.overline}
        headline={heroContent.headline}
        subtext={heroContent.subtext}
        backgroundImage={heroContent.backgroundImage}
        primaryCTA={{ text: 'Get Compliance Audit' }}
        secondaryCTA={{ text: 'View Services' }}
        scrollToId="offerings"
      />

      <ServiceOfferings
        sectionLabel="Key Offerings"
        headline="Comprehensive Compliance Solutions"
        subheadline="From business incorporation to quality certifications, we provide end-to-end regulatory and compliance services for seamless market entry."
        offerings={offerings}
        ctaText="Ensure Full Compliance"
        ctaSubtext="Ready to operate with complete peace of mind in India?"
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
