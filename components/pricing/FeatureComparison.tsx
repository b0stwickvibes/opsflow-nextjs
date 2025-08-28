import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Check, X } from 'lucide-react';

interface FeatureComparisonProps {
  features: Array<{
    name: string;
    starter: boolean | string;
    professional: boolean | string;
    enterprise: boolean | string;
  }>;
  experimentId?: string;
}

export default function FeatureComparison({ features }: FeatureComparisonProps) {
  const renderFeatureCell = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-primary mx-auto" aria-label="Included" />
      ) : (
        <X className="w-5 h-5 text-muted-foreground mx-auto" aria-label="Not included" />
      );
    }
    return <span className="font-medium">{value}</span>;
  };

  return (
    <section className="py-16" aria-labelledby="feature-comparison-heading">
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="feature-comparison-heading" className="text-3xl font-bold mb-4">
            Feature Comparison
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Compare features across all restaurant operations plans to find what's right for you.
          </p>
        </div>

        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/4">Feature</TableHead>
                <TableHead className="text-center">Restaurant Starter</TableHead>
                <TableHead className="text-center">Restaurant Pro</TableHead>
                <TableHead className="text-center">Restaurant Enterprise</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((feature, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{feature.name}</TableCell>
                  <TableCell className="text-center">{renderFeatureCell(feature.starter)}</TableCell>
                  <TableCell className="text-center">{renderFeatureCell(feature.professional)}</TableCell>
                  <TableCell className="text-center">{renderFeatureCell(feature.enterprise)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </section>
  );
}