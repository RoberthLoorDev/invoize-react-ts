export interface UserProfile {
     id: number;
     userId: string;
     email: string;
     firstName: string;
     lastName: string;
     userType: "freelance" | "empresa";
}

export interface SignUpFormData {
     email: string;
     password: string;
     firstName: string;
     lastName: string;
     userType: "freelance" | "empresa";
}
