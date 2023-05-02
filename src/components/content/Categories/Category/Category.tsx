import styles from "./Category.module.scss";

type CategoryProps = {
    children: React.ReactNode
}

const Category: React.FC<CategoryProps> = ({ children }) => {
    return <ul className={styles.list}>{children}</ul>;
};

export default Category;
