import { isEmpty, noFunctionAvailable } from "shared-functions";
import type { NavigationItem, ReturnActiveClassFunction } from "@/types/Navigation";

type NavigationLinkProps = {
  navigationItem: NavigationItem;
  returnActiveClass: ReturnActiveClassFunction;
};

const NavigationLink = ({
  navigationItem = {
    name: "",
    componentName: "",
    isPresent: true,
    type: "",
    onClick: noFunctionAvailable,
    children: null
  },
  returnActiveClass = noFunctionAvailable
}: NavigationLinkProps) => (
  <>
    <button
      type="button"
      role="link"
      className={returnActiveClass(navigationItem?.componentName ?? "")}
      onClick={navigationItem.onClick}
    >
      {navigationItem.name}
    </button>

    {!isEmpty(navigationItem.children) ? navigationItem.children : null}
  </>
);

export default NavigationLink;
