import { Link, useParams } from "react-router-dom";
import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/store";

import { addItem } from "../../redux/cart/slice";
import { selectCartCount } from "../../redux/cart/selectors";
import { CartItemType } from "../../redux/cart/types";

import { DescriptionBlock } from "./DescriptionBlock/DescriptionBlock";
import { AddToCartBtn } from "..";

import styles from "./FullPizza.module.scss";
import { PizzasPopular } from "../Pizzas/PizzasPopular/PizzasPopular";
import {
    useGetPizzaByIdQuery,
    useGetPizzaByPopularQuery,
} from "../../redux/pizza/pizza.api";

export const FullPizza: React.FC = () => {
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);
    const dispatch = useAppDispatch();

    const param = useParams<{ id: string }>();

    const { data } = useGetPizzaByIdQuery(param.id);
    const { data: itemPopular } = useGetPizzaByPopularQuery("");

    const cartItem = useAppSelector(selectCartCount(param.id));

    const compound = data?.compound?.split(",");

    const onClickAdd = () => {
        if (data) {
            const newItem: CartItemType = {
                id: data.id,
                title: data.title,
                imageUrl: data.imageUrl,
                price: data.price[activeSize],
                type: data.types[activeType],
                size: data.sizes[activeSize],
                count: 0,
            };
            dispatch(addItem(newItem));
        }
    };

    if (!data) {
        return <></>;
    }

    return (
        <div className={styles.pizza}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.item}>
                        <div className={styles.nav}>
                            <Link to="/" className={styles.navItem}>
                                Назад
                            </Link>
                            <div className={styles.navItem}>{data.title}</div>
                        </div>
                        <div className={styles.image}>
                            <img src={data.imageUrl} alt="Pizza" />
                        </div>
                        <h2 className={styles.titleRelated}>
                            Популярные пиццы
                        </h2>
                        <div className={styles.pizzaRelated}>
                            {itemPopular?.map((item) => (
                                <PizzasPopular key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.title}>{data.title}</div>
                        <div className={styles.compound}>
                            {compound &&
                                compound.map((com, i) => (
                                    <DescriptionBlock key={i}>
                                        {com}
                                    </DescriptionBlock>
                                ))}
                        </div>
                        <div className={styles.description}>
                            <p>Пищевая ценность на 100 г</p>
                        </div>
                        <div className={styles.description}>
                            <p>Тесто</p>
                            <div className={styles.types}>
                                {data.types.map((type, i) => (
                                    <div
                                        key={i}
                                        onClick={() => setActiveType(i)}
                                        className={
                                            activeType === i
                                                ? styles.active
                                                : styles.type
                                        }
                                    >
                                        {type}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.description}>
                            <p>Размер</p>
                            <div className={styles.sizes}>
                                {data.sizes.map((type, i) => (
                                    <div
                                        key={i}
                                        onClick={() => {
                                            setActiveSize(i);
                                        }}
                                        className={
                                            activeSize === i
                                                ? styles.active
                                                : styles.sizeWrapper
                                        }
                                    >
                                        <div className={styles.size}>
                                            Ø {type}
                                        </div>
                                        <div className={styles.size}>
                                            {data.weight[i]} г
                                        </div>
                                        <div className={styles.size}>
                                            <p>{data.price[i]} ₽</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.addBtn}>
                            {/* <AddToCartBtn onClickAdd={onClickAdd}>
                                <p className={styles.textBtn}>
                                    Добавить в корзину
                                </p>
                                {cartItem && <span>{cartItem.count}</span>}
                            </AddToCartBtn> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
