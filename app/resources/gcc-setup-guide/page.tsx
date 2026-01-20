'use client';

import React from 'react';
import { Navbar } from '@/components/common/Navbar';
import { ServiceHero } from '@/components/sections/ServiceHero';
import { ServiceOfferings, ServiceOffering } from '@/components/sections/ServiceOfferings';
import { ServiceStats, StatItem } from '@/components/sections/ServiceStats';
import { LogoTicker } from '@/components/sections/LogoTicker';
import { GuideProcess } from '@/components/sections/GuideProcess';
import { GuideTestimonials } from '@/components/sections/GuideTestimonials';
import { GuideBonuses } from '@/components/sections/GuideBonuses';
import { LeadFormSection } from '@/components/sections/LeadFormSection';
import { Footer } from '@/components/sections/Footer';
import { Calculator, FileCheck, MapPin, TrendingUp, Download, BookOpen, Rocket, FileSpreadsheet, Video, Users } from 'lucide-react';

// Hero Content - Focused on Free Download
const heroContent = {
  overline: 'Free Download — 50+ Pages',
  headline: 'The Ultimate Guide to Setting Up Your Capability Center in India.',
  subtext: "Don't start from scratch. Download the definitive roadmap covering site selection, legal entities, talent acquisition, and cost modeling—trusted by Fortune 500 leaders.",
  backgroundImage: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=2000&q=80',
};

// "What's Inside" Content - Guide chapters
const guideContents: ServiceOffering[] = [
  {
    icon: Calculator,
    title: 'The Cost Calculator',
    description: 'A plug-and-play Excel model to estimate your CAPEX and OPEX for Bengaluru, Hyderabad, Pune, and Chennai with real market data.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80',
  },
  {
    icon: FileCheck,
    title: 'Legal Entity Checklist',
    description: 'Step-by-step comparison of LLP vs. Pvt Ltd vs. SEZ setups, including timeline estimates and compliance requirements.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1600&q=80',
  },
  {
    icon: MapPin,
    title: 'Talent Density Maps',
    description: 'Exclusive heatmaps showing where to find specific tech talent (AI, Java, Data Science, Cloud) across India\'s top cities.',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1600&q=80',
  },
  {
    icon: TrendingUp,
    title: 'Case Studies',
    description: 'Real-world breakdowns of how 3 global enterprises scaled from 0 to 500 employees in under 12 months with lessons learned.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
  },
];

// Logo Ticker - Trusted Brands
const trustedLogos = [
  { name: 'TechCorp' },
  { name: 'GlobalFinance' },
  { name: 'InnovateSystems' },
  { name: 'DataDriven' },
  { name: 'CloudFirst' },
  { name: 'ScaleUp' },
];

// Stats - Guide Impact
const guideStats: StatItem[] = [
  { value: '500+', label: 'Downloads' },
  { value: '50+', label: 'Pages of Content' },
  { value: '3', label: 'Case Studies' },
];

// Process Steps
const processSteps = [
  {
    number: '01',
    icon: Download,
    title: 'Download the Guide',
    description: 'Fill in the form and get instant access to the complete 50-page PDF delivered to your inbox.',
  },
  {
    number: '02',
    icon: BookOpen,
    title: 'Review the Playbook',
    description: 'Study the strategic frameworks, checklists, and best practices from Fortune 500 implementations.',
  },
  {
    number: '03',
    icon: Calculator,
    title: 'Run Your Numbers',
    description: 'Use the included Excel cost calculator to model your CAPEX/OPEX for different Indian cities.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch with Confidence',
    description: 'Present a data-backed business case to your leadership and accelerate your India expansion.',
  },
];

// Testimonials
const testimonials = [
  {
    quote: "This guide saved us months of research. The cost calculator alone helped us secure budget approval from our CFO within a week.",
    author: "David Chen",
    position: "VP of Global Operations",
    company: "Fortune 500 Tech Company",
    rating: 5,
  },
  {
    quote: "The talent density maps were a game-changer. We knew exactly where to set up our AI center based on the data in this playbook.",
    author: "Sarah Mitchell",
    position: "Chief Strategy Officer",
    company: "Leading FinTech Enterprise",
    rating: 5,
  },
  {
    quote: "Finally, a comprehensive resource that covers everything from legal entities to cultural integration. Highly recommended for any enterprise expanding to India.",
    author: "Michael Roberts",
    position: "Head of International Expansion",
    company: "Global Healthcare Leader",
    rating: 5,
  },
];

// Bonuses
const bonuses = [
  {
    icon: FileSpreadsheet,
    title: 'Excel Cost Calculator',
    description: 'A dynamic financial model to calculate your setup costs across Bengaluru, Hyderabad, Pune, and Chennai.',
    value: '$2,500 Value',
  },
  {
    icon: Video,
    title: 'Exclusive Webinar Access',
    description: 'Get invited to our quarterly "India Market Insights" webinar with industry experts and practitioners.',
    value: '$500 Value',
  },
  {
    icon: Users,
    title: '30-Min Strategy Call',
    description: 'Book a complimentary call with our GCC experts to discuss your specific expansion requirements.',
    value: '$1,000 Value',
  },
];

export default function GCCSetupGuidePage() {
  const scrollToForm = () => {
    const formSection = document.querySelector('#lead-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* 1. Hero Section */}
      <ServiceHero
        overline={heroContent.overline}
        headline={heroContent.headline}
        subtext={heroContent.subtext}
        backgroundImage={heroContent.backgroundImage}
        primaryCTA={{
          text: 'Download Free Guide',
          onClick: scrollToForm
        }}
        secondaryCTA={{
          text: "See What's Inside",
          onClick: () => {
            const section = document.querySelector('#offerings');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        scrollToId="offerings"
      />

      {/* 2. Logo Ticker - Social Proof */}
      <LogoTicker
        title="Trusted by Industry Leaders"
        logos={trustedLogos}
      />

      {/* 3. What's Inside the Guide */}
      <ServiceOfferings
        sectionLabel="Inside the Playbook"
        headline="What's Inside the Guide?"
        subheadline="Everything you need to confidently plan and execute your India capability center setup—all in one comprehensive resource."
        offerings={guideContents}
        ctaText="Get Your Free Copy Now"
        ctaSubtext="Join 500+ enterprise leaders who have downloaded this guide"
        onCtaClick={scrollToForm}
      />

      {/* 4. Guide Stats - Credibility Numbers */}
      <ServiceStats
        stats={guideStats}
        backgroundColor="bg-[#F5F1E8]"
        accentColor="text-primary"
      />

      {/* 5. How to Use the Guide - Process Timeline */}
      <GuideProcess
        sectionLabel="How It Works"
        headline="From Download to Decision in 4 Steps"
        subheadline="This isn't just a PDF—it's a complete toolkit designed to accelerate your India strategy."
        steps={processSteps}
        ctaText="Start Your Journey"
        onCtaClick={scrollToForm}
      />

      {/* 6. Testimonials - Social Proof */}
      <GuideTestimonials
        sectionLabel="What Leaders Are Saying"
        headline="Trusted by Enterprise Decision-Makers"
        subheadline="Join hundreds of executives who have used this guide to fast-track their India expansion."
        testimonials={testimonials}
      />

      {/* 7. Bonuses Section */}
      <GuideBonuses
        sectionLabel="Exclusive Bonuses"
        headline="But Wait, There's More"
        subheadline="Download today and unlock these additional resources—absolutely free."
        bonuses={bonuses}
        ctaText="Claim Your Bonuses"
        onCtaClick={scrollToForm}
      />

      {/* 8. Lead Capture Form */}
      <LeadFormSection
        headline="Get Instant Access"
        subheadline="Fill in your details below and we'll send the guide directly to your inbox within 60 seconds."
        buttonText="Send Me the Guide"
        successMessage="Check your inbox! The guide is on its way. (Check spam if you don't see it)"
      />

      {/* 9. Footer */}
      <Footer />
    </main>
  );
}
