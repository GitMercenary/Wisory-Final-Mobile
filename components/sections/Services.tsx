'use client';

import React from 'react';
import { Building2, Users, TrendingUp, Cpu, Shield, Rocket } from 'lucide-react';
import { PinnedSectionPlain } from './PinnedSectionPlain';
// import { PinnedSectionWithPop } from './PinnedSectionWithPop'; // Alternative with bubble entrance

const services = [
  {
    id: 1,
    icon: Building2,
    title: 'GCC Setup & Strategy',
    subtitle: 'Foundation of Success',
    description: 'End-to-end capability center establishment from site selection to operational launch, tailored to your enterprise needs.',
    features: [
      'Site selection & analysis',
      'Legal entity formation',
      'Infrastructure setup',
      'Strategic roadmap design'
    ],
    image: '/img6.jpg',
    bgColor: '#EF3A33',
  },
  {
    id: 2,
    icon: Users,
    title: 'Talent Acquisition',
    subtitle: 'Access Top Talent',
    description: 'Access India\'s best tech talent with our proven recruitment processes and retention strategies.',
    features: [
      'Executive search',
      'Technical hiring',
      'Retention programs',
      'Employer branding'
    ],
    image: '/img9.jpeg',
    bgColor: '#C92F29',
  },
  {
    id: 3,
    icon: TrendingUp,
    title: 'Operations Excellence',
    subtitle: 'Optimize Performance',
    description: 'Optimize your center\'s performance with world-class operational frameworks and continuous improvement.',
    features: [
      'Process optimization',
      'Quality management',
      'Performance metrics',
      'Continuous improvement'
    ],
    image: '/img10.jpg',
    bgColor: '#EF3A33',
  },
  {
    id: 4,
    icon: Cpu,
    title: 'Technology Integration',
    subtitle: 'Digital Transformation',
    description: 'Seamlessly integrate cutting-edge technologies and platforms to enhance productivity and innovation.',
    features: [
      'Cloud infrastructure',
      'DevOps setup',
      'Security systems',
      'Innovation labs'
    ],
    image: '/img11.png',
    bgColor: '#C92F29',
  },
  {
    id: 5,
    icon: Shield,
    title: 'Compliance & Governance',
    subtitle: 'Risk Management',
    description: 'Navigate complex regulatory landscapes with comprehensive compliance and risk management solutions.',
    features: [
      'Regulatory compliance',
      'Data protection',
      'Audit support',
      'Policy framework'
    ],
    image: '/img1.jpg',
    bgColor: '#EF3A33',
  },
  {
    id: 6,
    icon: Rocket,
    title: 'Scaling & Optimization',
    subtitle: 'Growth Strategy',
    description: 'Scale your operations efficiently while maintaining quality and driving continuous performance improvements.',
    features: [
      'Capacity planning',
      'Resource optimization',
      'Expansion strategy',
      'Cost management'
    ],
    image: '/img2.jpg',
    bgColor: '#C92F29',
  },
];

export const Services: React.FC = () => {
  return (
    <PinnedSectionPlain
      slides={services}
      sectionTitle="Our Solutions"
      sectionSubtitle="Comprehensive Capability Center Services"
      sectionDescription="From strategic planning to operational excellence, we deliver integrated solutions that transform your India capability center into a competitive advantage."
    />
  );
};
