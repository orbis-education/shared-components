import { Component, useState, useEffect } from "react";
import { isEmpty } from "shared-functions";

export const useDialogBoxConfirmation = () => {

  Component.displayName = "useDialogBoxConfirmation";

  const [confirmationDialogBoxType, setConfirmationDialogBoxType] = useState(null); // * dialogBoxTypes: confirmDelete, confirmDeleteCascade, deleteRemoteData, deleteLocalData, confirmRemove, confirmRemoveAll, changePagePrompt, resetCount, resetTable, logOut, closeProgram -- 10/23/2023 JH
  const [confirmationDialogBoxSize, setConfirmationDialogBoxSize] = useState(""); // * sm, md, lg, xl -- 07/15/2021 MF
  const [confirmationDialogBoxTitle, setConfirmationDialogBoxTitle] = useState("");
  const [confirmationDialogBoxContent, setConfirmationDialogBoxContent] = useState("");

  const [confirmationDialogBoxOpen, setConfirmationDialogBoxOpen] = useState(false);
  const [confirmationDialogBoxContinue, setConfirmationDialogBoxContinue] = useState(false);
  const [deletingRecord, setDeletingRecord] = useState(false);
  const [hardDeletingRecord, setHardDeletingRecord] = useState(false);

  const [processTransactionValue, setProcessTransactionValue] = useState("");


  // * Prevent scrolling when modal is open -- 12/04/2023 JH
  useEffect(() => {

    if (confirmationDialogBoxOpen === true && document.body.style.overflow !== "hidden") {

      document.body.style.overflow = "hidden";

    } else {

      document.body.style.overflow = "auto";

    };

  }, [confirmationDialogBoxOpen]);


  useEffect(() => {

    if (deletingRecord === true) {

      if (confirmationDialogBoxContinue === true) {

        setProcessTransactionValue("D");

        // setDeletingRecord(false);
        // setConfirmationDialogBoxContinue(false);

        reset();

      } else if (confirmationDialogBoxContinue === false) {

        reset();
        setProcessTransactionValue("");

      };

    };

    if (hardDeletingRecord === true) {

      if (confirmationDialogBoxContinue === true) {

        setProcessTransactionValue("HD");
        // setHardDeletingRecord(false);
        // setConfirmationDialogBoxContinue(false);

        reset();

      } else if (confirmationDialogBoxContinue === false) {

        reset();
        setProcessTransactionValue("");

      };

    };

    // * If the modal has nothing to do with deleting, then close the modal when confirmationDialogBoxContinue goes from null to true or false -- 02/05/2024 JH
    // ? I feel like something should be changed in DialogBoxConfirmation for modals that don't need to confirmation -- 02/05/2024 JH
    if (deletingRecord === false && hardDeletingRecord === false && confirmationDialogBoxContinue !== null) {

      reset();

    };

  }, [deletingRecord, hardDeletingRecord, confirmationDialogBoxContinue]);


  const reset = () => {

    setConfirmationDialogBoxSize("");
    setConfirmationDialogBoxTitle("");
    setConfirmationDialogBoxContent("");
    setConfirmationDialogBoxType(null);
    setConfirmationDialogBoxOpen(false);
    setConfirmationDialogBoxContinue(false);
    setDeletingRecord(false);
    setHardDeletingRecord(false);

    // setProcessTransactionValue("");

  };


  const confirmAction = (data) => {

    // let newDialogBoxType = isEmpty(data) === false && isEmpty(data.dialogBoxType) === false ? data.dialogBoxType : "confirmRemove";

    // let newData = { ...data, dialogBoxType: newDialogBoxType };

    if (isEmpty(data) === false) {

      openConfirmationDialogBox(data);

    };

  };


  const deleteRecord = (data) => {

    let newDialogBoxType = isEmpty(data) === false && isEmpty(data.dialogBoxType) === false ? data.dialogBoxType : "confirmRemove";

    // window.scrollTo(0, 0);

    setDeletingRecord(true);

    openConfirmationDialogBox({ dialogBoxType: newDialogBoxType });

    // setProcessTransactionValue("D");

  };


  const hardDeleteRecord = (data) => {

    let newDialogBoxType = isEmpty(data) === false && isEmpty(data.dialogBoxType) === false ? data.dialogBoxType : "confirmRemove";

    // window.scrollTo(0, 0);

    setHardDeletingRecord(true);

    openConfirmationDialogBox({ dialogBoxType: newDialogBoxType });

    // setProcessTransactionValue("HD");

  };


  const openConfirmationDialogBox = (data) => {

    // * Not sure why, but openConfirmationDialogBox sometimes gets called again after closeDeleteDialogBox. However, the data is null so it shows an empty dialog box -- 10/18/2023 JH
    if (isEmpty(data) === false) {

      setConfirmationDialogBoxOpen(true);

      if (isEmpty(data.dialogBoxSize) === false) {

        setConfirmationDialogBoxSize(data.dialogBoxSize);

      };

      if (isEmpty(data.dialogBoxTitle) === false) {

        setConfirmationDialogBoxTitle(data.dialogBoxTitle);

      };

      if (isEmpty(data.dialogBoxContent) === false) {

        setConfirmationDialogBoxContent(data.dialogBoxContent);

      };

      if (isEmpty(data.dialogBoxType) === false) {

        setConfirmationDialogBoxType(data.dialogBoxType);

      };

      setConfirmationDialogBoxContinue(null);

    };

  };


  const closeDeleteDialogBox = () => {

    setConfirmationDialogBoxOpen(false);

    setConfirmationDialogBoxType(null);

    // reset();

    // setProcessTransactionValue("");

  };


  return [processTransactionValue, confirmationDialogBoxOpen, confirmationDialogBoxSize, confirmationDialogBoxTitle, confirmationDialogBoxContent, confirmationDialogBoxType, confirmationDialogBoxContinue, confirmAction, deleteRecord, hardDeleteRecord, closeDeleteDialogBox, setConfirmationDialogBoxContinue, setProcessTransactionValue];

};

export default useDialogBoxConfirmation;