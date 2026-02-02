import { NavigationItem } from '../../types/NavigationTypes';
type NavigationProps = {
    navigationItems: NavigationItem[];
    componentToLoad: string;
};
declare const Navigation: ({ navigationItems, componentToLoad }: NavigationProps) => import("react/jsx-runtime").JSX.Element;
export default Navigation;
