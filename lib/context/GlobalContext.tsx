'use client';

import { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';

// Types for scalable restaurant operations state
interface User {
  id: string;
  email: string;
  name: string;
  organizationId: string;
  role: 'owner' | 'manager' | 'staff';
  permissions: string[];
  subscription?: {
    plan: 'starter' | 'professional' | 'enterprise';
    status: 'active' | 'canceled' | 'past_due';
    billingCycle: 'monthly' | 'annual';
    expiresAt: string;
  };
}

interface Organization {
  id: string;
  name: string;
  industry: 'restaurant' | 'bar' | 'coffee' | 'hotel';
  locations: number;
  employees: number;
  settings: {
    timezone: string;
    currency: 'USD' | 'EUR' | 'CAD';
    temperatureUnit: 'celsius' | 'fahrenheit';
    features: string[];
  };
}

interface GlobalState {
  user: User | null;
  organization: Organization | null;
  isLoading: boolean;
  error: string | null;
  preferences: {
    theme: 'light' | 'dark' | 'system';
    language: string;
    pricingView: 'monthly' | 'annual';
    experimentId?: string;
  };
  featureFlags: Record<string, boolean>;
}

type GlobalAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'SET_ORGANIZATION'; payload: Organization | null }
  | { type: 'UPDATE_PREFERENCES'; payload: Partial<GlobalState['preferences']> }
  | { type: 'SET_FEATURE_FLAGS'; payload: Record<string, boolean> }
  | { type: 'RESET_STATE' };

const initialState: GlobalState = {
  user: null,
  organization: null,
  isLoading: false,
  error: null,
  preferences: {
    theme: 'system',
    language: 'en',
    pricingView: 'annual'
  },
  featureFlags: {}
};

function globalReducer(state: GlobalState, action: GlobalAction): GlobalState {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload, error: action.payload ? null : state.error };
    
    case 'SET_ERROR':
      return { ...state, error: action.payload, isLoading: false };
    
    case 'SET_USER':
      return { ...state, user: action.payload };
    
    case 'SET_ORGANIZATION':
      return { ...state, organization: action.payload };
    
    case 'UPDATE_PREFERENCES':
      return { 
        ...state, 
        preferences: { ...state.preferences, ...action.payload }
      };
    
    case 'SET_FEATURE_FLAGS':
      return { ...state, featureFlags: action.payload };
    
    case 'RESET_STATE':
      return initialState;
    
    default:
      return state;
  }
}

// Context creation
const GlobalContext = createContext<{
  state: GlobalState;
  dispatch: React.Dispatch<GlobalAction>;
  actions: {
    setUser: (user: User | null) => void;
    setOrganization: (org: Organization | null) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    updatePreferences: (prefs: Partial<GlobalState['preferences']>) => void;
    logout: () => void;
  };
} | null>(null);

// Provider component for scalability
export function GlobalProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  // Actions for clean API
  const actions = {
    setUser: (user: User | null) => dispatch({ type: 'SET_USER', payload: user }),
    setOrganization: (org: Organization | null) => dispatch({ type: 'SET_ORGANIZATION', payload: org }),
    setLoading: (loading: boolean) => dispatch({ type: 'SET_LOADING', payload: loading }),
    setError: (error: string | null) => dispatch({ type: 'SET_ERROR', payload: error }),
    updatePreferences: (prefs: Partial<GlobalState['preferences']>) => 
      dispatch({ type: 'UPDATE_PREFERENCES', payload: prefs }),
    logout: () => dispatch({ type: 'RESET_STATE' })
  };

  // Persist preferences to localStorage for UX
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('opsflow-preferences');
      if (saved) {
        try {
          const prefs = JSON.parse(saved);
          dispatch({ type: 'UPDATE_PREFERENCES', payload: prefs });
        } catch (e) {
          console.warn('Failed to parse saved preferences');
        }
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('opsflow-preferences', JSON.stringify(state.preferences));
    }
  }, [state.preferences]);

  return (
    <GlobalContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </GlobalContext.Provider>
  );
}

// Hook for consuming context
export function useGlobalState() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalState must be used within GlobalProvider');
  }
  return context;
}

// Specialized hooks for specific use cases
export function useUser() {
  const { state } = useGlobalState();
  return state.user;
}

export function useOrganization() {
  const { state } = useGlobalState();
  return state.organization;
}

export function useFeatureFlag(flag: string): boolean {
  const { state } = useGlobalState();
  return state.featureFlags[flag] ?? false;
}