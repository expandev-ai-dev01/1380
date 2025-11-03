import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/core/lib/queryClient';
import { AppRouter } from './router';
import { AuthProvider } from '@/core/contexts/auth';

/**
 * @component App
 * @summary Root application component that provides global context and routing
 * @domain core
 * @type root-component
 * @category application
 *
 * @description
 * Wraps the entire application with necessary providers:
 * - QueryClientProvider for TanStack Query
 * - AuthProvider for authentication context
 * - AppRouter for routing configuration
 */
export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </QueryClientProvider>
  );
};
