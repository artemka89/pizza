import { useSelector, useDispatch } from "react-redux";
import { setSort } from '../../../redux/slices/filterSlice'
import styles from "./Categories.module.scss";
import Sort from "../Sort/Sort";
import Category from "./Category/Category";
import CategoryBtn from "./CategoryBtn/CategoryBtn";


const categoriesItem = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
];    

const Categories = ({ onChangeCategory, categoryId }) => {
    
    const sort = useSelector(state => state.filter.sort)
    const dispatch = useDispatch()  

    const onClickCategory = (index) => {     
        onChangeCategory(index);
        
    };

    const onChangeSortName = (index) => {        
        dispatch(setSort(index))
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
                    <Sort onChangeSortName={onChangeSortName} sort={sort}/>
                </div>
            </div>
        </div>
    );
};

export default Categories;
