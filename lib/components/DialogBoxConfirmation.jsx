import React, { useEffect } from "react";
import classnames from "classnames";
import { noFunctionAvailable, isEmpty /* , getDateTime */ } from "shared-functions";

const DialogBoxConfirmation = (props) => {

  // * Available props: -- 11/17/2023 MF
  // * Properties: dialogBoxOpen, dialogBoxType, dialogBoxSize, dialogBoxTitle, dialogBoxContent -- 11/17/2023 MF
  // * Functions: setDialogBoxContinue -- 07/20/2023 MF

  // const componentName = "DialogBoxConfirmation";

  let dialogBoxOpen = isEmpty(props) === false && isEmpty(props.dialogBoxOpen) === false ? props.dialogBoxOpen : "";
  let dialogBoxType = isEmpty(props) === false && isEmpty(props.dialogBoxType) === false ? props.dialogBoxType : ""; // * confirmDelete -- 07/15/2021 MF
  let dialogBoxSize = isEmpty(props) === false && isEmpty(props.dialogBoxSize) === false ? props.dialogBoxSize : ""; // * sm, md, lg, xl -- 07/15/2021 MF
  let dialogBoxTitle = isEmpty(props) === false && isEmpty(props.dialogBoxTitle) === false ? props.dialogBoxTitle : "";
  let dialogBoxContent = isEmpty(props) === false && isEmpty(props.dialogBoxContent) === false ? props.dialogBoxContent : "";

  let setDialogBoxContinue = isEmpty(props) === false && isEmpty(props.setDialogBoxContinue) === false ? props.setDialogBoxContinue : noFunctionAvailable;

  // * The code that catches the route change on the page doesn't handle if the browser is closed or the back/forward buttons are used. -- 07/15/2021 MF

  let size = dialogBoxSize;
  let title = dialogBoxTitle;
  let content = dialogBoxContent;

  if (dialogBoxType === "confirmDelete") {

    size = "md";
    title = "Delete Record?";
    content = "Are you sure you want to delete this record?";

  } else if (dialogBoxType === "confirmRemove") {

    size = "md";
    title = "Remove Record?";
    content = "Are you sure you want to remove this record?";

  } else if (dialogBoxType === "confirmRemoveAll") {

    size = "md";
    title = "Remove All Records?";
    content = "Are you sure you want to remove all records?";

  } else if (dialogBoxType === "changePagePrompt") {

    size = "md";
    title = "Save Changes?";
    content = "You have unsaved changes. By clicking OK, these changes would be discarded. Do you want to proceed?";

  } else if (dialogBoxType === "logOut") {

    size = "md";
    title = "Log Out?";
    content = "Are you sure you want to log out?";

  } else if (dialogBoxType === "closeProgram") {

    size = "md";
    title = "Close Program?";
    content = "Are you sure you want to close this program?";

  };


  // * Close modal on ESC key. -- 02/13/2024 JH
  useEffect(() => {

    const handleKeyDown = (event) => {

      if (event.key === "Escape") {

        setDialogBoxContinue(false);

      };

    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const modalStyles = classnames("modal-dialog", {
    "modal-sm": size === "sm",
    "modal-md": size === "md",
    "modal-lg": size === "lg",
    "modal-xl": size === "xl"
  });


  return (
    <React.Fragment>

      {dialogBoxOpen === true ?

        <div className="modal" tabIndex="-1" aria-hidden="true">
          <div className={modalStyles}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {title}
                </h5>
                <button type="button" className="close" onClick={(event) => { setDialogBoxContinue(false); }} title="Close">
                  <i className="fa fa-close"></i><span className="sr-only">Close</span>
                </button>
              </div>
              <div className="modal-body">
                {content}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={(event) => { setDialogBoxContinue(true); }}>OK</button>
                <button type="button" className="btn btn-cancel" onClick={(event) => { setDialogBoxContinue(false); }}>Cancel</button>
              </div>
            </div>
          </div>
        </div>

        : null}

    </React.Fragment>
  );
};

export default DialogBoxConfirmation;
