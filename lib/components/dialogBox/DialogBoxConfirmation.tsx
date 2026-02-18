import { useEffect, Dispatch, SetStateAction } from "react";
import classnames from "classnames";

type DialogBoxConfirmationProps = {
  dialogBoxContent?: string;
  dialogBoxOpen: boolean;
  dialogBoxSize?: string;
  dialogBoxTitle?: string;
  dialogBoxType: string;
  setDialogBoxContinue: Dispatch<SetStateAction<boolean | null>>;
};

const DialogBoxConfirmation = ({
  dialogBoxContent = "",
  dialogBoxOpen = false,
  dialogBoxSize = "",
  dialogBoxTitle = "",
  dialogBoxType = "",
  setDialogBoxContinue
}: DialogBoxConfirmationProps) => {
  // * The code that catches the route change on the page doesn't handle if the browser is closed or the back/forward buttons are used. -- 07/15/2021 MF

  let size: string = dialogBoxSize;
  let title: string = dialogBoxTitle;
  let content: string = dialogBoxContent;

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
    content =
      "You have unsaved changes. By clicking OK, these changes would be discarded. Do you want to proceed?";
  } else if (dialogBoxType === "logOut") {
    size = "md";
    title = "Log Out?";
    content = "Are you sure you want to log out?";
  } else if (dialogBoxType === "closeProgram") {
    size = "md";
    title = "Close Program?";
    content = "Are you sure you want to close this program?";
  }

  // * Close modal on ESC key. -- 02/13/2024 JH
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDialogBoxContinue(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const modalStyles: string = classnames("modal-dialog", {
    "modal-sm": size === "sm",
    "modal-md": size === "md",
    "modal-lg": size === "lg",
    "modal-xl": size === "xl"
  });

  return (
    <>
      {dialogBoxOpen === true ? (
        <div className="modal" tabIndex={-1} aria-hidden="true">
          <div className={modalStyles}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {title}
                </h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setDialogBoxContinue(false)}
                  title="Close"
                >
                  <i className="fa fa-close"></i>
                  <span className="sr-only">Close</span>
                </button>
              </div>
              <div className="modal-body">{content}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setDialogBoxContinue(true)}
                >
                  OK
                </button>
                <button
                  type="button"
                  className="btn btn-cancel"
                  onClick={() => setDialogBoxContinue(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DialogBoxConfirmation;
