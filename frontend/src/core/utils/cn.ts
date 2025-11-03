import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * @utility cn
 * @summary Utility function to merge Tailwind CSS classes
 * @domain core
 * @type utility-function
 * @category styling
 *
 * @description
 * Combines clsx and tailwind-merge to handle conditional classes
 * and resolve Tailwind class conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
