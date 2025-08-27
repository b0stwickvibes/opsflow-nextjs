import { trackInteraction } from "@/lib/analytics";
export const pricingAnalytics = {
  comparisonViewed(context: Record<string, unknown> = {}) {
    trackInteraction("pricing_comparison_viewed", context);
  },
  planHovered(planId: string) {
    trackInteraction("pricing_plan_hovered", { planId });
  },
  planSelected(planId: string, billing: "monthly" | "annual") {
    trackInteraction("pricing_plan_selected", { planId, billing });
  },
  toggleBilling(billing: "monthly" | "annual") {
    trackInteraction("pricing_billing_toggled", { billing });
  },
  ctaClicked(planId: string, targetHref: string) {
    trackInteraction("pricing_cta_clicked", { planId, targetHref });
  },
};
