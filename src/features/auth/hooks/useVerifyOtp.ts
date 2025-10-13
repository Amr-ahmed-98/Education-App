import { verifyOtp } from '../api/apiVerifyOtp';
import type { VerifyOtpPayload , VerifyOtpResponse } from '../api/apiVerifyOtp';
import { errorAlert, successAlert } from "@/utils/alert";
import { useMutation } from '@tanstack/react-query';

export function useVerifyOtp(onSuccess?: ()=> void){
    return useMutation<VerifyOtpResponse , Error ,Omit<VerifyOtpPayload, "email" >>({
      mutationFn:(payload) => {
        const email = localStorage.getItem("resetEmail") as string;
        return verifyOtp({ 
          email, otp_code: payload.otp_code,
          password: "TEMP1234"
}); // يحتوي: otp_code + password
    },
      onSuccess:(data)=>{
        successAlert("نجاح", data.message);
        if(onSuccess) onSuccess();
      },
      onError:(error: any)=>{
        console.error("OTP Verify error:", error.response?.data || error.message);
        errorAlert("خطا", error.response?.data?.message || "رمز OTP غير صحيح");
      },
    });
}