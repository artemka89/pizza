import { useState } from "react";
import styles from "./Sort.module.scss";

const Sort = () => {
    const [visible, setVisible] = useState(false);

    const sortList = ["популярности", "цене", "алфавиту"];
    const [selected, setSelected] = useState(0);
    const sortName = sortList[selected];

    const onClickLink = (index) => {
        setSelected(index);
        setVisible(false);
    };

    return (
        <div className={styles.sort}>            
            <div className={styles.sortBy}>Cортировать по:</div>
            <div onClick={() => setVisible(!visible)} className={styles.title}>
                {sortName}
            </div>
            <ul
                className={
                    visible ? `${styles.popup} ${styles.open}` : styles.popup
                }
            >
                {sortList.map((link, i) => (
                    <li
                        onClick={() => onClickLink(i)}
                        key={i}
                        className={selected === i ? styles.active : styles.item}
                    >
                        {link}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sort;
