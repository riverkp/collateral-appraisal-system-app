/**
 * Application configuration variables and utilities
 */

// API URL for the backend
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

// Application environment
export const IS_PRODUCTION = import.meta.env.PROD;
export const IS_DEVELOPMENT = import.meta.env.DEV;

// Feature flags
export const FEATURES = {
  enableNotifications: true,
  enableDarkMode: false,
  // Add more feature flags as needed
};

// App version
export const APP_VERSION = '0.1.0';
