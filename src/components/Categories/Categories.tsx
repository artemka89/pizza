import { useAppDispatch, useAppSelector } from "../../redux/store";

import { selectFilter } from "../../redux/filter/selectors";
import { setSortIndex } from "../../redux/filter/slice";

import {CategoryBtn, Category, Sort  } from "../../components";

import styles from "./Categories.module.scss";


type CategoriesProps = {
    onChangeCategory: (index: number) => void;
    categoryId: number
}

export const categoriesItem: string[] = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
];    

export const Categories: React.FC<CategoriesProps> = ({ onChangeCategory, categoryId }) => { 
    

    const {sortIndex} = useAppSelector(selectFilter)
    const dispatch = useAppDispatch()  

    const onClickCategory = (index: number) => {     
        onChangeCategory(index);
        
    };

    const onChangeSortName = (index: number) => {        
        dispatch(setSortIndex(index))
    };

    return (
        <div className={styles.categories}>
            <div className="container">
                <div className={styles.wrapper}>
                    <Category>
                        {categoriesItem.map((item, index) => (
                            <CategoryBtn
                                onClickCategory={onClickCategory}                               
                                key={index}
                                index={index}
                                categoryId={categoryId}
                            >
                                {item}
                            </CategoryBtn>
                        ))}
                    </Category>
                    <Sort onChangeSortName={onChangeSortName}
                    //@ts-ignore
                    sortIndex={sortIndex}/>
                </div>
            </div>
        </div>
    );
};
