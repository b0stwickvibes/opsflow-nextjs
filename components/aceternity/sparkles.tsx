"use client";

import * as React from "react";

// Lightweight fallback that accepts arbitrary props used by templates
export const SparklesCore: React.FC<any> = ({ 
  className = "", 
  background,
  minSize,
  maxSize,
  particleDensity,
  particleColor,
  ...rest 
}) => {
  // Use inline style background if provided to avoid unused prop warnings
  const style = background ? { background } : undefined;
  return (
    <div className={`relative overflow-hidden ${className}`} style={style} {...rest}>
      <div className="pointer-events-none absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_60%)]" />
    </div>
  );
};

