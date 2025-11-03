import { z } from 'zod';

/**
 * @summary
 * Common Zod validation schemas and utilities
 *
 * @module utils/validation
 */

/**
 * @remarks Standard string validation with max length
 */
export const zString = z.string().min(1);

/**
 * @remarks Nullable string validation
 */
export const zNullableString = (maxLength?: number) => {
  let schema = z.string();
  if (maxLength) {
    schema = schema.max(maxLength);
  }
  return schema.nullable();
};

/**
 * @remarks Name field validation (1-200 characters)
 */
export const zName = z.string().min(1).max(200);

/**
 * @remarks Description field validation (max 500 characters, nullable)
 */
export const zNullableDescription = z.string().max(500).nullable();

/**
 * @remarks Foreign key validation (positive integer)
 */
export const zFK = z.number().int().positive();

/**
 * @remarks Nullable foreign key validation
 */
export const zNullableFK = z.number().int().positive().nullable();

/**
 * @remarks BIT field validation (0 or 1)
 */
export const zBit = z.number().int().min(0).max(1);

/**
 * @remarks Date string validation (ISO format)
 */
export const zDateString = z.string().datetime();

/**
 * @remarks Email validation
 */
export const zEmail = z.string().email();

/**
 * @remarks Nullable email validation
 */
export const zNullableEmail = z.string().email().nullable();

/**
 * @remarks Phone number validation (basic format)
 */
export const zPhone = z.string().min(10).max(20);

/**
 * @remarks Nullable phone validation
 */
export const zNullablePhone = z.string().min(10).max(20).nullable();

/**
 * @remarks Numeric validation with precision (15,2)
 */
export const zNumeric = z.number();

/**
 * @remarks Nullable numeric validation
 */
export const zNullableNumeric = z.number().nullable();

/**
 * @remarks Price/monetary validation with precision (18,6)
 */
export const zPrice = z.number();

/**
 * @remarks Nullable price validation
 */
export const zNullablePrice = z.number().nullable();
