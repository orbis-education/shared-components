import { Dispatch, SetStateAction } from 'react';
type ToggleSwitchProps = {
    id: string;
    label: string;
    value: boolean;
    disabled?: boolean;
    falseValue?: string;
    hint?: string;
    isRequired?: boolean;
    srOnly?: boolean;
    trueValue?: string;
    updateValue: Dispatch<SetStateAction<boolean>> | ((value: boolean) => void);
};
declare const ToggleSwitch: ({ id, label, value, disabled, falseValue, hint, isRequired, srOnly, trueValue, updateValue }: ToggleSwitchProps) => import("react/jsx-runtime").JSX.Element;
export default ToggleSwitch;
