import { useEffect, Dispatch, SetStateAction } from "react";
import classnames from "classnames";

type DialogBoxProps = {
  dialogBoxContent: string,
  dialogBoxOpen: boolean,
  dialogBoxSize: string,
  dialogBoxTitle: string,
  setDialogBoxOpen: Dispatch<SetStateAction<boolean>>;
};

const DialogBox = ({
  dialogBoxContent = "",
  dialogBoxOpen = false,
  dialogBoxSize = "",
  dialogBoxTitle = "",
  setDialogBoxOpen
}: DialogBoxProps) => {

  let size: string = dialogBoxSize;
  let title: string = dialogBoxTitle;
  let content: string = dialogBoxContent;

  const modalStyles = classnames("modal-dialog", {
    "modal-sm": size === "sm",
    "modal-md": size === "md",
    "modal-lg": size === "lg",
    "modal-xl": size === "xl"
  });


  // * Close modal on ESC key. -- 02/13/2024 JH
  useEffect(() => {

    const handleKeyDown = (event: KeyboardEvent) => {

      if (event.key === "Escape") {

        setDialogBoxOpen(false);

      }

    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>

      {dialogBoxOpen ?

        <div className="modal" tabIndex={-1} aria-hidden="true">
          <div className={modalStyles}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {title}
                </h5>
                <button type="button" className="close" onClick={() => { setDialogBoxOpen(!dialogBoxOpen); }} title="Close">
                  <i className="fa fa-close"></i><span className="sr-only">Close</span>
                </button>
              </div>
              <div className="modal-body">
                {content}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={() => { setDialogBoxOpen(!dialogBoxOpen); }}>OK</button>
                {/* <button type="button" className="btn btn-cancel" onClick={() => { dispatch(clearMessages()); setDialogBoxOpen(!dialogBoxOpen); }}>Cancel</button> */}
              </div>
            </div>
          </div>
          <div className="modal-backdrop" onClick={() => { setDialogBoxOpen(!dialogBoxOpen); }}></div>
        </div>

        : null}

    </>
  );
};

export default DialogBox;
