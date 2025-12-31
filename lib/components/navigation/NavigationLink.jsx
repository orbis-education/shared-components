import { noFunctionAvailable } from "shared-functions";

const NavigationLink = ({
  navigationItem = {
    name: "",
    componentName: "",
    type: ""
  },
  returnActiveClass = noFunctionAvailable,
  handleNavigation = noFunctionAvailable
}) => (

  <button
    type="button"
    role="link"
    className={returnActiveClass(navigationItem.componentName)}
    onClick={() => { handleNavigation(navigationItem.componentName); }}
  >
    {navigationItem.name}
  </button>

);

export default NavigationLink;