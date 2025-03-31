import { AuthAPI } from "@/api/auth"
import { ThemedText } from "@/components/text/ThemedText"
import { ThemedView } from "@/components/view/ThemedView"
import { useSession } from "@/hooks/useAuth"
import { useTheme } from "@/hooks/useTheme"
import { Stack, Link } from "expo-router"
import { useState } from "react"
import { View, TextInput, Pressable, ActivityIndicator } from "react-native"

export default function RegisterScreen(){
    const {colorScheme, currentColorScheme} = useTheme()
    const theme = colorScheme[currentColorScheme]
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('Error al registrar el usuario')
    const {signUp, isLoading} = useSession()

    const handleSignup = async () => {
        try {
           await AuthAPI.signup({name, lastName, email, password});
        } catch (error: any) {
            console.error(error)
            setErrorMessage('Error al registrar el usuario.')
        } 
    }

    return (
        <>
            <Stack.Screen 
            options={{
                headerShown: false,
                statusBarStyle: "auto",
                statusBarBackgroundColor: theme.backgroundColor,
            }}
            />
            <ThemedView withPadding className="flex-1 items-center ">
                <View className="flex-1 w-4/5 items-center">
                    <ThemedText className="w-full font-bold text-3xl mb-4">Bienvenido a SmartBake</ThemedText>
                    <View className="self-start">
                        <ThemedText className="text-xl">Crea tu cuenta</ThemedText>
                        <View className="w-full mb-10 flex flex-row items-center">
                                <ThemedText className="text-lg">¿Ya tienes cuenta?{' '}</ThemedText>
                                <Link href={'/(auth)/login'} asChild>
                                    <Pressable>
                                        <ThemedText style={{color: '#3b82f6'}} className="font-semibold text-base">
                                            Inicia sesión
                                        </ThemedText>
                                    </Pressable>
                                </Link>
                        </View>
                    </View> 
                
                    <View className="gap-8 w-full">
                        <TextInput 
                        placeholder="Nombre"
                        className="inputText dark:text-white text-slate-700"
                        value={name}
                        onChangeText={setName}
                        />
                        <TextInput 
                        placeholder="Apellido"
                        className="inputText dark:text-white text-slate-700"
                        value={lastName}
                        onChangeText={setLastName}
                        />
                        <TextInput 
                        placeholder="Email"
                        className="inputText dark:text-white text-slate-700"
                        value={email}
                        onChangeText={setEmail}
                        />
                        <TextInput 
                        placeholder="Contraseña"
                        className="inputText dark:text-white text-slate-700"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        />
                        <Pressable 
                        onPress={handleSignup}
                        className="flex justify-center items-center rounded-full mt-4 py-3 px-6 dark:bg-slate-500">
                            {
                                isLoading ? 
                                (
                                    <ActivityIndicator size='large' color={theme.color} />
                                ) : 
                                (
                                    <ThemedText className="text-xl font-semibold">Registrarse</ThemedText>
                                )
                            }
                        </Pressable>
                    </View>
                </View>
            </ThemedView>
        </>
    )
}