import styles from "./CategoryBtn.module.scss";

type CategoryBtnProps = {
    BtnIndex: number;
    categoryId: number | undefined;
    onClickCategoryBtn: (index: number) => void;
    children: React.ReactNode;
};

export const CategoryBtn = ({
    BtnIndex,
    categoryId,
    onClickCategoryBtn,
    children,
}: CategoryBtnProps) => {
    if (!categoryId) {
        categoryId = 0;
    }

    return (
        <li
            onClick={() => onClickCategoryBtn(BtnIndex)}
            className={categoryId === BtnIndex ? styles.active : styles.listItem}
        >
            {children}
        </li>
    );
};
