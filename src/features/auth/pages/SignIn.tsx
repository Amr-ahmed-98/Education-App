// http://localhost:3000/users
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";

function SignIn() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center bg-gray-100">
     <LoginForm onSuccess={() => navigate("/dashboard")} />
    </div>
  )
}

export default SignIn