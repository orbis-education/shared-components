import { Dispatch, SetStateAction } from 'react';
type MessagesProps = {
    informationMessage: string;
    successMessage: string;
    warningMessage: string;
    errorMessage: string;
    informationMessageVisible: boolean;
    successMessageVisible: boolean;
    warningMessageVisible: boolean;
    errorMessageVisible: boolean;
    addInformationMessage: Dispatch<SetStateAction<string>> | ((value: string) => void);
    addSuccessMessage: Dispatch<SetStateAction<string>> | ((value: string) => void);
    addWarningMessage: Dispatch<SetStateAction<string>> | ((value: string) => void);
    addErrorMessage: Dispatch<SetStateAction<string>> | ((value: string) => void);
};
declare const Messages: ({ informationMessage, successMessage, warningMessage, errorMessage, informationMessageVisible, successMessageVisible, warningMessageVisible, errorMessageVisible, addInformationMessage, addSuccessMessage, addWarningMessage, addErrorMessage }: MessagesProps) => import("react/jsx-runtime").JSX.Element;
export default Messages;
