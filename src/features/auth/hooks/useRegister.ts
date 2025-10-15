// src/hooks/useRegister.ts
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../api/apiRegister";
import { successAlert , errorAlert } from "../../../utils/alert";
export function useRegister(onSuccess?: () => void) {
  return useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      if (onSuccess) onSuccess();
              successAlert("تم بنجاح!", "تم انشاء الاكونت بنجاح"); 
    },
    onError: (error) => {
      console.error("Register error:", error);
                  errorAlert("خطأ!", "فشل انشاء اكونت جديد  "); 
    },
  });
}
