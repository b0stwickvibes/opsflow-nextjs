import { ArrowRight, Thermometer, Users, CheckSquare, Building2, Wrench, Shield, BarChart3, Wifi, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FeaturesHeroPremium = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="lg:border-y">
        <div className="container flex flex-col max-lg:divide-y lg:flex-row">
          <div className="flex-1 lg:border-l">
            <div className="lg:border-b lg:pr-8 lg:pb-5 lg:pl-2">
              <h1 className="mx-auto text-[2.5rem] leading-[1.2] tracking-[-1.6px] md:text-[4rem] md:leading-[1.15] md:tracking-[-4.32px] lg:text-7xl">
                Complete restaurant operations{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  in one platform
                </span>
              </h1>
              <p className="mt-6 tracking-[-0.32px] text-muted-foreground">
                From temperature monitoring to staff training—everything your restaurant needs 
                to stay compliant, efficient, and profitable.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="/pricing">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="/product/demo">
                    Watch Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-foreground">14-day free trial with full access</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-foreground">24/7 customer support included</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-foreground">HACCP compliance guaranteed</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-foreground">Free data migration from existing systems</span>
                </li>
              </ul>
            </div>
            
          </div>

          <div className="lg:border-x lg:px-8">
            <div className="flex justify-center gap-6 lg:gap-8">
              <div className="relative mt-20 aspect-[1/1.1] h-[200px] overflow-hidden lg:mt-32 lg:h-[296px]">
                {/* Kitchen operations visual */}
                <div className="w-full h-full bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg border flex flex-col items-center justify-center p-4">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/40 rounded-full flex items-center justify-center mb-4">
                    <Thermometer className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium mb-1">Kitchen Operations</div>
                    <div className="text-xs text-muted-foreground">Live monitoring</div>
                  </div>
                </div>
              </div>
              <div className="relative mt-10 aspect-[1/1.1] h-[200px] overflow-hidden lg:mt-16 lg:h-[296px]">
                {/* Staff management visual */}
                <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg border flex flex-col items-center justify-center p-4">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium mb-1">Team Management</div>
                    <div className="text-xs text-muted-foreground">Scheduling & training</div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-10 px-8 lg:px-12 pb-8 lg:pb-12 tracking-[-0.32px] text-muted-foreground md:mt-14">
              Our mission is to enable restaurants to achieve their best operations by 
              delivering innovative tools that simplify workflows, enhance compliance, 
              and drive profitable outcomes. We&apos;re dedicated to creating a seamless 
              restaurant management experience that helps teams thrive and reach new heights.
            </p>
          </div>
        </div>
      </div>
      
      {/* 3-column feature blocks spanning full width */}
      <div className="container mt-32 lg:mt-48">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Daily Tasks & Checklists */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-20 h-20 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl flex items-center justify-center mb-6 border">
              <CheckSquare className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Daily Tasks & Checklists</h3>
            <p className="text-muted-foreground leading-relaxed">
              Create custom checklists and SOPs with smart scheduling, team assignments, 
              and progress tracking for consistent operations.
            </p>
          </div>
          
          {/* Multi-Location Management */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl flex items-center justify-center mb-6 border">
              <Building2 className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Multi-Location Management</h3>
            <p className="text-muted-foreground leading-relaxed">
              Manage unlimited restaurant locations with unified reporting, standardized 
              procedures, and seamless location switching.
            </p>
          </div>
          
          {/* Equipment & Maintenance */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl flex items-center justify-center mb-6 border">
              <Wrench className="h-10 w-10 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Equipment & Maintenance</h3>
            <p className="text-muted-foreground leading-relaxed">
              Preventive maintenance scheduling, work order management, and equipment 
              performance tracking to avoid costly breakdowns.
            </p>
          </div>
        </div>
      </div>
      
      {/* Professional Services Accordion */}
      <div className="container mt-32 lg:mt-48">
        <div className="mx-auto max-w-4xl space-y-16">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Complete Restaurant Operations Platform
            </h2>
            <p className="text-muted-foreground text-lg tracking-tight md:text-xl">
              Explore our comprehensive suite of restaurant management solutions.
            </p>
          </div>

          <div className="space-y-1">
            {[
              {
                icon: <Thermometer className="h-5 w-5 text-blue-600" />,
                title: "Temperature Monitoring & HACCP Compliance",
                shortDescription: "Automated food safety and compliance management",
                description:
                  "Advanced IoT sensor integration with real-time monitoring, automated alerts, and comprehensive HACCP documentation. Our system ensures continuous compliance with food safety regulations while reducing manual oversight requirements.",
                items: [
                  "LoRaWAN & Bluetooth Sensor Integration",
                  "Real-Time Temperature Alerts",
                  "Automated HACCP Documentation",
                  "Regulatory Compliance Reporting",
                ],
                deliverables: [
                  "HACCP Compliance Reports",
                  "Temperature Monitoring Dashboards",
                  "Regulatory Audit Trail",
                ],
              },
              {
                icon: <CheckSquare className="h-5 w-5 text-green-600" />,
                title: "Operations Management & Task Automation",
                shortDescription: "Streamlined daily operations and workflow automation",
                description:
                  "Comprehensive task management system with intelligent scheduling, team coordination, and progress tracking. Designed to eliminate operational blind spots and ensure consistent service quality across all locations.",
                items: [
                  "Smart Task Scheduling",
                  "Team Coordination Tools",
                  "Custom Checklist Creation",
                  "Performance Analytics",
                ],
                deliverables: [
                  "Operations Dashboards",
                  "Performance Reports",
                  "Team Productivity Insights",
                ],
              },
              {
                icon: <Shield className="h-5 w-5 text-purple-600" />,
                title: "Security & Location-Based Access Control",
                shortDescription: "Enterprise-grade security and access management",
                description:
                  "Multi-layered security system combining GPS, WiFi fingerprinting, and AI-powered anti-spoofing technology. Ensure operations are restricted to authorized locations with military-grade precision and comprehensive audit trails.",
                items: [
                  "Multi-Layer Location Verification",
                  "AI-Powered Anti-Spoofing",
                  "Role-Based Access Control",
                  "Comprehensive Security Auditing",
                ],
                deliverables: [
                  "Security Compliance Reports",
                  "Access Control Dashboards",
                  "Incident Response Logs",
                ],
              },
              {
                icon: <BarChart3 className="h-5 w-5 text-orange-600" />,
                title: "Analytics & Business Intelligence",
                shortDescription: "Data-driven insights and predictive analytics",
                description:
                  "Advanced analytics platform that transforms operational data into actionable business insights. Predictive modeling helps identify trends, optimize efficiency, and drive revenue growth across all restaurant operations.",
                items: [
                  "Real-Time Performance Metrics",
                  "Predictive Analytics",
                  "Revenue Optimization",
                  "Multi-Location Reporting",
                ],
                deliverables: [
                  "Executive Dashboards",
                  "Predictive Reports",
                  "ROI Analysis",
                ],
              },
            ].map((service, index) => (
              <Accordion key={index} type="single" collapsible className="border border-border/50 rounded-xl bg-gradient-to-r from-background to-background/50 hover:border-border transition-all duration-300 hover:shadow-sm">
                <AccordionItem value={`item-${index}`} className="border-none">
                  <AccordionTrigger className="px-8 py-6 hover:no-underline group">
                    <div className="flex items-start gap-6 text-left w-full">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-muted/80 to-muted rounded-xl flex items-center justify-center border group-hover:border-border/60 transition-all duration-300">
                        {service.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-foreground/90 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {service.shortDescription}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8 pt-0">
                    <div className="pl-[4.5rem]">
                      <div className="space-y-6">
                        <p className="text-muted-foreground/90 leading-relaxed text-[15px]">
                          {service.description}
                        </p>

                        <div className="grid gap-8 md:grid-cols-2">
                          <div>
                            <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                              Core Features
                            </h4>
                            <ul className="space-y-3">
                              {service.items.map((item, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className="flex items-start gap-3 text-sm text-muted-foreground"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mt-2 flex-shrink-0" />
                                  <span className="leading-relaxed">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                              Deliverables
                            </h4>
                            <ul className="space-y-3">
                              {service.deliverables.map((deliverable, delivIndex) => (
                                <li
                                  key={delivIndex}
                                  className="flex items-start gap-3 text-sm text-muted-foreground"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mt-2 flex-shrink-0" />
                                  <span className="leading-relaxed">{deliverable}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesHeroPremium;
