import { HeroCard, LinkedCardProps } from "@/components/card/HeroCard";
import { RecipeCard } from "@/components/card/RecipesCard";
import { ThemedText } from "@/components/text/ThemedText";
import { ThemedView } from "@/components/view/ThemedView";
import { useTheme } from "@/hooks/useTheme";
import { recipes } from "@/mocks/recipes";
import { Link } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, View } from "react-native";
import { Chip, Divider, Searchbar } from "react-native-paper";

const CARDS: LinkedCardProps[] = [
    {
        title: 'Inventario',
        content: 'Administra tu inventario y mantén tu materia prima actualizada',
        bgColor: '#ea580c',
        href: '/(app)/(tabs)/inventary'

    },
    {
        title: 'Recetas',
        content: 'Actualiza tus recetas automáticamente para mantener tus precios al día',
        bgColor: '#d97706',
        href: '/(app)/(tabs)/recipes'

        
    },
    {
        title: 'Pedidos',
        content: 'Registra tus pedidos, haz su seguimiento y recibe notificaciones sobre su estado',
        bgColor: '#fb923c',
        href: '/(app)/(tabs)/orders'

    }
]

const CATEGORIES = [
    {
        name: 'Panes'
    },
    {
        name: 'Bollería'
    },
    {
        name: 'Pasteles'
    },
    {
        name: 'Galletas'
    },
    {
        name: 'Postres'
    },
    {
        name: 'Salados'
    }
]

export default function HomeScreen(){
    const [searchQuery, setSearchQuery] = useState('')
    const { currentColorScheme, colors } = useTheme()
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    
    const toggleCategory = (category: string) => {
        setSelectedCategories(prevSelected => 
            prevSelected?.includes(category)
            ? prevSelected.filter(cat => cat !== category)
            : [...prevSelected, category]
        )
    }

    return(
        <ThemedView withPadding className="flex-1 w-screen self-center">
            <ThemedView>
                <FlatList
                contentContainerStyle={styles.flatListContainer}
                horizontal
                data={CARDS}
                renderItem={({item}) => <HeroCard item={item} />}
                keyExtractor={({title}) => title}
                showsHorizontalScrollIndicator={false}
                />
            </ThemedView>
            <View className="flex flex-col w-[90%] self-center gap-y-10 ">
                <ThemedView className="self-center min-w-full">
                    <Searchbar placeholder="Buscar..." value={searchQuery} onChangeText={setSearchQuery} style={{backgroundColor: currentColorScheme === 'dark' ? '#1e293b' : '#e2e8f0',color: colors.color}} />
                </ThemedView>
                <View className="flex flex-row items-center justify-between">
                    <ThemedText className="font-bold font-quicksand text-2xl pl-4">
                        Buscar por categoría
                    </ThemedText>
                    <Link href={'/(app)/(tabs)/recipes'} asChild>
                        <Pressable className="pr-4">
                            <ThemedText className="opacity-80"> Ver todo</ThemedText>
                        </Pressable>
                    </Link>
                </View>
                    <FlatList 
                    data={CATEGORIES}
                    renderItem={
                        ({item}) => 
                        <Chip key={item.name} style={{backgroundColor: '#F97316DD'}} selectedColor="#FFF" onPress={() => toggleCategory(item.name)} selected={selectedCategories.includes(item.name)}>
                            <ThemedText className="text-base first-letter:font-medium" numberOfLines={1} ellipsizeMode="tail" style={{color: colors.color}}>
                                {item.name}
                            </ThemedText>
                        </Chip>
                    }
                    keyExtractor={({name}) => name}
                    contentContainerStyle={styles.categoriesContainer}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    />
                    <Divider />

                    <View>
                        <FlatList 
                        data={recipes}
                        renderItem={({item}) => (
                            <RecipeCard recipe={item} />
                        )}
                        />
                    </View>
                </View>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    flatListContainer: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        gap: 16,
        position: 'relative',
    },
    categoriesContainer: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 10,
    }
})