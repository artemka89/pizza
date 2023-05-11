import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectFilter } from "../../redux/filter/selectors";
import { setCategotyId } from "../../redux/filter/slice";

import { Categories } from "./Categories/Categories";

export const CategoriesContainer = () => {
    const dispatch = useAppDispatch();
    const { categoryId } = useAppSelector(selectFilter);

    const onClickCategory = (BtnIndex: number) => {
        const index = BtnIndex === 0 ? undefined : BtnIndex;
        onChangeCategory(index);
    };

    const onChangeCategory = (BtnIndex: number | undefined) => {
        dispatch(setCategotyId(BtnIndex));
    };

    return (
        <Categories categoryId={categoryId} onClickCategory={onClickCategory} />
    );
};
