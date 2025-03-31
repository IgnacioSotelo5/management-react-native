export function calculateIngredientCost({pricePerUnit, quantityUsed, unit}: {pricePerUnit: number, quantityUsed: number, unit: string}){
    if(unit === 'g' || unit === 'cc'){
        pricePerUnit = pricePerUnit / 1000
    }
    
    return Math.round(pricePerUnit * quantityUsed)
}