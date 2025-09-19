"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";
import type { IndustryType, RoleType } from "@/types/restaurant-pages";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

type ComplianceCategory = "HACCP" | "Labor" | "Safety" | "Licensing" | "Documentation";

interface ComplianceFAQItem {
  question: string;
  answer: string;
  category: ComplianceCategory;
}

interface ComplianceFAQProps {
  industry?: IndustryType | 'general';
  role?: RoleType | 'general';
  heading?: string;
  subheading?: string;
  className?: string;
}

const TOP_PADDING = 300;

export function ComplianceFAQ({
  industry = 'restaurants',
  role = 'general',
  heading,
  subheading,
  className,
}: ComplianceFAQProps) {
  const { trackInteraction } = useRestaurantAnalytics();
  const [activeCategory, setActiveCategory] = useState<ComplianceCategory>("HACCP");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isScrollingRef = useRef(false);
  const categoryRefs = useRef<Record<ComplianceCategory, HTMLDivElement | null>>({
    HACCP: null,
    Labor: null,
    Safety: null,
    Licensing: null,
    Documentation: null,
  });

  const getIndustryContent = () => {
    const content = {
      restaurants: {
        heading: "Restaurant Compliance & Safety FAQ",
        subheading: "Everything you need to know about maintaining compliance in restaurant operations",
        categories: ["HACCP", "Labor", "Safety", "Licensing", "Documentation"] as ComplianceCategory[]
      },
      bars: {
        heading: "Bar Compliance & Licensing FAQ", 
        subheading: "Navigate bar regulations, alcohol licensing, and safety requirements",
        categories: ["Licensing", "Safety", "Labor", "Documentation", "HACCP"] as ComplianceCategory[]
      },
      coffee: {
        heading: "Coffee Shop Compliance FAQ",
        subheading: "Stay compliant with food safety and business regulations for coffee operations",
        categories: ["Safety", "HACCP", "Labor", "Licensing", "Documentation"] as ComplianceCategory[]
      },
      hotels: {
        heading: "Hotel Food Service Compliance FAQ",
        subheading: "Comprehensive compliance guidance for hotel dining operations",
        categories: ["HACCP", "Safety", "Licensing", "Labor", "Documentation"] as ComplianceCategory[]
      },
      general: {
        heading: "Compliance & Regulations FAQ",
        subheading: "Understanding compliance requirements for foodservice operations",
        categories: ["HACCP", "Labor", "Safety", "Licensing", "Documentation"] as ComplianceCategory[]
      }
    };
    return content[industry as keyof typeof content] || content.general;
  };

  const getIndustryFAQItems = (): ComplianceFAQItem[] => {
    const baseItems = {
      restaurants: [
        // HACCP Questions
        {
          category: "HACCP" as ComplianceCategory,
          question: "How does OpsFlow help maintain HACCP compliance?",
          answer: "OpsFlow automates HACCP critical control point monitoring with digital temperature logs, automated alerts for violations, and comprehensive documentation. The system maintains audit trails and generates reports required for health inspections."
        },
        {
          category: "HACCP" as ComplianceCategory,
          question: "Can the system track food safety temperatures automatically?",
          answer: "Yes! OpsFlow integrates with digital thermometers and monitoring devices to automatically log refrigeration, cooking, and holding temperatures. Alerts are sent immediately when temperatures fall outside safe ranges."
        },
        {
          category: "HACCP" as ComplianceCategory,
          question: "How are food safety violations documented and resolved?",
          answer: "The system automatically logs violations, sends immediate alerts to management, and tracks corrective actions. All incidents are documented with timestamps and responsible parties for complete compliance records."
        },
        // Labor Questions  
        {
          category: "Labor" as ComplianceCategory,
          question: "Does OpsFlow handle overtime and break compliance?",
          answer: "Absolutely! The system tracks hours worked, automatically calculates overtime, ensures proper break periods, and alerts managers to potential compliance issues before they occur."
        },
        {
          category: "Labor" as ComplianceCategory,
          question: "How does the system manage minor employee restrictions?",
          answer: "OpsFlow includes comprehensive minor labor law compliance, restricting hazardous tasks, monitoring work hours, and ensuring proper documentation. The system prevents scheduling violations automatically."
        },
        {
          category: "Labor" as ComplianceCategory,
          question: "Can I generate labor compliance reports for inspections?",
          answer: "Yes! The system generates detailed labor compliance reports including hours worked, break records, overtime calculations, and minor employee restrictions for regulatory inspections."
        },
        // Safety Questions
        {
          category: "Safety" as ComplianceCategory,
          question: "How does OpsFlow track safety training and certifications?",
          answer: "The platform maintains employee training records, certification expirations, and required refresher courses. Automated reminders ensure all staff maintain current safety certifications."
        },
        {
          category: "Safety" as ComplianceCategory,
          question: "Can the system manage incident reporting and investigations?",
          answer: "OpsFlow includes comprehensive incident management with digital reporting forms, photo documentation, witness statements, and investigation tracking to ensure proper safety protocols."
        },
        // Licensing Questions
        {
          category: "Licensing" as ComplianceCategory,
          question: "Does OpsFlow track business licenses and permits?",
          answer: "Yes! The system maintains a calendar of all required licenses, permits, and renewals with automated reminders to ensure continuous compliance and avoid lapses."
        },
        {
          category: "Licensing" as ComplianceCategory,
          question: "How are health department inspection requirements managed?",
          answer: "OpsFlow maintains inspection readiness with automated checklists, documentation organization, and compliance tracking to ensure your restaurant is always inspection-ready."
        },
        // Documentation Questions
        {
          category: "Documentation" as ComplianceCategory,
          question: "What records does OpsFlow maintain for compliance audits?",
          answer: "The system maintains comprehensive records including temperature logs, cleaning schedules, training records, incident reports, and all required compliance documentation in one centralized, audit-ready location."
        },
        {
          category: "Documentation" as ComplianceCategory,
          question: "Can I access historical compliance data for inspections?",
          answer: "Absolutely! OpsFlow maintains complete historical records with easy search and filtering capabilities. All compliance data is stored securely and can be quickly accessed during inspections or audits."
        }
      ],
      bars: [
        {
          category: "Licensing" as ComplianceCategory,
          question: "How does OpsFlow manage liquor license compliance?",
          answer: "OpsFlow tracks all liquor license requirements, renewal dates, and regulatory compliance. The system monitors serving hours, age verification requirements, and maintains documentation required by licensing authorities."
        },
        {
          category: "Licensing" as ComplianceCategory,
          question: "Can the system track responsible beverage service training?",
          answer: "Yes! The platform maintains RBS/TIPS certification records for all staff, tracks expiration dates, and sends automated reminders for renewal training to ensure continuous compliance."
        },
        {
          category: "Safety" as ComplianceCategory,
          question: "How does OpsFlow handle incident reporting for bars?",
          answer: "The system includes specialized incident reporting for bars including overserving incidents, ID violations, and altercations. All reports include witness information, photos, and required notifications to authorities."
        },
        {
          category: "Safety" as ComplianceCategory,
          question: "Can the system track patron ID verification?",
          answer: "OpsFlow can integrate with ID scanning systems to log age verification attempts, track rejected IDs, and maintain records required for compliance audits and investigations."
        },
        {
          category: "Labor" as ComplianceCategory,
          question: "Does the system handle late-night labor regulations?",
          answer: "Yes! OpsFlow manages extended hour operations, ensuring proper staffing requirements, security protocols, and compliance with local late-night establishment regulations."
        },
        {
          category: "HACCP" as ComplianceCategory,
          question: "How does OpsFlow handle food safety in bars serving food?",
          answer: "For bars serving food, OpsFlow maintains full HACCP compliance with temperature monitoring, food safety training tracking, and integrated protocols for both beverage and food service operations."
        }
      ],
      coffee: [
        {
          category: "Safety" as ComplianceCategory,
          question: "How does OpsFlow ensure coffee equipment safety compliance?",
          answer: "The system tracks equipment maintenance schedules, safety inspections, and training records for espresso machines, grinders, and other coffee equipment to ensure safe operation and compliance."
        },
        {
          category: "HACCP" as ComplianceCategory,
          question: "Can OpsFlow track coffee bean storage and freshness?",
          answer: "Yes! The system monitors bean storage conditions, tracks roast dates, and ensures proper rotation to maintain quality and food safety standards for coffee service."
        },
        {
          category: "Labor" as ComplianceCategory,
          question: "How does the system handle barista certification tracking?",
          answer: "OpsFlow maintains records of barista training, coffee certifications, and food safety requirements, ensuring all staff meet industry standards and local regulations."
        },
        {
          category: "Licensing" as ComplianceCategory,
          question: "Does OpsFlow track business permits for coffee shops?",
          answer: "The system maintains all required permits including business licenses, food service permits, and any specialty certifications required for coffee operations."
        },
        {
          category: "Documentation" as ComplianceCategory,
          question: "Can I maintain supplier compliance records?",
          answer: "Absolutely! OpsFlow tracks supplier certifications, organic/fair trade documentation, and quality records to ensure complete supply chain compliance and traceability."
        }
      ],
      hotels: [
        {
          category: "HACCP" as ComplianceCategory,
          question: "How does OpsFlow manage HACCP across multiple hotel dining venues?",
          answer: "OpsFlow provides centralized HACCP management across restaurants, room service, banquets, and catering with unified monitoring, reporting, and compliance tracking for all food service operations."
        },
        {
          category: "Safety" as ComplianceCategory,
          question: "Can the system handle guest allergy and dietary compliance?",
          answer: "Yes! OpsFlow maintains comprehensive guest preference and allergy records, ensures proper kitchen communication, and documents all special dietary accommodations for safety and liability compliance."
        },
        {
          category: "Licensing" as ComplianceCategory,
          question: "How does OpsFlow track multiple venue licensing requirements?",
          answer: "The system manages separate licenses for different dining venues, catering operations, and beverage service areas, ensuring each outlet maintains proper permits and compliance."
        },
        {
          category: "Labor" as ComplianceCategory,
          question: "Does the system handle hospitality labor regulations?",
          answer: "OpsFlow manages complex hospitality scheduling including union requirements, tip reporting, service charges, and multi-department coordination while maintaining full labor compliance."
        },
        {
          category: "Documentation" as ComplianceCategory,
          question: "Can OpsFlow maintain guest service records for liability?",
          answer: "The system maintains detailed service records including special requests, dietary accommodations, and incident reports to provide comprehensive documentation for guest relations and liability management."
        }
      ],
      general: [
        {
          category: "HACCP" as ComplianceCategory,
          question: "What HACCP compliance features does OpsFlow provide?",
          answer: "OpsFlow offers comprehensive HACCP compliance including automated temperature monitoring, critical control point tracking, corrective action documentation, and audit-ready reporting for food safety regulations."
        },
        {
          category: "Labor" as ComplianceCategory,
          question: "How does OpsFlow ensure labor law compliance?",
          answer: "The system tracks work hours, break requirements, overtime calculations, and certification records while providing automated alerts for potential compliance violations and generating required reports."
        },
        {
          category: "Safety" as ComplianceCategory,
          question: "What safety management features are included?",
          answer: "OpsFlow includes incident reporting, safety training tracking, equipment maintenance scheduling, and compliance monitoring to ensure a safe work environment and regulatory adherence."
        },
        {
          category: "Licensing" as ComplianceCategory,
          question: "Can OpsFlow track business licenses and permits?",
          answer: "Yes! The platform maintains a comprehensive calendar of all required licenses, permits, and certifications with automated renewal reminders and compliance tracking across all operations."
        },
        {
          category: "Documentation" as ComplianceCategory,
          question: "What compliance documentation does OpsFlow maintain?",
          answer: "The system maintains complete compliance records including training certificates, inspection reports, incident documentation, and audit trails, all organized for easy access during regulatory reviews."
        }
      ]
    };

    return baseItems[industry as keyof typeof baseItems] || baseItems.general;
  };

  const industryContent = getIndustryContent();
  const faqItems = getIndustryFAQItems();

  const setupObserver = useCallback(() => {
    observerRef.current?.disconnect();

    let debounceTimeout: NodeJS.Timeout;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;

        if (debounceTimeout) {
          clearTimeout(debounceTimeout);
        }

        debounceTimeout = setTimeout(() => {
          const intersectingEntries = entries.filter(
            (entry) => entry.isIntersecting,
          );

          const entry = intersectingEntries.reduce(
            (closest, current) => {
              const rect = current.boundingClientRect;
              const distanceFromThreshold = Math.abs(rect.top - TOP_PADDING);
              const closestDistance = closest
                ? Math.abs(closest.boundingClientRect.top - TOP_PADDING)
                : Infinity;

              return distanceFromThreshold < closestDistance
                ? current
                : closest;
            },
            null as IntersectionObserverEntry | null,
          );

          if (entry) {
            const category = entry.target.getAttribute(
              "data-category",
            ) as ComplianceCategory;
            if (category) {
              setActiveCategory(category);
            }
          }
        }, 150);
      },
      {
        root: null,
        rootMargin: `-${TOP_PADDING}px 0px -100% 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    Object.entries(categoryRefs.current).forEach(([category, element]) => {
      if (element) {
        element.setAttribute("data-category", category);
        observerRef.current?.observe(element);
      }
    });

    return () => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
    };
  }, []);

  useEffect(() => {
    const cleanup = setupObserver();
    return () => {
      cleanup();
      observerRef.current?.disconnect();
    };
  }, [setupObserver]);

  const handleCategoryClick = (category: ComplianceCategory) => {
    setActiveCategory(category);
    isScrollingRef.current = true;

    trackInteraction('compliance_faq_category_click', {
      industry,
      role,
      category,
    });

    const element = document.getElementById(`faq-${category.toLowerCase()}`);
    if (element) {
      element.style.scrollMargin = `${TOP_PADDING}px`;
      element.scrollIntoView({ behavior: "smooth", block: "start" });

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  };

  const handleAccordionChange = (value: string) => {
    if (value) {
      trackInteraction('compliance_faq_expand', {
        industry,
        role,
        accordion_value: value,
        category: activeCategory,
      });
    }
  };

  return (
    <section className={cn("py-20 lg:py-28 bg-background", className)}>
      <div className="container max-w-4xl">
        <div className="text-center space-y-6 mb-16">
          {/* Simple badge following marketing playbook */}
          <div className="flex justify-center">
            <div className="clerk-inspired-badge">
              Restaurant Compliance
            </div>
          </div>
          
          {/* Heading with brand gradient following SOP */}
          <div className="space-y-4">
            <h1 className="enterprise-headline text-center">
              <span className="text-brand-gradient">
                {industryContent.heading}
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {industryContent.subheading}
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-12">
          {/* Sidebar */}
          <div className="sticky top-24 flex h-fit flex-col gap-2 max-md:hidden">
            {industryContent.categories.map((category) => (
              <Button
                variant="ghost"
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={cn(
                  "justify-start text-left transition-colors",
                  activeCategory === category 
                    ? "text-primary font-semibold" 
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-pressed={activeCategory === category}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* FAQ Items by Category */}
          <div className="space-y-6">
            {industryContent.categories.map((category) => {
              const categoryItems = faqItems.filter(
                (item) => item.category === category,
              );

              return (
                <div
                  key={category}
                  id={`faq-${category.toLowerCase()}`}
                  ref={(el) => {
                    categoryRefs.current[category] = el;
                  }}
                  className={cn(
                    "enterprise-card p-6",
                    activeCategory === category && "border-primary/20"
                  )}
                  style={{
                    scrollMargin: `${TOP_PADDING}px`,
                  }}
                >
                  <Accordion
                    type="single"
                    collapsible
                    defaultValue={`${industryContent.categories[0]}-0`}
                    className="w-full"
                    onValueChange={handleAccordionChange}
                  >
                    {categoryItems.map((item, i) => (
                      <AccordionItem
                        key={i}
                        value={`${category}-${i}`}
                        className="border-b border-border last:border-0"
                      >
                        <AccordionTrigger 
                          className="text-base font-medium hover:no-underline py-6 text-left"
                          aria-describedby={`compliance-answer-${category}-${i}`}
                        >
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent 
                          id={`compliance-answer-${category}-${i}`}
                          className="text-base text-muted-foreground pb-6 leading-relaxed"
                        >
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}