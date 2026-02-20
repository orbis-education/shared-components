import { Dispatch, SetStateAction } from "react";
import classnames from "classnames";

type SortableColumnHeaderProps = {
  columnPropertyName: string;
  columnText: string;
  sortDirection: string;
  sortProperty: string;
  setSortDirection: Dispatch<SetStateAction<string>>;
  setSortProperty: Dispatch<SetStateAction<string>>;
};

const SortableColumnHeader = ({
  columnPropertyName = "",
  columnText = "",
  setSortDirection,
  setSortProperty,
  sortDirection = "",
  sortProperty = ""
}: SortableColumnHeaderProps) => {
  const iconClasses: string = classnames("fa", {
    "fa-sort-up": sortProperty === columnPropertyName && sortDirection === "asc",
    "fa-sort-down": sortProperty === columnPropertyName && sortDirection === "desc",
    "fa-sort": sortProperty !== columnPropertyName || sortDirection === "unsorted"
  });

  const handleSort = (propertyToSort: string) => {
    if (sortDirection === "unsorted" || propertyToSort !== sortProperty) {
      setSortProperty(propertyToSort);
      setSortDirection("asc");
    } else if (sortDirection === "asc") {
      setSortProperty(propertyToSort);
      setSortDirection("desc");
    } else {
      setSortProperty("");
      setSortDirection("unsorted");
    }
  };

  return (
    <div className="sortable-column-heading">
      {columnText}
      <button
        type="button"
        className="btn btn-transparent sort-button"
        onClick={() => handleSort(columnPropertyName)}
      >
        <i className={iconClasses}></i>
      </button>
    </div>
  );
};

export default SortableColumnHeader;
