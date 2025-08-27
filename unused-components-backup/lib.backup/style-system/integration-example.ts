/**
 * Integration Example - How to apply bulletproof styling to your components
 */

// 1. First, initialize the system in your root layout:

// app/layout.tsx
import { opsFlowStyleSystem } from '@/lib/style-system';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    opsFlowStyleSystem.initialize({
      enableDebug: process.env.NODE_ENV === 'development',
      autoFix: true,
      auditOnMount: true
    });

    return () => opsFlowStyleSystem.destroy();
  }, []);

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-background text-foreground">
          {children}
        </div>
      </body>
    </html>
  );
}

// 2. Update your Navbar component to use protection:

// components/site/Navbar.tsx (add to existing code)
import { useOpsFlowStyles } from '@/lib/style-system';

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  
  // Apply bulletproof styling protection
  useOpsFlowStyles(navRef, 'navbar', [
    'sticky', 'top-0', 'z-50', 'w-full', 
    'border-b', 'border-border/40', 
    'bg-background/95', 'backdrop-blur-md'
  ]);

  // Rest of your component...
  return (
    <header 
      ref={navRef}
      className="ops-navbar sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md"
    >
      {/* Your existing navbar content */}
    </header>
  );
}

// 3. Protect other critical components:

// Example: Protected Button Component
import { withOpsFlowStyles } from '@/lib/style-system';

const ProtectedButton = withOpsFlowStyles(
  Button,
  'button',
  ['transition-colors', 'duration-200', 'font-medium']
);

// Example: Protected Card Component
const ProtectedCard = withOpsFlowStyles(
  ({ children, className, ...props }) => (
    <div className={`rounded-2xl border shadow-sm p-6 ${className || ''}`} {...props}>
      {children}
    </div>
  ),
  'card',
  ['rounded-2xl', 'border', 'shadow-sm']
);

// 4. Create protected versions of shadcn components:

// components/ui/protected/index.ts
export const OpsButton = withOpsFlowStyles(Button, 'button', ['transition-colors']);
export const OpsCard = withOpsFlowStyles(Card, 'card', ['rounded-2xl', 'shadow-sm']);
export const OpsDialog = withOpsFlowStyles(Dialog, 'dialog', ['z-50']);

// 5. Use protected components throughout your app:

// Any page or component
export function HomePage() {
  return (
    <div className="container mx-auto py-12">
      <ProtectedCard>
        <h1 className="text-4xl font-bold">OpsFlow AI</h1>
        <p className="text-muted-foreground mt-4">
          Restaurant operations platform with bulletproof styling
        </p>
        <ProtectedButton className="mt-6">
          Get Started
        </ProtectedButton>
      </ProtectedCard>
    </div>
  );
}
