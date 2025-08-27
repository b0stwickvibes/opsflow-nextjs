'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const integrations = [
  "Slack", "Microsoft Teams", "Google Workspace", "Salesforce", 
  "HubSpot", "Zapier", "API Access", "Webhooks", "SSO", "LDAP"
];

export default function IntegrationsGrid() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Integrates with your stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect seamlessly with the tools you already use.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {integrations.map((integration, index) => (
            <Card key={integration} className="group hover:shadow-md transition-all duration-300 border-0 shadow-sm" style={{ animationDelay: `${index * 0.05}s` }}>
              <CardContent className="p-6 text-center">
                <div className="font-medium text-sm group-hover:text-primary transition-colors duration-300">
                  {integration}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}