"use client";

import React from "react";
import { useUser, useOrganization } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

// Dashboard Components
import { AdminDashboard } from "./AdminDashboard";
import { ManagerDashboard } from "./ManagerDashboard";
import { TeamMemberDashboard } from "./TeamMemberDashboard";

/**
 * Role-based dashboard router for OpsFlow
 * Routes users to appropriate dashboard based on their organization role
 * Follows OpsFlow SOPs for consistent styling and user experience
 */
export function DashboardRouter() {
  const { user, isLoaded: userLoaded } = useUser();
  const { organization, membership, isLoaded: orgLoaded } = useOrganization();

  // Show loading state while data is being fetched
  if (!userLoaded || !orgLoaded) {
    return (
      <div className="dashboard-container">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-4" />
            <h3 className="enterprise-headline text-lg mb-2">Loading Dashboard</h3>
            <p className="dashboard-text-secondary">Setting up your personalized experience...</p>
          </div>
        </div>
      </div>
    );
  }

  // Handle case where user is not part of an organization
  if (!organization || !membership) {
    return (
      <div className="dashboard-container">
        <div className="max-w-2xl mx-auto text-center py-16">
          <h3 className="enterprise-headline text-xl mb-4">No Organization Found</h3>
          <p className="dashboard-text-secondary mb-6">
            You need to be part of an organization to access the dashboard. 
            Please contact your administrator or complete the onboarding process.
          </p>
          <div className="space-x-4">
            <a href="/onboarding" className="clerk-cta-primary inline-flex items-center px-6 py-3 rounded-lg">
              Complete Onboarding
            </a>
            <a href="/support" className="clerk-cta-ghost inline-flex items-center px-6 py-3 rounded-lg">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Get user role from organization membership
  const userRole = membership.role;

  // Route to appropriate dashboard based on role
  switch (userRole) {
    case 'org:admin':
      return <AdminDashboard />;
    
    case 'org:manager':
      return <ManagerDashboard />;
    
    case 'org:member':
    default:
      return <TeamMemberDashboard />;
  }
}

/**
 * Export individual dashboards for direct use if needed
 */
export { AdminDashboard, ManagerDashboard, TeamMemberDashboard };
