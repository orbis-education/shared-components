import { NavigationItem, ReturnActiveClassFunction } from '../../types/Navigation';
type NavigationDropdownProps = {
    navigationItem: NavigationItem;
    returnActiveClass: ReturnActiveClassFunction;
};
declare const NavigationDropdown: ({ navigationItem, returnActiveClass }: NavigationDropdownProps) => import("react").JSX.Element;
export default NavigationDropdown;
