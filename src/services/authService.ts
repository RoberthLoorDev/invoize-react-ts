import { supabase } from "../supabase/supabase";
import type { AuthResponse } from "@supabase/supabase-js";
import type { SignUpFormData } from "../types/userTypes";

interface SignUpResponse {
     user: AuthResponse["data"]["user"] | null;
     error: string | null;
}

interface SignInResponse {
     user: AuthResponse["data"]["user"] | null;
     error: string | null;
}

interface SignOutResponse {
     error: string | null;
}

export const authService = {
     async signUp(formData: SignUpFormData): Promise<SignUpResponse> {
          const { email, password, firstName, lastName, userType } = formData;

          try {
               // Registrar usuario en Supabase Auth
               const { data, error } = await supabase.auth.signUp({
                    email,
                    password,
               });

               if (error) {
                    return { user: null, error: error.message };
               }

               // Iniciar sesión para obtener una sesión válida
               if (data.user) {
                    const { error: signInError } = await supabase.auth.signInWithPassword({
                         email,
                         password,
                    });

                    if (signInError) {
                         return { user: null, error: "Error al autenticar tras registro: " + signInError.message };
                    }

                    // Guardar datos en la tabla profiles
                    const { error: profileError } = await supabase.from("profiles").insert({
                         user_id: data.user.id,
                         email,
                         first_name: firstName,
                         last_name: lastName,
                         user_type: userType,
                    });

                    if (profileError) {
                         return { user: null, error: profileError.message };
                    }
               }

               return { user: data.user, error: null };
          } catch (error) {
               return { user: null, error: (error as Error).message };
          }
     },

     async signIn(email: string, password: string): Promise<SignInResponse> {
          try {
               const { data, error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
               });

               if (error) {
                    return { user: null, error: error.message };
               }

               return { user: data.user, error: null };
          } catch (error) {
               return { user: null, error: (error as Error).message };
          }
     },

     async signOut(): Promise<SignOutResponse> {
          try {
               const { error } = await supabase.auth.signOut();
               if (error) {
                    return { error: error.message };
               }
               return { error: null };
          } catch (error) {
               return { error: (error as Error).message };
          }
     },
};
