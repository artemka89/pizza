import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import Search from "../Search/Search";


const Header = () => {
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.headerWrapper}>
                    <Link to="/" className={styles.title}>
                        <div  className={styles.titleItem}>
                            <img src="/img/logo.svg" alt="Logo" />
                        </div>
                        <div className={styles.titleItem}>
                            <h1>my pizza</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </Link>
                    <Search />
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
