import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import 'react-native-reanimated';
import '@/global.css'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as Font from 'expo-font'
import { Feather } from '@expo/vector-icons';
import { ThemeProvider } from '@/context/theme.context';
import { AuthProvider } from '@/context/auth.context';
import { PaperProvider } from 'react-native-paper'
import { useSession } from '@/hooks/useAuth';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false)
  const {session, isLoading} = useSession()
  
  useEffect(() => {
    async function prepare(){
       try {
        await Font.loadAsync(
        {
          ...Feather.font,
          "Quicksand-Light": require("@expo-google-fonts/quicksand/Quicksand_300Light.ttf"),
          "Quicksand-Regular": require("@expo-google-fonts/quicksand/Quicksand_400Regular.ttf"),
          "Quicksand-Medium": require("@expo-google-fonts/quicksand/Quicksand_500Medium.ttf"),
          "Quicksand-SemiBold": require("@expo-google-fonts/quicksand/Quicksand_600SemiBold.ttf"),
          "Quicksand-Bold": require("@expo-google-fonts/quicksand/Quicksand_700Bold.ttf"),
          "Inter-Light": require('@expo-google-fonts/inter/Inter_300Light.ttf'),
          "Inter-Regular": require('@expo-google-fonts/inter/Inter_400Regular.ttf'),
          "Inter-Medium": require('@expo-google-fonts/inter/Inter_500Medium.ttf'),
          "Inter-SemiBold": require('@expo-google-fonts/inter/Inter_600SemiBold.ttf'),
          "Inter-Bold": require('@expo-google-fonts/inter/Inter_700Bold.ttf'),
        })
      } catch (e) {
        console.warn(e)
      } finally{
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(() => {
    if(appIsReady && !isLoading){
      SplashScreen.hide()
    }
  }, [appIsReady, isLoading])

  if(!appIsReady){
    return null
  }
  

  return (
    <SafeAreaProvider>
      <SafeAreaView className='bg-slate-300 dark:bg-slate-800' onLayout={onLayoutRootView} style={{ flex: 1 }}>
        <AuthProvider>
          <ThemeProvider>
            <PaperProvider>
              <Stack screenOptions={{headerShown: false}}>
              {
                session ? (
                  <Stack.Screen name='(app)' />
                ) : (
                  <Stack.Screen name='(auth)' />
                )
              }
              </Stack>
              <StatusBar style="auto" />
            </PaperProvider>
          </ThemeProvider>
        </AuthProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
  
}

