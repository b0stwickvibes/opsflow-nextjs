'use client';
import { useEffect, useState } from 'react';
import { registerComponentLayout } from '@/lib/style-system/layout-differentiation';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

// Analytics tracking function
const trackOfficeInteraction = (office: string, action: string) => {
  // This would connect to your actual analytics provider
  console.log(`[Analytics] office_interaction`, { office, action });
  // Example: posthog.capture('office_interaction', { office, action });
};

interface Office {
  city: string;
  address: string;
  phone: string;
  email: string;
  mapUrl?: string;
}

const offices: Office[] = [
  {
    city: "San Francisco",
    address: "123 Innovation Drive, Suite 400, San Francisco, CA 94105",
    phone: "+1 (555) 123-4567",
    email: "sf@opsflow.ai",
    mapUrl: "https://maps.google.com/?q=123+Innovation+Drive,+San+Francisco,+CA+94105"
  },
  {
    city: "New York",
    address: "456 Business Avenue, Floor 25, New York, NY 10001",
    phone: "+1 (555) 123-4569",
    email: "ny@opsflow.ai",
    mapUrl: "https://maps.google.com/?q=456+Business+Avenue,+New+York,+NY+10001"
  },
  {
    city: "Austin",
    address: "789 Tech Boulevard, Building B, Austin, TX 78701",
    phone: "+1 (555) 123-4570",
    email: "austin@opsflow.ai",
    mapUrl: "https://maps.google.com/?q=789+Tech+Boulevard,+Austin,+TX+78701"
  }
];

export function ContactOffices() {
  const [selectedOffice, setSelectedOffice] = useState<number | null>(null);
  
  useEffect(() => {
    registerComponentLayout('ContactOffices', 'company');
    
    // Report component view for analytics
    trackOfficeInteraction('offices_section', 'view');
  }, []);

  const handleAddressClick = (office: Office) => {
    trackOfficeInteraction(office.city, 'address_click');
    if (office.mapUrl) {
      window.open(office.mapUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Offices
          </motion.h2>
          <motion.p 
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Visit us at one of our locations to see OpsFlow in action
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          role="region"
          aria-label="Office locations"
        >
          {offices.map((office, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 } 
              }}
              whileTap={{ scale: 0.98 }}
              onHoverStart={() => setSelectedOffice(index)}
              onHoverEnd={() => setSelectedOffice(null)}
            >
              <Card 
                className={`h-full border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 
                  ${selectedOffice === index ? 'shadow-md border-blue-200 dark:border-blue-800' : ''}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <MapPin className={`h-5 w-5 mt-1 mr-2 flex-shrink-0 transition-colors duration-300 
                      ${selectedOffice === index ? 'text-blue-600' : 'text-slate-500'}`} />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{office.city}</h3>
                      <p 
                        className="text-slate-600 dark:text-slate-400 text-sm cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors group flex flex-wrap items-center"
                        onClick={() => handleAddressClick(office)}
                        role="button"
                        tabIndex={0}
                        aria-label={`View ${office.city} office on map`}
                        onKeyDown={(e) => e.key === 'Enter' && handleAddressClick(office)}
                      >
                        {office.address}
                        <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-2">
                    <Phone className="h-4 w-4 text-slate-500 mr-2 flex-shrink-0" />
                    <a 
                      href={`tel:${office.phone}`} 
                      className="text-blue-600 hover:underline text-sm group inline-flex items-center"
                      onClick={() => trackOfficeInteraction(office.city, 'phone_click')}
                      aria-label={`Call ${office.city} office at ${office.phone}`}
                    >
                      {office.phone}
                      <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-slate-500 mr-2 flex-shrink-0" />
                    <a 
                      href={`mailto:${office.email}`} 
                      className="text-blue-600 hover:underline text-sm group inline-flex items-center"
                      onClick={() => trackOfficeInteraction(office.city, 'email_click')}
                      aria-label={`Email ${office.city} office at ${office.email}`}
                    >
                      {office.email}
                      <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
