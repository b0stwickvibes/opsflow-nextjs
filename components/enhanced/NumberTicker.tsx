"use client";

import React from "react";

interface NumberTickerProps {
  value: number;
  duration?: number; // ms
  prefix?: string;
  suffix?: string;
  className?: string;
  decimals?: number;
}

export default function NumberTicker({
  value,
  duration = 1200,
  prefix,
  suffix,
  className,
  decimals = 0,
}: NumberTickerProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    let raf: number | null = null;
    let start: number | null = null;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Start only when visible
    const startAnimation = () => {
      if (prefersReduced) {
        setDisplay(value);
        return;
      }
      const step = (ts: number) => {
        if (start === null) start = ts;
        const progress = Math.min(1, (ts - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        setDisplay(value * eased);
        if (progress < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startAnimation();
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  const formatted = React.useMemo(() => {
    const factor = Math.pow(10, decimals);
    const n = Math.round(display * factor) / factor;
    return n.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }, [display, decimals]);

  return (
    <span ref={ref} className={className} aria-live="polite">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

