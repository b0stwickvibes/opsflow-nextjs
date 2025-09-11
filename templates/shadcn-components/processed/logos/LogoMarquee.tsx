"use client";

import Image from "next/image";
import { ArrowRight, Star, TrendingUp, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";
import type { IndustryType, RoleType } from "@/types/restaurant-pages";
import { cn } from "@/lib/utils";

interface RestaurantAchievement {
  id: string;
  title: string;
  description: string;
  logo: string;
  category: 'certification' | 'award' | 'partnership' | 'compliance';
  year?: string;
  organization?: string;
}

interface LogoMarqueeProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  achievements?: RestaurantAchievement[];
  industry?: IndustryType | 'general';
  role?: RoleType | 'general';
  className?: string;
}

const defaultRestaurantAchievements: RestaurantAchievement[] = [
  {
    id: "haccp-certified",
    title: "HACCP Compliance Partner",
    description: "Certified food safety management system integration",
    logo: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100&h=100&fit=crop&crop=center",
    category: 'certification',
    year: '2024',
    organization: 'FDA'
  },
  {
    id: "restaurant-tech",
    title: "Restaurant Technology Excellence",
    description: "Leading innovation in restaurant operations technology",
    logo: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=100&h=100&fit=crop&crop=center",
    category: 'award',
    year: '2024',
    organization: 'National Restaurant Association'
  },
  {
    id: "pos-integration",
    title: "POS Integration Leader",
    description: "Premier partnership with major POS systems",
    logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center",
    category: 'partnership',
    organization: 'Toast, Square, Clover'
  },
  {
    id: "food-safety",
    title: "Food Safety Innovation Award",
    description: "Recognized for advancing restaurant food safety through technology",
    logo: "https://images.unsplash.com/photo-1556909049-e4b2fa2b9777?w=100&h=100&fit=crop&crop=center",
    category: 'award',
    year: '2023',
    organization: 'ServSafe'
  },
  {
    id: "sustainability",
    title: "Sustainability Partner",
    description: "Helping restaurants reduce waste and improve efficiency",
    logo: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=100&h=100&fit=crop&crop=center",
    category: 'certification',
    year: '2024',
    organization: 'Green Restaurant Association'
  },
  {
    id: "workforce-mgmt",
    title: "Workforce Management Excellence",
    description: "Innovative staff scheduling and performance tracking",
    logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop&crop=center",
    category: 'award',
    year: '2024',
    organization: 'HR Tech Awards'
  }
];

const companyStats = [
  {
    icon: <Users className="w-5 h-5 text-orange-600" />,
    value: "2,000+",
    label: "Restaurant Partners"
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-green-600" />,
    value: "35%",
    label: "Average Waste Reduction"
  },
  {
    icon: <Star className="w-5 h-5 text-yellow-600" />,
    value: "4.9/5",
    label: "Customer Rating"
  },
  {
    icon: <Award className="w-5 h-5 text-purple-600" />,
    value: "12+",
    label: "Industry Awards"
  }
];

export function LogoMarquee({
  title = "Restaurant Industry Recognition",
  subtitle = "Our certifications and partnerships speak for themselves.",
  description = "OpsFlow is trusted by industry leaders and recognized by major organizations for advancing restaurant operations technology and food safety standards.",
  ctaText = "Learn About Our Certifications",
  achievements = defaultRestaurantAchievements,
  industry = 'restaurants',
  role = 'general',
  className
}: LogoMarqueeProps) {
  const { trackInteraction } = useRestaurantAnalytics();

  const handleAchievementClick = (achievement: RestaurantAchievement) => {
    trackInteraction('achievement_click', {
      achievement: achievement.title,
      category: achievement.category,
      industry,
      role
    });
  };

  const handleCtaClick = () => {
    trackInteraction('certification_cta_click', { 
      section: 'logo_marquee',
      industry, 
      role 
    });
  };

  const getCategoryIcon = (category: RestaurantAchievement['category']) => {
    switch (category) {
      case 'certification':
        return <Award className="w-4 h-4 text-green-600" />;
      case 'award':
        return <Star className="w-4 h-4 text-yellow-600" />;
      case 'partnership':
        return <Users className="w-4 h-4 text-blue-600" />;
      case 'compliance':
        return <TrendingUp className="w-4 h-4 text-purple-600" />;
      default:
        return <Award className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getCategoryColor = (category: RestaurantAchievement['category']) => {
    const colors = {
      certification: 'bg-green-50 border-green-200 dark:bg-green-950/30 dark:border-green-800',
      award: 'bg-yellow-50 border-yellow-200 dark:bg-yellow-950/30 dark:border-yellow-800',
      partnership: 'bg-blue-50 border-blue-200 dark:bg-blue-950/30 dark:border-blue-800',
      compliance: 'bg-purple-50 border-purple-200 dark:bg-purple-950/30 dark:border-purple-800'
    };
    return colors[category];
  };

  return (
    <section className={cn("py-32 bg-brand-surface", className)}>
      <div className="container">
        <div className="grid overflow-hidden rounded-2xl border border-border dark:border-gray-700 bg-card/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-xl md:grid-cols-2">
          {/* Left Content */}
          <div className="my-auto px-8 py-12 sm:px-12 sm:py-16 lg:p-20">
            <div className="w-full md:max-w-lg">
              <div className="mb-4 inline-block rounded-full px-4 py-2 text-xs uppercase font-semibold tracking-wider bg-primary/10 text-primary">
                INDUSTRY RECOGNITION
              </div>
              
              <h2 className="text-display-2xl mb-6 text-3xl font-bold lg: text-foreground dark:text-gray-100">
                {title}
              </h2>
              
              <p className="enterprise-body mb-4  font-semibold text-foreground dark:text-gray-300">
                {subtitle}
              </p>
              
              <p className="mb-8 text-muted-foreground leading-relaxed">
                {description}
              </p>

              {/* Company Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {companyStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-foreground dark:text-gray-100">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <Button 
                className="w-full md:w-fit bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8"
                onClick={handleCtaClick}
              >
                <ArrowRight className="mr-2 w-5 h-5" />
                {ctaText}
              </Button>
            </div>
          </div>

          {/* Right Grid - Achievements */}
          <div className="grid grid-cols-2 border-t border-border dark:border-gray-700 md:border-t-0 md:border-l">
            {achievements.map((achievement, index) => (
              <Card
                key={achievement.id}
                className={cn(
                  "group cursor-pointer border-r border-b border-border dark:border-gray-700 rounded-none hover:shadow-lg transition-all duration-300",
                  index % 2 === 1 && "border-r-0",
                  index >= achievements.length - 2 && "border-b-0",
                  getCategoryColor(achievement.category)
                )}
                onClick={() => handleAchievementClick(achievement)}
              >
                <CardContent className="flex flex-col items-center justify-center text-center p-6 h-full min-h-[180px]">
                  <div className="relative mb-4">
                    <Image
                      src={achievement.logo}
                      alt={achievement.title}
                      className="w-16 h-16 object-cover rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300"
                     width={1200} height={800} />
                    <div className="absolute -top-1 -right-1">
                      {getCategoryIcon(achievement.category)}
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-sm mb-2 text-foreground dark:text-gray-100 leading-tight">
                    {achievement.title}
                  </h4>
                  
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                    {achievement.description}
                  </p>
                  
                  <div className="mt-auto space-y-1">
                    {achievement.organization && (
                      <p className="text-xs font-medium text-muted-foreground dark:text-muted-foreground">
                        {achievement.organization}
                      </p>
                    )}
                    {achievement.year && (
                      <p className="text-xs text-muted-foreground">
                        {achievement.year}
                      </p>
                    )}
                  </div>
                  
                  <div className={cn(
                    "px-2 py-1 rounded-full text-xs font-medium mt-3 capitalize",
                    achievement.category === 'certification' && "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300",
                    achievement.category === 'award' && "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300",
                    achievement.category === 'partnership' && "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300",
                    achievement.category === 'compliance' && "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300"
                  )}>
                    {achievement.category}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom Recognition Section */}
        <div className="mt-16 text-center">
          <h3 className="enterprise-body  font-semibold text-foreground dark:text-gray-100 mb-6">
            Recognized by Leading Restaurant Industry Organizations
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Award className="w-5 h-5" />
              <span className="text-sm font-medium">National Restaurant Association</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Star className="w-5 h-5" />
              <span className="text-sm font-medium">ServSafe</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm font-medium">Restaurant Technology Network</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-5 h-5" />
              <span className="text-sm font-medium">Green Restaurant Association</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-6 max-w-2xl mx-auto">
            These certifications and partnerships demonstrate our commitment to excellence in restaurant operations, 
            food safety, and sustainable business practices.
          </p>
        </div>
      </div>
    </section>
  );
};