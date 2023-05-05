import { Link, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { fetchPizzaById } from "../../../redux/asyncAction";
import { selectItem } from "../../../redux/pizza/selectors";
import { addItem } from "../../../redux/cart/slice";
import { selectCartCount } from "../../../redux/cart/selectors";
import { CartItemType } from "../../../redux/cart/types";

import { DescriptionBlock } from "./DescriptionBlock/DescriptionBlock";
import { AddToCartBtn } from "../../../components";

import styles from "./FullPizza.module.scss";

export const FullPizza: React.FC = () => {
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    const param = useParams<{ id: string }>();
    const isMounted = useRef(false);

    const dispatch = useAppDispatch();
    const { item } = useAppSelector(selectItem);

    const compound = item?.compound?.split(",");

    const cartItem = useAppSelector(selectCartCount(param.id));

    const onClickAdd = () => {
        if (item) {
            const newItem: CartItemType = {
                id: item.id,
                title: item.title,
                imageUrl: item.imageUrl,
                price: item.price[activeSize],
                type: item.types[activeType],
                size: item.sizes[activeSize],
                count: 0,
            };
            dispatch(addItem(newItem));
        }
    };

    const getPizza = () => {
        if (param.id) {
            dispatch(fetchPizzaById(param.id));
        }
    };

    useEffect(() => {
        if (isMounted.current) {
            getPizza();
        }
        isMounted.current = true;
    }, []);

    if (!item) {
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
                            <div className={styles.navItem}>{item.title}</div>
                        </div>
                        <div className={styles.image}>
                            <img src={item.imageUrl} alt="Pizza" />
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.title}>{item.title}</div>
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
                                {item.types.map((type, i) => (
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
                                {item.sizes.map((type, i) => (
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
                                            {item.weight[i]} г
                                        </div>
                                        <div className={styles.size}>
                                            <p>{item.price[i]} ₽</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.addBtn}>
                            <AddToCartBtn onClickAdd={onClickAdd}>
                                <p className={styles.textBtn}>
                                    Добавить в корзину
                                </p>
                                {cartItem && <span>{cartItem.count}</span>}
                            </AddToCartBtn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
