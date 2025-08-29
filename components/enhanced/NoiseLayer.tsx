"use client";

import React from "react";

// Subtle noise overlay using a tiny SVG data URL
export default function NoiseLayer({ className = "" }: { className?: string }) {
  const noiseSvg = encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch"/></filter><rect width="100" height="100" filter="url(#n)" opacity="0.04"/></svg>'
  );
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 ${className}`}
      style={{ backgroundImage: `url("data:image/svg+xml,${noiseSvg}")` }}
    />
  );
}

