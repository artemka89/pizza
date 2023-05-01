import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../redux/slices/filterSlice";
import debounce from "lodash.debounce";
import styles from "./Header.module.scss";
import Search from "../Search/Search";
import { useCallback, useState } from "react";
import { selectCart } from "../../redux/slices/cartSlise";

const Header: React.FC = () => {
    const {pathname} = useLocation()

    const [inputValue, setInputValue] = useState<string>("");
    const dispatch = useDispatch();
    const { totalPrice, totalCount } = useSelector(selectCart);    

    
    const updateInputValue = useCallback(
        debounce((value: string) => {
            dispatch(setSearchValue(value));
        }, 1000),
        []
    );

    const onChangeInput = (value: string) => {
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
                        onChangeInput={onChangeInput}
                    />
                    <Link to="/cart" className={pathname !== '/cart' ? styles.cart : `${styles.cart} ${styles.cartActive}` }>
                        <div className={styles.ptice}>{totalPrice} ₽</div>
                        <div className={styles.quantity}>
                            <img src="/img/ishopping-cart.svg" alt="cart" />
                            <p>{totalCount}</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
