/**
 * Apply small cross-browser fixes at app start.
 * - Sets --vh for iOS/Android viewport height quirks
 * - Adds a .is-webkit class for Safari/WebKit-specific CSS if needed
 */
export function applyBrowserFixes(): void {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  // 100vh fix via --vh variable
  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  setVh();
  window.addEventListener('resize', setVh, { passive: true });

  // Simple WebKit flag
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes('safari') || ua.includes('iphone') || ua.includes('ipad') || ua.includes('crios')) {
    document.documentElement.classList.add('is-webkit');
  }
}

// (optional helpers if you want them)
export const isSafari = () =>
  typeof navigator !== 'undefined' && /safari/i.test(navigator.userAgent) && !/chrome|crios|android/i.test(navigator.userAgent);
export const isMobile = () =>
  typeof navigator !== 'undefined' && /iphone|ipad|android/i.test(navigator.userAgent);
