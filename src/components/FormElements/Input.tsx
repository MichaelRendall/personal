import React from "react";
import classes from "./Input.module.scss";
import NewSelect from "./NewSelect";

/* interface InputProps {
  element: string;
  id?: string;
  label: string;
  options?: {
    value: string;
    label: string;
  }[];
  placeholder?: string;
  param?: string;
} */
interface InputProps {
  id?: string;
  element: string;
  label: string;
  options: {
    value: string;
    label: string;
  }[];
  param: string;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>{props.label}</label>
      {/* {props.element === "input" && <input id={props.id} />} */}
      {props.element === "select" && <NewSelect {...props} />}
    </div>
  );
};

export default Input;
