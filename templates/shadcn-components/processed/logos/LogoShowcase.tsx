"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { Star, Quote, TrendingUp, Users, ChefHat } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";
import type { IndustryType, RoleType } from "@/types/restaurant-pages";

interface RestaurantBrand {
  id: string;
  name: string;
  logo: string;
  industry: 'fine-dining' | 'fast-casual' | 'bars' | 'coffee' | 'catering' | 'food-truck';
  size: 'single' | 'small-chain' | 'large-chain' | 'enterprise';
  className?: string;
}

interface RestaurantTestimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  logo: string;
  industry: 'fine-dining' | 'fast-casual' | 'bars' | 'coffee' | 'catering' | 'food-truck';
  metrics?: {
    improvement: string;
    timeframe: string;
    category: string;
  };
  rating: number;
}

interface LogoShowcaseProps {
  title?: string;
  subtitle?: string;
  brands?: RestaurantBrand[];
  testimonials?: RestaurantTestimonial[];
  industry?: IndustryType | 'general';
  role?: RoleType | 'general';
  className?: string;
}

const defaultRestaurantBrands: RestaurantBrand[] = [
  {
    id: "brand-1",
    name: "Artisan Kitchen Group",
    logo: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&h=80&fit=crop&crop=center",
    industry: 'fine-dining',
    size: 'small-chain',
    className: "h-8 w-auto",
  },
  {
    id: "brand-2",
    name: "Urban Coffee Collective",
    logo: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=200&h=80&fit=crop&crop=center",
    industry: 'coffee',
    size: 'large-chain',
    className: "h-8 w-auto",
  },
  {
    id: "brand-3",
    name: "Coastal Grill Network",
    logo: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=200&h=80&fit=crop&crop=center",
    industry: 'fast-casual',
    size: 'enterprise',
    className: "h-8 w-auto",
  },
  {
    id: "brand-4",
    name: "Downtown Bar & Lounge",
    logo: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=200&h=80&fit=crop&crop=center",
    industry: 'bars',
    size: 'single',
    className: "h-7 w-auto",
  },
  {
    id: "brand-5",
    name: "Prime Catering Solutions",
    logo: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=200&h=80&fit=crop&crop=center",
    industry: 'catering',
    size: 'small-chain',
    className: "h-7 w-auto",
  },
  {
    id: "brand-6",
    name: "Street Food Express",
    logo: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=200&h=80&fit=crop&crop=center",
    industry: 'food-truck',
    size: 'small-chain',
    className: "h-6 w-auto",
  },
  {
    id: "brand-7",
    name: "Maple Leaf Bistro Chain",
    logo: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=200&h=80&fit=crop&crop=center",
    industry: 'fast-casual',
    size: 'large-chain',
    className: "h-8 w-auto",
  },
  {
    id: "brand-8",
    name: "Skyline Restaurant Group",
    logo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200&h=80&fit=crop&crop=center",
    industry: 'fine-dining',
    size: 'enterprise',
    className: "h-8 w-auto",
  },
];

const defaultRestaurantTestimonials: RestaurantTestimonial[] = [
  {
    quote: "OpsFlow revolutionized our kitchen operations. We reduced food waste by 40% and improved our HACCP compliance from 85% to 98%. The real-time task management has been a game changer for our team.",
    author: "Sarah Chen",
    role: "Executive Chef",
    company: "Artisan Kitchen Group",
    logo: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&h=80&fit=crop&crop=center",
    industry: 'fine-dining',
    metrics: {
      improvement: "40% waste reduction",
      timeframe: "6 months",
      category: "Food Safety & Efficiency"
    },
    rating: 5,
  },
  {
    quote: "Staff scheduling used to take me 4 hours every week. Now with OpsFlow's integration with our POS system, it's automated and takes 15 minutes. Our labor costs are down 20% while customer satisfaction is up.",
    author: "Marcus Rodriguez",
    role: "Operations Manager",
    company: "Coastal Grill Network",
    logo: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=200&h=80&fit=crop&crop=center",
    industry: 'fast-casual',
    metrics: {
      improvement: "20% labor cost reduction",
      timeframe: "3 months",
      category: "Operations Efficiency"
    },
    rating: 5,
  },
  {
    quote: "The analytics dashboard gives us unprecedented visibility into our multi-location operations. We can spot trends, manage inventory better, and ensure consistent quality across all our restaurants.",
    author: "Jennifer Park",
    role: "Regional Director",
    company: "Urban Coffee Collective",
    logo: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=200&h=80&fit=crop&crop=center",
    industry: 'coffee',
    metrics: {
      improvement: "35% inventory optimization",
      timeframe: "4 months",
      category: "Multi-Location Management"
    },
    rating: 5,
  },
];

const industryIcons = {
  'fine-dining': <ChefHat className="w-4 h-4 text-purple-600" />,
  'fast-casual': <TrendingUp className="w-4 h-4 text-orange-600" />,
  'bars': <Users className="w-4 h-4 text-amber-600" />,
  'coffee': <Star className="w-4 h-4 text-yellow-600" />,
  'catering': <TrendingUp className="w-4 h-4 text-green-600" />,
  'food-truck': <Users className="w-4 h-4 text-blue-600" />
};

export function LogoShowcase({
  title = "Trusted by Leading Restaurant Operators",
  subtitle = "The world's most successful restaurants use OpsFlow to streamline operations and ensure compliance",
  brands = defaultRestaurantBrands,
  testimonials = defaultRestaurantTestimonials,
  industry = 'restaurants',
  role = 'general',
  className
}: LogoShowcaseProps) {
  const { trackInteraction } = useRestaurantAnalytics();

  const handleBrandClick = (brand: RestaurantBrand) => {
    trackInteraction('brand_logo_click', {
      brand: brand.name,
      industry: brand.industry,
      size: brand.size,
      role
    });
  };

  const handleTestimonialClick = (testimonial: RestaurantTestimonial) => {
    trackInteraction('testimonial_click', {
      company: testimonial.company,
      industry: testimonial.industry,
      author: testimonial.author,
      role
    });
  };

  const getIndustryColor = (brandIndustry: RestaurantBrand['industry']) => {
    const colors = {
      'fine-dining': 'bg-purple-50 dark:bg-purple-950/30',
      'fast-casual': 'bg-orange-50 dark:bg-orange-950/30',
      'bars': 'bg-amber-50 dark:bg-amber-950/30',
      'coffee': 'bg-yellow-50 dark:bg-yellow-950/30',
      'catering': 'bg-green-50 dark:bg-green-950/30',
      'food-truck': 'bg-blue-50 dark:bg-blue-950/30'
    };
    return colors[brandIndustry] || 'bg-gray-50 dark:bg-gray-950/30';
  };

  return (
    <section className={cn("py-32 bg-gradient-to-br from-orange-50/30 to-amber-50/30 dark:from-orange-950/10 dark:to-amber-950/10", className)}>
      <div className="container flex flex-col items-center text-center">
        <div className="bg-orange-100 dark:bg-orange-900/30 mb-6 inline-block rounded-full px-4 py-2 text-xs uppercase font-semibold text-orange-700 dark:text-orange-300 tracking-wider">
          RESTAURANT SUCCESS STORIES
        </div>
        <h1 className="text-display-md text-gray-900 dark:text-gray-100 mb-4 font-bold max-w-4xl">
          {title}
        </h1>
        <p className="text-lg text-muted-foreground mb-16 max-w-3xl">
          {subtitle}
        </p>
      </div>

      {/* Brand Logos Carousel */}
      <div className="relative mx-auto flex items-center justify-center pt-8 lg:max-w-6xl">
        <Carousel
          opts={{ loop: true }}
          plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
        >
          <CarouselContent className="ml-0">
            {brands.map((brand) => (
              <CarouselItem
                key={brand.id}
                className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
              >
                <div 
                  className="group flex shrink-0 items-center justify-center lg:mx-10 cursor-pointer py-8"
                  onClick={() => handleBrandClick(brand)}
                >
                  <div className={cn("p-6 rounded-2xl transition-all duration-300 hover:shadow-lg", getIndustryColor(brand.industry))}>
                    <div className="flex items-center gap-3">
                      {industryIcons[brand.industry]}
                      <div className="text-left">
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className={cn(brand.className, "object-cover grayscale group-hover:grayscale-0 transition-all duration-300")}
                        />
                        <p className="text-xs text-muted-foreground mt-2 capitalize">
                          {brand.industry.replace('-', ' ')} • {brand.size.replace('-', ' ')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        {/* Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-orange-50/80 to-transparent dark:from-orange-950/20 dark:to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-orange-50/80 to-transparent dark:from-orange-950/20 dark:to-transparent pointer-events-none"></div>
      </div>

      <Separator className="my-20 mx-auto max-w-6xl opacity-30" />

      {/* Testimonials Section */}
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            What Restaurant Leaders Are Saying
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real results from real restaurant operators across different segments
          </p>
        </div>

        <Carousel opts={{ loop: true }} className="mx-auto w-full max-w-7xl">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card 
                  className={cn(
                    "group cursor-pointer h-full border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm",
                    index === 0 && "lg:border-l-2 lg:border-l-orange-200 dark:lg:border-l-orange-800"
                  )}
                  onClick={() => handleTestimonialClick(testimonial)}
                >
                  <CardContent className="p-8 h-full flex flex-col">
                    {/* Quote */}
                    <div className="flex-1 mb-6">
                      <Quote className="w-8 h-8 text-orange-600 mb-4 opacity-60" />
                      <blockquote className="text-lg text-muted-foreground leading-relaxed line-clamp-6">
                        {testimonial.quote}
                      </blockquote>
                    </div>

                    {/* Metrics */}
                    {testimonial.metrics && (
                      <div className="mb-6 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-600 mb-1">
                            {testimonial.metrics.improvement}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            in {testimonial.metrics.timeframe} • {testimonial.metrics.category}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Rating */}
                    <div className="flex justify-center mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Author Info */}
                    <div className="mt-auto text-center">
                      <div className="flex items-center justify-center gap-4 mb-3">
                        <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                          <img
                            src={testimonial.logo}
                            alt={testimonial.company}
                            className="w-8 h-8 object-contain rounded-full"
                          />
                        </div>
                        <div className="text-left">
                          <p className="font-bold text-gray-900 dark:text-gray-100 text-lg">
                            {testimonial.author}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-center gap-2">
                        {industryIcons[testimonial.industry]}
                        <p className="font-medium text-orange-600 text-sm">
                          {testimonial.company}
                        </p>
                      </div>
                      
                      <p className="text-xs text-muted-foreground mt-1 capitalize">
                        {testimonial.industry.replace('-', ' ')} industry
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-orange-600">98%</div>
            <div className="text-sm text-muted-foreground">Customer Retention</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-orange-600">35%</div>
            <div className="text-sm text-muted-foreground">Avg. Waste Reduction</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-orange-600">4.9★</div>
            <div className="text-sm text-muted-foreground">Customer Rating</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-orange-600">2,000+</div>
            <div className="text-sm text-muted-foreground">Restaurant Locations</div>
          </div>
        </div>
      </div>
    </section>
  );
};