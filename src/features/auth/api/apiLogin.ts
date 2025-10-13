// src/api/apiLogin.ts
import ApiClient from "@/services/ApiClient";

export interface LoginPayload {
  email: string;
  password: string;
}
export interface LoginResponse {
  message: string;
  data: {
    accessToken: string;
    user: {
      email: string;
      id: number;
      name?: string;
      role?: string;
    };
  };
}
export function loginUser(payload : LoginPayload) : Promise<LoginResponse>{
  return ApiClient.post<LoginResponse>("/auth/login",payload);
}
