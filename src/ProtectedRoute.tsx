import { useAuth } from "./context/AuthContext";
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

interface ProtectedRouteProps {
     children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
     const { user, loading } = useAuth();

     if (loading) {
          return <div className="flex justify-center items-center h-screen">Cargando...</div>;
     }

     if (!user) {
          return <Navigate to="/login" replace />;
     }

     return <>{children}</>;
}
