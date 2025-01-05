import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipieService"
import type { Categories, SearchFilter } from "../types"

export type RecipiesSliceType = {
    categories : Categories
    fetchCategories : () => Promise<void>
    searchRecipies : (searchFilter : SearchFilter) => Promise<void>
}


export const createRecipiesSlice : StateCreator<RecipiesSliceType> = (set) =>({
    categories : {
        drinks : []
    },
    fetchCategories : async () => {
       const categories = await getCategories()
       set({
        categories
       })
       
    },
    searchRecipies : async (filters) => {
        console.log(filters);
        
    }
})