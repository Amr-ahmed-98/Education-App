import { useMutation } from "@tanstack/react-query";
import { verifyRegister } from '../api/apiOtpRegister';
import type { VerifyPayload , VerifyResponse } from '../api/apiOtpRegister';

import Cookies from "js-cookie";
export function useVerify(onSuccess?: ()=>void){
    return useMutation<VerifyResponse, Error , VerifyPayload>({
        mutationFn:verifyRegister,
        onSuccess:(data)=>{
            const token = data.data.accessToken;
            console.log("OTP Verified. Token " , token );
            if(token){
                Cookies.set("token",token, {expires:7});
            }
            onSuccess?.();
        },
        onError:(error)=>{
            console.error("OTP verifications  failed",error);
        },
    });
}