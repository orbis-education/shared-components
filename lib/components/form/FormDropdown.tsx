import classnames from "classnames";
import { isEmpty, isNonEmptyArray, parse } from "shared-functions";
import RequiredFieldAsterisk from "../common/RequiredFieldAsterisk";
import { OptionText } from "../../types/FormTypes";

type FormDropdownProps = {
  id: string;
  label: string;
  optionData: any[];
  optionID: string;
  optionText: OptionText[];
  value: string | number;
  disabled?: boolean;
  emptyOption?: boolean;
  hint?: string;
  inlineError?: string;
  isRequired?: boolean;
  placeholder?: string;
  srOnly?: boolean;
  useInputAddon?: boolean;
  updateValue: (value: string | number) => void;
};

const FormDropdown = ({
  id = "",
  label = "",
  optionData = [],
  optionID = "",
  optionText = [],
  value = "",
  disabled = false,
  emptyOption = false,
  hint = "",
  inlineError = "",
  isRequired = false,
  placeholder = "Select Value",
  srOnly = false,
  useInputAddon = false,
  updateValue
}: FormDropdownProps) => {

  // * If srOnly is set to true, then the form item label is only visible to screen readers. -- 06/21/2023 MF
  const labelClasses: string = classnames("", {
    "sr-only": srOnly,
    "input-addon": useInputAddon
  });

  const formGroupClasses: string = classnames("form-group", {
    "with-addon": useInputAddon,
    "input-error": !isEmpty(inlineError),
    "input-disabled": disabled
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

      <label htmlFor={id} className={labelClasses}>

        {label}

        {isRequired === true ? <RequiredFieldAsterisk /> : null}

      </label>

      {isEmpty(hint) === false ? <p className="input-hint">{parse(hint)}</p> : null}

      <select
        className="form-control"
        id={id}
        value={value}
        disabled={disabled}
        onChange={(event) => { updateValue(event.target.value); }}
      >

        {emptyOption !== true ? <option value="">{placeholder}</option> : null}

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