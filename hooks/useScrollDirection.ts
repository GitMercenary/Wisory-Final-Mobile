import { useState, useEffect } from 'react';

export type ScrollDirection = 'up' | 'down' | 'idle';

interface UseScrollDirectionOptions {
  threshold?: number;
  idleDelay?: number;
}

export const useScrollDirection = (options: UseScrollDirectionOptions = {}) => {
  const { threshold = 10, idleDelay = 2000 } = options;
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('idle');
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let idleTimer: NodeJS.Timeout;
    let ticking = false;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const difference = scrollY - lastScrollY;

      if (Math.abs(difference) < threshold) {
        ticking = false;
        return;
      }

      setScrollDirection(difference > 0 ? 'down' : 'up');
      setIsIdle(false);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;

      // Clear existing timer
      clearTimeout(idleTimer);

      // Set new idle timer
      idleTimer = setTimeout(() => {
        setIsIdle(true);
      }, idleDelay);
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(idleTimer);
    };
  }, [threshold, idleDelay]);

  return { scrollDirection, isIdle };
};
