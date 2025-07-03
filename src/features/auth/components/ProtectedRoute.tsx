import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store.ts';
import type { JSX } from 'react';

export function ProtectedRoute({ component }: { component: JSX.Element }) {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);

  if (!isAuthenticated && !localStorage.getItem('auth_token')) {
    return <Navigate to="/login" replace />;
  }
  return component;
}
