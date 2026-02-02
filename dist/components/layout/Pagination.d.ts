type PaginationProps = {
    defaultResultsPerPage: number;
    ddResultsPerPage: number;
    currentPageNumber: number;
    totalPages: number;
    setDdResultsPerPage: (value: number) => void;
    setCurrentPageNumber: (value: number) => void;
};
declare const Pagination: ({ defaultResultsPerPage, ddResultsPerPage, currentPageNumber, totalPages, setDdResultsPerPage, setCurrentPageNumber }: PaginationProps) => import("react/jsx-runtime").JSX.Element;
export default Pagination;
