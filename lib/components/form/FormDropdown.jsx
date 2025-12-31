import classnames from "classnames";
import { isEmpty, isNonEmptyArray, parse } from "shared-functions";
import RequiredFieldAsterisk from "../common/RequiredFieldAsterisk";

const FormDropdown = ({
  emptyOption = false,
  formInputID = "",
  inlineError = "",
  inputDisabled = false,
  inputHint = "",
  inputValue = "",
  isRequired = false,
  labelText = "",
  optionData = [],
  optionID = "",
  optionText = [],
  placeholderText = "Select Value",
  srOnly = "",
  updateValue,
  useInputAddon = false
}) => {

  // * If srOnly is set to true, then the form item label is only visible to screen readers. -- 06/21/2023 MF
  let labelClasses = classnames("", {
    "sr-only": srOnly === true,
    "input-addon": useInputAddon === true
  });

  let formGroupClasses = classnames("form-group", {
    "with-addon": useInputAddon === true,
    "input-error": isEmpty(inlineError) === false,
    "input-disabled": inputDisabled === true
  });

  const getOptionDisplayText = (optionDataItem, optionText) =>
    optionText
      .map((optionTextItem) =>
        optionTextItem.type === "property"
          ? optionDataItem[optionTextItem.text] // * Extract value from object. -- 02/25/2025 JW
          : optionTextItem.text // * Use direct string. -- 02/25/2025 JW
      )
      .join(" "); // * Join to ensure a single string output. -- 02/25/2025 JW

  return (
    <div className={formGroupClasses}>

      <label htmlFor={formInputID} className={labelClasses}>

        {labelText}

        {isRequired === true ? <RequiredFieldAsterisk /> : null}

      </label>

      {isEmpty(inputHint) === false ? <p className="input-hint">{parse(inputHint)}</p> : null}

      <select className="form-control" id={formInputID} value={inputValue} disabled={inputDisabled} onChange={(event) => { updateValue(event.target.value); }}>

        {emptyOption !== true ? <option value="">{placeholderText}</option> : null}

        {isNonEmptyArray(optionData) === true && isEmpty(optionID) === false && isNonEmptyArray(optionText) === true ?

          optionData.map((optionDataItem) => (
            <option key={optionDataItem[optionID]} value={optionDataItem[optionID]}>
              {getOptionDisplayText(optionDataItem, optionText)}
            </option>
          ))

          : null}

      </select>

      {isEmpty(inlineError) === false ? <div className="inline-alert inline-alert-danger">{parse(inlineError)}</div> : null}

    </div>
  );
};

export default FormDropdown;