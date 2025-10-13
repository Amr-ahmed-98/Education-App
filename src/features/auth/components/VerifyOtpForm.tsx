import React, {useEffect , useRef, useState} from 'react';
import { useTranslation } from 'react-i18next';

interface Props{
    onSuccess: () => void;
}

export function VerifyOtpForm({ onSuccess }: Props){
    const { t } = useTranslation();
   const [otp, setOtp] = useState<string[]>(["", "", "", "", "" , ""]);
   const inputsRef  = useRef<HTMLInputElement[]>([]);
   const [timer, setTimer] = useState(30);

   useEffect(()=>{
    if(timer <= 0) return;
    const interval = setInterval(()=> setTimer((prev)=> prev - 1),1000);
    return () => clearInterval(interval);
   },[timer]);

   const handleChange = (index: number , value : string)=>{
    if(!/^\d*$/.test(value)) return; // only digits
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

      if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
   }

   const handleBackspace = (index: number , e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Backspace" && !otp[index] && index > 0){
        inputsRef.current[index - 1].focus();
    } 
   }
     const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault();
        const otpCode = otp.join("");
        if(otpCode.length !== 6) return;
        localStorage.setItem("resetOtp", otpCode);
        onSuccess();
    }
    const handleResend = ()=>{
        setOtp(["", "" ,"" ,"" ,"" ,""]);
        inputsRef.current[0].focus();
        setTimer(30);
            // هنا ممكن تضيف دالة send OTP من api resend

    }
   
    return(
       <div className='flex flex-col justify-center text-center items-center w-full lg:w-[35%] py-[100px]'>
        <h2 className='text-3xl font-semibold mb-[20px] text-primary'>{t("otp.title")}</h2>
        <form onSubmit={handleSubmit} >
        <p className="text-gray-400 text-lg">{t("otp.subtitle")}</p>
        <div className="flex gap-4 mb-4">
            {otp.map((value, idx) => (
                <input 
                key={idx}
                type="text"
                maxLength={1}
                value={value}
                ref={(el) => { inputsRef.current[idx] = el!;}}
                onChange={(e) => handleChange(idx, e.target.value)}
                onKeyDown={(e)=>handleBackspace(idx, e)}
                className="w-[80px] h-[80px] text-center text-4xl bg-white dark:bg-dark-secondary  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

            ))}
             </div>
            <div className="mb-4">
                <span>اعاده ارسال: {timer}s </span>

            </div>
            <div className="flex flex-col gap-4">
          <button
            type="submit"
            className="bg-primary w-full text-white py-2 px-4 rounded-lg"
          >
            {t("otp.btn1")}
          </button>
          <button
            type="button"
            disabled={timer > 0}
            onClick={handleResend}
            className="bg-gray-300 w-full text-gray-700 py-2 px-4 rounded-lg"
          >
          {t("otp.btn2")}
          </button>
       
        </div>
        </form>
       </div>
   
    )
}
