import { Link } from "react-router-dom";
import styles from "./CartEmpty.module.scss";

const CartEmpty: React.FC = () => {
    return (
        <div className="container">
            <div className={styles.cart}>
                <h2>
                    Корзина пустая 😕
                </h2>
                <p>
                    Вероятней всего, вы не заказывали ещё пиццу.
                    <br />
                    Для того, чтобы заказать пиццу, перейди на главную страницу.
                </p>
                <img src="/img/Layer 2.png" alt="Empty cart" />
                <Link to='/' className={styles.button}>
                    <span>Вернуться назад</span>
                </Link>
            </div>
        </div>
    );
};

export default CartEmpty;
