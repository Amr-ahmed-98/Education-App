// src/hooks/useResetPassword.ts
import { useMutation } from "@tanstack/react-query";
import { resetPassword} from "./../api/resetApi";
import type { ResetPasswordPayload, ResetPasswordResponse } from "./../api/resetApi";
export function useResetPassword() {
  return useMutation<ResetPasswordResponse, Error, ResetPasswordPayload>({
    mutationFn: resetPassword,
  });
}
