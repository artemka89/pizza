import { useSelector, useDispatch } from "react-redux";
import { setCategotyId, setCurrentPage } from "../../../redux/filter/slice";

import Categories from "../../content/Categories/Categories";
import Pizzas from "../../content/Pizzas/Pizzas";
import Pagination from "../../Pagitation";

const Home = () => {
    const categoryId = useSelector<any>((state) => state.filter.categoryId);
    const currentPage = useSelector<any>((state) => state.filter.currentPage);
    const dispatch = useDispatch();

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

export default Home;
