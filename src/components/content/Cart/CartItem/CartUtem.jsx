import styles from "./CartItem.module.scss";

const CartItem = () => {
    return (
        <div className={styles.item}>
            <div className={styles.box}>
                <img
                    className={styles.image}
                    src="img/pizzas/29-1300.jpg"
                    alt="Pizza"
                />
                <div className={styles.boxItem}>
                    <div className={styles.title}>Сырный цыпленок</div>
                    <div className={styles.description}>
                        тонкое тесто, 26 см.
                    </div>
                </div>
            </div>
            <div className={styles.box}>
                <img
                    className={styles.minus}
                    src="/img/minusCart.svg"
                    alt="Minus"
                />
                <p>5</p>
                <img
                    className={styles.plus}
                    src="/img/plusCart.svg"
                    alt="plus"
                />
            </div>
            <div className={styles.box}>
                <p>770 ₽ </p>
            </div>
            <div className={styles.box}>
                <img
                    className={styles.del}
                    src="/img/delCart.svg"
                    alt="Delete"
                />
            </div>
        </div>
    );
};

export default CartItem