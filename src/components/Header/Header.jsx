import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/filterSlice";
import debounce from "lodash.debounce";
import styles from "./Header.module.scss";
import Search from "../Search/Search";
import { useCallback, useState } from "react";

const Header = () => {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();
    
    const updateInputValue = useCallback(
        debounce((value) => {
            console.log(value)
            dispatch(setSearchValue(value))
        }, 1000),
        []
    );

    const onChangeInput = (value) => {
        setInputValue(value);
        updateInputValue(value);
    };

    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.headerWrapper}>
                    <Link to="/" className={styles.title}>
                        <div className={styles.titleItem}>
                            <img src="/img/logo.svg" alt="Logo" />
                        </div>
                        <div className={styles.titleItem}>
                            <h1>my pizza</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </Link>
                    <Search
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        onChangeInput={onChangeInput}
                    />
                    <Link to="/cart" className={styles.cart}>
                        <div className={styles.ptice}>3520 ₽</div>
                        <div className={styles.quantity}>
                            <img src="/img/ishopping-cart.svg" alt="cart" />
                            <p>5</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
