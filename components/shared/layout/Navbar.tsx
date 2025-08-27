"use client";

import Link from "next/link";
import * as React from "react";
import type { LucideIcon } from "lucide-react";
import {
  ChefHat,
  ClipboardList,
  BarChart3,
  Shield,
  Coffee,
  Wine,
  Hotel,
  Crown,
  UserCheck,
  ChefHat as Kitchen,
  UserPlus,
  HelpCircle,
  FileText,
  Phone,
  BookOpen,
  Award,
  Download,
  Menu,
  X,
  Play,
  Puzzle,
  Settings,
  Building2,
  Mail,
  Briefcase,
  ChevronDown,
} from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

interface ProductFeature {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

const PRODUCT_FEATURES: ProductFeature[] = [
  {
    title: "Features",
    description: "Comprehensive restaurant management capabilities",
    href: "/product/features",
    icon: Settings,
  },
  {
    title: "Demo",
    description: "See OpsFlow AI in action with live demonstrations",
    href: "/product/demo",
    icon: Play,
  },
  {
    title: "Integrations",
    description: "Connect with your existing restaurant tech stack",
    href: "/product/integrations",
    icon: Puzzle,
  },
  {
    title: "HACCP Compliance",
    description: "Automated food safety monitoring and compliance",
    href: "/product/haccp",
    icon: Shield,
  },
  {
    title: "Audit Tools",
    description: "Streamlined inspection and compliance reporting",
    href: "/product/audit",
    icon: ClipboardList,
  },
  {
    title: "Reporting",
    description: "Advanced analytics and operational insights",
    href: "/product/reporting",
    icon: BarChart3,
  },
];

interface SolutionItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

const BY_INDUSTRY: SolutionItem[] = [
  { title: "Restaurants", href: "/solutions/restaurants", icon: ChefHat },
  { title: "Bars & Nightlife", href: "/solutions/bars", icon: Wine },
  { title: "Coffee Shops", href: "/solutions/coffee", icon: Coffee },
  { title: "Hotels", href: "/solutions/hotels", icon: Hotel },
];

const BY_ROLE: SolutionItem[] = [
  { title: "Restaurant Owners", href: "/solutions/owners", icon: Crown },
  { title: "Operations Managers", href: "/solutions/managers", icon: UserCheck },
  { title: "Kitchen Staff", href: "/solutions/kitchen-staff", icon: Kitchen },
  { title: "Front of House", href: "/solutions/front-house", icon: UserPlus },
];

interface Resource {
  title: string;
  href: string;
  icon: LucideIcon;
}

const SUPPORT_RESOURCES: Resource[] = [
  { title: "Help Center", href: "/resources/help", icon: HelpCircle },
  { title: "Documentation", href: "/resources/docs", icon: FileText },
  { title: "Contact Support", href: "/resources/contact", icon: Phone },
];

const LEARNING_RESOURCES: Resource[] = [
  { title: "Blog & Articles", href: "/resources/blog", icon: BookOpen },
  { title: "Case Studies", href: "/resources/case-studies", icon: Award },
  { title: "Templates", href: "/resources/templates", icon: Download },
];

const COMPANY_LINKS: Resource[] = [
  { title: "About Us", href: "/company/about", icon: Building2 },
  { title: "Contact", href: "/company/contact", icon: Mail },
  { title: "Careers", href: "/company/careers", icon: Briefcase },
];

// Stripe-style navbar context for seamless dropdown experience
const NavbarContext = React.createContext<{
  activeDropdown: string | null;
  setActiveDropdown: (dropdown: string | null) => void;
  isNavbarHovered: boolean;
  setIsNavbarHovered: (hovered: boolean) => void;
  mousePosition: { x: number; y: number };
  setMousePosition: (pos: { x: number; y: number }) => void;
}>({ 
  activeDropdown: null, 
  setActiveDropdown: () => {}, 
  isNavbarHovered: false,
  setIsNavbarHovered: () => {},
  mousePosition: { x: 0, y: 0 },
  setMousePosition: () => {}
});

// Predictive hover detection like Stripe
const usePredictiveHover = (navItems: string[]) => {
  const [mouseHistory, setMouseHistory] = useState<{ x: number; y: number; time: number }[]>([]);
  
  const predictTarget = useCallback((currentX: number, currentY: number) => {
    if (mouseHistory.length < 2) return null;
    
    const recent = mouseHistory.slice(-3);
    const velocityX = recent[recent.length - 1].x - recent[0].x;
    
    // Get nav item positions
    const navElements = navItems.map(item => 
      document.querySelector(`[data-nav-item="${item}"]`)
    ).filter(Boolean);
    
    if (navElements.length === 0) return null;
    
    // Predict which nav item mouse is moving toward
    const predictions = navElements.map((el, index) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const distance = Math.abs(currentX + velocityX * 2 - centerX);
      return { item: navItems[index], distance };
    });
    
    predictions.sort((a, b) => a.distance - b.distance);
    return predictions[0].item;
  }, [mouseHistory, navItems]);
  
  const updateMousePosition = useCallback((x: number, y: number) => {
    const now = Date.now();
    setMouseHistory(prev => [...prev.slice(-5), { x, y, time: now }]);
  }, []);
  
  return { predictTarget, updateMousePosition };
};

// Custom Stripe-style dropdown component with predictive hover
const DropdownMenu = ({
  trigger,
  children,
  className = "",
  id
}: {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  id: string;
}) => {
  const { activeDropdown, setActiveDropdown, mousePosition } = React.useContext(NavbarContext);
  const [isDelayedOpen, setIsDelayedOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const elementRef = useRef<HTMLDivElement>(null);
  
  const isOpen = activeDropdown === id;

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(id);
    setTimeout(() => setIsDelayedOpen(true), 20);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    // Immediate activation when mouse is directly over the trigger
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(id);
    
    if (!isOpen) {
      setTimeout(() => setIsDelayedOpen(true), 20);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsDelayedOpen(true), 20);
    } else {
      setIsDelayedOpen(false);
    }
  }, [isOpen]);

  useEffect(() => () => timeoutRef.current && clearTimeout(timeoutRef.current), []);

  return (
    <div
      ref={elementRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      data-nav-item={id}
    >
      <div className="cursor-pointer">{trigger}</div>
      {isOpen && (
        <>
          <div className="absolute top-full left-0 w-full h-4 z-40" />
          <div
            className={`absolute top-full left-0 z-50 pt-4 transition-all duration-100 ease-out ${
              isDelayedOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
            } ${className}`}
          >
            <div className="bg-popover text-popover-foreground shadow-2xl border border-border/50 rounded-2xl overflow-hidden">
              {children}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isNavbarHovered, setIsNavbarHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navRef = useRef<HTMLElement>(null);
  
  // Only dropdown nav items
  const dropdownNavItems = ['products', 'solutions', 'resources', 'company'];
  const { predictTarget, updateMousePosition } = usePredictiveHover(dropdownNavItems);

  // Handle navbar-wide mouse events for seamless dropdown experience
  const handleNavbarMouseEnter = () => {
    setIsNavbarHovered(true);
  };

  const handleNavbarMouseMove = (e: React.MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    setMousePosition({ x, y });
    updateMousePosition(x, y);

    if (!navRef.current) return;
    const navRect = navRef.current.getBoundingClientRect();

    // If mouse is outside the navbar horizontally, close dropdown
    if (x < navRect.left || x > navRect.right) {
      if (activeDropdown !== null) setActiveDropdown(null);
      return;
    }

    // Only open dropdown if mouse is directly over nav item or inside dropdown
    const navElements = dropdownNavItems.map(item => document.querySelector(`[data-nav-item="${item}"]`)).filter(Boolean);
    let hoveredDropdown: string | null = null;
    for (let i = 0; i < navElements.length; i++) {
      const el = navElements[i];
      if (el) {
        const rect = el.getBoundingClientRect();
        if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
          hoveredDropdown = dropdownNavItems[i];
          break;
        }
      }
    }

    // Predictive hover: only open dropdown if mouse is within the bounding box of all dropdown nav items
    if (!hoveredDropdown) {
      if (navElements.length > 0) {
        const firstRect = navElements[0].getBoundingClientRect();
        const lastRect = navElements[navElements.length - 1].getBoundingClientRect();
        const leftMost = firstRect.left;
        const rightMost = lastRect.right;
        const topMost = Math.min(...navElements.map(el => el.getBoundingClientRect().top));
        const bottomMost = Math.max(...navElements.map(el => el.getBoundingClientRect().bottom));

        // If mouse is inside the open dropdown menu, keep open
        if (activeDropdown) {
          const dropdownEl = document.querySelector(`[data-nav-item="${activeDropdown}"] .absolute.z-50`);
          if (dropdownEl) {
            const dropdownRect = dropdownEl.getBoundingClientRect();
            if (x >= dropdownRect.left && x <= dropdownRect.right && y >= dropdownRect.top && y <= dropdownRect.bottom) {
              // Mouse is inside dropdown, keep open
              return;
            }
          }
        }

        // If mouse is outside the bounding box horizontally or vertically, close dropdown
        if (x < leftMost || x > rightMost || y < topMost || y > bottomMost) {
          if (activeDropdown !== null) setActiveDropdown(null);
          return;
        }
        // If mouse is over Pricing, close dropdown
        const pricingEl = document.querySelector('[data-nav-pricing]');
        if (pricingEl) {
          const pricingRect = pricingEl.getBoundingClientRect();
          if (x >= pricingRect.left && x <= pricingRect.right && y >= pricingRect.top && y <= pricingRect.bottom) {
            if (activeDropdown !== null) setActiveDropdown(null);
            return;
          }
        }
        // Otherwise, predict target
        const predicted = predictTarget(x, y);
        if (predicted && dropdownNavItems.includes(predicted)) {
          if (activeDropdown !== predicted) setActiveDropdown(predicted);
          return;
        }
      }
    }

    // If hovering a dropdown nav item, open its dropdown
    if (hoveredDropdown) {
      if (activeDropdown !== hoveredDropdown) setActiveDropdown(hoveredDropdown);
      return;
    }

    // If hovering over Pricing or other non-dropdown nav item, close dropdown
    const pricingEl = document.querySelector('[data-nav-pricing]');
    if (pricingEl) {
      const pricingRect = pricingEl.getBoundingClientRect();
      if (x >= pricingRect.left && x <= pricingRect.right && y >= pricingRect.top && y <= pricingRect.bottom) {
        if (activeDropdown !== null) setActiveDropdown(null);
        return;
      }
    }

    // Check if mouse is inside any open dropdown menu
    if (activeDropdown) {
      const dropdownEl = document.querySelector(`[data-nav-item="${activeDropdown}"] .absolute.z-50`);
      if (dropdownEl) {
        const dropdownRect = dropdownEl.getBoundingClientRect();
        if (x >= dropdownRect.left && x <= dropdownRect.right && y >= dropdownRect.top && y <= dropdownRect.bottom) {
          // Mouse is inside dropdown, keep open
          return;
        }
      }
    }

    // If mouse is NOT directly over nav item or inside dropdown, close dropdown
    if (activeDropdown !== null) setActiveDropdown(null);
  };

  const handleNavbarMouseLeave = (e: React.MouseEvent) => {
    setIsNavbarHovered(false);
    // Always close dropdown when mouse leaves navbar area
    setActiveDropdown(null);
  };

  return (
    <NavbarContext.Provider value={{ activeDropdown, setActiveDropdown, isNavbarHovered, setIsNavbarHovered, mousePosition, setMousePosition }}>
      <header 
        ref={navRef}
        className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/95"
        onMouseEnter={handleNavbarMouseEnter}
        onMouseMove={handleNavbarMouseMove}
        onMouseLeave={handleNavbarMouseLeave}
      >
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-10 flex items-center space-x-2.5">
              <ChefHat className="h-6 w-6 text-primary" />
              <span className="hidden font-semibold tracking-tight sm:inline-block">
                OpsFlow AI
              </span>
            </Link>

            <nav className="flex items-center space-x-8">
              {/* PRODUCTS */}
              <DropdownMenu
                id="products"
                trigger={
                  <span className="group flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 py-2 cursor-pointer">
                    Products
                    <ChevronDown className="h-3.5 w-3.5 text-foreground/50 group-hover:text-foreground/70 transition-all duration-200" />
                  </span>
                }
                className="w-[420px]"
              >
                <div className="p-6">
                  <div className="space-y-1">
                    {PRODUCT_FEATURES.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group flex items-start gap-4 rounded-lg p-3 hover:bg-transparent transition-all duration-200"
                      >
                        <item.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-200 mt-0.5" />
                        <div className="flex-1 space-y-1">
                          <div className="font-medium text-sm leading-none text-foreground group-hover:text-primary transition-colors duration-200">
                            {item.title}
                          </div>
                          <p className="text-xs leading-relaxed text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </DropdownMenu>

              {/* SOLUTIONS */}
              <DropdownMenu
                id="solutions"
                trigger={
                  <span className="group flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 py-2 cursor-pointer">
                    Solutions
                    <ChevronDown className="h-3.5 w-3.5 text-foreground/50 group-hover:text-foreground/70 transition-all duration-200" />
                  </span>
                }
                className="w-[480px]"
              >
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        BY INDUSTRY
                      </h4>
                      <div className="space-y-0.5">
                        {BY_INDUSTRY.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="group flex items-center gap-3 rounded-lg p-2.5 hover:bg-transparent transition-all duration-200"
                          >
                            <item.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                            <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                              {item.title}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        BY ROLE
                      </h4>
                      <div className="space-y-0.5">
                        {BY_ROLE.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="group flex items-center gap-3 rounded-lg p-2.5 hover:bg-transparent transition-all duration-200"
                          >
                            <item.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                            <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                              {item.title}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </DropdownMenu>

              {/* RESOURCES */}
              <DropdownMenu
                id="resources"
                trigger={
                  <span className="group flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 py-2 cursor-pointer">
                    Resources
                    <ChevronDown className="h-3.5 w-3.5 text-foreground/50 group-hover:text-foreground/70 transition-all duration-200" />
                  </span>
                }
                className="w-[380px]"
              >
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        SUPPORT
                      </h4>
                      <div className="space-y-0.5">
                        {SUPPORT_RESOURCES.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="group flex items-center gap-3 rounded-lg p-2.5 hover:bg-transparent transition-all duration-200"
                          >
                            <item.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                            <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                              {item.title}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        LEARNING
                      </h4>
                      <div className="space-y-0.5">
                        {LEARNING_RESOURCES.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="group flex items-center gap-3 rounded-lg p-2.5 hover:bg-transparent transition-all duration-200"
                          >
                            <item.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                            <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                              {item.title}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </DropdownMenu>

              {/* COMPANY */}
              <DropdownMenu
                id="company"
                trigger={
                  <span className="group flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 py-2 cursor-pointer">
                    Company
                    <ChevronDown className="h-3.5 w-3.5 text-foreground/50 group-hover:text-foreground/70 transition-all duration-200" />
                  </span>
                }
                className="w-[220px]"
              >
                <div className="p-4">
                  <div className="space-y-0.5">
                    {COMPANY_LINKS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group flex items-center gap-3 rounded-lg p-2.5 hover:bg-accent/40 transition-all duration-200"
                      >
                        <item.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                        <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">{item.title}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </DropdownMenu>

              <Link
                href="/pricing"
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 py-2"
                data-nav-pricing
              >
                Pricing
              </Link>
            </nav>
          </div>

          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button
                variant="ghost"
                className="h-9 w-9 px-0 md:hidden"
                onClick={() => setOpen(!open)}
              >
                {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
            <nav className="flex items-center space-x-2">
              <ThemeToggle />
              <Button variant="ghost" size="sm" className="text-sm font-medium">
                Sign in
              </Button>
              <Button size="sm" className="text-sm font-medium">
                Start free trial
              </Button>
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="border-t bg-background md:hidden">
            <div className="container py-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="products" className="border-b">
                  <AccordionTrigger>Products</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-2">
                      {PRODUCT_FEATURES.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-3 p-2 text-sm"
                          onClick={() => setOpen(false)}
                        >
                          <item.icon className="h-4 w-4" />
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="solutions" className="border-b">
                  <AccordionTrigger>Solutions</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="mb-2 text-sm font-medium">By Industry</h4>
                        <div className="grid gap-2">
                          {BY_INDUSTRY.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center gap-3 p-2 text-sm"
                              onClick={() => setOpen(false)}
                            >
                              <item.icon className="h-4 w-4" />
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="mb-2 text-sm font-medium">By Role</h4>
                        <div className="grid gap-2">
                          {BY_ROLE.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center gap-3 p-2 text-sm"
                              onClick={() => setOpen(false)}
                            >
                              <item.icon className="h-4 w-4" />
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="resources" className="border-b">
                  <AccordionTrigger>Resources</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="mb-2 text-sm font-medium">Support</h4>
                        <div className="grid gap-2">
                          {SUPPORT_RESOURCES.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center gap-3 p-2 text-sm"
                              onClick={() => setOpen(false)}
                            >
                              <item.icon className="h-4 w-4" />
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="mb-2 text-sm font-medium">Learning</h4>
                        <div className="grid gap-2">
                          {LEARNING_RESOURCES.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center gap-3 p-2 text-sm"
                              onClick={() => setOpen(false)}
                            >
                              <item.icon className="h-4 w-4" />
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="company">
                  <AccordionTrigger>Company</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-2">
                      {COMPANY_LINKS.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-3 p-2 text-sm"
                          onClick={() => setOpen(false)}
                        >
                          <item.icon className="h-4 w-4" />
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-4 border-t pt-4">
                <Link
                  href="/pricing"
                  className="block py-2 text-sm font-medium"
                  onClick={() => setOpen(false)}
                >
                  Pricing
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </NavbarContext.Provider>
  );
}
