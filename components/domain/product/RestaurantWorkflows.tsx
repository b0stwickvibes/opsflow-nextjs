"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  CheckSquare, 
  Thermometer, 
  ClipboardCheck, 
  BarChart3,
  ArrowRight,
  ChefHat,
  Clock,
  Shield,
  Users
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { RestaurantWorkflow } from '@/types/restaurant-pages';

interface RestaurantWorkflowsProps {
  workflows: RestaurantWorkflow[];
  className?: string;
}

const workflowIcons = {
  'Smart Task Management': CheckSquare,
  'Food Safety & HACCP': Thermometer,
  'Digital Audits': ClipboardCheck,
  'Real-time Analytics': BarChart3,
  'Staff Coordination': Users,
  'Kitchen Operations': ChefHat,
  'Compliance Monitoring': Shield,
  'Time Management': Clock
};

export function RestaurantWorkflows({ 
  workflows, 
  className 
}: RestaurantWorkflowsProps) {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className={cn("py-24", className)}>
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-orange-50 text-orange-700 border-orange-200">
            Restaurant Operations Workflows
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Streamlined Operations,{' '}
            <span className="text-orange-600">Exceptional Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our restaurant-first platform integrates seamlessly with your existing processes 
            while introducing intelligent automation and real-time visibility.
          </p>
        </div>

        {/* Workflows Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {workflows.map((workflow, index) => {
            // Find matching icon or use default
            const IconComponent = workflowIcons[workflow.title as keyof typeof workflowIcons] || CheckSquare;
            
            return (
              <motion.div key={workflow.title} variants={item}>
                <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-900 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-orange-600" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-orange-600 transition-colors">
                          {workflow.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {workflow.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    {/* Features List */}
                    <div className="space-y-3 mb-6">
                      {workflow.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                            <CheckSquare className="w-3 h-3 text-green-600" />
                          </div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Metrics Badge */}
                    {workflow.metrics && (
                      <div className="mb-4">
                        <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200">
                          {workflow.metrics}
                        </Badge>
                      </div>
                    )}

                    {/* CTA */}
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between text-orange-600 hover:text-orange-700 hover:bg-orange-50 dark:hover:bg-orange-900/30 group/button"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>

                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg" />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16 p-8 bg-gradient-to-br from-orange-50 to-blue-50 dark:from-orange-950/20 dark:to-blue-950/20 rounded-3xl border border-orange-100 dark:border-orange-800/30"
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready to Transform Your Restaurant Operations?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of restaurants using OpsFlow to streamline operations, 
            ensure compliance, and drive efficiency. Get started with a free demo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              Start Restaurant Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              Talk to Restaurant Expert
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
