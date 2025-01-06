import {z} from 'zod';
import { CategoriesAPIResponseSchema , SearchFilterSchema ,DrinksApiResponse, DrinkApiResponse, RecipeAPIResponseSchema  } from '../utils/recipies-schema';

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;
export type SearchFilter = z.infer<typeof SearchFilterSchema>;
export type Drinks = z.infer<typeof DrinksApiResponse>;
export type Drink = z.infer<typeof DrinkApiResponse>;
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>