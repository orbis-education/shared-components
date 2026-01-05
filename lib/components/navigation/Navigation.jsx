import { isEmpty, isEmptyArray, noFunctionAvailable } from "shared-functions";
import NavigationDropdown from "./NavigationDropdown";
import NavigationLink from "./NavigationLink";

const Navigation = ({
  navigationItems = [],
  componentToLoad = "",
  setComponentToLoad = noFunctionAvailable
}) => {


  const handleNavigation = (component) => {

    window.scrollTo(0, 0);

    setComponentToLoad(component);

  };


  const returnActiveClass = (componentName, classList) => {

    let newClassList = !isEmpty(classList) ? classList : "";

    newClassList += componentToLoad === componentName ? " active" : "";

    return newClassList;

  };


  return (
    <nav className="sub-header-nav">
      <ul>
        {!isEmptyArray(navigationItems) ?

          <>

            {navigationItems.map((navigationItem, index) => (

              <li key={index}>

                {navigationItem.type === "dropdown" ?
                  <NavigationDropdown navigationItem={navigationItem} returnActiveClass={returnActiveClass} handleNavigation={handleNavigation} />
                  :
                  <NavigationLink navigationItem={navigationItem} returnActiveClass={returnActiveClass} handleNavigation={handleNavigation} />
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