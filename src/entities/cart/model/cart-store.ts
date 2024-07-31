import { createStore } from '@/shared/lib/store/create-store';

interface CartStore {
  show: boolean;
  setShow: (value: boolean) => void;
}

export const useCartStore = createStore<CartStore>((set) => ({
  show: false,
  setShow: (value) => set({ show: value }),
}));
