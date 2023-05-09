import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setCategotyId } from "../../redux/filter/slice";

import { Pizzas, Categories } from "../../components";

import { selectFilter } from "../../redux/filter/selectors";

export const Home = () => {
    const { categoryId } = useAppSelector(selectFilter);

    const dispatch = useAppDispatch();

    const onChangeCategory = (index: number | undefined) => {
        dispatch(setCategotyId(index));
    };

    return (
        <>
            <Categories
                onChangeCategory={onChangeCategory}
                categoryId={categoryId}
            />
            <Pizzas categoryId={categoryId} />
        </>
    );
};
