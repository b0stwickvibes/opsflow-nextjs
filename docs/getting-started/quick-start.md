---
title: "Quick Start Guide"
description: "Get up and running with OpsFlow in minutes. This guide walks you through account setup, basic configuration, and your first integration."
---

# Quick Start Guide

This guide will help you get OpsFlow up and running in under 5 minutes. By the end, you'll have a working installation and understand the core concepts.

{% callout type="info" title="Prerequisites" %}
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Admin access to your restaurant systems
- Basic understanding of REST APIs (for integrations)
{% /callout %}

## Step 1: Account Setup {#account-setup}

### Create Your Account

1. Visit [opsflow.com/signup](https://opsflow.com/signup)
2. Enter your business email and create a secure password
3. Verify your email address
4. Complete the organization setup form

```bash
# Alternative: Create account via CLI
npx opsflow-cli signup --email="your-email@company.com"
```

### Configure Your Organization

After email verification, you'll be prompted to set up your organization:

- **Organization Name**: Your company or restaurant group name
- **Industry**: Select "Restaurant & Food Service"
- **Location Count**: Number of locations you operate
- **Primary Use Case**: Choose your main operational focus

{% callout type="success" title="Pro Tip" %}
Use your company domain email for easier team member invitations later.
{% /callout %}

## Step 2: Dashboard Overview

Once logged in, you'll see the main OpsFlow dashboard with these key sections:

### Navigation Structure

```
├── Operations Dashboard    # Real-time operational metrics
├── Analytics & Reports     # Performance insights and trends
├── Integrations           # Connect external systems
├── Team Management        # User access and permissions
└── Settings              # Account and system configuration
```

### Key Metrics Panel

Your dashboard displays critical operational metrics:

- **Daily Revenue**: Real-time sales tracking
- **Order Volume**: Order count and average order value
- **Staff Efficiency**: Labor cost ratios and productivity
- **Customer Satisfaction**: Review scores and feedback

## Step 3: First Integration

Let's connect your POS system to start seeing real-time data:

### Supported POS Systems

{% card title="Toast POS" href="/docs/integrations/third-party#toast" %}
Popular cloud-based POS with comprehensive API support
{% /card %}

{% card title="Square POS" href="/docs/integrations/third-party#square" %}
All-in-one payment and POS solution with robust integrations
{% /card %}

{% card title="Clover POS" href="/docs/integrations/third-party#clover" %}
Flexible POS platform with extensive app ecosystem
{% /card %}

### Quick Integration Setup

1. Navigate to **Integrations** → **Add Integration**
2. Select your POS system from the list
3. Follow the authentication flow
4. Configure data sync preferences

```javascript
// Example: Webhook endpoint for real-time data
POST /api/webhooks/pos-data
{
  "event": "order_completed",
  "data": {
    "order_id": "ord_1234567890",
    "total": 45.99,
    "timestamp": "2024-01-15T14:30:00Z"
  }
}
```

## Step 4: Monitor Operations

With your POS connected, you can now:

### View Real-time Metrics

- **Live Order Feed**: See orders as they come in
- **Revenue Tracking**: Monitor sales throughout the day
- **Performance Alerts**: Get notified of issues or opportunities

### Set Up Alerts

{% code-block language="json" title="Example Alert Configuration" %}
{
  "alert_name": "Low Inventory Warning",
  "condition": "inventory_level < 10",
  "notification_channels": ["email", "slack"],
  "frequency": "immediate"
}
{% /code-block %}

## Step 5: Invite Your Team

Add team members to collaborate:

1. Go to **Team Management** → **Invite Members**
2. Enter email addresses and assign roles:
   - **Admin**: Full system access
   - **Manager**: Operations and reporting access
   - **Staff**: Limited dashboard access

```bash
# Bulk invite via CLI
opsflow team invite \
  --emails="manager@company.com,staff@company.com" \
  --role="manager"
```

## Common Next Steps

Now that you're set up, explore these features:

### Advanced Analytics

{% callout type="info" title="Analytics Deep Dive" %}
[Explore advanced reporting features](/docs/analytics/reports) to gain deeper insights into your operations.
{% /callout %}

### Automation Workflows

Set up automated processes for:
- **Inventory Management**: Auto-reorder low-stock items
- **Staff Scheduling**: Optimize labor based on forecasted demand
- **Customer Communications**: Automated feedback requests

### API Integration

For custom integrations, explore our REST API:

```bash
# Get started with API authentication
curl -X POST https://api.opsflow.com/auth \
  -H "Content-Type: application/json" \
  -d '{"api_key": "your-api-key"}'
```

## Troubleshooting

### Common Issues

**Integration not syncing data?**
- Check API credentials in Settings → Integrations
- Verify webhook endpoints are accessible
- Review integration logs for error messages

**Dashboard showing no data?**
- Confirm your POS integration is active
- Check data sync settings
- Contact support if issues persist

{% callout type="warning" title="Need Help?" %}
If you encounter any issues, our support team is available 24/7:
- Email: [support@opsflow.com](mailto:support@opsflow.com)
- Live Chat: Available in the app
- Phone: 1-800-OPSFLOW
{% /callout %}

## What's Next?

- [Complete Installation Guide](/docs/getting-started/installation) - Deploy in your environment
- [API Documentation](/docs/api/authentication) - Build custom integrations  
- [Operations Guide](/docs/operations/dashboard) - Master the platform
- [Best Practices](/docs/operations/monitoring) - Optimize your setup
