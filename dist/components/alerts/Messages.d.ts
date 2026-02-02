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
    addInformationMessage: Dispatch<SetStateAction<string>>;
    addSuccessMessage: Dispatch<SetStateAction<string>>;
    addWarningMessage: Dispatch<SetStateAction<string>>;
    addErrorMessage: Dispatch<SetStateAction<string>>;
};
declare const Messages: ({ informationMessage, successMessage, warningMessage, errorMessage, informationMessageVisible, successMessageVisible, warningMessageVisible, errorMessageVisible, addInformationMessage, addSuccessMessage, addWarningMessage, addErrorMessage }: MessagesProps) => import("react/jsx-runtime").JSX.Element;
export default Messages;
