import { Header } from '@/components/header/Header';
import { useSession } from '@/hooks/useAuth';
import { Stack } from 'expo-router';

export default function AppLayout() {
  const {isLoading} = useSession()
  
  if(isLoading) return null

  return(
    <Stack screenOptions={{header: () => <Header />}}>
      <Stack.Screen name='(tabs)' />
    </Stack>
  )
}
