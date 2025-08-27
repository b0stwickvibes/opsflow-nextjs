import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact Page Comparison | OpsFlow",
  description: "Compare different implementations of the OpsFlow contact page.",
};

export default function ContactComparisonPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Page Comparison</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="rounded-lg border p-6">
            <h2 className="text-2xl font-semibold mb-4">Version 1: Component-Based Implementation</h2>
            <p className="mb-4 text-muted-foreground">
              This implementation uses our custom-built components with Framer Motion animations, 
              comprehensive form validation, analytics tracking, and restaurant-specific content.
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Framer Motion animations for smooth interactions</li>
              <li>Zod schema validation for form data</li>
              <li>Analytics tracking throughout user journey</li>
              <li>Restaurant-specific fields and content</li>
              <li>Comprehensive error handling</li>
              <li>Accessibility improvements</li>
            </ul>
            <div className="flex justify-center">
              <Link href="/contact">
                <Button>View Version 1</Button>
              </Link>
            </div>
          </div>
          
          <div className="rounded-lg border p-6">
            <h2 className="text-2xl font-semibold mb-4">Version 2: Developer-Provided Implementation</h2>
            <p className="mb-4 text-muted-foreground">
              This implementation uses the developer-provided components with a focus on 
              safety, layout differentiation, and container-based structure following
              bulletproof styling principles.
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Container-based layout system</li>
              <li>Layout differentiation via registerComponentLayout</li>
              <li>Restaurant operations-focused content</li>
              <li>Clean, consistent styling</li>
              <li>Simple, functional forms</li>
              <li>Maintainable component structure</li>
            </ul>
            <div className="flex justify-center">
              <Link href="/contact-alt">
                <Button>View Version 2</Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Compare Key Differences</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-2 text-left">Feature</th>
                  <th className="border p-2 text-left">Version 1</th>
                  <th className="border p-2 text-left">Version 2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Animation</td>
                  <td className="border p-2">Framer Motion with complex interactions</td>
                  <td className="border p-2">CSS transitions, simpler approach</td>
                </tr>
                <tr>
                  <td className="border p-2">Form Validation</td>
                  <td className="border p-2">Zod schema with real-time validation</td>
                  <td className="border p-2">Basic form validation</td>
                </tr>
                <tr>
                  <td className="border p-2">Analytics</td>
                  <td className="border p-2">Comprehensive event tracking</td>
                  <td className="border p-2">Basic form submission tracking</td>
                </tr>
                <tr>
                  <td className="border p-2">Layout System</td>
                  <td className="border p-2">Component-based with intrinsic styling</td>
                  <td className="border p-2">Container-based with consistent wrappers</td>
                </tr>
                <tr>
                  <td className="border p-2">Hero Section</td>
                  <td className="border p-2">Background gradients with animated elements</td>
                  <td className="border p-2">Clean, image-focused with overlay stats</td>
                </tr>
                <tr>
                  <td className="border p-2">Visual Styling</td>
                  <td className="border p-2">More dynamic with interactive elements</td>
                  <td className="border p-2">Cleaner, more traditional SaaS approach</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8">
            <Link href="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
