import React, {useState, createContext, ReactNode} from 'react';

import { api } from '../services/api'



type AuthContextData = {
    user: userProps;
    isAutheticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
}

type userProps = {
    id: string;
    name: string;
    email: string;
    token: string;
}

type AuthProviderProps = {
    children: ReactNode;
}

type SignInProps = {
    email: string;
    password: string;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}: AuthProviderProps){
    const [user, setUser] = useState<userProps>({
        id: '',
        name: '',
        email: '',
        token: ''
    })
    
    const [loadingAuth, setLoadingAuth] = useState(false);
    
    const isAutheticated = !!user.name;



    async function signIn({ email, password}: SignInProps){
        setLoadingAuth(true);

        try{
            
        }catch(err){
            console.log('erro ao acessar', err)
            setLoadingAuth(false);
        }
    }
        
    
    return(
        <AuthContext.Provider value={{ user, isAutheticated, signIn}}>
            {children}
        </AuthContext.Provider>
    )
}