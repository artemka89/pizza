import styles from "./CategoryBtn.module.scss";

type CategoryBtnProps = {
    index: number;
    categoryId: number | undefined;
    onClickCategory: any;
    children: any
}

export const CategoryBtn: React.FC<CategoryBtnProps> = ({ index, categoryId, onClickCategory , children }) => {
    return (
        <li  onClick={() => onClickCategory(index)} className={categoryId === index ? styles.active : styles.link}>
            {children}
        </li>
    );
};

