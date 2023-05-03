import { useSelector } from "react-redux";
import { useEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";
import qs from "qs";

import { categoriesItem } from "../Categories/Categories";
import { useAppDispatch } from "../../redux/store";
import { selectFilter } from "../../redux/filter/selectors";
import { selectItems } from "../../redux/pizza/selectors";
import { fetchPizzas } from "../../redux/pizza/asyncActionc";

import {PizzaItem, Skeleton} from "../../components";


import styles from "./Pizzas.module.scss";

const sortName = ["rating", "price", "title"];

type PizzasProps = {
    categoryId: number
}

export const Pizzas: React.FC<PizzasProps> = ({ categoryId }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const isSearch = useRef(false);
    const isMounted = useRef(false);

    const { sortIndex, searchValue, currentPage } = useSelector(selectFilter);    
    const search = searchValue ? `&search=${searchValue}` : "";    
    
    const { items, status } = useSelector(selectItems);           
    
    const getPizzas = () => {            
        dispatch(fetchPizzas({
            currentPage,
            categoryId,
            sortName,
            sortIndex,
            search
        }))        
      window.scrollTo(0,0)     
    };

    // useEffect(() => {
    //     if (window.location.search) {
    //         const params = qs.parse(window.location.search.substring(1));
    //         dispatch(setFilter(params));
    //         isSearch.current = true;
    //     }
    // }, []);

    // useEffect(() => {
    //     if (isMounted.current) {
    //         const queryString = qs.stringify({
    //             currentPage,
    //             categoryId,
    //             sortIndex,
    //         });

    //         navigate(`?${queryString}`);
    //     }
    //     isMounted.current = true;
    // }, [categoryId, sortIndex, currentPage, searchValue]);

    useEffect(() => {        
            getPizzas();                   

        isSearch.current = false;
    }, [categoryId, sortIndex, currentPage, searchValue]);
   
    return (
        <div className={styles.pizzas}>
            <div className="container">
                <h2 className={styles.title}>{categoriesItem[categoryId]}</h2>
                <div className={styles.wrapper}>
                    {status === 'loading'
                        ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
                        : items.map((item: any) => (
                              <PizzaItem key={item.id} {...item} />
                          ))}
                </div>
            </div>
        </div>
    );
};

