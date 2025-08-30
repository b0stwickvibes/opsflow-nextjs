'use client';
import { useEffect } from 'react';
import { registerComponentLayout } from '@/lib/style-system/layout-differentiation';
import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';

// Analytics tracking function
const trackHeroInteraction = (action: string, label?: string) => {
  // This would connect to your actual analytics provider
  console.log(`[Analytics] hero_interaction`, { action, label });
  // Example: posthog.capture('hero_interaction', { action, label });
};

interface ContactHeroProps {
  title: string;
  subtitle: string;
}

export function ContactHero({ title, subtitle }: ContactHeroProps) {
  useEffect(() => {
    registerComponentLayout('ContactHero', 'company' as any);
    
    // Track view for analytics
    trackHeroInteraction('view');
    
    return () => {
      // Track when component unmounts
      trackHeroInteraction('leave');
    };
  }, []);

  const handleScheduleClick = () => {
    trackHeroInteraction('button_click', 'schedule_demo');
    // In a real app, this would navigate to the scheduling page or open a modal
    window.location.href = '#demo-form';
  };

  const handleSupportClick = () => {
    trackHeroInteraction('button_click', 'contact_support');
    // In a real app, this might open a chat widget or navigate to support
    window.location.href = 'mailto:support@opsflow.ai';
  };

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-100 dark:bg-blue-900/20 blur-3xl opacity-60 animate-fade-in"
        />
        <div 
          className="absolute -left-20 bottom-10 w-80 h-80 rounded-full bg-indigo-100 dark:bg-indigo-900/20 blur-3xl opacity-50 animate-fade-in"
        />
        
        {/* Restaurant-themed dots pattern */}
        <div className="absolute inset-0 bg-grid-primary/10 opacity-30" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6 animate-slide-down"
          >
            {title}
          </h1>
          
          <p 
            className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed animate-fade-in"
          >
            {subtitle}
          </p>
          
          <div 
            className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up"
          >
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 transition-all group relative overflow-hidden"
              onClick={handleScheduleClick}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                Schedule a Demo
              </span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              onClick={handleSupportClick}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Support
            </Button>
          </div>
          
          {/* Key metrics stats */}
          <div 
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 text-center animate-fade-in"
          >
            <div>
              <p className="text-blue-600 dark:text-blue-400 font-bold text-3xl">24/7</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Support Coverage</p>
            </div>
            <div>
              <p className="text-blue-600 dark:text-blue-400 font-bold text-3xl">15+</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">POS Integrations</p>
            </div>
            <div>
              <p className="text-blue-600 dark:text-blue-400 font-bold text-3xl">1hr</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Response Time</p>
            </div>
            <div>
              <p className="text-blue-600 dark:text-blue-400 font-bold text-3xl">5k+</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Restaurants Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;
