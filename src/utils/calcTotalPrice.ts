import { CartItemType } from "../redux/cart/types"

export const calcTotalPrice = (items: CartItemType[]) => {
   return items.reduce((sum, obj) => (obj.price + sum) * obj.count, 0)
}