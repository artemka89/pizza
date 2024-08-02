import { createStore } from '@/shared/lib/store/create-store';

interface CartStore {
  cartId: string;
  setCartId: (value: string) => void;
  show: boolean;
  setShow: (value: boolean) => void;
}

export const useCartStore = createStore<CartStore>((set) => ({
  cartId: '66831065000fa0deec70',
  show: false,
  setShow: (value) => set({ show: value }),
  setCartId: (value) => set({ cartId: value }),
}));
