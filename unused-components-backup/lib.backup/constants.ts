// Application constants
export const APP_NAME = "OpsFlow AI";
export const APP_DESCRIPTION = "The only platform you need to streamline restaurant operations completely";
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://opsflow.ai";
export const APP_VERSION = "2.0.0";

// API Configuration
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "/api";
export const API_VERSION = "v1";
export const API_TIMEOUT = 30000; // 30 seconds

// Feature Flags
export const FEATURES = {
  ANALYTICS: process.env.NEXT_PUBLIC_FEATURE_ANALYTICS === "true",
  MONITORING: process.env.NEXT_PUBLIC_FEATURE_MONITORING === "true",
  A11Y_FEATURES: process.env.NEXT_PUBLIC_FEATURE_A11Y === "true",
  BETA_FEATURES: process.env.NEXT_PUBLIC_BETA_FEATURES === "true",
} as const;

// Navigation
export const NAVIGATION_ITEMS = {
  MAIN: [
    { label: "Home", href: "/" },
    { label: "Product", href: "/product" },
    { label: "Solutions", href: "/solutions" },
    { label: "Developers", href: "/docs" },
    { label: "Support", href: "/support" },
    { label: "Pricing", href: "/pricing" },
  ],
  FOOTER: [
    { label: "About", href: "/company/about" },
    { label: "Careers", href: "/company/careers" },
    { label: "Contact", href: "/company/contact" },
    { label: "Privacy", href: "/legal/privacy" },
    { label: "Terms", href: "/legal/terms" },
  ],
} as const;

// Breakpoints (matches Tailwind)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

// Animation Durations
export const ANIMATIONS = {
  fast: "0.15s",
  normal: "0.2s",
  slow: "0.3s",
  slower: "0.5s",
} as const;

// Component Sizes
export const SIZES = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
} as const;

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  GENERIC: "Something went wrong. Please try again.",
  NETWORK: "Network error. Please check your connection.",
  UNAUTHORIZED: "You must be logged in to access this resource.",
  FORBIDDEN: "You don't have permission to access this resource.",
  NOT_FOUND: "The requested resource was not found.",
  VALIDATION: "Please check your input and try again.",
  RATE_LIMIT: "Too many requests. Please try again later.",
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  SAVED: "Changes saved successfully!",
  CREATED: "Item created successfully!",
  UPDATED: "Item updated successfully!",
  DELETED: "Item deleted successfully!",
  SENT: "Message sent successfully!",
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  THEME: "opsflow_theme",
  USER_PREFERENCES: "opsflow_user_preferences",
  AUTH_TOKEN: "opsflow_auth_token",
  ONBOARDING: "opsflow_onboarding_complete",
} as const;

// Cookie Names
export const COOKIES = {
  CONSENT: "opsflow_cookie_consent",
  ANALYTICS: "opsflow_analytics_consent",
  PERFORMANCE: "opsflow_performance_consent",
} as const;

// Regex Patterns
export const PATTERNS = {
  EMAIL: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  PHONE: /^[\+]?[1-9][\d]{0,15}$/,
  URL: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
} as const;