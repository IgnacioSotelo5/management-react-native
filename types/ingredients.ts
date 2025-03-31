import { IngredientsCategory } from "./inventory-categories";

export interface Ingredient {
    id: number;
    name: string;
    pricePerUnit: number;
    unit: string;
    totalUnit?: number;
    category?: IngredientsCategory;
    supplier?: string;
    expirationDate?: Date | null;
    stockQuantity?: number;
    reorderLevel?: number; // indicating reorder level
    quantityUsed?: number; // especific to recipes context
}