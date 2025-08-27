// Custom React Hooks for Feature Management
// Reusable business logic for scalability

'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  fetchFeatureData,
  filterByPlan,
  trackEvent,
  isFeatureEnabled,
  searchFeatures,
  paginate
} from '@/lib/utils/features';
import type { 
  FeatureCategory, 
  AdvancedFeature, 
  RoleDemo, 
  RestaurantTemplate, 
  Integration 
} from '@/lib/data/features';

// Hook for managing feature data with caching
export function useFeatureData(userPlan: 'starter' | 'professional' | 'enterprise' = 'starter') {
  const [data, setData] = useState<{
    categories: FeatureCategory[];
    advanced: AdvancedFeature[];
    demos: RoleDemo[];
    templates: RestaurantTemplate[];
    integrations: Integration[];
  } | null>(null);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadData() {
      try {
        setLoading(true);
        setError(null);
        
        const result = await fetchFeatureData();
        
        if (!mounted) return;
        
        // Filter all data by user plan for monetization
        const filteredData = {
          categories: filterByPlan(result.categories, userPlan),
          advanced: result.advanced, // Advanced features don't have plan requirements
          demos: filterByPlan(result.demos, userPlan),
          templates: filterByPlan(result.templates, userPlan),
          integrations: filterByPlan(result.integrations, userPlan)
        };
        
        setData(filteredData);
        
        // Track data load for analytics
        trackEvent('FEATURE_VIEW', {
          data_loaded: true,
          plan: userPlan,
          categories_count: filteredData.categories.length,
          templates_count: filteredData.templates.length
        });
        
      } catch (err) {
        if (!mounted) return;
        setError(err instanceof Error ? err.message : 'Failed to load feature data');
        console.error('Feature data loading error:', err);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadData();

    return () => {
      mounted = false;
    };
  }, [userPlan]);

  return { data, loading, error };
}

// Hook for search functionality
export function useFeatureSearch<T extends FeatureCategory | AdvancedFeature | RestaurantTemplate>(
  items: T[],
  initialQuery = ''
) {
  const [query, setQuery] = useState(initialQuery);
  
  const filteredItems = useMemo(() => {
    return searchFeatures(items, query);
  }, [items, query]);

  const searchStats = useMemo(() => ({
    totalItems: items.length,
    filteredItems: filteredItems.length,
    hasQuery: query.trim().length > 0
  }), [items.length, filteredItems.length, query]);

  const clearSearch = useCallback(() => setQuery(''), []);

  // Track search events for analytics
  useEffect(() => {
    if (query.trim()) {
      const timeoutId = setTimeout(() => {
        trackEvent('FEATURE_VIEW', {
          search_query: query,
          results_count: filteredItems.length
        });
      }, 500); // Debounce search tracking

      return () => clearTimeout(timeoutId);
    }
  }, [query, filteredItems.length]);

  return {
    query,
    setQuery,
    filteredItems,
    searchStats,
    clearSearch
  };
}

// Hook for pagination
export function usePagination<T>(items: T[], itemsPerPage = 6) {
  const [currentPage, setCurrentPage] = useState(1);
  
  const paginatedData = useMemo(() => {
    return paginate(items, currentPage, itemsPerPage);
  }, [items, currentPage, itemsPerPage]);

  const goToPage = useCallback((page: number) => {
    if (page >= 1 && page <= paginatedData.totalPages) {
      setCurrentPage(page);
      // Track pagination for UX analytics
      trackEvent('FEATURE_VIEW', {
        page_changed: page,
        total_pages: paginatedData.totalPages
      });
    }
  }, [paginatedData.totalPages]);

  const nextPage = useCallback(() => {
    if (paginatedData.hasNextPage) {
      goToPage(currentPage + 1);
    }
  }, [currentPage, goToPage, paginatedData.hasNextPage]);

  const prevPage = useCallback(() => {
    if (paginatedData.hasPrevPage) {
      goToPage(currentPage - 1);
    }
  }, [currentPage, goToPage, paginatedData.hasPrevPage]);

  // Reset to page 1 when items change
  useEffect(() => {
    setCurrentPage(1);
  }, [items.length]);

  return {
    ...paginatedData,
    goToPage,
    nextPage,
    prevPage
  };
}

// Hook for role demo management
export function useRoleDemos() {
  const [activeRole, setActiveRole] = useState<string>('manager');
  const [animating, setAnimating] = useState(false);

  const switchRole = useCallback((roleId: string) => {
    if (roleId === activeRole) return;
    
    setAnimating(true);
    
    // Track role switch for analytics
    trackEvent('ROLE_SWITCHED', {
      from_role: activeRole,
      to_role: roleId
    });
    
    setTimeout(() => {
      setActiveRole(roleId);
      setAnimating(false);
    }, 150); // Short animation duration
  }, [activeRole]);

  return {
    activeRole,
    switchRole,
    animating
  };
}

// Hook for feature flag checking
export function useFeatureFlags(flags: string[], userPlan?: string) {
  const [enabledFlags, setEnabledFlags] = useState<Record<string, boolean>>({});
  
  useEffect(() => {
    const flagStates: Record<string, boolean> = {};
    
    for (const flag of flags) {
      flagStates[flag] = isFeatureEnabled(flag as any, userPlan);
    }
    
    setEnabledFlags(flagStates);
  }, [flags, userPlan]);

  return enabledFlags;
}

// Hook for analytics tracking with batching
export function useAnalytics() {
  const [eventQueue, setEventQueue] = useState<Array<{ event: string; properties: any }>>([]);

  const track = useCallback((event: string, properties?: any) => {
    const eventData = { event, properties: { ...properties, timestamp: Date.now() } };
    
    setEventQueue(prev => [...prev, eventData]);
    
    // Immediately track critical events
    const criticalEvents = ['CTA_CLICKED', 'DEMO_STARTED', 'TEMPLATE_DOWNLOADED'];
    if (criticalEvents.includes(event)) {
      trackEvent(event as any, properties);
    }
  }, []);

  // Batch flush non-critical events
  useEffect(() => {
    if (eventQueue.length === 0) return;

    const timeoutId = setTimeout(() => {
      eventQueue.forEach(({ event, properties }) => {
        trackEvent(event as any, properties);
      });
      setEventQueue([]);
    }, 2000); // Batch events every 2 seconds

    return () => clearTimeout(timeoutId);
  }, [eventQueue]);

  return { track };
}

// Hook for managing loading states
export function useAsyncOperation<T>() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  const execute = useCallback(async (operation: () => Promise<T>) => {
    try {
      setLoading(true);
      setError(null);
      const result = await operation();
      setData(result);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setLoading(false);
    setError(null);
    setData(null);
  }, []);

  return { loading, error, data, execute, reset };
}