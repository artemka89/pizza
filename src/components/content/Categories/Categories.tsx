import { useSelector, useDispatch } from "react-redux";
import { selectFilter, setSortIndex } from '../../../redux/slices/filterSlice'

import Sort from "../Sort/Sort";
import Category from "./Category/Category";
import CategoryBtn from "./CategoryBtn/CategoryBtn";

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

const Categories: React.FC<CategoriesProps> = ({ onChangeCategory, categoryId }) => { 
    

    const {sortIndex} = useSelector(selectFilter)
    const dispatch = useDispatch()  

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

export default Categories;
