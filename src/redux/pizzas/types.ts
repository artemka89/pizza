export type PizzaItem = {
    id: string;
    title: string;
    imageUrl: string;
    types: string[];
    sizes: number[];
    price: number[];
    weight: number[];
};

export type FetchPizzasArgs = {
    currentPage: number;
    categoryId: number;
    sortName: string[];
    sortIndex: number;
    search: string; 
};

export type FetchPizzaByIdArgs = {
   id: string
};

export interface ItemsSliseState {
    items: PizzaItem[];
    status: Status;
}

export enum Status {
    LOADING = "loading",
    SUCCESS = "succes",
    ERROR = "error",
}
