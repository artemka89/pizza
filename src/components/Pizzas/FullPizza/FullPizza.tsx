import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

import styles from "./FullPizza.module.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { fetchPizzaById } from "../../../redux/pizzas/asyncActionc";
import { DescriptionBlock } from "./DescriptionBlock/DescriptionBlock";

type PizzaItem = {
    imageUrl: string;
    title: string;
    price: number[];
};

export const FullPizza: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    
    const dispatch = useAppDispatch();
    const { item } = useAppSelector((state) => state.item);

    const getPizza = () => {
        if (id) {
            dispatch(fetchPizzaById(id));
        }
    };

    useEffect(() => {
        getPizza();
    }, []);

    if (!item) {
        return <></>;
    }      

    const description = item.description?.split(',')
          

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
                        <div className={styles.des}>
                            {description && description.map(des => <DescriptionBlock>{des}</DescriptionBlock>)}
                        </div>
                        <div className={styles.type}>{item.types[1]}</div>
                        <div className={styles.size}>{item.sizes[1]}</div>
                        <div className={styles.price}>{item.price[1]}</div>
                        <div className={styles.toCard}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
