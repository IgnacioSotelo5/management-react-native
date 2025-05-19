import { useTheme } from "@/hooks/useTheme";
import { View, ViewProps } from "react-native";

interface ThemedViewProps extends ViewProps{
    withPadding?: boolean
    variant?: "background" | "surface"
}

export function ThemedView({children, className = "", withPadding = false, variant = "background", ...props}: ThemedViewProps){
    const {colorScheme, currentColorScheme} = useTheme()
    const theme = colorScheme[currentColorScheme]

    const backgroundColor = variant === "background" ? theme.background : theme.surface
    
    return(
        <View style={{paddingTop: withPadding ? 90 : 0, backgroundColor }} className={className} {...props}>
            {children}
        </View>
    )
}