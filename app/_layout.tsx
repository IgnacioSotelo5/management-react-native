import { Slot } from 'expo-router';
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
import { ActivityIndicator } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

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
  const {isSessionValidated} = useSession()   
  const {colorScheme, currentColorScheme} = useTheme() 
  const theme = colorScheme[currentColorScheme]
  
    useEffect(() => {
        async function prepare(){
        try {
            await Font.loadAsync(
            {
            ...Feather.font,

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
    

    if (!appIsReady || !isSessionValidated) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.surface }}>
        <ActivityIndicator size="large"/>
      </SafeAreaView>
    )
  }


    

  return (
    <SafeAreaProvider>
      <SafeAreaView onLayout={onLayoutRootView} style={{ flex: 1, backgroundColor: theme.surface }}>
          <ThemeProvider>
            <PaperProvider>
              <Slot screenOptions={{header: () => <Header />}} />
              <StatusBar style="auto" />
            </PaperProvider>
          </ThemeProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
