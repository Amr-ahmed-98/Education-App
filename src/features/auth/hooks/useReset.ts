
import type { ResetpasswordPayload , ResetPasswordResponse } from '../api/apiReset';
import { useMutation } from "@tanstack/react-query";
import {resetPassword} from '../api/apiReset';

export function useReset(){
  return useMutation<ResetPasswordResponse,Error,ResetpasswordPayload>({
    mutationFn: resetPassword,
  });
}