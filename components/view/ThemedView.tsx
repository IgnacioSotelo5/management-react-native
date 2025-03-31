import { useTheme } from "@/hooks/useTheme";
import { View, ViewProps } from "react-native";

interface ThemedViewProps extends ViewProps{
    withPadding?: boolean
}

export function ThemedView({children, className = "", withPadding = false, ...props}: ThemedViewProps){
    const {colorScheme, currentColorScheme} = useTheme()
    const theme = colorScheme[currentColorScheme]
    
    return(
        <View style={{paddingTop: withPadding ? 90 : 0, backgroundColor: theme.backgroundColor }} className={className} {...props}>
            {children}
        </View>
    )
}