import { CartItemType } from "../redux/slices/cartSlise"

export const calcTotalCount = (items: CartItemType[]) => {
    return items.reduce((sum, item) => sum + item.count, 0)
    }