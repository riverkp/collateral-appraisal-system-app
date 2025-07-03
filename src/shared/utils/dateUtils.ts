/**
 * Utility functions for handling common date operations
 */

/**
 * Format a date to a string using specified format
 * @param date Date to format
 * @param format Format string (default: 'yyyy-MM-dd')
 */
export function formatDate(date: Date | string | number, format = 'yyyy-MM-dd'): string {
  const d = typeof date === 'object' ? date : new Date(date);

  if (isNaN(d.getTime())) {
    return 'Invalid Date';
  }

  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');

  let result = format;
  result = result.replace('yyyy', String(year));
  result = result.replace('MM', month);
  result = result.replace('dd', day);

  if (format.includes('HH') || format.includes('mm') || format.includes('ss')) {
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const seconds = String(d.getSeconds()).padStart(2, '0');

    result = result.replace('HH', hours);
    result = result.replace('mm', minutes);
    result = result.replace('ss', seconds);
  }

  return result;
}

/**
 * Add specified number of days to a date
 * @param date Original date
 * @param days Number of days to add
 */
export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

/**
 * Check if a date is today
 * @param date Date to check
 */
export function isToday(date: Date): boolean {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

/**
 * Get relative time string (e.g., "2 days ago", "in 3 hours")
 * @param date Date to get relative time for
 */
export function getRelativeTimeString(date: Date | string | number): string {
  const d = typeof date === 'object' ? date : new Date(date);
  const now = new Date();
  const diffMs = d.getTime() - now.getTime();
  const diffSec = Math.round(diffMs / 1000);
  const diffMin = Math.round(diffSec / 60);
  const diffHour = Math.round(diffMin / 60);
  const diffDay = Math.round(diffHour / 24);

  if (diffDay > 0) {
    return diffDay === 1 ? 'in 1 day' : `in ${diffDay} days`;
  } else if (diffDay < 0) {
    return diffDay === -1 ? '1 day ago' : `${-diffDay} days ago`;
  } else if (diffHour > 0) {
    return diffHour === 1 ? 'in 1 hour' : `in ${diffHour} hours`;
  } else if (diffHour < 0) {
    return diffHour === -1 ? '1 hour ago' : `${-diffHour} hours ago`;
  } else if (diffMin > 0) {
    return diffMin === 1 ? 'in 1 minute' : `in ${diffMin} minutes`;
  } else if (diffMin < 0) {
    return diffMin === -1 ? '1 minute ago' : `${-diffMin} minutes ago`;
  } else {
    return 'just now';
  }
}
