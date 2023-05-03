import { useEffect, useRef, useState } from "react";

import styles from "./Sort.module.scss";

type SortListItem = string
type SortProps = {
    onChangeSortName: (index: number) => void
    sortIndex: number
}

type PopupClick = MouseEvent & {
    composedPath: () => Node[];
}

const sortList: SortListItem[] = ["популярности", "цене", "алфавиту"];

export const Sort: React.FC<SortProps> = ({ onChangeSortName, sortIndex }) => {

    const sortRef = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState<boolean>(false);
   

    const onClickLink = (index: number) => {      
        onChangeSortName(index);
        setVisible(false);
    };

    useEffect(() => {      
       const handleClickOutside = (event: MouseEvent) => {
        const _event = event as PopupClick
         if(sortRef.current && !_event.composedPath().includes(sortRef.current)) {
            setVisible(false)
         }          
       }
       document.body.addEventListener('click',handleClickOutside)

       return () =>  {
        document.body.removeEventListener('click',handleClickOutside)        
       } 
    }, [])

    return (
        <div ref={sortRef} className={styles.sort}>
            <div className={styles.sortBy}>Cортировать по:</div>
            <div onClick={() => setVisible(!visible)} className={styles.title}>
                {sortList[sortIndex]}
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
                        className={sortIndex === index ? styles.active : styles.item}
                    >
                        {link}
                    </li>
                ))}
            </ul>
        </div>
    );
};

