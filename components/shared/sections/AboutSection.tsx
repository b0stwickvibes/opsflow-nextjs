"use client";

import { CheckCircle, Users, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface AboutSectionProps {
  industry?: "restaurants" | "bars" | "coffee" | "hotels" | "general";
  showJoinTeam?: boolean;
  customTitle?: string;
  customDescription?: string;
}

const coreValues = [
  {
    title: "Precision at Scale",
    description: "We design systems that scale without losing accuracy, ensuring operational standards are met whether you manage 1 or 100 locations."
  },
  {
    title: "Built for People",
    description: "Technology should empower, not overwhelm. OpsFlow is crafted to make life simpler for managers and teams on the ground."
  },
  {
    title: "Compliance by Design",
    description: "Regulatory and brand standards are baked into every workflow, turning compliance from a burden into a strength."
  }
];

export function AboutSection({
  industry = "general",
  showJoinTeam = true,
  customTitle,
  customDescription
}: AboutSectionProps) {

  const mission = "Our mission is to eliminate operational chaos by giving operators the visibility and automation they need to deliver consistent excellence, every day, at every location.";

  const description = "Transform your bar or nightlife venue with intelligent operations management that streamlines compliance workflows, automates safety protocols, and coordinates team tasks to create unforgettable experiences that keep the energy flowing all night long.";

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30 px-6 py-24 md:px-10 md:py-32">
        <div className="relative z-10 mx-auto max-w-6xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              <span className="text-foreground">Master the Night</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                Amplify the Energy
              </span>
              <br />
              <span className="text-foreground">Build the Experience</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl text-lg text-muted-foreground md:text-xl"
          >
            {customDescription || description}
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="border-y border-border bg-muted/30 px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4">
                Our Mission
              </Badge>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Eliminate Operational Chaos
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center"
            >
              <p className="text-lg text-muted-foreground">
                {mission}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <Badge variant="secondary" className="mb-4">
              Our Core Values
            </Badge>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              What Drives Us Forward
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {coreValues.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="clerk-glass-card p-8"
              >
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      {showJoinTeam && (
        <section className="border-t border-border bg-muted/30 px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Badge variant="secondary" className="mb-4">
                  Join Our Team
                </Badge>
                <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
                  We're transforming {industry === "general" ? "hospitality" : industry} operations
                </h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  We're a multidisciplinary team of engineers, designers, and former operators who believe the future of hospitality runs on clarity, data, and people‑first design.
                </p>
                <button className="clerk-cta-primary inline-flex items-center gap-2">
                  View Open Positions
                  <CheckCircle className="size-4" />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative overflow-hidden rounded-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
                  alt="OpsFlow team"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default AboutSection;
