"use client";

import * as React from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    
    // Set initial state
    setMatches(media.matches);

    // Define listener function
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add the listener
    media.addEventListener('change', listener);

    // Cleanup function
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}