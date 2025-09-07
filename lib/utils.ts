import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper para generar rutas de assets con el basePath correcto
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/jdtb-portfolio' : '';
  return `${basePath}${path}`;
}
