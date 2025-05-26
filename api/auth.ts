import { api } from "@/lib/axios"

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
        const response = await api.post(`/auth/signup`, {
            name, 
            lastName,
            email,
            password
        })

        return response.data
    }

    static async login({email, password}: {email:string, password: string}): Promise<AuthResponse> {
        const response = await api.post(`/auth/login`, {
            email,
            password
        }, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })            

        return response.data

    }

    static async validateToken(token: string): Promise<boolean> {
        try {
            const res = await api.get(`/auth/validate`, {
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
