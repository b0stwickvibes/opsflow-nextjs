# Component Usage Examples

Quick copy-paste examples for common restaurant operations UI patterns.

## 🎨 Typography Examples

### Hero Text with Gradient
```tsx
<h1 className="text-display-2xl">Restaurant Operations</h1>
```

### Section Headers
```tsx
<h2 className="text-display-md mb-6">Real-Time Monitoring</h2>
<h3 className="text-display-sm">HACCP Compliance</h3>
```

## 📊 Status Indicator Examples

### HACCP Status Cards
```tsx
<Badge className="status-indicator-success">Compliant</Badge>
<Badge className="status-indicator-warning">Review Required</Badge>
<Badge className="status-indicator-error">Violation</Badge>
<Badge className="status-indicator-neutral">Not Set</Badge>
```

### Temperature Status
```tsx
<div className="flex items-center gap-2">
  <Thermometer className="h-5 w-5 text-primary" />
  <span className="status-indicator-success px-2 py-1 rounded-full text-sm">
    38°F
  </span>
</div>
```

## 🃏 Professional Cards

### Feature Card
```tsx
<Card className="platform-card-professional p-6 rounded-lg">
  <CardHeader className="pb-3">
    <div className="flex items-center justify-between">
      <Shield className="h-8 w-8 text-primary" />
      <Badge className="status-indicator-success">Active</Badge>
    </div>
    <CardTitle className="text-lg">HACCP Monitoring</CardTitle>
  </CardHeader>
  <CardContent>
    <CardDescription>
      Real-time monitoring of critical control points with automated alerts.
    </CardDescription>
  </CardContent>
</Card>
```

### Statistics Card
```tsx
<Card className="platform-card-professional p-6">
  <div className="flex items-center justify-between">
    <div>
      <p className="text-sm text-muted-foreground">Temperature Alerts</p>
      <p className="text-2xl font-semibold">0</p>
    </div>
    <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
      <CheckCircle className="h-6 w-6 text-green-600" />
    </div>
  </div>
</Card>
```

## ⚡ Animation Examples

### Staggered Fade-in
```tsx
<div className="grid md:grid-cols-3 gap-6">
  {features.map((feature, index) => (
    <div
      key={index}
      className={`platform-card-professional p-6 animate-fade-in-up animation-delay-${(index + 1) * 100}`}
    >
      {/* Card content */}
    </div>
  ))}
</div>
```

### Scale-in Animation
```tsx
<Card className="platform-card-professional animate-scale-in">
  {/* Card content */}
</Card>
```

## 🎯 Layout Patterns

### Container with Professional Spacing
```tsx
<section className="py-16 lg:py-24">
  <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section content */}
  </div>
</section>
```

### Two-Column Layout
```tsx
<div className="grid md:grid-cols-2 gap-8 items-center">
  <div className="animate-slide-in-left">
    <h2 className="text-display-md mb-4">Professional Operations</h2>
    <p className="text-lg text-muted-foreground">
      Description content here
    </p>
  </div>
  <div className="animate-slide-in-right">
    {/* Visual content */}
  </div>
</div>
```

### Feature Grid
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {features.map((feature, index) => (
    <div key={index} className="platform-card-professional p-6 rounded-lg">
      <feature.icon className="h-12 w-12 text-primary mb-4" />
      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-muted-foreground">{feature.description}</p>
    </div>
  ))}
</div>
```

## 🔘 Button Patterns

### Primary CTA
```tsx
<Button size="lg" className="px-8 py-3">
  Start Free Trial
</Button>
```

### Secondary Action
```tsx
<Button variant="outline" size="lg" className="px-8 py-3">
  View Demo
</Button>
```

### Button Group
```tsx
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
  <Button size="lg" className="px-8 py-3">
    Primary Action
  </Button>
  <Button variant="outline" size="lg" className="px-8 py-3">
    Secondary Action
  </Button>
</div>
```

## 🎪 Background Patterns

### Grid Background
```tsx
<section className="py-16 bg-muted/30">
  <div className="bg-grid-pattern absolute inset-0 opacity-30"></div>
  <div className="relative">
    {/* Content */}
  </div>
</section>
```

### Gradient Background
```tsx
<section 
  className="py-16" 
  style={{background: 'var(--gradient-surface)'}}
>
  {/* Content */}
</section>
```

## 📱 Responsive Patterns

### Mobile-first Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Grid items */}
</div>
```

### Responsive Text
```tsx
<h1 className="text-display-2xl text-center">
  {/* Automatically responsive with clamp() */}
  Professional Operations
</h1>
```

### Responsive Spacing
```tsx
<section className="py-8 sm:py-12 lg:py-16">
  <div className="px-4 sm:px-6 lg:px-8">
    {/* Content */}
  </div>
</section>
```