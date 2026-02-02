import { Dispatch, SetStateAction } from 'react';
type SortableColumnHeaderProps = {
    columnPropertyName: string;
    columnText: string;
    sortDirection: string;
    sortProperty: string;
    setSortDirection: Dispatch<SetStateAction<string>>;
    setSortProperty: Dispatch<SetStateAction<string>>;
};
declare const SortableColumnHeader: ({ columnPropertyName, columnText, setSortDirection, setSortProperty, sortDirection, sortProperty }: SortableColumnHeaderProps) => import("react/jsx-runtime").JSX.Element;
export default SortableColumnHeader;
