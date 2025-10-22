// src/hooks/useRegister.ts
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../api/apiRegister";
import { successAlert , errorAlert } from "../../../utils/alert";
import { useTranslation } from "react-i18next";
export function useRegister(onSuccess?: () => void) {
  const { t } = useTranslation();
  return useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      if (onSuccess) onSuccess();
              successAlert(t("messageAlert.register.successfulTitle"), t("messageAlert.register.successfulText")); 
    },
    onError: () => {
                  errorAlert(t("messageAlert.register.failTitle"), t("messageAlert.register.failText")); 
    },
  });
}
