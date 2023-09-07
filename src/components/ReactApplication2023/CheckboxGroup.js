import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { noFunctionAvailable, isEmpty, getDateTime, isNonEmptyArray, formatToString } from "shared-functions";
import { parse } from "../../utilities/ApplicationFunctions";

const CheckboxGroup = (props) => {

  // * Available props: -- 06/21/2023 MF
  // * Properties: formInputID, legendText, srOnly, isRequired, inputValue, inputDisabled, inputHint -- 06/21/2023 MF
  // * Functions: updateValue -- 06/21/2023 MF

  let componentName = "CheckboxGroup";

  let formInputID = isEmpty(props) === false && isEmpty(props.formInputID) === false ? props.formInputID : "";
  let legendText = isEmpty(props) === false && isEmpty(props.legendText) === false ? props.legendText : "";
  let srOnly = isEmpty(props) === false && isEmpty(props.srOnly) === false ? props.srOnly : "";
  let isRequired = isEmpty(props) === false && isEmpty(props.isRequired) === false ? props.isRequired : false;
  let inputDisabled = isEmpty(props) === false && isEmpty(props.inputDisabled) === false ? props.inputDisabled : false;
  let isCollapsible = isEmpty(props) === false && isEmpty(props.isCollapsible) === false ? props.isCollapsible : false;

  let optionData = isEmpty(props) === false && isEmpty(props.optionData) === false ? props.optionData : null;
  let optionID = isEmpty(props) === false && isEmpty(props.optionID) === false ? props.optionID : "";
  let optionText = isEmpty(props) === false && isEmpty(props.optionText) === false ? props.optionText : [];
  let inputValue = isEmpty(props) === false && isEmpty(props.inputValue) === false ? props.inputValue : [];
  let inputHint = isEmpty(props) === false && isEmpty(props.inputHint) === false ? props.inputHint : "";

  let updateValue = isEmpty(props.updateValue) === false ? props.updateValue : noFunctionAvailable;

  const [isCollapsed, setIsCollapsed] = useState(false);

  // * If srOnly is set to true, then the form item label is only visible to screen readers. -- 06/21/2023 MF
  let labelClasses = classnames("", {
    "sr-only": srOnly === true
  });

  let checkboxGroupClasses = classnames("checkbox-group", {
    "show": isCollapsed !== true
  });


  useEffect(() => {

    if (isCollapsible === true) {

      setIsCollapsed(true);

    };

  }, [isCollapsible]);


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
    <fieldset className="form-group">

      <legend className={labelClasses}>

        {isCollapsible === true ?

          <button type="button" className="btn btn-transparent collapse-checkboxes-button" onClick={(event) => { setIsCollapsed(!isCollapsed); }}>

            {legendText}

            {isRequired === true ? <span className="required"> * <span className="sr-only">required</span></span> : null}

            {isCollapsed === true ?
              <React.Fragment><i className="fa fa-angle-down"></i><span className="sr-only">Open</span></React.Fragment>
              :
              <React.Fragment><i className="fa fa-angle-up"></i><span className="sr-only">Close</span></React.Fragment>
            }

          </button>

          :

          <React.Fragment>
            {legendText}

            {isRequired === true ? <span className="required"> * <span className="sr-only">required</span></span> : null}
          </React.Fragment>

        }

      </legend>

      <div className={checkboxGroupClasses}>

        {isEmpty(inputHint) === false ? <p className="input-hint">{parse(inputHint)}</p> : null}

        {isNonEmptyArray(optionData) === true && isEmpty(optionID) === false && isNonEmptyArray(optionText) === true ?

          <React.Fragment>

            {optionData.map((optionDataItem) => {

              if ((isEmpty(optionDataItem.active) === false && optionDataItem.active === true) || isEmpty(optionDataItem.active) === true) {

                let filterInputValue = inputValue.filter(value => value === formatToString(optionDataItem[optionID]));

                let isChecked = isNonEmptyArray(filterInputValue) === true ? true : false;

                return (
                  <label key={optionDataItem[optionID]}>

                    <input type="checkbox" id={formInputID} value={optionDataItem[optionID]} checked={isChecked} onChange={(event) => { handleOnChange(event); }} />

                    <span className="checkbox-label-text">
                      {optionText.map((optionTextItem, index) => {

                        let displayOptionText = "";

                        if (optionTextItem.type === "property") {

                          displayOptionText = optionDataItem[optionTextItem.text];

                        } else if (optionTextItem.type === "string") {

                          displayOptionText = optionTextItem.text;

                        };

                        return (
                          <React.Fragment key={index}>{displayOptionText}</React.Fragment>
                        );

                      })}
                    </span>

                  </label>
                );

              };

            })}

          </React.Fragment>

          : null}

      </div>

    </fieldset>
  );
};

export default CheckboxGroup;