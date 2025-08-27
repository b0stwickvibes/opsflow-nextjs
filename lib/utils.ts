import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));
export const isExternalUrl = (href: string) => /^https?:\/\//.test(href);
export const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));
export function slugify(input: string) {
  return input.toLowerCase().trim().replace(/[\s\W-]+/g, "-").replace(/^-+|-+$/g, "");
}
