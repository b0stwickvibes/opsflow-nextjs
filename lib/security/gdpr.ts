/**
 * GDPR Compliance Infrastructure
 * Data protection, privacy rights, and consent management for EU compliance
 */

import { apiClient } from '@/lib/api';
import type { UserContext } from './rbac';

// GDPR data processing purposes
export const GDPR_PURPOSES = {
  ACCOUNT_MANAGEMENT: 'account_management',
  SERVICE_PROVISION: 'service_provision',
  LEGAL_COMPLIANCE: 'legal_compliance',
  LEGITIMATE_INTEREST: 'legitimate_interest',
  MARKETING: 'marketing',
  ANALYTICS: 'analytics',
  SECURITY: 'security',
} as const;

export type GDPRPurpose = typeof GDPR_PURPOSES[keyof typeof GDPR_PURPOSES];

// Consent status
export interface ConsentRecord {
  userId: string;
  purpose: GDPRPurpose;
  granted: boolean;
  timestamp: Date;
  ipAddress?: string;
  userAgent?: string;
  version: string; // Privacy policy version
}

// Data retention policies
export const DATA_RETENTION_POLICIES = {
  USER_ACCOUNTS: 365 * 7, // 7 years (business records)
  TEMPERATURE_LOGS: 365 * 3, // 3 years (HACCP requirement)
  AUDIT_LOGS: 365 * 7, // 7 years (legal requirement)
  ANALYTICS_DATA: 365 * 2, // 2 years
  MARKETING_DATA: 365 * 1, // 1 year (with consent)
  SESSION_DATA: 30, // 30 days
} as const;

// Personal data categories
export const PERSONAL_DATA_CATEGORIES = {
  IDENTITY: ['name', 'email', 'phone', 'address'],
  PROFESSIONAL: ['role', 'organization', 'title'],
  TECHNICAL: ['ipAddress', 'userAgent', 'sessionId'],
  BEHAVIORAL: ['pageViews', 'clickEvents', 'preferences'],
  BIOMETRIC: ['temperatureReadings'], // Restaurant specific
} as const;

// GDPR Manager class
export class GDPRManager {
  /**
   * Record user consent for specific purpose
   */
  static async recordConsent(
    userId: string,
    purpose: GDPRPurpose,
    granted: boolean,
    ipAddress?: string,
    userAgent?: string
  ): Promise<void> {
    const consentRecord: ConsentRecord = {
      userId,
      purpose,
      granted,
      timestamp: new Date(),
      ipAddress,
      userAgent,
      version: '1.0', // Current privacy policy version
    };

    await apiClient.post('/api/gdpr/consent', consentRecord);
  }

  /**
   * Get current consent status for user
   */
  static async getConsentStatus(userId: string): Promise<Record<GDPRPurpose, boolean>> {
    const response = await apiClient.get<Record<GDPRPurpose, boolean>>(`/api/gdpr/consent/${userId}`);
    return response.data;
  }

  /**
   * Generate personal data report for user (GDPR Article 15 - Right of Access)
   */
  static async generateDataReport(userId: string): Promise<{
    personalData: Record<string, any>;
    dataProcessing: Array<{
      purpose: string;
      legalBasis: string;
      dataCategories: string[];
      retentionPeriod: number;
    }>;
    thirdPartySharing: Array<{
      recipient: string;
      purpose: string;
      dataCategories: string[];
    }>;
    consentHistory: ConsentRecord[];
  }> {
    const response = await apiClient.get(`/api/gdpr/data-report/${userId}`);
    return response.data as {
      personalData: Record<string, any>;
      dataProcessing: Array<{
        purpose: string;
        legalBasis: string;
        dataCategories: string[];
        retentionPeriod: number;
      }>;
      thirdPartySharing: Array<{
        recipient: string;
        purpose: string;
        dataCategories: string[];
      }>;
      consentHistory: ConsentRecord[];
    };
  }

  /**
   * Anonymize user data while preserving business analytics
   */
  static async anonymizeUser(userId: string, reason: string): Promise<{
    anonymizedRecords: number;
    preservedRecords: number;
    anonymizationId: string;
  }> {
    const response = await apiClient.post(`/api/gdpr/anonymize/${userId}`, { reason });
    return response.data as {
      anonymizedRecords: number;
      preservedRecords: number;
      anonymizationId: string;
    };
  }

  /**
   * Delete user data completely (GDPR Article 17 - Right to Erasure)
   */
  static async deleteUserData(userId: string, reason: string): Promise<{
    deletedRecords: number;
    retainedRecords: Array<{
      table: string;
      reason: string;
      legalBasis: string;
    }>;
    deletionId: string;
  }> {
    const response = await apiClient.delete(`/api/gdpr/delete/${userId}?reason=${encodeURIComponent(reason)}`);
    return response.data as {
      deletedRecords: number;
      retainedRecords: Array<{
        table: string;
        reason: string;
        legalBasis: string;
      }>;
      deletionId: string;
    };
  }

  /**
   * Rectify (correct) user personal data (GDPR Article 16)
   */
  static async rectifyUserData(
    userId: string,
    corrections: Record<string, any>,
    requestedBy: string
  ): Promise<{
    correctedFields: string[];
    auditId: string;
  }> {
    const response = await apiClient.patch(`/api/gdpr/rectify/${userId}`, {
      corrections,
      requestedBy,
      timestamp: new Date().toISOString(),
    });
    return response.data as {
      correctedFields: string[];
      auditId: string;
    };
  }

  /**
   * Data portability - export user data in structured format (GDPR Article 20)
   */
  static async exportUserData(userId: string, format: 'json' | 'csv' | 'xml' = 'json'): Promise<{
    downloadUrl: string;
    expiresAt: Date;
    fileSize: number;
  }> {
    const response = await apiClient.post(`/api/gdpr/export/${userId}`, { format });
    return response.data as {
      downloadUrl: string;
      expiresAt: Date;
      fileSize: number;
    };
  }

  /**
   * Check if data processing is lawful under GDPR
   */
  static async validateProcessingLawfulness(
    userId: string,
    purpose: GDPRPurpose,
    dataCategories: string[]
  ): Promise<{
    lawful: boolean;
    legalBasis: 'consent' | 'contract' | 'legal_obligation' | 'vital_interests' | 'public_task' | 'legitimate_interests';
    consentRequired: boolean;
    hasConsent?: boolean;
    recommendations: string[];
  }> {
    // Business logic for determining lawfulness
    const consentStatus = await this.getConsentStatus(userId);
    
    let legalBasis: 'consent' | 'contract' | 'legal_obligation' | 'vital_interests' | 'public_task' | 'legitimate_interests';
    let consentRequired = false;
    
    switch (purpose) {
      case GDPR_PURPOSES.ACCOUNT_MANAGEMENT:
      case GDPR_PURPOSES.SERVICE_PROVISION:
        legalBasis = 'contract';
        break;
      
      case GDPR_PURPOSES.LEGAL_COMPLIANCE:
        legalBasis = 'legal_obligation';
        break;
      
      case GDPR_PURPOSES.SECURITY:
        legalBasis = 'legitimate_interests';
        break;
      
      case GDPR_PURPOSES.MARKETING:
      case GDPR_PURPOSES.ANALYTICS:
        legalBasis = 'consent';
        consentRequired = true;
        break;
      
      default:
        legalBasis = 'legitimate_interests';
    }

    const hasConsent = consentRequired ? consentStatus[purpose] : undefined;
    const lawful = consentRequired ? (hasConsent === true) : true;

    const recommendations: string[] = [];
    if (consentRequired && !hasConsent) {
      recommendations.push('Obtain explicit consent from user before processing');
    }
    if (purpose === GDPR_PURPOSES.MARKETING && !hasConsent) {
      recommendations.push('Cannot send marketing communications without consent');
    }

    return {
      lawful,
      legalBasis,
      consentRequired,
      hasConsent,
      recommendations,
    };
  }

  /**
   * Schedule data deletion based on retention policies
   */
  static async scheduleDataDeletion(
    dataType: keyof typeof DATA_RETENTION_POLICIES,
    recordId: string,
    createdAt: Date
  ): Promise<{
    scheduledDeletion: Date;
    retentionPeriodDays: number;
  }> {
    const retentionDays = DATA_RETENTION_POLICIES[dataType];
    const scheduledDeletion = new Date(createdAt);
    scheduledDeletion.setDate(scheduledDeletion.getDate() + retentionDays);

    // Schedule the deletion job (implementation would depend on your job queue system)
    await apiClient.post('/api/gdpr/schedule-deletion', {
      dataType,
      recordId,
      scheduledDeletion: scheduledDeletion.toISOString(),
    });

    return {
      scheduledDeletion,
      retentionPeriodDays: retentionDays,
    };
  }

  /**
   * Generate GDPR compliance report for auditors
   */
  static async generateComplianceReport(
    organizationId: string,
    startDate: Date,
    endDate: Date
  ): Promise<{
    summary: {
      totalUsers: number;
      consentGiven: number;
      consentWithdrawn: number;
      dataRequests: number;
      deletionRequests: number;
      exportRequests: number;
    };
    dataProcessingActivities: Array<{
      purpose: GDPRPurpose;
      legalBasis: string;
      dataCategories: string[];
      userCount: number;
      retentionPeriod: string;
    }>;
    riskAssessment: {
      highRiskProcessing: string[];
      mitigationMeasures: string[];
    };
    breachIncidents: Array<{
      date: Date;
      severity: 'low' | 'medium' | 'high';
      description: string;
      affectedUsers: number;
      reportedToAuthority: boolean;
    }>;
  }> {
    const response = await apiClient.get(`/api/gdpr/compliance-report/${organizationId}`, {
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
    });
    return response.data as {
      summary: {
        totalUsers: number;
        consentGiven: number;
        consentWithdrawn: number;
        dataRequests: number;
        deletionRequests: number;
        exportRequests: number;
      };
      dataProcessingActivities: Array<{
        purpose: GDPRPurpose;
        legalBasis: string;
        dataCategories: string[];
        userCount: number;
        retentionPeriod: string;
      }>;
      riskAssessment: {
        highRiskProcessing: string[];
        mitigationMeasures: string[];
      };
      breachIncidents: Array<{
        date: Date;
        severity: 'low' | 'medium' | 'high';
        description: string;
        affectedUsers: number;
        reportedToAuthority: boolean;
      }>;
    };
  }

  /**
   * Validate email for marketing consent (double opt-in)
   */
  static async validateMarketingConsent(
    email: string,
    token: string
  ): Promise<{
    valid: boolean;
    userId?: string;
    consentTimestamp?: Date;
  }> {
    const response = await apiClient.post('/api/gdpr/validate-marketing-consent', {
      email,
      token,
    });
    return response.data as {
      valid: boolean;
      userId?: string;
      consentTimestamp?: Date;
    };
  }

  /**
   * Handle consent withdrawal
   */
  static async withdrawConsent(
    userId: string,
    purpose: GDPRPurpose,
    reason?: string
  ): Promise<{
    withdrawn: boolean;
    dataProcessingStopped: boolean;
    affectedServices: string[];
  }> {
    await this.recordConsent(userId, purpose, false);
    
    const response = await apiClient.post('/api/gdpr/withdraw-consent', {
      userId,
      purpose,
      reason,
      timestamp: new Date().toISOString(),
    });
    
    return response.data as {
      withdrawn: boolean;
      dataProcessingStopped: boolean;
      affectedServices: string[];
    };
  }
}

// Privacy-preserving utility functions
export class PrivacyUtils {
  /**
   * Hash personal data for pseudonymization
   */
  static hashPersonalData(data: string, salt?: string): string {
    // Simple hash - in production, use proper cryptographic hashing
    const crypto = require('crypto');
    const hashSalt = salt || process.env.PRIVACY_HASH_SALT || 'default-salt';
    return crypto.createHash('sha256').update(data + hashSalt).digest('hex');
  }

  /**
   * Anonymize IP address (remove last octet)
   */
  static anonymizeIpAddress(ip: string): string {
    if (ip.includes(':')) {
      // IPv6 - remove last 2 segments
      return ip.split(':').slice(0, -2).join(':') + '::0:0';
    } else {
      // IPv4 - remove last octet
      return ip.split('.').slice(0, -1).join('.') + '.0';
    }
  }

  /**
   * Check if user is from EU (requires GDPR compliance)
   */
  static isEUUser(ipAddress: string): boolean {
    // This is a simplified check - in production, use proper IP geolocation
    // For now, assume all users need GDPR compliance
    return true;
  }

  /**
   * Mask sensitive data for logging
   */
  static maskSensitiveData(data: any): any {
    const sensitive = ['email', 'phone', 'address', 'ssn', 'creditCard'];
    const masked = { ...data };

    sensitive.forEach(field => {
      if (masked[field]) {
        const value = String(masked[field]);
        if (value.length > 4) {
          masked[field] = value.substring(0, 2) + '*'.repeat(value.length - 4) + value.substring(value.length - 2);
        } else {
          masked[field] = '*'.repeat(value.length);
        }
      }
    });

    return masked;
  }
}

// React hooks for GDPR compliance
export function useGDPRConsent(userId: string) {
  // This would be implemented as a React hook in a real application
  // For now, providing the interface
  return {
    consent: {} as Record<GDPRPurpose, boolean>,
    recordConsent: (purpose: GDPRPurpose, granted: boolean) => GDPRManager.recordConsent(userId, purpose, granted),
    withdrawConsent: (purpose: GDPRPurpose) => GDPRManager.withdrawConsent(userId, purpose),
    loading: false,
    error: null,
  };
}

// Types and constants are already exported above
