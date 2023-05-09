import { useEffect, useRef, useState } from "react";

import { categoriesItem } from "../Categories/Categories";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectFilter } from "../../redux/filter/selectors";

import { PizzaItem, Skeleton } from "../../components";

import styles from "./Pizzas.module.scss";
import { useGetFilteredPizzasQuery } from "../../redux/pizza/pizza.api";
import { OrderType, SearchFilter } from "../../redux/filter/types";


// const sortName = ["rating", "price", "title"];

type PizzasProps = {
    categoryId: number | undefined;
};

export const Pizzas: React.FC<PizzasProps> = ({ categoryId }) => {   

    const { sortName, searchValue } = useAppSelector(selectFilter);    

    const searchFilter: SearchFilter = {
        categoryId,
        sortName,
        searchValue,
        order: OrderType.DESC
    }
   const {data, isLoading} = useGetFilteredPizzasQuery(searchFilter)

    return (
        <div className={styles.pizzas}>
            <div className="container">
                <h2 className={styles.title}>{categoryId ? categoriesItem[categoryId] : 'Все'}</h2>
                <div className={styles.wrapper}>
                    {isLoading
                        ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
                        : data?.map((item) => (
                              <PizzaItem key={item.id} {...item} />
                          ))}
                </div>
            </div>
        </div>
    );
};
