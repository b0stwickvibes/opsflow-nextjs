// Product Features Data Types and Constants
// Centralized data management for scalability

export interface FeatureCategory {
  id: string;
  title: string;
  description: string;
  icon: string; // Icon name for dynamic imports
  features: string[];
  priority: 'high' | 'medium' | 'low';
  planRequirement?: 'starter' | 'professional' | 'enterprise';
}

export interface AdvancedFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  category: 'monitoring' | 'workflow' | 'compliance' | 'analytics';
}

export interface RoleDemo {
  id: string;
  role: string;
  icon: string;
  metrics: RoleMetric[];
  tasks: string[];
  planAccess: 'starter' | 'professional' | 'enterprise';
}

export interface RoleMetric {
  label: string;
  value: string;
  trend: string;
  type: 'currency' | 'percentage' | 'rating' | 'count';
}

export interface RestaurantTemplate {
  id: string;
  name: string;
  tasks: number;
  category: 'opening' | 'closing' | 'safety' | 'cleaning' | 'maintenance';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: number; // in minutes
  planRequirement?: 'starter' | 'professional' | 'enterprise';
}

export interface Integration {
  id: string;
  name: string;
  category: 'communication' | 'productivity' | 'crm' | 'technical';
  status: 'available' | 'beta' | 'coming-soon';
  planRequirement?: 'starter' | 'professional' | 'enterprise';
}

// Feature Categories Data
export const FEATURE_CATEGORIES: FeatureCategory[] = [
  {
    id: 'daily-tasks',
    title: 'Daily Tasks & Checklists',
    description: 'Custom checklist builder with templates, smart recurring task scheduling, and role-based assignment with mobile-first completion tracking.',
    icon: 'ClipboardList',
    priority: 'high',
    features: [
      'Custom checklist builder',
      'Smart recurring scheduling', 
      'Role-based assignment',
      'Mobile completion tracking',
      'Progress analytics',
      'Failed step corrections'
    ]
  },
  {
    id: 'food-safety',
    title: 'Food Safety & Compliance',
    description: 'Bluetooth temperature sensors, HACCP & FSMA workflows, automated incident reporting, and digital food safety audits.',
    icon: 'Shield',
    priority: 'high',
    planRequirement: 'professional',
    features: [
      'Bluetooth temperature sensors',
      'HACCP & FSMA compliance',
      'Automated incident reporting',
      'Digital safety audits',
      'Corrective action management',
      'Regulatory report generation'
    ]
  },
  {
    id: 'equipment-maintenance',
    title: 'Equipment & Maintenance',
    description: 'Preventive maintenance scheduling, mobile work orders, equipment performance tracking, and breakdown prediction analytics.',
    icon: 'Wrench',
    priority: 'medium',
    features: [
      'Preventive maintenance',
      'Mobile work orders',
      'Performance tracking',
      'Maintenance history',
      'Breakdown prediction',
      'Vendor management'
    ]
  },
  {
    id: 'analytics',
    title: 'Real-Time Analytics',
    description: 'Live dashboard metrics, custom report generation, performance trends, compliance scoring, and historical data insights.',
    icon: 'BarChart3',
    priority: 'high',
    planRequirement: 'professional',
    features: [
      'Real-time dashboards',
      'Custom reports',
      'Performance trends',
      'Compliance scoring',
      'PDF/Excel export',
      'Historical insights'
    ]
  },
  {
    id: 'communication',
    title: 'Team Communication',
    description: 'Real-time messaging, company announcements, team groups, smart notifications, and task-based communication with file sharing.',
    icon: 'MessageSquare',
    priority: 'medium',
    features: [
      'Real-time messaging',
      'Company announcements',
      'Team group creation',
      'Smart notifications',
      'Task communication',
      'File sharing'
    ]
  },
  {
    id: 'multi-location',
    title: 'Multi-Location Management',
    description: 'Unlimited workspaces, one-click location switching, centralized SOPs, cross-location analytics, and unified compliance reporting.',
    icon: 'Building2',
    priority: 'high',
    planRequirement: 'enterprise',
    features: [
      'Unlimited workspaces',
      'One-click switching',
      'Centralized SOPs',
      'Cross-location analytics',
      'Unified compliance',
      'Location customization'
    ]
  }
];

// Advanced Features Data
export const ADVANCED_FEATURES: AdvancedFeature[] = [
  {
    id: 'temperature-monitoring',
    title: 'Automated Temperature Monitoring',
    description: 'Record data from freezers, refrigerators, and food probes with continuous LoRaWAN sensors and Bluetooth integration.',
    icon: 'Thermometer',
    category: 'monitoring',
    features: ['Continuous monitoring', 'LoRaWAN sensors', 'Bluetooth integration', 'Automated workflows']
  },
  {
    id: 'work-orders',
    title: 'Smart Work Orders',
    description: 'Efficient assignment and tracking with mobile inspections, image attachments, in-task chat, and progress analysis.',
    icon: 'Wrench',
    category: 'workflow',
    features: ['Mobile inspections', 'Image attachments', 'In-task chat', 'Progress analysis']
  },
  {
    id: 'incident-management',
    title: 'Incident Management',
    description: 'Create reports from any device, automated corrective actions, instant notifications, and organized compliance reporting.',
    icon: 'AlertTriangle',
    category: 'compliance',
    features: ['Device flexibility', 'Automated actions', 'Instant notifications', 'Compliance reporting']
  },
  {
    id: 'compliance-audits',
    title: 'Compliance Audits',
    description: 'HACCP and FSMA compliance inspections with organized report export, failed inspection corrective actions, and historical documentation.',
    icon: 'FileText',
    category: 'compliance',
    features: ['HACCP & FSMA inspections', 'Report export', 'Corrective actions', 'Historical documentation']
  }
];

// Role Demo Data
export const ROLE_DEMOS: RoleDemo[] = [
  {
    id: 'manager',
    role: 'Manager',
    icon: 'Crown',
    planAccess: 'professional',
    metrics: [
      { label: 'Daily Revenue', value: '$4,247', trend: '+12%', type: 'currency' },
      { label: 'Food Cost %', value: '28.4%', trend: '-2.1%', type: 'percentage' },
      { label: 'Staff Utilization', value: '94%', trend: '+5%', type: 'percentage' },
      { label: 'Customer Reviews', value: '4.6/5', trend: '+0.2', type: 'rating' }
    ],
    tasks: ['P&L review', 'Schedule approvals', 'Feedback analysis', 'Budget planning']
  },
  {
    id: 'bartender',
    role: 'Bartender',
    icon: 'Wine',
    planAccess: 'starter',
    metrics: [
      { label: 'Bar Inventory', value: '87%', trend: 'stable', type: 'percentage' },
      { label: 'Drinks Served', value: '142', trend: '+8%', type: 'count' },
      { label: 'Customer Rating', value: '4.8/5', trend: '+0.1', type: 'rating' },
      { label: 'Tips Today', value: '$89', trend: '+15%', type: 'currency' }
    ],
    tasks: ['Stock bar', 'Menu specials', 'Glassware clean', 'Recipe updates']
  },
  {
    id: 'kitchen-staff',
    role: 'Kitchen Staff',
    icon: 'ChefHat',
    planAccess: 'starter',
    metrics: [
      { label: 'Orders Completed', value: '218', trend: '+6%', type: 'count' },
      { label: 'Temperature Checks', value: '24/24', trend: '100%', type: 'count' },
      { label: 'Prep Tasks', value: '16/18', trend: '89%', type: 'count' },
      { label: 'Quality Score', value: '9.2/10', trend: '+0.3', type: 'rating' }
    ],
    tasks: ['Morning prep', 'Fridge temps', 'Lunch specials', 'Inventory update']
  }
];

// Restaurant Templates Data  
export const RESTAURANT_TEMPLATES: RestaurantTemplate[] = [
  { id: 'opening', name: 'Opening Checklist', tasks: 23, category: 'opening', difficulty: 'beginner', estimatedTime: 30 },
  { id: 'closing', name: 'Closing Checklist', tasks: 31, category: 'closing', difficulty: 'beginner', estimatedTime: 45 },
  { id: 'food-safety', name: 'Food Safety Audit', tasks: 47, category: 'safety', difficulty: 'advanced', estimatedTime: 90, planRequirement: 'professional' },
  { id: 'deep-clean', name: 'Kitchen Deep Clean', tasks: 38, category: 'cleaning', difficulty: 'intermediate', estimatedTime: 120 },
  { id: 'incident', name: 'Incident Report', tasks: 15, category: 'safety', difficulty: 'intermediate', estimatedTime: 20 },
  { id: 'equipment', name: 'Equipment Inspection', tasks: 29, category: 'maintenance', difficulty: 'intermediate', estimatedTime: 60 }
];

// Integration Partners Data
export const INTEGRATION_PARTNERS: Integration[] = [
  { id: 'slack', name: 'Slack', category: 'communication', status: 'available' },
  { id: 'teams', name: 'Microsoft Teams', category: 'communication', status: 'available' },
  { id: 'google', name: 'Google Workspace', category: 'productivity', status: 'available' },
  { id: 'salesforce', name: 'Salesforce', category: 'crm', status: 'available', planRequirement: 'enterprise' },
  { id: 'hubspot', name: 'HubSpot', category: 'crm', status: 'available', planRequirement: 'professional' },
  { id: 'zapier', name: 'Zapier', category: 'technical', status: 'available' },
  { id: 'api', name: 'API Access', category: 'technical', status: 'available', planRequirement: 'professional' },
  { id: 'webhooks', name: 'Webhooks', category: 'technical', status: 'available', planRequirement: 'professional' },
  { id: 'sso', name: 'SSO', category: 'technical', status: 'available', planRequirement: 'enterprise' },
  { id: 'ldap', name: 'LDAP', category: 'technical', status: 'beta', planRequirement: 'enterprise' }
];

// Analytics and Feature Flag Support
export const ANALYTICS_EVENTS = {
  FEATURE_VIEW: 'feature_viewed',
  DEMO_STARTED: 'demo_started',
  TEMPLATE_DOWNLOADED: 'template_downloaded',
  ROLE_SWITCHED: 'role_demo_switched',
  CTA_CLICKED: 'cta_clicked'
} as const;

export const FEATURE_FLAGS = {
  ADVANCED_ANALYTICS: 'advanced_analytics',
  LOCATION_SECURITY: 'location_security',
  ROLE_DEMOS: 'role_demos',
  TEMPLATE_LIBRARY: 'template_library'
} as const;