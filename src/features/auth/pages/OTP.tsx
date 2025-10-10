
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function OTP() {
  const email = "kqhdbnm26t@wyoxafp.com";
  const otp_code = "325828";
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("resetEmail", email);
    localStorage.setItem("resetOtp", otp_code);
    navigate("/reset-password");
  }, [navigate]);

  return null
}

export default OTP