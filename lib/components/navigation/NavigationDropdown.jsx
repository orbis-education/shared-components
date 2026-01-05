import { useRef } from "react";
import classnames from "classnames";
import { useNativeClickListener } from "../../hooks/useNativeClickListener";
import { isEmptyArray, noFunctionAvailable } from "shared-functions";
import NavigationLink from "./NavigationLink";

const NavigationDropdown = ({
  navigationItem = { name: "", componentName: "", type: "", dropdownItems: [] },
  returnActiveClass = noFunctionAvailable,
  handleNavigation = noFunctionAvailable
}) => {

  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useNativeClickListener(dropdownRef, false);

  const dropdownIcon = classnames("fa", {
    "fa-caret-up": isDropdownOpen === true,
    "fa-caret-down": isDropdownOpen !== true
  });


  return (
    <>

      <button
        type="button"
        onClick={() => { setIsDropdownOpen(!isDropdownOpen); }}
        ref={dropdownRef}
      >
        Dropdown <i className={dropdownIcon} />
      </button>

      {isDropdownOpen === true && !isEmptyArray(navigationItem?.dropdownItems) ?

        <ul className="dropdown">

          {navigationItem.dropdownItems.map((dropdownItem, index) => {

            return (
              <li key={index}>
                <NavigationLink navigationItem={dropdownItem} returnActiveClass={returnActiveClass} handleNavigation={handleNavigation} />
              </li>
            );
          })}

        </ul>

        : null}

    </>
  );
};

export default NavigationDropdown;