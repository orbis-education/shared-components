import FormDropdown from "../form/FormDropdown";

const Pagination = ({
  defaultResultsPerPage = 30,
  ddResultsPerPage = 30,
  currentPageNumber = 1,
  totalPages = 1,
  setDdResultsPerPage,
  setCurrentPageNumber
}) => {

  const handlePageClick = (value) => {
    window.scrollTo(0, 0);
    setCurrentPageNumber(value);
  };

  return (
    <div className="pagination-section">

      <FormDropdown
        formInputID="ddResultsPerPage"
        labelText="Results per Page"
        optionData={[
          { sizeID: defaultResultsPerPage, optionText: defaultResultsPerPage },
          { sizeID: defaultResultsPerPage * 2, optionText: defaultResultsPerPage * 2 },
          { sizeID: defaultResultsPerPage * 3, optionText: defaultResultsPerPage * 3 },
          { sizeID: "all", optionText: "All" }
        ]}
        optionID="sizeID"
        optionText={[{ type: "property", text: "optionText" }]}
        emptyOption={true}
        useInputAddon={true}
        inputValue={ddResultsPerPage}
        updateValue={setDdResultsPerPage}
      />

      <div className="pagination-controls">
        <button
          type="button"
          className="btn btn-light-gray"
          onClick={() => handlePageClick(1)}
          disabled={currentPageNumber <= 1}
          title="Go to First Page"
        >
          <i className="fa fa-angle-double-left" />
          <span className="sr-only">Go to First Page</span>
        </button>

        <button
          type="button"
          className="btn btn-light-gray"
          onClick={() => handlePageClick(currentPageNumber - 1)}
          disabled={currentPageNumber <= 1}
          title="Go to Previous Page"
        >
          <i className="fa fa-angle-left" />
          <span className="sr-only">Go to Previous Page</span>
        </button>

        <strong>Page {currentPageNumber} of {totalPages}</strong>

        <button
          type="button"
          className="btn btn-light-gray"
          onClick={() => handlePageClick(currentPageNumber + 1)}
          disabled={currentPageNumber >= totalPages}
          title="Go to Next Page"
        >
          <i className="fa fa-angle-right" />
          <span className="sr-only">Go to Next Page</span>
        </button>

        <button
          type="button"
          className="btn btn-light-gray"
          onClick={() => handlePageClick(totalPages)}
          disabled={currentPageNumber >= totalPages}
          title="Go to Last Page"
        >
          <i className="fa fa-angle-double-right" />
          <span className="sr-only">Go to Last Page</span>
        </button>

      </div>

    </div>
  );
};

export default Pagination;