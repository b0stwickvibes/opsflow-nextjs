// Lightweight, side-effect-free registration helper.
// Safe on server & client. No dependencies. Tree-shakeable.

export type ComponentFamily =
  | "marketing"
  | "product" 
  | "site"
  | "restaurant"
  | "contact"
  | "pricing";

export function registerComponentLayout(
  componentName: string,
  family: ComponentFamily
) {
  // Only log in development to avoid noise in prod.
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug(`[layout] ${componentName} → ${family}`);
  }
}