'use client';

import React, { ReactNode } from 'react';
import NextLink from 'next/link';
import { AlertCircle, CheckCircle, Info, AlertTriangle, Copy, Check } from 'lucide-react';
import { useState } from 'react';

// Callout Component
interface CalloutProps {
  type?: 'info' | 'warning' | 'error' | 'success';
  title?: string;
  children: ReactNode;
}

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const icons = {
    info: Info,
    warning: AlertTriangle,
    error: AlertCircle,
    success: CheckCircle,
  };

  const styles = {
    info: 'border-primary/30 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent text-primary-foreground',
    warning: 'border-yellow-500/30 bg-gradient-to-r from-yellow-500/10 via-yellow-500/5 to-transparent text-yellow-800 dark:text-yellow-200',
    error: 'border-destructive/30 bg-gradient-to-r from-destructive/10 via-destructive/5 to-transparent text-destructive-foreground',
    success: 'border-green-500/30 bg-gradient-to-r from-green-500/10 via-green-500/5 to-transparent text-green-800 dark:text-green-200',
  };

  const iconColors = {
    info: 'text-primary',
    warning: 'text-yellow-600 dark:text-yellow-400',
    error: 'text-destructive',
    success: 'text-green-600 dark:text-green-400',
  };

  const Icon = icons[type];

  return (
    <div className={`relative overflow-hidden rounded-xl border p-4 backdrop-blur-sm ${styles[type]}`}>
      <div className="flex gap-3">
        <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${iconColors[type]}`} />
        <div className="flex-1">
          {title && (
            <p className="mb-2 font-semibold text-foreground">{title}</p>
          )}
          <div className="text-sm leading-relaxed [&>:last-child]:mb-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// Card Component
interface CardProps {
  title?: string;
  href?: string;
  children: ReactNode;
}

export function Card({ title, href, children }: CardProps) {
  const content = (
    <div className="group relative overflow-hidden rounded-xl border border-border/60 bg-gradient-to-br from-card via-card to-card/80 p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        {title && (
          <h3 className="mb-3 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
        )}
        <div className="text-sm leading-relaxed text-muted-foreground [&>:last-child]:mb-0">
          {children}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <NextLink href={href} className="block">
        {content}
      </NextLink>
    );
  }

  return content;
}

// Code Block Component
interface CodeBlockProps {
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
  children: string;
}

export function CodeBlock({ language = 'text', title, showLineNumbers, children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative overflow-hidden rounded-xl border border-border/60 bg-gradient-to-br from-muted/50 to-muted/30 backdrop-blur-sm">
      {/* Header */}
      {(title || language) && (
        <div className="flex items-center justify-between border-b border-border/40 px-4 py-3 bg-gradient-to-r from-muted/80 to-muted/60">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/60" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <div className="h-3 w-3 rounded-full bg-green-500/60" />
            </div>
            {title && (
              <span className="text-sm font-medium text-foreground">{title}</span>
            )}
            {language && (
              <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                {language}
              </span>
            )}
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-background/50 hover:text-foreground"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                Copy
              </>
            )}
          </button>
        </div>
      )}

      {/* Code content */}
      <div className="relative">
        <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
          <code className="text-foreground">{children}</code>
        </pre>
        
        {/* Copy button for blocks without header */}
        {!title && !language && (
          <button
            onClick={handleCopy}
            className="absolute right-3 top-3 flex items-center gap-1 rounded-md bg-background/80 px-2 py-1 text-xs text-muted-foreground opacity-0 transition-all duration-200 hover:text-foreground group-hover:opacity-100"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                Copy
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

// Heading Component
interface HeadingProps {
  id?: string;
  level: number;
  children: ReactNode;
}

export function Heading({ id, level, children }: HeadingProps) {
  const Component = React.createElement;
  
  const styles = {
    1: 'text-4xl font-bold tracking-tight text-foreground lg:text-5xl mb-6',
    2: 'text-3xl font-bold tracking-tight text-foreground mt-12 mb-6 border-b border-border/40 pb-3',
    3: 'text-2xl font-semibold tracking-tight text-foreground mt-8 mb-4',
    4: 'text-xl font-semibold text-foreground mt-6 mb-3',
    5: 'text-lg font-semibold text-foreground mt-6 mb-3',
    6: 'text-base font-semibold text-foreground mt-6 mb-3',
  };

  return Component(
    `h${level}`,
    {
      id,
      className: styles[level as keyof typeof styles] || styles[6],
    },
    id ? React.createElement(
      NextLink,
      {
        href: `#${id}`,
        className: "group inline-flex items-center gap-2 hover:text-primary transition-colors"
      },
      children,
      React.createElement(
        'span',
        {
          className: "opacity-0 transition-opacity group-hover:opacity-100 text-primary"
        },
        '#'
      )
    ) : children
  );
}

// Enhanced Link Component
interface CustomLinkProps {
  href: string;
  target?: string;
  children: ReactNode;
}

export function Link({ href, target, children }: CustomLinkProps) {
  const isExternal = href.startsWith('http') || target === '_blank';
  
  return (
    <NextLink
      href={href}
      target={target}
      className={`
        font-medium text-primary underline underline-offset-4 
        transition-colors hover:text-primary/80 
        ${isExternal ? 'after:content-["↗"] after:ml-1 after:text-xs' : ''}
      `}
    >
      {children}
    </NextLink>
  );
}

// Table Components
interface TableProps {
  children: ReactNode;
}

export function Table({ children }: TableProps) {
  return (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse rounded-lg border border-border/60 bg-card/50 backdrop-blur-sm">
        {children}
      </table>
    </div>
  );
}

interface TableRowProps {
  children: ReactNode;
}

export function TableRow({ children }: TableRowProps) {
  return (
    <tr className="border-b border-border/40 transition-colors hover:bg-muted/30">
      {children}
    </tr>
  );
}

interface TableHeaderProps {
  children: ReactNode;
}

export function TableHeader({ children }: TableHeaderProps) {
  return (
    <th className="border-r border-border/40 bg-muted/60 px-4 py-3 text-left text-sm font-semibold text-foreground">
      {children}
    </th>
  );
}

interface TableCellProps {
  children: ReactNode;
}

export function TableCell({ children }: TableCellProps) {
  return (
    <td className="border-r border-border/40 px-4 py-3 text-sm text-muted-foreground">
      {children}
    </td>
  );
}

// List Components
interface ListProps {
  children: ReactNode;
  ordered?: boolean;
}

export function List({ children, ordered = false }: ListProps) {
  const Component = ordered ? 'ol' : 'ul';
  
  return (
    <Component className={`my-4 space-y-2 ${ordered ? 'list-decimal' : 'list-disc'} pl-6`}>
      {children}
    </Component>
  );
}

interface ListItemProps {
  children: ReactNode;
}

export function ListItem({ children }: ListItemProps) {
  return (
    <li className="text-muted-foreground leading-relaxed [&>:last-child]:mb-0">
      {children}
    </li>
  );
}
