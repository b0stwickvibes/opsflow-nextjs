export interface AuthUser {
  id: string;
  tenantId: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  tenant: {
    id: string;
    name: string;
    status: string;
    subscriptionTier: string;
  };
}

export async function getCurrentUser(): Promise<AuthUser | null> {
  return null;
}

export function hasRole(_user: AuthUser, _role: string): boolean {
  return false;
}

export async function canAccessLocation(
  _userId: string,
  _locationId: string
): Promise<boolean> {
  return false;
}

export async function getUserLocations(_userId: string) {
  return [];
}
