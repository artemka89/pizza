import { RootState } from "../store";

export const selectCart = (state: RootState) => state.cart;
export const selectCartCount = (id: string | undefined) => (state: RootState) => {
    const count = state.cart.items.find((obj) => obj.id === id)
    return count?.count
}
    