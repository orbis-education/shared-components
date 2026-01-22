import { Fragment, useRef, ChangeEvent } from "react";
import classnames from "classnames";
import { isEmpty, isNonEmptyArray, formatToString, parse } from "shared-functions";
import { useNativeClickListener } from "../../hooks/useNativeClickListener";
import RequiredFieldAsterisk from "../common/RequiredFieldAsterisk";
import { createOptionDisplayText } from "./FormFunctions";
import { OptionText } from "../../types/FormTypes";

type CheckboxDropdownProps = {
  formColumns: number;
  formInputID: string;
  inlineError: string;
  inputDisabled: boolean;
  inputHint: string;
  inputValue: any[];
  isRequired: boolean;
  legendText: string;
  optionData: any[];
  optionID: string;
  optionText: OptionText[];
  placeholderText: string;
  srOnly: boolean;
  updateValue: (value: any[]) => void;
};

const CheckboxDropdown = ({
  formColumns = 1,
  formInputID = "",
  inlineError = "",
  inputDisabled = false,
  inputHint = "",
  inputValue = [],
  isRequired = false,
  legendText = "",
  optionData = [],
  optionID = "",
  optionText = [],
  placeholderText = "Select Value",
  srOnly = false,
  updateValue
}: CheckboxDropdownProps) => {

  const dropdownRef = useRef<HTMLFieldSetElement>(null);

  const [isDropdownOpen, setIsDropdownOpen] = useNativeClickListener<boolean>(dropdownRef, false);

  const fieldsetClasses: string = classnames("form-group checkbox-dropdown-group", {
    "input-disabled": inputDisabled
  });

  // * If srOnly is set to true, then the form item label is only visible to screen readers. -- 06/21/2023 MF
  const labelClasses: string = classnames("", {
    "sr-only": srOnly
  });

  const checkboxDropdownClasses: string = classnames("checkbox-dropdown-container", {
    // "show": !isDropdownOpen,
    "input-error": !isEmpty(inlineError)
  });


  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {

    if (event.target.checked === true) {

      let newCheckedList: any[] = [...inputValue, event.target.value];

      updateValue(newCheckedList);

    } else {

      let filteredList: any[] = inputValue.filter(value => value !== event.target.value);

      updateValue(filteredList);

    }

  };


  return (
    <fieldset className={fieldsetClasses} ref={dropdownRef}>

      <legend className={labelClasses}>

        {legendText} {isRequired ? <RequiredFieldAsterisk /> : null}

      </legend>

      <button type="button" className="btn btn-transparent open-dropdown-button" onClick={() => { setIsDropdownOpen(!isDropdownOpen); }}>

        {isNonEmptyArray(inputValue) ? <>{inputValue.length} selected</> : placeholderText}

        {isDropdownOpen ?

          <><i className="fa fa-angle-up"></i><span className="sr-only">Close</span></>

          :

          <><i className="fa fa-angle-down"></i><span className="sr-only">Open</span></>

        }

      </button>

      {isDropdownOpen ?

        <div className={checkboxDropdownClasses}>

          <ul className="checkbox-dropdown" style={{ columns: formColumns }}>

            {!isEmpty(inputHint) ? <p className="input-hint">{parse(inputHint)}</p> : null}

            {isNonEmptyArray(optionData) && !isEmpty(optionID) && isNonEmptyArray(optionText) ?

              <>

                {optionData.map((optionDataItem) => {

                  if (optionDataItem.active === true || isEmpty(optionDataItem.active)) {

                    const filterInputValue = isNonEmptyArray(inputValue) ? inputValue.filter(value => value === formatToString(optionDataItem[optionID])) : [];

                    const isChecked = isNonEmptyArray(filterInputValue);

                    return (
                      <li key={optionDataItem[optionID]}>

                        <label>

                          <input
                            type="checkbox"
                            id={`${formInputID}${optionDataItem[optionID]}`}
                            value={optionDataItem[optionID]}
                            checked={isChecked}
                            disabled={inputDisabled}
                            onChange={handleOnChange}
                          />

                          <span className="checkbox-label-text">

                            {optionText.map((optionTextItem: OptionText, index: number) => (

                              <Fragment key={index}>{createOptionDisplayText(optionDataItem, optionTextItem)}</Fragment>

                            ))}

                          </span>

                        </label>

                      </li>
                    );

                  } else { return null; }

                })}

              </>

              : null}

          </ul>

        </div>

        : null}

      {!isEmpty(inlineError) ? <div className="inline-alert inline-alert-danger">{parse(inlineError)}</div> : null}

    </fieldset>
  );
};

export default CheckboxDropdown;