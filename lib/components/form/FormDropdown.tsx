import classnames from "classnames";
import { isEmpty, isNonEmptyArray, parse } from "shared-functions";
import RequiredFieldAsterisk from "../common/RequiredFieldAsterisk";
import { OptionText } from "../../types/FormTypes";

type FormDropdownProps = {
  emptyOption?: boolean;
  formInputID: string;
  inlineError?: string;
  inputDisabled?: boolean;
  inputHint?: string;
  inputValue: string | number;
  isRequired?: boolean;
  labelText: string;
  optionData: any[];
  optionID: string;
  optionText: OptionText[];
  placeholderText?: string;
  srOnly?: boolean;
  updateValue: (value: string | number) => void;
  useInputAddon?: boolean;
};

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
  srOnly = false,
  updateValue,
  useInputAddon = false
}: FormDropdownProps) => {

  // * If srOnly is set to true, then the form item label is only visible to screen readers. -- 06/21/2023 MF
  const labelClasses: string = classnames("", {
    "sr-only": srOnly,
    "input-addon": useInputAddon
  });

  const formGroupClasses: string = classnames("form-group", {
    "with-addon": useInputAddon,
    "input-error": !isEmpty(inlineError),
    "input-disabled": inputDisabled
  });

  const getOptionDisplayText = (optionDataItem: any, optionText: OptionText[]) =>
    optionText
      .map((optionTextItem: any) =>
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

      <select
        className="form-control"
        id={formInputID}
        value={inputValue}
        disabled={inputDisabled}
        onChange={(event) => { updateValue(event.target.value); }}
      >

        {emptyOption !== true ? <option value="">{placeholderText}</option> : null}

        {isNonEmptyArray(optionData) && !isEmpty(optionID) && isNonEmptyArray(optionText) ?

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