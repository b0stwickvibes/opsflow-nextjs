import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center tracking-tight rounded-md border px-3 py-1 font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-all duration-200 overflow-hidden',
  {
    variants: {
      variant: {
        default:
          'bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 border border-primary-200 dark:border-primary-700 [a&]:hover:bg-primary/90',
        secondary:
          'bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-200 border border-secondary-200 dark:border-secondary-700 [a&]:hover:bg-secondary/90',
        destructive:
          'surface-subtle-destructive [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40',
        outline:
          'bg-muted dark:bg-muted text-muted-foreground border border-border [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
        // Subtle variants with lighter solid colors (30% less intense than default)
        'subtle-primary':
          'bg-primary-50 dark:bg-primary-950 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-800 transition-all duration-200',
        'subtle-secondary':
          'bg-secondary-50 dark:bg-secondary-950 text-secondary-700 dark:text-secondary-300 border border-secondary-100 dark:border-secondary-800 transition-all duration-200',
        'subtle-destructive':
          'surface-subtle-destructive transition-all duration-200',
        'subtle-muted':
          'surface-subtle-muted transition-all duration-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
