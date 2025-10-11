/**
 * Coffee FAQ Component
 *
 * Frequently Asked Questions for coffee shop operations.
 * Accordion-style presentation with support CTA.
 */

"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
  category: "setup" | "features" | "pricing" | "support";
}

interface SupportCTA {
  title: string;
  description: string;
  primaryAction: {
    text: string;
    action: () => void;
  };
  secondaryAction?: {
    text: string;
    action: () => void;
  };
}

interface CoffeeFAQProps {
  title: string;
  description: string;
  badge?: string;
  faqs: FAQ[];
  supportCTA?: SupportCTA;
}

export function CoffeeFAQ({
  title,
  description,
  badge,
  faqs,
  supportCTA
}: CoffeeFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-12 text-center">
        {badge && (
          <Badge variant="outline" className="clerk-inspired-badge mb-4 px-3 py-1">
            {badge}
          </Badge>
        )}
        <h2 className="enterprise-headline mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p className="dashboard-text-secondary mx-auto max-w-2xl text-lg">
          {description}
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="mx-auto max-w-3xl space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="enterprise-card overflow-hidden rounded-xl border transition-all"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-start justify-between gap-4 p-6 text-left transition-colors hover:bg-muted/50"
              >
                <span className="dashboard-text-primary flex-1 font-semibold">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-orange-600 transition-transform dark:text-orange-400 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="border-t bg-muted/20 p-6">
                  <p className="dashboard-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Support CTA */}
      {supportCTA && (
        <div className="enterprise-card mx-auto mt-12 max-w-3xl rounded-2xl border p-8 text-center">
          <h3 className="enterprise-headline mb-3 text-xl font-bold">
            {supportCTA.title}
          </h3>
          <p className="dashboard-text-secondary mb-6">
            {supportCTA.description}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              onClick={supportCTA.primaryAction.action}
              size="lg"
              className="clerk-cta-primary min-w-[180px]"
            >
              {supportCTA.primaryAction.text}
            </Button>
            {supportCTA.secondaryAction && (
              <Button
                onClick={supportCTA.secondaryAction.action}
                variant="outline"
                size="lg"
                className="clerk-cta-ghost min-w-[180px]"
              >
                {supportCTA.secondaryAction.text}
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
