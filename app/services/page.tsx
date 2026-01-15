'use client';

import React from 'react';
import { Navbar } from '@/components/common/Navbar';
import { ServicesHero } from '@/components/sections/ServicesHero';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { Footer } from '@/components/sections/Footer';

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <ServicesHero />
      <ServicesGrid />
      <Footer />
    </main>
  );
}
