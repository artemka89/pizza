import { useState } from "react";

import styles from "./Sort.module.scss";

const sortList = ["популярности", "цене", "алфавиту"];

const Sort = ({ onChangeSortName, sort }) => {
    const [visible, setVisible] = useState(false);
   

    const onClickLink = (index) => {      
        onChangeSortName(index);
        setVisible(false);
    };

    return (
        <div className={styles.sort}>
            <div className={styles.sortBy}>Cортировать по:</div>
            <div onClick={() => setVisible(!visible)} className={styles.title}>
                {sortList[sort]}
            </div>
            <ul
                className={
                    visible ? `${styles.popup} ${styles.open}` : styles.popup
                }
            >
                {sortList.map((link, index) => (
                    <li
                        onClick={() => onClickLink(index)}
                        key={index}
                        className={sort === index ? styles.active : styles.item}
                    >
                        {link}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sort;
