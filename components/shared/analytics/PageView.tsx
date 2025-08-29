"use client";

import { usePageTracking } from "@/lib/analytics/RestaurantAnalytics";

interface PageViewProps {
  eventName: string;
  pageTitle: string;
}

export function PageView({ eventName, pageTitle }: PageViewProps) {
  usePageTracking(eventName, pageTitle);
  return null;
}

