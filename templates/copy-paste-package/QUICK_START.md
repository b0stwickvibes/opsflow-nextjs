# Quick Start Guide

Get up and running with OpsFlow AI components in minutes.

## ⚡ 30-Second Setup

### 1. Install Dependencies
```bash
npm install next@15.4 react react-dom tailwindcss@next
npm install class-variance-authority clsx tailwind-merge
npm install lucide-react next-themes @radix-ui/react-slot @radix-ui/react-dropdown-menu
```

### 2. Copy Essential Files
```
your-project/
├── app/
│   ├── globals.css          # Copy from /styles/globals.css
│   └── layout.tsx           # Copy from /app/layout.tsx
├── components/
│   ├── ui/                  # Copy UI components
│   ├── theme-provider.tsx   # Copy theme system
│   └── theme-toggle.tsx     # Copy theme toggle
└── lib/
    └── utils.ts             # Copy utility functions
```

### 3. Configure Tailwind
Create `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {},
  plugins: [],
}
```

### 4. Create Your First Page
```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-display-2xl text-center mb-8">
          Restaurant Operations
        </h1>
        
        <Card className="platform-card-professional p-6 max-w-md mx-auto">
          <CardHeader>
            <CardTitle>HACCP Status</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">All systems operational</p>
            <Button className="mt-4 w-full">View Dashboard</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
```

## 🎨 Key Design Elements

### Gradient Text
```tsx
<h1 className="text-display-2xl">Your Title Here</h1>
```
- Automatically applies professional gradient
- Responsive sizing with clamp()
- Theme-aware colors

### Professional Cards
```tsx
<div className="platform-card-professional p-6 rounded-lg">
  <h3 className="text-xl font-semibold mb-2">Feature Title</h3>
  <p className="text-muted-foreground">Description</p>
</div>
```
- Subtle shadows and borders
- Hover effects included
- Theme-aware styling

### Status Indicators
```tsx
<span className="status-indicator-success px-3 py-1 rounded-full text-sm">
  HACCP Compliant
</span>
```
- Restaurant-specific colors
- Success, warning, error states
- Accessibility-friendly contrast

## 🔧 Customization

### Colors
All colors are CSS variables in `globals.css`:
```css
:root {
  --primary-700: oklch(0.5512 0.1177 218.91);
  --haccp-compliant: oklch(65% 0.18 150);
  /* Modify as needed */
}
```

### Typography
Display classes are responsive by default:
```css
.text-display-2xl {
  font-size: clamp(3rem, 8vw, 4.5rem);
  /* Gradient applied automatically */
}
```

### Animations
Professional animations included:
```tsx
<div className="animate-fade-in-up animation-delay-200">
  {/* Content animates in */}
</div>
```

## 📋 Component Checklist

- ✅ **Button** - Primary, outline, ghost variants
- ✅ **Card** - Professional styling with shadows
- ✅ **Badge** - Status indicators for operations
- ✅ **Theme System** - Dark/light mode switching
- ✅ **Typography** - Responsive gradient text
- ✅ **Animations** - Professional fade/slide effects
- ✅ **Layout** - Container and grid patterns

## 🚀 Next Steps

1. **Add More Components**: Copy additional UI components as needed
2. **Customize Colors**: Modify CSS variables for your brand
3. **Add Content**: Use the example patterns from `COMPONENT_EXAMPLES.md`
4. **Deploy**: Ready for production deployment

## 💡 Pro Tips

- Use `bg-background` everywhere (no colored backgrounds)
- Always include theme toggle for user preference
- Test in both light and dark modes
- Use proper semantic HTML for accessibility
- Leverage the animation delay classes for staggered effects

Ready to build professional restaurant operations interfaces! 🍽️