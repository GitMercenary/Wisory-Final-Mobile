'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  magnetic?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, magnetic = false, ...props }, ref) => {
    // Design System: Using rounded-button for all buttons (12px)
    const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-button';

    const variants = {
      primary: 'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl',
      secondary: 'bg-charcoal text-white hover:bg-black shadow-md hover:shadow-lg',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
      ghost: 'text-black hover:bg-vapor',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <motion.button
        ref={ref}
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        whileHover={{ scale: magnetic ? 1 : 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
