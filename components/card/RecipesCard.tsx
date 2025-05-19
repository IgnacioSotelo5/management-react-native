import { Link } from "expo-router";
import { Card } from "react-native-paper";
import { ThemedText } from "../text/ThemedText";
import { Recipe } from "@/mocks/recipes";
import { useTheme } from "@/hooks/useTheme";

export function RecipeCard({recipe}:{ recipe: Pick<Recipe, 'id' | 'name'>}){
    const {colorScheme, currentColorScheme} = useTheme()
    const theme = colorScheme[currentColorScheme]

    return(
        <Link href={{
            pathname: '/(tabs)/recipes/[id]',
            params: {id: recipe.id}
        }} asChild>
            <Card 
            style={{
                borderRadius: 16,
                backgroundColor: theme.surface,
                marginBottom: 10,
                width: 260,
                height: 'auto',
                shadowColor: currentColorScheme === 'dark' ? 'transparent' : theme.primaryDark
            }}
            >
                <Card.Title title={recipe.name} />
                <Card.Content>
                    <ThemedText>
                        Aqui va la descripción de la receta
                    </ThemedText>
                </Card.Content>
            </Card>
        </Link>
    )
}