import { AuthAPI } from "@/api/auth";
import { useStorageState } from "@/hooks/useStorageState";
import { router } from "expo-router";
import { createContext, ReactNode, useEffect } from "react";

interface AuthContextProps{
    signUp: (credentials: {name: string, lastName: string, email: string, password: string}) => Promise<void>
    signIn: (credentials: {email: string, password: string}) => Promise<void>
    signOut: () => void
    session?: string | null
    isLoading: boolean
}

const noop = async () => console.warn('No implementation provided for this function.')

const authConfig: AuthContextProps = {
    signUp: noop,
    signOut: noop,
    signIn: noop,
    session: null,
    isLoading: true
}

export const AuthContext = createContext<AuthContextProps>(authConfig)


export function AuthProvider({children}: {children: ReactNode}){
    const [[isLoading, session], setSession] = useStorageState('session')    
    
    useEffect(() => {
        if(session){
            AuthAPI.validateToken(session)
        }
    },[])

    return(
        <AuthContext.Provider 
        value={{
            signUp: async ({name, lastName, email, password}) => {
                try {
                    
                    const res = await AuthAPI.signup({name, lastName, email, password})
                    if(res.data && res.data.token){                        
                        setSession(res.data.token)
                        router.replace('/')
                    }
                } catch (error: any) {                    
                    throw new Error(`Error al registrar al usuario: ${error.message}`)
                }
            },
            signIn: async (credentials: {email: string, password: string}) => {
                try {
                    const data = await AuthAPI.login(credentials)
                    
                    if(data && data.token){
                        setSession(data.token)
                        router.replace('/')
                    }
                } catch (error: any) {
                    console.error('Error al iniciar sesión: ', error.message)
                }
            },
            signOut: () => {
                setSession(null)
                router.replace('/(auth)/login')
            }, 
            session,
            isLoading
        }}>
            {children}
        </AuthContext.Provider>
    )
}