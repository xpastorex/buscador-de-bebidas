import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipiesSlice, RecipiesSliceType } from "./recipieSlice";


export const useAppStore = create<RecipiesSliceType>()(devtools((...a) => ({
    ...createRecipiesSlice(...a)
})))