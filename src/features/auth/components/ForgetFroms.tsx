
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import * as icons from '../../../assets/icons/icons';
import {useForget } from '../hooks/useForget';
import { Link } from "react-router-dom";

interface Props{
    onSuccess: ()=> void;
}
export function ForgetPasswordForm({onSuccess } : Props){
    const { t } = useTranslation();
    const {mutate , isPending , isSuccess, error} = useForget(onSuccess);
    const [email , setEmail] = useState("");

    const handleSubmit = (e : React.FormEvent)=>{
        e.preventDefault();
         localStorage.setItem("resetEmail", email);
        mutate({email}as any);
    }
  return(
    <div className="flex flex-col justify-center items-center w-full md:w-[35%] py-[20px]">
      <h2 className="text-primary text-4xl font-bold mb-[20px]">{t("forgetpassword.title")}</h2>
      <p className="text-2xl mb-[30px] text-gray-700 dark:text-gray-500">{t("forgetpassword.subtitle")}</p>
        <form onSubmit={handleSubmit} className='flex flex-col w-[100%] '>
        <div className="relative mb-[25px]">
        <input 
         type="email"
         placeholder={t("forgetpassword.placeholder")}
         value={email}
         onChange={(e)=> setEmail(e.target.value)}
         className="w-full rounded-full border text-gray-700 dark:text-gray-500 py-4 px-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-500">
            <icons.Mail size={18}/>
        </div>
        </div>
        <button  
        type="submit"
        disabled={isPending}
        className="bg-primary py-[10px] rounded-[24px] text-[20px] text-white  font-semibold">
             {isPending ? "Sending..." : t("forgetpassword.btn")}
        
        </button>
             {isSuccess && <p className="text-green-500">Email send successfully </p>}
             {error && <p>{error.message}</p>}
          <div className="flex  justify-center mt-[20px]">
            <Link 
            to="/sign-in"
            className="flex flex-row justify-center items-center text-gray-500 ">
        <icons.ArrowLeft  size={25}/>
        <p className="text-[20px] ">{t("forgetpassword.backforward")}</p>
        </Link>
      </div>
    </form>
    </div>
  
  )
}