'use client';

import { useState } from 'react';

export default function DesignLabPage() {
  const [copied, setCopied] = useState<string>('');

  const copyToClipboard = (className: string) => {
    navigator.clipboard.writeText(className);
    setCopied(className);
    setTimeout(() => setCopied(''), 2000);
  };

  const colorTokens = [
    { name: 'Primary 500', class: 'bg-primary-500 text-white', value: 'oklch(0.55 0.22 262)' },
    { name: 'Primary 600', class: 'bg-primary-600 text-white', value: 'oklch(0.50 0.24 262)' },
    { name: 'Secondary 500', class: 'bg-secondary-500 text-white', value: 'oklch(0.65 0.18 210)' },
    { name: 'Secondary 600', class: 'bg-secondary-600 text-white', value: 'oklch(0.58 0.16 210)' },
    { name: 'Success 500', class: 'bg-success-500 text-white', value: '#22c55e' },
    { name: 'Warning 500', class: 'bg-warning-500 text-gray-900', value: '#f59e0b' },
    { name: 'Error 500', class: 'bg-error-500 text-white', value: '#ef4444' },
    { name: 'Neutral 100', class: 'bg-neutral-100 text-gray-900', value: '#f5f5f5' },
  ];

  const buttonVariants = [
    { name: 'Primary', class: 'px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-all active:scale-95' },
    { name: 'Secondary', class: 'px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white rounded-lg transition-all active:scale-95' },
    { name: 'Outline', class: 'px-4 py-2 border-2 border-primary-500 text-primary-500 hover:bg-primary-50 rounded-lg transition-all active:scale-95' },
    { name: 'Ghost', class: 'px-4 py-2 text-primary-500 hover:bg-primary-50 rounded-lg transition-all active:scale-95' },
  ];

  const badgeVariants = [
    { name: 'Primary', class: 'px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium' },
    { name: 'Success', class: 'px-3 py-1 bg-success-100 text-success-700 rounded-full text-sm font-medium' },
    { name: 'Warning', class: 'px-3 py-1 bg-warning-100 text-warning-700 rounded-full text-sm font-medium' },
    { name: 'Error', class: 'px-3 py-1 bg-error-100 text-error-700 rounded-full text-sm font-medium' },
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold mb-2">OpsFlow Design Lab</h1>
          <p className="text-muted-foreground">Visual component development workspace - Click any token to copy</p>
        </div>

        {/* Color Tokens */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Color Tokens</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {colorTokens.map((token) => (
              <button
                key={token.class}
                onClick={() => copyToClipboard(token.class)}
                className={`${token.class} p-6 rounded-xl transition-all hover:scale-105 cursor-pointer relative shadow-sm hover:shadow-md`}
              >
                <div className="font-semibold">{token.name}</div>
                <div className="text-sm opacity-80 mt-1 font-mono text-xs">{token.value}</div>
                {copied === token.class && (
                  <div className="absolute inset-0 bg-black/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white font-bold">✓ Copied!</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Button Variants */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Button Variants</h2>
          <div className="flex flex-wrap gap-4">
            {buttonVariants.map((button) => (
              <div key={button.name} className="flex flex-col gap-2">
                <button
                  onClick={() => copyToClipboard(button.class)}
                  className={button.class}
                >
                  {button.name} Button
                </button>
                {copied === button.class && (
                  <span className="text-xs text-success-600 font-medium">✓ Copied to clipboard</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Badge Variants */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Badge Variants</h2>
          <div className="flex flex-wrap gap-4">
            {badgeVariants.map((badge) => (
              <button
                key={badge.name}
                onClick={() => copyToClipboard(badge.class)}
                className={`${badge.class} cursor-pointer hover:opacity-90 transition-opacity`}
              >
                {badge.name} Badge
                {copied === badge.class && ' ✓'}
              </button>
            ))}
          </div>
        </section>

        {/* Typography Scale */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Typography Scale</h2>
          <div className="space-y-4">
            {[
              { size: 'text-xs', label: 'Extra Small (12px)', sample: 'The quick brown fox jumps over the lazy dog' },
              { size: 'text-sm', label: 'Small (14px)', sample: 'The quick brown fox jumps over the lazy dog' },
              { size: 'text-base', label: 'Base (16px)', sample: 'The quick brown fox jumps over the lazy dog' },
              { size: 'text-lg', label: 'Large (18px)', sample: 'The quick brown fox jumps over the lazy dog' },
              { size: 'text-xl', label: 'Extra Large (20px)', sample: 'The quick brown fox jumps' },
              { size: 'text-2xl', label: '2X Large (24px)', sample: 'The quick brown fox jumps' },
              { size: 'text-3xl', label: '3X Large (30px)', sample: 'The quick brown fox' },
            ].map((type) => (
              <button
                key={type.size}
                onClick={() => copyToClipboard(type.size)}
                className={`${type.size} block w-full text-left p-3 hover:bg-neutral-50 rounded-lg transition-colors cursor-pointer`}
              >
                <span className="text-sm text-neutral-500 block">{type.label}</span>
                {type.sample}
                {copied === type.size && <span className="text-success-600 ml-2">✓</span>}
              </button>
            ))}
          </div>
        </section>

        {/* CTA Variants */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Premium CTAs</h2>
          <div className="flex flex-wrap gap-4">
            <button className="clerk-cta-primary px-6 py-3 rounded-lg" onClick={() => copyToClipboard('clerk-cta-primary')}>
              Clerk Primary CTA
              {copied === 'clerk-cta-primary' && ' ✓'}
            </button>
            <button className="clerk-cta-secondary px-6 py-3 rounded-lg" onClick={() => copyToClipboard('clerk-cta-secondary')}>
              Clerk Secondary CTA
              {copied === 'clerk-cta-secondary' && ' ✓'}
            </button>
            <button className="clerk-cta-ghost px-6 py-3 rounded-lg" onClick={() => copyToClipboard('clerk-cta-ghost')}>
              Clerk Ghost CTA
              {copied === 'clerk-cta-ghost' && ' ✓'}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
