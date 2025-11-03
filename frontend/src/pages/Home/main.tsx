import { Link } from 'react-router-dom';

/**
 * @page HomePage
 * @summary Landing page for the application
 * @domain core
 * @type landing-page
 * @category public
 */
export const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="text-center">
        <h1 className="mb-4 text-5xl font-bold text-gray-900">Sistema de Gestão de Pessoas</h1>
        <p className="mb-8 text-xl text-gray-600">
          Gerenciamento completo de colaboradores em home office
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/auth/login"
            className="rounded-md bg-primary-600 px-6 py-3 text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Acessar Sistema
          </Link>
          <Link
            to="/dashboard"
            className="rounded-md border border-gray-300 bg-white px-6 py-3 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Dashboard
          </Link>
        </div>
      </div>
      <div className="mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-2 text-lg font-semibold text-gray-900">Gestão de Colaboradores</h3>
          <p className="text-gray-600">
            Cadastro completo e gerenciamento de informações dos colaboradores remotos
          </p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-2 text-lg font-semibold text-gray-900">Controle de Jornada</h3>
          <p className="text-gray-600">
            Monitoramento de horários e gestão de banco de horas para trabalho remoto
          </p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-2 text-lg font-semibold text-gray-900">Dashboard de Produtividade</h3>
          <p className="text-gray-600">
            Métricas e indicadores de desempenho individual e coletivo
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
