import { useRegister } from "../hooks/useRegister";
import type { SignUpFormData } from "../types/userTypes";

export default function RegisterPage() {
     const {
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
     } = useRegister();

     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const formData: SignUpFormData = {
               email,
               password,
               firstName,
               lastName,
               userType,
          };
          await register(formData, confirmPassword);
     };

     return (
          <div>
               <h1>Welcome to Invoize</h1>
               <p>Tu facturación freelance, ahora sin complicaciones.</p>
               <form onSubmit={handleSubmit}>
                    <div>
                         <label>Nombre</label>
                         <input
                              type="text"
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                              required
                              disabled={loading}
                         />
                    </div>
                    <div>
                         <label>Apellido</label>
                         <input
                              type="text"
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                              required
                              disabled={loading}
                         />
                    </div>
                    <div>
                         <label>Correo electrónico</label>
                         <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                              disabled={loading}
                         />
                    </div>
                    <div>
                         <label>Contraseña</label>
                         <input
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                              disabled={loading}
                         />
                    </div>
                    <div>
                         <label>Repetir contraseña</label>
                         <input
                              type="password"
                              value={confirmPassword}
                              onChange={(e) => setConfirmPassword(e.target.value)}
                              required
                              disabled={loading}
                         />
                    </div>
                    <div>
                         <label>Tipo de usuario</label>
                         <select
                              value={userType}
                              onChange={(e) => setUserType(e.target.value as "freelance" | "empresa")}
                              disabled={loading}
                         >
                              <option value="freelance">Freelance</option>
                              <option value="empresa">Empresa</option>
                         </select>
                    </div>
                    {error && <div>{error}</div>}
                    <div>
                         <button type="submit" disabled={loading}>
                              {loading ? "Cargando..." : "Registrarse"}
                         </button>
                    </div>
               </form>
          </div>
     );
}
