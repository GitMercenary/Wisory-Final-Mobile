import { Navbar } from '@/components/common/Navbar';
import { Preloader } from '@/components/common/Preloader';
import { Hero } from '@/components/sections/Hero';
{ /*import { Hero as NewHero} from '@/components/sections/hero1'; */}
import { WhatWeDo } from '@/components/sections/WhatWeDo';
import { Services } from '@/components/sections/Services';
import PinnedSectionWithBubble from '@/components/sections/PinnedSectionWithBubble';
import { About } from '@/components/sections/About';
import { Team } from '@/components/sections/Team';
import { Recognition } from '@/components/sections/Recognition';
import { MediaMentions } from '@/components/sections/MediaMentions';
import { Values } from '@/components/sections/Values';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { Process } from '@/components/sections/Process';
import { Testimonials } from '@/components/sections/Testimonials';
import { Blog } from '@/components/sections/Blog';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Preloader />
      <main className="min-h-screen">
        <Navbar />
        {/* <NewHero /> */}
        <Hero />
      <WhatWeDo />
      {/* 1. <Services /> */}
      <PinnedSectionWithBubble />
      <About />
      {/* <Team /> */}
      {/* <Recognition /> */}
      {/* <MediaMentions /> */}
      <Values /> 
      {/* <CaseStudies /> */}
      <Process /> 
      {/* <Testimonials /> */}
      <Blog />
      {/* <CTA /> */}
      <Footer />
      </main>
    </>
  );
}
