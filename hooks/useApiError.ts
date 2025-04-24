import { ApiError } from "@/api/errors/ApiError";
import { errorHandlers } from "@/api/errors/errorMessages"

export function useApiError(){
    const handleError = (error: unknown, fallbackMessage: string = 'Ocurrió un error inesperado.', scope: string = ""): string => {
        if(error instanceof ApiError && scope in errorHandlers){ 
            return errorHandlers[scope](error) || fallbackMessage
        }
        
        return fallbackMessage
    }

    return { handleError }
}