// // src/components/ResetPasswordForm.tsx
// import { useState } from "react";
// import { useResetPassword } from "../hooks/useResetPassword";

// export default function ResetPasswordForm() {
//   const { mutate, isPending, isSuccess, error } = useResetPassword();

//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     mutate({ otp, newPassword, confirmPassword });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm mx-auto">
//       <input
//         type="text"
//         placeholder="OTP"
//         value={otp}
//         onChange={(e) => setOtp(e.target.value)}
//         className="border p-2 rounded"
//       />
//       <input
//         type="password"
//         placeholder="New Password"
//         value={newPassword}
//         onChange={(e) => setNewPassword(e.target.value)}
//         className="border p-2 rounded"
//       />
//       <input
//         type="password"
//         placeholder="Confirm New Password"
//         value={confirmPassword}
//         onChange={(e) => setConfirmPassword(e.target.value)}
//         className="border p-2 rounded"
//       />
//       <button type="submit" disabled={isPending} className="bg-blue-500 text-white py-2 rounded">
//         {isPending ? "Resetting..." : "Reset Password"}
//       </button>

//       {isSuccess && <p className="text-green-500">Password reset successfully ✅</p>}
//       {error && <p className="text-red-500">{error.message}</p>}
//     </form>
//   );
// }

import { useTranslation } from 'react-i18next';
import Button from '@/components/atoms/Button';
import { useState } from 'react';
import * as icons from '../../../assets/icons/icons';
import { useReset } from '../hooks/useReset';

export function ResetPasswordForm() {
  const { t } = useTranslation();
   const [show, setShow] = useState(false);
   const [shows, setShows] = useState(false);
   const {mutate , isPending , isSuccess, error} = useReset();
   const [newPassword, setNewPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({  newPassword, confirmPassword });
  };
  return (
    <div className='flex flex-col justify-center items-center w-[35%] py-[20px]'>
      <h2 className="text-primary text-3xl mb-[20px]">{t("resetPassword.title")}</h2>
      <p className="text-1xl mb-[30px] text-gray-700 dark:text-gray-500">{t("resetPassword.subtitle")}</p>

      <form onSubmit={handleSubmit} className='flex flex-col w-[100%] '>
        <div className="relative mb-[25px]">
      <input
        type={show ? "text" : "password"}
        placeholder={t("resetPassword.input1")}
        value={newPassword}
        onChange={(e)=> setNewPassword(e.target.value)}
        className="w-full rounded-full border text-gray-700 dark:text-gray-500 py-3 px-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
      />
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-700 dark:text-gray-500"
      >
        {show ? <icons.EyeOff size={18} /> : <icons.Eye size={18} />}
      </button>
    </div>
      <div className="relative">
      <input
        type={shows ? "text" : "password"}
        placeholder={t("resetPassword.input2")}
         value={confirmPassword}
        onChange={(e)=> setConfirmPassword(e.target.value)}
        className="w-full rounded-full border text-gray-700 dark:text-gray-500 py-3 px-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
      />
      <button
        type="button"
        onClick={() => setShows(!shows)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-700 dark:text-gray-500"
      >
        {shows ? <icons.EyeOff size={18} /> : <icons.Eye size={18} />}
      </button>
    </div>
     <p className='mt-[25px] mb-[20px]  text-center text-gray-700 dark:text-gray-500'>{t("resetPassword.text")}</p>
      <Button type='submit' disabled={isPending} className='w-[100%] h-[45px] !text-[18px] !rounded-[25px]'>{isPending ? "Resetting..." : t("resetPassword.btn")}</Button>
{isSuccess && <p className="text-green-500">Password reset successfully </p>}
      {error && <p>{error.message}</p>}
      </form>
     
    </div>
  )
}

export default ResetPasswordForm