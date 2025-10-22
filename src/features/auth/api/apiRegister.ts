
import ApiClient from "@/services/ApiClient";

export interface RegisterPayload{
    name: string;
    email:string;
    password:number | string;
}

export interface RegisterResponse{
    message:string;
   
}

export function registerUser( payload: RegisterPayload): Promise<RegisterResponse>{
      return ApiClient.post<RegisterResponse>("auth/register",payload)
}