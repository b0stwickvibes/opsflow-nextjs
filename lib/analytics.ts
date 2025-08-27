export type AnalyticsEvent = { name: string; properties?: Record<string, unknown> };
export function trackInteraction(eventName: string, properties: Record<string, unknown> = {}) {
  if (process.env.NODE_ENV !== "production") console.debug("[analytics]", eventName, properties);
}
export function trackPageView(path: string) {
  if (process.env.NODE_ENV !== "production") console.debug("[analytics] pageview", path);
}
