/**
 * @summary
 * Success response interface
 *
 * @interface SuccessResponse
 * @property {boolean} success - Always true for successful responses
 * @property {T} data - Response data of generic type
 * @property {object} metadata - Optional metadata object
 */
export interface SuccessResponse<T> {
  success: true;
  data: T;
  metadata?: {
    page?: number;
    pageSize?: number;
    total?: number;
    timestamp: string;
  };
}

/**
 * @summary
 * Creates a standardized success response
 *
 * @function successResponse
 * @module utils/response
 *
 * @param {T} data - Response data
 * @param {object} metadata - Optional metadata
 *
 * @returns {SuccessResponse<T>} Formatted success response
 *
 * @example
 * const response = successResponse({ id: 1, name: 'John' });
 */
export function successResponse<T>(
  data: T,
  metadata?: Omit<SuccessResponse<T>['metadata'], 'timestamp'>
): SuccessResponse<T> {
  return {
    success: true,
    data,
    metadata: {
      ...metadata,
      timestamp: new Date().toISOString(),
    },
  };
}
