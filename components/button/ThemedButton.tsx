import { useTheme } from "@/hooks/useTheme";
import { ReactNode } from "react";
import { Pressable, PressableProps } from "react-native";
import { StyleProp, ViewStyle } from "react-native";

interface ThemedButtonProps extends PressableProps {
    children: ReactNode
    className?: string
}

export function ThemedButton({children, style, ...props}: ThemedButtonProps & { style?: StyleProp<ViewStyle> }){
    const {colors} = useTheme()
    return(
        <Pressable 
        style={[{backgroundColor: colors.backgroundColor}, style]} 
        {...props}
        >
            {children}
        </Pressable>
    )
}