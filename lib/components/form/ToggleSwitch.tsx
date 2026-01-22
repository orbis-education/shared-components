import classnames from "classnames";
import { isEmpty, parse } from "shared-functions";
import RequiredFieldAsterisk from "../common/RequiredFieldAsterisk";

type ToggleSwitchProps = {
  falseValue?: string;
  formInputID: string;
  inputDisabled?: boolean;
  inputHint?: string;
  inputValue: boolean;
  isRequired?: boolean;
  labelText: string;
  srOnly?: boolean;
  trueValue?: string;
  updateValue: (value: boolean) => void;
};

const ToggleSwitch = ({
  falseValue = "No",
  formInputID = "",
  inputDisabled = false,
  inputHint = "",
  inputValue = false,
  isRequired = false,
  labelText = "",
  srOnly = false,
  trueValue = "Yes",
  updateValue
}: ToggleSwitchProps) => {

  // * If srOnly is set to true, then the form item label is only visible to screen readers. -- 06/21/2023 MF
  const labelClasses: string = classnames("", {
    "sr-only": srOnly
  });

  const fieldsetClasses: string = classnames("form-group toggle-switch-container", {
    "input-disabled": inputDisabled
  });


  return (
    <fieldset className={fieldsetClasses}>

      <legend className={labelClasses}>

        {labelText}

        {isRequired ? <RequiredFieldAsterisk /> : null}

      </legend>

      {!isEmpty(inputHint) ? <p className="input-hint">{parse(inputHint)}</p> : null}

      <div className="toggle-switch" onClick={() => { if (!inputDisabled) { updateValue(!inputValue); } }}>

        <div className={`toggle-switch__button ${inputValue ? "active" : ""}`}></div>

        <div className="toggle-switch__text">{inputValue ? <>{trueValue}</> : <>{falseValue}</>}</div>

        <label className="sr-only">

          <input type="radio" id={`${formInputID}false`} checked={!inputValue} value="false" disabled={inputDisabled} onChange={() => { updateValue(false); }} />

          {falseValue}

        </label>

        <label className="sr-only">

          <input type="radio" id={`${formInputID}true`} checked={inputValue} value="true" disabled={inputDisabled} onChange={() => { updateValue(true); }} />

          {trueValue}

        </label>

      </div>

    </fieldset>
  );
};

export default ToggleSwitch;