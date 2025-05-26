import { ApiError } from "@/api/errors/ApiError";
import { errorHandlers } from "@/api/errors/errorMessages"

export enum ErrorScope{
   AUTH = 'auth',
   USER = 'user',
   INGREDIENTS =  'ingredients'
}

export function useApiError(){
    const handleError = (error: unknown, fallbackMessage: string = 'Ocurrió un error inesperado.', scope: ErrorScope): string => {
        if(error instanceof ApiError && scope in errorHandlers){ 
            return errorHandlers[scope](error) || fallbackMessage
        }
        
        return fallbackMessage
    }

    return { handleError }
}