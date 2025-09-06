"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.15, // Better initial rotation
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [0.9, 0.9, 0.9], // Slightly darker for better visibility
  markerColor: [251 / 255, 100 / 255, 21 / 255], // Restaurant orange
  glowColor: [1, 1, 1],
  markers: [
    // Major restaurant/food service locations
    { location: [40.7128, -74.006], size: 0.08 }, // New York
    { location: [34.0522, -118.2437], size: 0.08 }, // Los Angeles
    { location: [41.8781, -87.6298], size: 0.06 }, // Chicago
    { location: [29.7604, -95.3698], size: 0.05 }, // Houston
    { location: [33.4484, -112.074], size: 0.04 }, // Phoenix
    { location: [51.5074, -0.1278], size: 0.07 }, // London
    { location: [48.8566, 2.3522], size: 0.06 }, // Paris
    { location: [35.6762, 139.6503], size: 0.07 }, // Tokyo
    { location: [37.7749, -122.4194], size: 0.06 }, // San Francisco
    { location: [25.7617, -80.1918], size: 0.04 }, // Miami
  ],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  let phi = 0.5; // Better initial rotation to center on Atlantic
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    // Wait for component to mount and have dimensions
    const initGlobe = () => {
      if (!canvasRef.current) return null;
      
      onResize();
      
      // Ensure canvas has dimensions before creating globe
      if (width === 0) {
        setTimeout(initGlobe, 100);
        return null;
      }

      const globe = createGlobe(canvasRef.current, {
        ...config,
        width: width * 2,
        height: width * 2,
        onRender: (state) => {
          if (!pointerInteracting.current) phi += 0.005;
          state.phi = phi + rs.get();
          state.width = width * 2;
          state.height = width * 2;
        },
      });

      // Show canvas after globe is created
      setTimeout(() => {
        if (canvasRef.current) {
          canvasRef.current.style.opacity = "1";
        }
      }, 500);
      
      return globe;
    };

    window.addEventListener("resize", onResize);
    const globe = initGlobe();
    
    return () => {
      if (globe) {
        globe.destroy();
      }
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <canvas
      ref={canvasRef}
      onPointerDown={(e) => {
        updatePointerInteraction(
          e.clientX - pointerInteractionMovement.current,
        );
      }}
      onPointerUp={() => updatePointerInteraction(null)}
      onPointerOut={() => updatePointerInteraction(null)}
      onMouseMove={(e) => updateMovement(e.clientX)}
      onTouchMove={(e) =>
        e.touches[0] && updateMovement(e.touches[0].clientX)
      }
      className={cn(
        "size-full opacity-0 transition-opacity duration-500 [contain:layout_style_size]",
        className,
      )}
    />
  );
}
