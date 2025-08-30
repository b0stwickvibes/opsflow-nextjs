// app/ui-sink/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { ThemeToggle } from "@/components/ui/theme-toggle";
import { 
  AlertCircle, 
  CheckCircle, 
  Info, 
  Star, 
  Heart, 
  Download,
  Settings,
  User,
  Home,
  Search,
  Bell,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

export default function UISink() {
  const [progressValue, setProgressValue] = useState(75);
  const [switchValue, setSwitchValue] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold">UI Component Sink</h1>
              <Badge variant="secondary">Testing Ground</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <ThemeToggle />
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>DV</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-12">
        
        {/* Color Palette Test */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Color Palette Test</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-background border">
              <div className="h-12 w-12 bg-primary rounded mb-2"></div>
              <p className="text-sm">Primary</p>
            </div>
            <div className="p-4 rounded-lg bg-background border">
              <div className="h-12 w-12 bg-secondary rounded mb-2"></div>
              <p className="text-sm">Secondary</p>
            </div>
            <div className="p-4 rounded-lg bg-background border">
              <div className="h-12 w-12 bg-accent rounded mb-2"></div>
              <p className="text-sm">Accent</p>
            </div>
            <div className="p-4 rounded-lg bg-background border">
              <div className="h-12 w-12 bg-muted rounded mb-2"></div>
              <p className="text-sm">Muted</p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
            <Button disabled>Disabled</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>

        {/* Cards */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Cards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Card</CardTitle>
                <CardDescription>This is a basic card description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card content goes here.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  Featured Card
                </CardTitle>
                <CardDescription>This card has a muted background</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Take Action</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Stats Card</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Progress</span>
                  <Badge variant="outline">75%</Badge>
                </div>
                <Progress value={75} />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Forms */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Form Elements</h2>
          <Card>
            <CardHeader>
              <CardTitle>Form Example</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="select">Select Option</Label>
                    <Select>
                      <SelectTrigger id="select">
                        <SelectValue placeholder="Choose an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="option1">Option 1</SelectItem>
                        <SelectItem value="option2">Option 2</SelectItem>
                        <SelectItem value="option3">Option 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <Switch 
                      id="notifications" 
                      checked={switchValue}
                      onCheckedChange={setSwitchValue}
                    />
                    <Label htmlFor="notifications">Enable notifications</Label>
                  </div>
                  
                  <div className="space-y-3">
                    <Label>Checkboxes</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="check1" />
                        <Label htmlFor="check1">Option 1</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="check2" />
                        <Label htmlFor="check2">Option 2</Label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Label>Radio Group</Label>
                    <RadioGroup defaultValue="radio1">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="radio1" id="radio1" />
                        <Label htmlFor="radio1">Radio 1</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="radio2" id="radio2" />
                        <Label htmlFor="radio2">Radio 2</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Progress Example</Label>
                    <Progress value={progressValue} className="w-full" />
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => setProgressValue(Math.max(0, progressValue - 25))}
                      >
                        -25
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => setProgressValue(Math.min(100, progressValue + 25))}
                      >
                        +25
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Alerts */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Alerts</h2>
          <div className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                This is an information alert with default styling.
              </AlertDescription>
            </Alert>
            
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                This is a destructive alert indicating an error.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Badges */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Badges</h2>
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </section>

        {/* Tabs */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Tabs</h2>
          <Tabs defaultValue="tab1" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
              <TabsTrigger value="tab3">Tab 3</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tab 1 Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>This is the content for tab 1.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tab2" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tab 2 Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>This is the content for tab 2.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tab3" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tab 3 Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>This is the content for tab 3.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Typography */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Typography</h2>
          <div className="space-y-4">
            <div>
              <h1 className="text-4xl font-bold">Heading 1</h1>
              <h2 className="text-3xl font-semibold">Heading 2</h2>
              <h3 className="text-2xl font-medium">Heading 3</h3>
              <h4 className="text-xl">Heading 4</h4>
              <h5 className="text-lg">Heading 5</h5>
              <h6 className="text-base font-medium">Heading 6</h6>
            </div>
            <Separator />
            <div>
              <p className="text-lg">Large paragraph text</p>
              <p className="text-base">Regular paragraph text</p>
              <p className="text-sm">Small paragraph text</p>
              <p className="text-xs">Extra small paragraph text</p>
            </div>
            <Separator />
            <div>
              <p className="text-muted-foreground">Muted text</p>
              <p className="text-primary">Primary text</p>
              <p className="text-secondary-foreground">Secondary text</p>
            </div>
          </div>
        </section>

        {/* Navigation Test */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Navigation Example</h2>
          <Card>
            <CardContent className="p-6">
              <nav className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm">
                    <Home className="h-4 w-4 mr-2" />
                    Home
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Button>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </Button>
                  <Button size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </nav>
            </CardContent>
          </Card>
        </section>

        {/* Status Check */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Status Check</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Working Components
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>✅ Background colors visible</li>
                  <li>✅ Text colors readable</li>
                  <li>✅ Buttons properly styled</li>
                  <li>✅ Cards have backgrounds</li>
                  <li>✅ Navigation elements visible</li>
                  <li>✅ Theme toggle functional</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-500" />
                  Issues to Fix
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>❌ Missing background colors</li>
                  <li>❌ Navigation not visible</li>
                  <li>❌ Color output issues</li>
                  <li>❌ Theme switching problems</li>
                  <li>❌ Component styling broken</li>
                  <li>❌ CSS system conflicts</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

      </div>
    </div>
  );
}
