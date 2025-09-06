"use client";

import React from "react";

interface SpotlightProps {
  size?: number; // px
  className?: string;
  colorFrom?: string;
  colorTo?: string;
}

export default function Spotlight({ size = 480, className = "", colorFrom = "rgba(59,130,246,0.25)", colorTo = "rgba(59,130,246,0)" }: SpotlightProps) {
  const style: React.CSSProperties = {
    background: `radial-gradient(${size}px ${size}px at var(--spot-x, 50%) var(--spot-y, 30%), ${colorFrom}, ${colorTo})`,
  };
  return <div aria-hidden className={`pointer-events-none absolute inset-0 ${className}`} style={style} />;
}

