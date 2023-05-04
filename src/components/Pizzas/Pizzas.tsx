import { useEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";

import { categoriesItem } from "../Categories/Categories";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectFilter } from "../../redux/filter/selectors";
import { selectItems } from "../../redux/pizzas/selectors";
import { fetchPizzas } from "../../redux/pizzas/asyncActionc";

import {PizzaItem, Skeleton} from "../../components";


import styles from "./Pizzas.module.scss";

const sortName = ["rating", "price", "title"];

type PizzasProps = {
    categoryId: number
}

export const Pizzas: React.FC<PizzasProps> = ({ categoryId }) => {

    const dispatch = useAppDispatch();

    const { sortIndex, searchValue } = useAppSelector(selectFilter);    
    const search = searchValue ? `&search=${searchValue}` : "";    
    
    const { items, status } = useAppSelector(selectItems);           
    
    const getPizzas = () => {            
        dispatch(fetchPizzas({           
            categoryId,
            sortName,
            sortIndex,
            search
        }))        
      window.scrollTo(0,0)     
    };  

    useEffect(() => {        
            getPizzas();          

    }, [categoryId, sortIndex, searchValue]);
   
    return (
        <div className={styles.pizzas}>
            <div className="container">
                <h2 className={styles.title}>{categoriesItem[categoryId]}</h2>
                <div className={styles.wrapper}>
                    {status === 'loading'
                        ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
                        : items.map((item) => (
                              <PizzaItem key={item.id} {...item} />
                          ))}
                </div>
            </div>
        </div>
    );
};

