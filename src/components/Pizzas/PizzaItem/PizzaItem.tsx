import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectCartCount } from "../../../redux/cart/selectors";
import { CartItemType } from "../../../redux/cart/types";
import { addItem } from "../../../redux/cart/slice";

import styles from "./PizzaItem.module.scss";
import { AddToCartBtn } from "../../../components";

type PizzaItemProps = {
    id: string;
    title: string;
    imageUrl: string;
    types: string[];
    sizes: number[];
    price: number[];
    weight: number[];
    compound?: string;
};

export const PizzaItem: React.FC<PizzaItemProps> = ({
    id,
    title,
    imageUrl,
    types,
    sizes,
    price,
    weight,
    compound,
}) => {
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    const item = useSelector(selectCartCount(id));
    const dispatch = useDispatch();

    const onClickAdd = () => {
        const newItem: CartItemType = {
            id,
            title,
            imageUrl,
            price: price[activeSize],
            type: types[activeType],
            size: sizes[activeSize],
            count: 0,
        };
        dispatch(addItem(newItem));
    };

    return (
        <div className={styles.pizza}>
            <Link to={`/pizza/${id}`} className={styles.image}>
                <img src={imageUrl} alt="Pizza" />
                <div className={styles.compound}>
                    <p>{compound}</p>
                </div>
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
                                activeType === i ? styles.active : styles.item
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
                                activeSize === i ? styles.active : styles.item
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
                    <div className={styles.price}>от {price[activeSize]} ₽</div>
                </div>
                <AddToCartBtn onClickAdd={onClickAdd}>
                    <p>Добавить</p>
                    {item && <span>{item.count}</span>}
                </AddToCartBtn>
            </div>
        </div>
    );
};
