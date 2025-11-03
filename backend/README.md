# Sistema de Gestão de Pessoas - Backend API

Backend REST API for Sistema de Gestão de Pessoas - Home Office Management System.

## Description

Gerenciamento de Pessoas na modalidade home office - comprehensive system for managing remote workforce including employee registration, time tracking, task management, internal communication, productivity dashboards, equipment management, technical support, and benefits administration.

## Technology Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Architecture**: REST API

## Project Structure

```
src/
├── api/                    # API route handlers
│   └── v1/                 # API Version 1
│       ├── external/       # Public endpoints
│       └── internal/       # Authenticated endpoints
├── routes/                 # Route definitions
│   ├── v1/                 # Version 1 routes
│   └── index.ts            # Main router
├── middleware/             # Express middleware
├── services/               # Business logic
├── utils/                  # Utility functions
├── constants/              # Application constants
├── instances/              # Service instances
├── tests/                  # Global test utilities
└── server.ts               # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Edit .env with your configuration
```

### Development

```bash
# Run development server with hot reload
npm run dev
```

### Build

```bash
# Build for production
npm run build
```

### Production

```bash
# Start production server
npm start
```

### Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Linting

```bash
# Run linter
npm run lint

# Fix linting issues
npm run lint:fix
```

## API Endpoints

The API is versioned and follows RESTful conventions:

- **Base URL**: `http://localhost:3000/api/v1`
- **Health Check**: `GET /health`

### External Endpoints (Public)

- `/api/v1/external/public/*` - Public access endpoints

### Internal Endpoints (Authenticated)

- `/api/v1/internal/*` - Authenticated access endpoints

## Environment Variables

See `.env.example` for required environment variables.

## Features

This backend supports the following features:

1. **Cadastro de Colaboradores** - Employee registration and management
2. **Controle de Jornada** - Time tracking and work hours management
3. **Gestão de Tarefas** - Task and project management
4. **Comunicação Interna** - Internal communication system
5. **Dashboard de Produtividade** - Productivity metrics and KPIs
6. **Gestão de Equipamentos** - Equipment and asset management
7. **Suporte Técnico Remoto** - Technical support ticketing system
8. **Gestão de Benefícios** - Benefits administration for remote workers

## Architecture Patterns

- **Multi-tenancy**: Account-based data isolation
- **API Versioning**: URL path versioning strategy
- **Error Handling**: Centralized error handling middleware
- **Validation**: Zod schema validation
- **Security**: Helmet, CORS, and authentication middleware
- **Performance**: Compression and caching strategies

## Contributing

Follow the established coding standards and patterns documented in the architecture guidelines.

## License

ISC