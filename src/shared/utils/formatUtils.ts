/**
 * Utility functions for formatting values
 */

/**
 * Format a number as currency
 * @param value Number to format
 * @param currency Currency code (default: 'THB')
 * @param locale Locale for formatting (default: 'th-TH')
 */
export function formatCurrency(value: number, currency = 'THB', locale = 'th-TH'): string {
  if (typeof value !== 'number' || isNaN(value)) {
    return 'Invalid Amount';
  }
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value);
}

/**
 * Format a number with commas for thousands
 * @param value Number to format
 * @param decimalPlaces Number of decimal places (default: 0)
 */
export function formatNumber(value: number, decimalPlaces = 0): string {
  if (typeof value !== 'number' || isNaN(value)) {
    return 'Invalid Number';
  }

  return value.toLocaleString(undefined, {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  });
}

/**
 * Format a percentage value
 * @param value Number to format as percentage
 * @param decimalPlaces Number of decimal places (default: 2)
 */
export function formatPercent(value: number, decimalPlaces = 2): string {
  if (typeof value !== 'number' || isNaN(value)) {
    return 'Invalid Percentage';
  }

  return `${(value * 100).toFixed(decimalPlaces)}%`;
}

/**
 * Format a file size in bytes to a human-readable string
 * @param bytes File size in bytes
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}
