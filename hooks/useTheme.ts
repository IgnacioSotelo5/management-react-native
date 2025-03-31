import { ThemeContext } from "@/context/theme.context";
import { useContext } from "react";
import { useColorScheme } from "react-native";

export const useTheme = () => {
    const theme = useContext(ThemeContext)
    const currentColorScheme = useColorScheme() || 'light'

    return{
        ...theme, 
        currentColorScheme,
        colors: theme.colorScheme[currentColorScheme]
    }
}