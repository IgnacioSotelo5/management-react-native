import { View, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { recipes } from '@/mocks/recipes';
import inventory from '@/mocks/inventory';
import { calculateIngredientCost } from '@/utils/calculateIngredientCost';
import { ThemedView } from '@/components/view/ThemedView';
import { ThemedText } from '@/components/text/ThemedText';
import { ThemedButton } from '@/components/button/ThemedButton';
import { LeftArrowIcon } from '@/components/icons';

export default function RecipeScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const recipeIndex = recipes.findIndex(recipe => recipe.id === Number(id))
    const recipe = recipes[recipeIndex]

    const ingredients = recipe.ingredients.map((ingredient) => {
        const usedIngredient = inventory.find(i => i.id === ingredient.id)
        const pricePerUnit = usedIngredient?.pricePerUnit
        const {quantityUsed, unit} = ingredient
        let price
        if(pricePerUnit && quantityUsed){
            price = calculateIngredientCost({pricePerUnit, quantityUsed, unit})
        }
        return usedIngredient 
        ? {id: usedIngredient.id, name: usedIngredient.name, price} 
        : null
    })

    const baseTotal = ingredients.map(i => i?.price || 0).reduce((acc, price) => acc + price, 0);
    const totalPrice = Math.round(baseTotal * 1.3)

    return (
        <ThemedView withPadding className='flex-1 items-center'>
            <ThemedButton>
                <LeftArrowIcon size={40} />
            </ThemedButton>
            <ThemedText style={styles.title}>{recipe.name}</ThemedText>
            <ThemedText className='w-[90%] text-xl'>{recipe.instructions}</ThemedText>
            {
                ingredients.map((ing) => (
                <View className='flex flex-row gap-8 justify-between w-[90%] px-3' key={ing?.id}>
                    <ThemedText style={styles.idText}>{ing?.name}</ThemedText>
                    <View style={styles.price}>
                        <ThemedText style={styles.idText}>$</ThemedText>
                        <ThemedText style={styles.idText}>{ing?.price}</ThemedText>
                    </View>
                </View>
            ))
            }

            <ThemedText style={styles.idText}>Precio total: ${totalPrice}</ThemedText>
            
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        marginBottom: 16
    },
    idText: {
        fontSize: 18,
    },
    price: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        minWidth: 60,
        maxWidth: 100
    }
});