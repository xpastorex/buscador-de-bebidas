import { StateCreator } from "zustand";
import { Recipe } from "../types";
import { createRecipiesSlice, RecipiesSliceType } from "./recipieSlice";
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice";

export type FavoritesSliceType = {
    favorites : Recipe[]
    handleClickFavorite : (recipe : Recipe) => void
    favoriteExists : (id : Recipe['idDrink']) => boolean
    loadFromStorage: () => void
}

export const createFavoriteSlice : StateCreator<FavoritesSliceType & RecipiesSliceType & NotificationSliceType , [], [] ,FavoritesSliceType> = (set,get , api) => ({
    favorites : [],
    handleClickFavorite : (recipe) => {
        if(get().favoriteExists(recipe.idDrink)){
            set((state) => ({
                favorites : state.favorites.filter(favorite => favorite.idDrink != recipe.idDrink)
            }))
            createNotificationSlice(set, get , api).showNotification({text : 'Se eliminó de favoritos' , error : false})
        }else{
            
            set((state) => ({
                favorites : [...state.favorites , recipe]
            }))
            createNotificationSlice(set, get , api).showNotification({text : 'Se agregó a favoritos' , error : false})
            
        }
        createRecipiesSlice(set,get,api).closeModal();
        localStorage.setItem('favorites' , JSON.stringify(get().favorites)) 
    },
    favoriteExists : (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    },

    loadFromStorage : () => {
        const storedFavorites = localStorage.getItem('favorites')
        if(storedFavorites){
            set({
                favorites : JSON.parse(storedFavorites)
            })
        }
    }
})