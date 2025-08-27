/**
 * Enhanced OpsFlow Button - Integrates Scaler's moving border with OpsFlow styling
 * Bulletproof styling system + premium animations
 */

"use client";

import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button';
import { useOpsFlowStyles } from '@/lib/style-system';

// Moving border component adapted for OpsFlow
const MovingBorder = ({
  children,
  duration = 3000,
  className,
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
}) => {
  const progress = useMotionValue(0);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      progress.set((prev) => (prev + 1) % 100);
    }, duration / 100);
    
    return () => clearInterval(interval);
  }, [duration, progress]);

  const borderGradient = useMotionTemplate`conic-gradient(from ${progress}deg, hsl(var(--primary)) 0deg, transparent 60deg, transparent 300deg, hsl(var(--primary)) 360deg)`;

  return (
    <motion.div
      className={cn('relative inline-block p-[1px] rounded-lg', className)}
      style={{ background: borderGradient }}
    >
      {children}
    </motion.div>
  );
};

interface EnhancedButtonProps extends ButtonProps {
  /** Enable premium moving border effect */
  movingBorder?: boolean;
  /** Animation duration for moving border */
  borderDuration?: number;
}

export const EnhancedButton = React.forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ className, variant = 'default', movingBorder = false, borderDuration = 3000, children, ...props }, ref) => {
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    
    // Apply OpsFlow style protection
    useOpsFlowStyles(
      buttonRef,
      'button',
      ['transition-all', 'duration-200', 'font-medium']
    );

    const button = (
      <Button
        ref={ref || buttonRef}
        variant={variant}
        className={cn(
          'ops-button',
          'relative overflow-hidden',
          'hover:scale-105 transition-all duration-200',
          'active:scale-95',
          movingBorder && 'border-transparent bg-background',
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );

    if (movingBorder) {
      return (
        <MovingBorder duration={borderDuration} className="rounded-lg">
          {button}
        </MovingBorder>
      );
    }

    return button;
  }
);

EnhancedButton.displayName = 'EnhancedButton';

// Pre-configured variants for common use cases
export const PremiumCTAButton = (props: Omit<EnhancedButtonProps, 'movingBorder' | 'variant'>) => (
  <EnhancedButton
    movingBorder
    variant="default"
    className="px-8 py-3 text-lg font-semibold"
    {...props}
  />
);

export const RestaurantActionButton = (props: EnhancedButtonProps) => (
  <EnhancedButton
    className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
    {...props}
  />
);

export default EnhancedButton;