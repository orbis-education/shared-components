import { useEffect } from "react";
import { isEmpty, noFunctionAvailable } from "shared-functions";
import AlertPopup from "./AlertPopup";

const Messages = ({
  informationMessage = "",
  successMessage = "",
  warningMessage = "",
  errorMessage = "",
  informationMessageVisible = false,
  successMessageVisible = false,
  warningMessageVisible = false,
  errorMessageVisible = false,
  addInformationMessage = noFunctionAvailable,
  addSuccessMessage = noFunctionAvailable,
  addWarningMessage = noFunctionAvailable,
  addErrorMessage = noFunctionAvailable
}) => {


  // * When the component is mounted, the alert is displayed for 5 seconds. -- 08/30/2021 MF
  // * https://stackoverflow.com/questions/65214950/how-to-disappear-alert-after-5-seconds-in-react-js -- 08/30/2021 MF
  useEffect(() => {

    if (!isEmpty(successMessage) /*&& successMessageStatic !== true*/) {

      setTimeout(() => {

        addSuccessMessage("");

      }, 5000);

    };

  }, [successMessage]);


  const updateInformationMessage = (alertItemContent) => {

    addInformationMessage(alertItemContent);

  };

  const updateSuccessMessage = (alertItemContent) => {

    addSuccessMessage(alertItemContent);

  };

  const updateWarningMessage = (alertItemContent) => {

    addWarningMessage(alertItemContent);

  };

  const updateErrorMessage = (alertItemContent) => {

    addErrorMessage(alertItemContent);

  };


  return (
    <div className="alert-messages-container">

      {informationMessageVisible === true ?

        <AlertPopup message={informationMessage} setMessage={updateInformationMessage} alertType="info" />

        : null}

      {successMessageVisible === true ?

        <AlertPopup message={successMessage} setMessage={updateSuccessMessage} alertType="success" />

        : null}

      {warningMessageVisible === true ?

        <AlertPopup message={warningMessage} setMessage={updateWarningMessage} alertType="warning" />

        : null}

      {errorMessageVisible === true ?

        <AlertPopup message={errorMessage} setMessage={updateErrorMessage} alertType="error" />

        : null}

    </div>
  );
};

export default Messages;
