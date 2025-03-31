import { HomeIcon } from "@/components/icons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout(){
    return(
        <Tabs
        screenOptions={{
            headerShown: false,
            tabBarStyle: {backgroundColor: 'transparent'},
            tabBarActiveTintColor: 'black',
            tabBarItemStyle: {
                backgroundColor: '#2d3b5b',
            },
            
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
            name="recipes"
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
        </Tabs>
    )
}