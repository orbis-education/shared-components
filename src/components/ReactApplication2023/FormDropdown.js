import React from "react";
import classnames from "classnames";
import { noFunctionAvailable, isEmpty, getDateTime, isNonEmptyArray } from "shared-functions";
import { parse } from "../../utilities/ApplicationFunctions";

const FormDropdown = (props) => {

  // * Available props: -- 06/21/2023 MF
  // * Properties: formInputID, labelText, srOnly, isRequired, inputType, placeholderText, inputValue, inputDisabled -- 06/21/2023 MF
  // * Functions: onChange -- 06/21/2023 MF

  let componentName = "FormInput";

  let formInputID = isEmpty(props) === false && isEmpty(props.formInputID) === false ? props.formInputID : "";
  let labelText = isEmpty(props) === false && isEmpty(props.labelText) === false ? props.labelText : "";
  let srOnly = isEmpty(props) === false && isEmpty(props.srOnly) === false ? props.srOnly : "";
  let isRequired = isEmpty(props) === false && isEmpty(props.isRequired) === false ? props.isRequired : false;
  let placeholderText = isEmpty(props) === false && isEmpty(props.placeholderText) === false ? props.placeholderText : "Select Value";
  let inputValue = isEmpty(props) === false && isEmpty(props.inputValue) === false ? props.inputValue : "";
  let inputDisabled = isEmpty(props) === false && isEmpty(props.inputDisabled) === false ? props.inputDisabled : false;
  let optionData = isEmpty(props) === false && isEmpty(props.optionData) === false ? props.optionData : null;
  let optionID = isEmpty(props) === false && isEmpty(props.optionID) === false ? props.optionID : "";
  let optionText = isEmpty(props) === false && isEmpty(props.optionText) === false ? props.optionText : [];
  let inputHint = isEmpty(props) === false && isEmpty(props.inputHint) === false ? props.inputHint : "";

  let updateValue = isEmpty(props.updateValue) === false ? props.updateValue : noFunctionAvailable;

  // * If srOnly is set to true, then the form item label is only visible to screen readers. -- 06/21/2023 MF
  let labelClasses = classnames("", {
    "sr-only": srOnly === true
  });


  const handleOnChange = (value) => {

    updateValue(value);

  };


  return (
    <div className="form-group">

      <label htmlFor={formInputID} className={labelClasses}>

        {labelText}

        {isRequired === true ? <span className="required"> * <span className="sr-only">required</span></span> : null}

      </label>

      {isEmpty(inputHint) === false ? <p className="input-hint">{parse(inputHint)}</p> : null}

      <select className="form-control" id={formInputID} value={inputValue} onChange={(event) => { handleOnChange(event.target.value); }} disabled={inputDisabled}>

        <option value="">{placeholderText}</option>

        {isNonEmptyArray(optionData) === true && isEmpty(optionID) === false && isNonEmptyArray(optionText) === true ?

          <React.Fragment>

            {optionData.map((optionDataItem) => {

              return (
                <option key={optionDataItem[optionID]} value={optionDataItem[optionID]}>

                  {optionText.map(optionTextItem => {

                    if (optionTextItem.type === "property") {
                      return (
                        <React.Fragment key={optionTextItem}>{optionDataItem[optionTextItem.text]}</React.Fragment>
                      );
                    };

                    if (optionTextItem.type === "string") {
                      return (
                        <React.Fragment key={optionTextItem}>{optionTextItem.text}</React.Fragment>
                      );
                    };

                  })}

                </option>
              );
            })}

          </React.Fragment>

          : null}

      </select>

    </div>
  );
};

export default FormDropdown;