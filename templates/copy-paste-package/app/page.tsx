"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { RestaurantHero } from "@/components/RestaurantHero";
import { StatusDashboard } from "@/components/StatusDashboard";
import { FeatureGrid } from "@/components/FeatureGrid";
import { RestaurantFooter } from "@/components/RestaurantFooter";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="font-bold text-xl">OpsFlow AI</div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <RestaurantHero />
        <StatusDashboard />
        <FeatureGrid />
      </main>

      {/* Footer */}
      <RestaurantFooter />
    </div>
  );
}