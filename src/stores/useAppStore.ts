import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipiesSlice, RecipiesSliceType } from "./recipieSlice";
import { FavoritesSliceType , createFavoriteSlice } from "./favoritesSlice";
import { NotificationSliceType, createNotificationSlice } from "./notificationSlice";

export const useAppStore = create<RecipiesSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipiesSlice(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a),
})))