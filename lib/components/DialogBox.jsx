import { Component, useEffect } from "react";
import classnames from "classnames";

const DialogBox = ({ dialogBoxOpen = "", dialogBoxSize = "", dialogBoxTitle = "", dialogBoxContent = "", setDialogBoxOpen }) => {

  Component.displayName = "DialogBox";

  let size = dialogBoxSize;
  let title = dialogBoxTitle;
  let content = dialogBoxContent;

  const modalStyles = classnames("modal-dialog", {
    "modal-sm": size === "sm",
    "modal-md": size === "md",
    "modal-lg": size === "lg",
    "modal-xl": size === "xl"
  });


  // * Close modal on ESC key. -- 02/13/2024 JH
  useEffect(() => {

    const handleKeyDown = (event) => {

      if (event.key === "Escape") {

        setDialogBoxOpen(false);

      };

    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>

      {dialogBoxOpen === true ?

        <div className="modal" tabIndex="-1" aria-hidden="true">
          <div className={modalStyles}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {title}
                </h5>
                <button type="button" className="close" onClick={(event) => { setDialogBoxOpen(!dialogBoxOpen); }} title="Close">
                  <i className="fa fa-close"></i><span className="sr-only">Close</span>
                </button>
              </div>
              <div className="modal-body">
                {content}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={(event) => { setDialogBoxOpen(!dialogBoxOpen); }}>OK</button>
                {/* <button type="button" className="btn btn-cancel" onClick={(event) => { dispatch(clearMessages()); setDialogBoxOpen(!dialogBoxOpen); }}>Cancel</button> */}
              </div>
            </div>
          </div>
          <div className="modal-backdrop" onClick={(event) => { setDialogBoxOpen(!dialogBoxOpen); }}></div>
        </div>

        : null}

    </>
  );
};

export default DialogBox;
