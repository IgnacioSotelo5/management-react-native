import { Header } from "@/components/header/Header";
import { HomeIcon } from "@/components/icons";
import { useSession } from "@/hooks/useAuth";
import { useTheme } from "@/hooks/useTheme";
import { Redirect, Tabs } from "expo-router";

export default function TabLayout(){
    const {session, isLoading} = useSession()
    const { colorScheme, currentColorScheme } = useTheme()
    const theme = colorScheme[currentColorScheme]
    
    if(isLoading) {
        return null
    }    

    return(
        <>
        {
            session !== null ? (
                <Tabs
                screenOptions={{
                    header: () => <Header />,
                    tabBarStyle: {borderColor: theme.border, borderTopWidth: 1, backgroundColor: theme.background},
                    tabBarActiveTintColor: theme.primary,
                    tabBarItemStyle: {
                        backgroundColor: theme.background,
                    }
                }}
                >
                    <Tabs.Screen
                    name="index" 
                    options={{
                        title: 'Home',
                        tabBarIcon: ({color, focused, size}) => <HomeIcon size={size} focused={focused} color={color} />,
                    }}
                    />
                    <Tabs.Screen 
                    name="recipes/index"
                    options={{
                        title: 'Recetas',
                        tabBarIcon: ({color, focused, size}) => <HomeIcon size={size} focused={focused} color={color} />,
                    }}
                    />
                    <Tabs.Screen 
                    name="inventary"
                    options={{
                        title: 'Inventario',
                        tabBarIcon: ({color, focused, size}) => <HomeIcon size={size} focused={focused} color={color} />,
                        
                    }}
                    />
                    <Tabs.Screen 
                    name="orders"
                    options={{
                        title: 'Pedidos',
                        tabBarIcon: ({color, focused, size}) => <HomeIcon size={size} focused={focused} color={color} />,
                        
                    }}
                    />
                    <Tabs.Screen 
                    name="recipes/[id]"
                    options={{
                        href: null
                    }}
                    />
                </Tabs>
            ) : (
                <Redirect href={'/(auth)/login'} />
            )
        }
    </>
    )

}