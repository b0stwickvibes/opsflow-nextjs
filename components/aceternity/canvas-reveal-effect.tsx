"use client";

import * as React from "react";

// Lightweight fallback that accepts arbitrary props used by templates
export const CanvasRevealEffect: React.FC<any> = ({ 
  className = "", 
  containerClassName,
  animationSpeed,
  colors,
  dotSize,
  ...rest 
}) => {
  return (
    <div className={`relative overflow-hidden ${containerClassName || className}`} {...rest}>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
    </div>
  );
};

