import { PizzaItem } from "../../../redux/pizza/types";
import { Skeleton } from "../../ui/PizzaBlock/Skeleton";
import { PizzaСard } from "../PizzaСard/PizzaСard";

import styles from "./PizzasCardsList.module.scss";
// const sortName = ["rating", "price", "title"];
type PizzasItemsProps = {
    pizzaItems: PizzaItem[];
    categoryId: number | undefined;
    isLoading: boolean;
    onClickAdd: ( index: {activeSize: number, activeType: number}, pizzaItem: PizzaItem) => void;
};

export const PizzasCardsList: React.FC<PizzasItemsProps> = ({
    pizzaItems,
    isLoading,
    categoryId,
    onClickAdd,
}) => {
    return (
        <div className={styles.pizzas}>
            {isLoading
                ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
                : pizzaItems?.map((pizzaItem) => (
                      <PizzaСard
                          key={pizzaItem.id}
                          pizzaItem={pizzaItem}
                          onClickAdd={onClickAdd}
                      />
                  ))}
        </div>
    );
};
