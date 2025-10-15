import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
function SignUp() {
  const navigate = useNavigate();
  return (
        <div className="flex justify-center">
      <RegisterForm onSuccess={() => navigate("/otp-register")} />
    </div>
  )
}

export default SignUp