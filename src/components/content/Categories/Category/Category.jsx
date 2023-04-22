import styles from "./Category.module.scss";

const Category = ({ activeIndex, onClickCategory, categoriesItem }) => {
    return (
        <ul className={styles.list}>
            {categoriesItem.map((item, i) => (
                <li
                    key={i}
                    onClick={() => onClickCategory(i)}
                    className={activeIndex === i ? styles.active : styles.link}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
};

export default Category;
