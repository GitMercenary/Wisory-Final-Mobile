'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    // Ensure minimum display time
    const minLoadTime = setTimeout(() => {
      if (videoEnded) {
        setIsLoading(false);
      }
    }, 500);

    return () => clearTimeout(minLoadTime);
  }, [videoEnded]);

  const handleVideoEnd = () => {
    setVideoEnded(true);
    // Small delay before hiding preloader
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <video
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
              className="max-w-[90vw] max-h-[90vh] object-contain"
            >
              <source src="/preloader.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
