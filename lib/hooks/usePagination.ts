import { useState, useEffect } from "react";
import { isEmptyArray } from "shared-functions";

type UsePaginationProps<T> = {
  allRecords: T[];
  defaultResultsPerPage: number;
};

const usePagination = <T>({
  allRecords = [],
  defaultResultsPerPage = 30
}: UsePaginationProps<T>) => {
  // * Pagination Values -- 05/30/2024 EBG
  const [ddResultsPerPage, setDdResultsPerPage] = useState<number>(defaultResultsPerPage);
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPageRecords, setCurrentPageRecords] = useState<T[]>([]);

  const determineTotalPages = (searchResults: T[]) => {
    if (!isEmptyArray(searchResults)) {
      const pageSize = !isNaN(ddResultsPerPage) ? ddResultsPerPage : searchResults.length;

      const indexOfLastRecord = currentPageNumber * pageSize;
      const indexOfFirstRecord = indexOfLastRecord - pageSize;

      const newTotalPages = Math.ceil(searchResults.length / pageSize);

      const newCurrentPageRecords = searchResults.slice(indexOfFirstRecord, indexOfLastRecord);

      setTotalPages(newTotalPages);

      setCurrentPageRecords(newCurrentPageRecords);

      // * If the current page is higher than the new total number of pages (this can happen when changing results per page), set to new last page -- 05/30/2024 EBG
      if (currentPageNumber > newTotalPages) {
        setCurrentPageNumber(newTotalPages);
      }
    } else {
      setCurrentPageRecords([]);
    }
  };

  useEffect(() => {
    if (!isEmptyArray(allRecords)) {
      determineTotalPages(allRecords);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ddResultsPerPage, currentPageNumber]);

  return {
    ddResultsPerPage,
    currentPageNumber,
    totalPages,
    currentPageRecords,
    setDdResultsPerPage,
    setCurrentPageNumber,
    setCurrentPageRecords,
    determineTotalPages
  };
};

export default usePagination;
