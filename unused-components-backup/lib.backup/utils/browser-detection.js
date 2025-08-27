'use client';

// Detect browser information
export function detectBrowser() {
  if (typeof window === 'undefined') {
    return {
      browser: 'unknown',
      version: 'unknown',
      os: 'unknown',
      cssSupport: {
        oklch: false,
        customProperties: false,
        grid: false,
        flexbox: false,
        backdropFilter: false
      }
    };
  }

  // Browser detection
  const userAgent = window.navigator.userAgent;
  let browser = 'unknown';
  let version = 'unknown';
  let os = 'unknown';

  // Detect OS
  if (userAgent.indexOf('Win') !== -1) os = 'Windows';
  else if (userAgent.indexOf('Mac') !== -1) os = 'MacOS';
  else if (userAgent.indexOf('Linux') !== -1) os = 'Linux';
  else if (userAgent.indexOf('Android') !== -1) os = 'Android';
  else if (userAgent.indexOf('iOS') !== -1 || userAgent.indexOf('iPhone') !== -1 || userAgent.indexOf('iPad') !== -1) os = 'iOS';

  // Detect browser and version
  if (userAgent.indexOf('Firefox') !== -1) {
    browser = 'Firefox';
    version = userAgent.match(/Firefox\/([0-9.]+)/)[1];
  } else if (userAgent.indexOf('Edge') !== -1 || userAgent.indexOf('Edg') !== -1) {
    browser = 'Edge';
    version = userAgent.match(/Edge?\/([0-9.]+)/)[1];
  } else if (userAgent.indexOf('Chrome') !== -1) {
    browser = 'Chrome';
    version = userAgent.match(/Chrome\/([0-9.]+)/)[1];
  } else if (userAgent.indexOf('Safari') !== -1) {
    browser = 'Safari';
    version = userAgent.match(/Version\/([0-9.]+)/)?.[1] || 'unknown';
  } else if (userAgent.indexOf('MSIE') !== -1 || userAgent.indexOf('Trident') !== -1) {
    browser = 'Internet Explorer';
    version = userAgent.match(/(?:MSIE |rv:)([0-9.]+)/)[1];
  }

  // Detect CSS feature support
  const cssSupport = {
    oklch: testCSSSupport('color: oklch(0 0 0)'),
    customProperties: testCSSSupport('--test: 0'),
    grid: testCSSSupport('display: grid'),
    flexbox: testCSSSupport('display: flex'),
    backdropFilter: testCSSSupport('backdrop-filter: blur(10px)')
  };

  return {
    browser,
    version,
    os,
    cssSupport
  };
}

// Helper function to test CSS support
function testCSSSupport(propertyAndValue) {
  if (typeof document === 'undefined') return false;
  
  const element = document.createElement('div');
  
  // Extract property name before the colon
  const property = propertyAndValue.split(':')[0].trim();
  
  // Extract value after the colon, if present
  const value = propertyAndValue.includes(':') 
    ? propertyAndValue.split(':')[1].trim() 
    : '';
  
  // Handle CSS custom property case
  if (property.startsWith('--')) {
    try {
      element.style.setProperty(property, '0');
      return !!element.style.length;
    } catch (e) {
      return false;
    }
  }
  
  // Handle standard CSS property case
  if (property in element.style) {
    try {
      element.style[property] = value;
      return !!element.style[property];
    } catch (e) {
      return false;
    }
  }
  
  return false;
}

// Apply browser-specific fixes
export function applyBrowserFixes() {
  if (typeof window === 'undefined') return;
  
  const { browser, version, cssSupport } = detectBrowser();
  
  // Add browser info classes to the html element
  document.documentElement.classList.add(`browser-${browser.toLowerCase()}`);
  document.documentElement.classList.add(`os-${detectBrowser().os.toLowerCase()}`);
  
  // Add CSS support flags
  for (const [feature, supported] of Object.entries(cssSupport)) {
    if (supported) {
      document.documentElement.classList.add(`supports-${feature}`);
    } else {
      document.documentElement.classList.add(`no-${feature}`);
    }
  }
  
  // Apply specific fixes based on browser detection
  if (browser === 'Safari' && parseFloat(version) < 14) {
    // Add Safari < 14 fallbacks for CSS variables
    document.documentElement.classList.add('legacy-safari');
  }
  
  if (!cssSupport.oklch) {
    // Add fallbacks for browsers that don't support OKLCH colors
    document.documentElement.classList.add('no-oklch');
  }
}