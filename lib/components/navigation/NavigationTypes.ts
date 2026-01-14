export type NavigationItem = {
  name: string;
  componentName?: string;
  type?: string;
  isPresent?: boolean;
  onClick?: () => void;
  dropdownItems?: {
    name: string;
    componentName?: string;
    isPresent?: boolean;
    onClick?: () => void;
  }[];
  children?: React.ReactNode;
};

export type returnActiveClassFunction = (componentName: string | null, classList?: string) => string;