import { ThemedText } from "@/components/text/ThemedText"
import { ThemedView } from "@/components/view/ThemedView"
import { AUTH_ERRORS } from "@/constants/auth.constants"
import { useApiError } from "@/hooks/useApiError"
import { useSession } from "@/hooks/useAuth"
import { useTheme } from "@/hooks/useTheme"
import { Stack, Link } from "expo-router"
import { useState } from "react"
import { View, TextInput, Pressable, ActivityIndicator, Text } from "react-native"

export default function RegisterScreen(){
    const {colorScheme, currentColorScheme} = useTheme()
    const theme = colorScheme[currentColorScheme]
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const {signUp, isLoading} = useSession()
    const {handleError} = useApiError()

    const handleSignup = async () => {
        try {
           await signUp({name, lastName, email, password});
        } catch (error: any) {
            const message = handleError(error, AUTH_ERRORS.SIGNUP_ERROR, "auth")
            setErrorMessage(message)
        } 
    }

    return (
        <>
            <Stack.Screen 
            options={{
                headerShown: false,
                statusBarStyle: "auto",
                statusBarBackgroundColor: theme.background,
            }}
            />
            <ThemedView withPadding className="flex-1 items-center ">
                <View className="flex-1 w-4/5 items-center">
                    <ThemedText className="authScreensText">Bienvenido a Hornito Express🔥</ThemedText>
                    <View className="self-start">
                        <ThemedText className="text-xl">Crea tu cuenta</ThemedText>
                        <View className="w-full mb-10 flex flex-row items-center">
                                <ThemedText className="text-lg">¿Ya tienes cuenta?{' '}</ThemedText>
                                <Link href={'/(auth)/login'} asChild>
                                    <Pressable>
                                        <ThemedText variant="secondary" className="font-medium underline">
                                            Iniciar sesión
                                        </ThemedText>
                                    </Pressable>
                                </Link>
                        </View>
                    </View> 
                
                    <View className="gap-8 w-full">
                        <TextInput 
                        placeholder="Nombre"
                        className="inputText dark:text-dark-text text-light-textSecondary"
                        value={name}
                        onChangeText={setName}
                        />
                        <TextInput 
                        placeholder="Apellido"
                        className="inputText dark:text-dark-text text-light-textSecondary"
                        value={lastName}
                        onChangeText={setLastName}
                        />
                        <TextInput 
                        placeholder="Email"
                        className="inputText dark:text-dark-text text-light-textSecondary"
                        value={email}
                        onChangeText={setEmail}
                        />
                        <TextInput 
                        placeholder="Contraseña"
                        className="inputText dark:text-dark-text text-light-textSecondary"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        />
                        {
                            errorMessage && errorMessage.length > 0 ? 
                            <Text className="text-sm dark:text-dark-error text-light-error">{errorMessage}</Text> :
                            null
                        }
                        <Pressable 
                        onPress={handleSignup}
                        className="flex justify-center items-center rounded-full mt-4 py-3 px-6 dark:bg-[#caaa6e]">
                            <ThemedText style={{color: theme.surface}}  className="text-xl font-bold">
                                {
                                    isLoading ? (
                                        <ActivityIndicator size={26} color={theme.surface} style={{width: 10}}  />
                                    ) : (
                                        'Crear cuenta'
                                    )
                                }
                            </ThemedText>
                        </Pressable>
                    </View>
                </View>
            </ThemedView>
        </>
    )
}