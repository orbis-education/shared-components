import { Dispatch, SetStateAction } from 'react';
type AlertType = "error" | "success" | "info" | "warning" | "";
type AlertPopupProps = {
    alertType: AlertType;
    message: string;
    includeResetButton?: boolean;
    setMessage: Dispatch<SetStateAction<string>> | ((value: string) => void);
};
declare const AlertPopup: ({ alertType, message, includeResetButton, setMessage }: AlertPopupProps) => import("react/jsx-runtime").JSX.Element;
export default AlertPopup;
