import React, { useEffect } from "react";
import classnames from "classnames";
import { noFunctionAvailable, isEmpty, getDateTime, addLog, addErrorLog } from "shared-functions";
import { parse } from "../../utilities/ApplicationFunctions";

const AlertPopup = (props) => {

  // * Available props: -- 12/30/2022 MF
  // * Properties: alertItem, includeResetButton -- 12/30/2022 MF
  // * Functions: setAlertItem -- 12/30/2022 MF

  let componentName = "AlertPopup";

  let includeResetButton = isEmpty(props) === false && isEmpty(props.includeResetButton) === false ? props.includeResetButton : false;

  let operationValue = isEmpty(props) === false && isEmpty(props.alertItem) === false && isEmpty(props.alertItem.operationValue) === false ? props.alertItem.operationValue : "";
  let alertType = isEmpty(props) === false && isEmpty(props.alertItem) === false && isEmpty(props.alertItem.alertItemType) === false ? props.alertItem.alertItemType : "";
  let message = isEmpty(props) === false && isEmpty(props.alertItem) === false && isEmpty(props.alertItem.message) === false ? props.alertItem.message : "";
  let error = isEmpty(props) === false && isEmpty(props.alertItem) === false && isEmpty(props.alertItem.error) === false ? props.alertItem.error : "";

  let setAlertItem = isEmpty(props) === false && isEmpty(props.setAlertItem) === false ? props.setAlertItem : noFunctionAvailable;

  let alertClasses = classnames("alert alert-danger", {
    "alert-success": alertType === "success",
    "alert-warning": alertType === "warning",
    "alert-info": alertType === "info",
    "alert-danger": alertType === "error"
  });


  // * Log the full error, if available -- 08/19/2022 JH
  useEffect(() => {

    if (isEmpty(error) === false) {

      console.error(componentName, getDateTime(), "alertItem error", error);

    };

  }, [error]);


  return (
    <div className="alert-container">

      <div className={alertClasses}>

        <div className="alert__message-text">
          {parse(operationValue)} - {parse(message)}
        </div>

        {includeResetButton === true ?

          <button type="button" className="refresh" onClick={() => window.location.reload()}>
            Refresh
          </button>

          : null}

        <button type="button" className="alert__close-button" onClick={() => { setAlertItem(null); }}>
          <i className="fas fa-close"></i>
        </button>

      </div>

    </div>
  );
};

export default AlertPopup;