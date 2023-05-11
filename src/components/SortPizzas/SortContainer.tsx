import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectFilter } from "../../redux/filter/selectors";
import { setSortName } from "../../redux/filter/slice";
import { SortName } from "../../redux/filter/types";

import { Sort } from "./Sort/Sort";


export const SortContainer = () => {

    const { sortName } = useAppSelector(selectFilter);
    const dispatch = useAppDispatch();

    const onChangeSortName = (sortName: SortName) => {
        dispatch(setSortName(sortName));
    };

    const onClickSortLink = (sortName: SortName) => {
        onChangeSortName(sortName);
    };

    return <>
    <Sort sortName={sortName} onClickSortLink={onClickSortLink}/>
    </>;
};
