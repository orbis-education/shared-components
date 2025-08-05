import { Component, Fragment, useRef } from "react";
import classnames from "classnames";
import { isEmpty, isNonEmptyArray, formatToString, parse } from "shared-functions";
import { useNativeClickListener } from "../hooks/useNativeClickListener";
import RequiredFieldAsterisk from "./RequiredFieldAsterisk";

const CheckboxDropdown = ({ formInputID = "", legendText = "", srOnly = "", placeholderText = "Select Value", isRequired = false, inputDisabled = false, optionData = [], optionID = "", optionText = [], inputValue = [], inputHint = "", formColumns = 1, inlineError = "", updateValue }) => {

  Component.displayName = "CheckboxDropdown";

  const dropdownRef = useRef(null);

  const [isDropdownOpen, setIsDropdownOpen] = useNativeClickListener(dropdownRef, false);

  let fieldsetClasses = classnames("form-group checkbox-dropdown-group", {
    "input-disabled": inputDisabled === true
  });

  // * If srOnly is set to true, then the form item label is only visible to screen readers. -- 06/21/2023 MF
  let labelClasses = classnames("", {
    "sr-only": srOnly === true
  });

  let checkboxDropdownClasses = classnames("checkbox-dropdown-container", {
    // "show": isDropdownOpen !== true,
    "input-error": isEmpty(inlineError) === false
  });


  const handleOnChange = (event) => {

    if (event.target.checked === true) {

      let newCheckedList = [...inputValue, event.target.value];

      updateValue(newCheckedList);

    } else {

      let filteredList = inputValue.filter(value => value !== event.target.value);

      updateValue(filteredList);

    };

  };


  return (
    <fieldset className={fieldsetClasses} ref={dropdownRef}>

      <legend className={labelClasses}>

        {legendText} {isRequired === true ? <RequiredFieldAsterisk /> : null}

      </legend>

      <button type="button" className="btn btn-transparent open-dropdown-button" onClick={(event) => { setIsDropdownOpen(!isDropdownOpen); }}>

        {isNonEmptyArray(inputValue) === true ? <>{inputValue.length} selected</> : placeholderText}

        {isDropdownOpen === true ?

          <><i className="fa fa-angle-up"></i><span className="sr-only">Close</span></>

          :

          <><i className="fa fa-angle-down"></i><span className="sr-only">Open</span></>

        }

      </button>

      {isDropdownOpen === true ?

        <div className={checkboxDropdownClasses}>

          <ul className="checkbox-dropdown" style={{ columns: formColumns }}>

            {isEmpty(inputHint) === false ? <p className="input-hint">{parse(inputHint)}</p> : null}

            {isNonEmptyArray(optionData) === true && isEmpty(optionID) === false && isNonEmptyArray(optionText) === true ?

              <>

                {optionData.map((optionDataItem) => {

                  if (optionDataItem.active === true || isEmpty(optionDataItem.active) === true) {

                    let filterInputValue = isNonEmptyArray(inputValue) === true ? inputValue.filter(value => value === formatToString(optionDataItem[optionID])) : [];

                    let isChecked = isNonEmptyArray(filterInputValue) === true ? true : false;

                    return (
                      <li key={optionDataItem[optionID]}>

                        <label>

                          <input type="checkbox" id={`${formInputID}${optionDataItem[optionID]}`} value={optionDataItem[optionID]} checked={isChecked} disabled={inputDisabled} onChange={(event) => { handleOnChange(event); }} />

                          <span className="checkbox-label-text">

                            {optionText.map((optionTextItem, index) => {

                              let displayOptionText = "";

                              if (optionTextItem.type === "property") {

                                displayOptionText = optionDataItem[optionTextItem.text];

                              } else if (optionTextItem.type === "string") {

                                displayOptionText = optionTextItem.text;

                              };

                              return (
                                <Fragment key={index}>{displayOptionText}</Fragment>
                              );

                            })}

                          </span>

                        </label>

                      </li>
                    );

                  } else { return null; };

                })}

              </>

              : null}

          </ul>

        </div>

        : null}

      {isEmpty(inlineError) === false ? <div className="inline-alert inline-alert-danger">{parse(inlineError)}</div> : null}

    </fieldset>
  );
};

export default CheckboxDropdown;