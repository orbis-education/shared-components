import React from "react";
import classnames from "classnames";
import { noFunctionAvailable, isEmpty, getDateTime, isNonEmptyArray, formatToString } from "shared-functions";
import { parse } from "../../utilities/ApplicationFunctions";

const FormRadioGroup = (props) => {

  // * Available props: -- 06/21/2023 MF
  // * Properties: formInputID, labelText, srOnly, placeholderText,isRequired, inputDisabled, optionData, optionID, optionText, inputValue, inputHint -- 06/21/2023 MF
  // * Functions: updateValue -- 06/21/2023 MF

  let componentName = "FormRadioGroup";

  let formInputID = isEmpty(props) === false && isEmpty(props.formInputID) === false ? props.formInputID : "";
  let labelText = isEmpty(props) === false && isEmpty(props.labelText) === false ? props.labelText : "";
  let srOnly = isEmpty(props) === false && isEmpty(props.srOnly) === false ? props.srOnly : "";
  let isRequired = isEmpty(props) === false && isEmpty(props.isRequired) === false ? props.isRequired : false;
  let inputDisabled = isEmpty(props) === false && isEmpty(props.inputDisabled) === false ? props.inputDisabled : false;

  let optionData = isEmpty(props) === false && isEmpty(props.optionData) === false ? props.optionData : null;
  let optionID = isEmpty(props) === false && isEmpty(props.optionID) === false ? props.optionID : "";
  let optionText = isEmpty(props) === false && isEmpty(props.optionText) === false ? props.optionText : [];
  let inputValue = isEmpty(props) === false && isEmpty(props.inputValue) === false ? props.inputValue : "";
  let inputHint = isEmpty(props) === false && isEmpty(props.inputHint) === false ? props.inputHint : "";

  let formColumns = isEmpty(props) === false && isEmpty(props.formColumns) === false ? props.formColumns : 1;

  let updateValue = isEmpty(props.updateValue) === false ? props.updateValue : noFunctionAvailable;

  // * If srOnly is set to true, then the form item label is only visible to screen readers. -- 06/21/2023 MF
  let labelClasses = classnames("", {
    "sr-only": srOnly === true
  });


  return (
    <fieldset className="form-group">

      <legend htmlFor={formInputID} className={labelClasses}>

        {labelText}

        {isRequired === true ? <span className="required"> * <span className="sr-only">required</span></span> : null}

      </legend>

      <ul className="radio-group" style={{ columns: formColumns }}>

        {isEmpty(inputHint) === false ? <p className="input-hint">{parse(inputHint)}</p> : null}

        {isNonEmptyArray(optionData) === true && isEmpty(optionID) === false && isNonEmptyArray(optionText) === true ?

          <React.Fragment>

            {optionData.map((optionDataItem) => {

              if ((isEmpty(optionDataItem.active) === false && optionDataItem.active === true) || isEmpty(optionDataItem.active) === true) {

                // * temp fix to convert true/false to 1/2
                let newInputValue = inputValue;

                if (typeof newInputValue == "boolean") {

                  newInputValue = newInputValue === true ? 1 : 2;

                };

                return (
                  <li key={optionDataItem[optionID]}>
                    <label>

                      <input type="radio" id={formInputID} value={optionDataItem[optionID]} checked={formatToString(optionDataItem[optionID]) === formatToString(newInputValue)} onChange={(event) => { updateValue(event.target.value); }} disabled={inputDisabled} />

                      {optionText.map((optionTextItem, index) => {

                        let displayOptionText = "";

                        if (optionTextItem.type === "property") {

                          displayOptionText = optionDataItem[optionTextItem.text];

                        } else if (optionTextItem.type === "string") {

                          displayOptionText = optionTextItem.text;

                        };

                        return (
                          <React.Fragment key={index}>{displayOptionText}</React.Fragment>
                        );

                      })}

                    </label>
                  </li>
                );

              };

            })}

          </React.Fragment>

          : null}

      </ul>

    </fieldset>
  );
};

export default FormRadioGroup;