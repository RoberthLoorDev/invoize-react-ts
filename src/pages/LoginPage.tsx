import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
     const { email, password, error, loading, login, setEmail, setPassword } = useLogin();
     const navigate = useNavigate();

     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          await login(email, password);
          if (!error) {
               navigate("/invoice-list");
          }
     };

     return (
          <div className="container mx-auto p-4">
               <h1 className="text-2xl font-bold mb-4">Inicia sesión en Invoize</h1>
               <div className="card w-full max-w-md bg-base-100 shadow-xl">
                    <div className="card-body">
                         <form onSubmit={handleSubmit}>
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
                              {error && (
                                   <div className="alert alert-error mt-4">
                                        <span>{error}</span>
                                   </div>
                              )}
                              <div className="form-control mt-6">
                                   <button type="submit" className="btn btn-primary" disabled={loading}>
                                        {loading ? "Cargando..." : "Iniciar sesión"}
                                   </button>
                              </div>
                              <div className="text-center mt-4">
                                   <p>
                                        ¿No tienes cuenta?{" "}
                                        <a href="/register" className="link link-primary">
                                             Regístrate
                                        </a>
                                   </p>
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
}
