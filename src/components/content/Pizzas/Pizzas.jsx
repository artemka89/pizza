import Pizza from "./Pizza/Pizza";
import styles from "./Pizzas.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "../../ui/PizzaBlock/Skeleton";

const Pizzas = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        axios("https://6435707f537112453fd667ac.mockapi.io/items").then(
            (res) => {
                setItems(res.data);
                setIsLoading(false);
            }
        );
    }, []);

    return (
        <div className={styles.pizzas}>
            <div className="container">
                <h2 className={styles.title}>Все пиццы</h2>
                <div className={styles.wrapper}>
                    {isLoading
                        ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
                        : items.map((item) => (
                              <Pizza key={item.id} {...item} />
                          ))}
                </div>
            </div>
        </div>
    );
};

export default Pizzas;
