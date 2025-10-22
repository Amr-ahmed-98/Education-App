
import { ForgetPasswordForm } from "../components/ForgetFroms"
import { useNavigate } from "react-router-dom"
function Forget() {
  const navigate = useNavigate();
  return (
  <div className="flex justify-center items-center h-[86vh]">
      {/* <h1 className="text-2xl font-bold mb-4">User Profile</h1>
   <UserCard id="5" /> */}
   <ForgetPasswordForm onSuccess={()=> navigate('/otp')}/>
      </div>
  )
}

export default Forget