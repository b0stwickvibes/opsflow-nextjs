"use client";

import React, { useState } from 'react';
import { MessageCircle, ExternalLink, ChevronDown } from 'lucide-react';

/**
 * BarsFAQ Component
 * 
 * FAQ accordion with category badges and support sidebar.
 * Features clean Clerk.com styling with purple accents.
 * Adapts to parent accent theme (radiant galaxy purple for bars via .accent-purple wrapper)
 * 
 * Used in: /app/solutions/bars
 * Domain: Bars & Nightlife Industry  
 * Design: Stripe/Clerk ultra-clean style with adaptive accent theming
 */

export interface FAQItem {
  question: string;
  answer: string;
  category: 'setup' | 'features' | 'pricing' | 'support';
}

export interface BarsFAQProps {
  title: string;
  description: string;
  badge: string;
  faqs: FAQItem[];
  supportCTA: {
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

export function BarsFAQ({
  title,
  description,
  badge,
  faqs,
  supportCTA
}: BarsFAQProps) {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // All badges use consistent Clerk-style neutral color
  const getCategoryBadgeClass = () => {
    return "bg-slate-50/80 text-slate-600 border-slate-200/60";
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50/30">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 motion-fade-in-up-320">
          <div className="clerk-inspired-badge mb-8">
            <MessageCircle className="w-4 h-4 mr-2" />
            {badge}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* FAQ List */}
          <div className="lg:col-span-2 space-y-4 relative z-0">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-white border border-slate-200/60 rounded-2xl overflow-hidden motion-fade-in-up-320 animation-delay-${(index + 1) * 50} transition-all duration-300 relative ${
                  openItems.includes(index) ? 'border-primary/20 shadow-lg shadow-primary/5 z-10' : 'hover:border-slate-300 z-0'
                }`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 cursor-pointer hover:bg-slate-50/50 group transition-all duration-200"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`px-3 py-1 text-xs font-medium rounded-full border ${getCategoryBadgeClass()}`}>
                        {faq.category}
                      </div>
                      <h3 className="font-semibold text-foreground text-left group-hover:text-primary transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                      openItems.includes(index) ? 'rotate-180 text-primary' : ''
                    }`} />
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="border-t border-slate-200/60 bg-slate-50/30">
                    <div className="px-6 py-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Support CTA Sidebar */}
          <div className="space-y-6 motion-fade-in-up-320 animation-delay-300">
            <div className="bg-white border border-slate-200/60 rounded-3xl p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {supportCTA.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {supportCTA.description}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <button 
                    className="w-full px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                    onClick={supportCTA.primaryAction.action}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      {supportCTA.primaryAction.text}
                    </span>
                  </button>
                  
                  <button 
                    className="w-full px-6 py-3 bg-white border border-slate-200 text-foreground rounded-xl font-medium hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                    onClick={supportCTA.secondaryAction.action}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      {supportCTA.secondaryAction.text}
                    </span>
                  </button>
                </div>

                {/* Support features */}
                <div className="pt-6 border-t border-slate-200/60 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    24/7 live chat support
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    Average response: 2 minutes
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    Free setup assistance
                  </div>
                </div>
              </div>
            </div>

            {/* Knowledge base card */}
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200/60 rounded-2xl p-6">
              <h4 className="font-semibold text-foreground mb-4">
                Additional Resources
              </h4>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-3 text-left text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-200">
                  <ExternalLink className="w-4 h-4" />
                  Documentation Center
                </button>
                <button className="w-full flex items-center gap-3 p-3 text-left text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-200">
                  <ExternalLink className="w-4 h-4" />
                  Video Tutorials
                </button>
                <button className="w-full flex items-center gap-3 p-3 text-left text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-200">
                  <ExternalLink className="w-4 h-4" />
                  Community Forum
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-16 pt-8 border-t border-slate-200/60 motion-fade-in-up-320 animation-delay-400">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-1">98%</div>
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
