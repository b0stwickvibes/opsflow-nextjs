'use client';

import Image from 'next/image';

import { cn } from '@/lib/utils';

type ValueItem = {
  iconSrc: string; // path from /public (e.g. /icons/shield.svg)
  title: string;
  description: string;
};

export type ZippayAboutOneProps = {
  tagline?: string;
  title?: string;
  description?: string; // optional small blurb under the title
  items?: ValueItem[];
  className?: string;
};

const DEFAULT_VALUES: ValueItem[] = [
  {
    iconSrc: '/images/about/values/cv1.svg',
    title: 'Trust & Security',
    description:
      'We safeguard customer data and earn trust with rigorous controls and transparent practices.',
  },
  {
    iconSrc: '/images/about/values/cv2.svg',
    title: 'Speed with Quality',
    description:
      'We ship quickly without compromising reliability or user experience.',
  },
  {
    iconSrc: '/images/about/values/cv3.svg',
    title: 'Customer-First',
    description:
      'We obsess over real problems and measure success by customer outcomes.',
  },
  {
    iconSrc: '/images/about/values/cv4.svg',
    title: 'Simplicity',
    description:
      'We reduce complexity so teams can focus on the work that matters.',
  },
  {
    iconSrc: '/images/about/values/cv5.svg',
    title: 'Ownership',
    description:
      'We take initiative, own the details, and follow through to the final mile.',
  },
  {
    iconSrc: '/images/about/values/cv6.svg',
    title: 'Collaboration',
    description:
      'We win together—sharing context, feedback, and respect across functions.',
  },
];

export default function ZippayAboutOne({
  tagline = 'Values',
  title = 'Core Values',
  description,
  items = DEFAULT_VALUES,
  className,
}: ZippayCoreValuesProps) {
  return (
    <section className={cn('px-6 py-10 lg:py-24', className)}>
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl text-left">
          <span className="text-sm font-medium text-primary">
            {tagline}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mt-3 tracking-tight lg:text-[52px]">
            {title}
          </h2>
          {!!description && (
            <p className="text-base sm:text-lg mt-3 text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-background rounded-2xl border border-border p-5 sm:p-6"
            >
              <div className="flex flex-col items-start gap-4">
                <Image
                  src={item.iconSrc}
                  alt=""
                  width={44}
                  height={44}
                  className="h-11 w-11"
                />

                <h3 className="text-lg font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="text-base mt-1 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
