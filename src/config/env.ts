// .env من  environment variables الملف ده يقرا ال 

// config/env.js
export const ENV = {
API_URL: import.meta.env.VITE_API_BASE_URL || "https://education-app-steel.vercel.app/api",
APP_NAME: import.meta.env.VITE_APP_NAME || "SkillBase",
 APP_VERSION: import.meta.env.VITE_APP_VERSION || "1.0.0",
  APP_ENV: import.meta.env.VITE_APP_ENV || "development",
  ACCESS_TOKEN_KEY: import.meta.env.VITE_ACCESS_TOKEN_KEY || "accessToken",
  REFRESH_TOKEN_KEY: import.meta.env.VITE_REFRESH_TOKEN_KEY || "refreshToken",
}