import { MarketingCTA } from "@/components/shared/layout";
import { FeaturesHeroGrid, FeatureBoard, SplitFeature } from "@/components/domain/product";

export default function ProductFeaturesPage() {
  return (
    <div className="min-h-screen">
      {/* Plasma/Stripe-style hero */}
      <FeaturesHeroGrid />

      {/* Feature board (large left tile + five tiles) */}
      <FeatureBoard />

      {/* Split features with real visuals */}
      <SplitFeature
        title="Temperature monitoring without spreadsheets"
        subtitle="Real‑time readings across walk‑ins, low‑boys, and hot‑holding with alerts that create corrective actions automatically."
        bullets={[
          "Bluetooth and IoT sensors feed live logs",
          "Threshold alerts with escalation",
          "Supervisor sign‑off and audit trail",
        ]}
        image={{ src: "/images/features/temp-split.png", alt: "Temperature dashboard screenshot", caption: "temp-split.png" }}
        captureId="feature-temp-split"
      />

      <SplitFeature
        reverse
        title="HACCP workflows that stay inspection‑ready"
        subtitle="Digital control points, sign‑offs, and exportable reports keep your restaurant compliant every day."
        bullets={[
          "Daily control point prompts",
          "Incident logging and CAPA",
          "PDF/CSV exports for inspectors",
        ]}
        image={{ src: "/images/features/haccp-audit.png", alt: "HACCP audit screenshot", caption: "haccp-audit.png" }}
        captureId="feature-haccp"
      />

      {/* Call to Action */}
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <MarketingCTA
          title="Ready to experience the difference?"
          description="Join thousands of restaurants, bars, and night clubs using OpsFlow to streamline operations and stay compliant."
          primaryAction={{
            text: "Start Free Trial",
            href: "/pricing"
          }}
          secondaryAction={{
            text: "Contact Sales",
            href: "/company/contact"
          }}
        />
      </div>
    </div>
  );
}
