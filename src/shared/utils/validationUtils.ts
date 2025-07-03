/**
 * Utility functions for validations
 */

/**
 * Check if an email address is valid
 * @param email Email address to validate
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Check if a password meets complexity requirements
 * @param password Password to validate
 */
export function isValidPassword(password: string): boolean {
  // At least 8 characters, one uppercase, one lowercase, one number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
}

/**
 * Check if a phone number is valid
 * @param phone Phone number to validate
 */
export function isValidPhone(phone: string): boolean {
  // Regex for Thai phone numbers: starts with 0 or +66, followed by 8 or 9 digits
  const thaiPhoneRegex = /^(?:\+66|0)\d{8,9}$/;
  return thaiPhoneRegex.test(phone.replace(/[\s-]/g, ''));
}

/**
 * Check if a string is empty or whitespace only
 * @param str String to check
 */
export function isEmpty(str: string | null | undefined): boolean {
  return !str || str.trim() === '';
}

/**
 * Validate that a value is between min and max (inclusive)
 * @param value Value to check
 * @param min Minimum allowed value
 * @param max Maximum allowed value
 */
export function isInRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
}
