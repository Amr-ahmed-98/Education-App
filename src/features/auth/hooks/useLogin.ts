// src/hooks/useLogin.ts
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api/apiLogin";
import Cookies from "js-cookie";
import { ENV } from "@/config/env";
import { successAlert , errorAlert } from "../../../utils/alert";

export function useLogin(onSuccess?: () => void) {
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log("Login Response:", data);

      const token = data?.data?.accessToken;
      const user = data?.data?.user;

        if (!token) {
        console.error(" Token not found in response!", data);
        errorAlert("خطأ!", "لم يتم استلام التوكن من السيرفر");
        return;
      }
      
      // خزن التوكن في الكوكيز
      Cookies.set(ENV.ACCESS_TOKEN_KEY, token, {
        expires: 7,       // أسبوع
        secure: true,     
        sameSite: "strict",
        path: "/",        // متاح لكل الصفحات
      });
      
 successAlert("تم بنجاح!", "تم تسجيل الدخول بنجاح"); 
      console.log("Saved token:", token);
      if (onSuccess) onSuccess();
      console.log("Login Response:", data);
    },
    onError: (error) => {
      console.error("Login error:", error);
           errorAlert("خطأ!", "فشل تسجيل الدخول  "); 
    },
  });
}
