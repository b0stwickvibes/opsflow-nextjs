/**
 * OpsFlow Style System - Usage Guide & Implementation
 * Complete bulletproof styling system to maintain design consistency
 */

## Quick Setup

1. **Initialize the style system in your root layout:**

```typescript
// app/layout.tsx
import { opsFlowStyleSystem } from '@/lib/style-system';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    // Initialize style protection system
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
        {children}
      </body>
    </html>
  );
}
```

2. **Protected component usage:**

```typescript
// Any component file
import { useOpsFlowStyles, withOpsFlowStyles } from '@/lib/style-system';

// Method 1: Using the hook
export function MyComponent() {
  const ref = useRef<HTMLDivElement>(null);
  useOpsFlowStyles(ref, 'card', ['rounded-2xl', 'shadow-sm', 'border']);
  
  return <div ref={ref} className="p-6">Content</div>;
}

// Method 2: Using the HOC
const ProtectedCard = withOpsFlowStyles(
  ({ children, className, ...props }) => (
    <div className={className} {...props}>{children}</div>
  ),
  'card',
  ['rounded-2xl', 'shadow-sm', 'border', 'p-6']
);
```

## Key Features

### 1. **Automatic Style Protection**
- Prevents style drift across components
- Monitors DOM changes and enforces critical classes
- Auto-fixes missing or removed styles

### 2. **Component Auditing**
- Validates all components against design standards
- Detects forbidden class usage
- Generates detailed violation reports

### 3. **CSS Variable Protection**
- Locks critical design tokens with `!important`
- Prevents override of color scheme and spacing
- Maintains consistency across theme changes

### 4. **Development Tools**
- Visual debugging outlines for components
- Console warnings for style violations
- Automatic periodic audits during development

## Best Practices

### Component Naming Convention
- All protected components get `ops-` prefix
- Use descriptive names: `ops-navbar`, `ops-dropdown`, `ops-button`

### Class Priority
1. **Protected classes** (enforced by system)
2. **Utility classes** (Tailwind)
3. **Custom classes** (component-specific)

### Critical Components
These components MUST use the style protection system:

- **Navbar**: `ops-navbar` with sticky positioning
- **Dropdowns**: `ops-dropdown` with z-index protection
- **Buttons**: `ops-button` with consistent animations
- **Cards**: `ops-card` with standard border/shadow

## Monitoring & Debugging

### Console Commands (Development)
```javascript
// Check current style health
opsFlowStyleSystem.audit()

// Get design tokens
opsFlowStyleSystem.getDesignTokens()

// Manual audit with auto-fix
opsFlowStyleSystem.audit(true)
```

### Visual Debug Mode
Enable in development to see:
- Green outlines on protected components
- Red outlines on components with violations
- Component type labels

## Migration Strategy

### Step 1: Protect Critical Components
Start with navigation, buttons, and layout components.

### Step 2: Add Protection to New Components
Use `useOpsFlowStyles` or `withOpsFlowStyles` for all new components.

### Step 3: Audit Existing Components
Run audits to identify components needing protection.

### Step 4: Gradual Migration
Update existing components one by one using the HOC pattern.

## Style Conflict Resolution

### Common Issues & Solutions

1. **Missing Critical Classes**
   - System auto-adds missing classes
   - Check console for restoration warnings

2. **Forbidden Class Usage**
   - System removes conflicting classes
   - Update component to use approved alternatives

3. **CSS Variable Overrides**
   - Protected variables use `!important`
   - Use design token functions instead of custom values

4. **Z-Index Conflicts**
   - System enforces z-index hierarchy
   - Use designated z-index values from design tokens

## Performance Considerations

- Style monitoring has minimal overhead
- Audits run only in development by default
- Production builds exclude debugging code
- CSS protection styles are optimized and cached

## Integration with Existing Tools

### Tailwind CSS
- Works seamlessly with Tailwind utilities
- Protects critical Tailwind classes from removal
- Extends Tailwind with custom design tokens

### shadcn/ui
- Compatible with all shadcn components
- Adds protection layer on top of base components
- Maintains shadcn theming while adding consistency

### Next.js
- Server-side compatible (protection runs client-side)
- Works with App Router and Pages Router
- Optimized for production builds

This system ensures your OpsFlow design stays consistent and professional across all components and pages, giving you the confidence to scale without style drift.
