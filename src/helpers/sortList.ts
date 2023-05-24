export type sortListType = {
    sortName: string,
    sortProp: string
}

export const sortList: sortListType[] = [
    {sortName: 'Популярности', sortProp: 'rating'},
    {sortName: 'Цене', sortProp: 'price'},
    {sortName: 'Алфавиту', sortProp: 'title'}    
]