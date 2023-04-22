import styles from "./CategoryBtn.module.scss";

const CategoryBtn = ({ index, categoryId, onClickCategory , children }) => {
    return (
        <li  onClick={() => onClickCategory(index)} className={categoryId === index ? styles.active : styles.link}>
            {children}
        </li>
    );
};

export default CategoryBtn;
