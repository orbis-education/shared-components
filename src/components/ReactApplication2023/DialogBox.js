import React from "react";
import classnames from "classnames";
import { noFunctionAvailable, isEmpty, getDateTime } from "shared-functions";
import logo from "../../assets/images/OrbisLogo.svg";

const DialogBox = (props) => {

  const componentName = "DialogBox";

  let dialogBoxOpen = isEmpty(props) === false && isEmpty(props.dialogBoxOpen) === false ? props.dialogBoxOpen : "";
  let dialogBoxType = isEmpty(props) === false && isEmpty(props.dialogBoxType) === false ? props.dialogBoxType : ""; // * confirmDelete -- 07/15/2021 MF
  let dialogBoxSize = isEmpty(props) === false && isEmpty(props.dialogBoxSize) === false ? props.dialogBoxSize : ""; // * sm, md, lg, xl -- 07/15/2021 MF
  let dialogBoxTitle = isEmpty(props) === false && isEmpty(props.dialogBoxTitle) === false ? props.dialogBoxTitle : "";
  let dialogBoxContent = isEmpty(props) === false && isEmpty(props.dialogBoxContent) === false ? props.dialogBoxContent : "";

  let closeDialogBox = isEmpty(props) === false && isEmpty(props.closeDialogBox) === false ? props.closeDialogBox : noFunctionAvailable;
  let setDialogBoxContinue = isEmpty(props) === false && isEmpty(props.setDialogBoxContinue) === false ? props.setDialogBoxContinue : noFunctionAvailable;

  // * The code that catches the route change on the page doesn't handle if the browser is closed or the back/forward buttons are used. -- 07/15/2021 MF

  let size = dialogBoxSize;
  let title = dialogBoxTitle;
  let content = dialogBoxContent;

  if (dialogBoxType === "confirmDelete") {

    size = "md";
    title = "Delete Record?";
    content = "Are you sure you want to delete this record?";

  } else if (dialogBoxType === "confirmDeleteCascade") {

    size = "md";
    title = "Delete Record?";
    content = "Are you sure you want to delete this record? Any records linked to this one will be deleted also.";

  } else if (dialogBoxType === "deleteRemoteData") {

    size = "md";
    title = "Reset Local Database?";
    content = "Are you sure you want to refresh the local data with the data from the remote database?";

  } else if (dialogBoxType === "deleteLocalData") {

    size = "md";
    title = "Delete Local Data?";
    content = "Are you sure you want to delete all local data that is not stored in the remote database?";

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

  } else if (dialogBoxType === "resetCount") {

    size = "md";
    title = "Reset Medication Count(s)?";
    content = "Are you sure you want to reset the medication count(s) to the default starting quantity?";

  } else if (dialogBoxType === "resetTable") {

    size = "md";
    title = "Delete Records?";
    content = "Are you sure you want to delete these records?";

  } else if (dialogBoxType === "logOut") {

    size = "md";
    title = "Log Out?";
    content = "Are you sure you want to log out?";

  } else if (dialogBoxType === "closeProgram") {

    size = "md";
    title = "Close Program?";
    content = "Are you sure you want to close this program?";

  };

  const modalStyles = classnames("modal-dialog", {
    "modal-sm": size === "sm",
    "modal-md": size === "md",
    "modal-lg": size === "lg",
    "modal-xl": size === "xl"
  });


  const toggle = (event) => {

    // * Function toggles the dialogBox's open state. -- 08/11/2021 MF

    if (isEmpty(event) === false) {

      event.preventDefault();

    };

    // * Sends null data to reducer to clear out dialogBox data. -- 07/15/2021 MF
    closeDialogBox();

  };


  return (
    <React.Fragment>

      {dialogBoxOpen === true ?

        <div className="modal" id="checkoutModal" tabIndex="-1" aria-hidden="true">
          <div className={modalStyles}>
            <div className="modal-content">
              <div className="modal-header">
                <img src={logo} alt="Orbis Education" width="70px" className="img-responsive" />
                <h5 className="modal-title" id="exampleModalLabel">
                  {title}
                </h5>
                <button type="button" className="close" onClick={(event) => { toggle(event); }}>
                  <i className="fa fa-close"></i><span className="sr-only">Close</span>
                </button>
              </div>
              <div className="modal-body">
                {content}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={(event) => { setDialogBoxContinue(true); toggle(event); }}>OK</button>
                <button type="button" className="btn btn-cancel" onClick={(event) => { setDialogBoxContinue(false); toggle(event); }}>Cancel</button>
              </div>
            </div>
          </div>
        </div>

        : null}

    </React.Fragment>
  );
};

export default DialogBox;
