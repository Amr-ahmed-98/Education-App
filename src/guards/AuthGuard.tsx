// src/guards/authGuards.tsx
import { Navigate, Outlet } from "react-router-dom";

const ENABLE_AUTH_GUARD = false;

export default function AuthGuard() {
   if (!ENABLE_AUTH_GUARD) {
    // لو الحماية متقفلة → يدي الـ Outlet علطول
    return <Outlet />;
  }
  const token = localStorage.getItem("token");
  const isAuthenticated = token && token.trim() !== "";  // ✅ يتأكد إنه مش فاضي

  console.log("isAuthenticated:", isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" replace />;
}