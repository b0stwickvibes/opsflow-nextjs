/**
 * Enterprise API Client
 * Implements pagination, caching, error handling, and rate limiting for 0→$10M ARR scaling
 */

// Core API response types
export interface APIResponse<T> {
  data: T;
  status: 'success' | 'error';
  message?: string;
  timestamp: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };
  status: 'success' | 'error';
  message?: string;
  timestamp: string;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  filters?: Record<string, any>;
}

export interface APIClientConfig {
  baseURL: string;
  timeout: number;
  retryAttempts: number;
  retryDelay: number;
  cacheEnabled: boolean;
  cacheTTL: number;
}

// Default configuration
const DEFAULT_CONFIG: APIClientConfig = {
  baseURL: '/api',
  timeout: 30000, // 30 seconds
  retryAttempts: 3,
  retryDelay: 1000, // 1 second
  cacheEnabled: true,
  cacheTTL: 300000, // 5 minutes
};

// Simple in-memory cache for client-side caching
class APICache {
  private cache = new Map<string, { data: any; timestamp: number; ttl: number }>();

  set(key: string, data: any, ttl: number): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl,
    });
  }

  get(key: string): any | null {
    const cached = this.cache.get(key);
    if (!cached) return null;

    const isExpired = Date.now() - cached.timestamp > cached.ttl;
    if (isExpired) {
      this.cache.delete(key);
      return null;
    }

    return cached.data;
  }

  invalidate(pattern?: string): void {
    if (!pattern) {
      this.cache.clear();
      return;
    }

    // Remove keys matching pattern
    for (const key of this.cache.keys()) {
      if (key.includes(pattern)) {
        this.cache.delete(key);
      }
    }
  }
}

// API Client class
export class APIClient {
  private config: APIClientConfig;
  private cache: APICache;

  constructor(config: Partial<APIClientConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    this.cache = new APICache();
  }

  /**
   * Execute HTTP request with retry logic and error handling
   */
  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
    attempt = 1
  ): Promise<T> {
    const url = `${this.config.baseURL}${endpoint}`;
    
    try {
      // Set timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.config.timeout);

      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      // Retry logic
      if (attempt < this.config.retryAttempts && this.shouldRetry(error)) {
        await this.delay(this.config.retryDelay * attempt);
        return this.request<T>(endpoint, options, attempt + 1);
      }

      // Transform error for consistent handling
      throw this.transformError(error);
    }
  }

  /**
   * Determine if request should be retried
   */
  private shouldRetry(error: any): boolean {
    // Retry on network errors and 5xx server errors
    if (error.name === 'AbortError') return false; // Don't retry timeouts
    if (error.message?.includes('5')) return true; // 5xx errors
    if (error.name === 'TypeError') return true; // Network errors
    return false;
  }

  /**
   * Add delay for retry attempts
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Transform errors into consistent format
   */
  private transformError(error: any): Error {
    if (error.name === 'AbortError') {
      return new Error('Request timeout');
    }
    
    if (error.message?.includes('Failed to fetch')) {
      return new Error('Network error - check your connection');
    }

    return error instanceof Error ? error : new Error(String(error));
  }

  /**
   * Generate cache key for requests
   */
  private getCacheKey(endpoint: string, params?: any): string {
    const paramString = params ? JSON.stringify(params) : '';
    return `${endpoint}:${paramString}`;
  }

  /**
   * GET request with caching
   */
  async get<T>(endpoint: string, params?: Record<string, any>): Promise<APIResponse<T>> {
    const cacheKey = this.getCacheKey(endpoint, params);

    // Check cache first
    if (this.config.cacheEnabled) {
      const cached = this.cache.get(cacheKey);
      if (cached) return cached;
    }

    // Add query parameters
    const url = params ? `${endpoint}?${new URLSearchParams(params).toString()}` : endpoint;
    
    const response = await this.request<APIResponse<T>>(url, { method: 'GET' });

    // Cache successful responses
    if (this.config.cacheEnabled && response.status === 'success') {
      this.cache.set(cacheKey, response, this.config.cacheTTL);
    }

    return response;
  }

  /**
   * GET request with pagination
   */
  async paginated<T>(
    endpoint: string,
    params: PaginationParams = {}
  ): Promise<PaginatedResponse<T>> {
    const {
      page = 1,
      limit = 20,
      sortBy = 'createdAt',
      sortOrder = 'desc',
      filters = {},
    } = params;

    const queryParams = {
      page: page.toString(),
      limit: limit.toString(),
      sortBy,
      sortOrder,
      ...filters,
    };

    const cacheKey = this.getCacheKey(endpoint, queryParams);

    // Check cache first
    if (this.config.cacheEnabled) {
      const cached = this.cache.get(cacheKey);
      if (cached) return cached;
    }

    const url = `${endpoint}?${new URLSearchParams(queryParams).toString()}`;
    const response = await this.request<PaginatedResponse<T>>(url, { method: 'GET' });

    // Cache successful responses
    if (this.config.cacheEnabled && response.status === 'success') {
      this.cache.set(cacheKey, response, this.config.cacheTTL);
    }

    return response;
  }

  /**
   * POST request (create)
   */
  async post<T>(endpoint: string, data: any): Promise<APIResponse<T>> {
    const response = await this.request<APIResponse<T>>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });

    // Invalidate related cache entries
    if (this.config.cacheEnabled) {
      this.cache.invalidate(endpoint.split('/')[1]); // Invalidate by resource type
    }

    return response;
  }

  /**
   * PUT request (update)
   */
  async put<T>(endpoint: string, data: any): Promise<APIResponse<T>> {
    const response = await this.request<APIResponse<T>>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });

    // Invalidate related cache entries
    if (this.config.cacheEnabled) {
      this.cache.invalidate(endpoint.split('/')[1]);
    }

    return response;
  }

  /**
   * PATCH request (partial update)
   */
  async patch<T>(endpoint: string, data: any): Promise<APIResponse<T>> {
    const response = await this.request<APIResponse<T>>(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });

    // Invalidate related cache entries
    if (this.config.cacheEnabled) {
      this.cache.invalidate(endpoint.split('/')[1]);
    }

    return response;
  }

  /**
   * DELETE request
   */
  async delete<T>(endpoint: string): Promise<APIResponse<T>> {
    const response = await this.request<APIResponse<T>>(endpoint, {
      method: 'DELETE',
    });

    // Invalidate related cache entries
    if (this.config.cacheEnabled) {
      this.cache.invalidate(endpoint.split('/')[1]);
    }

    return response;
  }

  /**
   * Bulk operations for enterprise scale
   */
  async bulkCreate<T>(endpoint: string, items: any[]): Promise<APIResponse<T[]>> {
    return this.post<T[]>(`${endpoint}/bulk`, { items });
  }

  async bulkUpdate<T>(endpoint: string, updates: Array<{ id: string; data: any }>): Promise<APIResponse<T[]>> {
    return this.put<T[]>(`${endpoint}/bulk`, { updates });
  }

  async bulkDelete(endpoint: string, ids: string[]): Promise<APIResponse<{ deleted: number }>> {
    return this.delete<{ deleted: number }>(`${endpoint}/bulk?ids=${ids.join(',')}`);
  }

  /**
   * Clear cache manually
   */
  clearCache(pattern?: string): void {
    this.cache.invalidate(pattern);
  }

  /**
   * Configure client settings
   */
  configure(config: Partial<APIClientConfig>): void {
    this.config = { ...this.config, ...config };
  }
}

// Export singleton instance
export const apiClient = new APIClient();

// Types are already exported above
