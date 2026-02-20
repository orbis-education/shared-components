import { isEmpty, isEmptyArray } from "shared-functions";
import NavigationDropdown from "./NavigationDropdown";
import NavigationLink from "./NavigationLink";
import { NavigationItem } from "@/types/NavigationTypes";

type NavigationProps = {
  navigationItems: NavigationItem[];
  componentToLoad: string;
};

const Navigation = ({ navigationItems = [], componentToLoad = "" }: NavigationProps) => {
  const filteredNavigationItems = navigationItems.filter(
    navigationItem => isEmpty(navigationItem.isPresent) || navigationItem.isPresent === true
  );

  const returnActiveClass = (componentName: string | null, classList?: string) => {
    // let newClassList: string = !isEmpty(classList) ? classList : "";
    let newClassList: string = classList ?? "";

    newClassList += componentToLoad === componentName ? " active" : "";

    return newClassList;
  };

  return (
    <nav className="sub-header-nav">
      <ul>
        {!isEmptyArray(filteredNavigationItems) ? (
          <>
            {filteredNavigationItems.map((navigationItem: NavigationItem, index) => (
              <li key={index}>
                {navigationItem.type === "dropdown" ? (
                  <NavigationDropdown
                    navigationItem={navigationItem}
                    returnActiveClass={returnActiveClass}
                  />
                ) : (
                  <NavigationLink
                    navigationItem={navigationItem}
                    returnActiveClass={returnActiveClass}
                  />
                )}
              </li>
            ))}
          </>
        ) : null}
      </ul>
    </nav>
  );
};

export default Navigation;
