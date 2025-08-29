'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import Link from 'next/link';
import { registerComponentLayout } from '@/lib/style-system/layout-differentiation';

interface Partner {
  name: string;
  logo?: string; // public path
  href?: string;
}

const PARTNERS: Partner[] = [
  { name: 'Toast', logo: '/logos/toast.svg', href: 'https://pos.toasttab.com/' },
  { name: 'Square', logo: '/logos/square.svg', href: 'https://squareup.com/' },
  { name: 'MarginEdge', logo: '/logos/marginedge.svg', href: 'https://www.marginedge.com/' },
  { name: '7shifts', logo: '/logos/7shifts.svg', href: 'https://www.7shifts.com/' },
  { name: 'QuickBooks', logo: '/logos/quickbooks.svg', href: 'https://quickbooks.intuit.com/' },
  { name: 'DoorDash', logo: '/logos/doordash.svg', href: 'https://www.doordash.com/merchant/' },
  // Productivity & CRM
  { name: 'Slack', href: 'https://slack.com' },
  { name: 'Microsoft Teams', href: 'https://www.microsoft.com/microsoft-teams' },
  { name: 'Google Workspace', href: 'https://workspace.google.com' },
  { name: 'Salesforce', href: 'https://www.salesforce.com' },
  { name: 'HubSpot', href: 'https://www.hubspot.com' },
  { name: 'Zapier', href: 'https://zapier.com' },
  // Platform capabilities
  { name: 'API Access' },
  { name: 'Webhooks' },
  { name: 'SSO' },
  { name: 'LDAP' },
];

export function IntegrationPartners() {
  useEffect(() => {
    registerComponentLayout('IntegrationPartners', 'product' as any);
  }, []);

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground">Works with your restaurant stack</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {PARTNERS.map((p) => {
            const content = p.logo ? (
              <Image
                src={p.logo}
                alt={`${p.name} logo`}
                width={120}
                height={40}
                className="grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition"
              />
            ) : (
              <span className="px-2 py-1 text-xs rounded border bg-muted/40">
                {p.name}
              </span>
            );
            return (
              <div
                key={p.name}
                className="group flex justify-center opacity-80 hover:opacity-100 transition-opacity"
              >
                {p.href ? (
                  <Link
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.name} integration`}
                    className="inline-flex items-center justify-center hover:scale-105 transition-transform"
                  >
                    {content}
                  </Link>
                ) : (
                  content
                )}
              </div>
            );
          })}
        </div>

        {/* Featured partner capabilities */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border bg-muted/30 p-4">
            <div className="text-sm font-semibold mb-1">POS + Ops</div>
            <p className="text-sm text-muted-foreground">
              Real-time POS signals feed prep and service tasks for tighter execution.
            </p>
          </div>
          <div className="rounded-lg border bg-muted/30 p-4">
            <div className="text-sm font-semibold mb-1">Sensors + Logs</div>
            <p className="text-sm text-muted-foreground">
              Temperature events auto-create HACCP entries with corrective actions.
            </p>
          </div>
          <div className="rounded-lg border bg-muted/30 p-4">
            <div className="text-sm font-semibold mb-1">Identity + Security</div>
            <p className="text-sm text-muted-foreground">
              SSO/SCIM with role-based controls and location-based access policies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntegrationPartners;
