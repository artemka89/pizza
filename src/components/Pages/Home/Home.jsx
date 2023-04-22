import { useSelector, useDispatch } from "react-redux";
import {
    setCategotyId,
    setCurrentPage,
} from "../../../redux/slices/filterSlice";

import Categories from "../../content/Categories/Categories";
import Pizzas from "../../content/Pizzas/Pizzas";
import Pagination from "../../Pagitation";

const Home = () => {
    const categoryId = useSelector((state) => state.filter.categoryId);
    const currentPage = useSelector((state) => state.filter.currentPage);
    const dispatch = useDispatch();

    const onChangeCategory = (index) => {
        dispatch(setCategotyId(index));
    };
    
    const onChangePage = (num) => {
        dispatch(setCurrentPage(num));
    };

    return (
        <>
            <Categories
                onChangeCategory={onChangeCategory}
                categoryId={categoryId}
            />
            <Pizzas c categoryId={categoryId} />
            <Pagination currentPage={currentPage} onChangePage={onChangePage} />
        </>
    );
};

export default Home;
