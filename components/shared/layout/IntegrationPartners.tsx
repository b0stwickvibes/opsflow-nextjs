'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { registerComponentLayout } from '@/lib/style-system/layout-differentiation';

interface Partner {
  name: string;
  logo: string; // public path
}

const PARTNERS: Partner[] = [
  { name: 'Toast', logo: '/logos/toast.svg' },
  { name: 'Square', logo: '/logos/square.svg' },
  { name: 'MarginEdge', logo: '/logos/marginedge.svg' },
  { name: '7shifts', logo: '/logos/7shifts.svg' },
  { name: 'QuickBooks', logo: '/logos/quickbooks.svg' },
  { name: 'DoorDash', logo: '/logos/doordash.svg' },
];

export function IntegrationPartners() {
  useEffect(() => {
    registerComponentLayout('IntegrationPartners', 'product' as any);
  }, []);

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground">Works with your restaurant stack</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {PARTNERS.map((p) => (
            <div key={p.name} className="flex justify-center opacity-80 hover:opacity-100 transition-opacity">
              <Image src={p.logo} alt={`${p.name} logo`} width={120} height={40} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IntegrationPartners;

