import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { supabase } from "../supabase/supabase";
import { authService } from "../services/authService";
import type { User } from "@supabase/supabase-js";
import type { UserProfile } from "../types/userTypes";

interface AuthContextType {
     user: User | null;
     profile: UserProfile | null;
     loading: boolean;
     signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
     const [user, setUser] = useState<User | null>(null);
     const [profile, setProfile] = useState<UserProfile | null>(null);
     const [loading, setLoading] = useState<boolean>(true);

     useEffect(() => {
          const getSession = async () => {
               const { data } = await supabase.auth.getSession();
               setUser(data.session?.user ?? null);
               setLoading(false);
          };

          getSession();

          const { data: authListener } = supabase.auth.onAuthStateChange((_, session) => {
               setUser(session?.user ?? null);
               setLoading(false);
          });

          return () => {
               authListener.subscription.unsubscribe();
          };
     }, []);

     useEffect(() => {
          const fetchProfile = async () => {
               if (user) {
                    const { data, error } = await supabase
                         .from("profiles")
                         .select("id, user_id, email, first_name, last_name, user_type")
                         .eq("user_id", user.id)
                         .single();

                    if (!error && data) {
                         setProfile({
                              id: data.id,
                              userId: data.user_id,
                              email: data.email,
                              firstName: data.first_name,
                              lastName: data.first_name,
                              userType: data.user_type,
                         });
                    } else {
                         setProfile(null);
                    }
               } else {
                    setProfile(null);
               }
          };

          fetchProfile();
     }, [user]);

     const signOut = async () => {
          const { error } = await authService.signOut();
          if (error) {
               console.error("Error al cerrar sesión:", error);
          }
     };

     return <AuthContext.Provider value={{ user, profile, loading, signOut }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
     const context = useContext(AuthContext);
     if (context === undefined) {
          throw new Error("useAuth must be used within an AuthProvider");
     }
     return context;
}
