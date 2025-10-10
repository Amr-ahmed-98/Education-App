
import type { ResetpasswordPayload , ResetPasswordResponse } from '../api/apiReset';
import { useMutation } from "@tanstack/react-query";
import {resetPassword} from '../api/apiReset';
import { successAlert , errorAlert } from "../../../utils/alert";

export function useReset(onSuccess?: () => void){
  return useMutation<ResetPasswordResponse,Error,ResetpasswordPayload>({
    mutationFn: resetPassword,
        onSuccess: () => {
          if (onSuccess) onSuccess();
                  successAlert("تم بنجاح!", "تم تغير كلمة السر بنجاح"); 
        },
        onError: (error: any) => {
     

                      console.error("❌ Register error:", error.response?.data || error.message);
  errorAlert("خطأ!", error.response?.data?.message || "فشل تغيير كلمة المرور");
        },
  });
}