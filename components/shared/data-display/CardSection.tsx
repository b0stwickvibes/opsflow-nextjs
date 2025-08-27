"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Heart, Users, Target } from "lucide-react"

export function CardSection() {
  const cards = [
    {
      icon: Shield,
      title: "Food Safety First",
      content: "Every feature is designed with HACCP compliance as the foundation."
    },
    {
      icon: Users,
      title: "Customer Success",
      content: "Our success is measured by helping restaurants streamline operations."
    },
    {
      icon: Heart,
      title: "Passion for Hospitality",
      content: "We're industry veterans who understand the challenges of food service."
    },
    {
      icon: Target,
      title: "Continuous Innovation",
      content: "We're constantly improving our platform based on customer feedback."
    }
  ]

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
      {cards.map((card, index) => {
        const Icon = card.icon
        return (
          <Card key={index}>
            <CardHeader>
              <Icon className="h-8 w-8 text-primary mb-2" />
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {card.content}
              </p>
            </CardContent>
          </Card>
        )
      })}
    </section>
  )
}
