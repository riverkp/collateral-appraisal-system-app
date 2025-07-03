import { useState, useEffect } from 'react';

type MediaQueryObject = {
  [key: string]: string | number | boolean;
};

type MediaQueryInput = string | MediaQueryObject;

/**
 * Convert a media query object to a string
 */
function mediaQueryObjectToString(query: MediaQueryObject): string {
  return Object.entries(query)
    .map(([feature, value]) => {
      if (typeof value === 'boolean') {
        return value ? feature : `not ${feature}`;
      }
      return `(${feature}: ${value})`;
    })
    .join(' and ');
}

/**
 * Custom hook for responsive design using media queries
 * @param query Media query string or object
 */
export function useMediaQuery(query: MediaQueryInput): boolean {
  // Convert query object to string if needed
  const queryString = typeof query === 'string' ? query : mediaQueryObjectToString(query);

  const [matches, setMatches] = useState(() => {
    // Set initial value (SSR safe)
    if (typeof window !== 'undefined') {
      return window.matchMedia(queryString).matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const mediaQuery = window.matchMedia(queryString);
    const updateMatches = () => setMatches(mediaQuery.matches);

    // Set up listeners
    updateMatches();

    // Use addEventListener/removeEventListener for modern browsers
    mediaQuery.addEventListener('change', updateMatches);

    return () => {
      mediaQuery.removeEventListener('change', updateMatches);
    };
  }, [queryString]);

  return matches;
}

// Common media query breakpoints
export const breakpoints = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
};

/**
 * Helper hooks for common breakpoints
 */
export const useIsMobile = () => !useMediaQuery(breakpoints.md);
export const useIsTablet = () => useMediaQuery(breakpoints.md) && !useMediaQuery(breakpoints.lg);
export const useIsDesktop = () => useMediaQuery(breakpoints.lg);
