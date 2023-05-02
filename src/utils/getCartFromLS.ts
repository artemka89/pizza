import { CartItemType } from "../redux/cart/types";
import { calcTotalCount } from "./calcTotalCount";
import { calcTotalPrice } from "./calcTotalPrice";

export const getCartFromLS = () => {
    const data = localStorage.getItem("cart");
    const items: CartItemType[] = data ? JSON.parse(data) : [];
    const totalPrice = calcTotalPrice(items);
    const totalCount = calcTotalCount(items);
       return {
            items,
            totalPrice,
            totalCount,
        };    
};
