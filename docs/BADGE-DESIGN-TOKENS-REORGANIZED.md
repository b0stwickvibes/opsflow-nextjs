# Badge Design Tokens - Reorganized System

## Current Issues Identified
1. **Shape Inconsistency**: Different badge components have varying border-radius (some `rounded-md`, others `rounded-full`)
2. **Color Gaps**: Missing color tokens for purple, blue variants that match your icon system
3. **Naming Confusion**: Mix of `dashboard-badge-*` and general badge variants
4. **Size Variants**: No clear size system for badges

## Proposed Token Organization

### 1. Base Badge Structure
```css
/* Base badge classes with consistent sizing and shape */
.badge-base-pill       /* Full rounded (9999px) - for status indicators */
.badge-base-rounded    /* Moderately rounded (6px) - for categories */
.badge-base-sharp      /* Minimal rounded (4px) - for technical labels */

/* Size variants */
.badge-size-xs         /* 10px padding, 10px text */
.badge-size-sm         /* 12px padding, 12px text */
.badge-size-md         /* 14px padding, 14px text (default) */
.badge-size-lg         /* 16px padding, 16px text */
```

### 2. Color System (Semantic Naming)
Match your current icon color system exactly:

#### Status Colors
```css
.badge-status-active    /* Cyan/teal - matches dashboard-metric-blue */
.badge-status-success   /* Green - matches success states */
.badge-status-warning   /* Orange/amber - matches warning states */
.badge-status-error     /* Red - matches error states */
.badge-status-neutral   /* Gray - matches inactive states */
```

#### Location Type Colors (For Your Current Use Case)
```css
.badge-location-flagship   /* Cyan - matches dashboard-metric-blue */
.badge-location-franchise  /* Purple - matches your purple nodes */
.badge-location-corporate  /* Blue - matches your blue nodes */
```

#### Feature Colors
```css
.badge-feature-beta     /* Purple gradient - beta features */
.badge-feature-new      /* Green gradient - new features */
.badge-feature-premium  /* Brand gradient - premium features */
.badge-feature-live     /* Pulse green - live indicators */
```

### 3. Style Variants
```css
/* Opacity/intensity variants */
.badge-style-solid     /* Full opacity background */
.badge-style-subtle    /* 10% opacity background (current dashboard-badge-*) */
.badge-style-outline   /* Transparent background, colored border */
.badge-style-ghost     /* Minimal styling, colored text only */
```

### 4. Complete Token Examples

#### Current Problem Example:
```jsx
// These all look different despite similar purposes:
<Badge className="dashboard-badge-active">Active</Badge>
<Badge className="bg-purple-100 text-purple-800 border-purple-200">Franchise</Badge>
<Badge className="bg-blue-100 text-blue-800 border-blue-200">Corporate</Badge>
```

#### Proposed Solution:
```jsx
// Consistent shape and styling:
<Badge className="badge-base-pill badge-size-sm badge-status-active">Active</Badge>
<Badge className="badge-base-pill badge-size-sm badge-location-franchise">Franchise</Badge>
<Badge className="badge-base-pill badge-size-sm badge-location-corporate">Corporate</Badge>

// Or with style variants:
<Badge className="badge-base-rounded badge-size-md badge-location-flagship badge-style-subtle">Flagship Store</Badge>
```

### 5. Quick Reference Matrix

| Use Case | Shape | Size | Color | Style |
|----------|-------|------|--------|-------|
| Status indicators | `pill` | `sm` | `status-*` | `subtle` |
| Location types | `pill` | `sm` | `location-*` | `subtle` |
| Feature badges | `rounded` | `md` | `feature-*` | `solid` |
| Category labels | `sharp` | `xs` | `neutral` | `outline` |

### 6. Implementation Classes

```css
/* Base Shapes */
.badge-base-pill { border-radius: 9999px; }
.badge-base-rounded { border-radius: 6px; }
.badge-base-sharp { border-radius: 4px; }

/* Sizes */
.badge-size-xs { padding: 2px 6px; font-size: 10px; }
.badge-size-sm { padding: 4px 8px; font-size: 12px; }
.badge-size-md { padding: 6px 12px; font-size: 14px; }
.badge-size-lg { padding: 8px 16px; font-size: 16px; }

/* Location Colors (Your Current Need) */
.badge-location-flagship {
  background: rgba(6, 182, 212, 0.1);
  border: 1px solid rgba(6, 182, 212, 0.2);
  color: rgb(14, 165, 233);
}

.badge-location-franchise {
  background: rgba(168, 85, 247, 0.1);
  border: 1px solid rgba(168, 85, 247, 0.2);
  color: rgb(147, 51, 234);
}

.badge-location-corporate {
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  color: rgb(37, 99, 235);
}
```

### 7. Migration Plan

#### Step 1: Add new tokens to globals.css
Add the new badge classes alongside existing ones.

#### Step 2: Update current usage
Replace inconsistent styling with new token combinations.

#### Step 3: Clean up old tokens
Remove unused or redundant badge classes.

## Benefits of This System

1. **Predictable Combinations**: Easy to remember pattern of `base + size + color + style`
2. **Consistent Shapes**: No more random border-radius variations
3. **Scalable**: Easy to add new colors or variants
4. **Semantic**: Clear meaning from class names
5. **Composable**: Mix and match for different needs

## Your Immediate Fix

For your current location badge issue, you can either:

**Option A: Quick fix with new tokens**
```tsx
const getLocationTypeColor = (type: string) => {
  switch (type) {
    case "flagship": return "badge-base-pill badge-size-sm badge-location-flagship";
    case "franchise": return "badge-base-pill badge-size-sm badge-location-franchise";
    case "corporate": return "badge-base-pill badge-size-sm badge-location-corporate";
    default: return "badge-base-pill badge-size-sm badge-status-neutral";
  }
};
```

**Option B: Simple consistency fix**
```tsx
const getLocationTypeColor = (type: string) => {
  switch (type) {
    case "flagship": return "dashboard-badge-active"; // Keep existing
    case "franchise": return "dashboard-badge-franchise"; // Add this new token
    case "corporate": return "dashboard-badge-corporate"; // Add this new token
    default: return "bg-muted text-foreground border-border";
  }
};
```

Which approach would you prefer to implement?

---

## Update: New Marketing Card System

To address enterprise card overuse in promotional content, new marketing card tokens have been added:

### Marketing Card Classes
```css
.marketing-card               /* Primary-50 styling for promotional content */
.marketing-card-enhanced      /* Highlighted marketing features */
.marketing-icon-primary       /* Marketing content icon wrapper */
.marketing-icon-enhanced      /* Enhanced marketing feature icons */
```

**Usage Guidelines:**
- Use `marketing-card` for competitor analysis, pricing comparisons, feature promotions
- Use `marketing-card-enhanced` for highlighted features (max 1-2 per section per marketing playbook)
- Automatically includes primary color theming with subtle gradients
- Built-in hover effects with primary color transitions
- Compatible with your OKLCH token system
