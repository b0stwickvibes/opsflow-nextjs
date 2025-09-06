/**
 * Restaurant operations validation schemas
 * Validation for restaurant-specific data models
 */

import { z } from 'zod';

// Restaurant base schema
export const RestaurantSchema = z.object({
  id: z.string().uuid('Invalid restaurant ID'),
  name: z
    .string()
    .min(1, 'Restaurant name is required')
    .max(200, 'Restaurant name too long')
    .trim(),
  organizationId: z.string().uuid('Invalid organization ID'),
  address: z.object({
    street: z.string().min(1, 'Street address is required').max(200),
    city: z.string().min(1, 'City is required').max(100),
    state: z.string().min(2, 'State is required').max(50),
    zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code'),
    country: z.string().min(2, 'Country is required').max(50),
  }),
  contact: z.object({
    phone: z
      .string()
      .regex(/^\+?[\d\s\-\(\)]+$/, 'Invalid phone number')
      .max(20),
    email: z.string().email('Invalid email').max(254),
  }),
  settings: z.object({
    timezone: z.string().max(50),
    currency: z.enum(['USD', 'EUR', 'GBP', 'CAD']).default('USD'),
    temperatureUnit: z.enum(['F', 'C']).default('F'),
    operatingHours: z.array(
      z.object({
        day: z.enum(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']),
        open: z.string().regex(/^\d{2}:\d{2}$/, 'Invalid time format'),
        close: z.string().regex(/^\d{2}:\d{2}$/, 'Invalid time format'),
        isOpen: z.boolean(),
      })
    ),
  }),
  isActive: z.boolean().default(true),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// Temperature log schema (HACCP compliance)
export const TemperatureLogSchema = z.object({
  id: z.string().uuid().optional(),
  restaurantId: z.string().uuid('Invalid restaurant ID'),
  equipmentId: z.string().uuid('Invalid equipment ID'),
  temperature: z
    .number()
    .min(-50, 'Temperature too low')
    .max(200, 'Temperature too high'),
  unit: z.enum(['F', 'C']),
  location: z.string().min(1, 'Location is required').max(100),
  recordedBy: z.string().uuid('Invalid user ID'),
  recordedAt: z.date(),
  isWithinRange: z.boolean(),
  notes: z.string().max(500).optional(),
  correctionAction: z.string().max(500).optional(),
});

// Equipment schema
export const EquipmentSchema = z.object({
  id: z.string().uuid().optional(),
  restaurantId: z.string().uuid('Invalid restaurant ID'),
  name: z.string().min(1, 'Equipment name required').max(100),
  type: z.enum([
    'refrigerator',
    'freezer',
    'oven',
    'fryer',
    'grill',
    'dishwasher',
    'other'
  ]),
  manufacturer: z.string().max(100).optional(),
  model: z.string().max(100).optional(),
  serialNumber: z.string().max(100).optional(),
  location: z.string().max(100),
  temperatureRange: z.object({
    min: z.number(),
    max: z.number(),
    unit: z.enum(['F', 'C']),
  }).optional(),
  maintenanceSchedule: z.enum(['daily', 'weekly', 'monthly', 'quarterly']).optional(),
  isActive: z.boolean().default(true),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

// Inventory item schema
export const InventoryItemSchema = z.object({
  id: z.string().uuid().optional(),
  restaurantId: z.string().uuid('Invalid restaurant ID'),
  name: z.string().min(1, 'Item name required').max(100),
  category: z.enum([
    'protein',
    'vegetables',
    'dairy',
    'dry_goods',
    'beverages',
    'condiments',
    'cleaning_supplies',
    'other'
  ]),
  sku: z.string().max(50).optional(),
  currentQuantity: z.number().min(0, 'Quantity cannot be negative'),
  unit: z.enum(['lbs', 'oz', 'gallons', 'quarts', 'pieces', 'cases']),
  minimumStock: z.number().min(0),
  maximumStock: z.number().min(0),
  costPerUnit: z.number().min(0, 'Cost cannot be negative'),
  supplier: z.string().max(100).optional(),
  expirationDate: z.date().optional(),
  isActive: z.boolean().default(true),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
}).refine(data => data.maximumStock >= data.minimumStock, {
  message: 'Maximum stock must be greater than or equal to minimum stock',
  path: ['maximumStock'],
});

// Staff schedule schema
export const StaffScheduleSchema = z.object({
  id: z.string().uuid().optional(),
  restaurantId: z.string().uuid('Invalid restaurant ID'),
  userId: z.string().uuid('Invalid user ID'),
  date: z.date(),
  startTime: z.string().regex(/^\d{2}:\d{2}$/, 'Invalid time format'),
  endTime: z.string().regex(/^\d{2}:\d{2}$/, 'Invalid time format'),
  position: z.enum(['server', 'bartender', 'cook', 'dishwasher', 'host', 'manager']),
  isConfirmed: z.boolean().default(false),
  notes: z.string().max(500).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

// Compliance checklist schema
export const ComplianceChecklistSchema = z.object({
  id: z.string().uuid().optional(),
  restaurantId: z.string().uuid('Invalid restaurant ID'),
  type: z.enum(['opening', 'closing', 'health_inspection', 'fire_safety']),
  items: z.array(
    z.object({
      id: z.string(),
      description: z.string(),
      isCompleted: z.boolean(),
      completedBy: z.string().uuid().optional(),
      completedAt: z.date().optional(),
      notes: z.string().max(200).optional(),
    })
  ),
  completedBy: z.string().uuid('Invalid user ID'),
  completedAt: z.date(),
  overallCompliance: z.number().min(0).max(100),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

// Export type definitions
export type Restaurant = z.infer<typeof RestaurantSchema>;
export type TemperatureLog = z.infer<typeof TemperatureLogSchema>;
export type Equipment = z.infer<typeof EquipmentSchema>;
export type InventoryItem = z.infer<typeof InventoryItemSchema>;
export type StaffSchedule = z.infer<typeof StaffScheduleSchema>;
export type ComplianceChecklist = z.infer<typeof ComplianceChecklistSchema>;

// Validation helper functions
export const validateRestaurant = (data: unknown) => RestaurantSchema.safeParse(data);
export const validateTemperatureLog = (data: unknown) => TemperatureLogSchema.safeParse(data);
export const validateEquipment = (data: unknown) => EquipmentSchema.safeParse(data);
export const validateInventoryItem = (data: unknown) => InventoryItemSchema.safeParse(data);
export const validateStaffSchedule = (data: unknown) => StaffScheduleSchema.safeParse(data);
export const validateComplianceChecklist = (data: unknown) => ComplianceChecklistSchema.safeParse(data);

// Bulk validation for multiple records
export const validateTemperatureLogs = (data: unknown[]) => {
  return data.map((item, index) => ({
    index,
    result: validateTemperatureLog(item),
  }));
};

export const validateInventoryItems = (data: unknown[]) => {
  return data.map((item, index) => ({
    index,
    result: validateInventoryItem(item),
  }));
};
