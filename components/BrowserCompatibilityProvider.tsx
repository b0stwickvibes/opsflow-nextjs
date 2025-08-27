"use client";

import { useEffect } from 'react';
import { applyBrowserFixes } from '@/lib/utils/browser-detection';

export default function BrowserCompatibilityProvider({
  children
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Apply browser-specific fixes
    applyBrowserFixes();
  }, []);

  return <>{children}</>;
}