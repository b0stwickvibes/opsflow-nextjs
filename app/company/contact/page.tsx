import type { Metadata } from "next";
import { ContactHero } from "@/components/domain/contact";
import { RestaurantContactForm } from "@/components/shared/forms";
import { ContactFAQ } from "@/components/domain/contact";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionContent } from "@/components/shared/layout";

// Success metrics data
const successMetrics = [
  { 
    metric: "99.7%", 
    description: "HACCP compliance rate"
  },
  { 
    metric: "3.5x", 
    description: "Faster temperature logging"
  },
  { 
    metric: "24%", 
    description: "Reduction in food waste"
  },
  { 
    metric: "48 min", 
    description: "Daily manager time saved"
  },
  { 
    metric: "4.9/5", 
    description: "Customer satisfaction"
  },
  { 
    metric: "37%", 
    description: "Reduction in audit prep time"
  },
  { 
    metric: "2.8 hrs", 
    description: "Weekly time savings per location"
  },
  { 
    metric: "14%", 
    description: "Improved staff retention"
  },
];

export const metadata: Metadata = {
  title: "Contact OpsFlow | Restaurant Operations Platform",
  description: "Get in touch with our hospitality experts for sales, support, partnerships, and integrations. 24/7 assistance available for restaurant operations.",
};

export default function ContactPage() {
  return (
    <div className="-mt-0">
      {/* Hero section */}
      <Section padding="lg">
        <SectionContent>
          <ContactHero 
            title="Talk to our hospitality experts" 
            subtitle="Sales, support, partnerships, and integrations—tell us what you need."
          />
        </SectionContent>
      </Section>
      
      {/* Contact form */}
      <Section background="muted" padding="lg">
        <SectionContent>
          <RestaurantContactForm />
        </SectionContent>
      </Section>
      
      {/* Success metrics */}
      <Section background="muted" padding="lg">
        <SectionContent>
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-3 animate-slide-down">Real Results from Real Restaurants</h3>
            <p className="text-muted-foreground animate-fade-in text-lg max-w-2xl mx-auto">
              Join hundreds of restaurants improving operations with OpsFlow
            </p>
          </div>
        
        <div className="w-full px-4 overflow-hidden relative z-10">
          <div className="flex w-full flex-nowrap overflow-hidden [--duration:40s] [--gap:2rem]">
            <div className="flex w-max animate-marquee items-stretch gap-[--gap]">
              {successMetrics.map((item, index) => (
                <div key={index} className="mx-4 animate-fade-in" style={{animationDelay: `${0.1 * index}s`}}>
                  <Card className="min-w-[240px] border-base-200 dark:border-base-800 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-md">
                    <CardContent className="p-8">
                      <p className="text-4xl font-bold text-primary mb-2">{item.metric}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            <div className="flex w-max animate-marquee items-stretch gap-[--gap]" aria-hidden="true">
              {successMetrics.map((item, index) => (
                <div key={`duplicate-${index}`} className="mx-4 animate-fade-in" style={{animationDelay: `${0.1 * index}s`}}>
                  <Card className="min-w-[240px] border-base-200 dark:border-base-800 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-md">
                    <CardContent className="p-8">
                      <p className="text-4xl font-bold text-primary mb-2">{item.metric}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
        </SectionContent>
      </Section>
      
      {/* FAQ section */}
      <Section background="muted" padding="lg">
        <SectionContent>
          <ContactFAQ />
        </SectionContent>
      </Section>
    </div>
  );
}
