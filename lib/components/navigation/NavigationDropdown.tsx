import { useRef } from "react";
import classnames from "classnames";
import { useNativeClickListener } from "../../hooks/useNativeClickListener";
import { isEmpty, isEmptyArray, noFunctionAvailable } from "shared-functions";
import NavigationLink from "./NavigationLink";
import { NavigationItem, returnActiveClassFunction } from "./NavigationTypes";

type NavigationDropdownProps = {
  navigationItem: NavigationItem;
  returnActiveClass: returnActiveClassFunction;
};

const NavigationDropdown = ({
  navigationItem = { name: "", type: "", dropdownItems: [] },
  returnActiveClass = noFunctionAvailable
}: NavigationDropdownProps) => {

  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useNativeClickListener(dropdownRef, false);

  const dropdownIcon = classnames("fa", {
    "fa-caret-up": isDropdownOpen === true,
    "fa-caret-down": isDropdownOpen !== true
  });

  // * copliot fix -- 01/13/2025 JH
  // * The issue is that navigationItem.dropdownItems could be undefined before the filter operation. Here's the fix:
  // * This uses the nullish coalescing operator (??) to provide an empty array as a fallback if dropdownItems is undefined or null. This ensures the .filter() method always has an array to work with.
  // const filteredDropdownItems = navigationItem?.dropdownItems.filter(dropdownItem => isEmpty(navigationItem.isPresent) || dropdownItem.isPresent === true);
  const filteredDropdownItems = (navigationItem?.dropdownItems ?? []).filter(dropdownItem => isEmpty(navigationItem.isPresent) || dropdownItem.isPresent === true);

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

        <ul className="dropdown">

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