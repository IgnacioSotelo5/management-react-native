import { Header } from "@/components/header/Header";
import { HomeIcon } from "@/components/icons";
import { useSession } from "@/hooks/useAuth";
import { Redirect, Tabs } from "expo-router";

export default function TabLayout(){
    const {session, isLoading} = useSession()
    
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
                    tabBarStyle: {backgroundColor: 'transparent'},
                    tabBarActiveTintColor: 'black',
                    tabBarItemStyle: {
                        backgroundColor: '#2d3b5b',
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

// return(
//     <Tabs
//         screenOptions={{
//             headerShown: false,
//             tabBarStyle: {backgroundColor: 'transparent'},
//             tabBarActiveTintColor: 'black',
//             tabBarItemStyle: {
//                 backgroundColor: '#2d3b5b',
//             },
            
//         }}
//         >
//             <Tabs.Screen
//             name="index" 
//             options={{
//                 title: 'Home',
//                 tabBarIcon: ({color, focused, size}) => <HomeIcon size={size} focused={focused} color={color} />,
//             }}
//             />
//             <Tabs.Screen 
//             name="recipes/index"
//             options={{
//                 title: 'Recetas',
//                 tabBarIcon: ({color, focused, size}) => <HomeIcon size={size} focused={focused} color={color} />,
//             }}
//             />
//             <Tabs.Screen 
//             name="inventary"
//             options={{
//                 title: 'Inventario',
//                 tabBarIcon: ({color, focused, size}) => <HomeIcon size={size} focused={focused} color={color} />,
                
//             }}
//             />
//             <Tabs.Screen 
//             name="orders"
//             options={{
//                 title: 'Pedidos',
//                 tabBarIcon: ({color, focused, size}) => <HomeIcon size={size} focused={focused} color={color} />,
                
//             }}
//             />
//     </Tabs>
// )