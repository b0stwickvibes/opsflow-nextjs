/**
 * OpsFlow Dashboard Components
 * 
 * Role-based dashboard system following OpsFlow SOPs
 * Uses OKLCH tokens, enterprise styling, and restaurant operations context
 */

export { DashboardRouter } from "./DashboardRouter";
export { AdminDashboard } from "./AdminDashboard";
export { ManagerDashboard } from "./ManagerDashboard";
export { TeamMemberDashboard } from "./TeamMemberDashboard";

// Widget exports
export { OrganizationOverview } from "./widgets/OrganizationOverview";
export { ComplianceStatus } from "./widgets/ComplianceStatus";
export { SystemAlerts } from "./widgets/SystemAlerts";
export { QuickActions } from "./widgets/QuickActions";
export { MyTasks } from "./widgets/MyTasks";

// Placeholder widgets (can be replaced with real implementations)
export {
  TeamPerformance,
  RevenueMetrics,
  TodaysTasks,
  TeamStatus,
  ShiftSchedule,
  PerformanceMetrics,
  UrgentAlerts,
  MySchedule,
  TrainingProgress,
  Announcements,
  PersonalMetrics
} from "./widgets/PlaceholderWidgets";