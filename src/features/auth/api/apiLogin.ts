// src/api/apiLogin.ts
import ApiClient from "@/services/ApiClient";

export interface LoginPayload {
  email: string;
  password: string;
}
export interface LoginResponse {
  accessToken: string;
  user: {
    email: string;
    id: number;
  };
}
export function loginUser(payload : LoginPayload) : Promise<LoginResponse>{
  return ApiClient.post<LoginResponse>("/login",payload);
}
