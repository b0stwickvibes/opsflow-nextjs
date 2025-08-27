'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  const { theme } = useTheme();
  
  return (
    <Link href="/" className={className}>
      <div className="flex items-center gap-2 font-bold text-xl">
        <div className="bg-primary text-primary-foreground rounded-md p-1">
          <span className="text-lg">OF</span>
        </div>
        <span>OpsFlow</span>
      </div>
    </Link>
  );
}
