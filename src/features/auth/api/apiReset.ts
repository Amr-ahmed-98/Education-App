import ApiClient from "@/services/ApiClient";

export interface ResetpasswordPayload{

  newPassword: string;
  confirmPassword :string;
}

export interface ResetPasswordResponse{
  message:string;
}

export function resetPassword(payload:ResetpasswordPayload): Promise<ResetPasswordResponse>{
  return ApiClient.post<ResetPasswordResponse>("/auth/resetPassword", payload);
}