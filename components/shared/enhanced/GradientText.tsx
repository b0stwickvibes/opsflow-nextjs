"use client";

import React from "react";

export default function GradientText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}

