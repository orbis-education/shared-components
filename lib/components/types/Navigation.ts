export type NavigationItem = {
  name: string;
  componentName: string;
  onClick?: () => void;
  type?: string;
  dropdownItems?: {
    name: string;
    componentName: string;
    onClick: () => void;
  }[];
};