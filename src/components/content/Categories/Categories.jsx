import { useState } from "react";
import styles from "./Categories.module.scss";
import Sort from "../Sort/Sort";
import Category from "./Category/Category";

const Categories = () => {
    const categoriesItem = [
        "Все",
        "Мясные",
        "Вегетарианские",
        "Гриль",
        "Острые",
        "Закрытые",
    ];

    const [activeIndex, setItemIndex] = useState(0);

    const onClickCategory = (index) => {
        setItemIndex(index);
    };

    return (
        <div className={styles.categories}>
            <div className="container">
                <div className={styles.wrapper}>
                    <Category activeIndex={activeIndex} onClickCategory={onClickCategory} categoriesItem={categoriesItem} />
                    <Sort />
                </div>
            </div>
        </div>
    );
};

export default Categories;
