import { Fragment, useState, useEffect } from "react";
import classnames from "classnames";
import { isEmpty, isNonEmptyArray, formatToString, parse } from "shared-functions";
import RequiredFieldAsterisk from "../common/RequiredFieldAsterisk";

const FormRadioGroup = ({
  collapseList = false,
  formColumns = 1,
  formInputID = "",
  inlineError = "",
  inputDisabled = false,
  inputHint = "",
  inputValue = "",
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

  let radioGroupClasses = classnames("radio-group", {
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


  return (
    <fieldset className={fieldsetClasses}>

      <legend className={labelClasses}>

        {isCollapsible === true ?

          <button type="button" className="btn btn-transparent collapse-checkboxes-button" onClick={(event) => { setIsCollapsed(!isCollapsed); }}>

            {legendText}

            {isRequired === true ? <RequiredFieldAsterisk /> : null}

            {isEmpty(inputValue) === false ? <div className="search-filter-count">1</div> : null}

            {isCollapsed === true ?

              <>

                <i className="fa fa-chevron-down"></i><span className="sr-only">Open</span>

              </>

              :

              <>

                <i className="fa fa-chevron-up"></i><span className="sr-only">Close</span>

              </>

            }

          </button>

          :

          <>

            {legendText}

            {isRequired === true ? <RequiredFieldAsterisk /> : null}

          </>

        }

      </legend>

      <ul className={radioGroupClasses} style={{ columns: formColumns }}>

        {isEmpty(inputHint) === false ? <p className="input-hint">{parse(inputHint)}</p> : null}

        {isNonEmptyArray(optionData) === true && isEmpty(optionID) === false && isNonEmptyArray(optionText) === true ?

          <>

            {optionData.map((optionDataItem) => {

              if (optionDataItem.active === true || isEmpty(optionDataItem.active) === true) {

                // TODO: Temporary fix to convert true/false to 1/2. -- 09/13/2023 JH
                let newInputValue = inputValue;

                if (typeof newInputValue == "boolean") {

                  newInputValue = newInputValue === true ? 1 : 2;

                };

                return (
                  <li key={optionDataItem[optionID]}>

                    <label className={`${formatToString(optionDataItem[optionID]) === formatToString(newInputValue) ? "active" : ""}`}>

                      <input type="radio" id={`${formInputID}${optionDataItem[optionID]}`} name={formInputID} value={optionDataItem[optionID]} checked={formatToString(optionDataItem[optionID]) === formatToString(newInputValue)} disabled={inputDisabled} onChange={(event) => { updateValue(event.target.value); }} />

                      {optionText.map((optionTextItem, index) => {

                        let displayOptionText = "";

                        if (optionTextItem.type === "property") {

                          displayOptionText = optionDataItem[optionTextItem.text];

                        } else if (optionTextItem.type === "string") {

                          displayOptionText = parse(optionTextItem.text);

                        };

                        return (
                          <Fragment key={index}>{displayOptionText}</Fragment>
                        );

                      })}

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

export default FormRadioGroup;