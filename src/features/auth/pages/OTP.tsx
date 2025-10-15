

import { VerifyOtpForm } from "../components/VerifyOtpForm"
import { useNavigate } from "react-router-dom";
function OTP() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center">
      <VerifyOtpForm onSuccess={()=> navigate("/reset-password")} />
    </div> 
  )
}

export default OTP