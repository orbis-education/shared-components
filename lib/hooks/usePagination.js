import { useState, useEffect } from "react";
import { isEmptyArray } from "shared-functions";

const usePagination = ({
  allRecords = [],
  defaultResultsPerPage = 30
}) => {

  // * Pagination Values -- 05/30/2024 EBG
  const [ddResultsPerPage, setDdResultsPerPage] = useState(defaultResultsPerPage);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPageRecords, setCurrentPageRecords] = useState([]);


  useEffect(() => {

    if (!isEmptyArray(allRecords)) {

      determineTotalPages(allRecords);

    };

  }, [ddResultsPerPage, currentPageNumber]);


  const determineTotalPages = (searchResults) => {

    if (!isEmptyArray(searchResults)) {

      let pageSize = !isNaN(ddResultsPerPage) ? ddResultsPerPage : searchResults.length;

      let indexOfLastRecord = currentPageNumber * pageSize;
      let indexOfFirstRecord = indexOfLastRecord - pageSize;

      let newTotalPages = Math.ceil(searchResults.length / pageSize);

      let newCurrentPageRecords = searchResults.slice(indexOfFirstRecord, indexOfLastRecord);

      setTotalPages(newTotalPages);

      setCurrentPageRecords(newCurrentPageRecords);

      // * If the current page is higher than the new total number of pages (this can happen when changing results per page), set to new last page -- 05/30/2024 EBG
      if (currentPageNumber > newTotalPages) {

        setCurrentPageNumber(newTotalPages);

      };

    } else {

      setCurrentPageRecords([]);

    };

  };


  return { ddResultsPerPage, currentPageNumber, totalPages, currentPageRecords, setDdResultsPerPage, setCurrentPageNumber, setCurrentPageRecords, determineTotalPages };
};

export default usePagination;