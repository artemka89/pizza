import styles from "./Category.module.scss";

type CategoryProps = {
    children: React.ReactNode
}

export const Category: React.FC<CategoryProps> = ({ children }) => {
    return <ul className={styles.list}>{children}</ul>;
};
