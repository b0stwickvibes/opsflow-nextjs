"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MarketingPageProps {
  title?: string;
  subtitle?: string;
  badge?: React.ReactNode;
  actions?: React.ReactNode;
  accent?: "orange" | "purple" | "amber" | "blue" | string;
  className?: string;
  children: React.ReactNode;
}

export default function MarketingPage({
  title,
  subtitle,
  badge,
  actions,
  accent,
  className,
  children,
}: MarketingPageProps) {
  const accentClass = accent
    ? typeof accent === "string" && ["orange", "purple", "amber", "blue"].includes(accent)
      ? `accent-${accent}`
      : accent
    : "";

  return (
    <main className={cn("section-marketing", accentClass, className)}>
      <div className="container space-y-10">
        {(title || subtitle || badge || actions) && (
          <header className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-3">
              {badge && <div className="clerk-inspired-badge">{badge}</div>}
              {title && (
                <h1 className="heading-brand-gradient text-4xl md:text-6xl font-bold tracking-tight">{title}</h1>
              )}
              {subtitle && (
                <p className="enterprise-body max-w-3xl">{subtitle}</p>
              )}
            </div>
            {actions && <div className="shrink-0 flex gap-3">{actions}</div>}
          </header>
        )}

        {children}
      </div>
    </main>
  );
}

