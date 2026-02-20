type UsePaginationProps<T> = {
    allRecords: T[];
    defaultResultsPerPage: number;
};
declare const usePagination: <T>({ allRecords, defaultResultsPerPage }: UsePaginationProps<T>) => {
    ddResultsPerPage: number;
    currentPageNumber: number;
    totalPages: number;
    currentPageRecords: T[];
    setDdResultsPerPage: import('react').Dispatch<import('react').SetStateAction<number>>;
    setCurrentPageNumber: import('react').Dispatch<import('react').SetStateAction<number>>;
    setCurrentPageRecords: import('react').Dispatch<import('react').SetStateAction<T[]>>;
    determineTotalPages: (searchResults: T[]) => void;
};
export default usePagination;
