import { API_BASE_URL, API_TIMEOUT, HTTP_STATUS } from '@/lib/constants';
import type { ApiResponse, ApiError as ApiErrorType } from '@/types/api';

interface RequestConfig {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: any;
  timeout?: number;
  retries?: number;
}

class ApiClient {
  private baseURL: string;
  private defaultHeaders: Record<string, string>;
  private authToken?: string;

  constructor() {
    this.baseURL = API_BASE_URL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
  }

  setAuthToken(token: string) {
    this.authToken = token;
  }

  removeAuthToken() {
    this.authToken = undefined;
  }

  private getHeaders(customHeaders?: Record<string, string>): Record<string, string> {
    const headers = { ...this.defaultHeaders, ...customHeaders };
    
    if (this.authToken) {
      headers.Authorization = `Bearer ${this.authToken}`;
    }
    
    return headers;
  }

  private async makeRequest<T>(
    endpoint: string,
    config: RequestConfig = {}
  ): Promise<ApiResponse<T>> {
    const {
      method = 'GET',
      headers: customHeaders,
      body,
      timeout = API_TIMEOUT,
      retries = 3,
    } = config;

    const url = `${this.baseURL}${endpoint}`;
    const headers = this.getHeaders(customHeaders);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const requestConfig: RequestInit = {
        method,
        headers,
        signal: controller.signal,
      };

      if (body && method !== 'GET') {
        if (body instanceof FormData) {
          // Remove content-type header for FormData
          delete headers['Content-Type'];
          requestConfig.body = body;
        } else {
          requestConfig.body = JSON.stringify(body);
        }
      }

      const response = await fetch(url, requestConfig);
      clearTimeout(timeoutId);

      let data: any;
      const contentType = response.headers.get('content-type');
      
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      const apiResponse: ApiResponse<T> = {
        success: response.ok,
        data: data.data || data,
        error: data.error,
        message: data.message,
        status: response.status,
        timestamp: new Date().toISOString(),
      };

      if (!response.ok) {
        throw new ApiError(
          apiResponse.error || `HTTP ${response.status}`,
          response.status,
          apiResponse
        );
      }

      return apiResponse;
    } catch (error) {
      clearTimeout(timeoutId);
      
      if (error instanceof ApiError) {
        throw error;
      }

      // Handle network errors and timeouts
      if (error instanceof TypeError && error.message.includes('fetch')) {
        throw new ApiError('Network error', 0);
      }

      if (error && typeof error === 'object' && 'name' in error && error.name === 'AbortError') {
        throw new ApiError('Request timeout', 0);
      }

      // Retry logic for network errors
      if (retries > 0) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second
        return this.makeRequest(endpoint, { ...config, retries: retries - 1 });
      }

      throw new ApiError('Unknown error occurred', 0);
    }
  }

  async get<T>(endpoint: string, config?: Omit<RequestConfig, 'method' | 'body'>): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(endpoint, { ...config, method: 'GET' });
  }

  async post<T>(endpoint: string, body?: any, config?: Omit<RequestConfig, 'method'>): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(endpoint, { ...config, method: 'POST', body });
  }

  async put<T>(endpoint: string, body?: any, config?: Omit<RequestConfig, 'method'>): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(endpoint, { ...config, method: 'PUT', body });
  }

  async delete<T>(endpoint: string, config?: Omit<RequestConfig, 'method' | 'body'>): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(endpoint, { ...config, method: 'DELETE' });
  }

  async patch<T>(endpoint: string, body?: any, config?: Omit<RequestConfig, 'method'>): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(endpoint, { ...config, method: 'PATCH', body });
  }
}

class ApiError extends Error {
  public status: number;
  public response?: ApiResponse;

  constructor(message: string, status: number, response?: ApiResponse) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.response = response;
  }
}

// Create and export singleton instance
export const apiClient = new ApiClient();

// Export error class
export { ApiError };

// Utility functions
export function isApiError(error: any): error is ApiError {
  return error instanceof ApiError;
}

export function handleApiError(error: unknown): string {
  if (isApiError(error)) {
    switch (error.status) {
      case HTTP_STATUS.BAD_REQUEST:
        return error.message || 'Invalid request. Please check your input.';
      case HTTP_STATUS.UNAUTHORIZED:
        return 'You must be logged in to access this resource.';
      case HTTP_STATUS.FORBIDDEN:
        return "You don't have permission to access this resource.";
      case HTTP_STATUS.NOT_FOUND:
        return 'The requested resource was not found.';
      case HTTP_STATUS.INTERNAL_SERVER_ERROR:
        return 'Internal server error. Please try again later.';
      case HTTP_STATUS.SERVICE_UNAVAILABLE:
        return 'Service temporarily unavailable. Please try again later.';
      case 0:
        return 'Network error. Please check your internet connection.';
      default:
        return error.message || 'An unexpected error occurred.';
    }
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'An unexpected error occurred.';
}