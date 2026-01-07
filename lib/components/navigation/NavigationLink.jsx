import { noFunctionAvailable } from "shared-functions";

const NavigationLink = ({
  navigationItem = {
    name: "",
    componentName: "",
    type: ""
  },
  returnActiveClass = noFunctionAvailable
}) => (

  <button
    type="button"
    role="link"
    className={returnActiveClass(navigationItem.componentName)}
    onClick={navigationItem.onClick}
  >
    {navigationItem.name}
  </button>

);

export default NavigationLink;