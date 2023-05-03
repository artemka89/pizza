import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    removeItem,
    clearItems,
    MinusItem,
    addItem,
} from "../../redux/cart/slice";
import { selectCart } from "../../redux/cart/selectors";
import { CartItemType } from "../../redux/cart/types";

import {CartItem, CartEmpty} from "../../components";

import styles from "./Cart.module.scss";

export const Cart: React.FC = () => {
    const { items, totalPrice, totalCount } = useSelector(selectCart);

    const dispatch = useDispatch();

    const onClickRemoveItem = (id: string) => {
        dispatch(removeItem(id));
    };

    const onClickClearItems = () => {
        dispatch(clearItems());
    };

    const onClickMinus = (id: string) => {
        dispatch(MinusItem(id));
    };

    const onClickPlus = (obj: CartItemType) => {
        dispatch(addItem(obj));
    };

    if (totalPrice === 0) {
        return <CartEmpty />;
    }
    return (
        <div className={styles.cart}>
            <div className={styles.wrapper}>
                <div className={styles.cartTitle}>
                    <h2>
                        <img src="/img/cart.svg" alt="Cart" />
                        Корзина
                    </h2>
                    <div onClick={onClickClearItems} className={styles.clear}>
                        <img src="/img/clear.svg" alt="Clear Cart" />
                        <p>Очистить корзину</p>
                    </div>
                </div>
                <div className={styles.items}>
                    {items.map((item: any) => (
                        <CartItem
                            key={item.id}
                            {...item}
                            onClickRemoveItem={onClickRemoveItem}
                            onClickMinus={onClickMinus}
                            onClickPlus={onClickPlus}
                        />
                    ))}
                </div>
                <div className={styles.nav}>
                    <p className={styles.text}>Всего пицц: {totalCount}</p>
                    <p className={styles.text}>
                        Сумма заказа: <span>{totalPrice} ₽</span>
                    </p>
                </div>
                <div className={styles.nav}>
                    <Link to="/" className={styles.back}>
                        <p>{`< Вернуться назад`}</p>
                    </Link>
                    <button className={styles.pay}>
                        <p>Оплатить заказ</p>
                    </button>
                </div>
            </div>
        </div>
    );
};
