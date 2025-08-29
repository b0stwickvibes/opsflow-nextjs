"use client";

import { CheckCircle, Thermometer, Shield, BarChart3, Clock, Users, FileCheck, AlertTriangle } from "lucide-react";

const features = [
  { icon: Shield, title: "HACCP Compliance", description: "Automated monitoring and reporting for food safety compliance with real-time alerts and corrective action tracking." },
  { icon: Thermometer, title: "Temperature Control", description: "24/7 monitoring of all refrigeration units with instant violation notifications and historical data logging." },
  { icon: Clock, title: "Task Management", description: "Structured workflows for daily operations, cleaning schedules, maintenance tasks, and staff assignments." },
  { icon: Users, title: "Staff Training", description: "Track certifications, schedule training sessions, monitor competency requirements, and maintain compliance records." },
  { icon: BarChart3, title: "Analytics Dashboard", description: "Comprehensive reporting on operations, compliance metrics, performance indicators, and trend analysis." },
  { icon: FileCheck, title: "Audit Preparation", description: "Automated documentation and reporting for health department inspections with compliance verification." },
  { icon: AlertTriangle, title: "Real-time Alerts", description: "Instant notifications for temperature violations, task overdue, equipment failures, and compliance issues." },
  { icon: CheckCircle, title: "Quality Assurance", description: "Systematic quality checks, product inspection workflows, and continuous improvement tracking." },
];

/**
 * RestaurantFeatureCards
 * Purpose: Feature grid styled per Figma.
 * Used in: /landing marketing section
 */
export function RestaurantFeatureCards() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-display-md mb-4 animate-fade-in-up">Enterprise Restaurant Operations</h2>
          <p className="text-lg text-muted-foreground animate-fade-in-up animation-delay-100">Everything you need for professional restaurant management and compliance</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`platform-card-professional p-6 rounded-lg animate-fade-in-up animation-delay-${Math.min((index + 1) * 100, 800)}`}>
              <div className="mb-4">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

