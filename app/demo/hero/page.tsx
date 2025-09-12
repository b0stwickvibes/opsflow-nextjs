"use client"

import { Hero187 } from "@/domain/marketing"

export default function HeroDemo() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with ShadcnBlocks Component */}
      <Hero187 />
      
      {/* Additional Content */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">About This Hero Component</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground mb-4">
              This hero section was built using the <code>Hero187</code> component from ShadcnBlocks. 
              It features:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Responsive design with a two-column layout</li>
              <li>Interactive carousel with autoplay functionality</li>
              <li>Custom slide indicators with navigation</li>
              <li>Icon-based feature highlights</li>
              <li>Smooth animations and transitions</li>
              <li>Built with Embla Carousel and Framer Motion</li>
            </ul>
            
            <div className="mt-8 p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">Installation Command:</h3>
              <code className="text-sm bg-background px-2 py-1 rounded">
                npx shadcn@latest add @shadcnblocks/hero187
              </code>
            </div>
            
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">Usage in Your Project:</h3>
              <pre className="text-sm bg-background p-2 rounded overflow-x-auto">
{`import { Hero187 } from "@/components/hero187"

export default function HomePage() {
  return (
    <div>
      <Hero187 />
      {/* Your other content */}
    </div>
  )
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
