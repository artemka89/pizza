import axios from "axios";
import Skeleton from "../../ui/PizzaBlock/Skeleton";
import qs from "qs";

import Pizza from "./Pizza/Pizza";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import styles from "./Pizzas.module.scss";


const Pizzas = ({ categoryId }) => {
    const sort = useSelector((state) => state.filter.sort);
    const searchValue = useSelector((state) => state.filter.searchValue);
    const currentPage = useSelector((state) => state.filter.currentPage);
    const sorting = ["rating", "price", "title"];

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const search = searchValue ? `&search=${searchValue}` : "";

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(
                `https://643950d84660f26eb1afe5d8.mockapi.io/items?page=${currentPage}&limit=8&${
                    categoryId > 0 ? `category=${categoryId}` : ""
                }&sortBy=${sorting[sort]}&order=desc${search}`
            )
            .then((res) => {
                setItems(res.data);
                setIsLoading(false);
            });
    }, [categoryId, sort, search, currentPage]);

    useEffect(() => {

    }, [categoryId, sort, search, currentPage])

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
