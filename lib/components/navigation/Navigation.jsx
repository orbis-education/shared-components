import { isEmpty, isEmptyArray } from "shared-functions";
import NavigationDropdown from "./NavigationDropdown";
import NavigationLink from "./NavigationLink";

const Navigation = ({
  navigationItems = [],
  componentToLoad = ""
}) => {

  const filteredNavigationItems = navigationItems.filter(navigationItem => isEmpty(navigationItem.isPresent) || navigationItem.isPresent === true);


  const returnActiveClass = (componentName, classList) => {

    let newClassList = !isEmpty(classList) ? classList : "";

    newClassList += componentToLoad === componentName ? " active" : "";

    return newClassList;

  };


  return (
    <nav className="sub-header-nav">
      <ul>
        {!isEmptyArray(filteredNavigationItems) ?

          <>

            {filteredNavigationItems.map((navigationItem, index) => (

              <li key={index}>

                {navigationItem.type === "dropdown" ?
                  <NavigationDropdown navigationItem={navigationItem} returnActiveClass={returnActiveClass} />
                  :
                  <NavigationLink navigationItem={navigationItem} returnActiveClass={returnActiveClass} />
                }

              </li>

            ))}

          </>

          : null}
      </ul>
    </nav>
  );
};

export default Navigation;