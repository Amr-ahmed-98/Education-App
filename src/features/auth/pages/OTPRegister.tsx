import { VerifyOtpForm } from "../components/OtpRegisterFrom"
import { useNavigate } from "react-router-dom";
function OtpRegister() {
  const navigate = useNavigate();

  return (
    <div className="">
      <VerifyOtpForm onSuccess={()=> navigate("/sign-in")} />
    </div>
  )
}

export default OtpRegister;