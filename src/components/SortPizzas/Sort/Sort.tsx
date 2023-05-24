import { useEffect, useRef, useState } from "react";

import styles from "./Sort.module.scss";
import { SortName } from "../../../redux/filter/types";
import { sortListType } from "../../../helpers/sortList";

type SortProps = {
    onClickSortLink: (sortName: SortName) => void;
    sortName: string;
    sortList: sortListType[]
};

type PopupClick = MouseEvent & {
    composedPath: () => Node[];
};

export const Sort: React.FC<SortProps> = ({ sortName, sortList, onClickSortLink }) => {

    const sortRef = useRef<HTMLDivElement>(null);

    const [visible, setVisible] = useState(false);

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
                {sortName}
            </div>
            <ul
                className={
                    visible ? `${styles.popup} ${styles.open}` : styles.popup
                }
            >
                {sortList.map(obj => 
                ( <li
                    onClick={() => {}}
                    className={
                        sortName === obj.sortName ? styles.active : styles.item
                    }
                >
                    {obj.sortName}
                </li>))}
                
            </ul>
        </div>
    );
};
