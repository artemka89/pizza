import styles from "./Cart.module.scss";
import CartItem from "./CartItem/CartUtem";

const Cart = () => {
    return (
        <div className={styles.cart}>
            <div className={styles.wrapper}>
                <div className={styles.cartTitle}>
                    <h2>
                       <img src="/img/cart.svg" alt="Cart" />
                        Корзина
                    </h2>
                    <div className={styles.clear}>
                     <img src="/img/clear.svg" alt="Clear Cart" />
                        <p>Очистить корзину</p>
                    </div>
                </div>
                <div className={styles.items}>
                 <CartItem />
                 <CartItem />
                 <CartItem />
                 <CartItem />
                </div>
            </div>
        </div>
    );
};

export default Cart;
