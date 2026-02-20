import { Dispatch, SetStateAction } from 'react';
import { OptionText } from '../../types/FormTypes';
type RadioOption = Record<string, unknown> & {
    active?: boolean;
};
type FormRadioGroupProps = {
    id: string;
    optionData: RadioOption[];
    optionID: string;
    optionText: OptionText[];
    value: string;
    collapseList?: boolean;
    columns?: number;
    disabled?: boolean;
    hint?: string;
    inlineError?: string;
    isCollapsible?: boolean;
    isRequired?: boolean;
    legend?: string;
    srOnly?: boolean;
    startCollapsed?: boolean;
    setCollapseList?: Dispatch<SetStateAction<boolean>>;
    updateValue: Dispatch<SetStateAction<string>> | ((value: string) => void);
};
declare const FormRadioGroup: ({ id, optionData, optionID, optionText, value, collapseList, columns, disabled, hint, inlineError, isCollapsible, isRequired, legend, srOnly, startCollapsed, setCollapseList, updateValue }: FormRadioGroupProps) => import("react/jsx-runtime").JSX.Element;
export default FormRadioGroup;
