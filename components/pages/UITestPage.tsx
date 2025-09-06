"use client";

import React, { useMemo, useState } from "react";
import * as LucideIcons from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Breadcrumb from "@/components/ui/breadcrumb";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/use-toast";
import { CalendarLite } from "@/components/ui/calendar-lite";
import { Pagination } from "@/components/ui/pagination";

type IconEntry = [string, React.ComponentType<any>];

function useLucideIcons(): Record<string, IconEntry[]> {
  return useMemo(() => {
    const allIcons = Object.entries(LucideIcons).filter(
      ([name, comp]) => typeof comp === "function" && name !== "createLucideIcon" && !name.startsWith("Lucide")
    ) as IconEntry[];

    const pick = (names: string[]): IconEntry[] => allIcons.filter(([n]) => names.includes(n));

    const selected = {
      "Navigation & UI": pick([
        "Home","Menu","X","ChevronDown","ChevronUp","ChevronLeft","ChevronRight","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","MoreHorizontal","MoreVertical"
      ]),
      "Actions & Controls": pick(["Play","Pause","Stop","Plus","Minus","Edit","Trash2","Copy","Save","Download","Upload","Refresh","RotateCw","RotateCcw"]),
      Communication: pick(["Mail","Phone","MessageCircle","MessageSquare","Send","Bell","BellOff","Volume2","VolumeOff"]),
      "Data & Analytics": pick(["BarChart3","LineChart","PieChart","TrendingUp","TrendingDown","Activity","Calendar","Clock","Timer","Target"]),
      "User & People": pick(["User","Users","UserPlus","UserMinus","UserCheck","UserX","Crown","Heart","Star"]),
      "Restaurant & Kitchen": pick(["ChefHat","Coffee","Wine","UtensilsCrossed","Thermometer","Flame","Snowflake"]),
      "Business & Finance": pick(["Building2","Store","DollarSign","CreditCard","Wallet","Receipt","Calculator","Briefcase"]),
      Technology: pick(["Smartphone","Monitor","Laptop","Tablet","Wifi","WifiOff","Database","Server","Code","Terminal"]),
      "Files & Documents": pick(["File","FileText","Folder","FolderOpen","Image","FileImage","FileVideo","Paperclip","Link"]),
      "Security & Safety": pick(["Shield","ShieldCheck","ShieldX","Lock","Unlock","Key","Eye","EyeOff","AlertTriangle","AlertCircle"]),
    } as Record<string, IconEntry[]>;

    const used = new Set<string>(Object.values(selected).flat().map(([n]) => n));
    const other = allIcons.filter(([n]) => !used.has(n));
    return { ...selected, "Other Icons": other };
  }, []);
}

function Swatch({ name, varName }: { name: string; varName: string }) {
  // Use CSS var fallback so the swatch renders even if scale var isn't defined.
  // Do NOT wrap in hsl(); values may be OKLCH (from Figma) or HSL depending on palette.
  const base = varName.split("-")[0];
  const style: React.CSSProperties = {
    backgroundColor: `var(--${varName}, var(--${base}))`,
    border: "1px solid var(--border)",
    color: "var(--foreground)",
  };
  return (
    <div className="rounded-lg p-4 text-center text-xs font-mono shadow-sm" style={style}>
      <div className="mb-1">{name}</div>
      <div className="opacity-70">--{varName}</div>
    </div>
  );
}

export default function UITestPage() {
  const [progress, setProgress] = useState(75);
  const [sliderValue, setSliderValue] = useState(50);
  const iconCategories = useLucideIcons();
  const { toast } = useToast();

  const baseShades = ["50","100","200","300","400","500","600","700","800","900","950"];
  const scale = (prefix: string) => baseShades.map((s) => ({ name: `${prefix}-${s}`, varName: `${prefix}-${s}` }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Intro */}
        <section className="space-y-4">
          <h1 className="text-display-2xl">Complete Design System</h1>
          <p className="text-lg text-muted-foreground">
            Theme‑aware components, tokenized colors, and a full icon library — compatible with palette and dark mode toggles.
          </p>
        </section>

        {/* Theme-Aware Status Indicators */}
        <section className="space-y-6 relative">
          <h2 className="text-display-md">Theme-Aware Status Indicators</h2>
          
          {/* Glassmorphism background elements to show backdrop-blur effect */}
          <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden rounded-lg">
            <div className="absolute top-4 left-16 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full blur-xl"></div>
            <div className="absolute top-8 right-20 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-1/3 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full blur-xl"></div>
            <div className="absolute bottom-8 right-1/4 w-18 h-18 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-xl"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-3 relative z-10">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold">Default Badges</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold">Subtle Status Badges (Glassmorphism)</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="subtle-primary">
                  <LucideIcons.Zap className="w-3 h-3 mr-1" />
                  Active
                </Badge>
                <Badge variant="subtle-secondary">
                  <LucideIcons.Clock className="w-3 h-3 mr-1" />
                  Pending
                </Badge>
                <Badge variant="subtle-muted">
                  <LucideIcons.Pause className="w-3 h-3 mr-1" />
                  Inactive
                </Badge>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold">HACCP Compliance (Glassmorphism)</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="subtle-primary">
                  <LucideIcons.CheckCircle className="w-3 h-3 mr-1" />
                  HACCP Compliant
                </Badge>
                <Badge variant="subtle-secondary">
                  <LucideIcons.AlertTriangle className="w-3 h-3 mr-1" />
                  Temperature Check Due
                </Badge>
                <Badge variant="subtle-destructive">
                  <LucideIcons.XCircle className="w-3 h-3 mr-1" />
                  Compliance Violation
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Theme-Aware Cards */}
        <section className="space-y-6">
          <h2 className="text-display-md">Theme-Aware Cards</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Basic Card</CardTitle>
                <CardDescription>A simple card with header and content</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">This is the card content area where you can place any information.</p>
              </CardContent>
            </Card>

            <Card className="bg-primary-50/20 border-primary/20 dark:bg-primary/10 dark:border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><LucideIcons.BarChart3 className="h-5 w-5 text-primary"/> Performance Analytics</CardTitle>
                <CardDescription className="text-primary/80 dark:text-primary/90">Advanced restaurant performance metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between"><span className="text-muted-foreground">Overall Efficiency</span><span className="font-semibold">94%</span></div>
                <div className="flex items-center justify-between"><span className="text-muted-foreground">Task Completion</span><span className="font-semibold">91%</span></div>
                <Progress value={91} />
              </CardContent>
            </Card>

            <Card className="bg-secondary-50/20 border-secondary/20 dark:bg-secondary/10 dark:border-secondary/30">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2"><LucideIcons.Thermometer className="h-5 w-5 text-secondary"/> Temperature Monitor</span>
                  <Badge className="bg-primary-50/20 dark:bg-primary/20 text-primary border-primary/20 dark:border-primary/30">Normal</Badge>
                </CardTitle>
                <CardDescription className="text-secondary/80 dark:text-secondary/90">Kitchen refrigeration status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-secondary">38°F</div>
                <p className="text-sm text-muted-foreground">Target: 35–40°F</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><LucideIcons.Users className="h-5 w-5 text-primary"/> Staff Productivity</CardTitle>
                <CardDescription>Team performance this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">92%</div>
                <p className="text-sm text-muted-foreground">+2.1% from last week</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><LucideIcons.Clock className="h-5 w-5 text-secondary"/> Response Time</CardTitle>
                <CardDescription>Average response metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">18.5m</div>
                <p className="text-sm text-muted-foreground">18% faster than target</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Theme-Aware Alerts */}
        <section className="space-y-6">
          <h2 className="text-display-md">Theme-Aware Alerts</h2>
          <div className="space-y-4">
            <Alert variant="info">
              <LucideIcons.Info className="h-4 w-4" />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                This is an informational alert with glassmorphism theme-aware colors.
              </AlertDescription>
            </Alert>

            <Alert variant="warning">
              <LucideIcons.AlertTriangle className="h-4 w-4" />
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>
                This is a warning alert with glassmorphism background that adapts to all themes.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <LucideIcons.XCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                This is an error alert with glassmorphism background that properly supports dark mode.
              </AlertDescription>
            </Alert>

            <Alert variant="success">
              <LucideIcons.CheckCircle className="h-4 w-4" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                This is a success alert with glassmorphism frosted glass effect.
              </AlertDescription>
            </Alert>
          </div>
        </section>
        {/* Typography */}
        <section className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2>Typography Scale</h2>
            <div className="space-y-3">
              <h1 className="text-display-xl">Display XL</h1>
              <h1 className="text-display-lg">Display Large</h1>
              <h2 className="text-display-md">Display Medium</h2>
              <h3 className="text-display-sm">Display Small</h3>
              <h1>Heading 1</h1>
              <h2>Heading 2</h2>
              <h3>Heading 3</h3>
              <h4>Heading 4</h4>
              <p className="text-lg">Large body text</p>
              <p>Regular body text</p>
              <p className="text-sm">Small text</p>
              <p className="text-xs">Extra small text</p>
            </div>
          </div>
          <div className="space-y-4">
            <h2>Text Variants</h2>
            <div className="space-y-2">
              <p className="text-foreground">Foreground</p>
              <p className="text-muted-foreground">Muted foreground</p>
              <p className="text-primary">Primary</p>
              <p className="text-secondary">Secondary</p>
              <p className="text-destructive">Destructive</p>
              <p className="font-light">Light</p>
              <p className="font-medium">Medium</p>
              <p className="font-semibold">Semibold</p>
              <p className="font-bold">Bold</p>
            </div>
          </div>
        </section>

        {/* Token Palette (with scale fallbacks) */}
        <section className="space-y-6">
          <h2 className="text-display-md">Complete Color Palette</h2>
          <p className="text-muted-foreground">Runtime tokens with fallbacks to scales if defined.</p>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Base</h3>
            <div className="grid grid-cols-6 sm:grid-cols-11 gap-2">
              {scale("base").map((c) => (
                <Swatch key={c.name} name={c.name.split("-")[1]} varName={c.varName} />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Primary</h3>
            <div className="grid grid-cols-6 sm:grid-cols-12 gap-2">
              {scale("primary").map((c) => (
                <Swatch key={c.name} name={c.name.split("-")[1]} varName={c.varName} />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Secondary</h3>
            <div className="grid grid-cols-6 sm:grid-cols-12 gap-2">
              {scale("secondary").map((c) => (
                <Swatch key={c.name} name={c.name.split("-")[1]} varName={c.varName} />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-muted-foreground">System</h4>
              <div className="grid grid-cols-3 gap-2">
                <Swatch name="background" varName="background" />
                <Swatch name="card" varName="card" />
                <Swatch name="muted" varName="muted" />
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-muted-foreground">Interactive</h4>
              <div className="grid grid-cols-3 gap-2">
                <Swatch name="primary" varName="primary" />
                <Swatch name="secondary" varName="secondary" />
                <Swatch name="accent" varName="accent" />
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-muted-foreground">Semantic</h4>
              <div className="grid grid-cols-3 gap-2">
                <Swatch name="destructive" varName="destructive" />
                <Swatch name="ring" varName="ring" />
                <Swatch name="border" varName="border" />
              </div>
            </div>
          </div>
        </section>

        {/* Components: Buttons & Forms */}
        <section className="space-y-8">
          <h2 className="text-display-md">Buttons & Form Elements</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <h3>Buttons</h3>
              <div className="flex flex-wrap gap-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </div>
            <div className="space-y-2">
              <h3>Inputs</h3>
              <div className="space-y-2">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="name@company.com" />
                </div>
                <div>
                  <Label htmlFor="pwd">Password</Label>
                  <Input id="pwd" type="password" placeholder="••••••••" />
                </div>
                <div>
                  <Label htmlFor="msg">Message</Label>
                  <Textarea id="msg" placeholder="Enter your message" />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3>Selects & Toggles</h3>
              <div className="space-y-3">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Option 1</SelectItem>
                    <SelectItem value="2">Option 2</SelectItem>
                    <SelectItem value="3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex items-center gap-2">
                  <Switch id="sw1" defaultChecked />
                  <Label htmlFor="sw1">Enable notifications</Label>
                </div>
                <div className="space-y-2">
                  <Label>Radio group</Label>
                  <RadioGroup defaultValue="r1">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem id="r1" value="r1" />
                      <Label htmlFor="r1">Option 1</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem id="r2" value="r2" />
                      <Label htmlFor="r2">Option 2</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-1">
                  <Label>Checkboxes</Label>
                  <div className="flex items-center gap-2"><Checkbox id="c1" /><Label htmlFor="c1">Accept terms</Label></div>
                  <div className="flex items-center gap-2"><Checkbox id="c2" defaultChecked /><Label htmlFor="c2">Subscribe</Label></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overlays & Dialogs */}
        <section className="space-y-6">
          <h2 className="text-display-md">Overlays & Dialogs</h2>
          <div className="flex flex-wrap gap-3">
            <Dialog>
              <DialogTrigger asChild><Button variant="outline">Open Dialog</Button></DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Dialog Title</DialogTitle>
                  <DialogDescription>Small modal with semantic tokens.</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button>Confirm</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Sheet>
              <SheetTrigger asChild><Button variant="outline">Open Sheet</Button></SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Sheet Title</SheetTitle>
                  <SheetDescription>Slide-over example.</SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            <Popover>
              <PopoverTrigger asChild><Button variant="outline">Popover</Button></PopoverTrigger>
              <PopoverContent className="w-56">Small popover content.</PopoverContent>
            </Popover>

            <HoverCard>
              <HoverCardTrigger asChild><Button variant="outline">Hover Card</Button></HoverCardTrigger>
              <HoverCardContent className="w-64">Hover to preview content.</HoverCardContent>
            </HoverCard>

            <DropdownMenu>
              <DropdownMenuTrigger asChild><Button variant="outline">Dropdown</Button></DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuItem>Archive</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="secondary"
              onClick={() => toast({ title: "Toast", description: "Theme-aware toast example" })}
            >
              Show Toast
            </Button>
          </div>
        </section>

        {/* Navigation & Menus */}
        <section className="space-y-6">
          <h2 className="text-display-md">Navigation & Menus</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Breadcrumb items={[{ label: 'Library', href: '#' }, { label: 'Data', current: true }]} />

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-64 text-sm text-muted-foreground">Menu content</div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#" className="px-3 py-2">Docs</NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </section>

        {/* Data Display: Accordion/Collapsible */}
        <section className="space-y-6">
          <h2 className="text-display-md">Accordion & Collapsible</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is OpsFlow?</AccordionTrigger>
                <AccordionContent>Restaurant operations platform with compliance, tasks, and analytics.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it multi-location?</AccordionTrigger>
                <AccordionContent>Yes, designed for multi-location management and reporting.</AccordionContent>
              </AccordionItem>
            </Accordion>

            <Collapsible>
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium">Collapsible section</h4>
                <CollapsibleTrigger asChild>
                  <Button size="sm" variant="outline">Toggle</Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent>
                <div className="mt-3 text-sm text-muted-foreground">Hidden content revealed.</div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </section>

        {/* Command / Combobox & Scroll Area */}
        <section className="space-y-6">
          <h2 className="text-display-md">Command & Scroll Area</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Command className="rounded-lg border">
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>Open dashboard</CommandItem>
                  <CommandItem>New checklist</CommandItem>
                  <CommandItem>Invite teammate</CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>

            <ScrollArea className="h-40 rounded border p-3">
              <div className="space-y-2 text-sm text-muted-foreground">
                {Array.from({ length: 20 }).map((_, i) => (
                  <p key={i}>Scrollable line {i + 1}</p>
                ))}
              </div>
            </ScrollArea>
          </div>
        </section>

        {/* Carousel & Skeleton */}
        <section className="space-y-6">
          <h2 className="text-display-md">Carousel & Skeleton</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Carousel>
              <CarouselContent>
                {[1,2,3].map((n) => (
                  <CarouselItem key={n} className="basis-full">
                    <Card><CardContent className="h-32 flex items-center justify-center">Slide {n}</CardContent></Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex gap-2 mt-2"><CarouselPrevious /><CarouselNext /></div>
            </Carousel>

            <div className="space-y-3">
              <Skeleton className="h-6 w-1/3" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-24 w-full" />
            </div>
          </div>
        </section>

        {/* Calendar & DatePicker */}
        <section className="space-y-6">
          <h2 className="text-display-md">Calendar & Pagination</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <CalendarLite />
            </div>
            <div className="space-y-3">
              <Card>
                <CardHeader>
                  <CardTitle>Pagination</CardTitle>
                  <CardDescription>Simple page navigation</CardDescription>
                </CardHeader>
                <CardContent>
                  <Pagination page={2} totalPages={8} />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sidebar Layout (shadcn sidebar-03 style) */}
        <section className="space-y-6">
          <h2 className="text-display-md">Sidebar Layout</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <aside className="md:col-span-1 rounded-xl border bg-card">
              <nav className="p-3 text-sm">
                <ul className="space-y-1">
                  <li><Button variant="ghost" className="w-full justify-start">Dashboard</Button></li>
                  <li><Button variant="ghost" className="w-full justify-start">Team</Button></li>
                  <li><Button variant="ghost" className="w-full justify-start">Billing</Button></li>
                  <li><Button variant="ghost" className="w-full justify-start">Integrations</Button></li>
                  <li><Button variant="ghost" className="w-full justify-start">Settings</Button></li>
                </ul>
              </nav>
            </aside>
            <div className="md:col-span-4 space-y-4">
              <Card>
                <CardHeader><CardTitle>Welcome</CardTitle><CardDescription>Sidebar demo content</CardDescription></CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Use this pattern to demo databases, charts, or forms with the left nav.</p>
                </CardContent>
              </Card>
              <div className="grid gap-4 md:grid-cols-2">
                <Card><CardHeader><CardTitle>Team Members</CardTitle></CardHeader><CardContent className="space-y-2">
                  {["Sofia","Jackson","Isabella"].map((n,i)=>(
                    <div key={i} className="flex items-center justify-between border rounded-lg p-2">
                      <div className="flex items-center gap-2"><Avatar><AvatarFallback>{n[0]}{n[1]||''}</AvatarFallback></Avatar><div className="text-sm">{n}</div></div>
                      <Badge variant="outline">Owner</Badge>
                    </div>
                  ))}
                </CardContent></Card>
                <Card><CardHeader><CardTitle>Cookie Settings</CardTitle></CardHeader><CardContent className="space-y-3 text-sm">
                  <div className="flex items-center justify-between"><div>
                    <div className="font-medium">Strictly Necessary</div>
                    <div className="text-muted-foreground">Essential features</div>
                  </div><Switch defaultChecked/></div>
                  <div className="flex items-center justify-between"><div>
                    <div className="font-medium">Functional Cookies</div>
                    <div className="text-muted-foreground">Personalized functionality</div>
                  </div><Switch/></div>
                  <Button className="w-full mt-2">Save preferences</Button>
                </CardContent></Card>
              </div>
            </div>
          </div>
        </section>

        {/* Theme-aware Alerts & Cards */}
        <section className="space-y-8">
          <h2 className="text-display-md">Alerts & Cards with Scale-based Colors</h2>
          <div className="space-y-4">
            <Alert className="border-primary/20 bg-primary/5 dark:border-primary/30 dark:bg-primary/10">
              <LucideIcons.Info className="h-4 w-4 text-primary" />
              <AlertTitle className="text-primary">Information (Tokens)</AlertTitle>
              <AlertDescription className="text-primary/80 dark:text-primary/90">Theme-aware with semantic tokens for universal palette support.</AlertDescription>
            </Alert>
            <Alert className="border-primary-200 dark:border-primary-700 bg-primary-50/50 dark:bg-primary-950/50">
              <LucideIcons.AlertTriangle className="h-4 w-4 text-primary-700 dark:text-primary-300" />
              <AlertTitle className="text-primary-800 dark:text-primary-200">Information (Scale)</AlertTitle>
              <AlertDescription className="text-primary-700 dark:text-primary-300">Using numeric scale instead of semantic tokens.</AlertDescription>
            </Alert>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Basic Card</CardTitle>
                <CardDescription>Header + content</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Place any information here.</p>
              </CardContent>
            </Card>
            <Card className="bg-primary-50/20 dark:bg-primary/10 border-primary/20 dark:border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LucideIcons.BarChart3 className="h-5 w-5 text-primary" /> Analytics (Scale-50/20)
                </CardTitle>
                <CardDescription className="text-primary/80 dark:text-primary/90">With primary-50 at 20% opacity</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between"><span className="text-muted-foreground">Overall</span><span className="font-semibold">{progress}%</span></div>
                <Progress value={progress} />
                <div className="flex gap-2">
                  <Button size="sm" onClick={() => setProgress((p) => Math.max(0, p - 10))}>-10</Button>
                  <Button size="sm" onClick={() => setProgress((p) => Math.min(100, p + 10))}>+10</Button>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-primary-50/50 dark:bg-primary-950/50 border-primary-200 dark:border-primary-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LucideIcons.BarChart3 className="h-5 w-5 text-primary-700 dark:text-primary-300" /> Analytics (Scale)
                </CardTitle>
                <CardDescription>With numeric scale</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between"><span className="text-muted-foreground">Overall</span><span className="font-semibold">{progress}%</span></div>
                <Progress value={progress} />
              </CardContent>
            </Card>
            <Card className="bg-secondary-50/20 dark:bg-secondary/10 border-secondary/20 dark:border-secondary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><LucideIcons.Thermometer className="h-5 w-5 text-secondary" /> Temperature</CardTitle>
                <CardDescription className="text-secondary/80 dark:text-secondary/90">With secondary-50 at 20% opacity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-secondary">38°F</div>
                <p className="text-sm text-muted-foreground">Target: 35–40°F</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Data Table */}
        <section className="space-y-8">
          <h2 className="text-display-md">Data Table</h2>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Restaurant</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead>Compliance</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Downtown Bistro</TableCell>
                  <TableCell><Badge className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 border border-primary-200 dark:border-primary-700">Active</Badge></TableCell>
                  <TableCell>$12,345</TableCell>
                  <TableCell>234</TableCell>
                  <TableCell><Badge className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 border border-primary-200 dark:border-primary-700">Compliant</Badge></TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm"><LucideIcons.Edit className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="sm"><LucideIcons.Trash2 className="h-4 w-4" /></Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Ocean View Cafe</TableCell>
                  <TableCell><Badge className="bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-200 border border-secondary-200 dark:border-secondary-700">Pending</Badge></TableCell>
                  <TableCell>$8,976</TableCell>
                  <TableCell>167</TableCell>
                  <TableCell><Badge className="bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-200 border border-secondary-200 dark:border-secondary-700">Review Needed</Badge></TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm"><LucideIcons.Edit className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="sm"><LucideIcons.Trash2 className="h-4 w-4" /></Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Tabs */}
        <section className="space-y-8">
          <h2 className="text-display-md">Tabs</h2>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="compliance">Compliance</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                  <CardDescription>General information and statistics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-primary-100 dark:bg-primary-900 border border-primary-200 dark:border-primary-700 rounded-lg"><LucideIcons.BarChart3 className="h-6 w-6 text-primary-700 dark:text-primary-300" /></div>
                      <div><p className="text-sm text-muted-foreground">Total Revenue</p><p className="text-2xl font-bold">$45,231</p></div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-secondary-100 dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-700 rounded-lg"><LucideIcons.Users className="h-6 w-6 text-secondary-700 dark:text-secondary-300" /></div>
                      <div><p className="text-sm text-muted-foreground">Active Users</p><p className="text-2xl font-bold">2,350</p></div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-primary-100 dark:bg-primary-900 border border-primary-200 dark:border-primary-700 rounded-lg"><LucideIcons.Shield className="h-6 w-6 text-primary-700 dark:text-primary-300" /></div>
                      <div><p className="text-sm text-muted-foreground">Compliance Rate</p><p className="text-2xl font-bold">98.5%</p></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="analytics"><Card><CardHeader><CardTitle>Analytics</CardTitle><CardDescription>Detailed performance metrics</CardDescription></CardHeader><CardContent><p>Analytics content placeholder.</p></CardContent></Card></TabsContent>
            <TabsContent value="compliance"><Card><CardHeader><CardTitle>Compliance</CardTitle><CardDescription>HACCP & safety tracking</CardDescription></CardHeader><CardContent><p>Compliance tools placeholder.</p></CardContent></Card></TabsContent>
            <TabsContent value="settings"><Card><CardHeader><CardTitle>Settings</CardTitle><CardDescription>System preferences</CardDescription></CardHeader><CardContent><p>Configuration options placeholder.</p></CardContent></Card></TabsContent>
          </Tabs>
        </section>

        {/* Avatars */}
        <section className="space-y-6">
          <h2 className="text-display-md">Avatars</h2>
          <div className="flex items-center gap-4">
            <Avatar><AvatarFallback>AB</AvatarFallback></Avatar>
            <Avatar><AvatarFallback>CD</AvatarFallback></Avatar>
            <Avatar><AvatarFallback>EF</AvatarFallback></Avatar>
          </div>
        </section>

        {/* Icon Library */}
        <section className="space-y-6">
          <h2 className="text-display-md">Lucide React Icon Library</h2>
          <p className="text-muted-foreground">Organized by category. This reflects your installed Lucide set.</p>
          {Object.entries(iconCategories).map(([category, icons]) => (
            <div key={category} className="space-y-3">
              <h3 className="text-sm font-semibold">{category} ({icons.length})</h3>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-3">
                {icons.map(([name, Icon]) => (
                  <div key={name} className="flex flex-col items-center p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors cursor-pointer">
                    <Icon className="h-5 w-5 text-muted-foreground mb-2" />
                    <span className="text-[10px] leading-3 text-muted-foreground font-mono truncate w-full text-center">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="space-y-8 border-t pt-8">
          <div className="text-center space-y-2">
            <h2 className="text-display-md">Design System Overview</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Palette toggles and dark mode are applied via token overrides. All components use tokenized Tailwind classes to remain stable across themes.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
