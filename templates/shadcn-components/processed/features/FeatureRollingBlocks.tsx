"use client";

import { MarketingRollingBlocks } from "@/components/domain/marketing";

/**
 * FeatureRollingBlocks - Marketing Rolling Blocks Template
 *
 * A template component that showcases the MarketingRollingBlocks component
 * for restaurant operations features. This template demonstrates how to
 * integrate rolling blocks into feature sections.
 *
 * Usage:
 * ```tsx
 * import { FeatureRollingBlocks } from "@/templates/shadcn-components/processed/features";
 *
 * <FeatureRollingBlocks />
 * ```
 */
export function FeatureRollingBlocks() {
  return (
    <div className="w-full">
      <MarketingRollingBlocks />
    </div>
  );
}

// Re-export the original component for direct access
export { MarketingRollingBlocks } from "@/components/domain/marketing/index";