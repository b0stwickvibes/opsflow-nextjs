import type { Metadata } from "next";
import { ContactHero } from "@/components/domain/contact";
import { RestaurantContactForm } from "@/components/shared/forms";
import { ContactFAQ } from "@/components/domain/contact";
import { Card, CardContent } from "@/components/ui/card";

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
      <div className="container mx-auto px-4 sm:px-6">
        <ContactHero 
          title="Talk to our hospitality experts" 
          subtitle="Sales, support, partnerships, and integrations—tell us what you need."
        />
      </div>
      
      {/* Contact form */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-primary/5 opacity-50" aria-hidden="true" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <RestaurantContactForm />
        </div>
      </section>
      
      {/* Success metrics */}
      <div className="w-full max-w-[100vw] bg-base-50 dark:bg-base-900 border-t border-b border-base-200 dark:border-base-800 relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-grid-primary/5 opacity-50" aria-hidden="true" />
        <div className="absolute -top-20 right-1/4 w-80 h-80 rounded-full bg-primary-100/40 dark:bg-primary-900/10 blur-3xl opacity-60 animate-pulse-subtle" />
        <div className="absolute -bottom-40 left-1/4 w-96 h-96 rounded-full bg-secondary-100/30 dark:bg-secondary-900/10 blur-3xl opacity-50 animate-pulse-subtle" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 mb-10">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-3 animate-slide-down">Real Results from Real Restaurants</h3>
            <p className="text-muted-foreground animate-fade-in text-lg max-w-2xl mx-auto">
              Join hundreds of restaurants improving operations with OpsFlow
            </p>
          </div>
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
      </div>
      
      {/* FAQ section */}
      <div className="w-full max-w-[100vw] bg-base-50/50 dark:bg-base-900/50 relative overflow-hidden py-16">
        <div className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-secondary-100/30 dark:bg-secondary-900/10 blur-3xl opacity-40 animate-pulse-subtle" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-100/30 dark:bg-primary-900/10 blur-3xl opacity-30 animate-pulse-subtle" style={{ animationDelay: '1.5s' }} />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <ContactFAQ />
        </div>
      </div>
    </div>
  );
}
