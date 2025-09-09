import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features — OpsFlow AI Restaurant Operations Platform",
  description: "Complete restaurant operations management with automated temperature monitoring, HACCP compliance, staff training, and real-time analytics.",
  keywords: "restaurant features, HACCP compliance, temperature monitoring, restaurant management software, operations platform",
};

export default function ProductFeaturesPage() {
  return (
    <div className="min-h-screen container mx-auto px-4 sm:px-6 py-24">
      <h1 className="text-4xl font-bold">Product Features</h1>
      <p className="text-muted-foreground mt-4 max-w-2xl">
        This page is temporarily simplified while we stabilize the template/library. Core solutions pages continue to work.
      </p>
    </div>
  );
}
