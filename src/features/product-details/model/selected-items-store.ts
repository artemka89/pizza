import { createStore } from '@/shared/lib/store/create-store';

interface SelectedItemsStore {
  ingredientIds: string[];
  setIngredient: (ingredientId: string) => void;
  size: string;
  setSize: (size: string) => void;
  clearItems: () => void;
}

export const useSelectedItems = createStore<SelectedItemsStore>((set) => ({
  ingredientIds: [],
  size: '30',
  setSize: (size) => set({ size }),
  setIngredient: (ingredientId) =>
    set((state) => {
      if (state.ingredientIds.includes(ingredientId)) {
        state.ingredientIds.filter((id) => id !== ingredientId);
      } else {
        state.ingredientIds.push(ingredientId);
      }
    }),
  clearItems: () => set({ ingredientIds: [], size: '30' }),
}));
