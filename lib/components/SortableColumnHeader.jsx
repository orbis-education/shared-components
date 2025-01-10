import React from 'react';
import classnames from "classnames";
import { noFunctionAvailable, isEmpty /* , getDateTime */ } from "shared-functions";

const SortableColumnHeader = (props) => {

  // * Available props: -- 06/27/2024 JH
  // * Properties: columnText, columnPropertyName, sortDirection, sortProperty -- 06/27/2024 JH
  // * Functions: setSortProperty, setSortDirection -- 06/27/2024 JH

  // const componentName = "SortableColumnHeader";

  let columnText = isEmpty(props) === false && isEmpty(props.columnText) === false ? props.columnText : "";
  let columnPropertyName = isEmpty(props) === false && isEmpty(props.columnPropertyName) === false ? props.columnPropertyName : "";
  let columnPropertyNameTwo = isEmpty(props) === false && isEmpty(props.columnPropertyNameTwo) === false ? props.columnPropertyNameTwo : "";
  let sortDirection = isEmpty(props) === false && isEmpty(props.sortDirection) === false ? props.sortDirection : "";
  let sortProperty = isEmpty(props) === false && isEmpty(props.sortProperty) === false ? props.sortProperty : "";
  // let sortPropertyTwo = isEmpty(props) === false && isEmpty(props.sortProperty) === false ? props.sortProperty : "";

  let setSortDirection = isEmpty(props.setSortDirection) === false ? props.setSortDirection : noFunctionAvailable;
  let setSortProperty = isEmpty(props.setSortProperty) === false ? props.setSortProperty : noFunctionAvailable;
  let setSortPropertyTwo = isEmpty(props.setSortPropertyTwo) === false ? props.setSortPropertyTwo : noFunctionAvailable;

  let iconClasses = classnames("fa", {
    "fa-sort-up": sortProperty === columnPropertyName && sortDirection === "asc",
    "fa-sort-down": sortProperty === columnPropertyName && sortDirection === "desc",
    "fa-sort": sortProperty !== columnPropertyName || sortDirection === "unsorted"
  });


  const handleSort = (propertyToSort, propertyToSortTwo) => {

    if (sortDirection === "unsorted" || propertyToSort !== sortProperty) {

      setSortProperty(propertyToSort);
      setSortPropertyTwo(propertyToSortTwo);
      setSortDirection("asc");

    } else if (sortDirection === "asc") {

      setSortProperty(propertyToSort);
      setSortPropertyTwo(propertyToSortTwo);
      setSortDirection("desc");

    } else {

      setSortProperty("");
      setSortPropertyTwo("");
      setSortDirection("unsorted");

    };

  };


  return (
    <div className="sortable-column-heading">
      {columnText}
      <button type="button" className="btn btn-transparent sort-button" onClick={() => { handleSort(columnPropertyName, columnPropertyNameTwo); }}>
        <i className={iconClasses}></i>
      </button>
    </div>
  );
};

export default SortableColumnHeader;