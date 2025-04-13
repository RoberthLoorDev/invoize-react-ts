import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function InvoiceListPage() {
     const { signOut } = useAuth();
     const navigate = useNavigate();

     const handleSignOut = async () => {
          await signOut();
          navigate("/login");
     };

     return (
          <div className="container mx-auto p-4">
               <h1 className="text-2xl font-bold mb-4">Lista de Facturas</h1>
               <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                         <p> Aquí aparecerán tus facturas (próximamente). </p>
                         <button className="btn btn-secondary mt-4" onClick={handleSignOut} disabled={false}>
                              Cerrar sesión
                         </button>
                    </div>
               </div>
          </div>
     );
}
