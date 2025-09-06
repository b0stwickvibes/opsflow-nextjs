// RBAC and security exports
export {
  PERMISSIONS,
  ROLES,
  RBACManager,
  rbacManager,
  hasPermission,
  canAccessResource,
  getUserPermissions,
  usePermission,
  useResourceAccess,
  type Permission,
  type RoleName,
  type Role,
  type UserContext,
  type ResourceContext,
} from './rbac';

// GDPR compliance exports
export {
  GDPR_PURPOSES,
  DATA_RETENTION_POLICIES,
  PERSONAL_DATA_CATEGORIES,
  GDPRManager,
  PrivacyUtils,
  useGDPRConsent,
  type GDPRPurpose,
  type ConsentRecord,
} from './gdpr';
