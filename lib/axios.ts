import { ApiError } from "@/api/errors/ApiError";
import { BASE_URL } from "@/constants/config";
import axios from "axios";
import { getItemAsync } from "expo-secure-store";

export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})

api.interceptors.request.use(async (config) => {
    const token = await getItemAsync("session")

    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

api.interceptors.response.use(
    (response) => response,
    (error) => {
        const status = error.response?.status || 500
        const message = error.response?.data?.message || "Internal Server Error"
        const data = error.response?.data || null

        return Promise.reject(new ApiError(message, status, data))
    }
)