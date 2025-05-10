import axios from "axios"
import { BASE_URL } from "@/constants/config"
import { ApiError } from "./errors/ApiError"

export type User = {
    id: string
    name: string
    lastName: string
    email: string
    role: string
    createdAt: Date
    updatedAt: Date
}

export interface AuthResponse {
    success: boolean;
    data: {
        token: string;
        user: User;
        message?: string;
    }
}

export class AuthAPI{

    static async signup({name, lastName, email, password}: {name: string, lastName: string, email: string, password: string}): Promise<AuthResponse> {
        try {            
            const response = await axios.post(`${BASE_URL}/auth/signup`, {
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

            return response.data
        } catch (error: any) {
            throw new ApiError(error.response.data.message, error.response.status)
        }
    }

    static async login({email, password}: {email:string, password: string}): Promise<AuthResponse> {
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

            return response.data
        } catch (error: any) {            
            throw new ApiError(error.response.data.message, error.response.status)
        }

    }

    static async validateToken(token: string): Promise<boolean> {
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
