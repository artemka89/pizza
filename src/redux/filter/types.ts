export interface FilterSliceState {
    categoryId: number | undefined;
    sortName: string;
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
    sortName: string;
    searchValue: string;
    order: OrderType;
}
