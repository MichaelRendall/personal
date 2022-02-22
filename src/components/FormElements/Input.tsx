import React from "react";
import classes from "./Input.module.scss";

interface InputProps {
  type: string;
  id: string;
  label: string;
  placeholder?: string;
  refValue: React.RefObject<HTMLInputElement>;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className="input__wrapper">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        className={classes.input}
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        autoComplete="off"
        ref={props.refValue}
      />
    </div>
  );
};

export default Input;
