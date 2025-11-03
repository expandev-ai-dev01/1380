# Sistema de Gestão de Pessoas

Gerenciamento completo de colaboradores em modalidade home office.

## Tecnologias

- React 18.3.1
- TypeScript 5.6.3
- Vite 5.4.11
- TailwindCSS 3.4.14
- React Router DOM 6.26.2
- TanStack Query 5.59.20
- Axios 1.7.7
- Zustand 5.0.1
- React Hook Form 7.53.1
- Zod 3.23.8

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   └── router.tsx         # Configuração de rotas
├── assets/                # Recursos estáticos
│   └── styles/           # Estilos globais
├── core/                  # Componentes e lógica compartilhada
│   ├── components/       # Componentes genéricos
│   ├── contexts/         # Contextos globais
│   ├── lib/              # Configurações de bibliotecas
│   └── utils/            # Funções utilitárias
├── domain/               # Domínios de negócio (a serem implementados)
└── pages/                # Páginas da aplicação
    └── layouts/          # Layouts compartilhados
```

## Instalação

```bash
npm install
```

## Configuração

1. Copie o arquivo `.env.example` para `.env`:
```bash
cp .env.example .env
```

2. Configure as variáveis de ambiente:
```
VITE_API_URL=http://localhost:5000
VITE_API_VERSION=v1
VITE_API_TIMEOUT=30000
```

## Desenvolvimento

```bash
npm run dev
```

Acesse: http://localhost:3000

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Funcionalidades

### Implementadas
- ✅ Estrutura base do projeto
- ✅ Configuração de roteamento
- ✅ Sistema de autenticação
- ✅ Layouts responsivos
- ✅ Componentes core

### A Implementar
- [ ] Cadastro de Colaboradores
- [ ] Controle de Jornada
- [ ] Gestão de Tarefas
- [ ] Comunicação Interna
- [ ] Dashboard de Produtividade
- [ ] Gestão de Equipamentos
- [ ] Suporte Técnico Remoto
- [ ] Gestão de Benefícios

## Arquitetura

### Padrões de Código
- TypeScript strict mode
- Componentes funcionais com hooks
- Separação de responsabilidades
- Documentação JSDoc
- Nomenclatura consistente

### Estado
- TanStack Query para estado do servidor
- Context API para estado global
- Zustand para estado complexo (quando necessário)

### Estilização
- TailwindCSS para utilitários
- Componentes com variants
- Design system consistente

## Contribuição

Este projeto segue padrões rigorosos de arquitetura e documentação. Consulte a documentação de arquitetura antes de contribuir.

## Licença

Privado - Todos os direitos reservados