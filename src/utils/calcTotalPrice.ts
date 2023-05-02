import { CartItemType } from "../redux/slices/cartSlise"

export const calcTotalPrice = (items: CartItemType[]) => {
   return items.reduce((sum, obj) => (obj.price + sum) * obj.count, 0)
}