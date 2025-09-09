"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type RefLike = React.RefObject<HTMLElement | null> | React.RefObject<HTMLDivElement | null>;

export type AnimatedBeamProps = {
  fromRef: RefLike;
  toRef: RefLike;
  containerRef?: RefLike;
  duration?: number; // seconds
  color?: string;
  className?: string;
};

// Lightweight, dependency-free line/beam between two refs.
// This is a graceful fallback for environments where the original MagicUI
// animated-beam is not present. It avoids runtime errors and provides a simple visual.
export function AnimatedBeam({
  fromRef,
  toRef,
  containerRef,
  duration = 2,
  color = "rgba(59,130,246,0.75)", // primary/blue-500 with alpha
  className = "",
}: AnimatedBeamProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [path, setPath] = useState<string>("");

  const getRects = () => {
    const fromEl = fromRef.current as HTMLElement | null;
    const toEl = toRef.current as HTMLElement | null;
    if (!fromEl || !toEl) return null;

    const containerEl = (containerRef?.current as HTMLElement | null) ?? fromEl.parentElement;
    if (!containerEl) return null;

    const containerRect = containerEl.getBoundingClientRect();
    const fromRect = fromEl.getBoundingClientRect();
    const toRect = toEl.getBoundingClientRect();

    // Start at center of from, end at center of to (relative to container)
    const start = {
      x: fromRect.left - containerRect.left + fromRect.width / 2,
      y: fromRect.top - containerRect.top + fromRect.height / 2,
    };
    const end = {
      x: toRect.left - containerRect.left + toRect.width / 2,
      y: toRect.top - containerRect.top + toRect.height / 2,
    };

    return { containerRect, start, end };
  };

  const recompute = () => {
    const info = getRects();
    if (!info) return;
    const { containerRect, start, end } = info;

    // Simple curved path (quadratic) between points
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const cx = start.x + dx / 2; // control point x (midpoint)
    const cy = start.y + dy / 2 - 40; // slight upward curve

    const d = `M ${start.x},${start.y} Q ${cx},${cy} ${end.x},${end.y}`;
    setPath(d);

    // Resize the svg to the container size
    if (svgRef.current) {
      svgRef.current.setAttribute("width", String(containerRect.width));
      svgRef.current.setAttribute("height", String(containerRect.height));
    }
  };

  useEffect(() => {
    // Initial compute
    recompute();

    // Recompute on resize/scroll
    const ro = new ResizeObserver(() => recompute());
    const fromEl = fromRef.current as HTMLElement | null;
    const toEl = toRef.current as HTMLElement | null;
    const containerEl = (containerRef?.current as HTMLElement | null) ?? fromEl?.parentElement ?? undefined;

    if (fromEl) ro.observe(fromEl);
    if (toEl) ro.observe(toEl);
    if (containerEl) ro.observe(containerEl);

    const onScroll = () => recompute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromRef, toRef, containerRef, duration]);

  const dashArray = useMemo(() => 6, []);

  return (
    <svg
      ref={svgRef}
      className={`pointer-events-none absolute inset-0 z-0 ${className}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          // Animate the dash offset continuously to suggest motion
          strokeDasharray: dashArray,
          strokeDashoffset: 0,
          animation: `beam-dash ${duration}s linear infinite`,
        }}
      />
      <style>{`
        @keyframes beam-dash {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: ${dashArray}; }
        }
      `}</style>
    </svg>
  );
}

export default AnimatedBeam;

