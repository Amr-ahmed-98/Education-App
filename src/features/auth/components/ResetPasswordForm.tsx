// src/components/ResetPasswordForm.tsx
import { useState } from "react";
import { useResetPassword } from "../hooks/useResetPassword";

export default function ResetPasswordForm() {
  const { mutate, isPending, isSuccess, error } = useResetPassword();

  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ otp, newPassword, confirmPassword });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm mx-auto">
      <input
        type="text"
        placeholder="OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="password"
        placeholder="Confirm New Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" disabled={isPending} className="bg-blue-500 text-white py-2 rounded">
        {isPending ? "Resetting..." : "Reset Password"}
      </button>

      {isSuccess && <p className="text-green-500">Password reset successfully ✅</p>}
      {error && <p className="text-red-500">{error.message}</p>}
    </form>
  );
}
