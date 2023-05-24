import { useGetFilteredPizzasQuery } from "../../redux/pizza/pizza.api";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectFilter } from "../../redux/filter/selectors";
import { OrderType, SearchFilter } from "../../redux/filter/types";

import { PizzasCardsList } from "./PizzasCardsList/PizzasCardsList";
import { CartItemType } from "../../redux/cart/types";
import { addItem } from "../../redux/cart/slice";
import { PizzaItem } from "../../redux/pizza/types";

// const sortName = ["rating", "price", "title"];

export const PizzasContainer = () => {
    const { sortName, searchValue, categoryId } = useAppSelector(selectFilter);

    const searchFilter: SearchFilter = {
        categoryId,
        sortName,
        searchValue,
        order: OrderType.DESC,
    };
    const { data, isLoading } = useGetFilteredPizzasQuery(searchFilter);

    const dispatch = useAppDispatch();

    const onClickAdd = (index: {activeSize: number, activeType: number}, pizzaItem: PizzaItem) => {
        const newPizzaItem: CartItemType = {
            id: pizzaItem.id,
            title: pizzaItem.title,
            imageUrl: pizzaItem.imageUrl,
            price: pizzaItem.price[index.activeType],
            type: pizzaItem.types[index.activeSize],
            size: pizzaItem.sizes[index.activeSize],
            count: 0,
        };
        dispatch(addItem(newPizzaItem));
    };

    if (!data) {
        return <></>;
    }

    return (
        <PizzasCardsList
            pizzaItems={data}
            isLoading={isLoading}
            categoryId={categoryId}
            onClickAdd={onClickAdd}
        />
    );
};
