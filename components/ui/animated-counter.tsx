"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  decimals?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  separator?: string;
}

export default function AnimatedCounter({
  value,
  duration = 2000,
  decimals = 0,
  className,
  prefix = "",
  suffix = "",
  separator = ","
}: AnimatedCounterProps) {
  const [count, setCount] = React.useState(0);
  const [isInView, setIsInView] = React.useState(false);
  const ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const startValue = count;
    const endValue = value;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + (endValue - startValue) * easeOut;
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration, count]);

  const formatNumber = (num: number) => {
    const fixed = num.toFixed(decimals);
    if (!separator) return fixed;
    
    const [integer, decimal] = fixed.split('.');
    const formattedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return decimal ? `${formattedInteger}.${decimal}` : formattedInteger;
  };

  return (
    <span ref={ref} className={cn("font-bold", className)}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
}