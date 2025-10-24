# OpsFlow Development SOPs - Complete Guide

**⚡ Updated with Latest Achievements: Clerk Authentication + Professional Dashboard System**

---

## 🎯 **Quick Reference**

### **Daily Development Commands**
```bash
npm run dev                 # Frontend development
npm run dev:backend         # Backend API server
npm run dev:full           # Both frontend + backend
npm run setup-db           # Initialize PostgreSQL
```

### **Current Status: 90% Complete Enterprise Platform**
- ✅ **Clerk Authentication**: Multi-tenant organizations with role-based access
- ✅ **Professional Dashboards**: Admin, Manager, Team Member with fixed color system
- ✅ **Restaurant Operations**: HACCP compliance, temperature monitoring, staff management
- ✅ **Enterprise Architecture**: Multi-tenant database schema with Row Level Security

---

## 🏗️ **Architecture Standards**

### **Technology Stack (Locked)**
- **Frontend**: Next.js 15 + React 19 + TypeScript + Tailwind CSS
- **Authentication**: Clerk (enterprise-grade with organizations)
- **Backend**: Express.js + TypeScript + PostgreSQL with RLS
- **Styling**: OKLCH color system + custom design tokens
- **Deployment**: Vercel (frontend) + Railway/Render (backend)

### **File Organization Patterns**
```
components/
├── dashboard/              # Role-based dashboard system
├── auth/                   # Clerk authentication components
├── shared/                 # Reusable UI components
├── pages/                  # Page-specific components
└── ui/                     # Shadcn/UI base components

app/
├── dashboard/              # Protected dashboard routes
├── sign-in/                # Clerk authentication pages
├── onboarding/             # Organization setup flow
└── (public)/               # Public marketing pages
```

---

## 🎨 **Design System (Fixed Color Standards)**

### **Professional Metric Cards (CRITICAL - FIXED)**
```css
/* USE THESE - Professional 8% opacity backgrounds */
.dashboard-metric-task {
  background: rgba(59, 130, 246, 0.08) !important;
  border: 1px solid rgba(59, 130, 246, 0.15) !important;
  color: rgb(30, 64, 175) !important;
}

.dashboard-metric-team {
  background: rgba(34, 197, 94, 0.08) !important;
  color: rgb(21, 128, 61) !important;
}

.dashboard-metric-performance {
  background: rgba(6, 182, 212, 0.08) !important;
  color: rgb(14, 116, 144) !important;
}

/* NEVER USE - Garish saturated backgrounds */
.dashboard-metric-green { background: #dcfce7; } /* ❌ TOO BRIGHT */
.dashboard-metric-blue { background: #cffafe; }  /* ❌ TOO BRIGHT */
```

### **Core Design Token Classes**
```css
/* Layout & Structure */
.dashboard-container       /* Main dashboard wrapper */
.enterprise-card          /* Professional card backgrounds */
.content-container        /* Content width containers */

/* Typography Hierarchy */
.enterprise-headline      /* Main page headings */
.dashboard-text-primary   /* High contrast body text */
.dashboard-text-secondary /* Medium contrast supporting text */
.dashboard-text-muted     /* Low contrast helper text */
.metric-display-medium    /* Large metric numbers */

/* Interactive Elements */
.clerk-cta-primary        /* Primary action buttons */
.clerk-cta-ghost          /* Secondary action buttons */
.dashboard-badge-active   /* Live status indicators */
.dashboard-badge-live     /* Activity status badges */
```

### **Restaurant Operations Color Coding**
- **Task Metrics**: Subtle blue (kitchen prep, cleaning tasks)
- **Team Metrics**: Subtle green (staff status, scheduling)
- **Performance**: Subtle cyan (response times, efficiency)
- **Status/Compliance**: Subtle purple (HACCP, health inspections)
- **Progress**: Subtle orange (shift completion, training)

### **Marketing Playbook - Ambient/Glow Standards**

**RULE: 1 ambient/glow element maximum per section for professional appearance**

**Exceptions for Multi-Component Pages:**
- **Long-form pages** (industry solutions, product features) may have multiple ambient elements
- **Maximum 2 ambient elements** visible per viewport at any time
- **Spacing requirement**: Ambient elements must be separated by at least 1 full viewport height
- **Example**: Hero section with 1 ambient icon + Features section 2 viewports down with 1 ambient icon

**Approved Ambient Classes:**
```css
.hero-ambient              /* Hero sections only */
.icon-container-roi        /* Single featured metric/KPI */
.icon-badge-ambient        /* Hero badges only */
```

**Non-Ambient Alternatives (Use These Instead):**
```css
.enterprise-icon-primary   /* Clean icon containers */
.enterprise-icon-secondary /* Secondary icons */
.enterprise-icon-muted     /* Subtle icons */
.clerk-inspired-badge      /* Non-glowing badges */
```

---

## 🔐 **Authentication Implementation (Clerk)**

### **Organization Setup (CRITICAL)**
```typescript
// Required Clerk Dashboard Configuration:
// 1. Enable Organizations ✅
// 2. Create Roles: org:admin, org:manager, org:member ✅
// 3. Set redirect URLs: /dashboard, /onboarding ✅

// Role-based routing logic
switch (userRole) {
  case 'org:admin':
    return <AdminDashboard />;    // Organization overview
  case 'org:manager': 
    return <ManagerDashboard />;  // Team operations
  case 'org:member':
  default:
    return <TeamMemberDashboard />; // Personal tasks
}
```

### **Environment Configuration**
```bash
# .env.local (Required)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/opsflow_ai
```

---

## 🗄️ **Database Architecture (Multi-Tenant)**

### **Core Schema Pattern**
```sql
-- Tenant isolation with Row Level Security
CREATE TABLE tenants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  domain TEXT UNIQUE,
  settings JSONB DEFAULT '{}'
);

-- Organizations (restaurant chains)
CREATE TABLE organizations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID REFERENCES tenants(id),
  name TEXT NOT NULL,
  hierarchy_path LTREE
);

-- Enable Row Level Security for tenant isolation
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;
CREATE POLICY tenant_isolation ON organizations
  FOR ALL USING (tenant_id = current_setting('app.current_tenant')::UUID);
```

### **Restaurant Operations Tables**
- `tasks` - Kitchen prep, cleaning, inventory management
- `audits` - HACCP compliance, health inspection tracking
- `temperature_logs` - Food safety temperature monitoring
- `equipment` - Kitchen equipment maintenance tracking
- `user_profiles` - Extended Clerk user data with restaurant roles

---

## 🍽️ **Restaurant Operations Standards**

### **Core Feature Requirements**
1. **Temperature Monitoring**: HACCP compliance tracking with alerts
2. **Staff Management**: Shift scheduling, break tracking, performance
3. **Task Management**: Kitchen prep checklists, cleaning schedules, inventory
4. **Compliance Tracking**: Health inspection readiness, audit trails
5. **Equipment Management**: Maintenance schedules, status monitoring

### **Industry Terminology (Use Consistently)**
- **HACCP**: Hazard Analysis Critical Control Points
- **BOH/FOH**: Back-of-house / Front-of-house operations
- **Prep Tasks**: Food preparation checklists and procedures
- **Compliance Score**: Health inspection readiness percentage
- **Temperature Logs**: Food safety temperature monitoring records
- **Shift Management**: Staff scheduling and break coordination

### **Dashboard Context by Role**
- **Admin**: Organization metrics (24 locations, $2.4M revenue, 98.5% compliance)
- **Manager**: Daily operations (team status, response times, temperature monitoring)
- **Team Member**: Personal tasks (shift tracking, performance, training progress)

---

## 🔄 **Component Development Workflow**

### **Creating New Components**
1. **Start with TypeScript interface** - Define props and data structures
2. **Use OpsFlow design tokens** - Never hardcode colors or spacing
3. **Apply restaurant context** - Tasks, compliance, temperature, staff
4. **Test across dashboard roles** - Admin, Manager, Member experiences
5. **Ensure mobile responsiveness** - Test on phone and tablet sizes
6. **Implement proper accessibility** - ARIA labels, keyboard navigation

### **Styling Guidelines (CRITICAL)**
```typescript
// ✅ CORRECT - Use design tokens
<Card className="dashboard-metric-task enterprise-metric-card">
  <div className="metric-display-medium">24</div>
  <p className="dashboard-text-secondary">Tasks completed</p>
</Card>

// ❌ WRONG - Hardcoded colors
<Card style={{backgroundColor: '#cffafe', color: '#155e75'}}>
  <div style={{fontSize: '2rem', fontWeight: 'bold'}}>24</div>
</Card>
```

### **Restaurant Operations Integration**
```typescript
// ✅ CORRECT - Restaurant context
const temperatureStatus = {
  value: "Normal",
  range: "All within HACCP requirements",
  lastCheck: "2 minutes ago"
};

// ✅ CORRECT - Staff management context
const teamStatus = {
  present: 12,
  total: 14,
  onBreak: 2,
  positions: ["Kitchen Manager", "Prep Cook", "Server"]
};
```

---

## 🚀 **Development Priorities**

### **Phase 1: Backend Integration (This Week)**
1. **PostgreSQL Connection**: Connect real database to replace mock data
2. **API Endpoints**: Implement Express.js routes for all dashboard data
3. **Real-Time Updates**: WebSocket integration for live dashboard updates
4. **Authentication Flow**: Complete Clerk backend token verification

### **Phase 2: Advanced Features (Week 2-3)**
1. **AI Integration**: OpenAI for predictive task generation and insights
2. **Mobile App**: React Native app with offline sync capabilities
3. **IoT Integration**: Temperature sensor connectivity for real-time monitoring
4. **Advanced Analytics**: Recharts integration for performance dashboards

### **Phase 3: Enterprise Features (Month 2)**
1. **SSO Integration**: Enterprise customer authentication requirements
2. **Advanced Permissions**: Location-specific and granular role access
3. **White-Label Support**: Custom branding per organization/restaurant chain
4. **Advanced Reporting**: Custom dashboard exports and analytics

---

## 🎯 **Quality Standards**

### **Code Quality Requirements**
- ✅ **TypeScript**: Full type safety with proper interfaces
- ✅ **OpsFlow SOPs**: Design token compliance (8% opacity backgrounds)
- ✅ **Performance**: Sub-2 second dashboard load times
- ✅ **Accessibility**: WCAG 2.1 AA compliance with proper ARIA
- ✅ **Mobile**: Responsive design across all screen sizes

### **Business Requirements**
- ✅ **Multi-Tenant**: Complete organization isolation via Clerk + RLS
- ✅ **Role-Based**: Admin/Manager/Member distinct experiences
- ✅ **Restaurant Focus**: HACCP, temperature, staff management throughout
- ✅ **Enterprise UI**: Professional appearance rivaling Stripe/Linear
- ✅ **Scalable**: Architecture ready for 1M+ users, 10K+ locations

---

## 🧪 **Testing Standards**

### **Authentication Testing**
```bash
# Test role-based dashboard routing
# 1. Sign up as new user → Should redirect to onboarding
# 2. Create organization → Should assign admin role
# 3. Invite team member → Should assign member role
# 4. Switch between roles → Should show different dashboards
```

### **Dashboard Quality Checklist**
- [ ] All three dashboards render without errors
- [ ] Metric cards use professional color system (8% opacity)
- [ ] High contrast text for accessibility
- [ ] Mobile responsive on phone and tablet
- [ ] Restaurant operations context throughout
- [ ] Performance under 2 seconds

### **Professional Appearance Verification**
- [ ] No garish/saturated background colors
- [ ] Consistent typography and spacing
- [ ] Enterprise-grade polish and consistency
- [ ] Brand consistency across all dashboard roles
- [ ] Proper loading states and error handling

---

## 📊 **Success Metrics**

### **Technical Performance**
- **Scale**: Architecture ready for 1M+ users across 10K+ locations
- **Response Time**: Dashboard loads in under 2 seconds
- **Uptime**: 99.95% availability target with monitoring
- **Security**: Enterprise-grade with Clerk authentication + database RLS

### **Competitive Positioning**
- **vs JOLT**: Modern React stack vs legacy, AI features vs manual
- **vs Xenia**: Multi-tenant SaaS vs single-tenant, real-time vs batch
- **vs Toast**: Operations focus beyond POS, modern UX vs dated interface
- **Pricing**: $15-50/location/month competitive with value differentiation

---

## 🔧 **Troubleshooting Common Issues**

### **Color System Problems**
```css
/* PROBLEM: Metric cards look garish/unprofessional */
/* SOLUTION: Use 8% opacity backgrounds with high contrast text */
.dashboard-metric-* {
  background: rgba(color, 0.08) !important;  /* Subtle background */
  color: rgb(dark-color) !important;         /* High contrast text */
}
```

### **Authentication Issues**
```typescript
// PROBLEM: Role-based routing not working
// SOLUTION: Ensure Clerk organizations are enabled and roles are set
const { membership } = useOrganization();
const userRole = membership?.role; // Should be org:admin, org:manager, org:member
```

### **Mobile Responsiveness**
```css
/* PROBLEM: Dashboard not mobile-friendly */
/* SOLUTION: Use responsive grid classes */
.dashboard-grid-3 {
  grid-template-columns: repeat(1, 1fr);     /* Mobile: 1 column */
}
@media (md) {
  .dashboard-grid-3 {
    grid-template-columns: repeat(3, 1fr);   /* Desktop: 3 columns */
  }
}
```

---

**🏆 Result: Production-ready development standards that ensure enterprise-grade quality, professional appearance, and restaurant operations focus throughout the platform.**