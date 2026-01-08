import { noFunctionAvailable } from "shared-functions";

const NavigationLink = ({
  navigationItem = {
    name: "",
    componentName: "",
    type: "",
    onClick: noFunctionAvailable
  },
  returnActiveClass = noFunctionAvailable
}) => (
  <>

    <button
      type="button"
      role="link"
      className={returnActiveClass(navigationItem.componentName)}
      onClick={navigationItem.onClick}
    >
      {navigationItem.name}
    </button>

    {!isEmpty(navigationItem.children) ? navigationItem.children : null}

  </>
);

export default NavigationLink;