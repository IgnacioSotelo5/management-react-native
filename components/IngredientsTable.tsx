import { Ingredient } from "@/types/ingredients";
import { useState } from "react";
import { View, TouchableOpacity, TextInput, Modal, Text } from "react-native";
import { DataTable, Portal, Provider } from "react-native-paper";
import { ThemedText } from "./text/ThemedText";

export function IngredientsTable({ ingredients }: { ingredients: Ingredient[] }) {
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [price, setPrice] = useState("");    

  const handleEditPrice = (index: number, value: string) => {
    setEditingIndex(index);
    setPrice(value);
  };

  const handleSavePrice = (index: number) => {
    // Actualiza el precio de manera reactiva (idealmente deberías manejarlo con un estado global)
    const updatedIngredients = [...ingredients];
    updatedIngredients[index].pricePerUnit = Number(price);

    setEditingIndex(null);
  };

  const openModal = (ingredient: Ingredient) => {
    setSelectedIngredient(ingredient);
    setModalVisible(true);
  };

  return (
    <Provider>
      <View style={{ flex: 1, padding: 10 }}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Ingrediente</DataTable.Title>
            <DataTable.Title numeric>Cantidad</DataTable.Title>
            <DataTable.Title numeric>Precio Unitario</DataTable.Title>
            <DataTable.Title numeric>Precio Total</DataTable.Title>
          </DataTable.Header>

          {ingredients.map((ingredient, index) => (
            <TouchableOpacity key={index} onPress={() => openModal(ingredient)}>
              <DataTable.Row>
                <DataTable.Cell>{ingredient.name}</DataTable.Cell>
                <DataTable.Cell numeric>{ingredient.stockQuantity}</DataTable.Cell>

                {/* Edición inline de precio */}
                <DataTable.Cell numeric>
                  {editingIndex === index ? (
                    <TextInput
                      value={price}
                      onChangeText={setPrice}
                      keyboardType="numeric"
                      onBlur={() => handleSavePrice(index)}
                      style={{ borderBottomWidth: 1, textAlign: "right", color: "white" }}
                      autoFocus
                    />
                  ) : (
                    <TouchableOpacity onPress={() => handleEditPrice(index, String(ingredient.pricePerUnit))}>
                      <ThemedText>{ingredient.pricePerUnit}</ThemedText>
                    </TouchableOpacity>
                  )}
                </DataTable.Cell>

                <DataTable.Cell numeric>{ingredient.totalUnit}</DataTable.Cell>
              </DataTable.Row>
            </TouchableOpacity>
          ))}
        </DataTable>

        {/* Modal con más detalles */}
        <Portal>
          <Modal visible={modalVisible} transparent animationType="slide">
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  padding: 20,
                  borderRadius: 10,
                  width: "80%",
                  alignItems: "center",
                }}
              >
                {selectedIngredient && (
                  <>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                      {selectedIngredient.name}
                    </Text>
                    <Text>Unidad: {selectedIngredient.unit}</Text>
                    <Text>Cantidad: {selectedIngredient.stockQuantity}</Text>
                    <Text>Precio unitario: {selectedIngredient.pricePerUnit}</Text>
                    <Text>Precio total: {selectedIngredient.totalUnit}</Text>

                    <TouchableOpacity
                      onPress={() => setModalVisible(false)}
                      style={{
                        marginTop: 10,
                        backgroundColor: "blue",
                        padding: 10,
                        borderRadius: 5,
                      }}
                    >
                      <Text style={{ color: "white" }}>Cerrar</Text>
                    </TouchableOpacity>
                  </>
                )}
              </View>
            </View>
          </Modal>
        </Portal>
      </View>
    </Provider>
  );
}
