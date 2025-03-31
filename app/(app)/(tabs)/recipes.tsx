import { ThemedText } from "@/components/text/ThemedText";
import { ThemedView } from "@/components/view/ThemedView";

export default function RecipesScreen(){
    return(
        <ThemedView withPadding className="flex-1">
            <ThemedText className="text-3xl font-thin">Pantalla de recetas thin yyyyyyyyyyyyy\</ThemedText>
            <ThemedText className="text-3xl font-light">Pantalla de recetas light yyyyyyyyyyyyy\</ThemedText>
            <ThemedText className="text-3xl font-normal">Pantalla de recetas normal yyyyyyyyyyyyy\</ThemedText>
            <ThemedText className="text-3xl font-medium">Pantalla de recetas medium yyyyyyyyyyyyy\</ThemedText>
            <ThemedText className="text-3xl font-semibold">Pantalla de recetas semibold yyyyyyyyyyyyy\</ThemedText>
            <ThemedText className="text-3xl font-bold">Pantalla de recetas bold yyyyyyyyyyyyy\</ThemedText>
        </ThemedView>
    )
}