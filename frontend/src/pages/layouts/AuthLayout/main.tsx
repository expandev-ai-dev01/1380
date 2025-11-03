import { Outlet } from 'react-router-dom';

/**
 * @layout AuthLayout
 * @summary Layout for authentication pages
 * @domain core
 * @type layout-component
 * @category layout
 */
export const AuthLayout = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Sistema de Gestão de Pessoas</h1>
          <p className="mt-2 text-gray-600">Gerenciamento de colaboradores remotos</p>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
