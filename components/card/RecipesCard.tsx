import { Href, Link } from "expo-router";
import { Card } from "react-native-paper";
import { ThemedText } from "../text/ThemedText";
import { Recipe } from "@/mocks/recipes";

export function RecipeCard({recipe}:{ recipe: Pick<Recipe, 'id' | 'name'>}){
    return(
        <Link href={{
            pathname: '/(app)/[id]',
            params: {id: recipe.id}
        }}>
            <Card>
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