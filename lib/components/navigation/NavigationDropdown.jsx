import { useRef } from "react";
import classnames from "classnames";
import { useNativeClickListener } from "../../hooks/useNativeClickListener";
import { isEmpty, isEmptyArray, noFunctionAvailable } from "shared-functions";
import NavigationLink from "./NavigationLink";

const NavigationDropdown = ({
  navigationItem = { name: "", type: "", classes: "", dropdownItems: [] },
  returnActiveClass = noFunctionAvailable
}) => {

  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useNativeClickListener(dropdownRef, false);

  const dropdownIcon = classnames("fa", {
    "fa-caret-up": isDropdownOpen === true,
    "fa-caret-down": isDropdownOpen !== true
  });

  const dropdownClassnames = !isEmpty(navigationItem?.classes) ? `dropdown ${navigationItem.classes}` : "dropdown";

  const filteredDropdownItems = navigationItem?.dropdownItems.filter(dropdownItem => isEmpty(dropdownItem.isPresent) || dropdownItem.isPresent === true);

  return (
    <>

      <button
        type="button"
        onClick={() => { setIsDropdownOpen(!isDropdownOpen); }}
        ref={dropdownRef}
      >
        {navigationItem.name} <i className={dropdownIcon} />
      </button>

      {isDropdownOpen === true && !isEmptyArray(filteredDropdownItems) ?

        <ul className={dropdownClassnames}>

          {filteredDropdownItems.map((dropdownItem, index) => {

            return (
              <li key={index}>
                <NavigationLink navigationItem={dropdownItem} returnActiveClass={returnActiveClass} />
              </li>
            );
          })}

        </ul>

        : null}

    </>
  );
};

export default NavigationDropdown;