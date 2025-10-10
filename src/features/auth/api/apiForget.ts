import ApiClient from "@/services/ApiClient";

export interface ForgetPasswordPayload{
    email:string;
}
export interface ForgetPasswordResponse{
    message:string;
}
 
export function forgetPassword(payload:ForgetPasswordPayload): Promise<ForgetPasswordResponse>{
  return ApiClient.post<ForgetPasswordResponse>("/auth/forgetPassword", payload);
}
