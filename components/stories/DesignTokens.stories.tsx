import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

// Design Token Display Component
const DesignTokenShowcase = () => {
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
    { name: 'Success 500', class: 'bg-success-500 text-white', value: 'oklch(0.65 0.15 145)' },
    { name: 'Warning 500', class: 'bg-warning-500 text-gray-900', value: 'oklch(0.75 0.15 85)' },
    { name: 'Error 500', class: 'bg-error-500 text-white', value: 'oklch(0.55 0.22 25)' },
    { name: 'Neutral 100', class: 'bg-neutral-100 text-gray-900', value: 'oklch(0.98 0.005 255)' },
    { name: 'Neutral 900', class: 'bg-neutral-900 text-white', value: 'oklch(0.20 0.015 255)' },
  ];

  const buttonVariants = [
    { name: 'Primary Button', class: 'px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-all active:scale-95' },
    { name: 'Secondary Button', class: 'px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white rounded-lg transition-all active:scale-95' },
    { name: 'Outline Button', class: 'px-4 py-2 border-2 border-primary-500 text-primary-500 hover:bg-primary-50 rounded-lg transition-all active:scale-95' },
    { name: 'Ghost Button', class: 'px-4 py-2 text-primary-500 hover:bg-primary-50 rounded-lg transition-all active:scale-95' },
  ];

  const badgeVariants = [
    { name: 'Primary Badge', class: 'px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium' },
    { name: 'Success Badge', class: 'px-3 py-1 bg-success-100 text-success-700 rounded-full text-sm font-medium' },
    { name: 'Warning Badge', class: 'px-3 py-1 bg-warning-100 text-warning-700 rounded-full text-sm font-medium' },
    { name: 'Error Badge', class: 'px-3 py-1 bg-error-100 text-error-700 rounded-full text-sm font-medium' },
  ];

  return (
    <div className="p-8 space-y-12 max-w-7xl mx-auto">
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
                {button.name}
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
              {badge.name}
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
            { size: 'text-xs', label: 'Extra Small', sample: 'The quick brown fox jumps' },
            { size: 'text-sm', label: 'Small', sample: 'The quick brown fox jumps' },
            { size: 'text-base', label: 'Base', sample: 'The quick brown fox jumps' },
            { size: 'text-lg', label: 'Large', sample: 'The quick brown fox jumps' },
            { size: 'text-xl', label: 'Extra Large', sample: 'The quick brown fox' },
            { size: 'text-2xl', label: '2X Large', sample: 'The quick brown fox' },
            { size: 'text-3xl', label: '3X Large', sample: 'The quick brown' },
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
    </div>
  );
};

const meta: Meta<typeof DesignTokenShowcase> = {
  title: 'Design System/Tokens',
  component: DesignTokenShowcase,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof DesignTokenShowcase>;

export const Interactive: Story = {};
