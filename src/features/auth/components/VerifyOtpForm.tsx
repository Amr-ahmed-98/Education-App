import React, {useEffect , useRef, useState} from 'react';
import { useVerifyOtp } from '../hooks/useVerifyOtp';
import { useNavigate } from 'react-router-dom';

export function VerifyOtpForm({}){
   const navigate  = useNavigate();
   const [otp, setOtp] = useState(["", "", "", "", "" , ""]);
    return(
       <div className='flex flex-col justify-center items-center w-[35%] py-[20px]'>
      <h2>sdfdsf</h2>
       </div>
    )
}