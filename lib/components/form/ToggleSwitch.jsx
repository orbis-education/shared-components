import classnames from "classnames";
import { isEmpty, parse } from "shared-functions";
import RequiredFieldAsterisk from "../common/RequiredFieldAsterisk";

const ToggleSwitch = ({
  falseValue = "No",
  formInputID = "",
  inputDisabled = false,
  inputHint = "",
  inputValue = "",
  isRequired = false,
  labelText = "",
  srOnly = "",
  trueValue = "Yes",
  updateValue
}) => {

  // * If srOnly is set to true, then the form item label is only visible to screen readers. -- 06/21/2023 MF
  let labelClasses = classnames("", {
    "sr-only": srOnly === true
  });

  let fieldsetClasses = classnames("form-group toggle-switch-container", {
    "input-disabled": inputDisabled === true
  });


  return (
    <fieldset className={fieldsetClasses}>

      <legend htmlFor={formInputID} className={labelClasses}>

        {labelText}

        {isRequired === true ? <RequiredFieldAsterisk /> : null}

      </legend>

      {isEmpty(inputHint) === false ? <p className="input-hint">{parse(inputHint)}</p> : null}

      <div className="toggle-switch" onClick={() => { if (!inputDisabled) { updateValue(!inputValue); } }}>

        <div className={`toggle-switch__button ${inputValue === true ? "active" : ""}`}></div>

        <div className="toggle-switch__text">{inputValue === true ? <>{trueValue}</> : <>{falseValue}</>}</div>

        <label className="sr-only">

          <input type="radio" id={`${formInputID}false`} checked={inputValue !== true} value="false" disabled={inputDisabled} onChange={(event) => { updateValue(event.target.value); }} />

          {falseValue}

        </label>

        <label className="sr-only">

          <input type="radio" id={`${formInputID}true`} checked={inputValue === true} value="true" disabled={inputDisabled} onChange={(event) => { updateValue(event.target.value); }} />

          {trueValue}

        </label>

      </div>

    </fieldset>
  );
};

export default ToggleSwitch;