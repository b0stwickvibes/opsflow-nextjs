"use client";

import { Badge } from "./ui/badge";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

export function RestaurantFooter() {
  return (
    <footer className="border-t border-border py-12 bg-muted/30">
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">OpsFlow AI</h3>
              <p className="text-muted-foreground mb-4">
                Professional restaurant operations management platform designed for 
                enterprise-level HACCP compliance and operational excellence.
              </p>
              <Badge className="status-indicator-success">
                <Shield className="w-3 h-3 mr-1" />
                HACCP Certified Platform
              </Badge>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">HACCP Compliance</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Temperature Monitoring</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Analytics Dashboard</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Staff Training</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Training Resources</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">System Status</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-border mt-8 pt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            <span>support@opsflow.ai</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Enterprise Solutions Worldwide</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 OpsFlow AI. Professional restaurant operations management.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">HACCP Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}