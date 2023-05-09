import { useAppDispatch, useAppSelector } from "../../redux/store";

import { selectFilter } from "../../redux/filter/selectors";
import { setSortName } from "../../redux/filter/slice";

import {CategoryBtn, Category, Sort  } from "../../components";

import styles from "./Categories.module.scss";
import { SortName } from "../../redux/filter/types";



type CategoriesProps = {
    onChangeCategory: (index: number | undefined) => void;
    categoryId: number | undefined
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
    

    const {sortName} = useAppSelector(selectFilter)
    const dispatch = useAppDispatch()  

    const onClickCategory = (BtnIndex: number) => { 
        const index =  BtnIndex === 0 ? undefined : BtnIndex
        onChangeCategory(index);
        
    };

    const onChangeSortName = (sortName: SortName) => {        
        dispatch(setSortName(sortName))
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
                    sortName={sortName}/>
                </div>
            </div>
        </div>
    );
};
