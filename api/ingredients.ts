import { BASE_URL } from "@/constants/config";
import { Ingredient } from "@/types/ingredients";
import axios from "axios";

export class IngredientsAPI {
    static async getIngredients() {
        const {data} = await axios.get(`${BASE_URL}/ingredient`)
        
        return data
    }

    static async getIngredient({id}: {id: string}){
        const {data} = await axios.get(`${BASE_URL}/ingredient/${id}`)
        
        return data
    }

    static async createIngredient(ingredient: Ingredient){
        const {data} = await axios.post(`${BASE_URL}/ingredient`, {
            data: ingredient
        })

        return data
    }

    static async updateIngredient(ingredient: Ingredient){
        const {data} = await axios.put(`${BASE_URL}/ingredient/${ingredient.id}`, {
            data: ingredient
        })
        
        return data
    }
}