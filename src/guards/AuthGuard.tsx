// src/guards/authGuards.tsx
import { Navigate, Outlet } from "react-router-dom";

const ENABLE_AUTH_GUARD = true;

export default function AuthGuard() {
   if (!ENABLE_AUTH_GUARD) {
    // لو الحماية متقفلة → يدي الـ Outlet علطول
    return <Outlet />;
  }
  const token = localStorage.getItem("accessToken");
  const isAuthenticated = token && token.trim() !== "";  //  يتأكد إنه مش فاضي

  console.log("isAuthenticated:", isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" replace />;
}