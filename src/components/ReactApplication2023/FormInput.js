import React from "react";
import classnames from "classnames";
import { noFunctionAvailable, isEmpty, getDateTime } from "shared-functions";

const FormInput = (props) => {

  // * Available props: -- 06/21/2023 MF
  // * Properties: formInputID, labelText, srOnly, isRequired, inputType, placeholderText, inputValue, inputDisabled -- 06/21/2023 MF
  // * Functions: onChange -- 06/21/2023 MF

  let componentName = "FormInput";

  let formInputID = isEmpty(props) === false && isEmpty(props.formInputID) === false ? props.formInputID : "";
  let labelText = isEmpty(props) === false && isEmpty(props.labelText) === false ? props.labelText : "";
  let srOnly = isEmpty(props) === false && isEmpty(props.srOnly) === false ? props.srOnly : "";
  let isRequired = isEmpty(props) === false && isEmpty(props.isRequired) === false ? props.isRequired : false;
  let inputType = isEmpty(props) === false && isEmpty(props.inputType) === false ? props.inputType : "text";
  let placeholderText = isEmpty(props) === false && isEmpty(props.placeholderText) === false ? props.placeholderText : "";
  let inputValue = isEmpty(props) === false && isEmpty(props.inputValue) === false ? props.inputValue : "";
  let inputDisabled = isEmpty(props) === false && isEmpty(props.inputDisabled) === false ? props.inputDisabled : false;
  let inputHint = isEmpty(props) === false && isEmpty(props.inputHint) === false ? props.inputHint : "";

  let updateValue = isEmpty(props.updateValue) === false ? props.updateValue : noFunctionAvailable;

  // * If srOnly is set to true, then the form item label is only visible to screen readers. -- 06/21/2023 MF
  let labelClasses = classnames("", {
    "sr-only": srOnly === true
  });


  const handleOnChange = (event) => {

    if (inputType === "number") {

      if (isEmpty(event.target.value) === false && isNaN(event.target.value) === false) {

        updateValue(Number.parseInt(event.target.value));

      } else {

        updateValue(event.target.value);

      };

    } else {

      updateValue(event.target.value);

    };

  };


  return (
    <div className="form-group">

      <label htmlFor={formInputID} className={labelClasses}>

        {labelText}

        {isRequired === true ? <span className="required"> * <span className="sr-only">required</span></span> : null}

      </label>

      {isEmpty(inputHint) === false ? <p className="input-hint">{inputHint}</p> : null}

      <input type={inputType} id={formInputID} placeholder={placeholderText} value={inputValue} disabled={inputDisabled} onChange={(event) => handleOnChange(event)} />

    </div>
  );
};

export default FormInput;