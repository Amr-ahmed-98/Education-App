import ApiClient from "@/services/ApiClient";


export interface VerifyPayload{
    email:string;
    otp_code:string;
}

export interface VerifyResponse{
    success: boolean;
  message: string;
  data: {
    accessToken: string;
    user: {
      id: string;
      email: string;
      name: string;
      role: string;
    }
}
}

export function verifyRegister(payload :VerifyPayload): Promise<VerifyResponse>{
 return ApiClient.post<VerifyResponse>("/auth/verify", payload);
}