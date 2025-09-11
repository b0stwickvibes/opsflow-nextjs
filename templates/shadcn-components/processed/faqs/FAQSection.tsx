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

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

interface FAQSectionProps {
  industry?: IndustryType | 'general';
  role?: RoleType | 'general';
  heading?: string;
  items?: FaqItem[];
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
}

export function FAQSection({
  industry = 'restaurants',
  role = 'general',
  heading,
  items,
  className,
  maxWidth = '3xl',
}: FAQSectionProps) {
  const { trackInteraction } = useRestaurantAnalytics();

  const getIndustryHeading = () => {
    if (heading) return heading;
    
    const headings = {
      restaurants: "Restaurant Operations FAQ",
      bars: "Bar Management FAQ", 
      coffee: "Coffee Shop Operations FAQ",
      hotels: "Hotel Dining FAQ",
      general: "Frequently Asked Questions",
    };
    return headings[industry as keyof typeof headings] || headings.general;
  };

  const getDefaultItems = (): FaqItem[] => {
    const baseItems = {
      restaurants: [
        {
          id: "restaurant-faq-1",
          question: "How does OpsFlow help with HACCP compliance?",
          answer: "OpsFlow provides automated temperature monitoring, digital food safety logs, and real-time compliance tracking to ensure your restaurant meets all HACCP requirements. The system sends alerts for critical control points and maintains comprehensive audit trails for health inspections."
        },
        {
          id: "restaurant-faq-2", 
          question: "Can OpsFlow integrate with our existing POS system?",
          answer: "Yes, OpsFlow seamlessly integrates with major POS systems including Square, Toast, Clover, and many others. This integration allows for real-time order tracking, inventory updates, and comprehensive sales reporting across all your restaurant operations."
        },
        {
          id: "restaurant-faq-3",
          question: "How does the kitchen display system improve efficiency?",
          answer: "Our kitchen display system replaces paper tickets with digital orders, showing prep times, special instructions, and order priorities. It reduces errors, speeds up service, and provides real-time analytics on kitchen performance and bottlenecks."
        },
        {
          id: "restaurant-faq-4",
          question: "What kind of analytics and reporting does OpsFlow provide?",
          answer: "OpsFlow offers comprehensive analytics including sales trends, food cost analysis, labor optimization, customer preferences, and operational efficiency metrics. All reports are customizable and available in real-time to help you make data-driven decisions."
        },
        {
          id: "restaurant-faq-5",
          question: "How does OpsFlow help with staff scheduling and labor costs?",
          answer: "Our AI-powered scheduling system analyzes historical data, weather patterns, and events to predict optimal staffing levels. It helps reduce labor costs while ensuring adequate coverage during peak times, with built-in compliance for break times and overtime regulations."
        },
        {
          id: "restaurant-faq-6",
          question: "Is OpsFlow suitable for multiple restaurant locations?",
          answer: "Absolutely! OpsFlow is designed for scalability, from single restaurants to large chains. The platform provides centralized management, standardized processes across locations, and consolidated reporting while allowing for location-specific customizations."
        },
        {
          id: "restaurant-faq-7",
          question: "What training and support is provided?",
          answer: "We provide comprehensive onboarding including staff training, setup assistance, and ongoing support. Our team includes restaurant industry experts who understand your operational challenges and can help optimize your use of the platform for maximum ROI."
        }
      ],
      bars: [
        {
          id: "bar-faq-1",
          question: "How does OpsFlow handle liquor inventory tracking?",
          answer: "OpsFlow provides precise liquor inventory management with pour tracking, automatic reorder points, and theft detection. The system monitors inventory levels in real-time and can integrate with smart pour systems to track every ounce dispensed."
        },
        {
          id: "bar-faq-2",
          question: "Can the system manage multiple bar areas and service types?",
          answer: "Yes, OpsFlow supports complex bar operations including main bars, service bars, outdoor areas, and VIP sections. Each area can have separate menus, pricing, and inventory tracking while maintaining unified reporting and management."
        },
        {
          id: "bar-faq-3", 
          question: "How does OpsFlow help with peak hour management?",
          answer: "Our system provides predictive analytics for busy periods, optimized staff scheduling for peak hours, and real-time queue management. It helps reduce wait times and ensures adequate bartender coverage during events and busy nights."
        },
        {
          id: "bar-faq-4",
          question: "What safety and compliance features are included?",
          answer: "OpsFlow includes responsible service tracking, ID verification logs, incident reporting, and compliance with local alcohol service regulations. The system helps maintain safety standards and provides documentation for regulatory requirements."
        },
        {
          id: "bar-faq-5",
          question: "How does event management work in the system?",
          answer: "The platform includes comprehensive event planning tools for private parties, live music, and special events. It manages capacity, special pricing, staff assignments, and inventory requirements specific to each event type."
        }
      ],
      coffee: [
        {
          id: "coffee-faq-1",
          question: "How does OpsFlow optimize coffee shop operations?",
          answer: "OpsFlow streamlines coffee shop workflows with barista task management, queue optimization, and brewing quality tracking. The system helps reduce wait times during rush hours and maintains consistency across all drinks and locations."
        },
        {
          id: "coffee-faq-2",
          question: "Can the system track coffee bean inventory and freshness?",
          answer: "Yes, OpsFlow includes sophisticated inventory management for coffee beans, tracking roast dates, origin information, and freshness indicators. It provides automatic alerts for bean rotation and reordering to maintain quality standards."
        },
        {
          id: "coffee-faq-3",
          question: "How does OpsFlow handle customer loyalty and preferences?",
          answer: "The platform integrates customer loyalty programs with preference tracking, allowing baristas to quickly access favorite orders and personalization options. It helps build stronger customer relationships and increases repeat business."
        },
        {
          id: "coffee-faq-4",
          question: "What analytics are provided for coffee shop operations?",
          answer: "OpsFlow offers detailed analytics on drink preferences, peak hours, seasonal trends, and barista performance. Reports include cost analysis per drink, popular combinations, and customer flow patterns to optimize operations."
        },
        {
          id: "coffee-faq-5",
          question: "How does the system support multiple coffee shop locations?",
          answer: "For coffee shop chains, OpsFlow provides standardized recipes, centralized inventory management, and consistent quality control across all locations. Each shop can maintain local preferences while adhering to brand standards."
        }
      ],
      hotels: [
        {
          id: "hotel-faq-1",
          question: "How does OpsFlow manage multiple dining outlets in hotels?",
          answer: "OpsFlow provides unified management for restaurants, room service, banquets, and catering within hotels. Each outlet maintains separate menus and operations while sharing centralized inventory, reporting, and guest preference tracking."
        },
        {
          id: "hotel-faq-2",
          question: "Can the system integrate with hotel management systems?",
          answer: "Yes, OpsFlow seamlessly integrates with major hotel PMS systems to sync guest information, charge dining to rooms, and track guest preferences across stays. This integration enables personalized service and streamlined billing."
        },
        {
          id: "hotel-faq-3",
          question: "How does OpsFlow handle banquet and event catering?",
          answer: "The platform includes comprehensive event management for banquets, conferences, and special functions. It manages menu planning, capacity requirements, staff scheduling, and coordination between kitchen and event teams."
        },
        {
          id: "hotel-faq-4",
          question: "What guest experience features are included?",
          answer: "OpsFlow enhances guest experience with digital room service ordering, dietary preference tracking, and personalized recommendations. Guests can order from mobile devices, and staff receive detailed preparation instructions for special dietary needs."
        },
        {
          id: "hotel-faq-5",
          question: "How does the system support hotel dining revenue management?",
          answer: "The platform provides revenue optimization tools including dynamic pricing for special events, cost analysis by outlet, and guest spend tracking. It helps maximize food and beverage revenue while maintaining excellent service standards."
        }
      ],
      general: [
        {
          id: "general-faq-1",
          question: "What is OpsFlow and how does it work?",
          answer: "OpsFlow is a comprehensive operations management platform designed for the foodservice industry. It streamlines workflows, automates routine tasks, and provides real-time insights to help businesses operate more efficiently and profitably."
        },
        {
          id: "general-faq-2",
          question: "How quickly can we get started with OpsFlow?",
          answer: "Most businesses can be up and running with OpsFlow within 1-2 weeks. Our implementation team handles setup, data migration, and staff training to ensure a smooth transition with minimal disruption to operations."
        },
        {
          id: "general-faq-3",
          question: "What kind of support and training do you provide?",
          answer: "We provide comprehensive onboarding, ongoing training resources, and 24/7 customer support. Our team includes industry experts who understand operational challenges and can help optimize your use of the platform."
        },
        {
          id: "general-faq-4",
          question: "Is my data secure with OpsFlow?",
          answer: "Yes, security is our top priority. OpsFlow uses enterprise-grade encryption, secure data centers, and complies with industry standards. We maintain regular security audits and provide data backup and recovery services."
        },
        {
          id: "general-faq-5",
          question: "Can OpsFlow scale with our business growth?",
          answer: "Absolutely! OpsFlow is built for scalability, supporting everything from single locations to large multi-unit operations. The platform grows with your business, adding features and capacity as needed without disrupting operations."
        }
      ]
    };

    return baseItems[industry as keyof typeof baseItems] || baseItems.general;
  };

  const faqItems = items || getDefaultItems();

  const handleAccordionChange = (value: string) => {
    const item = faqItems.find((_, index) => `item-${index}` === value);
    if (item) {
      trackInteraction('faq_item_expand', {
        industry,
        role,
        question: item.question,
        faq_id: item.id,
      });
    }
  };

  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md', 
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
  };

  return (
    <section className={cn("section-marketing", className)}>
      <div className={cn("container", maxWidthClasses[maxWidth])}>
        <h1 
          className="heading-brand-gradient text-display-2xl mb-4 text-3xl font-semibold md:mb-11 md: text-center"
          role="heading"
          aria-level={1}
        >
          {getIndustryHeading()}
        </h1>
        
        <Accordion 
          type="single" 
          collapsible 
          onValueChange={handleAccordionChange}
          className="bg-card/70 backdrop-blur-sm border rounded-xl"
        >
          {faqItems.map((item, index) => (
            <AccordionItem 
              key={item.id || index} 
              value={`item-${index}`}
              className="border-b border-border/50 tile-hover"
            >
              <AccordionTrigger 
                className="font-semibold hover:no-underline text-left py-6 px-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-describedby={`faq-answer-${index}`}
              >
                {item.question}
              </AccordionTrigger>
              <AccordionContent 
                id={`faq-answer-${index}`}
                className="text-muted-foreground pb-6 px-5 leading-relaxed"
              >
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}