import { ThemedText } from "@/components/text/ThemedText"
import { ThemedView } from "@/components/view/ThemedView"
import { useSession } from "@/hooks/useAuth"
import { useTheme } from "@/hooks/useTheme"
import { Stack, Link } from "expo-router"
import { useState } from "react"
import { ActivityIndicator } from "react-native"
import { View, Pressable, TextInput } from "react-native"

export default function LoginScreen(){
    const {colorScheme, currentColorScheme} = useTheme()
    const theme = colorScheme[currentColorScheme]
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signIn, isLoading } = useSession()

    const onLogin = async () => {
        try {
            await signIn({email, password})
        } catch (error: any) {
            throw new Error('Error al iniciar sesión. ' + error.message)
        }
    }
    return(
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
                    <ThemedText className="font-bold text-3xl mb-4">Bienvenido a SmartBake</ThemedText>
                    <View className="self-start">
                        <ThemedText className="font-regular text-xl">Inicia sesión con tu cuenta</ThemedText>
                        <View className="mb-10 flex flex-row items-center">
                            <ThemedText className="text-lg"> ¿Aún no tienes una cuenta?{' '}</ThemedText> 
                            <Link href={'/(auth)/signup'} asChild>
                                <Pressable>
                                    <ThemedText style={{color: '#3b82f6'}} className="font-semibold text-base">
                                        Registrate
                                    </ThemedText>
                                </Pressable>
                            </Link>
                        </View>
                    </View>
                    <View className="mb-8 gap-8 w-full">
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
                    onPress={onLogin}
                    className="flex justify-center items-center rounded-full py-3 px-6 dark:bg-slate-500">
                        <ThemedText className="text-xl font-semibold">
                            {
                                isLoading ? (
                                    <ActivityIndicator />
                                ) : (
                                    'Iniciar sesión'
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