import { IngredientsAPI } from "@/api/ingredients";
import { IngredientsTable } from "@/components/IngredientsTable";
import { ThemedText } from "@/components/text/ThemedText";
import { ThemedView } from "@/components/view/ThemedView";
import { Ingredient } from "@/types/ingredients";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";

export default function InventaryScreen(){
    const [ingredients, setIngredients] = useState<Ingredient[]>([])    

    useEffect(() => {        
        const fetchIngredients = async () => {
            const response = await IngredientsAPI.getIngredients()
            
            setIngredients(response.data)
        }
    
        fetchIngredients()
    }, []);    
    
    return(
        <>
            <Stack.Screen />
            <ThemedView withPadding className="flex-1">
                <ThemedText className="text-3xl w-full font-semibold">
                    Inventario
                </ThemedText>
                <IngredientsTable ingredients={ingredients} />
            </ThemedView>
        </>
    )
}