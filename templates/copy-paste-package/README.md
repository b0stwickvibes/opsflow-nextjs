# OpsFlow AI - Copy & Paste Components

A complete styling system and component library for restaurant operations management applications. Built with Next.js 15.4, Tailwind V4, and ShadCN UI.

## 🚀 Quick Setup

### 1. Copy Files to Your Next.js Project

```
your-nextjs-project/
├── app/
│   ├── globals.css          # Copy from /styles/globals.css
│   └── layout.tsx           # Update with theme provider
├── components/
│   ├── ui/                  # Copy essential ShadCN components
│   ├── theme-provider.tsx   # Copy theme system
│   └── theme-toggle.tsx     # Copy theme toggle
└── lib/
    └── utils.ts             # Copy utility functions
```

### 2. Install Dependencies

```bash
npm install next@15.4 react react-dom
npm install tailwindcss@next @tailwindcss/typography
npm install class-variance-authority clsx tailwind-merge
npm install lucide-react
npm install next-themes
```

### 3. Configure Tailwind

Create `tailwind.config.js`:

```js
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

### 4. Update Your Layout

Replace your `app/layout.tsx` with the provided version that includes the theme provider.

## 🎨 Design System Features

- **Professional Color Palette**: Custom OKLCH colors optimized for restaurant operations
- **Temperature Status Colors**: Specialized colors for HACCP compliance monitoring
- **Gradient Text Effects**: Beautiful gradient typography using `.text-display-2xl`
- **Professional Animations**: Subtle, enterprise-grade animations
- **Dark Mode Support**: Complete theme switching with proper contrast
- **Restaurant-Specific Styles**: HACCP compliance indicators, temperature monitoring

## 🧩 Components Included

- **Theme System**: Complete dark/light mode switching
- **Essential ShadCN UI**: Button, Card, Badge, and more
- **Restaurant Hero**: Professional hero section with gradient text
- **Feature Cards**: Animated cards for showcasing capabilities
- **Status Indicators**: HACCP and temperature monitoring components

## 📖 Usage Examples

### Basic Page Structure
```tsx
export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-display-2xl">Your Restaurant Operations</h1>
        {/* Your content */}
      </div>
    </div>
  );
}
```

### Professional Cards
```tsx
<div className="platform-card-professional p-6 rounded-lg">
  <h3 className="text-display-md">Feature Title</h3>
  <p className="text-muted-foreground">Description</p>
</div>
```

### Status Indicators
```tsx
<div className="status-indicator-success px-3 py-1 rounded-full text-sm">
  HACCP Compliant
</div>
```

## 🎯 Key Design Principles

1. **No Colored Backgrounds**: All components use `bg-background` for consistency
2. **Gradient Text**: Use `.text-display-2xl` for hero headings with gradient effect
3. **Professional Spacing**: Consistent padding with `px-4 sm:px-6 lg:px-8`
4. **Enterprise Feel**: Subtle shadows and professional color palette
5. **Responsive Design**: Mobile-first with progressive enhancement

## 🔧 Customization

All colors and spacing can be customized through CSS variables in `globals.css`. The system uses OKLCH color space for better color harmony and accessibility.

## 📱 Responsive Breakpoints

- Mobile: Base styles
- Tablet: `sm:` (640px+)
- Desktop: `lg:` (1024px+)
- Large: `xl:` (1280px+)
- Extra Large: `2xl:` (1536px+)

---

Built for modern restaurant operations management platforms.