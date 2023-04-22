import { useState } from 'react'
import styles from './Search.module.scss'

const Search = () => {
    
    const [focus, setFocus] = useState(false)
   
    console.log(focus)

    return (
        <div className={focus ? `${styles.input} ${styles.active}` : styles.wrapper}>
        <div className={styles.search}>
            <img onClick={() => setFocus(true)}  src="/img/searchIcon.png" alt="search" />
            <input onBlur={() => setFocus(false)} autoFocus={true} className={styles.input} type="text" placeholder='Поиск по пиццам...' />
            
        </div>
        </div>
    )
}

export default Search