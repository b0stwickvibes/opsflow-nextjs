// app/ui-sink/page.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { PaletteSelect } from "@/components/ui/palette-select";
import {
	CheckCircle,
	AlertCircle,
	Settings,
	Home,
	Check,
	Thermometer,
	AlertTriangle,
	Wrench,
	ClipboardCheck,
	Users,
	Megaphone,
	Building2,
	ChefHat,
	Shield,
	BarChart3,
	Clock,
	Coffee,
	Wine,
	Star,
	TrendingUp,
	ArrowRight,
} from "lucide-react";
import UITestPage from "@/components/pages/UITestPage";
import Image from "next/image";
import { marketingAssets, getAllAssets } from "@/lib/assets/marketing";

export default function UISink() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			{/* Header */}
			<header className="border-b bg-card">
				<div className="container mx-auto px-4 py-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-4">
							<h1 className="text-2xl font-bold">UI Component Sink</h1>
							<Badge variant="secondary">Testing Ground</Badge>
						</div>
						<div className="flex items-center space-x-2">
							<Link href="/ui-sink/templates">
								<Button variant="outline" size="sm">
									Templates
								</Button>
							</Link>
							<Link href="/ui-sink/tokens">
								<Button variant="outline" size="sm">
									Tokens
								</Button>
							</Link>
							<ThemeToggle />
						</div>
					</div>
				</div>
			</header>

			<div className="container mx-auto px-4 py-8 space-y-12">
				{/* Core UI Components Test */}
				<section className="space-y-6">
					<div className="flex items-center justify-between">
						<div>
							<h2 className="text-xl font-semibold">Core UI Components</h2>
							<p className="text-muted-foreground">
								Test all base UI components with design tokens from global CSS
							</p>
						</div>
						<Link href="/ui-sink/templates">
							<Button variant="default" size="sm">
								View Template Catalog →
							</Button>
						</Link>
					</div>
					<UITestPage />
				</section>

				{/* Enterprise Design System Showcase */}
				<section className="enterprise-hero-section section-padding-large overflow-hidden hero-ambient accent-blue energy-balanced">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16 motion-fade-in-up-320">
							<div className="clerk-inspired-badge mb-6 inline-flex items-center gap-2 self-start px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary">
								<Shield className="h-4 w-4" />
								<span className="text-sm font-medium">Enterprise Design System</span>
							</div>
							<h2 className="enterprise-headline heading-brand-gradient text-4xl md:text-5xl font-bold mb-6">
								Premium Component Library
							</h2>
							<p className="enterprise-body text-lg text-muted-foreground max-w-3xl mx-auto">
								Clerk.com-inspired premium components built with OKLCH tokens,
								optimized for hospitality operations excellence.
							</p>
						</div>

						{/* Enterprise Card Classes */}
						<div className="space-y-12">
							<h3 className="text-2xl font-semibold mb-8 motion-fade-in-up-320 animation-delay-100">
								Enterprise Card System
							</h3>

							<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
								{/* Enterprise Card */}
								<div className="motion-fade-in-up-320 animation-delay-200">
									<div className="mb-4">
										<h4 className="text-sm font-semibold text-primary mb-2">
											enterprise-card
										</h4>
										<p className="text-xs text-muted-foreground">
											Professional card with gradient border and glassmorphism
											for general content.
										</p>
									</div>
									<Card className="enterprise-card tile-hover">
										<CardHeader>
											<CardTitle className="flex items-center gap-2">
												<Shield className="h-5 w-5 text-primary enterprise-icon-primary" />
												HACCP Compliance
											</CardTitle>
											<CardDescription>
												Automated audit trails for restaurants
											</CardDescription>
										</CardHeader>
										<CardContent>
											<p className="text-sm">
												Reduce violations by 95% with real-time monitoring and
												automated compliance reporting.
											</p>
											<Button className="clerk-cta-primary cta-shimmer hover-scale-103 cta-equal mt-4 w-full">
												Learn More
												<ArrowRight className="h-4 w-4 ml-2 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
											</Button>
										</CardContent>
									</Card>
								</div>

								{/* Enterprise Metric Card */}
								<div className="motion-fade-in-up-320 animation-delay-300">
									<div className="mb-4">
										<h4 className="text-sm font-semibold text-secondary mb-2">
											enterprise-metric-card
										</h4>
										<p className="text-xs text-muted-foreground">
											Metrics-focused card with subtle glow for KPIs and
											performance indicators.
										</p>
									</div>
									<Card className="enterprise-metric-card tile-hover">
										<CardHeader>
											<CardTitle className="flex items-center gap-2">
												<Thermometer className="h-5 w-5 text-secondary enterprise-icon-secondary" />
												Temperature Control
											</CardTitle>
											<CardDescription>
												Cold storage monitoring system
											</CardDescription>
										</CardHeader>
										<CardContent>
											<div className="text-3xl font-bold text-secondary mb-2">
												38°F
											</div>
											<div className="flex items-center justify-between text-sm">
												<span className="text-muted-foreground">
													Target: 35–40°F
												</span>
												<Badge
													variant="secondary"
													className="bg-green-100 text-green-800"
												>
													Normal
												</Badge>
											</div>
										</CardContent>
									</Card>
								</div>

								{/* Clerk Interactive Tile */}
								<div className="motion-fade-in-up-320 animation-delay-400">
									<div className="mb-4">
										<h4 className="text-sm font-semibold text-accent mb-2">
											clerk-interactive-tile
										</h4>
										<p className="text-xs text-muted-foreground">
											Interactive card for forms and dashboards with rounded
											corners.
										</p>
									</div>
									<Card className="clerk-interactive-tile feature-tile tile-hover">
										<CardHeader>
											<CardTitle className="flex items-center gap-2">
												<Users className="h-5 w-5 text-accent enterprise-icon-accent" />
												Staff Scheduling
											</CardTitle>
											<CardDescription>
												Shift management for bars and nightclubs
											</CardDescription>
										</CardHeader>
										<CardContent>
											<div className="grid grid-cols-2 gap-4 text-center">
												<div>
													<div className="text-2xl font-bold text-accent">
														12
													</div>
													<div className="text-xs text-muted-foreground">
														Active Shifts
													</div>
												</div>
												<div>
													<div className="text-2xl font-bold text-orange-500">
														3
													</div>
													<div className="text-xs text-muted-foreground">
														Pending
													</div>
												</div>
											</div>
										</CardContent>
									</Card>
								</div>

								{/* Feature Tile */}
								<div className="motion-fade-in-up-320 animation-delay-500">
									<div className="mb-4">
										<h4 className="text-sm font-semibold text-muted-foreground mb-2">
											feature-tile
										</h4>
										<p className="text-xs text-muted-foreground">
											Feature grid tile with hover effects for interactive lists.
										</p>
									</div>
									<Card className="feature-tile tile-hover">
										<CardHeader>
											<CardTitle className="flex items-center gap-2">
												<ClipboardCheck className="h-5 w-5 text-primary enterprise-icon-primary" />
												Inventory Tracking
											</CardTitle>
											<CardDescription>
												Real-time stock for coffee shops
											</CardDescription>
										</CardHeader>
										<CardContent>
											<p className="text-sm">
												Track beans, syrups, and supplies with automated alerts
												and predictive ordering.
											</p>
										</CardContent>
									</Card>
								</div>
							</div>
						</div>

						{/* Glassmorphism Surface Variants */}
						<div className="mt-16 space-y-8">
							<h3 className="text-2xl font-semibold mb-8 motion-fade-in-up-320 animation-delay-100">
								Glassmorphism Surfaces
							</h3>
							<p className="enterprise-body text-muted-foreground max-w-2xl">
								Background surfaces with transparency and blur, themed for
								primary, secondary, destructive, and muted states—ideal for
								layered hospitality dashboards.
							</p>

							<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
								<div className="motion-fade-in-up-320 animation-delay-200">
									<div className="surface-subtle-primary p-8 rounded-xl enterprise-metric-card">
										<div className="flex items-center gap-3 mb-4">
											<BarChart3 className="h-6 w-6 text-primary enterprise-icon-primary" />
											<h4 className="font-semibold text-primary">
												Revenue Analytics
											</h4>
										</div>
										<p className="text-primary/80">
											Nightclub earnings up 15% this month with optimized pricing
											strategies.
										</p>
									</div>
								</div>

								<div className="motion-fade-in-up-320 animation-delay-300">
									<div className="surface-subtle-secondary p-8 rounded-xl enterprise-metric-card">
										<div className="flex items-center gap-3 mb-4">
											<TrendingUp className="h-6 w-6 text-secondary enterprise-icon-secondary" />
											<h4 className="font-semibold text-secondary">
												Waste Reduction
											</h4>
										</div>
										<p className="text-secondary/80">
											Restaurant food waste down 30% through portion control and
											inventory optimization.
										</p>
									</div>
								</div>

								<div className="motion-fade-in-up-320 animation-delay-400">
									<div className="surface-subtle-destructive p-8 rounded-xl enterprise-metric-card">
										<div className="flex items-center gap-3 mb-4">
											<AlertTriangle className="h-6 w-6 text-destructive enterprise-icon-destructive" />
											<h4 className="font-semibold text-destructive">
												Compliance Alert
											</h4>
										</div>
										<p className="text-destructive/80">
											Temperature violation detected in walk-in cooler. Immediate
											action required.
										</p>
									</div>
								</div>

								<div className="motion-fade-in-up-320 animation-delay-500">
									<div className="surface-subtle-muted p-8 rounded-xl enterprise-metric-card">
										<div className="flex items-center gap-3 mb-4">
											<CheckCircle className="h-6 w-6 text-muted-foreground enterprise-icon-muted" />
											<h4 className="font-semibold text-muted-foreground">
												Daily Summary
											</h4>
										</div>
										<p className="text-muted-foreground/80">
											All systems operational. HACCP compliance at 99.8% for the past
											30 days.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Industry-Specific Examples */}
						<div className="mt-16 space-y-8">
							<h3 className="text-2xl font-semibold mb-8 motion-fade-in-up-320 animation-delay-100">
								Industry-Specific Components
							</h3>

							<div className="grid gap-8 md:grid-cols-3">
								{/* Restaurant Operations */}
								<div className="motion-fade-in-up-320 animation-delay-200">
									<div className="enterprise-card p-6">
										<div className="flex items-center gap-3 mb-4">
											<ChefHat className="h-6 w-6 text-primary enterprise-icon-primary" />
											<h4 className="font-semibold">Restaurant Operations</h4>
										</div>
										<p className="text-sm text-muted-foreground mb-4">
											Kitchen workflow optimization, HACCP compliance, and staff
											coordination.
										</p>
										<div className="space-y-2">
											<div className="flex justify-between text-sm">
												<span>Temperature Monitoring</span>
												<CheckCircle className="h-4 w-4 text-green-500" />
											</div>
											<div className="flex justify-between text-sm">
												<span>Staff Scheduling</span>
												<CheckCircle className="h-4 w-4 text-green-500" />
											</div>
											<div className="flex justify-between text-sm">
												<span>Compliance Reporting</span>
												<CheckCircle className="h-4 w-4 text-green-500" />
											</div>
										</div>
									</div>
								</div>

								{/* Bar Management */}
								<div className="motion-fade-in-up-320 animation-delay-300">
									<div className="enterprise-card p-6">
										<div className="flex items-center gap-3 mb-4">
											<Wine className="h-6 w-6 text-purple-500 enterprise-icon-accent" />
											<h4 className="font-semibold">Bar Management</h4>
										</div>
										<p className="text-sm text-muted-foreground mb-4">
											Liquor inventory tracking, compliance monitoring, and peak hour
											optimization.
										</p>
										<div className="space-y-2">
											<div className="flex justify-between text-sm">
												<span>Inventory Tracking</span>
												<CheckCircle className="h-4 w-4 text-green-500" />
											</div>
											<div className="flex justify-between text-sm">
												<span>Age Verification</span>
												<CheckCircle className="h-4 w-4 text-green-500" />
											</div>
											<div className="flex justify-between text-sm">
												<span>Sales Analytics</span>
												<CheckCircle className="h-4 w-4 text-green-500" />
											</div>
										</div>
									</div>
								</div>

								{/* Coffee Shop Operations */}
								<div className="motion-fade-in-up-320 animation-delay-400">
									<div className="enterprise-card p-6">
										<div className="flex items-center gap-3 mb-4">
											<Coffee className="h-6 w-6 text-amber-500 enterprise-icon-accent" />
											<h4 className="font-semibold">Coffee Shop Operations</h4>
										</div>
										<p className="text-sm text-muted-foreground mb-4">
											Quality control, rush hour optimization, and supply chain
											management.
										</p>
										<div className="space-y-2">
											<div className="flex justify-between text-sm">
												<span>Quality Monitoring</span>
												<CheckCircle className="h-4 w-4 text-green-500" />
											</div>
											<div className="flex justify-between text-sm">
												<span>Bean Inventory</span>
												<CheckCircle className="h-4 w-4 text-green-500" />
											</div>
											<div className="flex justify-between text-sm">
												<span>Customer Analytics</span>
												<CheckCircle className="h-4 w-4 text-green-500" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Asset Management */}
				<section className="space-y-8">
					<h2 className="text-xl font-semibold">Asset Management</h2>
					<p className="text-muted-foreground">
						Preview marketing assets from the centralized manifest system.
					</p>

					{/* Heroes */}
					<div className="space-y-3">
						<h3 className="text-sm font-medium text-muted-foreground">Heroes</h3>
						<div className="grid gap-4 md:grid-cols-2">
							{Object.values(marketingAssets.heroes).map((a, i) => (
								<div
									key={`hero-${i}`}
									className="rounded-lg border overflow-hidden"
								>
									<Image
										src={a.src}
										alt={a.alt}
										width={a.width}
										height={a.height}
										className="w-full h-auto object-cover"
									/>
									<div className="p-3 text-xs text-muted-foreground">
										{a.alt}
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Features */}
					<div className="space-y-3">
						<h3 className="text-sm font-medium text-muted-foreground">Features</h3>
						<div className="grid gap-4 md:grid-cols-3">
							{Object.values(marketingAssets.features).map((a, i) => (
								<div
									key={`feature-${i}`}
									className="rounded-lg border overflow-hidden"
								>
									<Image
										src={a.src}
										alt={a.alt}
										width={a.width}
										height={a.height}
										className="w-full h-auto object-cover"
									/>
									<div className="p-3 text-xs text-muted-foreground">
										{a.alt}
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
