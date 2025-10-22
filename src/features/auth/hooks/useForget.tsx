import { useMutation } from "@tanstack/react-query";
import { forgetPassword } from "../api/apiForget";
import { errorAlert } from "../../../utils/alert";
import type {ForgetPasswordPayload ,ForgetPasswordResponse } from '../api/apiForget';

export function useForget(onSuccess?: () => void){
    return useMutation<ForgetPasswordResponse , Error , ForgetPasswordPayload>({
        mutationFn : forgetPassword,
         onSuccess: () => {   
          if (onSuccess) onSuccess();
        },
        onError: (error: any) => {
  errorAlert("خطأ", error.response?.data?.message || "من فضلك داخل الايميل");
        },
    })
}