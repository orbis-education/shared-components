import { Fragment, useState, useEffect } from "react";
import classnames from "classnames";
import { isEmpty, isNonEmptyArray, formatToString, parse } from "shared-functions";
import RequiredFieldAsterisk from "../common/RequiredFieldAsterisk";
import { createOptionDisplayText } from "./FormFunctions";
import { OptionText } from "../../types/FormTypes";

type FormRadioGroupProps = {
  collapseList?: boolean;
  formColumns?: number;
  formInputID: string;
  inlineError?: string;
  inputDisabled?: boolean;
  inputHint?: string;
  inputValue: string;
  isCollapsible?: boolean;
  isRequired?: boolean;
  legendText?: string;
  optionData: any[];
  optionID: string;
  optionText: OptionText[];
  setCollapseList?: (value: boolean) => void;
  srOnly?: boolean;
  startCollapsed?: boolean;
  updateValue: (value: string) => void;
};

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
  srOnly = false,
  startCollapsed = true,
  updateValue
}: FormRadioGroupProps) => {

  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const fieldsetClasses: string = classnames("form-group", {
    "input-disabled": inputDisabled
  });

  // * If srOnly is set to true, then the form item label is only visible to screen readers. -- 06/21/2023 MF
  const labelClasses: string = classnames("", {
    "sr-only": srOnly
  });

  const radioGroupClasses: string = classnames("radio-group", {
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


  return (
    <fieldset className={fieldsetClasses}>

      <legend className={labelClasses}>

        {isCollapsible ?

          <button type="button" className="btn btn-transparent collapse-checkboxes-button" onClick={() => { setIsCollapsed(!isCollapsed); }}>

            {legendText}

            {isRequired ? <RequiredFieldAsterisk /> : null}

            {!isEmpty(inputValue) ? <div className="search-filter-count">1</div> : null}

            {isCollapsed ?

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

            {isRequired ? <RequiredFieldAsterisk /> : null}

          </>

        }

      </legend>

      <ul className={radioGroupClasses} style={{ columns: formColumns }}>

        {!isEmpty(inputHint) ? <p className="input-hint">{parse(inputHint)}</p> : null}

        {isNonEmptyArray(optionData) && !isEmpty(optionID) && isNonEmptyArray(optionText) ?

          <>

            {optionData.map((optionDataItem) => {

              if (optionDataItem.active === true || isEmpty(optionDataItem.active)) {

                // TODO: Temporary fix to convert true/false to 1/2. -- 09/13/2023 JH
                let newInputValue: string | number = inputValue;

                if (typeof newInputValue == "boolean") {

                  newInputValue = newInputValue === true ? 1 : 2;

                }

                return (
                  <li key={optionDataItem[optionID]}>

                    <label className={`${formatToString(optionDataItem[optionID]) === formatToString(newInputValue) ? "active" : ""}`}>

                      <input
                        type="radio"
                        id={`${formInputID}${optionDataItem[optionID]}`}
                        name={formInputID}
                        value={optionDataItem[optionID]}
                        checked={formatToString(optionDataItem[optionID]) === formatToString(newInputValue)}
                        disabled={inputDisabled}
                        onChange={(event) => { updateValue(event.target.value); }}
                      />

                      {optionText.map((optionTextItem: OptionText, index: number) => (

                        <Fragment key={index}>{createOptionDisplayText(optionDataItem, optionTextItem)}</Fragment>

                      ))}

                    </label>

                  </li>
                );

              } else { return null; }

            })}

          </>

          : null}

      </ul>

      {!isEmpty(inlineError) ? <div className="inline-alert inline-alert-danger">{parse(inlineError)}</div> : null}

      {isCollapsible ? <hr /> : null}

    </fieldset>
  );
};

export default FormRadioGroup;