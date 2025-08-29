"use client";

import { MarketingCTA } from "./MarketingCTA";
import { trackInteraction } from "@/lib/analytics";

interface TrackedCTAProps {
  title: string;
  description: string;
  primaryAction: { text: string; href: string };
  secondaryAction?: { text: string; href: string };
  location: string; // e.g., 'landing' | 'home'
  className?: string;
}

export function MarketingCTATracked({
  title,
  description,
  primaryAction,
  secondaryAction,
  location,
  className,
}: TrackedCTAProps) {
  return (
    <MarketingCTA
      title={title}
      description={description}
      primaryAction={primaryAction}
      secondaryAction={secondaryAction}
      className={className}
      onPrimaryClick={() => trackInteraction("cta_click", { location, variant: "primary" })}
      onSecondaryClick={() => trackInteraction("cta_click", { location, variant: "secondary" })}
    />
  );
}

