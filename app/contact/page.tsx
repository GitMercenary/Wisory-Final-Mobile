'use client';

import React from 'react';
import { Navbar } from '@/components/common/Navbar';
import { ServiceHero } from '@/components/sections/ServiceHero';
import { ContactSplitSection } from '@/components/sections/ContactSplitSection';
import { Footer } from '@/components/sections/Footer';

// Hero Content
const heroContent = {
  overline: 'Contact Us',
  headline: "Let's Discuss Your Global Strategy.",
  subtext: 'Whether you are looking to set up a new capability center or optimize an existing one, our team is ready to assist you.',
  backgroundImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2000&q=80',
};

// Contact Information
const contactInfo = {
  email: 'connect@wisoryglobal.com',
  phone: '+91 98765 43210',
  address: [
    'Wisory Global HQs,',
    'HITEC City, Hyderabad,',
    'Telangana, India - 500081'
  ],
};

// Google Maps Embed URL for HITEC City, Hyderabad
const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2279774402196!2d78.37369491487756!3d17.44706198803766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688beb557fa0ee!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin';

export default function ContactPage() {
  const scrollToForm = () => {
    const formSection = document.querySelector('#contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <ServiceHero
        overline={heroContent.overline}
        headline={heroContent.headline}
        subtext={heroContent.subtext}
        backgroundImage={heroContent.backgroundImage}
        primaryCTA={{
          text: 'Get in Touch',
          onClick: scrollToForm
        }}
        secondaryCTA={{
          text: 'View Our Services',
          onClick: () => {
            window.location.href = '/services';
          }
        }}
        scrollToId="contact-form"
      />

      {/* Contact Split Section with Form and Map */}
      <div id="contact-form">
        <ContactSplitSection
          contactInfo={contactInfo}
          mapEmbedUrl={mapEmbedUrl}
        />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
