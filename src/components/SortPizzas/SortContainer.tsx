import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectFilter } from "../../redux/filter/selectors";
import { setSortName } from "../../redux/filter/slice";
import { sortList } from "../../helpers/sortList";

import { Sort } from "./Sort/Sort";


export const SortContainer = () => {

    const { sortName } = useAppSelector(selectFilter);
    const dispatch = useAppDispatch();

    const onChangeSortName = (sortName: string) => {
        dispatch(setSortName(sortName));
    };

    const onClickSortLink = (sortName: string) => {
        onChangeSortName(sortName);
    };
    
    return <>
    <Sort sortName={sortName} sortList={sortList} onClickSortLink={onClickSortLink}/>
    </>;
};
