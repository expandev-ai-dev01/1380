import { Request, Response, NextFunction } from 'express';

/**
 * @summary
 * Error response interface
 *
 * @interface ErrorResponse
 * @property {boolean} success - Always false for errors
 * @property {object} error - Error details object
 * @property {string} timestamp - ISO timestamp of error occurrence
 */
interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: any;
  };
  timestamp: string;
}

/**
 * @summary
 * Global error handling middleware
 *
 * @function errorMiddleware
 * @module middleware
 *
 * @param {Error} err - Error object
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {NextFunction} next - Express next function
 *
 * @returns {void}
 */
export function errorMiddleware(err: any, req: Request, res: Response, next: NextFunction): void {
  const statusCode = err.statusCode || 500;
  const errorCode = err.code || 'INTERNAL_SERVER_ERROR';
  const message = err.message || 'An unexpected error occurred';

  const errorResponse: ErrorResponse = {
    success: false,
    error: {
      code: errorCode,
      message: message,
      details: err.details || undefined,
    },
    timestamp: new Date().toISOString(),
  };

  /**
   * @remarks Log error details in development
   */
  if (process.env.NODE_ENV === 'development') {
    console.error('Error:', err);
  }

  res.status(statusCode).json(errorResponse);
}
