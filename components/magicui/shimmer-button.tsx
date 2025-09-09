"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

export interface ShimmerButtonProps extends React.ComponentProps<typeof Button> {
  shimmer?: boolean;
}

// Simple fallback for a ShimmerButton. Renders a Button with a subtle animated gradient.
export function ShimmerButton({ shimmer = true, className = "", children, asChild, ...rest }: ShimmerButtonProps) {
  // Note: We intentionally ignore `asChild` here to avoid Button's single-child constraint.
  // Use plain Button semantics and optionally nest a Link inside.
  return (
    <Button
      className={
        className +
        (shimmer
          ? " relative overflow-hidden "
          : "")
      }
      {...rest}
    >
      {shimmer && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]"
          style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
        />
      )}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
      <span className="relative z-10">{children}</span>
    </Button>
  );
}

export default ShimmerButton;

