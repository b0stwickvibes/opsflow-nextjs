"use client"

import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  description?: string
  items: FAQItem[]
  className?: string
}

export function FAQSection({ 
  title = "Frequently Asked Questions", 
  description,
  items,
  className = ""
}: FAQSectionProps) {
  return (
    <section className={`py-12 ${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-3">{title}</h2>
        {description && (
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
