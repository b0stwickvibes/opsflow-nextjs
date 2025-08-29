import type { Metadata } from "next";
import dynamic from "next/dynamic";

const IntegrationPartners = dynamic(() => import("@/components/shared/layout/IntegrationPartners"));

export const metadata: Metadata = {
  title: "Integrations — OpsFlow AI",
  description:
    "Connect OpsFlow AI to your POS, sensors, identity, and back-office tools — Toast, Square, Slack, Zapier, SSO/SCIM, webhooks, and more.",
};

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen">
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Integrates with your stack
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Seamlessly connect OpsFlow to your POS, scheduling, sensors, and back-office tools — no heavy lift required.
          </p>
        </div>
      </section>

      <IntegrationPartners />

      {/* Featured Partners */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 grid gap-6 md:grid-cols-3">
          <a href="https://pos.toasttab.com/" target="_blank" rel="noreferrer" className="rounded-lg border bg-muted/20 p-6 hover:bg-muted/30 transition-colors">
            <h3 className="font-semibold mb-1">POS + Ops</h3>
            <p className="text-sm text-muted-foreground">
              Connect Toast to create prep and service tasks in real time based on sales signals.
            </p>
          </a>
          <a href="https://slack.com" target="_blank" rel="noreferrer" className="rounded-lg border bg-muted/20 p-6 hover:bg-muted/30 transition-colors">
            <h3 className="font-semibold mb-1">Slack</h3>
            <p className="text-sm text-muted-foreground">
              Route incidents, temperature alerts, and announcements to the right channels.
            </p>
          </a>
          <a href="/resources/docs/api" className="rounded-lg border bg-muted/20 p-6 hover:bg-muted/30 transition-colors">
            <h3 className="font-semibold mb-1">SSO + API</h3>
            <p className="text-sm text-muted-foreground">
              SSO/SCIM user provisioning, REST API, and webhooks for secure, reliable integrations.
            </p>
          </a>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-muted/30 p-6">
            <h3 className="font-semibold mb-2">What syncs</h3>
            <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
              <li>Tasks & checklists (create/complete, assignments)</li>
              <li>Compliance data (HACCP logs, incidents, audits)</li>
              <li>Inventory & equipment (work orders, history)</li>
              <li>Users & access (role provisioning)</li>
              <li>Analytics (KPIs, dashboards, exports)</li>
            </ul>
          </div>
          <div className="rounded-lg border bg-muted/30 p-6">
            <h3 className="font-semibold mb-2">Setup steps</h3>
            <ol className="text-sm text-muted-foreground list-decimal pl-5 space-y-1">
              <li>Select integration</li>
              <li>Authenticate (OAuth / API key)</li>
              <li>Map roles & data</li>
              <li>Test sync</li>
              <li>Go live (monitor health)</li>
            </ol>
          </div>
          <div className="rounded-lg border bg-muted/30 p-6">
            <h3 className="font-semibold mb-2">Built for developers</h3>
            <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
              <li>REST API + Webhooks</li>
              <li>Sandbox keys</li>
              <li>Versioned docs</li>
              <li>Uptime targets</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
