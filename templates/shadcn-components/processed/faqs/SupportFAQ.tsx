"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";
import type { IndustryType, RoleType } from "@/types/restaurant-pages";
import { cn } from "@/lib/utils";

interface SupportFAQProps {
  industry?: IndustryType | 'general';
  role?: RoleType | 'general';
  heading?: string;
  subheading?: string;
  contactLinkText?: string;
  contactLink?: string;
  className?: string;
}

interface FAQCategory {
  title: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

export function SupportFAQ({
  industry = 'restaurants',
  role = 'general',
  heading = "Got Questions?",
  subheading = "Find answers to common questions or get in touch with our support team.",
  contactLinkText = "contact our support team",
  contactLink = "/contact",
  className,
}: SupportFAQProps) {
  const { trackInteraction } = useRestaurantAnalytics();

  const getIndustryCategories = (): FAQCategory[] => {
    const baseCategories = {
      restaurants: [
        {
          title: "Getting Started",
          questions: [
            {
              question: "How do I set up my restaurant in OpsFlow?",
              answer: "Setting up your restaurant is simple! Our onboarding team will guide you through the initial configuration, including menu setup, staff accounts, and POS integration. The process typically takes 1-2 hours and can be done remotely."
            },
            {
              question: "Can I import my existing menu and inventory data?",
              answer: "Yes! OpsFlow supports data import from most restaurant management systems and POS platforms. Our team will help you migrate your existing menus, pricing, inventory levels, and supplier information to ensure a smooth transition."
            },
            {
              question: "How long does it take to train my staff?",
              answer: "Most restaurant staff can learn the basics of OpsFlow in under 30 minutes. We provide interactive tutorials, quick-start guides, and hands-on training sessions. Advanced features like analytics and reporting typically require 1-2 hours of additional training."
            },
            {
              question: "What's included in the free trial?",
              answer: "Our 14-day free trial includes full access to all features with no limitations. You can process real orders, manage inventory, and use all analytics tools. No credit card required to start."
            }
          ]
        },
        {
          title: "Daily Operations",
          questions: [
            {
              question: "How does OpsFlow handle rush hour orders?",
              answer: "OpsFlow excels during busy periods with intelligent order prioritization, real-time kitchen coordination, and automated workflow optimization. The system helps reduce ticket times and ensures smooth operations even during your busiest hours."
            },
            {
              question: "Can I monitor multiple locations from one dashboard?",
              answer: "Absolutely! The multi-location dashboard gives you real-time visibility across all your restaurants, including sales performance, inventory levels, and operational metrics. You can drill down into specific locations or view consolidated reports."
            },
            {
              question: "How do I handle special dietary requirements and allergies?",
              answer: "OpsFlow includes comprehensive allergen management with automatic alerts for special dietary needs. Kitchen staff receive clear notifications for allergies, modifications, and special preparations to ensure safe food service."
            }
          ]
        },
        {
          title: "Technical Support",
          questions: [
            {
              question: "What if I need help during service hours?",
              answer: "Our priority support is available 24/7 for urgent issues during service hours. You can reach us via phone, live chat, or email, and critical issues are resolved within minutes. We understand that downtime during service is not an option."
            },
            {
              question: "How often is the system updated?",
              answer: "OpsFlow receives regular updates with new features and improvements, typically every 2-4 weeks. Updates happen automatically during off-peak hours with zero downtime. Major feature releases are announced in advance with training materials."
            },
            {
              question: "Can I customize the system for my specific needs?",
              answer: "Absolutely! OpsFlow offers extensive customization options including custom fields, workflows, reports, and integrations. Our team can work with you to tailor the system to match your specific operational requirements."
            },
            {
              question: "Is my data secure and backed up?",
              answer: "Security is our top priority. We use enterprise-grade encryption, secure data centers, automated backups, and comply with SOC 2 Type II standards. Your data is backed up multiple times daily and we maintain 99.9% uptime."
            }
          ]
        }
      ],
      bars: [
        {
          title: "Bar Setup",
          questions: [
            {
              question: "How do I configure my liquor inventory in OpsFlow?",
              answer: "Setting up liquor inventory is straightforward with our pre-loaded database of thousands of spirits, beers, and wines. You can quickly add your current stock levels, set up par levels, and configure automatic reorder points for each item."
            },
            {
              question: "Can OpsFlow handle complex cocktail recipes?",
              answer: "Absolutely! OpsFlow supports detailed recipe management including exact measurements, garnishes, glassware, and preparation instructions. The system calculates exact pour costs and helps maintain consistency across all bartenders."
            },
            {
              question: "How does the system handle happy hour and promotional pricing?",
              answer: "OpsFlow makes it easy to set up time-based pricing, promotional periods, and special event pricing. You can schedule price changes in advance and the system automatically applies them during the specified periods."
            }
          ]
        },
        {
          title: "Daily Operations", 
          questions: [
            {
              question: "How do I track bartender performance and accuracy?",
              answer: "The system provides detailed analytics on bartender speed, accuracy, and sales performance. You can track pour costs, customer satisfaction, and identify training opportunities to improve overall bar operations."
            },
            {
              question: "Can I manage reservations and VIP areas?",
              answer: "Yes! OpsFlow includes table and area management for VIP sections, reserved seating, and bottle service. You can track guest preferences, manage bottle storage, and coordinate service across different bar areas."
            },
            {
              question: "How does the system handle large events and private parties?",
              answer: "Our event management tools help you plan capacity, create special menus, assign dedicated staff, and track event-specific inventory. The system ensures smooth operations during busy nights and special events."
            }
          ]
        },
        {
          title: "Support",
          questions: [
            {
              question: "What happens if the system goes down during a busy night?",
              answer: "OpsFlow has multiple redundancy systems and 99.9% uptime. In the rare event of an issue, our emergency support team responds immediately, and the system includes offline backup modes to keep your bar running."
            },
            {
              question: "Can you help train my bartenders on the new system?",
              answer: "Yes! We provide comprehensive bartender training including hands-on sessions, video tutorials, and ongoing support. Most bartenders become proficient with the system within their first shift."
            }
          ]
        }
      ],
      coffee: [
        {
          title: "Coffee Shop Setup",
          questions: [
            {
              question: "How do I set up my coffee menu and pricing?",
              answer: "OpsFlow includes pre-configured coffee shop templates with common drinks, sizes, and modifiers. You can easily customize pricing, add seasonal drinks, and set up loyalty program rewards for your specific offerings."
            },
            {
              question: "Can the system handle different coffee bean types and origins?",
              answer: "Yes! OpsFlow tracks different bean varieties, roast dates, origin information, and brewing parameters. This helps maintain quality consistency and provides customers with detailed information about their coffee choices."
            },
            {
              question: "How does OpsFlow manage milk alternatives and dietary preferences?",
              answer: "The system includes comprehensive tracking for all milk alternatives, dietary restrictions, and customer preferences. Baristas receive clear preparation instructions for each order to ensure accuracy and customer satisfaction."
            }
          ]
        },
        {
          title: "Daily Operations",
          questions: [
            {
              question: "How can I speed up service during morning rush hours?",
              answer: "OpsFlow optimizes rush hour operations with queue management, pre-order capabilities, and streamlined workflows. The system helps reduce wait times and ensures efficient barista coordination during your busiest periods."
            },
            {
              question: "Can I track which drinks are most popular?",
              answer: "Absolutely! OpsFlow provides detailed analytics on drink preferences, seasonal trends, and customer patterns. This data helps you optimize inventory, plan seasonal menus, and make informed business decisions."
            },
            {
              question: "How does the loyalty program integration work?",
              answer: "The integrated loyalty program tracks customer visits, purchases, and preferences. Customers can earn points, redeem rewards, and baristas can quickly access their favorite orders to provide personalized service."
            }
          ]
        },
        {
          title: "Support",
          questions: [
            {
              question: "Do you provide training for new baristas?",
              answer: "Yes! We offer comprehensive barista training on the OpsFlow system, including order entry, customization options, and customer service features. Training typically takes 1-2 hours and includes ongoing support resources."
            },
            {
              question: "How do I get help if I have issues during peak hours?",
              answer: "Our priority support is available during all business hours with immediate response for urgent issues. You can contact us via phone, chat, or email, and we'll resolve any problems quickly to minimize service disruption."
            }
          ]
        }
      ],
      hotels: [
        {
          title: "Hotel Dining Setup",
          questions: [
            {
              question: "How do I set up multiple dining outlets in OpsFlow?",
              answer: "OpsFlow easily manages multiple outlets including restaurants, room service, poolside dining, and banquets. Each outlet can have separate menus, pricing, and operations while sharing centralized inventory and reporting."
            },
            {
              question: "Can OpsFlow integrate with our hotel management system?",
              answer: "Yes! We integrate with major hotel PMS systems to sync guest information, enable room charging, and track guest preferences across stays. This creates a seamless experience for both guests and staff."
            },
            {
              question: "How does the system handle banquet and event catering?",
              answer: "Our event management module handles everything from initial planning to final service. You can manage guest counts, special menus, dietary requirements, and coordinate between kitchen and banquet staff for flawless execution."
            }
          ]
        },
        {
          title: "Guest Services",
          questions: [
            {
              question: "How can guests place room service orders?",
              answer: "Guests can order through multiple channels including phone, mobile app, or in-room tablets. Orders are automatically sent to the kitchen with room location, guest preferences, and special instructions for seamless delivery."
            },
            {
              question: "Can the system track guest dietary preferences and allergies?",
              answer: "Absolutely! OpsFlow maintains detailed guest profiles including dietary restrictions, allergies, and preferences. This information is automatically shared with kitchen staff for every order to ensure safe and personalized service."
            },
            {
              question: "How do we handle special occasions and guest celebrations?",
              answer: "The system can flag special occasions, anniversaries, and VIP guests to ensure appropriate recognition. You can pre-plan special amenities, room service surprises, and personalized dining experiences."
            }
          ]
        },
        {
          title: "Support",
          questions: [
            {
              question: "What training is provided for hotel dining staff?",
              answer: "We provide role-specific training for restaurant servers, room service staff, banquet teams, and managers. Training covers system operation, guest service features, and reporting tools relevant to each position."
            },
            {
              question: "How do you handle support across different time zones?",
              answer: "Our global support team provides 24/7 coverage across all time zones. We understand that hotel dining operates around the clock and ensure that help is always available when you need it."
            }
          ]
        }
      ],
      general: [
        {
          title: "Getting Started",
          questions: [
            {
              question: "How do I get started with OpsFlow?",
              answer: "Getting started is easy! Contact our sales team for a personalized demo, and our implementation specialists will guide you through setup, data migration, and staff training to ensure a smooth onboarding experience."
            },
            {
              question: "What kind of training and support do you provide?",
              answer: "We provide comprehensive training including live sessions, video tutorials, documentation, and hands-on support. Our customer success team stays with you throughout implementation and beyond to ensure your success."
            },
            {
              question: "Can I try OpsFlow before committing?",
              answer: "Yes! We offer a free trial period where you can test all features in your actual business environment. This allows you to see the benefits firsthand before making a commitment."
            }
          ]
        },
        {
          title: "Technical Questions",
          questions: [
            {
              question: "Is my data secure with OpsFlow?",
              answer: "Security is our top priority. We use enterprise-grade encryption, secure data centers, regular security audits, and comply with industry standards including SOC 2 Type II certification to protect your business data."
            },
            {
              question: "Can OpsFlow integrate with my existing systems?",
              answer: "Yes! OpsFlow integrates with hundreds of business systems including POS, accounting, payroll, and inventory management platforms. Our API also allows for custom integrations as needed."
            },
            {
              question: "What happens if I need to export my data?",
              answer: "You own your data and can export it at any time in standard formats. We provide data export tools and will assist with data migration if you ever decide to switch to another system."
            }
          ]
        },
        {
          title: "Support",
          questions: [
            {
              question: "How do I get help when I need it?",
              answer: "Our support team is available via phone, email, and chat during business hours, with 24/7 emergency support for critical issues. We also have an extensive knowledge base and community forum for self-service help."
            },
            {
              question: "Do you provide ongoing training as new features are released?",
              answer: "Absolutely! We regularly host webinars, create tutorial content, and provide updates on new features. Your customer success manager will keep you informed about new capabilities that could benefit your business."
            }
          ]
        }
      ]
    };

    return baseCategories[industry as keyof typeof baseCategories] || baseCategories.general;
  };

  const handleAccordionChange = (value: string) => {
    trackInteraction('support_faq_expand', {
      industry,
      role,
      accordion_value: value,
    });
  };

  const handleContactClick = () => {
    trackInteraction('support_faq_contact_click', {
      industry,
      role,
      contact_type: 'support_team',
    });
  };

  const categories = getIndustryCategories();

  const getIndustryColors = () => {
    switch (industry) {
      case 'restaurants': return 'from-background via-background to-orange-100 dark:to-orange-900';
      case 'bars': return 'from-background via-background to-purple-100 dark:to-purple-900';
      case 'coffee': return 'from-background via-background to-amber-100 dark:to-amber-900';
      case 'hotels': return 'from-background via-background to-blue-100 dark:to-blue-900';
      default: return 'from-background via-background to-slate-100 dark:to-slate-900';
    }
  };

  return (
    <section className={cn(
      "relative mx-2.5 mt-2.5 rounded-t-2xl rounded-b-[36px]",
      "bg-gradient-to-br from-background/90 via-background to-slate-50/50 dark:to-slate-900/50",
      "border border-border/40",
      className
    )}>
      <section className="py-20 lg:py-32">
        <div className="container grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Header Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-muted/60 px-3 py-1">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium text-muted-foreground">Support Center</span>
              </div>
              
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                {heading}
              </h2>
              
              <p className="text-lg leading-relaxed text-muted-foreground max-w-md">
                {subheading}{" "}
                <a 
                  href={contactLink} 
                  className="font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
                  onClick={handleContactClick}
                >
                  {contactLinkText}
                </a>
                .
              </p>
            </div>

            {/* Quick Contact Options */}
            <div className="pt-4 space-y-3">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Need immediate help?
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border bg-card/50 p-4">
                  <div className="text-sm font-medium">24/7 Emergency</div>
                  <div className="text-xs text-muted-foreground">Critical issues during service</div>
                </div>
                <div className="rounded-lg border bg-card/50 p-4">
                  <div className="text-sm font-medium">Live Chat</div>
                  <div className="text-xs text-muted-foreground">Instant support available</div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="space-y-8">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="rounded-lg border bg-card/30 backdrop-blur-sm overflow-hidden">
                <div className="bg-muted/30 px-6 py-4 border-b">
                  <h3 className="font-semibold text-lg text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="p-1">
                  <Accordion 
                    type="single" 
                    collapsible 
                    className="w-full"
                    onValueChange={handleAccordionChange}
                  >
                    {category.questions.map((item, i) => (
                      <AccordionItem 
                        key={i} 
                        value={`${categoryIndex}-${i}`}
                        className="border-0 border-b border-border/20 last:border-b-0"
                      >
                        <AccordionTrigger 
                          className="text-left px-5 py-4 text-base font-medium hover:no-underline hover:bg-muted/20 transition-colors"
                        >
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-5 pb-4 pt-0 text-muted-foreground leading-relaxed">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}