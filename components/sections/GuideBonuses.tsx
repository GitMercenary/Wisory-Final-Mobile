'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Gift, FileSpreadsheet, Video, Users, CheckCircle, LucideIcon } from 'lucide-react';

interface BonusItem {
  icon: LucideIcon;
  title: string;
  description: string;
  value?: string;
}

interface GuideBonusesProps {
  sectionLabel?: string;
  headline?: string;
  subheadline?: string;
  bonuses?: BonusItem[];
  ctaText?: string;
  onCtaClick?: () => void;
}

const defaultBonuses: BonusItem[] = [
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

export const GuideBonuses: React.FC<GuideBonusesProps> = ({
  sectionLabel = 'Exclusive Bonuses',
  headline = 'But Wait, There\'s More',
  subheadline = 'Download today and unlock these additional resources—absolutely free.',
  bonuses = defaultBonuses,
  ctaText = 'Claim Your Bonuses',
  onCtaClick,
}) => {
  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      const formSection = document.querySelector('#lead-form');
      if (formSection) formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalValue = bonuses.reduce((acc, bonus) => {
    const match = bonus.value?.match(/\$([0-9,]+)/);
    return acc + (match ? parseInt(match[1].replace(',', ''), 10) : 0);
  }, 0);

  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-5" />
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-primary rounded-full blur-3xl opacity-20"
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary rounded-full blur-3xl opacity-10"
        animate={{ scale: [1, 1.3, 1], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Gift className="w-5 h-5" />
            <span className="font-medium text-sm">{sectionLabel}</span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {headline}
          </motion.h2>
          <motion.p
            className="text-white/70 text-base md:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {subheadline}
          </motion.p>
        </div>

        {/* Bonus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={bonus.title}
              className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-primary/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              {/* Value Badge */}
              {bonus.value && (
                <div className="absolute -top-3 -right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {bonus.value}
                </div>
              )}

              {/* Icon */}
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/30 transition-colors">
                <bonus.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-bold text-white mb-3">
                {bonus.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {bonus.description}
              </p>

              {/* Checkmark */}
              <div className="mt-5 flex items-center gap-2 text-primary">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">Included Free</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total Value */}
        {totalValue > 0 && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-white/50 text-sm mb-2">Total Bonus Value</p>
            <p className="text-4xl md:text-5xl font-heading font-bold text-primary">
              ${totalValue.toLocaleString()}+
            </p>
            <p className="text-white/70 mt-2">Yours FREE with the guide</p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            onClick={handleCtaClick}
            className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-primary-dark transition-colors duration-fast shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {ctaText}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
