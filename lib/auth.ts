import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { UserRole, TenantStatus } from "@prisma/client";

export interface AuthUser {
  id: string;
  tenantId: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  tenant: {
    id: string;
    name: string;
    status: TenantStatus;
    subscriptionTier: string;
  };
}

/**
 * Get the current authenticated user with tenant information
 */
export async function getCurrentUser(): Promise<AuthUser | null> {
  const { userId } = await auth();
  
  if (!userId) {
    return null;
  }

  // Get user from Clerk
  const clerkUser = await currentUser();
  if (!clerkUser) {
    return null;
  }

  // Get or create user in our database
  let dbUser = await prisma.user.findUnique({
    where: { clerkId: userId },
    include: {
      tenant: true
    }
  });

  // If user doesn't exist in our DB, create them
  if (!dbUser) {
    // For now, create a default tenant for new users
    // In production, this would be handled during onboarding
    const tenant = await prisma.tenant.create({
      data: {
        name: `${clerkUser.firstName}'s Restaurant`,
        subdomain: `${clerkUser.firstName?.toLowerCase()}-${Date.now()}`,
      }
    });

    dbUser = await prisma.user.create({
      data: {
        clerkId: userId,
        email: clerkUser.emailAddresses[0]?.emailAddress || "",
        firstName: clerkUser.firstName || "",
        lastName: clerkUser.lastName || "",
        tenantId: tenant.id,
        role: UserRole.TENANT_ADMIN, // First user becomes tenant admin
      },
      include: {
        tenant: true
      }
    });
  }

  return {
    id: dbUser.id,
    tenantId: dbUser.tenantId,
    email: dbUser.email,
    firstName: dbUser.firstName,
    lastName: dbUser.lastName,
    role: dbUser.role,
    tenant: {
      id: dbUser.tenant.id,
      name: dbUser.tenant.name,
      status: dbUser.tenant.status,
      subscriptionTier: dbUser.tenant.subscriptionTier,
    }
  };
}

/**
 * Check if user has required role
 */
export function hasRole(user: AuthUser, role: UserRole): boolean {
  const roleHierarchy: Record<UserRole, number> = {
    STAFF: 1,
    MANAGER: 2,
    COMPLIANCE_OFFICER: 3,
    LOCATION_MANAGER: 4,
    TENANT_ADMIN: 5,
    SUPER_ADMIN: 6,
    AUDITOR: 0, // Special case - read only
  };

  return roleHierarchy[user.role] >= roleHierarchy[role];
}

/**
 * Check if user can access location
 */
export async function canAccessLocation(userId: string, locationId: string): Promise<boolean> {
  const userLocation = await prisma.userLocation.findUnique({
    where: {
      userId_locationId: {
        userId,
        locationId
      }
    }
  });

  return !!userLocation;
}

/**
 * Get all locations user can access
 */
export async function getUserLocations(userId: string) {
  return await prisma.location.findMany({
    where: {
      users: {
        some: {
          userId
        }
      }
    },
    include: {
      sensors: {
        where: {
          status: 'ACTIVE'
        }
      },
      _count: {
        select: {
          temperatureReads: {
            where: {
              recordedAt: {
                gte: new Date(Date.now() - 24 * 60 * 60 * 1000) // Last 24 hours
              }
            }
          }
        }
      }
    }
  });
}