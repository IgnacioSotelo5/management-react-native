import { ApiError } from "./ApiError";

type ErrorMessagesMap = Record<number, string>;

const createErrorMessages = (customMessages: Record<number, string>) => ({
    400: customMessages[400] || 'Error en la solicitud. Por favor, verifica los datos enviados.',
    401: customMessages[401] || 'No tienes permisos para esta acción.',
    404: customMessages[404] || 'Hubo un error al encontrar el recurso solicitado.',
    409: customMessages[409] || 'El recurso ya existe.',
    500: customMessages[500] || 'Error interno del servidor. Por favor, intenta más tarde.',
})

const AuthErrorMessages: ErrorMessagesMap = createErrorMessages({
    401: 'El usuario o contraseña son incorrectos.',
    404: 'Usuario no encontrado.',
    409: 'El correo electrónico ya está en uso.',
    500: 'Error interno del servidor. Por favor, intenta más tarde.',
})

const UserErrorMessages: ErrorMessagesMap = createErrorMessages({
    400: 'Error en la solicitud. Por favor, verifica los datos enviados.',
    401: 'No tienes permisos para acceder a este recurso.',
    404: 'Usuario no encontrado.',
    500: 'Error interno del servidor. Por favor, intenta más tarde.',
})

const IngredientsErrorMessages: ErrorMessagesMap = createErrorMessages({
    400: 'Error en la solicitud. Por favor, verifica los datos enviados.',
    401: 'No tienes permisos para acceder a este recurso.',
    404: 'Ingrediente no encontrado.',
    500: 'Error interno del servidor. Por favor, intenta más tarde.',
})

const ErrorMessages: Record<string, ErrorMessagesMap> = {
    auth: AuthErrorMessages,
    user: UserErrorMessages,
    ingredients: IngredientsErrorMessages,
};

export const errorHandlers: Record<string, (error: ApiError) => string> = Object.fromEntries(
    Object.entries(ErrorMessages).map(([key, messages]) => [
        key,
        (error: ApiError) => messages[error.status],
    ])
);
