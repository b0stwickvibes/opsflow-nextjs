'use client';
import { useEffect, useState } from 'react';
import { registerComponentLayout } from '@/lib/style-system/layout-differentiation';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MessageSquare, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Analytics tracking function
const trackContactInteraction = (method: string, action: string) => {
  // This would connect to your actual analytics provider
  console.log(`[Analytics] contact_interaction`, { method, action });
  // Example: posthog.capture('contact_interaction', { method, action });
};

interface ContactMethod {
  title: string;
  description: string;
  email?: string;
  phone?: string;
  hours?: string;
  availability?: string;
  icon: React.ReactNode;
}

const contactMethods: ContactMethod[] = [
  {
    title: "Restaurant Sales",
    description: "Pricing & demos",
    email: "sales@opsflow.ai",
    phone: "+1 (555) 123-4567",
    hours: "Mon–Fri 9AM–6PM PST",
    icon: <Phone className="h-8 w-8 text-primary" />
  },
  {
    title: "Restaurant Support",
    description: "24/7 assistance",
    email: "support@opsflow.ai",
    phone: "+1 (555) 123-4568",
    hours: "",
    icon: <Mail className="h-8 w-8 text-primary" />
  },
  {
    title: "Live Chat",
    description: "Real-time help",
    availability: "Available on website",
    hours: "Mon–Fri 8AM–8PM PST",
    icon: <MessageSquare className="h-8 w-8 text-primary" />
  }
];

export function ContactMethods() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  useEffect(() => {
    registerComponentLayout('ContactMethods', 'marketing');
    
    // Report component view for analytics
    trackContactInteraction('contact_methods', 'view');
    
    return () => {
      // Track when component unmounts
      trackContactInteraction('contact_methods', 'leave');
    };
  }, []);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          role="region"
          aria-label="Contact methods"
        >
          {contactMethods.map((method, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="h-full"
            >
              <Card 
                className="h-full shadow-sm transition-all duration-300 hover:shadow-md relative overflow-hidden"
              >
                <AnimatePresence>
                  {hoveredCard === index && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </AnimatePresence>
                
                <CardContent className="p-6 relative">
                  <motion.div 
                    className="mb-4"
                    animate={{ scale: hoveredCard === index ? 1.1 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {method.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  
                  {method.email && (
                    <p className="text-sm mb-1 flex items-center">
                      <a 
                        href={`mailto:${method.email}`} 
                        className="text-primary hover:underline group inline-flex items-center"
                        onClick={() => trackContactInteraction(method.title, 'email_click')}
                        aria-label={`Email ${method.title} at ${method.email}`}
                      >
                        {method.email}
                        <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </p>
                  )}
                  
                  {method.phone && (
                    <p className="text-sm mb-1 flex items-center">
                      <a 
                        href={`tel:${method.phone}`} 
                        className="text-primary hover:underline group inline-flex items-center"
                        onClick={() => trackContactInteraction(method.title, 'phone_click')}
                        aria-label={`Call ${method.title} at ${method.phone}`}
                      >
                        {method.phone}
                        <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </p>
                  )}
                  
                  {method.availability && (
                    <p className="text-sm mb-1 text-primary font-medium flex items-center">
                      <span className="inline-block h-2 w-2 rounded-full bg-primary mr-2" aria-hidden="true" />
                      {method.availability}
                    </p>
                  )}
                  
                  {method.hours && (
                    <p className="text-xs text-muted-foreground mt-2">
                      {method.hours}
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
