import styles from "./Search.module.scss";

const Search = ({ inputValue, onChangeInput }) => {
    return (
        <div className={`${styles.input} ${styles.active}`}>
            <div className={styles.search}>
                <img src="/img/searchIcon.png" alt="search" />
                <input
                    onChange={(e) => onChangeInput(e.target.value)}
                    value={inputValue}
                    className={styles.input}
                    type="text"
                    placeholder="Поиск по пиццам..."
                />
            </div>
        </div>
    );
};

export default Search;
