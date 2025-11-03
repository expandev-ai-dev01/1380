/**
 * @types AuthContextTypes
 * @summary Type definitions for authentication context
 * @domain core
 * @category authentication
 */

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  permissions?: string[];
}

export interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<User>;
  logout: () => Promise<void>;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}
