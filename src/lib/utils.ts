import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function isRTL(language: string): boolean {
    return language === 'ar'
}

export function getDirection(language: string): 'rtl' | 'ltr' {
    return isRTL(language) ? 'rtl' : 'ltr'
}
