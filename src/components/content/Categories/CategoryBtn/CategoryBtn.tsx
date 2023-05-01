import styles from "./CategoryBtn.module.scss";

type CategoryBtnProps = {
    index: number;
    categoryId: number;
    onClickCategory: any;
    children: any
}

const CategoryBtn: React.FC<CategoryBtnProps> = ({ index, categoryId, onClickCategory , children }) => {
    return (
        <li  onClick={() => onClickCategory(index)} className={categoryId === index ? styles.active : styles.link}>
            {children}
        </li>
    );
};

export default CategoryBtn;
