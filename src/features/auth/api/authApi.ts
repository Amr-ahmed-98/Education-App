// src/api/authApi.ts
// import ApiClient from "../../../services/ApiClient";

// interface RegisterPayload {
//   name: string;
//   email: string;
//   password: string;
// }

// interface RegisterResponse {
//   message:string;
//   token?:string;
// }

// export function registerUser(payload: RegisterPayload): Promise<RegisterResponse>{
//   return ApiClient.post<RegisterResponse>("auth/register",payload);
// }
import ApiClient from "@/services/ApiClient";

export interface RegisterPayload{
    name: string;
    email:string;
    password:number | string;
}

export interface RegisterResponse{
    message:string;
    token?:string;
}
export function registerUser( payload: RegisterPayload): Promise<RegisterResponse>{
      return ApiClient.post<RegisterResponse>("auth/register",payload)
}