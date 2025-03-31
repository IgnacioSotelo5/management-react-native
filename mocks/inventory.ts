import { Ingredient } from "@/types/ingredients";

const inventory: Omit<Ingredient, 'quantityUsed'>[] = [
    {
        id: 1,
        name: 'Harina (0000)',
        pricePerUnit: 440,
        unit: 'kg',
        category: 'Flours',
        supplier: 'Balaton',
        totalUnit: 11000,
        expirationDate: new Date("2025-10-19"),
        reorderLevel: 5,
        stockQuantity: 25
    },
    {
        id: 2,
        name: 'Azúcar',
        pricePerUnit: 300,
        unit: 'kg',
        category: 'Sugars',
        supplier: '',
        totalUnit: 6000,
        expirationDate: new Date('2025-8-19'),
        reorderLevel: 1,
        stockQuantity: 5
    },
    {
        id: 3,
        name: 'Margarina Premium Masas',
        pricePerUnit: 1000,
        unit: 'kg',
        category: 'Fats and Oils',
        supplier: 'CALSA',
        totalUnit: 5000,
        expirationDate: new Date('2025-7-16'),
        reorderLevel: 2,
        stockQuantity: 20
    },
    {
        id: 4,
        name: 'Margarina Premium Hojaldre',
        pricePerUnit: 1250,
        unit: 'kg',
        category: 'Fats and Oils',
        supplier: 'CALSA',
        totalUnit: 6250 ,
        expirationDate: new Date('2025-7-16'),
        reorderLevel: 2,
        stockQuantity: 20
    },
    {
        id: 5,
        name: 'Sal',
        pricePerUnit: 500,
        unit: 'kg',
        category: 'Seasonings',
        supplier: 'CALSA',
        totalUnit: 5000,
        expirationDate: new Date('2025-11-25'),
        reorderLevel: 2,
        stockQuantity: 4
    },
    {
        id: 6, 
        name: 'Huevos',
        pricePerUnit: 140,
        unit: 'u',
        category: 'Eggs',
        supplier: '',
        totalUnit: 4200,
        expirationDate: null,
        reorderLevel: 30,
        stockQuantity: 150

    },
    {
        id: 7,
        name: 'Extracto de Vainilla',
        pricePerUnit: 750, 
        unit: 'lt',
        category: 'Flavors and Extracts',
        supplier: 'CALSA',
        totalUnit: 1500
    },
    {
        id: 8,
        name: 'Extracto de Limón',
        pricePerUnit: 750, 
        unit: 'lt',
        category: 'Flavors and Extracts',
        supplier: 'CALSA',
        totalUnit: 1500,
        stockQuantity: 1
    },
    {
        id: 9,
        name: 'Extracto de Naranja',
        pricePerUnit: 750, 
        unit: 'lt',
        category: 'Flavors and Extracts',
        supplier: 'CALSA',
        totalUnit: 1500,
        stockQuantity: 1
    },
    {
        id: 10,
        name: 'Miel',
        pricePerUnit: 350,
        unit: 'kg',
        category: 'Sweeteners and Syrups',
        supplier: 'CALSA',
        totalUnit: 2100,
        stockQuantity: 1
    },
    {
        id: 11,
        name: 'Levadura',
        pricePerUnit: 6200,
        unit: 'kg',
        category: 'Leavening Agents',
        supplier: 'CALSA',
        totalUnit: 3200,
        stockQuantity: 6
    },
    {
        id: 12,
        name: 'Leche',
        pricePerUnit: 1800,
        unit: 'lts',
        category: 'Dairy',
        stockQuantity: 2
    },
    
];

export default inventory;