import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FeatureAccordionSection() {
  const items = [
    {
      q: "HACCP automation",
      a: "Digital critical control points, real-time alerts, and inspection-ready reports.",
    },
    {
      q: "Smart operations",
      a: "Task routing, incident workflows, and corrective actions that close the loop.",
    },
    {
      q: "Enterprise analytics",
      a: "Location-level dashboards, ROI tracking, and executive views.",
    },
  ];
  return (
    <section className="py-16">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-display-md mb-3">What’s included</h2>
          <p className="enterprise-body">
            A production-quality stack using our global tokens, Clerk-inspired UI polish,
            and shadcn/ui primitives. Paste Figma sections here and we’ll adapt them.
          </p>
        </div>
        <Accordion type="single" collapsible className="border rounded-xl bg-background">
          {items.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="px-5">{item.q}</AccordionTrigger>
              <AccordionContent className="px-5 pb-4 text-sm text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FeatureAccordionSection;
