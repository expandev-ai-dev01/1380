import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import { config } from '@/config';
import { errorMiddleware } from '@/middleware/errorMiddleware';
import { notFoundMiddleware } from '@/middleware/notFoundMiddleware';
import apiRoutes from '@/routes';

const app: Application = express();

/**
 * @remarks Security middleware configuration
 */
app.use(helmet());
app.use(cors(config.api.cors));

/**
 * @remarks Request processing middleware
 */
app.use(compression());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

/**
 * @remarks Logging middleware
 */
if (config.server.nodeEnv === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

/**
 * @remarks Health check endpoint (no versioning)
 */
app.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    environment: config.server.nodeEnv,
    version: config.api.version,
  });
});

/**
 * @remarks API Routes with versioning
 * Creates routes like:
 * - /api/v1/external/...
 * - /api/v1/internal/...
 */
app.use('/api', apiRoutes);

/**
 * @remarks 404 handler
 */
app.use(notFoundMiddleware);

/**
 * @remarks Error handling middleware
 */
app.use(errorMiddleware);

/**
 * @remarks Graceful shutdown handler
 */
process.on('SIGTERM', () => {
  console.log('SIGTERM received, closing server gracefully');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

/**
 * @remarks Server startup
 */
const server = app.listen(config.api.port, () => {
  console.log(`Server running on port ${config.api.port} in ${config.server.nodeEnv} mode`);
  console.log(`API Version: ${config.api.version}`);
  console.log(`Health check: http://localhost:${config.api.port}/health`);
});

export default server;
