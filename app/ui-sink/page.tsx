// app/ui-sink/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { PaletteSelect } from "@/components/ui/palette-select";
import { CheckCircle, AlertCircle, Settings, Home } from "lucide-react";
import UITestPage from "@/components/pages/UITestPage";

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
              <PaletteSelect />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-12">
        <UITestPage />
      </div>
    </div>
  );
}
