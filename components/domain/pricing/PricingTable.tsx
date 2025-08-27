"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export interface PricingPlan {
  title: string
  description: string
  price: string
  period?: string
  features: string[]
  buttonText: string
  buttonLink: string
  buttonVariant?: "default" | "outline"
  highlighted?: boolean
}

interface PricingTableProps {
  plans: PricingPlan[]
}

export function PricingTable({ plans }: PricingTableProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
      {plans.map((plan, index) => (
        <Card key={index} className={plan.highlighted ? "border-primary" : ""}>
          <CardHeader>
            <CardTitle>{plan.title}</CardTitle>
            <CardDescription>{plan.description}</CardDescription>
            <div className="mt-4 text-3xl font-bold">
              {plan.price}
              {plan.period && (
                <span className="text-base font-normal text-muted-foreground">
                  {plan.period}
                </span>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button 
              variant={plan.buttonVariant || "default"} 
              className="w-full"
              asChild
            >
              <Link href={plan.buttonLink}>
                {plan.buttonText}
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
