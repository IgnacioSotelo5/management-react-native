import { Href, Link } from "expo-router";
import { Card } from "react-native-paper";
import { ThemedText } from "../text/ThemedText";
import { useTheme } from "@/hooks/useTheme";


export interface LinkedCardProps{
    title: string
    content: string
    bgColor: {
        dark: string
        light: string
    }
    href: Href
}

export function HeroCard({item}: {item: LinkedCardProps}){
    const {title, content, bgColor, href} = item
    const {fontFamily, colorScheme, currentColorScheme} = useTheme()
    const {rubik} = fontFamily
    const theme = colorScheme[currentColorScheme]    
    

    return(
        <Link key={title} href={href} asChild>
            <Card contentStyle={{backgroundColor: bgColor[currentColorScheme], borderRadius: 4}}  className="w-72 min-h-36 max-h-40 flex gap-1 backdrop-blur-md shadow-md" >
                <Card.Title titleStyle={{fontFamily: rubik.bold, color: theme.text}} title={title} />
                <Card.Content style={{minWidth: 265}}>
                    <ThemedText className="text-lg text-balance">
                        {content}
                    </ThemedText>
                </Card.Content>
            </Card>
        </Link>
    )
}
