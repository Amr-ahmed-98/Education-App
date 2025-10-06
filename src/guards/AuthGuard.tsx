// src/guards/authGuards.tsx
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import { ENV } from "@/config/env";
const ENABLE_AUTH_GUARD = true;

export default function AuthGuard() {
   if (!ENABLE_AUTH_GUARD) {
    // لو الحماية متقفلة → يدي الـ Outlet علطول
    return <Outlet />;
  }
  const token = Cookies.get(ENV.ACCESS_TOKEN_KEY);
  const isAuthenticated = token && token.trim() !== "";  //  يتأكد إنه مش فاضي

  console.log("isAuthenticated (cookie):", isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" replace />;
}