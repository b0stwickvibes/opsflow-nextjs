"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface AuroraTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
}

export const AuroraText: React.FC<AuroraTextProps> = ({
  children,
  className,
  colors = ["#ff6449", "#ff6449", "#6248fe", "#6248fe"],
}) => {
  const gradientColors = colors.join(", ");

  return (
    <span
      className={cn(
        "relative inline-block bg-gradient-to-r bg-clip-text text-transparent will-change-transform",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(90deg, ${gradientColors})`,
        backgroundSize: "200% 100%",
        animation: "aurora-shift 8s cubic-bezier(0.32, 0.72, 0, 1) infinite",
      }}
    >
      {children}
      <style jsx>{`
        @keyframes aurora-shift {
          0% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 50% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          75% {
            background-position: 50% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </span>
  );
};
