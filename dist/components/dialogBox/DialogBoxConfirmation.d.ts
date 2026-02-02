import { Dispatch, SetStateAction } from 'react';
type DialogBoxConfirmationProps = {
    dialogBoxContent: string;
    dialogBoxOpen: boolean;
    dialogBoxSize: string;
    dialogBoxTitle: string;
    dialogBoxType: string;
    setDialogBoxContinue: Dispatch<SetStateAction<boolean>>;
};
declare const DialogBoxConfirmation: ({ dialogBoxContent, dialogBoxOpen, dialogBoxSize, dialogBoxTitle, dialogBoxType, setDialogBoxContinue }: DialogBoxConfirmationProps) => import("react/jsx-runtime").JSX.Element;
export default DialogBoxConfirmation;
