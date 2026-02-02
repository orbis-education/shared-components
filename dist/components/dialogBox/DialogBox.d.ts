import { Dispatch, SetStateAction } from 'react';
type DialogBoxProps = {
    dialogBoxContent: string;
    dialogBoxOpen: boolean;
    dialogBoxSize: string;
    dialogBoxTitle: string;
    setDialogBoxOpen: Dispatch<SetStateAction<boolean>>;
};
declare const DialogBox: ({ dialogBoxContent, dialogBoxOpen, dialogBoxSize, dialogBoxTitle, setDialogBoxOpen }: DialogBoxProps) => import("react/jsx-runtime").JSX.Element;
export default DialogBox;
