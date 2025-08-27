// 'use client' ensures this can be imported from client components safely
'use client';
import * as React from "react";

export type Toast = {
  id?: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: "default" | "destructive" | string;
};
export type ToastActionElement = React.ReactNode;

type ToastAPI = {
  toasts: Toast[];
  toast: (t: Omit<Toast, "id">) => void;
  dismiss: (id?: string) => void;
};

// Lightweight context (you can replace with your real implementation later)
const ToastContext = React.createContext<ToastAPI | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  const toast = React.useCallback<ToastAPI["toast"]>((t) => {
    const id = (typeof crypto !== "undefined" && crypto.randomUUID?.()) || String(Date.now());
    setToasts((s) => [...s, { id, ...t }]);
  }, []);

  const dismiss = React.useCallback<ToastAPI["dismiss"]>((id) => {
    if (!id) return setToasts([]);
    setToasts((s) => s.filter((x) => x.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, toast, dismiss }}>
      {children}
    </ToastContext.Provider>
  );
}

// Hook used by pages/components
export function useToast(): ToastAPI {
  const ctx = React.useContext(ToastContext);
  if (!ctx) {
    // Return a safe no-op API so builds don’t crash outside a provider
    const noop = () => {};
    return { toasts: [], toast: noop as ToastAPI["toast"], dismiss: noop as ToastAPI["dismiss"] };
  }
  return ctx;
}

// Imperative convenience (optional)
export const toast: ToastAPI["toast"] = (...args) => {
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("[toast]", ...args);
  }
};
