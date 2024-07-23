import { createStore } from '@/shared/lib/store/create-store';

interface CategoryStore {
  activeCategoryId: string;
  setActiveCategoryId: (activeCategoryId: string) => void;
}

export const useCategoryStore = createStore<CategoryStore>((set) => ({
  activeCategoryId: '',
  setActiveCategoryId: (activeCategoryId) => set({ activeCategoryId }),
}));
