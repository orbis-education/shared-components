import { Fragment, useState, useEffect, Dispatch, SetStateAction } from "react";
import classnames from "classnames";
import { isEmpty, isNonEmptyArray, formatToString, parse } from "shared-functions";
import RequiredFieldAsterisk from "../common/RequiredFieldAsterisk";
import { createOptionDisplayText } from "./formFunctions";
import { OptionText } from "../../types/FormTypes";

type FormRadioGroupProps = {
  id: string;
  optionData: any[];
  optionID: string;
  optionText: OptionText[];
  value: string;
  collapseList?: boolean;
  columns?: number;
  disabled?: boolean;
  hint?: string;
  inlineError?: string;
  isCollapsible?: boolean;
  isRequired?: boolean;
  legend?: string;
  srOnly?: boolean;
  startCollapsed?: boolean;
  setCollapseList?: (value: boolean) => void;
  updateValue: Dispatch<SetStateAction<string>> | ((value: string) => void);
};

const FormRadioGroup = ({
  id = "",
  optionData = [],
  optionID = "",
  optionText = [],
  value = "",
  collapseList = false,
  columns = 1,
  disabled = false,
  hint = "",
  inlineError = "",
  isCollapsible = false,
  isRequired = false,
  legend = "",
  srOnly = false,
  startCollapsed = true,
  setCollapseList,
  updateValue
}: FormRadioGroupProps) => {

  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const fieldsetClasses: string = classnames("form-group", {
    "input-disabled": disabled
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
    if (isCollapsible) {

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

    if (collapseList) {

      setIsCollapsed(true);
      setCollapseList?.(false);

    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collapseList]);


  return (
    <fieldset className={fieldsetClasses}>

      <legend className={labelClasses}>

        {isCollapsible ?

          <button type="button" className="btn btn-transparent collapse-checkboxes-button" onClick={() => setIsCollapsed(!isCollapsed)}>

            {legend}

            {isRequired ? <RequiredFieldAsterisk /> : null}

            {!isEmpty(value) ? <div className="search-filter-count">1</div> : null}

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

            {legend}

            {isRequired ? <RequiredFieldAsterisk /> : null}

          </>

        }

      </legend>

      <ul className={radioGroupClasses} style={{ columns }}>

        {!isEmpty(hint) ? <p className="input-hint">{parse(hint)}</p> : null}

        {isNonEmptyArray(optionData) && !isEmpty(optionID) && isNonEmptyArray(optionText) ?

          <>

            {optionData.map((optionDataItem) => {

              if (optionDataItem.active === true || isEmpty(optionDataItem.active)) {

                // TODO: Temporary fix to convert true/false to 1/2. -- 09/13/2023 JH
                let newvalue: string | number = value;

                if (typeof newvalue == "boolean") {

                  newvalue = newvalue === true ? 1 : 2;

                }

                return (
                  <li key={optionDataItem[optionID]}>

                    <label className={`${formatToString(optionDataItem[optionID]) === formatToString(newvalue) ? "active" : ""}`}>

                      <input
                        type="radio"
                        id={`${id}${optionDataItem[optionID]}`}
                        name={id}
                        value={optionDataItem[optionID]}
                        checked={formatToString(optionDataItem[optionID]) === formatToString(newvalue)}
                        disabled={disabled}
                        onChange={(event) => updateValue(event.target.value)}
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