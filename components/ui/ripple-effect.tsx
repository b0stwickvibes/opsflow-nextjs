"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface RippleEffectProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  duration?: number;
  disabled?: boolean;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

export default function RippleEffect({
  children,
  className,
  color = "rgba(255, 255, 255, 0.3)",
  duration = 600,
  disabled = false,
}: RippleEffectProps) {
  const [ripples, setRipples] = React.useState<Ripple[]>([]);
  const nextRippleId = React.useRef(0);

  const addRipple = React.useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const size = Math.max(rect.width, rect.height) * 2;

    const newRipple: Ripple = {
      id: nextRippleId.current++,
      x: x - size / 2,
      y: y - size / 2,
      size,
    };

    setRipples(prev => [...prev, newRipple]);

    // Remove ripple after animation completes
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, duration);
  }, [disabled, duration]);

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onMouseDown={addRipple}
    >
      {children}
      
      {/* Ripple animations */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full pointer-events-none animate-ping"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            backgroundColor: color,
            animationDuration: `${duration}ms`,
            animationFillMode: "forwards",
          }}
        />
      ))}
    </div>
  );
}