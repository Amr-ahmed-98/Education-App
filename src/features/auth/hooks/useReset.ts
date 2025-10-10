
import type { ResetpasswordPayload , ResetPasswordResponse } from '../api/apiReset';
import { useMutation } from "@tanstack/react-query";
import {resetPassword} from '../api/apiReset';
import { errorAlert } from "../../../utils/alert";

export function useReset(onSuccess?: () => void){
  return useMutation<ResetPasswordResponse,Error,ResetpasswordPayload>({
    mutationFn: resetPassword,
        onSuccess: () => {
          if (onSuccess) onSuccess();
              console.log("done")
        },
        onError: (error: any) => {
          console.error("❌ Register error:", error.response?.data || error.message);
  errorAlert("خطأ!", error.response?.data?.message || "فشل تغيير كلمة المرور");
        },
  });
}