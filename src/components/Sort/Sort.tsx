import { useEffect, useRef, useState } from "react";

import styles from "./Sort.module.scss";
import { SortName } from "../../redux/filter/types";

type SortProps = {
    onChangeSortName: (sortName: SortName) => void;
    sortName: SortName;
};

type PopupClick = MouseEvent & {
    composedPath: () => Node[];
};

const sortDictionary = new Map();
sortDictionary.set(SortName.PRICE, "цене");
sortDictionary.set(SortName.RATING, "популярности");
sortDictionary.set(SortName.TITLE, "алфавиту");

export const Sort: React.FC<SortProps> = ({ onChangeSortName, sortName }) => {
    const sortRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    const onClickLink = (sortName: SortName) => {
        onChangeSortName(sortName);
        setVisible(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const _event = event as PopupClick;
            if (
                sortRef.current &&
                !_event.composedPath().includes(sortRef.current)
            ) {
                setVisible(false);
            }
        };
        document.body.addEventListener("click", handleClickOutside);

        return () => {
            document.body.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div ref={sortRef} className={styles.sort}>
            <div className={styles.sortBy}>Cортировать по:</div>
            <div onClick={() => setVisible(!visible)} className={styles.title}>
                {sortDictionary.get(sortName)}
            </div>
            <ul
                className={
                    visible ? `${styles.popup} ${styles.open}` : styles.popup
                }
            >
                {Object.keys(SortName).map((sort) => {
                    return (
                        <li
                            onClick={() => onClickLink(sort as SortName)}
                            key={sort}
                            className={
                                sortName === sort ? styles.active : styles.item
                            }
                        >
                            {sortDictionary.get(SortName.RATING)}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
