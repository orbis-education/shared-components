import { NavigationItem, returnActiveClassFunction } from '../../types/NavigationTypes';
type NavigationLinkProps = {
    navigationItem: NavigationItem;
    returnActiveClass: returnActiveClassFunction;
};
declare const NavigationLink: ({ navigationItem, returnActiveClass }: NavigationLinkProps) => import("react/jsx-runtime").JSX.Element;
export default NavigationLink;
