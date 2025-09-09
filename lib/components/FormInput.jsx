import { useState } from "react";
import classnames from "classnames";
import { isEmpty, parse, noFunctionAvailable } from "shared-functions";
import RequiredFieldAsterisk from "./RequiredFieldAsterisk";

const FormInput = ({
  autoFocus = false,
  datalistName = [],
  formInputID = "",
  inlineError = "",
  inputDisabled = false,
  inputHint = "",
  inputMax = null,
  inputMin = null,
  inputStep = null,
  inputType = "text",
  inputValue = "",
  isRequired = false,
  labelText = "",
  maxLength = "",
  onKeyDown = () => {}, // * Used an empty function instead of noFunctionAvailable so that console logs don't appear on every key down -- 09/02/2025 JH
  placeholderText = "",
  srOnly = "",
  // textareaColumns = "",
  textareaRows = 10,
  updateValue = noFunctionAvailable,
  useInputAddon = false
}) => {

  // * For number, range, date, datetime-local, month, time and week -- 07/25/2023 JH
  // * Default value is null to prevent other input types from having the attribute. -- 07/25/2023 JH
  // * onKeyDown is used exclusively for being able to press enter to submit in a textarea. -- 04/22/2025 JH

  const [showPassword, setShowPassword] = useState("password");

  // * If srOnly is set to true, then the form item label is only visible to screen readers. -- 06/21/2023 MF
  let labelClasses = classnames("", {
    "sr-only": srOnly === true,
    "input-addon": useInputAddon === true
  });

  let formGroupClasses = classnames("form-group", {
    "with-addon": useInputAddon === true,
    "input-error": isEmpty(inlineError) === false,
    "input-disabled": inputDisabled === true
  });


  const handleOnChange = (event) => {

    if (inputType === "number") {

      if (isEmpty(event.target.value) === false && isNaN(event.target.value) === false) {

        updateValue(Number.parseFloat(event.target.value));

      } else {

        updateValue(event.target.value);

      };

    } else {

      let value = event.target.value;

      // * This is used to account for initial values of inputs and pasting/typing values that exceed maxLength. -- 09/09/2025 JW
      if (!isEmpty(maxLength) && value.length > Number.parseInt(maxLength)) {

        value.slice(0, Number.parseInt(maxLength));

      }

      updateValue(value);

    };

  };


  return (
    <div className={formGroupClasses}>

      <label htmlFor={formInputID} className={labelClasses}>

        {labelText}

        {isRequired === true ? <RequiredFieldAsterisk /> : null}

      </label>

      {isEmpty(inputHint) === false ? <p className="input-hint">{parse(inputHint)}</p> : null}

      {inputType === "textarea" ?

        <textarea
          id={formInputID}
          name={formInputID}
          placeholder={placeholderText}
          rows={textareaRows}
          // cols={textareaColumns} 
          value={inputValue}
          disabled={inputDisabled}
          onChange={(event) => { handleOnChange(event); }}
          onKeyDown={(event) => { onKeyDown(event); }}
        />

        : null}

      {/* // TODO: Add other input types. -- 08/07/2023 JH */}
      {inputType !== "textarea" && inputType !== "toggle" && inputType !== "password" && inputType !== "color" ?

        <input
          type={inputType}
          id={formInputID}
          placeholder={placeholderText}
          value={inputValue}
          disabled={inputDisabled}
          onChange={(event) => { handleOnChange(event); }}
          min={inputMin}
          max={inputMax}
          step={inputStep}
          list={datalistName}
          autoFocus={autoFocus}
          maxLength={maxLength}
        />

        : null}

      {inputType === "color" ?

        <div className="color-input-container">
          <input
            type={inputType}
            id={formInputID}
            placeholder={placeholderText}
            value={inputValue}
            disabled={inputDisabled}
            onChange={(event) => { handleOnChange(event); }}
            autoFocus={autoFocus}
          />
          {inputValue}
        </div>

        : null}

      {inputType === "password" ?

        <div className="form-group__password-input-group">

          <input
            type={showPassword}
            id={formInputID}
            placeholder={placeholderText}
            value={inputValue}
            disabled={inputDisabled}
            onChange={(event) => { handleOnChange(event); }}
            // min={inputMin}
            // max={inputMax}
            // step={inputStep}
            autoFocus={autoFocus}
          />

          <div
            className="form-group__password-input-group__password-addon"
            onMouseOver={() => { setShowPassword("text"); }}
            onMouseOut={() => { setShowPassword("password"); }}
            title="Hover to show password."
          >
            <i className="fas fa-eye"></i>
            <span className="sr-only">Hover to show password.</span>
          </div>

        </div>

        : null}

      {isEmpty(inlineError) === false ? <div className="inline-alert inline-alert-danger">{parse(inlineError)}</div> : null}

    </div>
  );
};

export default FormInput;