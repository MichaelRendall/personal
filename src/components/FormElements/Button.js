import React from "react";
import classes from "./Button.module.scss";

const Button = (props) => {
  return (
    <button
      className={`${classes.button} ${props.large && classes.large}`}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};

export default Button;
