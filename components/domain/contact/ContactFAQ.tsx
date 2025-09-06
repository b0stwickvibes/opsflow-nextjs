'use client';
import { useEffect, useState } from 'react';
import { registerComponentLayout } from '@/lib/style-system/layout-differentiation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BarChart3, Clock, Share2, CalendarCheck } from 'lucide-react';

// Analytics tracking
const trackFaqInteraction = (question: string, action: 'view' | 'expand' | 'collapse') => {
  // This would connect to your actual analytics provider
  console.log(`[Analytics] faq_interaction`, { question, action });
  // Example: posthog.capture('faq_interaction', { question, action });
};

interface FAQItem {
  question: string;
  answer: string;
  icon: React.ReactNode;
  additionalInfo?: React.ReactNode;
}

const faqItems: FAQItem[] = [
  {
    question: "What is the typical timeline for getting started with OpsFlow?",
    answer: "Most restaurants are up and running with OpsFlow in less than a week. Our onboarding process includes initial setup (1-2 days), staff training (1 day), and menu/operations configuration (1-3 days depending on complexity). Enterprise customers with multiple locations may require a more phased approach, which our implementation team will coordinate.",
    icon: <Clock className="h-5 w-5 text-primary" />,
    additionalInfo: (
      <div className="mt-4 bg-primary-50 dark:bg-primary-950 p-3 rounded-md">
        <h4 className="font-medium mb-2 text-sm">Implementation Schedule</h4>
        <ul className="text-xs space-y-1 list-disc pl-4">
          <li>Day 1: Account setup and initial configuration</li>
          <li>Day 2-3: Staff training and system customization</li>
          <li>Day 4-5: Menu setup and compliance workflows</li>
          <li>Day 6-7: Final testing and go-live support</li>
        </ul>
      </div>
    )
  },
  {
    question: "Can OpsFlow integrate with my custom or legacy systems?",
    answer: "Yes, OpsFlow offers flexible integration options through our comprehensive API. Our platform connects with most major POS systems out of the box, and our development team can build custom integrations for legacy or proprietary systems. Custom integration projects typically take 2-4 weeks depending on complexity.",
    icon: <Share2 className="h-5 w-5 text-primary" />,
  },
  {
    question: "What kind of support does OpsFlow provide?",
    answer: "We offer 24/7 technical support for all customers. Support includes access to our comprehensive documentation, video tutorials, and direct assistance via email and chat. Enterprise customers also receive a dedicated Customer Success Manager for personalized support and quarterly business reviews.",
    icon: <BarChart3 className="h-5 w-5 text-primary" />,
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial of OpsFlow with full functionality. No credit card is required to start your trial. During this period, you'll have access to all features and our support team to help you evaluate if OpsFlow is right for your restaurant operations.",
    icon: <CalendarCheck className="h-5 w-5 text-primary" />,
  }
];

export function ContactFAQ() {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  
  useEffect(() => {
    registerComponentLayout('ContactFAQ', 'marketing');
    
    // Report view to analytics
    trackFaqInteraction('faq_section', 'view');
  }, []);

  const handleAccordionValueChange = (value: string) => {
    // This is called whenever an accordion item is toggled
    setExpandedItems((prev) => {
      // If the value is empty, the accordion is being closed
      if (!value) {
        // Find which item was closed
        const closedItem = prev.length > 0 ? prev[0] : '';
        if (closedItem) {
          trackFaqInteraction(`Q${closedItem.replace('item-', '')}`, 'collapse');
        }
        return [];
      }
      
      // If the value exists, the accordion is being opened
      trackFaqInteraction(`Q${value.replace('item-', '')}`, 'expand');
      return [value];
    });
  };

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 
          className="text-3xl font-bold tracking-tight mb-4 animate-slide-down"
        >
          Frequently Asked Questions
        </h2>
        <p 
          className="text-muted-foreground max-w-2xl mx-auto animate-fade-in"
        >
          Find quick answers to common questions about OpsFlow
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <Accordion 
          type="single" 
          collapsible 
          className="w-full"
          onValueChange={handleAccordionValueChange}
        >
          {faqItems.map((item, index) => (
            <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
              <AccordionItem value={`item-${index}`} className="border rounded-lg mb-4 overflow-hidden">
                <AccordionTrigger className="text-left font-medium px-6 py-4 hover:bg-accent transition-colors">
                  <div className="flex items-center">
                    <span className="mr-3">{item.icon}</span>
                    {item.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground px-6 pb-4 pt-2">
                  <div className="pl-8 border-l-2 border-border">
                    {item.answer}
                    {item.additionalInfo}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
        
        <div 
          className="mt-8 text-center animate-fade-in"
          style={{animationDelay: "600ms"}}
        >
          <p className="text-muted-foreground">
            Still have questions? <a href="mailto:support@opsflow.ai" className="text-primary hover:underline font-medium">Contact our support team</a>
          </p>
        </div>
      </div>
    </div>
  );
}
