import { VerifyOtpForm } from "../components/VerifyOtpForm"
import { useNavigate } from "react-router-dom";
function OtpRegister() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center">
      <VerifyOtpForm onSuccess={()=> navigate("/sign-in")} />
    </div>
  )
}

export default OtpRegister;