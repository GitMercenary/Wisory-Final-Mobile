'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight, TrendingUp, Users } from 'lucide-react';
import { Button } from '../ui/Button';
import { MagneticButton } from '../common/MagneticButton';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    // CHANGED: Background from Black (#000) to Deep Royal Navy (#020617) for a corporate look
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#020617] pt-20 lg:pt-0">
      
      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 z-0">
        {/* 1. Gradient Mesh - Gives depth without looking like "AI Art" */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-900/20 rounded-full blur-[100px]" />
        
        {/* 2. World Dot Pattern - Subtle "Global" texture */}
        <div 
            className="absolute inset-0 opacity-[0.15]"
            style={{
                backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* --- LEFT COLUMN: The Pitch --- */}
          <motion.div 
            initial="hidden" 
            animate="visible" 
            transition={{ staggerChildren: 0.1 }}
            className="flex flex-col items-start"
          >
            {/* Tagline */}
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="px-3 py-1 text-xs font-bold tracking-widest text-blue-200 uppercase bg-blue-900/30 border border-blue-800 rounded-md">
                Strategic GCC Partners
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Think Wise. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                Act Global.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p variants={fadeInUp} className="text-lg text-slate-300 max-w-lg mb-8 leading-relaxed font-light">
              We streamline your entry into India. From establishing your legal entity to hiring your core leadership team, we build the foundation for your <strong>Global Capability Center</strong>.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
              <MagneticButton strength={0.3} tolerance={2}>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => document.getElementById('footer-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="rounded-full bg-red-600 hover:bg-red-700 text-white px-8 h-12 shadow-lg shadow-red-900/20 border-0"
                >
                  Schedule Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </MagneticButton>

              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-full border-slate-700 text-slate-300 hover:bg-white hover:text-slate-900 h-12 px-8"
              >
                Our Services
              </Button>
            </motion.div>

            {/* Trust Metrics */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-8 border-t border-slate-800 pt-8 w-full max-w-md">
                <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-red-500 mt-1" />
                    <div>
                        <h4 className="text-2xl font-bold text-white">45-60%</h4>
                        <p className="text-xs text-slate-400 uppercase">Cost Arbitrage</p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-red-500 mt-1" />
                    <div>
                        <h4 className="text-2xl font-bold text-white">5.4M+</h4>
                        <p className="text-xs text-slate-400 uppercase">Talent Pool</p>
                    </div>
                </div>
            </motion.div>
          </motion.div>

          {/* --- RIGHT COLUMN: Stylized India Map (Clean SVG) --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[500px] w-full flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                
                {/* 1. The Map Container */}
                <div className="relative w-full h-full p-8">
                    {/* Abstract Glow behind map */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-600/10 blur-[80px] rounded-full" />
                    
                    {/* 2. SVG Map of India (Simplified Architectural Polygon) */}
                    <svg 
                        viewBox="0 0 612 792" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full drop-shadow-2xl"
                    >
                        {/* The simplified map path */}
                        <path 
                            d="M298.6,69.5 c0,0,16.5-12.8,25.6-8.2 s22,11,22,11 s16.5,7.3,16.5,22 s0,22,5.5,27.5 s16.5,12.8,27.5,12.8 s22,0,29.3,5.5 s14.7,11,14.7,20.2 s-3.7,16.5,1.8,23.8 s14.7,11,20.2,18.3 s5.5,18.3,0,27.5 s-11,20.2-11,29.3 s5.5,18.3,5.5,25.6 s-5.5,14.7-11,20.2 s-11,11-12.8,20.2 s-1.8,18.3-5.5,25.6 s-9.2,14.7-14.7,20.2 s-9.2,11-12.8,18.3 s-5.5,14.7-9.2,20.2 s-5.5,9.2-9.2,12.8 s-5.5,5.5-9.2,7.3 s-9.2,1.8-12.8,0 s-5.5-5.5-9.2-11 s-5.5-11-9.2-14.7 s-5.5-5.5-9.2-7.3 s-9.2-1.8-14.7,0 s-9.2,5.5-12.8,11 s-5.5,11-9.2,14.7 s-5.5,5.5-11,5.5 s-11-3.7-16.5-9.2 s-9.2-11-12.8-16.5 s-5.5-11-9.2-16.5 s-5.5-9.2-11-12.8 s-9.2-5.5-14.7-5.5 s-9.2,1.8-12.8,5.5 s-5.5,5.5-9.2,9.2 s-5.5,5.5-9.2,5.5 s-5.5-1.8-9.2-5.5 s-5.5-9.2-5.5-14.7 s1.8-9.2,5.5-12.8 s9.2-5.5,14.7-5.5 s9.2,1.8,12.8,5.5 s5.5,5.5,9.2,5.5 s5.5-1.8,9.2-5.5 s5.5-9.2,9.2-14.7 s5.5-9.2,9.2-12.8 s9.2-5.5,14.7-5.5 s9.2,1.8,12.8,5.5 s5.5,5.5,9.2,5.5 s5.5-1.8,9.2-5.5 s5.5-9.2,9.2-14.7 s5.5-9.2,9.2-12.8 s9.2-5.5,14.7-5.5 s9.2,1.8,12.8,5.5 s5.5,5.5,9.2,5.5 s5.5-1.8,9.2-5.5 s5.5-9.2,5.5-14.7 s-1.8-9.2-5.5-12.8 s-9.2-5.5-14.7-5.5 s-9.2,1.8-12.8,5.5 s-5.5,5.5-9.2,5.5 s-5.5-1.8-9.2-5.5 s-5.5-9.2-9.2-14.7 s-5.5-9.2-9.2-12.8 s-9.2-5.5-14.7-5.5 s-9.2,1.8-12.8,5.5 s-5.5,5.5-9.2,5.5 s-5.5-1.8-9.2-5.5 s-5.5-9.2-9.2-14.7 s-5.5-9.2-9.2-12.8 s-9.2-5.5-14.7-5.5 s-9.2,1.8-12.8,5.5 s-5.5,5.5-9.2,5.5 s-5.5-1.8-9.2-5.5 s-5.5-9.2-9.2-14.7 s-5.5-9.2-9.2-12.8 s-9.2-5.5-14.7-5.5 s-9.2,1.8-12.8,5.5 s-5.5,5.5-9.2,5.5 s-5.5-1.8-9.2-5.5 s-5.5-9.2-9.2-14.7 s-5.5-9.2-9.2-12.8" 
                            className="fill-slate-800/80 stroke-slate-600 stroke-1"
                        />
                        
                        {/* Animated Hubs (Circles on the map) */}
                        {/* Bangalore */}
                        <g className="group cursor-pointer">
                            <circle cx="280" cy="580" r="4" className="fill-red-500 animate-pulse" />
                            <circle cx="280" cy="580" r="12" className="stroke-red-500/30 stroke-1 animate-[ping_3s_linear_infinite]" />
                             {/* Label */}
                            <text x="300" y="585" className="fill-white text-[14px] font-sans opacity-0 group-hover:opacity-100 transition-opacity">Bangalore</text>
                        </g>

                         {/* Delhi/NCR */}
                         <g className="group cursor-pointer">
                            <circle cx="260" cy="280" r="3" className="fill-slate-400" />
                            <text x="280" y="285" className="fill-slate-400 text-[12px] font-sans opacity-0 group-hover:opacity-100 transition-opacity">Delhi NCR</text>
                        </g>

                         {/* Hyderabad */}
                         <g className="group cursor-pointer">
                            <circle cx="300" cy="500" r="3" className="fill-slate-400" />
                            <text x="320" y="505" className="fill-slate-400 text-[12px] font-sans opacity-0 group-hover:opacity-100 transition-opacity">Hyderabad</text>
                        </g>
                    </svg>

                    {/* Simple "Callout" Card - Clean & Minimal */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="absolute bottom-10 right-0 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-4 rounded-lg shadow-xl"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400">
                                <TrendingUp size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400">Average ROI</p>
                                <p className="text-sm font-bold text-white">30-40% <span className="text-green-500 text-xs font-normal">in Year 1</span></p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 opacity-60 hover:opacity-100 transition-opacity"
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={24} className="text-white" />
      </motion.button>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none" />
    </section>
  );
};