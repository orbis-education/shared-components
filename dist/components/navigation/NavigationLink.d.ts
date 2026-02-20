import { NavigationItem, ReturnActiveClassFunction } from '../../types/NavigationTypes';
type NavigationLinkProps = {
    navigationItem: NavigationItem;
    returnActiveClass: ReturnActiveClassFunction;
};
declare const NavigationLink: ({ navigationItem, returnActiveClass }: NavigationLinkProps) => import("react/jsx-runtime").JSX.Element;
export default NavigationLink;
