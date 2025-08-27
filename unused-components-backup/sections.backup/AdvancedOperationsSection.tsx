'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Thermometer, Wrench, AlertTriangle, FileText } from 'lucide-react';

const advancedFeatures = [
  {
    title: "Automated Temperature Monitoring",
    description: "Record data from freezers, refrigerators, and food probes with continuous LoRaWAN sensors and Bluetooth integration.",
    icon: Thermometer,
    features: ["Continuous monitoring", "LoRaWAN sensors", "Bluetooth integration", "Automated workflows"]
  },
  {
    title: "Smart Work Orders", 
    description: "Efficient assignment and tracking with mobile inspections, image attachments, in-task chat, and progress analysis.",
    icon: Wrench,
    features: ["Mobile inspections", "Image attachments", "In-task chat", "Progress analysis"]
  },
  {
    title: "Incident Management",
    description: "Create reports from any device, automated corrective actions, instant notifications, and organized compliance reporting.",
    icon: AlertTriangle,
    features: ["Device flexibility", "Automated actions", "Instant notifications", "Compliance reporting"]
  },
  {
    title: "Compliance Audits",
    description: "HACCP and FSMA compliance inspections with organized report export, failed inspection corrective actions, and historical documentation.",
    icon: FileText,
    features: ["HACCP & FSMA inspections", "Report export", "Corrective actions", "Historical documentation"]
  }
];

export default function AdvancedOperationsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Advanced Restaurant Operations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sophisticated tools for temperature monitoring, incident management, corrective actions, and compliance auditing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advancedFeatures.map((feature, index) => (
            <Card key={feature.title} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {feature.features.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}