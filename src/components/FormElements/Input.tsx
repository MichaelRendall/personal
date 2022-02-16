import React from "react";
//import classes from "./Input.module.scss";

interface InputProps {
  element: string;
  id?: string;
  label: string;
  placeholder?: string;
  param?: string;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className="input__wrapper">
      <label htmlFor={props.id}>{props.label}</label>
      {/* {props.element === "input" && <input id={props.id} />} */}
    </div>
  );
};

export default Input;
