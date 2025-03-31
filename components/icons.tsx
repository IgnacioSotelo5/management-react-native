import { Feather } from '@expo/vector-icons'
import { TextProps } from 'react-native'

type FeatherIconName = keyof typeof Feather.glyphMap

interface IconProps extends TextProps{
    name?: FeatherIconName;
    size?: number ;
    color?: string;
    focused?: boolean
}

export function HomeIcon({name = "home", size, color, ...rest}: IconProps){
    return <Feather
    name={name}
    size={size}
    color={color}
    
    {...rest}/>
}

export function LeftArrowIcon({name= "chevron-left", size, color, ...rest}: IconProps){
    return <Feather name={name} size={size} color={color}{...rest}/>
}

