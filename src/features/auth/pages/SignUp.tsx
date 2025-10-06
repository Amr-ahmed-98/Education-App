import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
function SignUp() {
  const navigate = useNavigate();
  return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <RegisterForm onSuccess={() => navigate("/sign-in")} />
    </div>
  )
}

export default SignUp