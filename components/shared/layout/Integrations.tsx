"use client";

import { Card, CardContent } from "@/components/ui/card";
import { 
  MessageSquare,
  Users,
  Mail,
  BarChart3,
  HelpCircle,
  Zap,
  Code,
  Webhook,
  Shield,
  Building2
} from "lucide-react";
import { cn } from "@/lib/utils";

const integrations = [
  { name: "Slack", icon: MessageSquare, color: "bg-purple-500" },
  { name: "Microsoft Teams", icon: Users, color: "bg-blue-600" }, 
  { name: "Google Workspace", icon: Mail, color: "bg-red-500" },
  { name: "Salesforce", icon: BarChart3, color: "bg-blue-500" },
  { name: "HubSpot", icon: HelpCircle, color: "bg-orange-500" },
  { name: "Zapier", icon: Zap, color: "bg-yellow-500" },
  { name: "API Access", icon: Code, color: "bg-green-500" },
  { name: "Webhooks", icon: Webhook, color: "bg-gray-600" },
  { name: "SSO", icon: Shield, color: "bg-indigo-500" },
  { name: "LDAP", icon: Building2, color: "bg-teal-500" }
];

const Integrations = ({ className }: { className?: string }) => {
  return (
    <section className={cn("py-24 lg:py-32 bg-muted/30", className)}>
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
            Integrates with your stack
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Connect seamlessly with the tools you already use.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {integrations.map((integration, index) => {
              const IconComponent = integration.icon;
              return (
                <Card key={index} className="rounded-3xl border bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-200", integration.color)}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="font-medium text-sm tracking-tight">
                      {integration.name}
                    </h3>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Plus hundreds more through our API and webhook system
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Integrations };
