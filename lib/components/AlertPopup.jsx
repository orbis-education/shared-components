import classnames from "classnames";
import { parse } from "shared-functions";

const AlertPopup = ({ alertType = "", message = "", includeResetButton = false, setMessage }) => {

  // * Available props: -- 12/30/2022 MF
  // * Properties: message, alertType, includeResetButton -- 12/30/2022 MF
  // * Functions: setMessage -- 12/30/2022 MF

  let alertClasses = classnames("alert", {
    "alert-success": alertType === "success",
    "alert-warning": alertType === "warning",
    "alert-info": alertType === "info",
    "alert-danger": alertType === "error"
  });


  return (
    <div className="alert-container">

      <div className={alertClasses}>

        <div className="alert__message-text">
          {parse(message)}
        </div>

        {includeResetButton === true ?

          <button type="button" className="refresh" onClick={() => window.location.reload()}>
            Refresh
          </button>

          : null}

        <button type="button" className="alert__close-button" onClick={() => { setMessage(""); }}>
          <i className="fas fa-close"></i>
        </button>

      </div>

    </div>
  );
};

export default AlertPopup;