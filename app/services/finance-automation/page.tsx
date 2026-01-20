'use client';

import React from 'react';
import { Navbar } from '@/components/common/Navbar';
import { ServiceHero } from '@/components/sections/ServiceHero';
import { ServiceOfferings, ServiceOffering } from '@/components/sections/ServiceOfferings';
import { ServiceStats, StatItem } from '@/components/sections/ServiceStats';
import { Footer } from '@/components/sections/Footer';
import { BookOpen, TrendingUp, Cpu, BarChart3, DollarSign, Target, Clock } from 'lucide-react';

// Hero Content
const heroContent = {
  overline: 'Finance & Automation',
  headline: 'Precision Finance. Intelligent Automation.',
  subtext: 'Transform your financial operations. We combine expert accounting teams with RPA (Robotic Process Automation) to streamline payables, receivables, and reporting—delivering 100% accuracy and real-time insights.',
  backgroundImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=2000&q=80',
};

// Key Offerings Data
const offerings: ServiceOffering[] = [
  {
    icon: BookOpen,
    title: 'Accounting & Bookkeeping',
    description: 'Rigorous daily transaction management, reconciliation, and monthly closings ensuring your books are audit-ready at all times.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80',
  },
  {
    icon: TrendingUp,
    title: 'Virtual CFO Services',
    description: 'Strategic financial planning, cash flow forecasting, and unit economics analysis to guide your expansion decisions without the overhead of a full-time CFO.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
  },
  {
    icon: Cpu,
    title: 'Finance Process Automation',
    description: 'Implementing custom RPA bots for high-volume tasks like invoice processing and reconciliation to eliminate manual error and reduce costs.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=80',
  },
  {
    icon: BarChart3,
    title: 'MIS & Global Reporting',
    description: 'Custom-built, real-time financial dashboards that give your global HQ instant visibility into Indian operations.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
  },
];

// Stats Data
const stats: StatItem[] = [
  { value: '40%', label: 'Operational Cost Savings', icon: DollarSign },
  { value: 'ZERO', label: 'Reconciliation Errors', icon: Target },
  { value: '24Hr', label: 'Reporting Turnaround', icon: Clock },
];

export default function FinanceAutomationPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <ServiceHero
        overline={heroContent.overline}
        headline={heroContent.headline}
        subtext={heroContent.subtext}
        backgroundImage={heroContent.backgroundImage}
        primaryCTA={{ text: 'Get Finance Assessment' }}
        secondaryCTA={{ text: 'Explore Solutions' }}
        scrollToId="offerings"
      />

      <ServiceOfferings
        sectionLabel="Key Offerings"
        headline="Intelligent Finance Solutions"
        subheadline="From daily bookkeeping to strategic CFO advisory and RPA automation, we deliver comprehensive finance solutions that drive efficiency and accuracy."
        offerings={offerings}
        ctaText="Transform Your Finance Operations"
        ctaSubtext="Ready to achieve precision finance with intelligent automation?"
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
