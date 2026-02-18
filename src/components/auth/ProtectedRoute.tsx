import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const token = localStorage.getItem("adminToken");
  const email = localStorage.getItem("adminEmail");

  if (!token || !email) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
