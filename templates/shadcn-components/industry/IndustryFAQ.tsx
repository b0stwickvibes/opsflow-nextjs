import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { ChevronDown, HelpCircle, MessageCircle, ExternalLink } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  category?: "setup" | "features" | "pricing" | "support";
}

interface IndustryFAQProps {
  title: string;
  description: string;
  badge?: string;
  faqs: FAQItem[];
  supportCTA?: {
    title: string;
    description: string;
    primaryAction: {
      text: string;
      action: () => void;
    };
    secondaryAction: {
      text: string;
      action: () => void;
    };
  };
}

export function IndustryFAQ({ title, description, badge, faqs, supportCTA }: IndustryFAQProps) {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const getCategoryColor = (category?: string) => {
    switch (category) {
      case "setup": return "bg-primary/10 text-primary border-primary/20";
      case "features": return "bg-secondary/10 text-secondary border-secondary/20";
      case "pricing": return "bg-chart-3/50 text-primary border-primary/20";
      case "support": return "bg-chart-4/50 text-secondary border-secondary/20";
      default: return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <section className="section-marketing bg-surface-subtle-primary/20">
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          {badge && (
            <Badge variant="outline" className="mb-6 clerk-inspired-badge">
              <HelpCircle className="w-4 h-4 mr-2" />
              {badge}
            </Badge>
          )}
          <h2 className="text-display-lg mb-6">
            {title}
          </h2>
          <p className="enterprise-body max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* FAQ List */}
          <div className="lg:col-span-2 space-y-4">
            {faqs.map((faq, index) => (
              <Collapsible
                key={index}
                open={openItems.includes(index)}
                onOpenChange={() => toggleItem(index)}
              >
                <CollapsibleTrigger asChild>
                  <div className="enterprise-card p-6 cursor-pointer hover-scale-103 group transition-all duration-200">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        {faq.category && (
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${getCategoryColor(faq.category)}`}
                          >
                            {faq.category}
                          </Badge>
                        )}
                        <h3 className="font-semibold dashboard-text-primary text-left group-hover:text-primary transition-colors">
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                        openItems.includes(index) ? 'rotate-180' : ''
                      }`} />
                    </div>
                  </div>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <div className="enterprise-metric-card p-6 mt-2 ml-6 mr-6">
                    <p className="enterprise-body text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>

          {/* Support CTA Sidebar */}
          <div className="space-y-6">
            {supportCTA && (
              <div className="enterprise-card p-8 sticky top-24">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 icon-container-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-display-sm dashboard-text-primary mb-3">
                      {supportCTA.title}
                    </h3>
                    <p className="enterprise-body text-sm">
                      {supportCTA.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <Button 
                      className="w-full clerk-cta-primary"
                      onClick={supportCTA.primaryAction.action}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      {supportCTA.primaryAction.text}
                    </Button>
                    
                    <Button 
                      variant="outline"
                      className="w-full"
                      onClick={supportCTA.secondaryAction.action}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {supportCTA.secondaryAction.text}
                    </Button>
                  </div>

                  {/* Support features */}
                  <div className="pt-6 border-t border-border/50 space-y-3">
                    <div className="flex items-center gap-3 text-sm dashboard-text-muted">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      24/7 live chat support
                    </div>
                    <div className="flex items-center gap-3 text-sm dashboard-text-muted">
                      <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                      Average response: 2 minutes
                    </div>
                    <div className="flex items-center gap-3 text-sm dashboard-text-muted">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      Free setup assistance
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Knowledge base card */}
            <div className="enterprise-metric-card p-6">
              <h4 className="font-semibold dashboard-text-primary mb-4">
                Additional Resources
              </h4>
              <div className="space-y-3">
                <Button variant="ghost" size="sm" className="w-full justify-start p-0">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Documentation Center
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start p-0">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Video Tutorials
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start p-0">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Community Forum
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-gradient mb-1">98%</div>
              <div className="text-sm dashboard-text-muted">Questions resolved instantly</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gradient mb-1">2min</div>
              <div className="text-sm dashboard-text-muted">Average response time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gradient mb-1">24/7</div>
              <div className="text-sm dashboard-text-muted">Support availability</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gradient mb-1">1000+</div>
              <div className="text-sm dashboard-text-muted">Satisfied customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}