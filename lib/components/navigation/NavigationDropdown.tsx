import { useRef } from "react";
import classnames from "classnames";
import { useNativeClickListener } from "../../hooks/useNativeClickListener";
import { NavigationItem } from "../types/Navigation";
import { isEmptyArray } from "shared-functions";

type NavigationDropdownProps = {
  navigationItem: NavigationItem;
  returnActiveClass: (componentName: string, classList?: string) => string;
};

const NavigationDropdown = ({
  navigationItem = {
    name: "",
    componentName: "",
    type: "",
    dropdownItems: []
  },
  returnActiveClass = () => ""
}: NavigationDropdownProps) => {

  const dropdownRef = useRef<HTMLButtonElement>(null);
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
                <button
                  type="button"
                  role="link"
                  className={returnActiveClass(dropdownItem.componentName)}
                  onClick={dropdownItem.onClick}
                >
                  {dropdownItem.name}
                </button>
              </li>
            );
          })}

        </ul>

        : null}

    </>
  );
};

export default NavigationDropdown;