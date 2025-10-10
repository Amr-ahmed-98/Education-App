
import ResetPasswordForm from "../components/ResetPasswordForm"
import { useNavigate } from "react-router-dom";

function ResetPassword() {
    const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen">
      
      <ResetPasswordForm onSuccess={() => navigate("/done")} />
    </div>
  )
}

export default ResetPassword