'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { trackPricingEvent } from '@/lib/pricing/config';

interface PricingFAQProps {
  faqItems: Array<{ question: string; answer: string; category?: string }>;
  experimentId?: string;
}

export default function PricingFAQ({ faqItems, experimentId }: PricingFAQProps) {
  const handleFAQExpand = (question: string) => {
    trackPricingEvent({ event: 'faq_expand', experimentId, metadata: { question } });
  };

  return (
    <section className="py-16 bg-muted/50" aria-labelledby="faq-heading">
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="faq-heading" className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about our restaurant operations pricing and plans.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <Accordion type="single" collapsible>
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left" onClick={() => handleFAQExpand(item.question)}>
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}