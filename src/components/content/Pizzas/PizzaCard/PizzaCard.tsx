import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectCartCount } from "../../../../redux/cart/selectors";
import { CartItemType } from "../../../../redux/cart/types";
import { addItem } from "../../../../redux/cart/slice";

import styles from "./PizzaCard.module.scss";

type PizzaCartProps = {
    id: string;
    title: string;
    imageUrl: string;
    types: string[];
    sizes: number[];
    price: number[];
    weight: number[];

}

const PizzaCart: React.FC<PizzaCartProps> = ({ id, title, imageUrl, types, sizes, price, weight }) => {
    const [activeType, setActiveType] = useState<number>(0);
    const [activeSize, setActiveSize] = useState<number>(0);

    const item = useSelector(selectCartCount(id));
    const dispatch = useDispatch();
  
    const onClickAdd = () => {
        const item: CartItemType = {
            id,
            title,
            imageUrl,
            price: price[activeSize],
            type: types[activeType],
            size: sizes[activeSize],
            count: 0
            
        };
        dispatch(addItem(item));
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.pizza}>
                <Link to={`/pizza/${id}`} className={styles.image}>
                    <img src={imageUrl} alt="Title" />
                </Link>
                <Link to={`/pizza/${id}`} className={styles.title}>
                    <h2>{title}</h2>
                </Link>
                <div className={styles.categorias}>
                    <div className={styles.items}>
                        {types.map((type, i) => (
                            <div
                                onClick={() => setActiveType(i)}
                                key={i}
                                className={
                                    activeType === i
                                        ? styles.active
                                        : styles.item
                                }
                            >
                                {type}
                            </div>
                        ))}
                    </div>
                    <div className={styles.items}>
                        {sizes.map((size, i) => (
                            <div
                                onClick={() => setActiveSize(i)}
                                key={i}
                                className={
                                    activeSize === i
                                        ? styles.active
                                        : styles.item
                                }
                            >
                                {size} см.
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.buy}>
                    <div className={styles.buyWrapper}>
                        <div className={styles.weight}>
                            {weight[activeSize]} гр.
                        </div>
                        <div className={styles.price}>
                            от {price[activeSize]} ₽
                        </div>
                    </div>
                    <button onClick={onClickAdd} className={styles.addToCart}>
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" />
                        </svg>
                        <p>Добавить</p>
                        {item && <span>{item.count}</span>}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PizzaCart;
