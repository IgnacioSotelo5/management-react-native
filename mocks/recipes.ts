import { Ingredient } from "@/types/ingredients";

export interface Recipe {
    id: number;
    name: string;
    ingredients: Pick<Ingredient, 'id' | 'quantityUsed' | 'unit'>[];
    instructions: string;
    cookTemperature: number;
    cookTime: number; // in minutes
}

export const recipes: Recipe[] = [
    {
        id: 1,
        name: "Medialunas de manteca",
        ingredients: [
            {
                id: 1, quantityUsed: 2.2, unit: 'kg'
            },
            {
                id: 2, quantityUsed: 400, unit: 'g'
            },
            {
                id: 5, quantityUsed: 20, unit: 'g'
            },
            {
                id: 6, quantityUsed: 6, unit: 'u',
            },
            {
                id: 3, quantityUsed: 2, unit: 'kg'
            },
            {
                id: 10, quantityUsed: 100, unit: 'g'
            },
            {
                id: 7, quantityUsed: 10, unit: 'cc'
            },
            {
                id: 8, quantityUsed: 10, unit: 'cc'
            },
            {
                id: 9, quantityUsed: 10, unit: 'cc'
            },
            {
                id: 11, quantityUsed: 30, unit: 'g'
            },
            {
                id: 12, quantityUsed: 750, unit: 'cc'
            }
        ],
        instructions: "Empastar la Margarina Premium Masas con 200 gramos de el total de la harina y reservar. Mezclar el resto de los ingredientes en amasadora hasta obtener una masa lisa y blanda. Estirar en sobadora y empastar. Descanso de minimo 16hs en heladera con el empaste antes de ser hojaldrada. Para hojaldrar, haremos una vuelta doble y una simple, respetando ese orden. Cortar y armar medialunas y dejar leudar al doble de volumen,",
        cookTime: 18,
        cookTemperature: 200
    },
];
