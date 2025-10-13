import ApiClient from "@/services/ApiClient";

export interface VerifyOtpPayload{
    otp_code:string;
    password: string; 
    email:string;
}
export interface VerifyOtpResponse{
    message:string;
}

export function verifyOtp(payload:VerifyOtpPayload) : Promise<VerifyOtpResponse>{
    return ApiClient.post<VerifyOtpResponse>("/auth/resetPassword", payload);
}