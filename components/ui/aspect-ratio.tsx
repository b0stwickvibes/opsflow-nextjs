"use client";

import * as React from "react";

export interface AspectRatioProps {
  ratio?: number; // width / height
  className?: string;
  children: React.ReactNode;
}

export function AspectRatio({ ratio = 16 / 9, className = "", children }: AspectRatioProps) {
  const paddingBottom = `${100 / ratio}%`;
  return (
    <div className={className} style={{ position: "relative", width: "100%", paddingBottom }}>
      <div style={{ position: "absolute", inset: 0 }}>{children}</div>
    </div>
  );
}

export default AspectRatio;

