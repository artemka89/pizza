import styles from "./CartItem.module.scss";

type CartItemProps = {
    id: string;
    title: string;
    imageUrl: string;
    type: string;
    size: number;
    price: number;
    count: number;
    onClickRemoveItem: (id: string) => void;
    onClickMinus: (id: string) => void;
    onClickPlus: ({}) => void;
}

export const CartItem: React.FC<CartItemProps> = ({id, title, imageUrl, type, size, price, count, onClickRemoveItem, onClickMinus, onClickPlus}) => {
    return (
        
        <div className={styles.item}>
            <div className={styles.boxTitle}>
                <img
                    className={styles.image}
                    src={imageUrl}
                    alt="Pizza"
                />
                <div className={styles.boxItem}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.description}>
                        {type}, {size} см.
                    </div>
                </div>
            </div>
            <div className={styles.boxCount}>
                <button onClick={() => onClickMinus(id)} className={count === 1 ? `${styles.minus} ${styles.disabled}` : styles.minus}>
                <img                    
                    src="/img/minusCart.svg"
                    alt="Minus"
                />
                </button>
                <p>{count}</p>
                <button onClick={() => onClickPlus({id, type, size})} className={styles.plus}>
                <img                    
                    src="/img/plusCart.svg"
                    alt="plus"
                />
                </button>
            </div>
            <div className={styles.boxPrice}>
                <p>{price * count} ₽ </p>
            </div>
            <div className={styles.boxDel}>
                <div onClick={() => onClickRemoveItem(id)} className={styles.del}>
                <img                   
                    src="/img/delCart.svg"
                    alt="Delete"
                />
                </div>
            </div>
        </div>
    );
};
