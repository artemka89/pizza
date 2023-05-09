export interface FilterSliceState {
    categoryId: number | undefined;
    sortName: SortName;
    searchValue: string
}

export enum SortName {
    RATING = "rating",
    PRICE = "price",
    TITLE = "title",
}

export enum OrderType {
    DESC = "desc",
    ASC = "asc",
}

export interface SearchFilter {
    categoryId: number | undefined;
    sortName: SortName;
    searchValue: string;
    order: OrderType;
}
