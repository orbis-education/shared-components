type UsePaginationProps = {
    allRecords: unknown[];
    defaultResultsPerPage: number;
};
declare const usePagination: ({ allRecords, defaultResultsPerPage }: UsePaginationProps) => {
    ddResultsPerPage: number;
    currentPageNumber: number;
    totalPages: number;
    currentPageRecords: unknown[];
    setDdResultsPerPage: import('react').Dispatch<import('react').SetStateAction<number>>;
    setCurrentPageNumber: import('react').Dispatch<import('react').SetStateAction<number>>;
    setCurrentPageRecords: import('react').Dispatch<import('react').SetStateAction<unknown[]>>;
    determineTotalPages: (searchResults: unknown[]) => void;
};
export default usePagination;
