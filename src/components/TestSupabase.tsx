import { supabase } from "../supabase/supabase";

const TestSupabase: React.FC = () => {
     const checkConnection = async () => {
          try {
               const { data, error } = await supabase.auth.getSession();
               if (error) throw error;
               console.log("Conexión exitosa:", data);
               alert("¡Conexión con Supabase funciona!");
          } catch (error) {
               console.error("Error:", error);
               alert("Hubo un problema al conectar con Supabase");
          }
     };

     return (
          <div className="container mx-auto p-4">
               <h1 className="text-2xl font-bold mb-4">Prueba de Supabase</h1>
               <button className="btn btn-primary" onClick={checkConnection}>
                    Probar conexión
               </button>
          </div>
     );
};

export default TestSupabase;
