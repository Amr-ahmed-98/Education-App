// src/hooks/useLogin.ts
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api/apiLogin";
import Cookies from "js-cookie";
import { ENV } from "@/config/env";
import { successAlert , errorAlert } from "../../../utils/alert";
import { useTranslation } from "react-i18next";

export function useLogin(onSuccess?: () => void) {
  const { t } = useTranslation();
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      const token = data?.data?.accessToken;
        if (!token) {
        errorAlert("خطأ!", "لم يتم استلام التوكن من السيرفر");
        return; }
      // خزن التوكن في الكوكيز
      Cookies.set(ENV.ACCESS_TOKEN_KEY, token, {
        expires: 7,       // أسبوع
        secure: true,     
        sameSite: "strict",
        path: "/",        // متاح لكل الصفحات
      });
 successAlert(t("messageAlert.login.successfulTitle"),t("messageAlert.login.successfulText")); 
      if (onSuccess) onSuccess();
    },
    onError: () => {
           errorAlert(t("messageAlert.login.failTitle"),t("messageAlert.login.failText")); 
    },
  });
}
