/**
 * User validation schemas
 * Comprehensive user data validation for security and type safety
 */

import { z } from 'zod';

// Base user validation
export const UserSchema = z.object({
  id: z.string().uuid('Invalid user ID format'),
  email: z
    .string()
    .email('Invalid email format')
    .toLowerCase()
    .max(254, 'Email too long'),
  name: z
    .string()
    .min(1, 'Name is required')
    .max(100, 'Name too long')
    .trim(),
  role: z.enum(['owner', 'manager', 'supervisor', 'staff'], {
    required_error: 'Role is required',
    invalid_type_error: 'Invalid role',
  }),
  organizationId: z.string().uuid('Invalid organization ID'),
  isActive: z.boolean().default(true),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// User creation schema (no ID, timestamps auto-generated)
export const UserCreateSchema = z.object({
  email: z
    .string()
    .email('Invalid email format')
    .toLowerCase()
    .max(254, 'Email too long'),
  name: z
    .string()
    .min(1, 'Name is required')
    .max(100, 'Name too long')
    .trim(),
  role: z.enum(['owner', 'manager', 'supervisor', 'staff']),
  organizationId: z.string().uuid('Invalid organization ID'),
  isActive: z.boolean().optional().default(true),
});

// User update schema (all fields optional except ID)
export const UserUpdateSchema = z.object({
  id: z.string().uuid('Invalid user ID format'),
  email: z
    .string()
    .email('Invalid email format')
    .toLowerCase()
    .max(254, 'Email too long')
    .optional(),
  name: z
    .string()
    .min(1, 'Name is required')
    .max(100, 'Name too long')
    .trim()
    .optional(),
  role: z.enum(['owner', 'manager', 'supervisor', 'staff']).optional(),
  isActive: z.boolean().optional(),
});

// User authentication schemas
export const UserLoginSchema = z.object({
  email: z
    .string()
    .email('Invalid email format')
    .toLowerCase()
    .max(254, 'Email too long'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(128, 'Password too long'),
});

export const UserRegistrationSchema = z.object({
  email: z
    .string()
    .email('Invalid email format')
    .toLowerCase()
    .max(254, 'Email too long'),
  name: z
    .string()
    .min(1, 'Name is required')
    .max(100, 'Name too long')
    .trim(),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(128, 'Password too long')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Password must contain uppercase, lowercase, number, and special character'
    ),
  organizationName: z
    .string()
    .min(1, 'Organization name is required')
    .max(200, 'Organization name too long')
    .trim(),
  role: z.enum(['owner']).default('owner'), // Registration defaults to owner
});

// Password reset schemas
export const PasswordResetRequestSchema = z.object({
  email: z
    .string()
    .email('Invalid email format')
    .toLowerCase()
    .max(254, 'Email too long'),
});

export const PasswordResetConfirmSchema = z.object({
  token: z.string().min(1, 'Reset token is required'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(128, 'Password too long')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Password must contain uppercase, lowercase, number, and special character'
    ),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

// User profile update schema
export const UserProfileUpdateSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .max(100, 'Name too long')
    .trim()
    .optional(),
  email: z
    .string()
    .email('Invalid email format')
    .toLowerCase()
    .max(254, 'Email too long')
    .optional(),
  phone: z
    .string()
    .regex(/^\+?[\d\s\-\(\)]+$/, 'Invalid phone number format')
    .max(20, 'Phone number too long')
    .optional(),
  timezone: z
    .string()
    .max(50, 'Timezone too long')
    .optional(),
  preferredLanguage: z
    .enum(['en', 'es', 'fr'])
    .optional()
    .default('en'),
});

// User preferences schema
export const UserPreferencesSchema = z.object({
  notifications: z.object({
    email: z.boolean().default(true),
    sms: z.boolean().default(false),
    push: z.boolean().default(true),
    digestFrequency: z.enum(['daily', 'weekly', 'monthly']).default('daily'),
  }),
  dashboard: z.object({
    defaultView: z.enum(['overview', 'analytics', 'tasks']).default('overview'),
    compactMode: z.boolean().default(false),
    showTutorial: z.boolean().default(true),
  }),
  accessibility: z.object({
    highContrast: z.boolean().default(false),
    largeText: z.boolean().default(false),
    reducedMotion: z.boolean().default(false),
  }),
});

// Export type definitions
export type User = z.infer<typeof UserSchema>;
export type UserCreate = z.infer<typeof UserCreateSchema>;
export type UserUpdate = z.infer<typeof UserUpdateSchema>;
export type UserLogin = z.infer<typeof UserLoginSchema>;
export type UserRegistration = z.infer<typeof UserRegistrationSchema>;
export type PasswordResetRequest = z.infer<typeof PasswordResetRequestSchema>;
export type PasswordResetConfirm = z.infer<typeof PasswordResetConfirmSchema>;
export type UserProfileUpdate = z.infer<typeof UserProfileUpdateSchema>;
export type UserPreferences = z.infer<typeof UserPreferencesSchema>;

// Validation helper functions
export const validateUser = (data: unknown) => UserSchema.safeParse(data);
export const validateUserCreate = (data: unknown) => UserCreateSchema.safeParse(data);
export const validateUserUpdate = (data: unknown) => UserUpdateSchema.safeParse(data);
export const validateUserLogin = (data: unknown) => UserLoginSchema.safeParse(data);
export const validateUserRegistration = (data: unknown) => UserRegistrationSchema.safeParse(data);
export const validatePasswordReset = (data: unknown) => PasswordResetRequestSchema.safeParse(data);
export const validatePasswordResetConfirm = (data: unknown) => PasswordResetConfirmSchema.safeParse(data);
export const validateUserProfile = (data: unknown) => UserProfileUpdateSchema.safeParse(data);
export const validateUserPreferences = (data: unknown) => UserPreferencesSchema.safeParse(data);
