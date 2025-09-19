import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Section, SectionContent, SectionDivider } from "@/components/shared/layout";

const IntegrationPartners = dynamic(() => import("@/components/shared/layout/IntegrationPartners"));

export const metadata: Metadata = {
  title: "Integrations — OpsFlow AI",
  description:
    "Connect OpsFlow AI to your POS, sensors, identity, and back-office tools — Toast, Square, Slack, Zapier, SSO/SCIM, webhooks, and more.",
};

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen">
      <Section background="gradient" padding="xl">
        <SectionContent maxWidth="4xl" align="center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Integrates with your stack
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Seamlessly connect OpsFlow to your POS, scheduling, sensors, and back-office tools — no heavy lift required.
          </p>
        </SectionContent>
      </Section>

      <Section background="default" padding="lg">
        <IntegrationPartners />
      </Section>

      {/* Featured Partners */}
      <Section padding="lg">
        <SectionContent maxWidth="6xl">
          <div className="grid gap-6 md:grid-cols-3">
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
            <Link href="/resources/docs/api" className="rounded-lg border bg-muted/20 p-6 hover:bg-muted/30 transition-colors">
              <h3 className="font-semibold mb-1">SSO + API</h3>
              <p className="text-sm text-muted-foreground">
              SSO/SCIM user provisioning, REST API, and webhooks for secure, reliable integrations.
              </p>
            </Link>
          </div>
        </SectionContent>
      </Section>

      {/* Guides */}
      <Section padding="lg">
        <SectionContent maxWidth="6xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight mb-3">
                Getting Started
              </h2>
              <p className="text-lg text-muted-foreground">
                Complete guides to connect your favorite tools.
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="font-semibold">Popular Integrations</h3>
                <div className="space-y-3">
                  <Link href="/resources/docs/integrations/toast" className="block rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Toast POS</h4>
                        <p className="text-sm text-muted-foreground">Real-time order sync</p>
                      </div>
                      <ArrowRightIcon className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </Link>
                  <Link href="/resources/docs/integrations/slack" className="block rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Slack</h4>
                        <p className="text-sm text-muted-foreground">Team notifications</p>
                      </div>
                      <ArrowRightIcon className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </Link>
                  <Link href="/resources/docs/integrations/temperature" className="block rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Temperature Monitoring</h4>
                        <p className="text-sm text-muted-foreground">IoT sensor integration</p>
                      </div>
                      <ArrowRightIcon className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </Link>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold">Development</h3>
                <div className="space-y-3">
                  <Link href="/resources/docs/api" className="block rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">REST API</h4>
                        <p className="text-sm text-muted-foreground">Build custom integrations</p>
                      </div>
                      <ArrowRightIcon className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </Link>
                  <Link href="/resources/docs/webhooks" className="block rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Webhooks</h4>
                        <p className="text-sm text-muted-foreground">Real-time event delivery</p>
                      </div>
                      <ArrowRightIcon className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </Link>
                  <Link href="/resources/docs/sso" className="block rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">SSO & SCIM</h4>
                        <p className="text-sm text-muted-foreground">Enterprise authentication</p>
                      </div>
                      <ArrowRightIcon className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SectionContent>
      </Section>
      
      <Section padding="lg">
        <SectionContent maxWidth="6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
        </SectionContent>
      </Section>
    </div>
  );
}
