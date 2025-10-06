import ApiClient from "../../../services/ApiClient";

export interface ResetPasswordPayload  {
  otp:string;
  newPassword:string;
  confirmPassword:string;
}
export interface ResetPasswordResponse  {
    message:string;
}


export function resetPassword(payload: ResetPasswordPayload ): Promise<ResetPasswordResponse>{
    return ApiClient.post<ResetPasswordResponse>("/auth/reset-password", payload)
}