import { Fragment, useState, useEffect, ChangeEvent } from "react";
import classnames from "classnames";
import { isEmpty, isNonEmptyArray, formatToString, parse } from "shared-functions";
import RequiredFieldAsterisk from "../common/RequiredFieldAsterisk";
import { createOptionDisplayText } from "./FormFunctions";
import { OptionText } from "../../types/FormTypes";

type CheckboxGroupProps = {
  collapseList?: boolean;
  formColumns?: number;
  formInputID: string;
  inlineError?: string;
  inputDisabled?: boolean;
  inputHint?: string;
  inputValue: any[];
  isCollapsible?: boolean;
  isRequired?: boolean;
  legendText: string;
  optionData: any[];
  optionID: string;
  optionText: OptionText[];
  setCollapseList?: (value: boolean) => void;
  srOnly?: boolean;
  startCollapsed?: boolean;
  updateValue: (value: any[]) => void;
};

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
  srOnly = false,
  startCollapsed = true,
  updateValue
}: CheckboxGroupProps) => {

  const [isCollapsed, setIsCollapsed] = useState(true);

  const fieldsetClasses: string = classnames("form-group", {
    "input-disabled": inputDisabled
  });

  // * If srOnly is set to true, then the form item label is only visible to screen readers. -- 06/21/2023 MF
  const labelClasses: string = classnames("", {
    "sr-only": srOnly
  });

  const checkboxGroupClasses: string = classnames("checkbox-group", {
    "is-collapsible": isCollapsible,
    "show": !isCollapsed,
    "input-error": !isEmpty(inlineError)
  });


  useEffect(() => {

    // * If isCollapsible is false, then isCollapsed is always false. -- 10/10/2023 MF
    if (isCollapsible === true) {

      setIsCollapsed(true);

    } else {

      setIsCollapsed(false);

    }

  }, [isCollapsible]);


  useEffect(() => {

    if (startCollapsed === false) {

      setIsCollapsed(false);

    }

  }, [startCollapsed]);


  useEffect(() => {

    if (collapseList === true) {

      setIsCollapsed(true);
      setCollapseList(false);

    }

  }, [collapseList]);


  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {

    if (event.target.checked === true) {

      let newCheckedList = [...inputValue, event.target.value];

      updateValue(newCheckedList);

    } else {

      let filteredList = inputValue.filter(value => value !== event.target.value);

      updateValue(filteredList);

    }

  };


  return (
    <fieldset className={fieldsetClasses}>

      <legend className={labelClasses}>

        {isCollapsible ?

          <button type="button" className="btn btn-transparent collapse-checkboxes-button" onClick={() => { setIsCollapsed(!isCollapsed); }}>

            {legendText}

            {isRequired ? <RequiredFieldAsterisk /> : null}

            {isNonEmptyArray(inputValue) ? <div className="search-filter-count">{inputValue.length}</div> : null}

            {isCollapsed ?

              <><i className="fa fa-chevron-down"></i><span className="sr-only">Open</span></>

              :

              <><i className="fa fa-chevron-up"></i><span className="sr-only">Close</span></>

            }

          </button>

          :

          <>

            {legendText}

            {isRequired ? <RequiredFieldAsterisk /> : null}

          </>

        }

      </legend>

      <ul className={checkboxGroupClasses} style={{ columns: formColumns }}>

        {!isEmpty(inputHint) ? <p className="input-hint">{parse(inputHint)}</p> : null}

        {isNonEmptyArray(optionData) && !isEmpty(optionID) && isNonEmptyArray(optionText) ?

          <>

            {optionData.map((optionDataItem) => {

              if (optionDataItem.active === true || isEmpty(optionDataItem.active)) {

                const filterInputValue: any[] = isNonEmptyArray(inputValue) ? inputValue.filter(value => value === formatToString(optionDataItem[optionID])) : [];

                const isChecked: boolean = isNonEmptyArray(filterInputValue) === true;

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

              } else { return null; };

            })}

          </>

          : null}

      </ul>

      {!isEmpty(inlineError) ? <div className="inline-alert inline-alert-danger">{parse(inlineError)}</div> : null}

      {isCollapsible ? <hr /> : null}

    </fieldset>
  );
};

export default CheckboxGroup;