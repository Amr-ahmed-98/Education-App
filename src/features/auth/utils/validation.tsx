// src/utils/validation.js

export const validateEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const passwordRules = {
  minLength: 8,
  requireNumber: true,
  requireSpecialChar: true,
} as const;
