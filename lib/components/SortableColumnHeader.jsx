import { Component } from "react";
import classnames from "classnames";

const SortableColumnHeader = ({ columnText = "", columnPropertyName = "", sortDirection = "", sortProperty = "", setSortDirection, setSortProperty }) => {

  Component.displayName = "SortableColumnHeader";

  let iconClasses = classnames("fa", {
    "fa-sort-up": sortProperty === columnPropertyName && sortDirection === "asc",
    "fa-sort-down": sortProperty === columnPropertyName && sortDirection === "desc",
    "fa-sort": sortProperty !== columnPropertyName || sortDirection === "unsorted"
  });


  const handleSort = (propertyToSort) => {

    if (sortDirection === "unsorted" || propertyToSort !== sortProperty) {

      setSortProperty(propertyToSort);
      setSortDirection("asc");

    } else if (sortDirection === "asc") {

      setSortProperty(propertyToSort);
      setSortDirection("desc");

    } else {

      setSortProperty("");
      setSortDirection("unsorted");

    };

  };


  return (
    <div className="sortable-column-heading">
      {columnText}
      <button type="button" className="btn btn-transparent sort-button" onClick={() => { handleSort(columnPropertyName); }}>
        <i className={iconClasses}></i>
      </button>
    </div>
  );
};

export default SortableColumnHeader;