import { useState, ChangeEvent, KeyboardEvent, Dispatch, SetStateAction } from "react";
import classnames from "classnames";
import { isEmpty, parse } from "shared-functions";
import RequiredFieldAsterisk from "../common/RequiredFieldAsterisk";

type FormInputProps = {
  id: string;
  label: string;
  value: string;
  autoFocus?: boolean;
  disabled?: boolean;
  hint?: string;
  inlineError?: string;
  isRequired?: boolean;
  list?: string;
  max?: number | null;
  maxLength?: number | null;
  min?: number | null;
  placeholder?: string;
  rows?: number;
  srOnly?: boolean;
  step?: number | null;
  type?: string;
  useInputAddon?: boolean;
  onKeyDown?: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
  updateValue: Dispatch<SetStateAction<any>> | ((value: any) => void);
};

const FormInput = ({
  id = "",
  label = "",
  value = "",
  autoFocus = false,
  disabled = false,
  hint = "",
  inlineError = "",
  isRequired = false,
  list = "",
  max = null,
  maxLength = null,
  min = null,
  placeholder = "",
  rows = 10,
  step = null,
  srOnly = false,
  type = "text",
  useInputAddon = false,
  onKeyDown = () => { }, // * Used an empty function instead of noFunctionAvailable so that console logs don't appear on every key down -- 09/02/2025 JH
  updateValue = () => { }
}: FormInputProps) => {

  // * For number, range, date, datetime-local, month, time and week -- 07/25/2023 JH
  // * Default value is null to prevent other input types from having the attribute. -- 07/25/2023 JH
  // * onKeyDown is used exclusively for being able to press enter to submit in a textarea. -- 04/22/2025 JH

  const [showPassword, setShowPassword] = useState<string>("password");

  // * If srOnly is set to true, then the form item label is only visible to screen readers. -- 06/21/2023 MF
  const labelClasses: string = classnames("", {
    "sr-only": srOnly,
    "input-addon": useInputAddon
  });

  const formGroupClasses: string = classnames("form-group", {
    "with-addon": useInputAddon,
    "input-error": !isEmpty(inlineError),
    "input-disabled": disabled
  });

  let numberAttributes: any = {};

  if (!isEmpty(min)) numberAttributes.min = min;
  if (!isEmpty(max)) numberAttributes.max = max;
  if (!isEmpty(step)) numberAttributes.step = step;
  if (!isEmpty(maxLength)) numberAttributes.maxLength = maxLength;


  const handleOnChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    if (type === "number") {

      if (!isEmpty(event.target.value) && !isNaN(+event.target.value)) {

        updateValue(+event.target.value);

      } else {

        updateValue(event.target.value);

      }

    } else {

      let value = event.target.value;

      // * This is used to account for initial values of inputs and pasting/typing values that exceed maxLength. -- 09/09/2025 JW
      if (!isEmpty(maxLength) && value.length > (maxLength ?? 0)) {

        value = value.slice(0, maxLength ?? undefined);

      }

      updateValue(value);

    }

  };


  return (
    <div className={formGroupClasses}>

      <label htmlFor={id} className={labelClasses}>

        {label}

        {isRequired ? <RequiredFieldAsterisk /> : null}

      </label>

      {!isEmpty(hint) ? <p className="input-hint">{parse(hint)}</p> : null}

      {type === "textarea" ?

        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          rows={rows}
          value={value}
          disabled={disabled}
          onChange={handleOnChange}
          onKeyDown={onKeyDown}
        />

        : null}

      {type === "color" ?

        <div className="color-input-container">
          <input
            type={type}
            id={id}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            onChange={handleOnChange}
            autoFocus={autoFocus}
          />
          {value}
        </div>

        : null}

      {type === "password" ?

        <div className="form-group__password-input-group">

          <input
            type={showPassword}
            id={id}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            onChange={handleOnChange}
            autoFocus={autoFocus}
          />

          <div
            className="form-group__password-input-group__password-addon"
            onMouseOver={() => setShowPassword("text")}
            onMouseOut={() => setShowPassword("password")}
            title="Hover to show password."
          >
            <i className="fas fa-eye"></i>
            <span className="sr-only">Hover to show password.</span>
          </div>

        </div>

        : null}

      {type !== "textarea" && type !== "toggle" && type !== "password" && type !== "color" ?

        <input
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={handleOnChange}
          list={list}
          autoFocus={autoFocus}
          {...numberAttributes}
        />

        : null}

      {!isEmpty(inlineError) ? <div className="inline-alert inline-alert-danger">{parse(inlineError)}</div> : null}

    </div>
  );
};

export default FormInput;