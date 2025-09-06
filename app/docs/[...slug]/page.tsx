import React from 'react';
import Markdoc from '@markdoc/markdoc';
import { readFile } from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import markdocConfig from '../../../markdoc.config';
import { DocsLayout } from '../../../components/docs/DocsLayout';
import { 
  Callout, 
  Card, 
  CodeBlock, 
  Heading, 
  Link 
} from '../../../components/docs/MarkdocComponents';

// Markdoc components mapping
const components = {
  Callout,
  Card,
  CodeBlock,
  Heading,
  Link,
};

interface PageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

export default async function DocsPage({ params }: PageProps) {
  const { slug = [] } = await params;
  
  // Handle root docs page
  if (slug.length === 0) {
    return <DocsLayout><div>Welcome to OpsFlow Docs</div></DocsLayout>;
  }

  // Construct file path
  const filePath = path.join(process.cwd(), 'docs', ...slug) + '.md';

  try {
    // Read the markdown file
    const source = await readFile(filePath, 'utf-8');
    
    // Parse with Markdoc
    const ast = Markdoc.parse(source);
    const content = Markdoc.transform(ast, markdocConfig);
    
    // Extract frontmatter
    const frontmatter = ast.attributes.frontmatter ? 
      Markdoc.parse(ast.attributes.frontmatter).attributes : {};

    return (
      <DocsLayout 
        title={frontmatter?.title}
        description={frontmatter?.description}
        slug={slug}
      >
        {Markdoc.renderers.react(content, React, { components })}
      </DocsLayout>
    );
  } catch (error) {
    // File not found or other error
    notFound();
  }
}

// Generate static params for all docs pages
export async function generateStaticParams() {
  const navigation = await import('../../../docs/navigation.json');
  const paths: { slug: string[] }[] = [];

  // Add root docs page
  paths.push({ slug: [] });

  // Extract all page paths from navigation
  navigation.default.sections.forEach((section: any) => {
    section.pages.forEach((page: any) => {
      const slug = page.path.replace('/docs/', '').split('/');
      paths.push({ slug });
    });
  });

  return paths;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { slug = [] } = await params;
  
  if (slug.length === 0) {
    return {
      title: 'OpsFlow Documentation',
      description: 'Comprehensive documentation for the OpsFlow restaurant operations platform.',
    };
  }

  const filePath = path.join(process.cwd(), 'docs', ...slug) + '.md';

  try {
    const source = await readFile(filePath, 'utf-8');
    const ast = Markdoc.parse(source);
    const frontmatter = ast.attributes.frontmatter ? 
      Markdoc.parse(ast.attributes.frontmatter).attributes : {};

    return {
      title: frontmatter?.title ? `${frontmatter.title} - OpsFlow Docs` : 'OpsFlow Docs',
      description: frontmatter?.description || 'OpsFlow documentation',
    };
  } catch (error) {
    return {
      title: 'Page Not Found - OpsFlow Docs',
      description: 'The requested documentation page could not be found.',
    };
  }
}
