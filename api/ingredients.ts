import { api } from "@/lib/axios";
import { Ingredient } from "@/types/ingredients";

export class IngredientsAPI {
    static async getIngredients() {
        const response = await api.get<Ingredient[]>('/ingredient')        

        return response.data
    }

    static async getIngredient({id}: {id: string}){
        const {data} = await api.get(`/ingredient/${id}`)
        
        return data
    }

    static async createIngredient(ingredient: Ingredient){
        const {data} = await api.post(`/ingredient`, {
            data: ingredient
        })

        return data
    }

    static async updateIngredient(ingredient: Ingredient){
        const {data} = await api.put(`/ingredient/${ingredient.id}`, {
            data: ingredient
        })
        
        return data
    }
}