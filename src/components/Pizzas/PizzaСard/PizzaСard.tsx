import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./PizzaСard.module.scss";
import { AddToCartBtn } from "../..";

import { priceFormat } from "../../../utils/priceFormat";
import { PizzaItem } from "../../../redux/pizza/types";
import { useAppSelector } from "../../../redux/store";
import { selectCartCount } from "../../../redux/cart/selectors";

type PizzaСardProps = {
    pizzaItem: PizzaItem;
    onClickAdd: (index: {activeSize: number, activeType: number}, pizzaItem: PizzaItem) => void;
};

export const PizzaСard: React.FC<PizzaСardProps> = ({
    pizzaItem,
    onClickAdd,
}) => {
    const { id, title, imageUrl, compound, sizes, types, weight, price } =
        pizzaItem;

    const [index, setIndex] = useState({ activeType: 0, activeSize: 0 });
    const count = useAppSelector(selectCartCount(id));

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
                            onClick={() =>
                                setIndex({ ...index, activeType: i })
                            }
                            key={i}
                            className={
                                index.activeType === i
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
                            onClick={() =>
                                setIndex({ ...index, activeSize: i })
                            }
                            key={i}
                            className={
                                index.activeSize === i
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
                        {weight[index.activeSize]} гр.
                    </div>
                    <div className={styles.price}>
                        {priceFormat({
                            price: price[index.activeSize],
                            local: "ru",
                            currency: "rub",
                        })}
                    </div>
                </div>
                <AddToCartBtn
                    activeSizeAndType={index}
                    pizzaItem={pizzaItem}
                    onClickAdd={onClickAdd}
                >
                    <p>Добавить</p>
                     {count && <span>{count}</span>}
                </AddToCartBtn>
            </div>
        </div>
    );
};
