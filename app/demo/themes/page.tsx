"use client"

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { industryThemes, roleThemes, type Industry, type Role } from "@/lib/themes";
import { ChefHat, Wine, Coffee, Building2, Users, UserCheck, Utensils, Headphones } from "lucide-react";
import { IndustryHero } from "@/components/domain/marketing/IndustryHero";

const industryIcons = {
  restaurant: ChefHat,
  bar: Wine,
  coffee: Coffee,
  hotel: Building2
};

const roleIcons = {
  owner: Users,
  manager: UserCheck, 
  'kitchen-staff': Utensils,
  'front-of-house': Headphones
};

export default function ThemeDemo() {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>('restaurant');
  const [selectedRole, setSelectedRole] = useState<Role>('owner');

  const IndustryIcon = industryIcons[selectedIndustry];
  const RoleIcon = roleIcons[selectedRole];
  
  return (
    <div className="min-h-screen bg-background">
      {/* Live Hero Demo */}
      <IndustryHero industry={selectedIndustry} />
      
      <div className="container py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Industry & Role Theme System</h1>
            <p className="text-muted-foreground text-lg">
              Separate theming for Industries (what type of business) and Roles (who you are)
            </p>
          </div>

          {/* Theme Selectors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Industry Selection */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Industry Pages</h2>
              <p className="text-muted-foreground mb-6">
                Different business types get tailored content and colors
              </p>
              
              <div className="space-y-4">
                <Select value={selectedIndustry} onValueChange={(value: Industry) => setSelectedIndustry(value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(industryThemes).map(([key, theme]) => (
                      <SelectItem key={key} value={key}>
                        {theme.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <p className="text-sm text-muted-foreground">
                  See the hero above change as you select different industries. Each uses light backgrounds with accent colors for borders, buttons, and icons.
                </p>
              </div>
            </Card>

            {/* Role Selection */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Role Pages</h2>
              <p className="text-muted-foreground mb-6">
                Different roles get different CTAs and focus areas
              </p>
              
              <div className="space-y-4">
                <Select value={selectedRole} onValueChange={(value: Role) => setSelectedRole(value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(roleThemes).map(([key, theme]) => (
                      <SelectItem key={key} value={key}>
                        {theme.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Role Preview */}
                <div className="p-6 rounded-lg bg-muted">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="enterprise-icon-secondary">
                      <RoleIcon className="h-5 w-5" />
                    </div>
                    <span className="font-semibold">
                      {roleThemes[selectedRole].name}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {roleThemes[selectedRole].focus}
                  </p>
                  
                  <p className="text-sm mb-4">
                    {roleThemes[selectedRole].description}
                  </p>
                  
                  <Button className={roleThemes[selectedRole].ctaStyle}>
                    {roleThemes[selectedRole].ctaText}
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Page Structure Examples */}
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-center">Page Structure Examples</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Industry Page Example */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Industry Page: /restaurant</h3>
                <div className="space-y-3 text-sm">
                  <div>• Blue theme (harmonizes with global colors)</div>
                  <div>• Restaurant-specific terminology</div>
                  <div>• HACCP compliance focus</div>
                  <div>• Features: Kitchen Operations, Food Safety, Staff Management</div>
                  <div>• Multiple role CTAs (Owner, Manager, Staff options)</div>
                </div>
              </Card>

              {/* Role Page Example */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Role Page: /owners</h3>
                <div className="space-y-3 text-sm">
                  <div>• Cross-industry appeal</div>
                  <div>• Strategic business focus</div>
                  <div>• Premium CTAs and pricing</div>
                  <div>• ROI and growth messaging</div>
                  <div>• Industry selector for customization</div>
                </div>
              </Card>
            </div>
          </div>

          {/* Color Harmony Note */}
          <Card className="p-6 border-blue-200 bg-blue-50 dark:bg-blue-950/20">
            <h3 className="text-lg font-semibold mb-3">Color Harmony with Global Theme</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="font-medium text-blue-600">Restaurants: Blue</div>
                <div className="text-muted-foreground">Matches primary theme</div>
              </div>
              <div>
                <div className="font-medium text-purple-600">Bars: Purple</div>
                <div className="text-muted-foreground">Professional complement</div>
              </div>
              <div>
                <div className="font-medium text-orange-600">Coffee: Orange</div>
                <div className="text-muted-foreground">Warm accent</div>
              </div>
              <div>
                <div className="font-medium text-red-600">Hotels: Red</div>
                <div className="text-muted-foreground">Sophisticated contrast</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
