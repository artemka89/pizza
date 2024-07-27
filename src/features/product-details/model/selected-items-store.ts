import { createStore } from '@/shared/lib/store/create-store';

import { PizzaOption } from './types/pizza';
import { ProductIngredient } from './types/types';

interface SelectedItemsStore {
  ingredients: ProductIngredient[];
  toggleIngredient: (item: ProductIngredient) => void;
  option: PizzaOption | null;
  setOption: (item?: PizzaOption) => void;
  clearItems: () => void;
}

export const useSelectedItems = createStore<SelectedItemsStore>((set) => ({
  ingredients: [],
  option: null,
  setOption: (option) => set({ option }),
  toggleIngredient: (item) =>
    set((state) => {
      const ingredient = state.ingredients.find(
        (ingredient) => ingredient.id === item.id,
      );

      if (ingredient) {
        state.ingredients = state.ingredients.filter(
          (ingredient) => ingredient.id !== item.id,
        );
      } else {
        state.ingredients.push(item);
      }
    }),
  clearItems: () => set({ ingredients: [], option: null }),
}));
