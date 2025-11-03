/**
 * @page DashboardPage
 * @summary Main dashboard page with overview metrics
 * @domain core
 * @type dashboard-page
 * @category management
 */
export const DashboardPage = () => {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold text-gray-900">Dashboard</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="text-sm font-medium text-gray-500">Total de Colaboradores</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900">0</p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="text-sm font-medium text-gray-500">Ativos Hoje</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900">0</p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="text-sm font-medium text-gray-500">Tarefas Pendentes</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900">0</p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="text-sm font-medium text-gray-500">Chamados Abertos</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900">0</p>
        </div>
      </div>

      <div className="mt-8 rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">Bem-vindo ao Sistema</h2>
        <p className="text-gray-600">
          Este é o painel principal do Sistema de Gestão de Pessoas. Aqui você terá acesso a todas
          as funcionalidades para gerenciar colaboradores remotos.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-md border border-gray-200 p-4">
            <h4 className="font-medium text-gray-900">Cadastro de Colaboradores</h4>
            <p className="mt-1 text-sm text-gray-600">Gerencie informações dos colaboradores</p>
          </div>
          <div className="rounded-md border border-gray-200 p-4">
            <h4 className="font-medium text-gray-900">Controle de Jornada</h4>
            <p className="mt-1 text-sm text-gray-600">Monitore horários e banco de horas</p>
          </div>
          <div className="rounded-md border border-gray-200 p-4">
            <h4 className="font-medium text-gray-900">Gestão de Tarefas</h4>
            <p className="mt-1 text-sm text-gray-600">Acompanhe projetos e atividades</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
