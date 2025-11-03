import { useState, useEffect, ReactNode } from 'react';
import { AuthContext } from './context';
import { publicClient } from '@/core/lib/api';
import type { User, AuthContextValue, AuthResponse } from './types';

/**
 * @component AuthProvider
 * @summary Provides authentication context to the application
 * @domain core
 * @type context-provider
 * @category authentication
 */
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const token = localStorage.getItem('auth_token');
        if (token) {
          const response = await publicClient.get('/auth/validate');
          setUser(response.data.user);
          setIsAuthenticated(true);
        }
      } catch (error: unknown) {
        localStorage.removeItem('auth_token');
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await publicClient.post<AuthResponse>('/auth/login', { email, password });
      const { user: userData, token } = response.data;
      localStorage.setItem('auth_token', token);
      setUser(userData);
      setIsAuthenticated(true);
      return userData;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await publicClient.post('/auth/logout');
    } finally {
      localStorage.removeItem('auth_token');
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  const value: AuthContextValue = {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
