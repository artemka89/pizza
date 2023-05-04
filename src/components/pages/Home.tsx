import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setCategotyId, setCurrentPage } from "../../redux/filter/slice";

import {Pagination, Pizzas, Categories} from "../../components";

import { selectFilter } from "../../redux/filter/selectors";


export const Home = () => {
    const {categoryId, currentPage} = useAppSelector(selectFilter);

    const dispatch = useAppDispatch();

    const onChangeCategory = (index: number) => {
        dispatch(setCategotyId(index));
    };

    const onChangePage = (num: number) => {
        dispatch(setCurrentPage(num));
    };

    return (
        <>
            <Categories
                onChangeCategory={onChangeCategory}
                //@ts-ignore
                categoryId={categoryId}
            />
            <Pizzas
                //@ts-ignore
                categoryId={categoryId}
            />

            <Pagination
                //@ts-ignore
                currentPage={currentPage}
                onChangePage={onChangePage}
            />
        </>
    );
};


