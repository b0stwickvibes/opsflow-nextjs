# OpsFlow Storybook - Visual Component Development

## Quick Start

```bash
# Start Storybook
npm run storybook

# Storybook will open at http://localhost:6006
```

## What's Included

### 1. **Design Tokens Story** (`components/stories/DesignTokens.stories.tsx`)
- Interactive showcase of all OKLCH color tokens
- Click any token to copy CSS class to clipboard
- Button variants with visual feedback
- Badge variants
- Typography scale
- **Perfect for:** Quick reference while building components

### 2. **Button Component Story** (`components/stories/Button.stories.tsx`)
- All button variants (primary, secondary, outline, ghost)
- All sizes (sm, md, lg)
- Interactive controls to test combinations
- **Perfect for:** Testing button styles before implementing

## How to Use Storybook

### Visual Development Workflow

1. **Run Storybook**: `npm run storybook`
2. **Browse Components**: Left sidebar shows all stories
3. **Interactive Controls**: Bottom panel lets you change props in real-time
4. **Copy Classes**: Click any design token to copy to clipboard
5. **Test Variants**: See all combinations without page refreshes

### Creating New Stories

Create a `.stories.tsx` file in `components/stories/`:

```typescript
import type { Meta, StoryObj } from '@storybook/react';

const YourComponent = ({ prop1, prop2 }) => {
  return <div>Your component here</div>;
};

const meta: Meta<typeof YourComponent> = {
  title: 'Components/YourComponent',
  component: YourComponent,
};

export default meta;
type Story = StoryObj<typeof YourComponent>;

export const Default: Story = {
  args: {
    prop1: 'value',
    prop2: 'value',
  },
};
```

## Benefits Over Page Development

### Before (Page Development):
1. Edit component in page
2. Save file
3. Switch to browser
4. Refresh page
5. Navigate to component
6. Check result
7. Repeat

### Now (Storybook):
1. Edit component in story
2. See instant live update
3. Test all variants with controls
4. Copy classes directly
5. Done

## Keyboard Shortcuts

- `Ctrl/Cmd + K` - Search stories
- `Ctrl/Cmd + Shift + F` - Toggle fullscreen
- `A` - Toggle addons panel
- `S` - Toggle sidebar
- `D` - Toggle dark mode

## Pro Tips

1. **Use the Controls Panel**: Change props without editing code
2. **Test Edge Cases**: Use the Actions tab to see events
3. **Accessibility**: Check the a11y tab for accessibility issues
4. **Copy Everything**: All design tokens have click-to-copy
5. **Multiple Stories**: Create stories for every variant/state

## Next Steps

1. Add stories for your existing components
2. Use Storybook for all new component development
3. Share Storybook URL with team for design reviews
4. Build components in isolation, then integrate into pages

**No more back-and-forth page development!** 🚀
