import { AuthAPI } from "@/api/auth";
import { useStorageState } from "@/hooks/useStorageState";
import { router } from "expo-router";
import { createContext, ReactNode, useEffect, useState } from "react";

interface AuthContextProps{
    signUp: (credentials: {name: string, lastName: string, email: string, password: string}) => Promise<void>
    signIn: (credentials: {email: string, password: string}) => Promise<void>
    signOut: () => void
    session?: string | null
    isAuthLoading: boolean
    isLoading: boolean
}

const noop = async () => console.warn('No implementation provided for this function.')

const authConfig: AuthContextProps = {
    signUp: noop,
    signOut: noop,
    signIn: noop,
    session: null,
    isAuthLoading: true,
    isLoading: true
}

export const AuthContext = createContext<AuthContextProps>(authConfig)


export function AuthProvider({children}: {children: ReactNode}){
    const [[isAuthLoading, session], setSession] = useStorageState('session')    
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        if(!isAuthLoading && session){
            AuthAPI.validateToken(session)
            .then((isValid) => {
                
                if(!isValid){
                    setSession(null)
                    router.replace('/(auth)/login')
                }
            })
            .catch((error) => {
                setSession(null)
                router.replace('/(auth)/login')
            })
        }
    }, [isAuthLoading, session])
    

    return(
        <AuthContext.Provider 
        value={{
            signUp: async ({name, lastName, email, password}) => {
                try {
                    setIsLoading(true)
                    const res = await AuthAPI.signup({name, lastName, email, password})
                    if(res.data && res.data.token){                        
                        setSession(res.data.token)
                        setIsLoading(false)
                        router.replace('/')
                    }
                } catch (error: any) {                    
                    setIsLoading(false)
                    throw new Error(`Error al registrar al usuario: ${error.message}`)
                }
            },
            signIn: async (credentials: {email: string, password: string}) => {
                try {       
                    setIsLoading(true)             
                    const data = await AuthAPI.login(credentials)
                    
                    if(data && data.data.token){
                        setSession(data.data.token)
                        setIsLoading(false)
                        router.replace('/')
                    }                    
                } catch (error: any) {
                    setIsLoading(false)
                    console.error('Error al iniciar sesión: ', error.message)
                }
            },
            signOut: () => {
                setSession(null)
                router.replace('/(auth)/login')
            }, 
            session,
            isAuthLoading,
            isLoading
        }}>
            {children}
        </AuthContext.Provider>
    )
}