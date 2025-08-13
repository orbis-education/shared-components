import { Component, Fragment, useState, useEffect } from "react";
import classnames from "classnames";
import { isEmpty, isNonEmptyArray, formatToString, parse } from "shared-functions";
import RequiredFieldAsterisk from "./RequiredFieldAsterisk";

const CheckboxGroup = ({
  collapseList = false,
  formColumns = 1,
  formInputID = "",
  inlineError = "",
  inputDisabled = false,
  inputHint = "",
  inputValue = [],
  isCollapsible = false,
  isRequired = false,
  legendText = "",
  optionData = [],
  optionID = "",
  optionText = [],
  setCollapseList,
  srOnly = "",
  startCollapsed = true,
  updateValue
}) => {

  const [isCollapsed, setIsCollapsed] = useState(true);

  let fieldsetClasses = classnames("form-group", {
    "input-disabled": inputDisabled === true
  });

  // * If srOnly is set to true, then the form item label is only visible to screen readers. -- 06/21/2023 MF
  let labelClasses = classnames("", {
    "sr-only": srOnly === true
  });

  let checkboxGroupClasses = classnames("checkbox-group", {
    "is-collapsible": isCollapsible === true,
    "show": isCollapsed !== true,
    "input-error": isEmpty(inlineError) === false
  });


  useEffect(() => {

    // * If isCollapsible is false, then isCollapsed is always false. -- 10/10/2023 MF
    if (isCollapsible === true) {

      setIsCollapsed(true);

    } else {

      setIsCollapsed(false);

    };

  }, [isCollapsible]);


  useEffect(() => {

    if (startCollapsed === false) {

      setIsCollapsed(false);

    };

  }, [startCollapsed]);


  useEffect(() => {

    if (collapseList === true) {

      setIsCollapsed(true);
      setCollapseList(false);

    };

  }, [collapseList]);


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
    <fieldset className={fieldsetClasses}>

      <legend className={labelClasses}>

        {isCollapsible === true ?

          <button type="button" className="btn btn-transparent collapse-checkboxes-button" onClick={(event) => { setIsCollapsed(!isCollapsed); }}>

            {legendText}

            {isRequired === true ? <RequiredFieldAsterisk /> : null}

            {isNonEmptyArray(inputValue) === true ? <div className="search-filter-count">{inputValue.length}</div> : null}

            {isCollapsed === true ?

              <><i className="fa fa-chevron-down"></i><span className="sr-only">Open</span></>

              :

              <><i className="fa fa-chevron-up"></i><span className="sr-only">Close</span></>

            }

          </button>

          :

          <>

            {legendText}

            {isRequired === true ? <RequiredFieldAsterisk /> : null}

          </>

        }

      </legend>

      <ul className={checkboxGroupClasses} style={{ columns: formColumns }}>

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

      {isEmpty(inlineError) === false ? <div className="inline-alert inline-alert-danger">{parse(inlineError)}</div> : null}

      {isCollapsible === true ? <hr /> : null}

    </fieldset>
  );
};

export default CheckboxGroup;