type DialogBox = {
    dialogBoxSize?: string;
    dialogBoxTitle?: string;
    dialogBoxContent?: string;
    dialogBoxType?: string;
};
export declare const useDialogBoxConfirmation: () => {
    processTransactionValue: string;
    confirmationDialogBoxOpen: boolean;
    confirmationDialogBoxSize: string;
    confirmationDialogBoxTitle: string;
    confirmationDialogBoxContent: string;
    confirmationDialogBoxType: string;
    confirmationDialogBoxContinue: boolean | null;
    confirmAction: (data: DialogBox) => void;
    deleteRecord: (data?: DialogBox) => void;
    hardDeleteRecord: (data: DialogBox) => void;
    closeDeleteDialogBox: () => void;
    setConfirmationDialogBoxContinue: import('react').Dispatch<import('react').SetStateAction<boolean | null>>;
    setProcessTransactionValue: import('react').Dispatch<import('react').SetStateAction<string>>;
};
export default useDialogBoxConfirmation;
