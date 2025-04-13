import { useState } from "react";
import { authService } from "../services/authService";
import type { SignUpFormData } from "../types/userTypes";

interface RegisterState {
     email: string;
     password: string;
     confirmPassword: string;
     firstName: string;
     lastName: string;
     userType: "freelance" | "empresa";
     error: string | null;
     loading: boolean;
     register: (formData: SignUpFormData, confirmPassword: string) => Promise<void>;
     setEmail: (value: string) => void;
     setPassword: (value: string) => void;
     setConfirmPassword: (value: string) => void;
     setFirstName: (value: string) => void;
     setLastName: (value: string) => void;
     setUserType: (value: "freelance" | "empresa") => void;
}

export const useRegister = (): RegisterState => {
     const [email, setEmail] = useState<string>("");
     const [password, setPassword] = useState<string>("");
     const [confirmPassword, setConfirmPassword] = useState<string>("");
     const [firstName, setFirstName] = useState<string>("");
     const [lastName, setLastName] = useState<string>("");
     const [userType, setUserType] = useState<"freelance" | "empresa">("freelance");
     const [error, setError] = useState<string | null>(null);
     const [loading, setLoading] = useState<boolean>(false);

     const register = async (formData: SignUpFormData, confirmPassword: string) => {
          setError(null);
          setLoading(true);

          if (formData.password !== confirmPassword) {
               setError("Las contraseñas no coinciden");
               setLoading(false);
               return;
          }

          const { error: signUpError } = await authService.signUp(formData);

          if (signUpError) {
               setError("Error al registrarse: " + signUpError);
               setLoading(false);
               return;
          }

          alert("¡Registro exitoso! Revisa tu correo para confirmar.");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setFirstName("");
          setLastName("");
          setUserType("freelance");
          setLoading(false);
     };

     return {
          email,
          password,
          confirmPassword,
          firstName,
          lastName,
          userType,
          error,
          loading,
          register,
          setEmail,
          setPassword,
          setConfirmPassword,
          setFirstName,
          setLastName,
          setUserType,
     };
};
