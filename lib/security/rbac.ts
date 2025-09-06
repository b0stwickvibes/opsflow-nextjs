/**
 * Role-Based Access Control (RBAC) System
 * Enterprise-grade permissions and security for 0→$10M ARR scaling
 */

// Permission definitions
export const PERMISSIONS = {
  // Restaurant Management
  RESTAURANT_VIEW: 'restaurant:view',
  RESTAURANT_CREATE: 'restaurant:create',
  RESTAURANT_UPDATE: 'restaurant:update',
  RESTAURANT_DELETE: 'restaurant:delete',
  
  // User Management
  USER_VIEW: 'user:view',
  USER_CREATE: 'user:create',
  USER_UPDATE: 'user:update',
  USER_DELETE: 'user:delete',
  USER_IMPERSONATE: 'user:impersonate', // Support feature
  
  // Equipment Management
  EQUIPMENT_VIEW: 'equipment:view',
  EQUIPMENT_CREATE: 'equipment:create',
  EQUIPMENT_UPDATE: 'equipment:update',
  EQUIPMENT_DELETE: 'equipment:delete',
  
  // Temperature & HACCP
  TEMPERATURE_VIEW: 'temperature:view',
  TEMPERATURE_CREATE: 'temperature:create',
  TEMPERATURE_UPDATE: 'temperature:update',
  TEMPERATURE_DELETE: 'temperature:delete',
  HACCP_OVERRIDE: 'haccp:override', // Emergency override
  
  // Inventory Management
  INVENTORY_VIEW: 'inventory:view',
  INVENTORY_CREATE: 'inventory:create',
  INVENTORY_UPDATE: 'inventory:update',
  INVENTORY_DELETE: 'inventory:delete',
  INVENTORY_ADJUST: 'inventory:adjust', // Quantity adjustments
  
  // Reports & Analytics
  REPORTS_VIEW: 'reports:view',
  REPORTS_CREATE: 'reports:create',
  REPORTS_EXPORT: 'reports:export',
  ANALYTICS_VIEW: 'analytics:view',
  ANALYTICS_ADVANCED: 'analytics:advanced',
  
  // Settings & Configuration
  SETTINGS_VIEW: 'settings:view',
  SETTINGS_UPDATE: 'settings:update',
  ORGANIZATION_MANAGE: 'organization:manage',
  
  // Billing & Subscriptions
  BILLING_VIEW: 'billing:view',
  BILLING_MANAGE: 'billing:manage',
  
  // Audit & Compliance
  AUDIT_VIEW: 'audit:view',
  AUDIT_EXPORT: 'audit:export',
  COMPLIANCE_OVERRIDE: 'compliance:override',
  
  // Support & Debug
  DEBUG_VIEW: 'debug:view',
  SUPPORT_ACCESS: 'support:access',
} as const;

export type Permission = typeof PERMISSIONS[keyof typeof PERMISSIONS];

// Role definitions with permissions
export const ROLES = {
  // Staff - Front-of-house and back-of-house workers
  staff: {
    name: 'Staff',
    description: 'Basic restaurant staff with limited access',
    permissions: [
      PERMISSIONS.TEMPERATURE_VIEW,
      PERMISSIONS.TEMPERATURE_CREATE,
      PERMISSIONS.EQUIPMENT_VIEW,
      PERMISSIONS.INVENTORY_VIEW,
    ],
    level: 1,
  },
  
  // Supervisor - Shift leaders and department heads
  supervisor: {
    name: 'Supervisor',
    description: 'Supervisory staff with additional responsibilities',
    permissions: [
      PERMISSIONS.TEMPERATURE_VIEW,
      PERMISSIONS.TEMPERATURE_CREATE,
      PERMISSIONS.TEMPERATURE_UPDATE,
      PERMISSIONS.EQUIPMENT_VIEW,
      PERMISSIONS.EQUIPMENT_UPDATE,
      PERMISSIONS.INVENTORY_VIEW,
      PERMISSIONS.INVENTORY_UPDATE,
      PERMISSIONS.INVENTORY_ADJUST,
      PERMISSIONS.REPORTS_VIEW,
      PERMISSIONS.USER_VIEW,
    ],
    level: 2,
  },
  
  // Manager - Restaurant managers
  manager: {
    name: 'Manager',
    description: 'Restaurant managers with operational control',
    permissions: [
      PERMISSIONS.RESTAURANT_VIEW,
      PERMISSIONS.RESTAURANT_UPDATE,
      PERMISSIONS.USER_VIEW,
      PERMISSIONS.USER_CREATE,
      PERMISSIONS.USER_UPDATE,
      PERMISSIONS.EQUIPMENT_VIEW,
      PERMISSIONS.EQUIPMENT_CREATE,
      PERMISSIONS.EQUIPMENT_UPDATE,
      PERMISSIONS.TEMPERATURE_VIEW,
      PERMISSIONS.TEMPERATURE_CREATE,
      PERMISSIONS.TEMPERATURE_UPDATE,
      PERMISSIONS.TEMPERATURE_DELETE,
      PERMISSIONS.INVENTORY_VIEW,
      PERMISSIONS.INVENTORY_CREATE,
      PERMISSIONS.INVENTORY_UPDATE,
      PERMISSIONS.INVENTORY_DELETE,
      PERMISSIONS.INVENTORY_ADJUST,
      PERMISSIONS.REPORTS_VIEW,
      PERMISSIONS.REPORTS_CREATE,
      PERMISSIONS.REPORTS_EXPORT,
      PERMISSIONS.ANALYTICS_VIEW,
      PERMISSIONS.SETTINGS_VIEW,
      PERMISSIONS.SETTINGS_UPDATE,
      PERMISSIONS.HACCP_OVERRIDE,
    ],
    level: 3,
  },
  
  // Owner - Restaurant owners and operators
  owner: {
    name: 'Owner',
    description: 'Restaurant owners with full access',
    permissions: Object.values(PERMISSIONS).filter(p => 
      !p.includes('impersonate') && !p.includes('debug') && !p.includes('support')
    ) as Permission[],
    level: 4,
  },
  
  // Super Admin - Platform administrators
  super_admin: {
    name: 'Super Admin',
    description: 'Platform administrators with complete access',
    permissions: Object.values(PERMISSIONS) as Permission[],
    level: 5,
  },
} as const;

export type RoleName = keyof typeof ROLES;
export type Role = typeof ROLES[RoleName];

// User context for permission checking
export interface UserContext {
  id: string;
  email: string;
  role: RoleName;
  organizationId: string;
  permissions?: Permission[]; // Custom permissions can override role defaults
  isActive: boolean;
  isSuperAdmin?: boolean;
}

// Resource context for permission checking
export interface ResourceContext {
  type: 'restaurant' | 'user' | 'equipment' | 'temperature' | 'inventory' | 'report' | 'organization';
  id?: string;
  organizationId: string;
  ownerId?: string;
  metadata?: Record<string, any>;
}

// RBAC Manager class
export class RBACManager {
  /**
   * Check if user has specific permission
   */
  hasPermission(user: UserContext, permission: Permission): boolean {
    if (!user.isActive) return false;
    if (user.isSuperAdmin) return true;

    // Check custom permissions first
    if (user.permissions) {
      return user.permissions.includes(permission);
    }

    // Check role-based permissions
    const role = ROLES[user.role];
    if (!role) return false;

    return (role.permissions as Permission[]).includes(permission);
  }

  /**
   * Check if user can access specific resource
   */
  canAccessResource(
    user: UserContext,
    permission: Permission,
    resource: ResourceContext
  ): boolean {
    // Basic permission check
    if (!this.hasPermission(user, permission)) return false;

    // Organization boundary check (critical for multi-tenant security)
    if (resource.organizationId !== user.organizationId) {
      // Only super admins can access cross-organization resources
      return user.isSuperAdmin === true;
    }

    // Resource ownership checks
    if (resource.ownerId && resource.ownerId !== user.id) {
      // Check if user's role level is sufficient for managing others' resources
      const userRole = ROLES[user.role];
      const requiredLevel = this.getRequiredLevelForCrossUserAccess(permission);
      
      return userRole.level >= requiredLevel;
    }

    return true;
  }

  /**
   * Get required role level for accessing other users' resources
   */
  private getRequiredLevelForCrossUserAccess(permission: Permission): number {
    // High-security operations require higher roles
    if (permission.includes('delete') || permission.includes('override')) return 4; // Owner+
    if (permission.includes('manage') || permission.includes('billing')) return 4; // Owner+
    if (permission.includes('update') || permission.includes('create')) return 3; // Manager+
    return 2; // Supervisor+
  }

  /**
   * Check if user can perform bulk operations
   */
  canPerformBulkOperation(
    user: UserContext,
    permission: Permission,
    resourceCount: number
  ): boolean {
    if (!this.hasPermission(user, permission)) return false;

    // Limit bulk operations by role
    const userRole = ROLES[user.role];
    const maxBulkOperations = {
      staff: 10,
      supervisor: 50,
      manager: 200,
      owner: 1000,
      super_admin: Infinity,
    };

    return resourceCount <= (maxBulkOperations[user.role] || 0);
  }

  /**
   * Get all permissions for a user
   */
  getUserPermissions(user: UserContext): Permission[] {
    if (user.isSuperAdmin) return Object.values(PERMISSIONS);
    if (user.permissions) return user.permissions;

    const role = ROLES[user.role];
    return role ? [...role.permissions] : [];
  }

  /**
   * Check if user can escalate to higher role
   */
  canEscalateRole(currentUser: UserContext, targetRole: RoleName): boolean {
    if (!currentUser.isActive) return false;
    if (currentUser.isSuperAdmin) return true;

    const currentRole = ROLES[currentUser.role];
    const targetRoleData = ROLES[targetRole];

    // Can only escalate to roles at same or lower level
    return currentRole.level > targetRoleData.level;
  }

  /**
   * Generate audit log entry for permission check
   */
  generateAuditLog(
    user: UserContext,
    permission: Permission,
    resource: ResourceContext,
    granted: boolean,
    context?: Record<string, any>
  ) {
    return {
      timestamp: new Date().toISOString(),
      userId: user.id,
      userRole: user.role,
      organizationId: user.organizationId,
      permission,
      resourceType: resource.type,
      resourceId: resource.id,
      resourceOrganizationId: resource.organizationId,
      granted,
      context,
    };
  }

  /**
   * Validate role hierarchy consistency
   */
  validateRoleHierarchy(): boolean {
    const roleNames = Object.keys(ROLES) as RoleName[];
    
    for (let i = 0; i < roleNames.length; i++) {
      const lowerRole = ROLES[roleNames[i]];
      
      for (let j = i + 1; j < roleNames.length; j++) {
        const higherRole = ROLES[roleNames[j]];
        
        if (higherRole.level > lowerRole.level) {
          // Higher role should have at least all permissions of lower role
          const missingPermissions = lowerRole.permissions.filter(
            p => !(higherRole.permissions as Permission[]).includes(p)
          );
          
          if (missingPermissions.length > 0) {
            console.warn(`Role hierarchy violation: ${roleNames[j]} missing permissions:`, missingPermissions);
            return false;
          }
        }
      }
    }
    
    return true;
  }
}

// Export singleton
export const rbacManager = new RBACManager();

// Utility functions for common permission checks
export const hasPermission = (user: UserContext, permission: Permission): boolean => {
  return rbacManager.hasPermission(user, permission);
};

export const canAccessResource = (
  user: UserContext,
  permission: Permission,
  resource: ResourceContext
): boolean => {
  return rbacManager.canAccessResource(user, permission, resource);
};

export const getUserPermissions = (user: UserContext): Permission[] => {
  return rbacManager.getUserPermissions(user);
};

// React hook for permission checking
export function usePermission(user: UserContext, permission: Permission): boolean {
  return rbacManager.hasPermission(user, permission);
}

export function useResourceAccess(
  user: UserContext,
  permission: Permission,
  resource: ResourceContext
): boolean {
  return rbacManager.canAccessResource(user, permission, resource);
}

// Types and constants are already exported above
