import React from "react";
import classes from "./Input.module.scss";
import Select from "./Select";

const Input = (props) => {
  let element;
  if (props.element === "input") {
    element = <input id={props.id} />;
  } else if (props.element === "select") {
    element = <Select {...props} />;
  }

  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  );
};

export default Input;
