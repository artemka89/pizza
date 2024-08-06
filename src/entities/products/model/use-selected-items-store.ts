import { createStore } from '@/shared/lib/store/create-store';

import { ProductIngredient } from './types';

interface SelectedItemsStore {
  ingredients: ProductIngredient[];
  toggleIngredient: (item: ProductIngredient) => void;
  option:
    | { id: string; size: number; weight?: number; price: number }
    | undefined;
  setOption: (item: {
    id: string;
    size: number;
    weight?: number;
    price: number;
  }) => void;
  clearItems: () => void;
  price: number;
}

export const useSelectedItems = createStore<SelectedItemsStore>(
  (set) => ({
    option: undefined,
    ingredients: [],
    price: 0,
    setOption: (option) =>
      set((state) => {
        state.option = option;
        state.price = option?.price || 0;
        state.price =
          (state.option?.price || 0) +
          state.ingredients.reduce((a, b) => a + b.price, 0);
      }),
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
        state.price =
          (state.option?.price || 0) +
          state.ingredients.reduce((a, b) => a + b.price, 0);
      }),

    clearItems: () => set({ ingredients: [], option: undefined, price: 0 }),
  }),
  'Selected Product Items',
);
