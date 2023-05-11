import styles from "./Category.module.scss";

type CategoryProps = {
    children: React.ReactNode;
};

export const Category = ({ children }: CategoryProps) => {
    return <ul className={styles.list}>{children}</ul>;
};
