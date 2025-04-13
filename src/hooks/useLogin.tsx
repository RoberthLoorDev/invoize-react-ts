import { useState } from "react";
import { authService } from "../services/authService";

interface LoginState {
     email: string;
     password: string;
     error: string | null;
     loading: boolean;
     login: (email: string, password: string) => Promise<void>;
     setEmail: (value: string) => void;
     setPassword: (value: string) => void;
}

export const useLogin = (): LoginState => {
     const [email, setEmail] = useState<string>("");
     const [password, setPassword] = useState<string>("");
     const [error, setError] = useState<string | null>(null);
     const [loading, setLoading] = useState<boolean>(false);

     const login = async (email: string, password: string) => {
          setError(null);
          setLoading(true);

          const { error: loginError } = await authService.signIn(email, password);

          if (loginError) {
               if (loginError.includes("Invalid login credentials")) {
                    setError("Correo o contraseña incorrectos.");
               } else {
                    setError("Error al iniciar sesión: " + loginError);
               }
               setLoading(false);
               return;
          }

          setEmail("");
          setPassword("");
          setLoading(false);
     };

     return {
          email,
          password,
          error,
          loading,
          login,
          setEmail,
          setPassword,
     };
};
