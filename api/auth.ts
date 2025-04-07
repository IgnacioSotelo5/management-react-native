import axios, { AxiosResponse } from "axios"
import { BASE_URL } from "@/constants/config"

type User = {
    id: string
    name: string
    lastName: string
    email: string
    role: string
    createdAt: Date
    updatedAt: Date
}

interface SignupResponse{
    token?: string
    message?: string
    error?: string
    user?: User
   
}

interface Response extends AxiosResponse<SignupResponse>{
    data: SignupResponse
}

export class AuthAPI{

    static async signup({name, lastName, email, password}: {name: string, lastName: string, email: string, password: string}): Promise<Response> {
        try {            
            const response: Response = await axios.post<SignupResponse>(`${BASE_URL}/auth/signup`, {
                name, 
                lastName,
                email,
                password
            },
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })

            return response
        } catch (error: any) {
            console.error(error)
            throw new Error(error.message || 'No se pudo completar el registro.')
        }
    }

    static async login({email, password}: {email:string, password: string}): Promise<any> {
        try {
            const response = await axios.post(`${BASE_URL}/auth/login`, {
                email,
                password
            }, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })

            if(response.status >= 300){
                throw new Error('No se pudo iniciar sesión.')
            } else{
                return response.data
            }
        } catch (error: any) {
            throw new Error(error.message || 'Error al intentar iniciar sesión.')
        }

    }

    static async validateToken(token: string){
        try {
            const res = await axios.get(`${BASE_URL}/auth/validate`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            return res.data.success

        } catch{
            return false
        }
    }

}
