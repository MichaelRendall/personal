import React from "react";
import classes from "./Input.module.scss";

import { AiOutlineCloseCircle } from "react-icons/ai";

interface InputProps {
  type: string;
  id: string;
  label?: string;
  placeholder?: string;
  refValue?: React.RefObject<HTMLInputElement>;
  value?: string;
  invalid?: boolean;
  onBlur?: () => void;
  onChange?: ((event: React.FormEvent) => void) | (() => void);
}

const Input: React.FC<InputProps> = (props) => {
  const inputClasses = [classes.input, "width100"];

  if (props.invalid) {
    inputClasses.push(classes.invalid);
  }

  return (
    <div className="input__wrapper">
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <span className="input__container">
        <input
          className={inputClasses.join(" ")}
          type={props.type}
          id={props.id}
          placeholder={props.placeholder}
          autoComplete="off"
          ref={props.refValue}
          value={props.value}
          onBlur={props.onBlur}
          onChange={props.onChange}
        />
        {props.invalid && (
          <AiOutlineCloseCircle className={classes.invalid__icon} />
        )}
      </span>
    </div>
  );
};

export default Input;
