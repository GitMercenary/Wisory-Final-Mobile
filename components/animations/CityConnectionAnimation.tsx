'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface City {
  name: string;
  x: number; // percentage
  y: number; // percentage
}

const cities: City[] = [
  { name: 'Hyderabad', x: 50, y: 40 },
  { name: 'Pune', x: 30, y: 60 },
  { name: 'Delhi', x: 45, y: 20 },
  { name: 'Bangalore', x: 55, y: 70 },
  { name: 'Mumbai', x: 25, y: 50 },
  { name: 'Chennai', x: 65, y: 65 },
];

const connections = [
  [0, 1], // Hyderabad - Pune
  [0, 2], // Hyderabad - Delhi
  [0, 3], // Hyderabad - Bangalore
  [1, 4], // Pune - Mumbai
  [2, 4], // Delhi - Mumbai
  [3, 5], // Bangalore - Chennai
];

export const CityConnectionAnimation: React.FC = () => {
  const [activeCity, setActiveCity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCity((prev) => (prev + 1) % cities.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Connection Lines */}
        {connections.map(([startIdx, endIdx], idx) => {
          const start = cities[startIdx];
          const end = cities[endIdx];
          const isActive =
            activeCity === startIdx || activeCity === endIdx;

          return (
            <motion.line
              key={`connection-${idx}`}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke="url(#lineGradient)"
              strokeWidth="0.2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: isActive ? 1 : 0.3,
                opacity: isActive ? 0.8 : 0.2,
              }}
              transition={{
                duration: 1.5,
                ease: 'easeInOut',
              }}
            />
          );
        })}

        {/* City Markers */}
        {cities.map((city, idx) => {
          const isActive = activeCity === idx;

          return (
            <g key={`city-${idx}`}>
              {/* Pulse Ring */}
              {isActive && (
                <motion.circle
                  cx={city.x}
                  cy={city.y}
                  r="2"
                  fill="none"
                  stroke="#EF3A33"
                  strokeWidth="0.3"
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 3, opacity: 0 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }}
                />
              )}

              {/* City Dot */}
              <motion.circle
                cx={city.x}
                cy={city.y}
                r="1"
                initial={{ scale: 0.5, opacity: 0.5 }}
                animate={{
                  scale: isActive ? 1.5 : 1,
                  opacity: isActive ? 1 : 0.6,
                }}
                transition={{ duration: 0.5 }}
                fill={isActive ? '#EF3A33' : '#E5C576'}
              />

              {/* City Label */}
              <motion.text
                x={city.x}
                y={city.y - 3}
                textAnchor="middle"
                className="text-[2px] font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: isActive ? 1 : 0.4 }}
                transition={{ duration: 0.5 }}
                fill="white"
              >
                {city.name}
              </motion.text>
            </g>
          );
        })}

        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EF3A33" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#E5C576" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
