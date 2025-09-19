import { RestaurantHero } from '@/components/domain/marketing';

export default function RestaurantHeroTestPage() {
  const handleNavigate = (page: string) => {
    console.log(`Navigating to: ${page}`);
    // In a real app, you would handle navigation here
  };

  return (
    <div className="min-h-screen">
      <RestaurantHero onNavigate={handleNavigate} />
    </div>
  );
}

export const metadata = {
  title: 'Premium Restaurant Hero Test - OpsFlow',
  description: 'Testing the enhanced restaurant hero component with premium Stripe/Clerk styling',
};
