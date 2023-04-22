import styles from "./Category.module.scss";

const Category = ({ children }) => {
    return <ul className={styles.list}>{children}</ul>;
};

export default Category;
