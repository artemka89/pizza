import { useState } from "react";
import { Link } from "react-router-dom";

import { selectCartCount } from "../../../redux/cart/selectors";
import { CartItemType } from "../../../redux/cart/types";
import { addItem } from "../../../redux/cart/slice";

import styles from "./PizzaItem.module.scss";
import { AddToCartBtn } from "../../../components";
import { useAppDispatch, useAppSelector } from "../../../redux/store";

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

    const [index, setIndex] = useState({activeType: 0, activeSize: 0});

    const item = useAppSelector(selectCartCount(id));
    const dispatch = useAppDispatch();

    const onClickAdd = () => {
        const newItem: CartItemType = {
            id,
            title,
            imageUrl,
            price: price[index.activeSize],
            type: types[index.activeType],
            size: sizes[index.activeSize],
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
                            onClick={() => setIndex({...index, activeType: i})}
                            key={i}
                            className={
                                index.activeType === i ? styles.active : styles.item
                            }
                        >
                            {type}
                        </div>
                    ))}
                </div>
                <div className={styles.items}>
                    {sizes.map((size, i) => (
                        <div
                            onClick={() => setIndex({...index, activeSize: i})}
                            key={i}
                            className={
                                index.activeSize === i ? styles.active : styles.item
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
                        {weight[index.activeSize]} гр.
                    </div>
                    <div className={styles.price}>от {price[index.activeSize]} ₽</div>
                </div>
                <AddToCartBtn onClickAdd={onClickAdd}>
                    <p>Добавить</p>
                    {item && <span>{item.count}</span>}
                </AddToCartBtn>
            </div>
        </div>
    );
};
