import { Slot, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import 'react-native-reanimated';
import '@/global.css'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { ThemeProvider } from '@/context/theme.context';
import { AuthProvider } from '@/context/auth.context';
import { PaperProvider } from 'react-native-paper'
import { useSession } from '@/hooks/useAuth';
import * as Font from 'expo-font'
import { Header } from '@/components/header/Header';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  return(
    <AuthProvider>
      <App />
    </AuthProvider>
  )
  
}


export function App(){
  const [appIsReady, setAppIsReady] = useState(false)
  const {isSessionValidated, session} = useSession()    
  
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
        if(appIsReady && isSessionValidated){
          SplashScreen.hideAsync()
        }
    }, [appIsReady, isSessionValidated])
    

    if(!appIsReady || !isSessionValidated){
        return null
    }

    

  return (
    <SafeAreaProvider>
      <SafeAreaView onLayout={onLayoutRootView} className='bg-slate-300 dark:bg-slate-800' style={{ flex: 1 }}>
        <AuthProvider>
          <ThemeProvider>
            <PaperProvider>
              <Slot screenOptions={{header: () => <Header />}} />
              <StatusBar style="auto" />
            </PaperProvider>
          </ThemeProvider>
        </AuthProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
