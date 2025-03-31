import { Stack } from "expo-router";

export default function AuthLayout(){    
    return (
        <Stack>
            <Stack.Screen name="login" options={{title: 'Iniciar sesión'}} />
            <Stack.Screen name="signup" options={{title: 'Registrarse'}} />
        </Stack>
    )
}