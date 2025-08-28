"use client"

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Video, Phone, MessageSquare } from "lucide-react";

export function DemoBooking() {
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const demoTypes = [
    {
      id: "full",
      title: "Full Platform Demo",
      duration: "45 minutes",
      description: "Complete walkthrough of all OpsFlow features",
      icon: Video,
      popular: true
    },
    {
      id: "focused",
      title: "Focused Feature Demo",
      duration: "20 minutes",
      description: "Deep dive into specific features of interest",
      icon: MessageSquare,
      popular: false
    },
    {
      id: "consultation",
      title: "Restaurant Consultation",
      duration: "60 minutes",
      description: "Customized demo with operational assessment",
      icon: Phone,
      popular: false
    }
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Book Your Personal Demo</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See exactly how OpsFlow fits your restaurant's needs with a customized demonstration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Demo Options */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Choose Your Demo Type</h3>
            
            {demoTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <Card 
                  key={type.id}
                  className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    selectedType === type.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedType(type.id)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            {type.title}
                            {type.popular && (
                              <Badge variant="secondary">Most Popular</Badge>
                            )}
                          </CardTitle>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <Clock className="h-4 w-4 mr-1" />
                            {type.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{type.description}</p>
                  </CardContent>
                </Card>
              );
            })}

            {/* Benefits */}
            <Card className="bg-muted/30 border-dashed">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  What You'll Get
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Personalized demo based on your restaurant type
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    ROI analysis for your specific operation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Implementation timeline and pricing
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Q&A with restaurant operations experts
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Schedule Your Demo</h3>
            
            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="your.email@restaurant.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="restaurant">Restaurant Name *</Label>
                  <Input id="restaurant" placeholder="Your restaurant name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="restaurantType">Restaurant Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select restaurant type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-service">Full Service Restaurant</SelectItem>
                      <SelectItem value="quick-service">Quick Service</SelectItem>
                      <SelectItem value="fast-casual">Fast Casual</SelectItem>
                      <SelectItem value="coffee-shop">Coffee Shop</SelectItem>
                      <SelectItem value="bar-nightlife">Bar/Nightlife</SelectItem>
                      <SelectItem value="hotel">Hotel Restaurant</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="locations">Number of Locations</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select number of locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Location</SelectItem>
                      <SelectItem value="2-5">2-5 Locations</SelectItem>
                      <SelectItem value="6-15">6-15 Locations</SelectItem>
                      <SelectItem value="16+">16+ Locations</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferredTime">Preferred Time</Label>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time} (EST)
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea 
                    id="notes" 
                    placeholder="Tell us about your current challenges or specific features you're interested in..."
                    rows={4}
                  />
                </div>

                <Button className="w-full" size="lg">
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule My Demo
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We'll follow up within 24 hours to confirm your demo time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}