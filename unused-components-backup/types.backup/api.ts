// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  status: number;
  timestamp: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Error Types
export interface ApiError {
  code: string;
  message: string;
  field?: string;
  details?: any;
}

export interface ValidationError extends ApiError {
  field: string;
  value?: any;
}

// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: UserRole;
  status: UserStatus;
  createdAt: string;
  updatedAt: string;
  lastLoginAt?: string;
  preferences: UserPreferences;
}

export type UserRole = 'admin' | 'manager' | 'staff' | 'viewer';
export type UserStatus = 'active' | 'inactive' | 'suspended' | 'pending';

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: string;
  timezone: string;
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
}

// Restaurant Types
export interface Restaurant {
  id: string;
  name: string;
  type: RestaurantType;
  status: RestaurantStatus;
  address: Address;
  contact: Contact;
  settings: RestaurantSettings;
  createdAt: string;
  updatedAt: string;
}

export type RestaurantType = 'restaurant' | 'coffee_shop' | 'hotel' | 'bar' | 'fast_food' | 'other';
export type RestaurantStatus = 'active' | 'inactive' | 'setup' | 'trial' | 'suspended';

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Contact {
  phone: string;
  email: string;
  website?: string;
}

export interface RestaurantSettings {
  timezone: string;
  currency: string;
  language: string;
  haccp: HaccpSettings;
  alerts: AlertSettings;
}

// HACCP Types
export interface HaccpSettings {
  enabled: boolean;
  temperatureUnit: 'celsius' | 'fahrenheit';
  criticalLimits: {
    hotHolding: number;
    coldStorage: number;
    freezer: number;
    cooking: number;
  };
  monitoringInterval: number; // minutes
  alertThresholds: {
    warning: number;
    critical: number;
  };
}

// Alert Types
export interface AlertSettings {
  email: boolean;
  sms: boolean;
  push: boolean;
  channels: string[];
}

export interface Alert {
  id: string;
  type: AlertType;
  severity: AlertSeverity;
  title: string;
  message: string;
  source: string;
  metadata: Record<string, any>;
  acknowledged: boolean;
  acknowledgedBy?: string;
  acknowledgedAt?: string;
  resolvedAt?: string;
  createdAt: string;
}

export type AlertType = 'temperature' | 'equipment' | 'staff' | 'compliance' | 'system';
export type AlertSeverity = 'low' | 'medium' | 'high' | 'critical';

// Sensor Types
export interface TemperatureSensor {
  id: string;
  name: string;
  location: string;
  type: SensorType;
  status: SensorStatus;
  batteryLevel?: number;
  lastReading?: TemperatureReading;
  calibration: SensorCalibration;
  createdAt: string;
  updatedAt: string;
}

export type SensorType = 'wireless' | 'wired' | 'probe' | 'ambient';
export type SensorStatus = 'online' | 'offline' | 'error' | 'maintenance';

export interface TemperatureReading {
  id: string;
  sensorId: string;
  temperature: number;
  humidity?: number;
  timestamp: string;
  isAlert: boolean;
  metadata?: Record<string, any>;
}

export interface SensorCalibration {
  lastCalibratedAt: string;
  calibratedBy: string;
  offset: number;
  accuracy: number;
}

// Task Types
export interface Task {
  id: string;
  title: string;
  description?: string;
  type: TaskType;
  priority: TaskPriority;
  status: TaskStatus;
  assignedTo?: string;
  dueDate?: string;
  completedAt?: string;
  completedBy?: string;
  estimatedDuration?: number; // minutes
  actualDuration?: number; // minutes
  checklist?: TaskChecklistItem[];
  attachments?: Attachment[];
  createdAt: string;
  updatedAt: string;
}

export type TaskType = 'cleaning' | 'maintenance' | 'inventory' | 'compliance' | 'training' | 'other';
export type TaskPriority = 'low' | 'medium' | 'high' | 'urgent';
export type TaskStatus = 'pending' | 'in_progress' | 'completed' | 'overdue' | 'cancelled';

export interface TaskChecklistItem {
  id: string;
  text: string;
  completed: boolean;
  completedAt?: string;
  completedBy?: string;
}

export interface Attachment {
  id: string;
  name: string;
  type: string;
  size: number;
  url: string;
  uploadedAt: string;
  uploadedBy: string;
}

// Analytics Types
export interface AnalyticsData {
  period: AnalyticsPeriod;
  metrics: AnalyticsMetric[];
  insights: AnalyticsInsight[];
  trends: AnalyticsTrend[];
}

export type AnalyticsPeriod = 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';

export interface AnalyticsMetric {
  key: string;
  label: string;
  value: number;
  unit?: string;
  change?: number;
  changePercent?: number;
  trend: 'up' | 'down' | 'stable';
}

export interface AnalyticsInsight {
  type: 'positive' | 'negative' | 'neutral';
  title: string;
  description: string;
  impact: 'low' | 'medium' | 'high';
  actionable: boolean;
  actions?: string[];
}

export interface AnalyticsTrend {
  label: string;
  data: { timestamp: string; value: number }[];
  color?: string;
}

// Subscription Types
export interface Subscription {
  id: string;
  plan: SubscriptionPlan;
  status: SubscriptionStatus;
  startDate: string;
  endDate?: string;
  trialEndsAt?: string;
  cancelledAt?: string;
  features: string[];
  usage: SubscriptionUsage;
  billing: BillingInfo;
}

export type SubscriptionPlan = 'starter' | 'professional' | 'enterprise';
export type SubscriptionStatus = 'active' | 'trialing' | 'past_due' | 'cancelled' | 'unpaid';

export interface SubscriptionUsage {
  sensors: { current: number; limit: number };
  users: { current: number; limit: number };
  locations: { current: number; limit: number };
  apiCalls: { current: number; limit: number };
}

export interface BillingInfo {
  amount: number;
  currency: string;
  interval: 'monthly' | 'yearly';
  nextBillingDate?: string;
  paymentMethod: PaymentMethod;
}

export interface PaymentMethod {
  type: 'card' | 'bank' | 'paypal';
  last4?: string;
  brand?: string;
  expiryMonth?: number;
  expiryYear?: number;
}