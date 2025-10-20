import ApiClient from "@/services/ApiClient";

export interface ResetPayload{
    email:string;
}
 export interface ResendResponse{
    success: boolean;
    message: string;
}

export function resendOtp(payload: ResetPayload): Promise<ResendResponse> {
    
    return ApiClient.post<ResendResponse>("/auth/resend-otp", payload);
}
