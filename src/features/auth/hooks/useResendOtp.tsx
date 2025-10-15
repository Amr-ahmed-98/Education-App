import { useMutation } from "@tanstack/react-query";
import { resendOtp } from '../api/apiResetOtp';
import type{ ResetPayload , ResendResponse} from '../api/apiResetOtp';

export function useResendOtp(){
 return useMutation<ResendResponse,Error ,ResetPayload>({
    mutationFn: resendOtp,
      onSuccess: () => {
      console.log("OTP resent successfully");
    },
    onError: (err) => {
      console.error("Resend OTP failed", err);
    },
 })
}