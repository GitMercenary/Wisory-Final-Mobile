'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

export interface StatItem {
  value: string;
  label: string;
  suffix?: string;
  icon?: LucideIcon;
}



interface ServiceStatsProps {

  stats: StatItem[];

  backgroundColor?: string;

  accentColor?: string;

}



// Animated counter component

const AnimatedCounter: React.FC<{ value: string; suffix?: string; isInView: boolean }> = ({

  value,

  suffix = '',

  isInView

}) => {

  const [displayValue, setDisplayValue] = useState('0');



  useEffect(() => {

    if (!isInView) return;



    // Extract numeric part and any prefix (like "1M+")

    const numericMatch = value.match(/^(\d+)/);

    if (!numericMatch) {

      setDisplayValue(value);

      return;

    }



    const targetNum = parseInt(numericMatch[1], 10);

    const prefix = value.slice(0, value.indexOf(numericMatch[1]));

    const postfix = value.slice(value.indexOf(numericMatch[1]) + numericMatch[1].length);



    let startTime: number;

    const duration = 2000; // 2 seconds



    const animate = (currentTime: number) => {

      if (!startTime) startTime = currentTime;

      const elapsed = currentTime - startTime;

      const progress = Math.min(elapsed / duration, 1);



      // Easing function (ease-out)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      const currentValue = Math.floor(easeOutQuart * targetNum);



      setDisplayValue(`${prefix}${currentValue}${postfix}`);



      if (progress < 1) {

        requestAnimationFrame(animate);

      } else {

        setDisplayValue(value);

      }

    };



    requestAnimationFrame(animate);

  }, [value, isInView]);



  return (

    <span>

      {displayValue}

      {suffix}

    </span>

  );

};



export const ServiceStats: React.FC<ServiceStatsProps> = ({

  stats,

  backgroundColor = 'bg-[#F5F1E8]',

  accentColor = 'text-primary',

}) => {

  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { once: true, margin: '-100px' });



  return (

    <section ref={ref} className={`py-16 md:py-24 ${backgroundColor}`}>

      <div className="container-custom">

        <motion.div

          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"

          initial={{ opacity: 0, y: 40 }}

          animate={isInView ? { opacity: 1, y: 0 } : {}}

          transition={{ duration: 0.8, ease: 'easeOut' }}

        >

          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
            >
              {/* Icon */}
              {stat.icon && (
                <div className={`mb-4 ${accentColor}`}>
                  <stat.icon className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} />
                </div>
              )}
              {/* Stat Value */}
              <div className={`text-5xl md:text-6xl lg:text-7xl font-heading font-bold ${accentColor} mb-4`}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
              </div>
              {/* Label */}
              <p className="text-grey text-lg md:text-xl font-medium tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </motion.div>

      </div>

    </section>

  );

};