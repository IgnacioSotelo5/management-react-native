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
    isSessionValidated?: boolean
}

const noop = async () => console.warn('No implementation provided for this function.')

const authConfig: AuthContextProps = {
    signUp: noop,
    signOut: noop,
    signIn: noop,
    session: null,
    isAuthLoading: true,
    isLoading: true,
    isSessionValidated: false
}

export const AuthContext = createContext<AuthContextProps>(authConfig)


export function AuthProvider({children}: {children: ReactNode}){
    const [[isAuthLoading, session], setSession] = useStorageState('session')    
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isSessionValidated, setIsSessionValidated] = useState<boolean>(false)    

    useEffect(() => {
        if (!isAuthLoading && session) {
            AuthAPI.validateToken(session)
            .then((isValid) => {
                if (!isValid && session !== null) {
                setSession(null)
                router.replace('/(auth)/login')
                }
            })
            .catch(() => {
                if (session !== null) {
                setSession(null)
                router.replace('/(auth)/login')
                }
            })
            .finally(() => {
                setIsSessionValidated(true)
            })
        } else if (!isAuthLoading && !session) {
            setIsSessionValidated(true)
        }
    }, [isAuthLoading, session])


 

    if(!isSessionValidated){
        return null
    }

    return(
        <AuthContext.Provider 
        value={{
            signUp: async ({name, lastName, email, password}) => {
                try {
                    setIsLoading(true)
                    const data = await AuthAPI.signup({name, lastName, email, password})
                    
                    if(data && data.success && data.data && data.data.token){                        
                        setSession(data.data.token)
                        setIsLoading(false)
                        router.replace('/')
                    }
                } catch (error: any) {                    
                    setIsLoading(false)
                    throw error
                }
            },
            signIn: async (credentials: {email: string, password: string}) => {
                try {       
                    setIsLoading(true)             
                    const data = await AuthAPI.login(credentials)
                    
                    if(data && data.success && data.data && data.data.token){
                        setSession(data.data.token)
                        setIsLoading(false)
                        router.replace('/')
                    }
                } catch (error: any) {                    
                    setIsLoading(false)                    
                    throw error                    
                }
            },
            signOut: () => {
                setSession(null)
                router.replace('/(auth)/login')
            }, 
            session,
            isAuthLoading,
            isLoading,
            isSessionValidated
        }}>
            {children}
        </AuthContext.Provider>
    )
}