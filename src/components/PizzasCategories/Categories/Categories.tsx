import { Category } from "../Category/Category";
import { CategoryBtn } from "../CategoryBtn/CategoryBtn";

import styles from "./Categories.module.scss";

type CategoriesProps = {
    categoryId: number | undefined;
    onClickCategory: (BtnIndex: number) => void;
};

const categoriesItem: string[] = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
];

export const Categories: React.FC<CategoriesProps> = ({
    categoryId,
    onClickCategory,
}) => {
    return (
        <div className={styles.categories}>
            <Category>
                {categoriesItem.map((item, BtnIndex) => (
                    <CategoryBtn
                        onClickCategoryBtn={onClickCategory}
                        key={BtnIndex}
                        BtnIndex={BtnIndex}
                        categoryId={categoryId}
                    >
                        {item}
                    </CategoryBtn>
                ))}
            </Category>
        </div>
    );
};
