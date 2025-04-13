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
          <div className="container mx-auto p-4">
               <h1 className="text-2xl font-bold mb-4">Regístrate en Invoize</h1>
               <div className="card w-full max-w-md bg-base-100 shadow-xl">
                    <div className="card-body">
                         <form onSubmit={handleSubmit}>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Nombre</span>
                                   </label>
                                   <input
                                        type="text"
                                        placeholder="Tu nombre"
                                        className="input input-bordered"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                        disabled={loading}
                                   />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Apellido</span>
                                   </label>
                                   <input
                                        type="text"
                                        placeholder="Tu apellido"
                                        className="input input-bordered"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        required
                                        disabled={loading}
                                   />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Correo electrónico</span>
                                   </label>
                                   <input
                                        type="email"
                                        placeholder="tu@correo.com"
                                        className="input input-bordered"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        disabled={loading}
                                   />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Contraseña</span>
                                   </label>
                                   <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="input input-bordered"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        disabled={loading}
                                   />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Repetir contraseña</span>
                                   </label>
                                   <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="input input-bordered"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                        disabled={loading}
                                   />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Tipo de usuario</span>
                                   </label>
                                   <select
                                        className="select select-bordered"
                                        value={userType}
                                        onChange={(e) => setUserType(e.target.value as "freelance" | "empresa")}
                                        disabled={loading}
                                   >
                                        <option value="freelance">Freelance</option>
                                        <option value="empresa">Empresa</option>
                                   </select>
                              </div>
                              {error && (
                                   <div className="alert alert-error mt-4">
                                        <span>{error}</span>
                                   </div>
                              )}
                              <div className="form-control mt-6">
                                   <button type="submit" className="btn btn-primary" disabled={loading}>
                                        {loading ? "Cargando..." : "Registrarse"}
                                   </button>
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
}
