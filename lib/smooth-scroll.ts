'use client';

import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export class SmoothScroll {
  private lenis: Lenis | null = null;
  private tickerFunc: ((time: number) => void) | null = null;

  init() {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return; // Don't initialize smooth scroll if user prefers reduced motion
    }

    // Register ScrollTrigger to ensure it's available
    gsap.registerPlugin(ScrollTrigger);

    this.lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    // Synchronize Lenis and ScrollTrigger
    this.lenis.on('scroll', ScrollTrigger.update);

    // Create a ticker function to sync Lenis with GSAP's ticker
    this.tickerFunc = (time: number) => {
      this.lenis?.raf(time * 1000);
    };

    // Add to GSAP ticker
    gsap.ticker.add(this.tickerFunc);

    // Disable lag smoothing to prevent jumps
    gsap.ticker.lagSmoothing(0);
  }

  destroy() {
    if (this.tickerFunc) {
      gsap.ticker.remove(this.tickerFunc);
      this.tickerFunc = null;
    }
    this.lenis?.destroy();
    this.lenis = null;
  }

  scrollTo(target: string | number | HTMLElement, options?: any) {
    this.lenis?.scrollTo(target, options);
  }

  stop() {
    this.lenis?.stop();
  }

  start() {
    this.lenis?.start();
  }

  getLenis() {
    return this.lenis;
  }
}

export const smoothScroll = new SmoothScroll();
