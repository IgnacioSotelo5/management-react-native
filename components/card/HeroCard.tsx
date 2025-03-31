import { Href, Link } from "expo-router";
import { Card } from "react-native-paper";
import { ThemedText } from "../text/ThemedText";


export interface LinkedCardProps{
    title: string
    content: string
    bgColor: string
    href: Href
}

export function HeroCard({item}: {item: LinkedCardProps}){
    const {title, content, bgColor, href} = item

    return(
        <Link key={title} href={href} asChild>
            <Card style={{backgroundColor: bgColor}} className="w-72 min-h-36 max-h-48 flex gap-3" >
                <Card.Title className="font-semibold" title={title} />
                <Card.Content>
                    <ThemedText>
                        {content}
                    </ThemedText>
                </Card.Content>
            </Card>
        </Link>
    )
}
