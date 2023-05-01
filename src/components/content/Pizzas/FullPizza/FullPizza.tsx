import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./FullPizza.module.scss";

type PizzaItem = {
    imageUrl: string;
        title: string;
        price: number[]
}

const FullPizza: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [pizza, setPizza] = useState<PizzaItem>();

    useEffect(() => {
        axios
            .get(`https://643950d84660f26eb1afe5d8.mockapi.io/items/${id}`)
            .then((res) => setPizza(res.data));
    }, []);

    if (!pizza) {
        return <></>;
    }

    return (
        <div className={styles.pizza}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.item}>
                        <div className={styles.nav}>
                            <Link to="/" className={styles.back}>
                                Назад
                            </Link>
                        </div>
                        <div className={styles.image}>
                            <img src={pizza.imageUrl} alt="Pizza" />
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.title}>{pizza.title}</div>
                        <div className={styles.des}>
                            Пищевая ценность на 100 г Энерг. ценность241 ккал
                            Белки10.4 г Жиры12.8 г Углеводы21.2 г Срок годности
                            и условия хранения: 24 часа при t° от +2°C до +6°C
                        </div>
                        <div className={styles.type}></div>
                        <div className={styles.size}></div>
                        <div className={styles.price}></div>
                        <div className={styles.toCard}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullPizza;
