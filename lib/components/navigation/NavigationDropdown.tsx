import { useRef } from "react";
import classnames from "classnames";
import { useNativeClickListener } from "../../hooks/useNativeClickListener";
import { isEmpty, isEmptyArray, noFunctionAvailable } from "shared-functions";
import NavigationLink from "./NavigationLink";
import { NavigationItem, returnActiveClassFunction } from "../../types/NavigationTypes";

type NavigationDropdownProps = {
  navigationItem: NavigationItem;
  returnActiveClass: returnActiveClassFunction;
};

const NavigationDropdown = ({
  navigationItem = { name: "", type: "", classes: "", dropdownItems: [] },
  returnActiveClass = noFunctionAvailable
}: NavigationDropdownProps) => {

  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useNativeClickListener(dropdownRef, false);

  const dropdownIcon = classnames("fa", {
    "fa-caret-up": isDropdownOpen === true,
    "fa-caret-down": isDropdownOpen !== true
  });

  // * copliot fix -- 01/13/2026 JH
  // * The issue is that navigationItem.dropdownItems could be undefined before the filter operation. Here's the fix:
  // * This uses the nullish coalescing operator (??) to provide an empty array as a fallback if dropdownItems is undefined or null. This ensures the .filter() method always has an array to work with.
  // const filteredDropdownItems = navigationItem?.dropdownItems.filter(dropdownItem => isEmpty(navigationItem.isPresent) || dropdownItem.isPresent === true);
  const filteredDropdownItems = (navigationItem?.dropdownItems ?? []).filter(dropdownItem => isEmpty(dropdownItem.isPresent) || dropdownItem.isPresent === true);

  const dropdownClassnames = !isEmpty(navigationItem?.classes) ? `dropdown ${navigationItem.classes}` : "dropdown";

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