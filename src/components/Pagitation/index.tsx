import ReactPaginate from "react-paginate";
import styles from './Pagination.module.scss'

type PaginationProps = {
  onChangePage: (e: number) => void;
  currentPage: number
}

export const Pagination: React.FC<PaginationProps> = ({onChangePage, currentPage}) => {
    return ( 
<div className="container">
    <ReactPaginate
          className={styles.pagination}
          breakLabel="..."
          previousLabel="<"
          nextLabel=">"
          onPageChange={(e) => onChangePage(e.selected + 1)}
          pageRangeDisplayed={8}
          pageCount={2}
          forcePage={currentPage - 1}
          renderOnZeroPageCount={null}
        />        
      </div>
    )
}
