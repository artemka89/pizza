import { useParams } from "react-router-dom";
import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/store";

import { addItem } from "../../redux/cart/slice";
import { selectCartCount } from "../../redux/cart/selectors";
import { CartItemType } from "../../redux/cart/types";

import {
    useGetPizzaByIdQuery,
    useGetPizzaByPopularQuery,
} from "../../redux/pizza/pizza.api";

export const FullPizza: React.FC = () => {
    const dispatch = useAppDispatch();

    const param = useParams<{ id: string }>();

    const { data } = useGetPizzaByIdQuery(param.id);
    const { data: itemPopular } = useGetPizzaByPopularQuery("");

    const cartItem = useAppSelector(selectCartCount(param.id));

    const compound = data?.compound?.split(",");

    // const onClickAdd = () => {
    //     if (data) {
    //         const newItem: CartItemType = {
    //             id: data.id,
    //             title: data.title,
    //             imageUrl: data.imageUrl,
    //             price: data.price[activeSize],
    //             type: data.types[activeType],
    //             size: data.sizes[activeSize],
    //             count: 0,
    //         };
    //         dispatch(addItem(newItem));
    //     }
    // };

    if (!data) {
        return <></>;
    }

    return (
       <></>
    );
};
